import React from 'react';
import { Language } from '../i18n/types';
import { getLanguageFromPathname } from '../i18n/routes';
import { preloadBlogLanguage } from './blogArticles/cache';

export type PageComponentKey =
  | 'home'
  | 'localSeo'
  | 'googleAds'
  | 'modernization'
  | 'usaAgency'
  | 'blog'
  | 'blogPost'
  | 'notFound';

export type PageComponent = React.ComponentType;

const componentRegistry: Partial<Record<PageComponentKey, PageComponent>> = {};

const pageLoaders: Record<PageComponentKey, () => Promise<PageComponent>> = {
  home: () => import('../pages/HomePage').then((m) => m.HomePage),
  localSeo: () => import('../pages/LocalSeoPage').then((m) => m.LocalSeoPage),
  googleAds: () => import('../pages/GoogleAdsPage').then((m) => m.GoogleAdsPage),
  modernization: () => import('../pages/ModernizationPage').then((m) => m.ModernizationPage),
  usaAgency: () => import('../pages/UsaSeoAgencyPage').then((m) => m.UsaSeoAgencyPage),
  blog: () => import('../pages/BlogListPage').then((m) => m.BlogListPage),
  blogPost: () => import('../pages/BlogPostPage').then((m) => m.BlogPostPage),
  notFound: () => import('../pages/NotFoundPage').then((m) => m.NotFoundPage),
};

export function registerPageComponent(key: PageComponentKey, component: PageComponent): void {
  componentRegistry[key] = component;
}

export function getRegisteredPageComponent(key: PageComponentKey): PageComponent | null {
  return componentRegistry[key] || null;
}

export async function loadPageComponent(key: PageComponentKey): Promise<PageComponent> {
  if (componentRegistry[key]) {
    return componentRegistry[key]!;
  }
  const loaded = await pageLoaders[key]();
  componentRegistry[key] = loaded;
  return loaded;
}

export function matchPageKeyFromPath(pathname: string): PageComponentKey {
  const clean = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (
    clean === '' ||
    clean === '/' ||
    clean === '/es' ||
    clean === '/en' ||
    clean === '/servicos-seo' ||
    clean === '/es/servicios-seo' ||
    clean === '/en/seo-services'
  ) {
    return 'home';
  }

  if (clean === '/seo-local' || clean === '/es/seo-local' || clean === '/en/local-seo') {
    return 'localSeo';
  }

  if (clean === '/google-ads' || clean === '/es/google-ads' || clean === '/en/google-ads') {
    return 'googleAds';
  }

  if (
    clean === '/modernizacao-sites' ||
    clean === '/es/modernizacion-sitios' ||
    clean === '/en/site-modernization'
  ) {
    return 'modernization';
  }

  if (
    clean === '/agencia-seo-eua' ||
    clean === '/es/agencia-seo-estados-unidos' ||
    clean === '/en/seo-agency-usa'
  ) {
    return 'usaAgency';
  }

  if (clean === '/blog' || clean === '/es/blog' || clean === '/en/blog') {
    return 'blog';
  }

  if (
    /^\/blog\/[^/]+$/.test(clean) ||
    /^\/es\/blog\/[^/]+$/.test(clean) ||
    /^\/en\/blog\/[^/]+$/.test(clean)
  ) {
    return 'blogPost';
  }

  return 'notFound';
}

export async function preloadRouteForPath(pathname: string): Promise<void> {
  const pageKey = matchPageKeyFromPath(pathname);
  const lang: Language = getLanguageFromPathname(pathname);

  const tasks: Array<Promise<unknown>> = [loadPageComponent(pageKey)];

  if (pageKey === 'blog' || pageKey === 'blogPost') {
    tasks.push(preloadBlogLanguage(lang));
  }

  await Promise.all(tasks);
}
