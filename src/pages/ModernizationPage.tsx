import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { getHreflangs } from '../i18n/routes';
import { useLocation } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Server,
  Cloud,
  ShieldCheck,
  Zap,
  ClipboardCheck,
  Globe2,
  AlertCircle,
  FileCheck2,
} from 'lucide-react';

export const ModernizationPage: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToPillars = () => {
    const el = document.getElementById('solucoes-modernizacao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pData = t.modernizationPage;
  const hreflangs = getHreflangs(location.pathname);

  // Icon mapping for the 6 technical pillars
  const pillarIcons: Record<string, React.ReactNode> = {
    rebuilding: <RefreshCw className="w-6 h-6 text-[#1A73E8]" />,
    migration: <Server className="w-6 h-6 text-[#1A73E8]" />,
    hosting: <Cloud className="w-6 h-6 text-[#1A73E8]" />,
    maintenance: <ShieldCheck className="w-6 h-6 text-[#1A73E8]" />,
    'security-performance': <Zap className="w-6 h-6 text-[#1A73E8]" />,
    evaluation: <ClipboardCheck className="w-6 h-6 text-[#1A73E8]" />,
  };

  return (
    <main className="bg-white">
      {/* Route-specific Multilingual SEO Metadata */}
      <SEOHead
        title={t.meta.modernizationTitle}
        description={t.meta.modernizationDescription}
        canonicalPath={location.pathname}
        ogType="website"
        currentLang={lang}
        hreflangs={hreflangs}
      />

      {/* Hero Header with Identical Visual Identity and Layout */}
      <PageHero
        kicker={pData.kicker}
        title={
          <>
            {pData.titlePart1}{' '}
            <span className="text-shimmer inline">
              {pData.titleShimmer}
            </span>
          </>
        }
        typewriterLabel={pData.typewriterLabel}
        typewriterPhrases={pData.typewriterPhrases}
        subtitle={pData.subtitle}
        extraBanner={
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/90 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="font-semibold text-slate-900">
                {pData.positioningAlert.title}
              </strong>{' '}
              {pData.positioningAlert.text}
            </div>
          </div>
        }
        primaryCta={{
          label: pData.primaryCta,
          href: getWhatsAppUrl(t.whatsappMessages.modernization),
          isExternal: true,
        }}
        secondaryCta={{
          label: pData.secondaryCta,
          onClick: scrollToPillars,
        }}
        trustBadges={pData.trustBadges}
      />

      {/* The 6 Technical Pillars Section */}
      <section
        id="solucoes-modernizacao"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {pData.pillarsKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {pData.pillarsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {pData.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pData.pillars.map((pillar) => {
            const icon = pillarIcons[pillar.id] || <FileCheck2 className="w-6 h-6 text-[#1A73E8]" />;

            return (
              <div
                key={pillar.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white ${
                  pillar.highlighted
                    ? 'border-2 border-[#1A73E8] shadow-md relative'
                    : 'border border-slate-200/90 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50/90 flex items-center justify-center mb-5 border border-blue-100">
                    {icon}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-[#174EA6] mb-4 min-h-[32px] leading-relaxed">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      {lang === 'pt'
                        ? 'Entregáveis & Diferenciais:'
                        : lang === 'es'
                        ? 'Entregables & Beneficios:'
                        : 'Deliverables & Benefits:'}
                    </h4>
                    <ul className="space-y-2.5">
                      {pillar.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(
                      `${t.whatsappMessages.modernization} (${pillar.title})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-xs sm:text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      pillar.highlighted
                        ? 'bg-[#1A73E8] hover:bg-[#174EA6] text-white shadow-sm focus-visible:ring-[#1A73E8]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900'
                    }`}
                  >
                    <span>
                      {lang === 'pt'
                        ? 'Consultar sobre este serviço'
                        : lang === 'es'
                        ? 'Consultar este servicio'
                        : 'Inquire about this service'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Target Markets (Brazil, Paraguay, Argentina, Chile & Global English) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-[#1A73E8]" />
              <span>{pData.marketsKicker}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              {pData.marketsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {pData.marketsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pData.markets.map((market, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {market.region}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {market.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {market.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Methodology Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {pData.processKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {pData.processTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {pData.processSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pData.processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-sm"
            >
              <span className="font-mono text-2xl font-extrabold text-[#1A73E8] block mb-3">
                {step.number}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conceptual & Technical Clarifications */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
              {pData.technicalClarificationsKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
              {pData.technicalClarificationsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {pData.technicalClarificationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pData.clarifications.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {pData.faqKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {pData.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {pData.faqSubtitle}
          </p>
        </div>

        <div className="space-y-4">
          {pData.faqs.map((faq, idx) => {
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
                  <span className="text-base flex items-center gap-2.5">
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

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {pData.bottomCtaTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            {pData.bottomCtaSubtitle}
          </p>
          <a
            href={getWhatsAppUrl(t.whatsappMessages.modernization)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
          >
            <span>{pData.bottomCtaButton}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>
        </div>
      </section>
    </main>
  );
};
