import { SanityPost } from '../../types';
import { Language } from '../../i18n/types';
import { PT_BLOG_ARTICLES } from './pt';
import { ES_BLOG_ARTICLES } from './es';
import { EN_BLOG_ARTICLES } from './en';

export const ARTICLES_BY_LANG: Record<Language, SanityPost[]> = {
  pt: PT_BLOG_ARTICLES,
  es: ES_BLOG_ARTICLES,
  en: EN_BLOG_ARTICLES,
};

export function getArticlesByLanguage(lang: Language = 'pt'): SanityPost[] {
  return ARTICLES_BY_LANG[lang] || ARTICLES_BY_LANG.pt;
}

export function getArticleBySlug(slug: string, lang: Language = 'pt'): SanityPost | null {
  const articles = getArticlesByLanguage(lang);
  const found = articles.find((a) => a.slug?.current === slug);
  if (found) return found;

  // Fallback to Portuguese original if translation is missing for that specific slug
  if (lang !== 'pt') {
    return ARTICLES_BY_LANG.pt.find((a) => a.slug?.current === slug) || null;
  }
  return null;
}

export function getAllArticleSlugs(): string[] {
  return PT_BLOG_ARTICLES.map((a) => a.slug.current);
}
