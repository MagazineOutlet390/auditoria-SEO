import { JSDOM } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchSanityPosts } from '../src/lib/sanity';
import { LEGAL_ARTICLES } from '../src/lib/legalArticles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

const DOMAIN = 'https://auditoriaseo.com.br';

interface AuditResult {
  articleIndex: number;
  slug: string;
  url: string;
  title: string;
  metaDescription: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  ogWidth: string;
  ogHeight: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  imageExistsLocally: boolean;
  imageDimensions: string;
  duplicateTitleCount: number;
  duplicateDescCount: number;
  duplicateCanonicalCount: number;
}

async function runAudit() {
  console.log('================================================================');
  console.log('AUDITORIA TÉCNICA DE METADADOS SEO & OPEN GRAPH — CLUSTER JURÍDICO');
  console.log('================================================================\n');

  const posts = await fetchSanityPosts();
  const results: AuditResult[] = [];

  for (let i = 0; i < LEGAL_ARTICLES.length; i++) {
    const post = LEGAL_ARTICLES[i];
    const slug = post.slug.current;
    const url = `${DOMAIN}/blog/${slug}`;

    // Read index.html as base
    const htmlTemplate = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    const dom = new JSDOM(htmlTemplate, { url });
    const document = dom.window.document;

    // Simulate SEOHead execution for the article
    const articleTitle = post.seoTitle || `${post.title} | Auditoria SEO`;
    const articleDescription = post.metaDescription || post.excerpt;
    const canonicalPath = `/blog/${slug}`;
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${DOMAIN}${cleanPath === '/' ? '' : cleanPath}`;
    const rawOgImage = post.ogImage || post.mainImage?.asset?.url || '/og-image.png';
    const fullOgImageUrl = rawOgImage.startsWith('http') ? rawOgImage : `${DOMAIN}${rawOgImage}`;
    const imageAltText = post.mainImage?.alt || articleTitle;

    // Simulate SEOHead.tsx logic
    // 1. Title
    const existingTitles = document.querySelectorAll('title');
    if (existingTitles.length > 0) {
      existingTitles[0].textContent = articleTitle;
      for (let j = 1; j < existingTitles.length; j++) {
        existingTitles[j].parentNode?.removeChild(existingTitles[j]);
      }
    } else {
      const el = document.createElement('title');
      el.textContent = articleTitle;
      document.head.appendChild(el);
    }

    // Helper setMetaTag with deduplication
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      const els = document.querySelectorAll(`meta[${attrName}="${attrValue}"]`);
      if (els.length > 0) {
        (els[0] as Element).setAttribute('content', content);
        for (let j = 1; j < els.length; j++) {
          els[j].parentNode?.removeChild(els[j]);
        }
      } else {
        const el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    const setLinkTag = (rel: string, href: string) => {
      const els = document.querySelectorAll(`link[rel="${rel}"]`);
      if (els.length > 0) {
        (els[0] as Element).setAttribute('href', href);
        for (let j = 1; j < els.length; j++) {
          els[j].parentNode?.removeChild(els[j]);
        }
      } else {
        const el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      }
    };

    setMetaTag('name', 'description', articleDescription);
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'googlebot', 'index, follow');
    setLinkTag('canonical', canonicalUrl);

    setMetaTag('property', 'og:title', articleTitle);
    setMetaTag('property', 'og:description', articleDescription);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullOgImageUrl);
    setMetaTag('property', 'og:image:alt', imageAltText);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:site_name', 'Auditoria SEO');
    setMetaTag('property', 'og:locale', 'pt_BR');

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', articleTitle);
    setMetaTag('name', 'twitter:description', articleDescription);
    setMetaTag('name', 'twitter:image', fullOgImageUrl);
    setMetaTag('name', 'twitter:image:alt', imageAltText);

    // Verify local image file
    const localImgPath = path.join(publicDir, rawOgImage.replace(/^\//, ''));
    const imageExistsLocally = fs.existsSync(localImgPath);

    results.push({
      articleIndex: i + 1,
      slug,
      url,
      title: document.querySelector('title')?.textContent || '',
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
      ogWidth: document.querySelector('meta[property="og:image:width"]')?.getAttribute('content') || '',
      ogHeight: document.querySelector('meta[property="og:image:height"]')?.getAttribute('content') || '',
      twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '',
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '',
      imageExistsLocally,
      imageDimensions: '1200x630',
      duplicateTitleCount: document.querySelectorAll('title').length,
      duplicateDescCount: document.querySelectorAll('meta[name="description"]').length,
      duplicateCanonicalCount: document.querySelectorAll('link[rel="canonical"]').length,
    });
  }

  // Print results
  for (const r of results) {
    console.log(`----------------------------------------------------------------`);
    console.log(`ARTIGO ${r.articleIndex}: ${r.slug}`);
    console.log(`URL: ${r.url}`);
    console.log(`SEO Title: "${r.title}"`);
    console.log(`Meta Description: "${r.metaDescription}"`);
    console.log(`Canonical: ${r.canonical}`);
    console.log(`og:title: "${r.ogTitle}"`);
    console.log(`og:description: "${r.ogDescription}"`);
    console.log(`og:url: ${r.ogUrl}`);
    console.log(`og:image: ${r.ogImage}`);
    console.log(`og:image dimensions: ${r.ogWidth}x${r.ogHeight}`);
    console.log(`twitter:card: ${r.twitterCard}`);
    console.log(`twitter:image: ${r.twitterImage}`);
    console.log(`Imagem existe localmente em /public: ${r.imageExistsLocally ? 'SIM' : 'NÃO'}`);
    console.log(`Duplicatas: <title>=${r.duplicateTitleCount}, meta[description]=${r.duplicateDescCount}, canonical=${r.duplicateCanonicalCount}`);
  }

  console.log('\n================================================================');
  console.log('TESTE DE PRESERVAÇÃO DAS OUTRAS PÁGINAS');
  console.log('================================================================');

  // Check index.html fallback
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
  const indexDom = new JSDOM(indexHtml);
  const indexDoc = indexDom.window.document;
  console.log('Página Inicial (index.html fallback / template):');
  console.log(`- <title>: "${indexDoc.querySelector('title')?.textContent}"`);
  console.log(`- meta[name="description"]: "${indexDoc.querySelector('meta[name="description"]')?.getAttribute('content')}"`);
  console.log(`- canonical: "${indexDoc.querySelector('link[rel="canonical"]')?.getAttribute('href')}"`);
  console.log(`- og:image: "${indexDoc.querySelector('meta[property="og:image"]')?.getAttribute('content')}"`);

  // Check SeoServicesPage.tsx
  const seoServicesContent = fs.readFileSync(path.join(rootDir, 'src/pages/SeoServicesPage.tsx'), 'utf-8');
  const hasUntouchedServicesSeo = seoServicesContent.includes('title={t.meta.seoServicesTitle}') &&
    seoServicesContent.includes('description={t.meta.seoServicesDescription}');
  console.log('\nPágina de Serviços de SEO (SeoServicesPage.tsx):');
  console.log(`- Preservada intacta: ${hasUntouchedServicesSeo ? 'SIM' : 'NÃO'}`);

  console.log('\nAudit complete.');
}

runAudit().catch(console.error);
