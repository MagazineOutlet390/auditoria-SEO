import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
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
}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
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

    // Open Graph / Facebook
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', fullOgImageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:site_name', 'Auditoria SEO');
    setMetaTag('property', 'og:locale', 'pt_BR');

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
  }, [title, description, canonicalPath, ogType, ogImage, publishedTime, modifiedTime, noindex]);

  return null;
};
