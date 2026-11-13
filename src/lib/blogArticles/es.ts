import { SanityPost } from '../../types';
import { ES_AUDIT_GUIDES } from './auditGuidesEs';
import { ES_LEGAL_ARTICLES } from './esLegal';
import { ES_GENERAL_ARTICLES } from './esGeneral';

export const ES_BLOG_ARTICLES: SanityPost[] = [
  ...ES_AUDIT_GUIDES,
  ...ES_LEGAL_ARTICLES,
  ...ES_GENERAL_ARTICLES,
];
