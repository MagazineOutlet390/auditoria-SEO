import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_CONFIG } from '../src/data/siteData';
import { fetchSanityPosts, FALLBACK_ARTICLES } from '../src/lib/sanity';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const distDir = path.resolve(rootDir, 'dist');

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

const DOMAIN = `https://${SITE_CONFIG.domain.replace(/^https?:\/\//, '').replace(/\/$/, '')}`;
const TODAY = new Date().toISOString().split('T')[0];

async function generateSitemapAndRobots() {
  console.log(`[SEO-GEN] Iniciando geração de sitemap.xml e robots.txt para ${DOMAIN}...`);

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Static Canonical Pages across PT, ES, and EN
  const canonicalUrls: SitemapUrl[] = [
    // Portuguese (Default)
    { loc: `${DOMAIN}/`, lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/servicos-seo`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/google-ads`, lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/modernizacao-sites`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/blog`, lastmod: TODAY, changefreq: 'daily', priority: '0.8' },

    // Spanish (América Latina / Internacional)
    { loc: `${DOMAIN}/es`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/es/servicios-seo`, lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/es/google-ads`, lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/es/modernizacion-sitios`, lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/es/blog`, lastmod: TODAY, changefreq: 'daily', priority: '0.7' },

    // English (Global)
    { loc: `${DOMAIN}/en`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/en/seo-services`, lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/en/google-ads`, lastmod: TODAY, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/en/site-modernization`, lastmod: TODAY, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/en/blog`, lastmod: TODAY, changefreq: 'daily', priority: '0.7' },
  ];

  // 2. Dynamic Blog Article Pages
  try {
    let posts = await fetchSanityPosts();
    if (!posts || posts.length === 0) {
      posts = FALLBACK_ARTICLES;
    }

    for (const post of posts) {
      const slug = post.slug?.current;
      if (!slug) continue;

      let postDate = TODAY;
      if (post.updatedAt) {
        postDate = new Date(post.updatedAt).toISOString().split('T')[0];
      } else if (post.publishedAt) {
        postDate = new Date(post.publishedAt).toISOString().split('T')[0];
      }

      canonicalUrls.push({
        loc: `${DOMAIN}/blog/${slug}`,
        lastmod: postDate,
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  } catch (error) {
    console.warn('[SEO-GEN] Aviso: Erro ao buscar artigos do Sanity, utilizando artigos canônicos locais:', error);
    for (const post of FALLBACK_ARTICLES) {
      const slug = post.slug?.current;
      if (!slug) continue;
      const postDate = post.updatedAt
        ? new Date(post.updatedAt).toISOString().split('T')[0]
        : new Date(post.publishedAt).toISOString().split('T')[0];

      canonicalUrls.push({
        loc: `${DOMAIN}/blog/${slug}`,
        lastmod: postDate,
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  }

  // 3. Build XML String
  const xmlLines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const item of canonicalUrls) {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${item.loc}</loc>`);
    xmlLines.push(`    <lastmod>${item.lastmod}</lastmod>`);
    xmlLines.push(`    <changefreq>${item.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${item.priority}</priority>`);
    xmlLines.push('  </url>');
  }

  xmlLines.push('</urlset>\n');
  const sitemapXml = xmlLines.join('\n');

  // 4. Build robots.txt String
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${DOMAIN}/sitemap.xml
`;

  // 5. Write to /public
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  const publicRobotsPath = path.join(publicDir, 'robots.txt');

  fs.writeFileSync(publicSitemapPath, sitemapXml, 'utf-8');
  fs.writeFileSync(publicRobotsPath, robotsTxt, 'utf-8');

  console.log(`[SEO-GEN] Arquivo sitemap.xml gerado com sucesso em: ${publicSitemapPath} (${canonicalUrls.length} rotas)`);
  console.log(`[SEO-GEN] Arquivo robots.txt gerado com sucesso em: ${publicRobotsPath}`);

  // 6. Also write to /dist if dist directory already exists (e.g. during or post-build)
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    const distRobotsPath = path.join(distDir, 'robots.txt');
    fs.writeFileSync(distSitemapPath, sitemapXml, 'utf-8');
    fs.writeFileSync(distRobotsPath, robotsTxt, 'utf-8');
    console.log(`[SEO-GEN] Arquivos copiados também para a pasta de distribuição: ${distDir}`);
  }

  console.log('[SEO-GEN] Concluído com sucesso.');
}

generateSitemapAndRobots().catch((err) => {
  console.error('[SEO-GEN] Erro fatal durante a geração do sitemap:', err);
  process.exit(1);
});
