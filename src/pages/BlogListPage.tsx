import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSanityPosts } from '../lib/sanity';
import { SanityPost } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { Clock, User, ArrowRight, SlidersHorizontal } from 'lucide-react';

interface BlogListPageProps {}

export const BlogListPage: React.FC<BlogListPageProps> = () => {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchSanityPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['Todos', 'SEO Local', 'Landing Pages', 'Google Ads', 'SEO Técnico'];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <main className="bg-white">
      {/* Route-specific SEO Metadata */}
      <SEOHead
        title="Blog de SEO e Google Ads | Auditoria SEO"
        description="Aprenda sobre SEO, Google Ads, Google Meu Negócio e estratégias de marketing digital para aumentar sua visibilidade e conquistar mais clientes."
        canonicalPath="/blog"
        ogType="website"
        ogImage="https://auditoriaseo.com.br/og-image.png"
      />

      {/* Blog Hero Header */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold sm:font-semibold tracking-wider text-[#EA4335] sm:text-[#1A73E8] uppercase">
                Artigos & Autoridade Temática
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">
                Conteúdo Estratégico
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Estratégias de SEO, Conversão e Tráfego para o Mundo Real
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Conteúdos práticos e aprofundados sobre visibilidade no Google, otimização de páginas e geração contínua de oportunidades para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 border-b border-slate-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          <span className="text-xs font-medium text-slate-400 mr-2 flex items-center gap-1 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filtrar:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center text-slate-400 text-sm">
            Carregando artigos do blog...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm">
            Nenhum artigo encontrado para esta categoria no momento.
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
                      <span>{post.readingTimeMinutes} min de leitura</span>
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
                    <span>Ler artigo</span>
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
