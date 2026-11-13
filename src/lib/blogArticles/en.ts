import { SanityPost } from '../../types';
import { EN_AUDIT_GUIDES } from './auditGuidesEn';
import { EN_LEGAL_ARTICLES } from './enLegal';
import { EN_GENERAL_ARTICLES } from './enGeneral';

export const EN_BLOG_ARTICLES: SanityPost[] = [
  ...EN_AUDIT_GUIDES,
  ...EN_LEGAL_ARTICLES,
  ...EN_GENERAL_ARTICLES,
];
