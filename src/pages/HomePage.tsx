import React from 'react';
import { useLocation } from 'react-router-dom';
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

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();

  return (
    <main>
      <SEOHead
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={getHreflangs(location.pathname)}
      />
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

