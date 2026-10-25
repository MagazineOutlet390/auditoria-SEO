import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { LocalSeoSection } from '../components/home/LocalSeoSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { TargetAudience } from '../components/home/TargetAudience';
import { Differentials } from '../components/home/Differentials';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main>
      <SEOHead
        title="Auditoria SEO | Sites de Alta Conversão e SEO Local"
        description="Melhore sua presença no Google com sites de alta conversão e SEO Local. Atraia mais clientes pelo Google Maps e fortaleça sua presença digital."
        canonicalPath="/"
        ogType="website"
        ogImage="https://auditoriaseo.com.br/og-image.png"
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
