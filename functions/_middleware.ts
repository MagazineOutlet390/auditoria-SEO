import { VALID_CANONICAL_PATHS } from './validPaths';

interface PagesContext {
  request: Request;
  next: () => Promise<Response>;
  env?: {
    ASSETS?: {
      fetch: (request: Request | string) => Promise<Response>;
    };
  };
}

const CANONICAL_HOST = 'auditoriaseo.com.br';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const LEGACY_SUBDOMAIN = 'solutions.auditoriaseo.com.br';

const EXACT_REDIRECTS_301: Record<string, string> = {
  '/servicos-seo': `${CANONICAL_ORIGIN}/`,
  '/servicos-seo/': `${CANONICAL_ORIGIN}/`,
  '/es/servicios-seo': `${CANONICAL_ORIGIN}/es`,
  '/es/servicios-seo/': `${CANONICAL_ORIGIN}/es`,
  '/en/seo-services': `${CANONICAL_ORIGIN}/en`,
  '/en/seo-services/': `${CANONICAL_ORIGIN}/en`,
};

const STATIC_ASSET_RE =
  /\.(js|css|mjs|map|webp|png|jpe?g|gif|svg|ico|woff2?|ttf|eot|json|xml|txt|webmanifest)$/i;

function createGoneResponse(message: string): Response {
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex, nofollow" />
  <title>410 Gone | Auditoria SEO</title>
</head>
<body>
  <h1>410 Gone</h1>
  <p>${message}</p>
</body>
</html>`;

  return new Response(html, {
    status: 410,
    statusText: 'Gone',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

function getNotFoundFallbackHtml(pathname: string): string {
  const lower = pathname.toLowerCase();
  const isEs = lower === '/es' || lower.startsWith('/es/');
  const isEn = lower === '/en' || lower.startsWith('/en/');

  const langAttr = isEs ? 'es' : isEn ? 'en' : 'pt-BR';
  const title = isEs
    ? 'Página no encontrada (404) | Auditoria SEO'
    : isEn
    ? 'Page Not Found (404) | Auditoria SEO'
    : 'Página não encontrada (404) | Auditoria SEO';
  const heading = isEs
    ? 'Página no encontrada'
    : isEn
    ? 'Page not found'
    : 'Página não encontrada';
  const description = isEs
    ? 'La URL solicitada no existe o ha sido movida permanentemente.'
    : isEn
    ? 'The requested URL does not exist or has been permanently moved.'
    : 'A URL solicitada não existe ou foi movida permanentemente.';
  const homeHref = isEs ? '/es' : isEn ? '/en' : '/';
  const homeLabel = isEs ? 'Ir al inicio' : isEn ? 'Go to homepage' : 'Ir para a página inicial';

  return `<!doctype html>
<html lang="${langAttr}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="googlebot" content="noindex, nofollow" />
  <title>${title}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; color: #202124; margin: 0; padding: 48px 24px; background: #fff; }
    main { max-width: 640px; margin: 0 auto; }
    h1 { font-size: 2rem; margin: 0 0 12px; }
    p { color: #5f6368; line-height: 1.6; margin: 0 0 24px; }
    a { display: inline-block; padding: 12px 24px; background: #1a73e8; color: #fff; text-decoration: none; border-radius: 9999px; font-weight: 600; }
  </style>
</head>
<body>
  <main>
    <p>HTTP 404</p>
    <h1>${heading}</h1>
    <p>${description}</p>
    <a href="${homeHref}">${homeLabel}</a>
  </main>
</body>
</html>`;
}

async function createNotFoundResponse(context: PagesContext, url: URL): Promise<Response> {
  const lower = url.pathname.toLowerCase();
  const templatePath =
    lower === '/es' || lower.startsWith('/es/')
      ? '/404-es.html'
      : lower === '/en' || lower.startsWith('/en/')
      ? '/404-en.html'
      : '/404.html';

  if (context.env?.ASSETS?.fetch) {
    try {
      const assetReq = new Request(new URL(templatePath, url.origin).toString());
      const assetRes = await context.env.ASSETS.fetch(assetReq);
      if (assetRes.ok) {
        const html = await assetRes.text();
        return new Response(html, {
          status: 404,
          statusText: 'Not Found',
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex, nofollow',
            'Cache-Control': 'public, max-age=0, must-revalidate',
          },
        });
      }
    } catch {
      // Fallback to static branded 404 HTML below
    }
  }

  return new Response(getNotFoundFallbackHtml(url.pathname), {
    status: 404,
    statusText: 'Not Found',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

function isObsoleteWordPressPath(pathname: string): boolean {
  const lower = pathname.toLowerCase();

  // /wp-admin and /wp-admin/*
  if (lower === '/wp-admin' || lower.startsWith('/wp-admin/')) return true;

  // /wp-includes and /wp-includes/* (includes wp-emoji-release.min.js)
  if (lower === '/wp-includes' || lower.startsWith('/wp-includes/')) return true;

  // /wp-content/* (uploads, themes, plugins, cache)
  if (lower === '/wp-content' || lower.startsWith('/wp-content/')) return true;

  // /wp-json and /wp-json/*
  if (lower === '/wp-json' || lower.startsWith('/wp-json/')) return true;

  // /wp-*.php and /xmlrpc.php
  if (/^\/wp-[a-z0-9_-]*\.php$/i.test(lower) || lower === '/xmlrpc.php') return true;

  // wp-emoji-release.min.js regardless of query string or parent folder
  if (lower.endsWith('/wp-emoji-release.min.js')) return true;

  // WordPress RSS/Atom feeds (/feed, /feed/, /comments/feed/, /*/feed/)
  if (lower === '/feed' || lower.startsWith('/feed/') || /\/feed\/?$/.test(lower)) return true;

  // WordPress category archives (/category/uncategorized/, /category/uncategorized/feed/, etc.)
  if (lower === '/category' || lower.startsWith('/category/')) return true;

  // Legacy WordPress/Elementor landing page permanently removed (no substitute)
  if (lower === '/especialista-google-ads' || lower === '/especialista-google-ads/') return true;

  return false;
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();
  const pathname = url.pathname;
  const lowerPath = pathname.toLowerCase();

  // 1. Subdomínio legado descontinuado -> 410 Gone (sem redirecionar para home)
  if (hostname === LEGACY_SUBDOMAIN) {
    return createGoneResponse(
      'Este subdomínio foi permanentemente descontinuado e não possui conteúdo ativo.'
    );
  }

  // 2. Normalização canônica de hostname (www -> apex) e HTTPS em salto único 301
  // Resolve também redirecionamento 301 explícito ou remoção de trailing slash no mesmo salto único
  if (
    hostname === `www.${CANONICAL_HOST}` ||
    (hostname === CANONICAL_HOST && url.protocol === 'http:')
  ) {
    const exactRedirect = EXACT_REDIRECTS_301[lowerPath];
    if (exactRedirect) {
      return Response.redirect(`${exactRedirect}${url.search}`, 301);
    }
    const stripped = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const finalPath = VALID_CANONICAL_PATHS.has(stripped) ? stripped : pathname;
    return Response.redirect(`${CANONICAL_ORIGIN}${finalPath}${url.search}`, 301);
  }

  // 3. URLs antigas do WordPress sem equivalência -> 410 Gone
  if (isObsoleteWordPressPath(pathname)) {
    return createGoneResponse(
      'Este recurso legado do WordPress foi removido permanentemente.'
    );
  }

  // 4. Redirecionamentos 301 explícitos de URLs reorganizadas
  const redirectTarget = EXACT_REDIRECTS_301[lowerPath];
  if (redirectTarget) {
    return Response.redirect(`${redirectTarget}${url.search}`, 301);
  }

  // 5. Remoção de trailing slash via 301 para URLs canônicas (ex: /seo-local/ -> /seo-local)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const stripped = pathname.slice(0, -1);
    if (VALID_CANONICAL_PATHS.has(stripped)) {
      const origin = url.origin;
      return Response.redirect(`${origin}${stripped}${url.search}`, 301);
    }
  }

  // 6. Rotas canônicas válidas (65 URLs) e ativos estáticos válidos -> servidos normalmente (HTTP 200)
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (
    VALID_CANONICAL_PATHS.has(normalizedPath) ||
    normalizedPath === '/sitemap.xml' ||
    normalizedPath === '/robots.txt' ||
    STATIC_ASSET_RE.test(normalizedPath)
  ) {
    return await context.next();
  }

  // 7. Qualquer outra rota inexistente -> HTTP 404 real com noindex, nofollow (sem soft 404)
  return createNotFoundResponse(context, url);
}
