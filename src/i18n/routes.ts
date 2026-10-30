import { Language, RouteMapping } from './types';

export const ROUTES_BY_LANG: Record<Language, RouteMapping> = {
  pt: {
    home: '/',
    seoServices: '/servicos-seo',
    googleAds: '/google-ads',
    modernization: '/modernizacao-sites',
    blog: '/blog',
    blogPost: '/blog/:slug',
  },
  es: {
    home: '/es',
    seoServices: '/es/servicios-seo',
    googleAds: '/es/google-ads',
    modernization: '/es/modernizacion-sitios',
    blog: '/es/blog',
    blogPost: '/es/blog/:slug',
  },
  en: {
    home: '/en',
    seoServices: '/en/seo-services',
    googleAds: '/en/google-ads',
    modernization: '/en/site-modernization',
    blog: '/en/blog',
    blogPost: '/en/blog/:slug',
  },
};

/**
 * Detect language from current pathname
 */
export function getLanguageFromPathname(pathname: string): Language {
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    return 'es';
  }
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return 'en';
  }
  return 'pt';
}

/**
 * Find route key (e.g. 'home', 'seoServices', etc.) for a given pathname
 */
export function getRouteKeyFromPathname(pathname: string): keyof RouteMapping {
  // Normalize trailing slash (unless root)
  const clean = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (clean === '' || clean === '/' || clean === '/es' || clean === '/en') {
    return 'home';
  }

  if (
    clean === '/servicos-seo' ||
    clean === '/es/servicios-seo' ||
    clean === '/en/seo-services'
  ) {
    return 'seoServices';
  }

  if (
    clean === '/google-ads' ||
    clean === '/es/google-ads' ||
    clean === '/en/google-ads'
  ) {
    return 'googleAds';
  }

  if (
    clean === '/modernizacao-sites' ||
    clean === '/es/modernizacion-sitios' ||
    clean === '/en/site-modernization'
  ) {
    return 'modernization';
  }

  if (clean === '/blog' || clean === '/es/blog' || clean === '/en/blog') {
    return 'blog';
  }

  if (
    clean.startsWith('/blog/') ||
    clean.startsWith('/es/blog/') ||
    clean.startsWith('/en/blog/')
  ) {
    return 'blogPost';
  }

  return 'home';
}

/**
 * Given a current pathname and a target language, compute the equivalent target pathname
 */
export function getEquivalentPath(currentPathname: string, targetLang: Language): string {
  const currentLang = getLanguageFromPathname(currentPathname);
  if (currentLang === targetLang) {
    return currentPathname;
  }

  const routeKey = getRouteKeyFromPathname(currentPathname);

  // If blog post, map or keep slug
  if (routeKey === 'blogPost') {
    const segments = currentPathname.split('/').filter(Boolean);
    const slug = segments[segments.length - 1];
    if (targetLang === 'pt') return `/blog/${slug}`;
    if (targetLang === 'es') return `/es/blog/${slug}`;
    if (targetLang === 'en') return `/en/blog/${slug}`;
  }

  return ROUTES_BY_LANG[targetLang][routeKey];
}

/**
 * Generate hreflang alternates array for the current pathname
 */
export function getHreflangs(currentPathname: string, domain: string = 'https://auditoriaseo.com.br'): Array<{ lang: string; href: string }> {
  const routeKey = getRouteKeyFromPathname(currentPathname);

  if (routeKey === 'blogPost') {
    const segments = currentPathname.split('/').filter(Boolean);
    const slug = segments[segments.length - 1];
    return [
      { lang: 'pt-BR', href: `${domain}/blog/${slug}` },
      { lang: 'es', href: `${domain}/es/blog/${slug}` },
      { lang: 'en', href: `${domain}/en/blog/${slug}` },
      { lang: 'x-default', href: `${domain}/blog/${slug}` },
    ];
  }

  return [
    { lang: 'pt-BR', href: `${domain}${ROUTES_BY_LANG.pt[routeKey] === '/' ? '' : ROUTES_BY_LANG.pt[routeKey]}` },
    { lang: 'es', href: `${domain}${ROUTES_BY_LANG.es[routeKey]}` },
    { lang: 'en', href: `${domain}${ROUTES_BY_LANG.en[routeKey]}` },
    { lang: 'x-default', href: `${domain}${ROUTES_BY_LANG.pt[routeKey] === '/' ? '' : ROUTES_BY_LANG.pt[routeKey]}` },
  ];
}
