import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { buildGoogleAdsJsonLd } from '../lib/seoSchemas';
import {
  Check,
  X,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Target,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const GoogleAdsPage: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToStages = () => {
    const el = document.getElementById('etapas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const gData = t.googleAdsPage;
  const hreflangs = getHreflangs(location.pathname);

  const jsonLd = useMemo(() => {
    const pageUrl = `https://auditoriaseo.com.br${location.pathname}`;
    return buildGoogleAdsJsonLd(lang, pageUrl);
  }, [lang, location.pathname]);

  const benefitIcons = [
    <Target key="target" className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />,
    <Zap key="zap" className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />,
  ];

  return (
    <main className="bg-white">
      {/* Dynamic Route Metadata */}
      <SEOHead
        title={t.meta.googleAdsTitle}
        description={t.meta.googleAdsDescription}
        canonicalPath={location.pathname}
        ogType="website"
        ogImage="/og-image.png"
        currentLang={lang}
        hreflangs={hreflangs}
        jsonLd={jsonLd}
      />

      {/* Reusable Hero matching exactly the Home visual identity and background */}
      <PageHero
        kicker={gData.kicker}
        title={
          <>
            {gData.titlePart1}{' '}
            <span className="text-shimmer inline">{gData.titleShimmer}</span>
          </>
        }
        typewriterLabel={gData.typewriterLabel}
        typewriterPhrases={gData.typewriterPhrases}
        subtitle={gData.subtitle}
        extraBanner={
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-semibold text-slate-900">
                {gData.extraBannerTitle}
              </strong>{' '}
              {gData.extraBannerText}
            </div>
          </div>
        }
        primaryCta={{
          label: gData.primaryCta,
          href: getWhatsAppUrl(t.whatsappMessages.googleAds),
          isExternal: true,
        }}
        secondaryCta={{
          label: gData.secondaryCta,
          onClick: scrollToStages,
        }}
        trustBadges={gData.trustBadges}
      />

      {/* Service Explanation */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {gData.problemKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
              {gData.problemTitle}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {gData.problemParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={
                    idx === gData.problemParagraphs.length - 1
                      ? 'font-medium text-slate-900'
                      : undefined
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              {gData.benefitsHeading}
            </h3>
            <ul className="space-y-4">
              {gData.benefitsList.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  {benefitIcons[idx % benefitIcons.length]}
                  <div>
                    <strong className="block text-slate-900 font-semibold">
                      {benefit.title}
                    </strong>
                    {benefit.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 Process Stages */}
      <section
        id="etapas"
        className="py-20 bg-slate-50 border-t border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {gData.stagesKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
              {gData.stagesTitle}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {gData.stagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gData.stages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm"
              >
                <span className="font-mono text-2xl font-extrabold text-[#1A73E8] block mb-3">
                  {stage.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Limits and Transparency */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {gData.boundariesKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            {gData.boundariesTitle}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {gData.boundariesSubtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm divide-y divide-slate-100">
          {gData.boundaries.map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 flex items-start gap-4">
              {item.isIncluded ? (
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
              )}
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Ads FAQs */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {gData.faqKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              {gData.faqTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {gData.faqSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {gData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/90 rounded-xl overflow-hidden bg-white"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {gData.bottomCtaTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            {gData.bottomCtaSubtitle}
          </p>
          <a
            href={getWhatsAppUrl(t.whatsappMessages.googleAds)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            <span>{gData.bottomCtaButton}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>
        </div>
      </section>
    </main>
  );
};
