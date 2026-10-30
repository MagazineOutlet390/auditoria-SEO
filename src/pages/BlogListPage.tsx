import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchSanityPosts } from '../lib/sanity';
import { SanityPost } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { Clock, User, ArrowRight, SlidersHorizontal } from 'lucide-react';

interface BlogListPageProps {}

export const BlogListPage: React.FC<BlogListPageProps> = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchSanityPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const bData = t.blog;
  const hreflangs = getHreflangs(location.pathname);

  const categories = [
    { id: 'all', label: bData.filterAll },
    { id: 'SEO Local', label: 'SEO Local' },
    { id: 'Landing Pages', label: 'Landing Pages' },
    { id: 'Google Ads', label: 'Google Ads' },
    { id: 'SEO Técnico', label: 'SEO Técnico' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Route-specific SEO Metadata */}
      <SEOHead
        title={t.meta.blogTitle}
        description={t.meta.blogDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={hreflangs}
      />

      {/* Blog Hero Header */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold sm:font-semibold tracking-wider text-[#EA4335] sm:text-[#1A73E8] uppercase">
                {bData.heroKicker}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">
                {bData.heroCategoryBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {bData.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {bData.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 border-b border-slate-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 mr-2 flex items-center gap-1 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{bData.filterLabel}</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center text-slate-400 text-sm">
            {bData.loading}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm">
            {bData.noPosts}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-7">
                  {/* Zero-Pill unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                    <span className="text-[#1A73E8] font-semibold">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTimeMinutes} {bData.minRead}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-[#1A73E8] transition-colors leading-snug">
                    <Link to={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.author.name}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#1A73E8] hover:text-[#174EA6]"
                  >
                    <span>{bData.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
