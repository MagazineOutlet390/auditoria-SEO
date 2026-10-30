export type Language = 'pt' | 'es' | 'en';

export interface RouteMapping {
  home: string;
  seoServices: string;
  googleAds: string;
  modernization: string;
  blog: string;
  blogPost: string;
}

export interface NavLinkItem {
  name: string;
  path: string;
}
