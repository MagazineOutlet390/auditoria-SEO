import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { fetchSanityPostBySlug, fetchSanityPosts } from '../lib/sanity';
import { SanityPost } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { Clock, User, ArrowLeft, ArrowRight, ListTree } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { lang, t, getLocalizedPath } = useLanguage();
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);

  const bData = t.blog;

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    window.scrollTo(0, 0);

    fetchSanityPostBySlug(slug)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    fetchSanityPosts().then((all) => {
      setRelatedPosts(all.filter((p) => p.slug.current !== slug).slice(0, 2));
    });
  }, [slug]);

  if (loading) {
    return (
      <main className="py-24 max-w-4xl mx-auto px-4 text-center text-slate-500 text-sm">
        {bData.loading}
      </main>
    );
  }

  if (!post) {
    return (
      <main className="py-24 max-w-4xl mx-auto px-4 text-center">
        <SEOHead
          title={`${bData.notFoundTitle} | Auditoria SEO`}
          description={bData.notFoundText}
          canonicalPath={location.pathname}
          noindex={true}
          currentLang={lang}
        />
        <h1 className="text-2xl font-bold text-slate-900 mb-4">{bData.notFoundTitle}</h1>
        <p className="text-slate-600 mb-6 text-sm">
          {bData.notFoundText}
        </p>
        <Link
          to={getLocalizedPath('/blog')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A73E8]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{bData.notFoundBack}</span>
        </Link>
      </main>
    );
  }

  // Extract headings for Table of Contents
  const headings = post.body
    .filter((line) => line.trim().startsWith('### '))
    .map((line) => line.trim().replace('### ', ''));

  const articleTitle = post.seoTitle || `${post.title} | Auditoria SEO`;
  const articleDescription = post.metaDescription || post.excerpt;
  const canonicalPath = `/blog/${post.slug.current}`;
  const articleOgImage = post.ogImage || post.mainImage?.asset?.url || 'https://auditoriaseo.com.br/og-image.png';
  const articleOgImageAlt = post.mainImage?.alt || post.title;
  const absoluteOgImageUrl = articleOgImage.startsWith('http')
    ? articleOgImage
    : `https://auditoriaseo.com.br${articleOgImage.startsWith('/') ? articleOgImage : `/${articleOgImage}`}`;

  return (
    <main className="bg-white">
      {/* Dynamic SEO Metadata for individual article */}
      <SEOHead
        title={articleTitle}
        description={articleDescription}
        canonicalPath={canonicalPath}
        ogType="article"
        ogImage={absoluteOgImageUrl}
        ogImageAlt={articleOgImageAlt}
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt || post.publishedAt}
        currentLang={lang}
      />

      {/* Schema.org Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: articleDescription,
            image: absoluteOgImageUrl,
            author: {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.role,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Auditoria SEO',
              url: 'https://auditoriaseo.com.br',
              logo: {
                '@type': 'ImageObject',
                url: 'https://auditoriaseo.com.br/icon-512.png',
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            mainEntityOfPage: `https://auditoriaseo.com.br/blog/${post.slug.current}`,
          }),
        }}
      />

      {/* Header breadcrumb & back link */}
      <section className="py-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={getLocalizedPath('/blog')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#1A73E8] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{bData.backToAll}</span>
          </Link>
        </div>
      </section>

      {/* Article Content Header */}
      <article className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-4">
          <span className="text-[#1A73E8] font-bold">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTimeMinutes} {bData.minRead}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{post.author.name}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
          {post.title}
        </h1>

        {post.mainImage?.asset?.url && (
          <figure className="my-8">
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={1672}
              height={941}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto rounded-2xl border border-slate-200/90 shadow-sm object-cover"
            />
            <figcaption className="mt-2 text-xs text-slate-400 text-center">
              Ilustração gerada por IA.
            </figcaption>
          </figure>
        )}

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed pb-8 border-b border-slate-200">
          {post.excerpt}
        </p>

        {/* Table of Contents for long-form readability */}
        {headings.length > 0 && (
          <aside className="my-8 p-6 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              <ListTree className="w-4 h-4 text-[#1A73E8]" />
              <span>{bData.inThisArticle}</span>
            </div>
            <ul className="space-y-2 text-sm">
              {headings.map((heading, hIdx) => (
                <li key={hIdx} className="text-slate-600 hover:text-[#1A73E8] transition-colors">
                  <a href={`#heading-${hIdx}`} className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">0{hIdx + 1}.</span>
                    <span>{heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Body content rendering with DOMPurify sanitization */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg text-slate-700 leading-relaxed space-y-6 pt-4">
          {post.body.map((paragraph, pIdx) => {
            const trimmed = paragraph.trim();

            if (trimmed.startsWith('### ')) {
              const text = trimmed.replace('### ', '');
              const hIndex = headings.indexOf(text);
              return (
                <h2
                  key={pIdx}
                  id={hIndex >= 0 ? `heading-${hIndex}` : undefined}
                  className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 pb-2 scroll-mt-24 border-b border-slate-100"
                >
                  {text}
                </h2>
              );
            }

            if (trimmed.startsWith('#### ')) {
              const text = trimmed.replace('#### ', '');
              return (
                <h3
                  key={pIdx}
                  className="text-lg sm:text-xl font-bold text-slate-900 pt-4 pb-1"
                >
                  {text}
                </h3>
              );
            }

            const cleanHtml = DOMPurify.sanitize(trimmed, {
              ADD_TAGS: ['figure', 'figcaption'],
              ADD_ATTR: ['target', 'rel', 'class', 'loading', 'fetchpriority', 'width', 'height', 'id'],
            });

            const isBlockElement =
              trimmed.startsWith('<figure') ||
              trimmed.startsWith('<div') ||
              trimmed.startsWith('<table') ||
              trimmed.startsWith('<blockquote') ||
              trimmed.startsWith('<ul') ||
              trimmed.startsWith('<ol') ||
              trimmed.startsWith('<p');

            if (isBlockElement) {
              return (
                <div
                  key={pIdx}
                  dangerouslySetInnerHTML={{ __html: cleanHtml }}
                />
              );
            }

            return (
              <p
                key={pIdx}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
              />
            );
          })}
        </div>

        {/* Internal Contextual Link Callout (Silo Semântico) */}
        <div className="my-12 p-6 rounded-xl bg-blue-50/60 border border-blue-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#174EA6] uppercase tracking-wider block mb-1">
              {bData.nextStrategicStep}
            </span>
            <p className="text-sm font-semibold text-slate-900">
              {bData.nextStrategicText}
            </p>
          </div>
          <Link
            to={getLocalizedPath('/servicos-seo')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1A73E8] text-white text-xs font-semibold hover:bg-[#174EA6] whitespace-nowrap shrink-0 transition-colors"
          >
            <span>{bData.nextStrategicCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Author Box */}
        <div className="my-10 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={post.author.avatar || '/images/blog/wesley-vieira-autor.jpg'}
            alt={`Foto de ${post.author.name}, fundador da Auditoria SEO`}
            width={96}
            height={96}
            loading="lazy"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 border-2 border-white shadow-sm"
          />
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-bold text-slate-900">
                Sobre o Autor: {post.author.name}
              </h3>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs">
                <a
                  href="https://www.instagram.com/wesley.google_ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A73E8] hover:underline font-semibold"
                >
                  Instagram
                </a>
                <span className="text-slate-300">·</span>
                <a
                  href="https://www.linkedin.com/in/wesley-vieira-1907572b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A73E8] hover:underline font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fundador e responsável pela Auditoria SEO, agência de marketing digital especializada em Google Ads e SEO. Mais de 4 anos como gestor de tráfego e SEO, certificado pelo Google.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 mr-2">{bData.relatedTopics}</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-slate-900 mb-8">
              {bData.recommendedArticles}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel._id}
                  className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#1A73E8] mb-2 block">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      <Link to={`/blog/${rel.slug.current}`} className="hover:text-[#1A73E8]">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    to={`/blog/${rel.slug.current}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A73E8] hover:text-[#174EA6]"
                  >
                    <span>{bData.readArticle}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
