interface Env {
  // WhatsApp Cloud API (Official Meta Graph API)
  WHATSAPP_ACCESS_TOKEN?: string;
  WHATSAPP_PHONE_NUMBER_ID?: string;
  WHATSAPP_TO_NUMBER?: string;
  WHATSAPP_TEMPLATE_NAME?: string;
  WHATSAPP_TEMPLATE_LANG?: string;
  // Automatic Email Relay via Resend
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  US_LEAD_TO_EMAIL?: string;
  // Optional HTTPS Webhook Relay (Make / Zapier / n8n / CRM)
  US_LEAD_WEBHOOK_URL?: string;
  US_LEAD_WEBHOOK_SECRET?: string;
}

interface PagesFunctionContext {
  request: Request;
  env: Env;
}

const DEFAULT_TO_EMAIL = 'comercial@auditoriaseo.com.br';
const DEFAULT_FROM_EMAIL = 'Auditoria SEO <onboarding@resend.dev>';
const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:\s@"]+@[^\s@<>()[\]\\,;:\s@"]+\.[^\s@]{2,}$/;

// In-isolate fallback rate limiter (complemented by Cloudflare Cache API when available)
const memoryRateBuckets = new Map<string, number[]>();

function jsonResponse(
  payload: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>
): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      ...extraHeaders,
    },
  });
}

function cleanSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen);
}

function cleanMultiline(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    .trim()
    .slice(0, maxLen);
}

function normalizeWebsiteUrl(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed || trimmed.length > 300) return null;
  if (/^(javascript|data|vbscript|file):/i.test(trimmed)) return null;

  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(withScheme);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return null;
    }
    if (!parsed.hostname || !parsed.hostname.includes('.')) {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

function normalizeSourceUrl(raw: unknown, fallbackOrigin: string, pagePath: string): string {
  if (typeof raw === 'string' && raw.trim()) {
    try {
      const parsed = new URL(raw.trim());
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        return parsed.toString().slice(0, 500);
      }
    } catch {
      // Fallback below
    }
  }
  return `${fallbackOrigin}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`.slice(0, 500);
}

function isAllowedWebhookUrl(rawUrl: string): string | null {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== 'https:') return null;
    const host = parsed.hostname.toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host === '[::1]' ||
      host.endsWith('.local') ||
      /^10\./.test(host) ||
      /^192\.168\./.test(host) ||
      /^169\.254\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
    ) {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
}

function isAllowedRequestOrigin(request: Request, url: URL): boolean {
  const originHeader = request.headers.get('Origin');
  if (!originHeader) return true; // Non-browser or same-origin callers omitting Origin
  try {
    const originUrl = new URL(originHeader);
    const host = originUrl.hostname.toLowerCase();
    if (host === url.hostname.toLowerCase()) return true;
    if (host === 'auditoriaseo.com.br' || host === 'www.auditoriaseo.com.br') return true;
    if (host.endsWith('.pages.dev') || host.endsWith('.run.app')) return true;
    if (host === 'localhost' || host === '127.0.0.1') return true;
    return false;
  } catch {
    return false;
  }
}

function getClientIdentifier(request: Request): string {
  const cfIp = request.headers.get('CF-Connecting-IP')?.trim();
  if (cfIp) return cfIp.slice(0, 64);
  const forwarded = request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim();
  if (forwarded) return forwarded.slice(0, 64);
  return 'unknown-client';
}

async function checkRateLimit(clientKey: string): Promise<{ limited: boolean; retryAfterSec: number }> {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  // Prune memory map periodically to avoid unbounded growth
  if (memoryRateBuckets.size > 1000) {
    for (const [k, timestamps] of memoryRateBuckets.entries()) {
      const fresh = timestamps.filter((t) => t > cutoff);
      if (fresh.length === 0) memoryRateBuckets.delete(k);
      else memoryRateBuckets.set(k, fresh);
    }
  }

  const existing = (memoryRateBuckets.get(clientKey) || []).filter((t) => t > cutoff);
  if (existing.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = existing[0] || now;
    const retryAfterSec = Math.max(1, Math.ceil((oldest + RATE_LIMIT_WINDOW_MS - now) / 1000));
    return { limited: true, retryAfterSec };
  }
  existing.push(now);
  memoryRateBuckets.set(clientKey, existing);

  // Also check Cloudflare Edge Cache API bucket when running inside Cloudflare Pages
  try {
    const cacheStorage = (globalThis as unknown as { caches?: { default?: Cache } }).caches;
    const edgeCache = cacheStorage?.default;
    if (edgeCache) {
      const bucketWindow = Math.floor(now / RATE_LIMIT_WINDOW_MS);
      const cacheKey = new Request(
        `https://rate-limit.internal/us-lead/${encodeURIComponent(clientKey)}/${bucketWindow}`
      );
      const cached = await edgeCache.match(cacheKey);
      let count = 0;
      if (cached) {
        const parsedCount = Number(await cached.text());
        if (Number.isFinite(parsedCount)) count = parsedCount;
      }
      if (count >= RATE_LIMIT_MAX_REQUESTS) {
        return { limited: true, retryAfterSec: 60 };
      }
      await edgeCache.put(
        cacheKey,
        new Response(String(count + 1), {
          headers: { 'Cache-Control': `max-age=${Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)}` },
        })
      );
    }
  } catch {
    // Edge Cache optional outside Cloudflare runtime
  }

  return { limited: false, retryAfterSec: 0 };
}

function formatWhatsAppBody(lead: {
  name: string;
  company: string;
  email: string;
  website: string;
  service: string;
  message: string;
  lang: string;
  submittedAt: string;
  sourceUrl: string;
}): string {
  return [
    'New Lead — Auditoria SEO (US Market)',
    `Date/Time (UTC): ${lead.submittedAt}`,
    `Language: ${lead.lang.toUpperCase()}`,
    `Source URL: ${lead.sourceUrl}`,
    `Full Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Business Email: ${lead.email}`,
    `Website: ${lead.website}`,
    `Service: ${lead.service}`,
    '',
    `Message: ${lead.message}`,
  ]
    .join('\n')
    .slice(0, 3800);
}

async function sendViaWhatsAppCloudApi(
  env: Env,
  lead: {
    name: string;
    company: string;
    email: string;
    website: string;
    service: string;
    message: string;
    lang: string;
    submittedAt: string;
    sourceUrl: string;
  }
): Promise<{ configured: boolean; ok: boolean }> {
  const token = env.WHATSAPP_ACCESS_TOKEN?.trim() || '';
  const phoneNumberId = env.WHATSAPP_PHONE_NUMBER_ID?.trim() || '';
  const recipientRaw = env.WHATSAPP_TO_NUMBER?.trim() || '';
  const recipientDigits = recipientRaw.replace(/\D/g, '');

  if (!token || !phoneNumberId || recipientDigits.length < 10) {
    return { configured: false, ok: false };
  }

  if (!/^\d{5,30}$/.test(phoneNumberId)) {
    return { configured: false, ok: false };
  }

  const templateName = env.WHATSAPP_TEMPLATE_NAME?.trim() || '';
  const templateLang = env.WHATSAPP_TEMPLATE_LANG?.trim() || 'en_US';
  const endpoint = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;

  const payload = templateName
    ? {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: recipientDigits,
        type: 'template',
        template: {
          name: templateName,
          language: { code: templateLang },
          components: [
            {
              type: 'body',
              parameters: [
                { type: 'text', text: lead.name.slice(0, 100) },
                { type: 'text', text: lead.company.slice(0, 100) },
                { type: 'text', text: lead.email.slice(0, 120) },
                { type: 'text', text: lead.website.slice(0, 200) },
                { type: 'text', text: lead.service.slice(0, 120) },
                { type: 'text', text: lead.message.replace(/\n+/g, ' ').slice(0, 500) },
              ],
            },
          ],
        },
      }
    : {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: recipientDigits,
        type: 'text',
        text: {
          preview_url: false,
          body: formatWhatsAppBody(lead),
        },
      };

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return { configured: true, ok: res.ok };
  } catch {
    return { configured: true, ok: false };
  }
}

export async function onRequest(context: PagesFunctionContext): Promise<Response> {
  const { request, env } = context;
  const reqUrl = new URL(request.url);

  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' }, 405);
  }

  if (!isAllowedRequestOrigin(request, reqUrl)) {
    return jsonResponse({ ok: false, code: 'FORBIDDEN_ORIGIN', message: 'Origin not allowed.' }, 403);
  }

  const contentType = (request.headers.get('Content-Type') || '').toLowerCase();
  if (!contentType.includes('application/json')) {
    return jsonResponse(
      { ok: false, code: 'UNSUPPORTED_MEDIA_TYPE', message: 'Expected application/json.' },
      415
    );
  }

  const contentLengthHeader = request.headers.get('Content-Length');
  if (contentLengthHeader && Number(contentLengthHeader) > MAX_BODY_BYTES) {
    return jsonResponse(
      { ok: false, code: 'PAYLOAD_TOO_LARGE', message: 'Request payload too large.' },
      413
    );
  }

  let bodyText: string;
  try {
    bodyText = await request.text();
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_BODY', message: 'Could not read body.' }, 400);
  }

  if (bodyText.length > MAX_BODY_BYTES) {
    return jsonResponse(
      { ok: false, code: 'PAYLOAD_TOO_LARGE', message: 'Request payload too large.' },
      413
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(bodyText);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return jsonResponse({ ok: false, code: 'INVALID_JSON', message: 'Invalid JSON payload.' }, 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return jsonResponse({ ok: false, code: 'INVALID_JSON', message: 'Invalid JSON payload.' }, 400);
  }

  // Anti-spam honeypot & minimum human dwell check
  const honeypot = cleanSingleLine(body.company_website_fax, 120);
  if (honeypot.length > 0) {
    return jsonResponse({ ok: false, code: 'SPAM_REJECTED', message: 'Invalid submission.' }, 400);
  }

  const formRenderedAt = typeof body.formRenderedAt === 'number' ? body.formRenderedAt : 0;
  if (formRenderedAt > 0 && Date.now() - formRenderedAt < 1200) {
    return jsonResponse({ ok: false, code: 'SPAM_REJECTED', message: 'Submitted too quickly.' }, 400);
  }

  const clientId = getClientIdentifier(request);
  const rateCheck = await checkRateLimit(clientId);
  if (rateCheck.limited) {
    return jsonResponse(
      {
        ok: false,
        code: 'RATE_LIMITED',
        message: 'Too many requests. Please wait a few minutes before submitting again.',
      },
      429,
      { 'Retry-After': String(rateCheck.retryAfterSec) }
    );
  }

  const name = cleanSingleLine(body.name, 120);
  const company = cleanSingleLine(body.company, 150);
  const email = cleanSingleLine(body.email, 180).toLowerCase();
  const website = normalizeWebsiteUrl(body.website);
  const service = cleanSingleLine(body.service, 150);
  const message = cleanMultiline(body.message, 3000);
  const langRaw = cleanSingleLine(body.lang, 10);
  const lang = langRaw === 'pt' || langRaw === 'es' || langRaw === 'en' ? langRaw : 'en';
  const pagePath = cleanSingleLine(body.pagePath, 160) || '/en/seo-agency-usa';
  const sourceUrl = normalizeSourceUrl(
    body.sourceUrl || request.headers.get('Referer'),
    reqUrl.origin,
    pagePath
  );

  if (name.length < 2 || /https?:\/\//i.test(name)) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'name' }, 400);
  }
  if (company.length < 2 || /https?:\/\//i.test(company)) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'company' }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'email' }, 400);
  }
  if (!website) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'website' }, 400);
  }
  if (service.length < 2) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'service' }, 400);
  }
  if (message.length < 15) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'message' }, 400);
  }

  const utmInput =
    body.utm && typeof body.utm === 'object' && !Array.isArray(body.utm)
      ? (body.utm as Record<string, unknown>)
      : {};
  const utm = {
    utm_source: cleanSingleLine(utmInput.utm_source, 120) || undefined,
    utm_medium: cleanSingleLine(utmInput.utm_medium, 120) || undefined,
    utm_campaign: cleanSingleLine(utmInput.utm_campaign, 120) || undefined,
    utm_content: cleanSingleLine(utmInput.utm_content, 120) || undefined,
    utm_term: cleanSingleLine(utmInput.utm_term, 120) || undefined,
  };

  const toEmail =
    env.US_LEAD_TO_EMAIL && EMAIL_RE.test(env.US_LEAD_TO_EMAIL.trim())
      ? env.US_LEAD_TO_EMAIL.trim()
      : DEFAULT_TO_EMAIL;
  const fromEmail = cleanSingleLine(env.RESEND_FROM_EMAIL, 160) || DEFAULT_FROM_EMAIL;

  const resendApiKey = env.RESEND_API_KEY?.trim() || '';
  const webhookRaw = env.US_LEAD_WEBHOOK_URL?.trim() || '';
  const safeWebhookUrl = webhookRaw ? isAllowedWebhookUrl(webhookRaw) : null;
  const whatsappConfigured = Boolean(
    env.WHATSAPP_ACCESS_TOKEN?.trim() &&
      env.WHATSAPP_PHONE_NUMBER_ID?.trim() &&
      env.WHATSAPP_TO_NUMBER?.trim()
  );

  if (!whatsappConfigured && !safeWebhookUrl && !resendApiKey) {
    return jsonResponse(
      {
        ok: false,
        code: 'DELIVERY_NOT_CONFIGURED',
        message: 'No authorized lead delivery channel is configured on the server.',
      },
      503
    );
  }

  const submittedAt = new Date().toISOString();
  const leadPayload = {
    name,
    company,
    email,
    website,
    service,
    message,
    lang,
    pagePath,
    sourceUrl,
    submittedAt,
  };

  const deliveredChannels: string[] = [];
  let attemptedChannels = 0;

  // 1. Official WhatsApp Business Cloud API (preferred when configured)
  if (whatsappConfigured) {
    attemptedChannels += 1;
    const waResult = await sendViaWhatsAppCloudApi(env, leadPayload);
    if (waResult.ok) {
      deliveredChannels.push('whatsapp');
    }
  }

  // 2. HTTPS Automation Webhook (Make / Zapier / n8n / WhatsApp or CRM bridge)
  if (safeWebhookUrl) {
    attemptedChannels += 1;
    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      const webhookSecret = env.US_LEAD_WEBHOOK_SECRET?.trim();
      if (webhookSecret) {
        headers['X-Webhook-Secret'] = webhookSecret;
      }

      const webhookRes = await fetch(safeWebhookUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          source: 'auditoriaseo-usa-landing',
          submittedAt,
          lang,
          pagePath,
          sourceUrl,
          toEmail,
          lead: { name, company, email, website, service, message },
          utm,
        }),
      });
      if (webhookRes.ok) {
        deliveredChannels.push('webhook');
      }
    } catch {
      // Handled via deliveredChannels check below
    }
  }

  // 3. Automatic Email Relay via Resend HTTP API
  if (resendApiKey) {
    attemptedChannels += 1;
    const textBody = [
      'New US SEO Consultation Request',
      `Submitted At (UTC): ${submittedAt}`,
      `Page Language: ${lang}`,
      `Source URL: ${sourceUrl}`,
      `Page Path: ${pagePath}`,
      `Full Name: ${name}`,
      `Company: ${company}`,
      `Business Email: ${email}`,
      `Website URL: ${website}`,
      `Service of Interest: ${service}`,
      '',
      'Message:',
      message,
      '',
      `UTM Attribution: ${JSON.stringify(utm)}`,
    ].join('\n');

    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[US SEO Lead] ${company} — ${service}`,
          text: textBody,
        }),
      });
      if (resendRes.ok) {
        deliveredChannels.push('resend');
      }
    } catch {
      // Handled via deliveredChannels check below
    }
  }

  if (deliveredChannels.length === 0) {
    return jsonResponse(
      {
        ok: false,
        code: attemptedChannels > 0 ? 'UPSTREAM_DELIVERY_FAILED' : 'DELIVERY_NOT_CONFIGURED',
        message: 'Could not deliver lead to any configured channel.',
      },
      502
    );
  }

  return jsonResponse(
    {
      ok: true,
      channels: deliveredChannels,
      submittedAt,
    },
    200
  );
}
