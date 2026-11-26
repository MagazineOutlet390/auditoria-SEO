import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { HOME_COMMERCIAL_CONTENT } from '../i18n/homeCommercial';
import { buildHomeJsonLd } from '../lib/seoSchemas';
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

  const jsonLd = useMemo(() => {
    const pageUrl = `https://auditoriaseo.com.br${location.pathname === '/' ? '' : location.pathname}`;
    return buildHomeJsonLd(lang, pageUrl);
  }, [lang, location.pathname]);

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        jsonLd={jsonLd}
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
