import { SanityPost } from '../../types';
import { Language } from '../../i18n/types';

export interface LocalizedArticleMeta {
  slug: string;
  lang: Language;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
}
