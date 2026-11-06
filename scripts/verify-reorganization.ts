import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { TRANSLATIONS } from '../src/i18n/translations';
import { ROUTES_BY_LANG } from '../src/i18n/routes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function testReorganization() {
  console.log('================================================================');
  console.log('TESTES DE VERIFICAÇÃO: REORGANIZAÇÃO ESTRATÉGICA DAS PÁGINAS');
  console.log('================================================================\n');

  let passed = true;

  // 1. Check Translations & Meta
  console.log('1. Teste de Metadados e Títulos:');
  const ptHomeTitle = TRANSLATIONS.pt.meta.homeTitle;
  const ptHomeDesc = TRANSLATIONS.pt.meta.homeDescription;
  const ptLocalTitle = TRANSLATIONS.pt.meta.localSeoTitle;
  const ptLocalDesc = TRANSLATIONS.pt.meta.localSeoDescription;

  console.log(`- PT Home Title: "${ptHomeTitle}"`);
  console.log(`- PT Home Description: "${ptHomeDesc}"`);
  console.log(`- PT Local SEO Title: "${ptLocalTitle}"`);
  console.log(`- PT Local SEO Description: "${ptLocalDesc}"`);

  if (!ptHomeTitle.includes('Agência de SEO') || !ptLocalTitle.includes('Google Maps')) {
    console.error('ERRO: Títulos de Home ou SEO Local incorretos!');
    passed = false;
  } else {
    console.log('✔ Títulos e descrições PT corretos.');
  }

  // 2. Check Routes configuration
  console.log('\n2. Teste de Rotas Multilíngue (ROUTES_BY_LANG):');
  console.log(`- PT: home="${ROUTES_BY_LANG.pt.home}", localSeo="${ROUTES_BY_LANG.pt.localSeo}"`);
  console.log(`- ES: home="${ROUTES_BY_LANG.es.home}", localSeo="${ROUTES_BY_LANG.es.localSeo}"`);
  console.log(`- EN: home="${ROUTES_BY_LANG.en.home}", localSeo="${ROUTES_BY_LANG.en.localSeo}"`);

  if (
    ROUTES_BY_LANG.pt.home !== '/' ||
    ROUTES_BY_LANG.pt.localSeo !== '/seo-local' ||
    ROUTES_BY_LANG.es.home !== '/es' ||
    ROUTES_BY_LANG.es.localSeo !== '/es/seo-local' ||
    ROUTES_BY_LANG.en.home !== '/en' ||
    ROUTES_BY_LANG.en.localSeo !== '/en/local-seo'
  ) {
    console.error('ERRO: Mapeamento de rotas incorreto!');
    passed = false;
  } else {
    console.log('✔ Mapeamento de rotas multilíngue 100% correto.');
  }

  // 3. Check public/_redirects
  console.log('\n3. Teste de Redirecionamentos HTTP 301 (_redirects):');
  const redirectsContent = fs.readFileSync(path.join(rootDir, 'public/_redirects'), 'utf-8');
  console.log(redirectsContent.trim());
  const hasPt301 = redirectsContent.includes('/servicos-seo / 301');
  const hasEs301 = redirectsContent.includes('/es/servicios-seo /es 301');
  const hasEn301 = redirectsContent.includes('/en/seo-services /en 301');

  if (hasPt301 && hasEs301 && hasEn301) {
    console.log('✔ Todos os 3 redirecionamentos 301 configurados no Cloudflare _redirects.');
  } else {
    console.error('ERRO: Faltam redirecionamentos 301 no _redirects!');
    passed = false;
  }

  // 4. Check sitemap.xml
  console.log('\n4. Teste de URLs no sitemap.xml:');
  const sitemapXml = fs.readFileSync(path.join(rootDir, 'public/sitemap.xml'), 'utf-8');
  const hasHomeInSitemap = sitemapXml.includes('<loc>https://auditoriaseo.com.br/</loc>');
  const hasLocalSeoInSitemap = sitemapXml.includes('<loc>https://auditoriaseo.com.br/seo-local</loc>');
  const hasOldServicesInSitemap = sitemapXml.includes('/servicos-seo</loc>');

  console.log(`- Homepage presente: ${hasHomeInSitemap ? 'SIM' : 'NÃO'}`);
  console.log(`- SEO Local presente: ${hasLocalSeoInSitemap ? 'SIM' : 'NÃO'}`);
  console.log(`- /servicos-seo ausente do sitemap (proibido ter 301): ${!hasOldServicesInSitemap ? 'SIM (CORRETO)' : 'NÃO (ERRO)'}`);

  if (hasHomeInSitemap && hasLocalSeoInSitemap && !hasOldServicesInSitemap) {
    console.log('✔ Sitemap.xml higienizado com sucesso.');
  } else {
    console.error('ERRO no sitemap.xml!');
    passed = false;
  }

  // 5. Check index.html fallback
  console.log('\n5. Teste de index.html:');
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
  const indexTitleMatch = indexHtml.match(/<title>(.*?)<\/title>/);
  console.log(`- HTML Title: "${indexTitleMatch ? indexTitleMatch[1] : ''}"`);
  if (indexTitleMatch && indexTitleMatch[1].includes('Agência de SEO')) {
    console.log('✔ index.html atualizado.');
  } else {
    console.error('ERRO: index.html com title antigo!');
    passed = false;
  }

  console.log('\n================================================================');
  console.log(passed ? 'RESULTADO FINAL: TODOS OS TESTES PASSARAM COM SUCESSO! ✔' : 'RESULTADO FINAL: FALHAS ENCONTRADAS! ✖');
  console.log('================================================================');
}

testReorganization().catch(console.error);
