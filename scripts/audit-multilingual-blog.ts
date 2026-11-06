import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getArticlesByLanguage } from '../src/lib/blogArticles';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runMultilingualAudit() {
  console.log('================================================================');
  console.log('AUDITORIA DE LINKS INTERNOS E MULTILÍNGUE DO BLOG');
  console.log('================================================================\n');

  let passed = true;

  const ptArticles = getArticlesByLanguage('pt');
  const esArticles = getArticlesByLanguage('es');
  const enArticles = getArticlesByLanguage('en');

  console.log(`Artigos em Português: ${ptArticles.length}`);
  console.log(`Artigos em Espanhol: ${esArticles.length}`);
  console.log(`Artigos em Inglês: ${enArticles.length}`);

  if (ptArticles.length !== 13 || esArticles.length !== 13 || enArticles.length !== 13) {
    console.error('ERRO: Quantidade de artigos inconsistente entre idiomas!');
    passed = false;
  } else {
    console.log('✔ Todos os 13 artigos possuem versões completas em PT, ES e EN.');
  }

  // Check each article
  for (let i = 0; i < ptArticles.length; i++) {
    const pt = ptArticles[i];
    const es = esArticles[i];
    const en = enArticles[i];
    const slug = pt.slug.current;

    console.log(`\n--- Artigo ${i + 1}: ${slug} ---`);
    console.log(`[PT] ${pt.title.slice(0, 60)}...`);
    console.log(`[ES] ${es.title.slice(0, 60)}...`);
    console.log(`[EN] ${en.title.slice(0, 60)}...`);

    // Verify Spanish has translated content
    if (es.title === pt.title || es.body[0] === pt.body[0]) {
      console.error(`ERRO: Artigo ${slug} em espanhol não foi traduzido!`);
      passed = false;
    }

    // Verify English has translated content
    if (en.title === pt.title || en.body[0] === pt.body[0]) {
      console.error(`ERRO: Artigo ${slug} em inglês não foi traduzido!`);
      passed = false;
    }

    // Check for deprecated /servicos-seo in any body
    const ptBodyStr = pt.body.join(' ');
    const esBodyStr = es.body.join(' ');
    const enBodyStr = en.body.join(' ');

    if (ptBodyStr.includes('/servicos-seo') || esBodyStr.includes('/servicos-seo') || enBodyStr.includes('/servicos-seo')) {
      console.error(`ERRO: Artigo ${slug} contém link antigo /servicos-seo!`);
      passed = false;
    }
  }

  // Check sitemap.xml
  console.log('\n--- Verificação do Sitemap ---');
  const sitemapXml = fs.readFileSync(path.join(rootDir, 'public/sitemap.xml'), 'utf-8');
  let missingUrls = 0;

  for (const a of ptArticles) {
    const slug = a.slug.current;
    if (!sitemapXml.includes(`<loc>https://auditoriaseo.com.br/blog/${slug}</loc>`)) {
      console.error(`Falta no sitemap PT: /blog/${slug}`);
      missingUrls++;
    }
    if (!sitemapXml.includes(`<loc>https://auditoriaseo.com.br/es/blog/${slug}</loc>`)) {
      console.error(`Falta no sitemap ES: /es/blog/${slug}`);
      missingUrls++;
    }
    if (!sitemapXml.includes(`<loc>https://auditoriaseo.com.br/en/blog/${slug}</loc>`)) {
      console.error(`Falta no sitemap EN: /en/blog/${slug}`);
      missingUrls++;
    }
  }

  if (missingUrls === 0) {
    console.log('✔ Todas as 39 URLs dos artigos (13 PT + 13 ES + 13 EN) estão presentes no sitemap.xml!');
  } else {
    console.error(`ERRO: ${missingUrls} URLs ausentes do sitemap!`);
    passed = false;
  }

  console.log('\n================================================================');
  console.log(passed ? 'RESULTADO FINAL: AUDITORIA PASSOU COM SUCESSO! ✔' : 'RESULTADO FINAL: FALHAS ENCONTRADAS! ✖');
  console.log('================================================================');
}

runMultilingualAudit().catch(console.error);
