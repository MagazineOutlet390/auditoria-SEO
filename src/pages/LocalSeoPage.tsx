import React from 'react';
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
import { ArrowRight, Sparkles } from 'lucide-react';

export const LocalSeoPage: React.FC = () => {
  const { lang, t, currentRoutes } = useLanguage();
  const location = useLocation();

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
      />

      {/* Schema.org Structured Data for Local SEO & Google Business Profile Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'SEO Local e Otimização do Perfil da Empresa no Google',
            serviceType: 'Local SEO, Google Maps Optimization & Google Business Profile Management',
            provider: {
              '@type': 'ProfessionalService',
              name: 'Auditoria SEO',
              url: 'https://auditoriaseo.com.br',
              telephone: '+55-19-98933-2087',
              hasMap: 'https://share.google/LAMoroMJbdrI9QCsk',
            },
            areaServed: 'BR',
            description: t.meta.localSeoDescription,
          }),
        }}
      />

      {/* Contextual Banner connecting Local SEO to General SEO Services on Homepage */}
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-[#1A73E8] shrink-0" />
            <span>
              Procura consultoria global e otimização técnica de sites?
            </span>
          </div>
          <Link
            to={currentRoutes.home}
            className="inline-flex items-center gap-1 font-semibold text-[#1A73E8] hover:text-blue-400 transition-colors"
          >
            <span>Conheça os Planos de SEO da Auditoria SEO</span>
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
