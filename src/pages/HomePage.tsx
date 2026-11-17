import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteData';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { HOME_COMMERCIAL_CONTENT } from '../i18n/homeCommercial';
import { HomeModalitiesAndAudits } from '../components/home/HomeModalitiesAndAudits';
import { HomeRecurringPlans } from '../components/home/HomeRecurringPlans';
import { HomeLocalAndComplementary } from '../components/home/HomeLocalAndComplementary';
import { HomeMethodologyAndFaq } from '../components/home/HomeMethodologyAndFaq';
import { HomeProposalForm } from '../components/home/HomeProposalForm';

export const HomePage: React.FC = () => {
  const { lang, t, getWhatsAppUrl, currentRoutes } = useLanguage();
  const location = useLocation();

  const c = HOME_COMMERCIAL_CONTENT[lang];
  const hreflangs = getHreflangs(location.pathname);

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sync a single canonical ProfessionalService JSON-LD script in <head> without public prices
  useEffect(() => {
    const pageUrl = `https://auditoriaseo.com.br${location.pathname === '/' ? '' : location.pathname}`;
    const catalogServices = [
      ...c.auditsSection.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.positioning,
        },
      })),
      ...c.plansSection.plans.map((plan) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: plan.name,
          description: plan.description,
        },
      })),
    ];

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Auditoria SEO',
      url: pageUrl,
      inLanguage: lang === 'pt' ? 'pt-BR' : lang,
      logo: 'https://auditoriaseo.com.br/icon-512.png',
      image: 'https://auditoriaseo.com.br/og-image.png',
      telephone: '+55-19-98933-2087',
      areaServed: 'BR',
      description: t.meta.homeDescription,
      hasMap: SITE_CONFIG.googleMapsProfileUrl,
      founder: {
        '@type': 'Person',
        name: c.methodology.specialistName,
        jobTitle: c.methodology.specialistRole,
      },
      sameAs: [SITE_CONFIG.whatsappBaseUrl, SITE_CONFIG.googleMapsProfileUrl],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${c.auditsSection.title} & ${c.plansSection.title}`,
        itemListElement: catalogServices,
      },
    };

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    if (existingScripts.length > 0) {
      existingScripts[0].textContent = JSON.stringify(schemaData);
      for (let i = 1; i < existingScripts.length; i++) {
        existingScripts[i].parentNode?.removeChild(existingScripts[i]);
      }
    } else {
      const scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.textContent = JSON.stringify(schemaData);
      document.head.appendChild(scriptEl);
    }
  }, [lang, location.pathname, t.meta.homeDescription, c]);

  return (
    <main className="bg-white">
      {/* Route-Specific SEO Metadata for Homepage */}
      <SEOHead
        title={t.meta.homeTitle}
        description={t.meta.homeDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={hreflangs}
      />

      {/* 1. Hero Section */}
      <PageHero
        kicker={c.hero.kicker}
        title={
          <>
            {c.hero.titlePart1}{' '}
            <span className="text-shimmer inline">{c.hero.titleShimmer}</span>
          </>
        }
        typewriterLabel={c.hero.typewriterLabel}
        typewriterPhrases={c.hero.typewriterPhrases}
        subtitle={c.hero.subtitle}
        primaryCta={{
          label: c.hero.primaryCta,
          href: getWhatsAppUrl(t.whatsappMessages.seoServices),
          isExternal: true,
        }}
        secondaryCta={{
          label: c.hero.secondaryCta,
          onClick: scrollToPlans,
        }}
        trustBadges={c.hero.trustBadges}
      />

      {/* 2 & 3. Modalities Overview + Line 1 (Professional SEO Audits + Comparison) */}
      <HomeModalitiesAndAudits
        content={c}
        lang={lang}
        getWhatsAppUrl={getWhatsAppUrl}
      />

      {/* 4. Line 2 (Recurring SEO Plans + Grouped Comparison Matrix) */}
      <HomeRecurringPlans
        content={c}
        lang={lang}
        getWhatsAppUrl={getWhatsAppUrl}
      />

      {/* 5 & 6. Integrated Local SEO / GBP + Complementary Services */}
      <HomeLocalAndComplementary
        content={c}
        getWhatsAppUrl={getWhatsAppUrl}
        currentRoutes={currentRoutes}
      />

      {/* 7 & 8. Methodology (7 steps), Differentials, Leadership & FAQ */}
      <HomeMethodologyAndFaq
        content={c}
        defaultWhatsappMessage={t.whatsappMessages.seoServices}
        getWhatsAppUrl={getWhatsAppUrl}
      />

      {/* 9 & 10. Structured Proposal Brief Form & Bottom Concluding CTA */}
      <HomeProposalForm
        content={c}
        defaultWhatsappMessage={t.whatsappMessages.seoServices}
        getWhatsAppUrl={getWhatsAppUrl}
      />
    </main>
  );
};
