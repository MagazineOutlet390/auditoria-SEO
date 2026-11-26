interface PagesContext {
  request: Request;
  next: () => Promise<Response>;
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
  // (Fallback na camada Pages caso chegue sem passar por Cloudflare Redirect Rules; ignora previews *.pages.dev/localhost)
  if (
    hostname === `www.${CANONICAL_HOST}` ||
    (hostname === CANONICAL_HOST && url.protocol === 'http:')
  ) {
    const targetUrl = `${CANONICAL_ORIGIN}${pathname}${url.search}`;
    return Response.redirect(targetUrl, 301);
  }

  // 3. URLs antigas do WordPress sem equivalência -> 410 Gone
  if (isObsoleteWordPressPath(pathname)) {
    return createGoneResponse(
      'Este recurso legado do WordPress foi removido permanentemente.'
    );
  }

  // 4. Redirecionamentos 301 explícitos de URLs reorganizadas
  // (Espelhados aqui porque rotas interceptadas por Pages Functions ignoram _redirects)
  const redirectTarget = EXACT_REDIRECTS_301[lowerPath];
  if (redirectTarget) {
    return Response.redirect(`${redirectTarget}${url.search}`, 301);
  }

  // 5. Demais rotas seguem normalmente para os arquivos pré-renderizados / SPA
  return await context.next();
}
