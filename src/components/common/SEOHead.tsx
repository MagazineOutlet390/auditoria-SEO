import React, { useEffect } from 'react';
import { Language } from '../../i18n/types';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  currentLang?: Language;
  hreflangs?: Array<{ lang: string; href: string }>;
}

const DOMAIN = 'https://auditoriaseo.com.br';
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.png`;

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime,
  noindex = false,
  currentLang = 'pt',
  hreflangs,
}) => {
  useEffect(() => {
    // 1. Strictly enforce a single <title> tag in the document
    const setTitleTag = (pageTitle: string) => {
      const existingTitles = document.querySelectorAll('title');
      if (existingTitles.length > 0) {
        existingTitles[0].textContent = pageTitle;
        // Purge any and all redundant/duplicate title tags
        for (let i = 1; i < existingTitles.length; i++) {
          existingTitles[i].parentNode?.removeChild(existingTitles[i]);
        }
      } else {
        const el = document.createElement('title');
        el.textContent = pageTitle;
        document.head.appendChild(el);
      }
      document.title = pageTitle;
    };

    setTitleTag(title);

    // Helper to set or update meta tag with deduplication
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      const els = document.querySelectorAll(`meta[${attrName}="${attrValue}"]`);
      if (els.length > 0) {
        (els[0] as HTMLMetaElement).setAttribute('content', content);
        for (let i = 1; i < els.length; i++) {
          els[i].parentNode?.removeChild(els[i]);
        }
      } else {
        const el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    // Update HTML root lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang;

    // Helper to set or update link tag with deduplication
    const setLinkTag = (rel: string, href: string) => {
      const els = document.querySelectorAll(`link[rel="${rel}"]`);
      if (els.length > 0) {
        (els[0] as HTMLLinkElement).setAttribute('href', href);
        for (let i = 1; i < els.length; i++) {
          els[i].parentNode?.removeChild(els[i]);
        }
      } else {
        const el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      }
    };

    // Helper to set or update hreflang link tag with deduplication
    const setHreflangTag = (hreflang: string, href: string) => {
      const els = document.querySelectorAll(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (els.length > 0) {
        (els[0] as HTMLLinkElement).setAttribute('href', href);
        for (let i = 1; i < els.length; i++) {
          els[i].parentNode?.removeChild(els[i]);
        }
      } else {
        const el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', hreflang);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      }
    };

    // Absolute Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${DOMAIN}${cleanPath === '/' ? '' : cleanPath}`;
    const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage}`;

    // Standard SEO Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMetaTag('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow');
    setLinkTag('canonical', canonicalUrl);

    // Hreflang alternates
    if (hreflangs && hreflangs.length > 0) {
      hreflangs.forEach((item) => {
        setHreflangTag(item.lang, item.href);
      });
    }

    // Open Graph / Facebook
    const ogLocale = currentLang === 'pt' ? 'pt_BR' : currentLang === 'es' ? 'es_ES' : 'en_US';
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullOgImageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:site_name', 'Auditoria SEO');
    setMetaTag('property', 'og:locale', ogLocale);

    // Article Specific Timestamps
    if (ogType === 'article') {
      if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
      if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);
    }

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullOgImageUrl);
  }, [title, description, canonicalPath, ogType, ogImage, publishedTime, modifiedTime, noindex, currentLang, hreflangs]);

  return null;
};
