import { Language } from '../../i18n/types';

export const TRANSLATED_ARTICLE_SLUGS: Record<Exclude<Language, 'pt'>, ReadonlySet<string>> = {
  es: new Set([
    'auditoria-seo-on-page',
    'auditoria-tecnica-seo',
    'seo-para-advogados',
    'google-meu-negocio-para-advogados',
    'site-para-escritorio-de-advocacia',
    'marketing-de-conteudo-juridico',
    'palavras-chave-para-advogados',
    'como-criar-google-meu-negocio',
    'como-otimizar-google-meu-negocio',
    'como-conseguir-avaliacoes-google',
    'seo-local-como-aparecer-google',
    'google-meu-negocio-nao-aparece-google-maps',
    'como-encontrar-dominio-expirado',
    'como-colocar-empresa-topo-google-maps-seo-local',
    'landing-pages-que-convertem-diferenca-site-comum',
    'estruturacao-google-ads-separar-campanhas-busca',
  ]),
  en: new Set([
    'auditoria-seo-on-page',
    'auditoria-tecnica-seo',
    'seo-para-advogados',
    'google-meu-negocio-para-advogados',
    'site-para-escritorio-de-advocacia',
    'marketing-de-conteudo-juridico',
    'palavras-chave-para-advogados',
    'como-criar-google-meu-negocio',
    'como-otimizar-google-meu-negocio',
    'como-conseguir-avaliacoes-google',
    'seo-local-como-aparecer-google',
    'google-meu-negocio-nao-aparece-google-maps',
    'como-encontrar-dominio-expirado',
    'como-colocar-empresa-topo-google-maps-seo-local',
    'landing-pages-que-convertem-diferenca-site-comum',
    'estruturacao-google-ads-separar-campanhas-busca',
  ]),
};

export function hasArticleTranslation(slug: string, lang: Exclude<Language, 'pt'>): boolean {
  return TRANSLATED_ARTICLE_SLUGS[lang].has(slug);
}
