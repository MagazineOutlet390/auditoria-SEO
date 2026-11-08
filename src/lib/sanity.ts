import { SanityPost } from '../types';
import { Language } from '../i18n/types';
import { LEGAL_ARTICLES } from './legalArticles';
import { PT_BLOG_ARTICLES } from './blogArticles/pt';
import { getArticlesByLanguage, getArticleBySlug } from './blogArticles';

const envProjectId = (
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env?.VITE_SANITY_PROJECT_ID) ||
  ''
).trim();

const envDataset = (
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_DATASET) ||
  (typeof process !== 'undefined' && process.env?.VITE_SANITY_DATASET) ||
  'production'
).trim();

export const SANITY_CONFIG = {
  projectId: envProjectId,
  dataset: envDataset,
  apiVersion: '2024-03-01',
  isConfigured: Boolean(
    envProjectId &&
    envProjectId !== 'MY_SANITY_PROJECT_ID' &&
    envProjectId !== 'your-project-id' &&
    envProjectId.length >= 4
  ),
};

export const SANITY_SCHEMA_DEFINITION = `
// schemas/post.ts (Sanity Studio schema definition)
export default {
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    },
    {
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Resumo do Artigo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Conteúdo do Artigo (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'SEO Local', value: 'SEO Local' },
          { title: 'SEO Técnico', value: 'SEO Técnico' },
          { title: 'Google Ads', value: 'Google Ads' },
          { title: 'Landing Pages', value: 'Landing Pages' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Nome' },
        { name: 'role', type: 'string', title: 'Cargo' },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'Título SEO (Meta Title)',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
    },
  ],
};
`;

export const FALLBACK_ARTICLES: SanityPost[] = PT_BLOG_ARTICLES;

export async function fetchSanityPosts(lang: Language = 'pt'): Promise<SanityPost[]> {
  const fallback = getArticlesByLanguage(lang);
  if (!SANITY_CONFIG.isConfigured) {
    return fallback;
  }

  const query = encodeURIComponent(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    body,
    category,
    tags,
    author,
    publishedAt,
    updatedAt,
    seoTitle,
    metaDescription,
    "readingTimeMinutes": 5
  }`);

  const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      console.warn('Sanity fetch returned status', res.status, 'using fallback content');
      return fallback;
    }
    const data = await res.json();
    if (Array.isArray(data.result) && data.result.length > 0) {
      return data.result;
    }
    return fallback;
  } catch (err) {
    console.warn('Failed to fetch from Sanity CMS, fallback active:', err);
    return fallback;
  }
}

export async function fetchSanityPostBySlug(slug: string, lang: Language = 'pt'): Promise<SanityPost | null> {
  const localized = getArticleBySlug(slug, lang);
  if (localized) {
    return localized;
  }
  const all = await fetchSanityPosts(lang);
  return all.find((p) => p.slug?.current === slug) || null;
}
