import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { registerPageComponent } from './lib/routeRegistry';
import { setCachedArticles } from './lib/blogArticles/cache';
import { PT_BLOG_ARTICLES } from './lib/blogArticles/pt';
import { ES_BLOG_ARTICLES } from './lib/blogArticles/es';
import { EN_BLOG_ARTICLES } from './lib/blogArticles/en';
import { initSsrSanitizer } from './lib/sanitizeHtml';
import { HomePage } from './pages/HomePage';
import { LocalSeoPage } from './pages/LocalSeoPage';
import { GoogleAdsPage } from './pages/GoogleAdsPage';
import { ModernizationPage } from './pages/ModernizationPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { NotFoundPage } from './pages/NotFoundPage';

let initialized = false;

export function initSsrRegistry(domWindow: unknown): void {
  if (!initialized) {
    registerPageComponent('home', HomePage);
    registerPageComponent('localSeo', LocalSeoPage);
    registerPageComponent('googleAds', GoogleAdsPage);
    registerPageComponent('modernization', ModernizationPage);
    registerPageComponent('blog', BlogListPage);
    registerPageComponent('blogPost', BlogPostPage);
    registerPageComponent('notFound', NotFoundPage);

    setCachedArticles('pt', PT_BLOG_ARTICLES);
    setCachedArticles('es', ES_BLOG_ARTICLES);
    setCachedArticles('en', EN_BLOG_ARTICLES);
    initialized = true;
  }

  initSsrSanitizer(domWindow);
}

export function renderPageHtml(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}
