import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';
import { HomeCommercialContent } from '../../i18n/homeCommercial';
import { SITE_CONFIG } from '../../data/siteData';

interface HomeMethodologyAndFaqProps {
  content: HomeCommercialContent;
  defaultWhatsappMessage: string;
  getWhatsAppUrl: (message: string) => string;
}

export const HomeMethodologyAndFaq: React.FC<HomeMethodologyAndFaqProps> = ({
  content,
  defaultWhatsappMessage,
  getWhatsAppUrl,
}) => {
  const { methodology, faqsSection } = content;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      {/* SECTION 7: METHODOLOGY (7 STEPS), DIFFERENTIALS & SPECIALIST */}
      <section
        id="metodologia"
        className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
              {methodology.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
              {methodology.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {methodology.subtitle}
            </p>
          </div>

          {/* 7 Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {methodology.steps.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-slate-50/75 rounded-xl border border-slate-200/90 flex flex-col"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1A73E8] text-white text-xs font-bold font-mono tabular-nums mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 7 Pillars / Differentials */}
          <div className="mb-12">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-6">
              {methodology.differentialsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {methodology.differentials.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-xl border border-slate-200/90 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1A73E8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {diff.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Leadership Block (Wesley Vieira — authentic project evidence only) */}
          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-3xl">
              <img
                src="/images/blog/wesley-vieira-autor.jpg"
                alt={methodology.specialistName}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                  {methodology.specialistEyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                  {methodology.specialistName}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {methodology.specialistRole}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {methodology.specialistBio}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{methodology.specialistWhatsappLabel}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={SITE_CONFIG.googleMapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#1A73E8] bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{methodology.specialistMapsLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: OBJECTIVE FAQ ACCORDION (no FAQPage JSON-LD schema) */}
      <section
        id="faq"
        className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
              {faqsSection.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
              {faqsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {faqsSection.subtitle}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqsSection.items.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const panelId = `home-faq-panel-${idx}`;
              return (
                <div
                  key={idx}
                  className="border border-slate-200/90 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1A73E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1A73E8]"
                  >
                    <span className="text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#1A73E8] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <div
                    id={panelId}
                    className={
                      isOpen
                        ? 'px-5 sm:px-6 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50'
                        : 'hidden'
                    }
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
