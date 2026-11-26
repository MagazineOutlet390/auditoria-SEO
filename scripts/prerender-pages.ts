import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { getArticlesByLanguage } from '../src/lib/blogArticles';
import { TRANSLATIONS } from '../src/i18n/translations';
import { ROUTES_BY_LANG, getHreflangs } from '../src/i18n/routes';
import { Language } from '../src/i18n/types';
import { initSsrRegistry, renderPageHtml } from '../src/entry-server';
import {
  buildHomeJsonLd,
  buildLocalSeoJsonLd,
  buildGoogleAdsJsonLd,
  buildModernizationJsonLd,
  buildBlogListJsonLd,
} from '../src/lib/seoSchemas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const DOMAIN = 'https://auditoriaseo.com.br';

type PrerenderPageType =
  | 'home'
  | 'localSeo'
  | 'googleAds'
  | 'modernization'
  | 'blog'
  | 'blogPost'
  | 'notFound';

interface PageMetadata {
  relPath: string; // e.g. '/', '/es', '/blog/slug'
  pageType: PrerenderPageType;
  lang: Language;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  faqs?: Array<{ question: string; answer: string }>;
  hreflangs?: Array<{ lang: string; href: string }>;
  noindex?: boolean;
}

function buildPageJsonLd(
  p: PageMetadata,
  canonicalUrl: string
): Record<string, unknown> | null {
  switch (p.pageType) {
    case 'home':
      return buildHomeJsonLd(p.lang, canonicalUrl);
    case 'localSeo':
      return buildLocalSeoJsonLd(p.lang, canonicalUrl);
    case 'googleAds':
      return buildGoogleAdsJsonLd(p.lang, canonicalUrl);
    case 'modernization':
      return buildModernizationJsonLd(p.lang, canonicalUrl);
    case 'blog':
      return buildBlogListJsonLd(p.lang, canonicalUrl);
    case 'blogPost': {
      const blogPostingObj: Record<string, unknown> = {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        image: p.ogImage,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        inLanguage: p.lang === 'pt' ? 'pt-BR' : p.lang,
        ...(p.publishedAt ? { datePublished: p.publishedAt } : {}),
        ...(p.updatedAt ? { dateModified: p.updatedAt } : {}),
        author: {
          '@type': 'Person',
          name: 'Wesley Vieira',
          jobTitle: 'Fundador da Auditoria SEO & Especialista em Tráfego',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Auditoria SEO',
          url: DOMAIN,
          logo: {
            '@type': 'ImageObject',
            url: `${DOMAIN}/icon-512.png`,
          },
        },
      };

      if (p.faqs && p.faqs.length > 0) {
        return {
          '@context': 'https://schema.org',
          '@graph': [
            blogPostingObj,
            {
              '@type': 'FAQPage',
              mainEntity: p.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ],
        };
      }

      return {
        '@context': 'https://schema.org',
        ...blogPostingObj,
      };
    }
    case 'notFound':
    default:
      return null;
  }
}

async function prerenderAllPages() {
  console.log('[PRERENDER] Iniciando Static Site Generation (SSG) completo com React 19...');

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('[PRERENDER] Erro: dist/index.html não encontrado. Execute vite build primeiro.');
    process.exit(1);
  }

  // Read base template ONCE before mutating dist/index.html
  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  const pages: PageMetadata[] = [];

  // 1. Static Pages across PT, ES, EN (15 URLs including root '/')
  const langs: Language[] = ['pt', 'es', 'en'];
  for (const lang of langs) {
    const t = TRANSLATIONS[lang];
    const routes = ROUTES_BY_LANG[lang];

    // Homepages ('/', '/es', '/en')
    pages.push({
      relPath: routes.home,
      pageType: 'home',
      lang,
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      ogTitle: t.meta.homeTitle,
      ogDescription: t.meta.homeDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: getHreflangs(routes.home),
    });

    // Local SEO Page
    pages.push({
      relPath: routes.localSeo,
      pageType: 'localSeo',
      lang,
      title: t.meta.localSeoTitle,
      description: t.meta.localSeoDescription,
      ogTitle: t.meta.localSeoTitle,
      ogDescription: t.meta.localSeoDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: getHreflangs(routes.localSeo),
    });

    // Google Ads Page
    pages.push({
      relPath: routes.googleAds,
      pageType: 'googleAds',
      lang,
      title: t.meta.googleAdsTitle,
      description: t.meta.googleAdsDescription,
      ogTitle: t.meta.googleAdsTitle,
      ogDescription: t.meta.googleAdsDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: getHreflangs(routes.googleAds),
    });

    // Modernization Page
    pages.push({
      relPath: routes.modernization,
      pageType: 'modernization',
      lang,
      title: t.meta.modernizationTitle,
      description: t.meta.modernizationDescription,
      ogTitle: t.meta.modernizationTitle,
      ogDescription: t.meta.modernizationDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: getHreflangs(routes.modernization),
    });

    // Blog List Page
    pages.push({
      relPath: routes.blog,
      pageType: 'blog',
      lang,
      title: t.meta.blogTitle,
      description: t.meta.blogDescription,
      ogTitle: t.meta.blogTitle,
      ogDescription: t.meta.blogDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: getHreflangs(routes.blog),
    });
  }

  // 2. All Blog Articles across PT (18), ES (16), EN (16) -> 50 URLs
  for (const lang of langs) {
    const articles = getArticlesByLanguage(lang);
    for (const post of articles) {
      const slug = post.slug.current;
      const relPath = lang === 'pt' ? `/blog/${slug}` : `/${lang}/blog/${slug}`;
      const articleTitle = post.seoTitle || `${post.title} | Auditoria SEO`;
      const articleDesc = post.metaDescription || post.excerpt;
      const ogTitle = post.ogTitle || articleTitle;
      const ogDesc = post.ogDescription || articleDesc;
      const rawOgImage = post.ogImage || post.mainImage?.asset?.url || '/og-image.png';
      const ogImageUrl = rawOgImage.startsWith('http') ? rawOgImage : `${DOMAIN}${rawOgImage}`;
      const ogImageAlt = post.mainImage?.alt || articleTitle;

      const hasEs = getArticlesByLanguage('es').some((a) => a.slug.current === slug);
      const hasEn = getArticlesByLanguage('en').some((a) => a.slug.current === slug);
      const articleHreflangs = [
        { lang: 'pt-BR', href: `${DOMAIN}/blog/${slug}` },
        ...(hasEs ? [{ lang: 'es', href: `${DOMAIN}/es/blog/${slug}` }] : []),
        ...(hasEn ? [{ lang: 'en', href: `${DOMAIN}/en/blog/${slug}` }] : []),
        { lang: 'x-default', href: `${DOMAIN}/blog/${slug}` },
      ];

      pages.push({
        relPath,
        pageType: 'blogPost',
        lang,
        title: articleTitle,
        description: articleDesc,
        ogTitle,
        ogDescription: ogDesc,
        ogImage: ogImageUrl,
        ogImageAlt,
        ogType: 'article',
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt || post.publishedAt,
        faqs: post.faqs,
        hreflangs: articleHreflangs,
      });
    }
  }

  // 3. Branded 404 Not Found Templates (noindex) -> dist/404.html, 404-es.html, 404-en.html
  pages.push(
    {
      relPath: '/404',
      pageType: 'notFound',
      lang: 'pt',
      title: 'Página não encontrada (404) | Auditoria SEO',
      description:
        'A URL solicitada não foi encontrada ou foi movida permanentemente. Navegue para as páginas principais da Auditoria SEO.',
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      noindex: true,
    },
    {
      relPath: '/es/404',
      pageType: 'notFound',
      lang: 'es',
      title: 'Página no encontrada (404) | Auditoria SEO',
      description:
        'La URL solicitada no fue encontrada o fue movida permanentemente. Navega a las páginas principales de Auditoria SEO.',
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      noindex: true,
    },
    {
      relPath: '/en/404',
      pageType: 'notFound',
      lang: 'en',
      title: 'Page Not Found (404) | Auditoria SEO',
      description:
        'The requested URL was not found or has been permanently moved. Browse the main pages of Auditoria SEO.',
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      noindex: true,
    }
  );

  const canonicalCount = pages.filter((p) => !p.noindex).length;
  console.log(
    `[PRERENDER] Total de páginas para SSG: ${canonicalCount} rotas canônicas + 1 template 404.html`
  );

  // DOM mutation helpers
  const setMeta = (doc: Document, attrName: 'name' | 'property', attrValue: string, content: string) => {
    const existing = doc.querySelectorAll(`meta[${attrName}="${attrValue}"]`);
    if (existing.length > 0) {
      (existing[0] as Element).setAttribute('content', content);
      for (let i = 1; i < existing.length; i++) existing[i].remove();
    } else {
      const meta = doc.createElement('meta');
      meta.setAttribute(attrName, attrValue);
      meta.setAttribute('content', content);
      doc.head.appendChild(meta);
    }
  };

  const setLink = (doc: Document, rel: string, href: string) => {
    const existing = doc.querySelectorAll(`link[rel="${rel}"]`);
    if (existing.length > 0) {
      (existing[0] as Element).setAttribute('href', href);
      for (let i = 1; i < existing.length; i++) existing[i].remove();
    } else {
      const link = doc.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      doc.head.appendChild(link);
    }
  };

  const setHreflang = (doc: Document, hreflang: string, href: string) => {
    const existing = doc.querySelectorAll(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (existing.length > 0) {
      (existing[0] as Element).setAttribute('href', href);
      for (let i = 1; i < existing.length; i++) existing[i].remove();
    } else {
      const link = doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      doc.head.appendChild(link);
    }
  };

  for (const p of pages) {
    const dom = new JSDOM(baseHtml, { url: `${DOMAIN}${p.relPath}` });
    const doc = dom.window.document;

    // Initialize SSR page & blog registries and DOMPurify against JSDOM window
    initSsrRegistry(dom.window);

    // 1. HTML lang
    doc.documentElement.lang = p.lang === 'pt' ? 'pt-BR' : p.lang;

    // 2. Single Title
    const existingTitles = doc.querySelectorAll('title');
    if (existingTitles.length > 0) {
      existingTitles[0].textContent = p.title;
      for (let i = 1; i < existingTitles.length; i++) existingTitles[i].remove();
    } else {
      const newTitle = doc.createElement('title');
      newTitle.textContent = p.title;
      doc.head.appendChild(newTitle);
    }

    const canonicalUrl = `${DOMAIN}${p.relPath === '/' ? '' : p.relPath}`;

    // 3. Standard Meta & Robots
    setMeta(doc, 'name', 'description', p.description);
    setMeta(doc, 'name', 'robots', p.noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta(doc, 'name', 'googlebot', p.noindex ? 'noindex, nofollow' : 'index, follow');

    if (p.noindex) {
      doc.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
      doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    } else {
      setLink(doc, 'canonical', canonicalUrl);
      doc.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
      if (p.hreflangs) {
        for (const h of p.hreflangs) {
          setHreflang(doc, h.lang, h.href);
        }
      }
    }

    // 4. Open Graph
    const ogLocale = p.lang === 'pt' ? 'pt_BR' : p.lang === 'es' ? 'es_ES' : 'en_US';
    const imageMimeType = p.ogImage?.endsWith('.png')
      ? 'image/png'
      : p.ogImage?.endsWith('.webp')
      ? 'image/webp'
      : 'image/jpeg';
    setMeta(doc, 'property', 'og:type', p.ogType || 'website');
    setMeta(doc, 'property', 'og:url', canonicalUrl);
    setMeta(doc, 'property', 'og:title', p.ogTitle || p.title);
    setMeta(doc, 'property', 'og:description', p.ogDescription || p.description);
    setMeta(doc, 'property', 'og:image', p.ogImage || `${DOMAIN}/og-image.png`);
    setMeta(doc, 'property', 'og:image:secure_url', p.ogImage || `${DOMAIN}/og-image.png`);
    setMeta(doc, 'property', 'og:image:type', imageMimeType);
    setMeta(doc, 'property', 'og:image:width', '1200');
    setMeta(doc, 'property', 'og:image:height', '630');
    setMeta(doc, 'property', 'og:image:alt', p.ogImageAlt || p.title);
    setMeta(doc, 'property', 'og:site_name', 'Auditoria SEO');
    setMeta(doc, 'property', 'og:locale', ogLocale);

    if (p.ogType === 'article') {
      if (p.publishedAt) setMeta(doc, 'property', 'article:published_time', p.publishedAt);
      if (p.updatedAt) setMeta(doc, 'property', 'article:modified_time', p.updatedAt);
      setMeta(doc, 'name', 'author', 'Wesley Vieira');
      setMeta(doc, 'property', 'article:author', 'Wesley Vieira');
      setMeta(doc, 'property', 'article:publisher', DOMAIN);
    } else {
      doc
        .querySelectorAll(
          'meta[property="article:published_time"], meta[property="article:modified_time"], meta[property="article:author"], meta[property="article:publisher"]'
        )
        .forEach((el) => el.remove());
    }

    // 5. Twitter Card
    setMeta(doc, 'name', 'twitter:card', 'summary_large_image');
    setMeta(doc, 'name', 'twitter:title', p.ogTitle || p.title);
    setMeta(doc, 'name', 'twitter:description', p.ogDescription || p.description);
    setMeta(doc, 'name', 'twitter:image', p.ogImage || `${DOMAIN}/og-image.png`);
    setMeta(doc, 'name', 'twitter:image:alt', p.ogImageAlt || p.title);

    // 6. Schema.org JSON-LD: strictly one canonical script in <head> (none on 404)
    doc.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
    const jsonLd = buildPageJsonLd(p, canonicalUrl);
    if (jsonLd) {
      const scriptLd = doc.createElement('script');
      scriptLd.type = 'application/ld+json';
      scriptLd.textContent = JSON.stringify(jsonLd);
      doc.head.appendChild(scriptLd);
    }

    // 7. Full React SSR render into <div id="root">
    const appHtml = renderPageHtml(p.relPath);
    const rootEl = doc.getElementById('root');
    if (!rootEl) {
      throw new Error(`[PRERENDER] Elemento #root não encontrado para ${p.relPath}`);
    }
    rootEl.innerHTML = appHtml;

    const renderedHtml = dom.serialize();

    // 8. Write static HTML output to dist/
    if (p.pageType === 'notFound') {
      const notFoundFile =
        p.lang === 'es' ? '404-es.html' : p.lang === 'en' ? '404-en.html' : '404.html';
      fs.writeFileSync(path.join(distDir, notFoundFile), renderedHtml, 'utf-8');
      continue;
    }

    const cleanRel = p.relPath.replace(/^\//, '');
    const targetDir = path.join(distDir, cleanRel);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), renderedHtml, 'utf-8');

    // Never write dist/.html when cleanRel === '' (root '/')
    if (cleanRel !== '') {
      const targetFlatPath = path.join(distDir, `${cleanRel}.html`);
      const targetFlatParent = path.dirname(targetFlatPath);
      if (!fs.existsSync(targetFlatParent)) {
        fs.mkdirSync(targetFlatParent, { recursive: true });
      }
      fs.writeFileSync(targetFlatPath, renderedHtml, 'utf-8');
    }
  }

  console.log(
    `[PRERENDER] Concluído com sucesso! ${canonicalCount} páginas SSG + dist/404.html gravadas em dist/`
  );
}

prerenderAllPages().catch((err) => {
  console.error('[PRERENDER] Falha fatal:', err);
  process.exit(1);
});
