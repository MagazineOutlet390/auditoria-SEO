import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEO_PLANS, SITE_CONFIG } from '../data/siteData';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import {
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  TrendingUp,
  Award,
  MapPin,
  Gauge,
  FileText,
  ListOrdered,
  ExternalLink,
} from 'lucide-react';

const SCOPE_ICONS = [Search, Gauge, FileText, ListOrdered] as const;

export const HomePage: React.FC = () => {
  const { lang, t, getWhatsAppUrl, currentRoutes } = useLanguage();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sData = t.seoServicesPage;
  const hreflangs = getHreflangs(location.pathname);

  // Sync a single canonical ProfessionalService JSON-LD script in <head> (prevents duplicates)
  useEffect(() => {
    const pageUrl = `https://auditoriaseo.com.br${location.pathname === '/' ? '' : location.pathname}`;
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
        name: 'Wesley Vieira',
        jobTitle: sData.specialistRole,
      },
      sameAs: [SITE_CONFIG.whatsappBaseUrl, SITE_CONFIG.googleMapsProfileUrl],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: sData.plansTitle,
        itemListElement: SEO_PLANS.map((plan) => {
          const localizedPlan = sData.planCopies[plan.id];
          return {
            '@type': 'Offer',
            price: String(plan.priceNumeric),
            priceCurrency: 'BRL',
            itemOffered: {
              '@type': 'Service',
              name: localizedPlan?.name || plan.name,
              description: localizedPlan?.description || plan.description,
            },
          };
        }),
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
  }, [lang, location.pathname, t.meta.homeDescription, sData]);

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
        kicker={sData.kicker}
        title={
          <>
            {sData.titlePart1}{' '}
            <span className="text-shimmer inline">
              {sData.titleShimmer}
            </span>
          </>
        }
        typewriterLabel={sData.typewriterLabel}
        typewriterPhrases={sData.typewriterPhrases}
        subtitle={sData.subtitle}
        primaryCta={{
          label: sData.primaryCta,
          href: getWhatsAppUrl(t.whatsappMessages.seoServices),
          isExternal: true,
        }}
        secondaryCta={{
          label: sData.secondaryCta,
          onClick: scrollToPlans,
        }}
        trustBadges={sData.trustBadges}
      />

      {/* 2. Audit Scope & Prioritization Section */}
      <section id="escopo-auditoria" className="py-16 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {sData.auditScopeKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              {sData.auditScopeTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {sData.auditScopeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sData.auditScopeCards.map((card, idx) => {
              const IconComponent = SCOPE_ICONS[idx % SCOPE_ICONS.length];
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                    <IconComponent className="w-4 h-4 text-[#1A73E8]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Process & Specialist Leadership Section */}
      <section id="processo-auditoria" className="py-16 bg-white border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {sData.processKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              {sData.processTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {sData.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {sData.processSteps.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-slate-50/70 rounded-xl border border-slate-200/90 flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1A73E8] text-white text-xs font-bold font-mono mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Who conducts the work */}
          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-3xl">
              <img
                src="/images/blog/wesley-vieira-autor.jpg"
                alt={sData.specialistName}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                  {sData.specialistEyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  {sData.specialistName}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {sData.specialistRole}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sData.specialistBio}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(t.whatsappMessages.seoServices)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{sData.specialistWhatsappLabel}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={SITE_CONFIG.googleMapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#1A73E8] bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{sData.specialistMapsLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing and Plans Cards */}
      <section id="planos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {sData.plansHeadingKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {sData.plansTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {sData.plansSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SEO_PLANS.map((plan) => {
            const isAuditoria = plan.id === 'auditoria-seo';
            const isPerformance = plan.id === 'seo-performance';
            const localizedPlan = sData.planCopies[plan.id];
            const planName = localizedPlan?.name || plan.name;
            const planTagline = localizedPlan?.tagline || plan.tagline;
            const planDescription = localizedPlan?.description || plan.description;
            const planDeliverables = localizedPlan?.deliverables || plan.deliverables;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 ${
                  plan.highlighted
                    ? 'border-2 border-[#1A73E8] bg-white shadow-md relative'
                    : 'border border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-3">
                    {isAuditoria && <Search className="w-5 h-5 text-[#1A73E8]" />}
                    {isPerformance && <TrendingUp className="w-5 h-5 text-[#1A73E8]" />}
                    {!isAuditoria && !isPerformance && <Award className="w-5 h-5 text-[#1A73E8]" />}
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {isAuditoria
                        ? sData.planCategories.audit
                        : isPerformance
                        ? sData.planCategories.performance
                        : sData.planCategories.elite}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    {planName}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 min-h-[32px]">
                    {planTagline}
                  </p>

                  {/* Price display with tabular figures */}
                  <div className="py-4 px-5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-xs font-medium text-slate-500 block mb-1">
                      {sData.investmentLabel}
                    </span>
                    <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {plan.price}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {planDescription}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {sData.deliverablesLabel}
                    </h4>
                    <ul className="space-y-3">
                      {planDeliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      plan.highlighted
                        ? 'bg-[#1A73E8] hover:bg-[#174EA6] text-white shadow-sm focus-visible:ring-[#1A73E8]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900'
                    }`}
                  >
                    <span>{sData.contractButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Contextual Card: Connecting General SEO to Local SEO */}
      <section className="py-12 bg-blue-50/50 border-t border-b border-blue-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1A73E8] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{sData.localSeoCard.eyebrow}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {sData.localSeoCard.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {sData.localSeoCard.description}
              </p>
            </div>
            <Link
              to={currentRoutes.localSeo}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <span>{sData.localSeoCard.button}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Structured SEO Strategy Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {sData.whyHeadingKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              {sData.whyTitle}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {sData.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sData.whyCards.map((card, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEO FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {sData.faqKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {sData.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {sData.faqSubtitle}
          </p>
        </div>

        <div className="space-y-4">
          {sData.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1A73E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#1A73E8] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Concluding CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {sData.bottomCtaTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            {sData.bottomCtaSubtitle}
          </p>
          <a
            href={getWhatsAppUrl(t.whatsappMessages.seoServices)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            <span>{sData.bottomCtaButton}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>
        </div>
      </section>
    </main>
  );
};
