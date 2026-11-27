interface Env {
  RESEND_API_KEY?: string;
  US_LEAD_WEBHOOK_URL?: string;
  US_LEAD_TO_EMAIL?: string;
}

interface PagesFunctionContext {
  request: Request;
  env: Env;
}

const DEFAULT_TO_EMAIL = 'comercial@auditoriaseo.com.br';
const MAX_BODY_BYTES = 16_384;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:\s@"]+@[^\s@<>()[\]\\,;:\s@"]+\.[^\s@]{2,}$/;

function jsonResponse(payload: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

function cleanSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen);
}

function cleanMultiline(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '').trim().slice(0, maxLen);
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

export async function onRequest(context: PagesFunctionContext): Promise<Response> {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return jsonResponse(
      { ok: false, code: 'METHOD_NOT_ALLOWED', message: 'Use POST.' },
      405
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

  const name = cleanSingleLine(body.name, 120);
  const company = cleanSingleLine(body.company, 150);
  const email = cleanSingleLine(body.email, 180).toLowerCase();
  const website = normalizeWebsiteUrl(body.website);
  const service = cleanSingleLine(body.service, 150);
  const message = cleanMultiline(body.message, 3000);
  const langRaw = cleanSingleLine(body.lang, 10);
  const lang = langRaw === 'pt' || langRaw === 'es' || langRaw === 'en' ? langRaw : 'en';
  const pagePath = cleanSingleLine(body.pagePath, 160) || '/en/seo-agency-usa';

  if (name.length < 2) {
    return jsonResponse({ ok: false, code: 'VALIDATION_ERROR', field: 'name' }, 400);
  }
  if (company.length < 2) {
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

  const resendApiKey = env.RESEND_API_KEY?.trim() || '';
  const webhookUrl = env.US_LEAD_WEBHOOK_URL?.trim() || '';

  if (!resendApiKey && !webhookUrl) {
    return jsonResponse(
      {
        ok: false,
        code: 'DELIVERY_NOT_CONFIGURED',
        fallbackEmail: toEmail,
        message: 'Lead delivery backend secret is not configured in environment.',
      },
      503
    );
  }

  const submittedAt = new Date().toISOString();

  // Option A: Webhook relay (e.g. Make / Zapier / n8n / Slack / CRM)
  if (webhookUrl) {
    let parsedWebhook: URL;
    try {
      parsedWebhook = new URL(webhookUrl);
      if (parsedWebhook.protocol !== 'https:') {
        throw new Error('Webhook must use HTTPS');
      }
    } catch {
      return jsonResponse(
        {
          ok: false,
          code: 'DELIVERY_NOT_CONFIGURED',
          fallbackEmail: toEmail,
          message: 'Configured webhook URL is invalid.',
        },
        503
      );
    }

    const webhookRes = await fetch(parsedWebhook.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'auditoriaseo-usa-landing',
        submittedAt,
        lang,
        pagePath,
        toEmail,
        lead: { name, company, email, website, service, message },
        utm,
      }),
    });

    if (!webhookRes.ok) {
      return jsonResponse(
        {
          ok: false,
          code: 'UPSTREAM_DELIVERY_FAILED',
          fallbackEmail: toEmail,
          message: 'Upstream webhook delivery failed.',
        },
        502
      );
    }

    return jsonResponse({ ok: true, channel: 'webhook' }, 200);
  }

  // Option B: Resend HTTP API
  const textBody = [
    'New US SEO Consultation Request',
    `Submitted At: ${submittedAt}`,
    `Language: ${lang}`,
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

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Auditoria SEO <onboarding@resend.dev>',
      to: [toEmail],
      reply_to: email,
      subject: `[US SEO Lead] ${company} — ${service}`,
      text: textBody,
    }),
  });

  if (!resendRes.ok) {
    return jsonResponse(
      {
        ok: false,
        code: 'UPSTREAM_DELIVERY_FAILED',
        fallbackEmail: toEmail,
        message: 'Email relay service rejected request.',
      },
      502
    );
  }

  return jsonResponse({ ok: true, channel: 'resend' }, 200);
}
