import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { getArticlesByLanguage, getAllArticleSlugs } from '../src/lib/blogArticles';
import { TRANSLATIONS } from '../src/i18n/translations';
import { ROUTES_BY_LANG } from '../src/i18n/routes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const DOMAIN = 'https://auditoriaseo.com.br';

interface PageMetadata {
  relPath: string; // e.g. '/blog/google-meu-negocio-nao-aparece-google-maps'
  lang: 'pt' | 'es' | 'en';
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  hreflangs?: Array<{ lang: string; href: string }>;
}

async function prerenderAllPages() {
  console.log('[PRERENDER] Iniciando pré-renderização de cabeçalhos HTML para Cloudflare Pages & WhatsApp...');

  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('[PRERENDER] Erro: dist/index.html não encontrado. Execute vite build primeiro.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  const pages: PageMetadata[] = [];

  // 1. Static Pages across PT, ES, EN
  const langs: Array<'pt' | 'es' | 'en'> = ['pt', 'es', 'en'];
  for (const lang of langs) {
    const t = TRANSLATIONS[lang];
    const routes = ROUTES_BY_LANG[lang];

    // Local SEO Page
    pages.push({
      relPath: routes.localSeo,
      lang,
      title: t.meta.localSeoTitle,
      description: t.meta.localSeoDescription,
      ogTitle: t.meta.localSeoTitle,
      ogDescription: t.meta.localSeoDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: [
        { lang: 'pt-BR', href: `${DOMAIN}/seo-local` },
        { lang: 'es', href: `${DOMAIN}/es/seo-local` },
        { lang: 'en', href: `${DOMAIN}/en/local-seo` },
        { lang: 'x-default', href: `${DOMAIN}/seo-local` },
      ],
    });

    // Google Ads Page
    pages.push({
      relPath: routes.googleAds,
      lang,
      title: t.meta.googleAdsTitle,
      description: t.meta.googleAdsDescription,
      ogTitle: t.meta.googleAdsTitle,
      ogDescription: t.meta.googleAdsDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: [
        { lang: 'pt-BR', href: `${DOMAIN}/google-ads` },
        { lang: 'es', href: `${DOMAIN}/es/google-ads` },
        { lang: 'en', href: `${DOMAIN}/en/google-ads` },
        { lang: 'x-default', href: `${DOMAIN}/google-ads` },
      ],
    });

    // Modernization Page
    pages.push({
      relPath: routes.modernization,
      lang,
      title: t.meta.modernizationTitle,
      description: t.meta.modernizationDescription,
      ogTitle: t.meta.modernizationTitle,
      ogDescription: t.meta.modernizationDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: [
        { lang: 'pt-BR', href: `${DOMAIN}/modernizacao-sites` },
        { lang: 'es', href: `${DOMAIN}/es/modernizacion-sitios` },
        { lang: 'en', href: `${DOMAIN}/en/site-modernization` },
        { lang: 'x-default', href: `${DOMAIN}/modernizacao-sites` },
      ],
    });

    // Blog List Page
    pages.push({
      relPath: routes.blog,
      lang,
      title: t.meta.blogTitle,
      description: t.meta.blogDescription,
      ogTitle: t.meta.blogTitle,
      ogDescription: t.meta.blogDescription,
      ogImage: `${DOMAIN}/og-image.png`,
      ogType: 'website',
      hreflangs: [
        { lang: 'pt-BR', href: `${DOMAIN}/blog` },
        { lang: 'es', href: `${DOMAIN}/es/blog` },
        { lang: 'en', href: `${DOMAIN}/en/blog` },
        { lang: 'x-default', href: `${DOMAIN}/blog` },
      ],
    });
  }

  // 2. All 13 Blog Articles across PT, ES, EN (39 URLs)
  const slugs = getAllArticleSlugs();
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

      pages.push({
        relPath,
        lang,
        title: articleTitle,
        description: articleDesc,
        ogTitle,
        ogDescription: ogDesc,
        ogImage: ogImageUrl,
        ogImageAlt,
        ogType: 'article',
        hreflangs: [
          { lang: 'pt-BR', href: `${DOMAIN}/blog/${slug}` },
          { lang: 'es', href: `${DOMAIN}/es/blog/${slug}` },
          { lang: 'en', href: `${DOMAIN}/en/blog/${slug}` },
          { lang: 'x-default', href: `${DOMAIN}/blog/${slug}` },
        ],
      });
    }
  }

  console.log(`[PRERENDER] Total de páginas identificadas para pré-renderização estática: ${pages.length}`);

  // Helper to set/update meta tag
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

    // Set HTML lang
    doc.documentElement.lang = p.lang === 'pt' ? 'pt-BR' : p.lang;

    // Set Title
    const titleEl = doc.querySelector('title');
    if (titleEl) {
      titleEl.textContent = p.title;
    } else {
      const newTitle = doc.createElement('title');
      newTitle.textContent = p.title;
      doc.head.appendChild(newTitle);
    }

    const canonicalUrl = `${DOMAIN}${p.relPath}`;

    // Standard Meta
    setMeta(doc, 'name', 'description', p.description);
    setMeta(doc, 'name', 'robots', 'index, follow');
    setMeta(doc, 'name', 'googlebot', 'index, follow');
    setLink(doc, 'canonical', canonicalUrl);

    // Hreflang
    if (p.hreflangs) {
      for (const h of p.hreflangs) {
        setHreflang(doc, h.lang, h.href);
      }
    }

    // Open Graph
    const ogLocale = p.lang === 'pt' ? 'pt_BR' : (p.lang === 'es' ? 'es_ES' : 'en_US');
    setMeta(doc, 'property', 'og:title', p.ogTitle || p.title);
    setMeta(doc, 'property', 'og:description', p.ogDescription || p.description);
    setMeta(doc, 'property', 'og:type', p.ogType || 'website');
    setMeta(doc, 'property', 'og:url', canonicalUrl);
    setMeta(doc, 'property', 'og:image', p.ogImage || `${DOMAIN}/og-image.png`);
    setMeta(doc, 'property', 'og:image:width', '1200');
    setMeta(doc, 'property', 'og:image:height', '630');
    setMeta(doc, 'property', 'og:image:alt', p.ogImageAlt || p.title);
    setMeta(doc, 'property', 'og:site_name', 'Auditoria SEO');
    setMeta(doc, 'property', 'og:locale', ogLocale);

    // Twitter Card
    setMeta(doc, 'name', 'twitter:card', 'summary_large_image');
    setMeta(doc, 'name', 'twitter:title', p.ogTitle || p.title);
    setMeta(doc, 'name', 'twitter:description', p.ogDescription || p.description);
    setMeta(doc, 'name', 'twitter:image', p.ogImage || `${DOMAIN}/og-image.png`);
    setMeta(doc, 'name', 'twitter:image:alt', p.ogImageAlt || p.title);

    // Schema.org BlogPosting for articles
    if (p.ogType === 'article') {
      const scriptLd = doc.createElement('script');
      scriptLd.type = 'application/ld+json';
      scriptLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.description,
        image: p.ogImage,
        inLanguage: p.lang === 'pt' ? 'pt-BR' : p.lang,
        author: {
          '@type': 'Person',
          name: 'Wesley Vieira',
          jobTitle: 'Fundador da Auditoria SEO & Especialista em Tráfego',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Auditoria SEO',
          url: 'https://auditoriaseo.com.br',
          logo: {
            '@type': 'ImageObject',
            url: 'https://auditoriaseo.com.br/icon-512.png',
          },
        },
        mainEntityOfPage: canonicalUrl,
      });
      doc.head.appendChild(scriptLd);
    }

    const renderedHtml = dom.serialize();

    // Destination directory on disk
    // e.g. dist/blog/google-meu-negocio-nao-aparece-google-maps/index.html
    const cleanRel = p.relPath.replace(/^\//, '');
    const targetDir = path.join(distDir, cleanRel);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetIndexPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetIndexPath, renderedHtml, 'utf-8');

    // Also write target.html (e.g. dist/blog/google-meu-negocio-nao-aparece-google-maps.html)
    // for CDN engines that resolve path + '.html' directly
    const targetFlatPath = path.join(distDir, `${cleanRel}.html`);
    const targetFlatParent = path.dirname(targetFlatPath);
    if (!fs.existsSync(targetFlatParent)) {
      fs.mkdirSync(targetFlatParent, { recursive: true });
    }
    fs.writeFileSync(targetFlatPath, renderedHtml, 'utf-8');
  }

  console.log(`[PRERENDER] Concluído com sucesso! ${pages.length} páginas pré-renderizadas gravadas em dist/`);
}

prerenderAllPages().catch((err) => {
  console.error('[PRERENDER] Falha fatal:', err);
  process.exit(1);
});
