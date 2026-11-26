import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { LocalSeoSection } from '../components/home/LocalSeoSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { TargetAudience } from '../components/home/TargetAudience';
import { Differentials } from '../components/home/Differentials';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { FinalCTA } from '../components/home/FinalCTA';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { buildLocalSeoJsonLd } from '../lib/seoSchemas';
import { ArrowRight, Sparkles } from 'lucide-react';

export const LocalSeoPage: React.FC = () => {
  const { lang, t, currentRoutes } = useLanguage();
  const location = useLocation();

  const jsonLd = useMemo(() => {
    const pageUrl = `https://auditoriaseo.com.br${location.pathname}`;
    return buildLocalSeoJsonLd(lang, pageUrl);
  }, [lang, location.pathname]);

  const bannerPrompt =
    lang === 'es'
      ? '¿Busca consultoría global y optimización técnica de sitios web?'
      : lang === 'en'
      ? 'Looking for global consulting and technical website optimization?'
      : 'Procura consultoria global e otimização técnica de sites?';

  const bannerCta =
    lang === 'es'
      ? 'Conozca los Planes de SEO de Auditoria SEO'
      : lang === 'en'
      ? 'Explore Auditoria SEO Consulting & Plans'
      : 'Conheça os Planos de SEO da Auditoria SEO';

  return (
    <main>
      <SEOHead
        title={t.meta.localSeoTitle}
        description={t.meta.localSeoDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={getHreflangs(location.pathname)}
        jsonLd={jsonLd}
      />

      {/* Contextual Banner connecting Local SEO to General SEO Services on Homepage */}
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-[#1A73E8] shrink-0" />
            <span>{bannerPrompt}</span>
          </div>
          <Link
            to={currentRoutes.home}
            className="inline-flex items-center gap-1 font-semibold text-[#1A73E8] hover:text-blue-400 transition-colors"
          >
            <span>{bannerCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <Hero />
      <LocalSeoSection />
      <ServicesSection />
      <HowItWorks />
      <TargetAudience />
      <Differentials />
      <TestimonialsCarousel />
      <FinalCTA />
    </main>
  );
};
