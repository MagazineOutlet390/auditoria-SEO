import { SanityPost } from '../../types';
import { Language } from '../../i18n/types';

const articlesCache: Partial<Record<Language, SanityPost[]>> = {};

export function setCachedArticles(lang: Language, posts: SanityPost[]): void {
  articlesCache[lang] = posts;
}

export function getCachedArticles(lang: Language): SanityPost[] | null {
  return articlesCache[lang] || null;
}

export function getCachedArticleBySlug(slug: string, lang: Language): SanityPost | null {
  const articles = articlesCache[lang];
  if (!articles) return null;
  const found = articles.find((a) => a.slug?.current === slug);
  if (found) return found;

  if (lang !== 'pt' && articlesCache.pt) {
    return articlesCache.pt.find((a) => a.slug?.current === slug) || null;
  }
  return null;
}

export async function preloadBlogLanguage(lang: Language): Promise<SanityPost[]> {
  if (articlesCache[lang]) {
    return articlesCache[lang]!;
  }

  let posts: SanityPost[];
  if (lang === 'es') {
    const mod = await import('./es');
    posts = mod.ES_BLOG_ARTICLES;
  } else if (lang === 'en') {
    const mod = await import('./en');
    posts = mod.EN_BLOG_ARTICLES;
  } else {
    const mod = await import('./pt');
    posts = mod.PT_BLOG_ARTICLES;
  }

  articlesCache[lang] = posts;
  return posts;
}
