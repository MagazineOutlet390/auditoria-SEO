import React from 'react';
import { Check, Minus, ArrowRight, Search, Compass, Layers } from 'lucide-react';
import { HomeCommercialContent } from '../../i18n/homeCommercial';

interface HomeModalitiesAndAuditsProps {
  content: HomeCommercialContent;
  lang: 'pt' | 'es' | 'en';
  getWhatsAppUrl: (message: string) => string;
}

const AUDIT_ICONS = [Search, Compass, Layers] as const;

export const HomeModalitiesAndAudits: React.FC<HomeModalitiesAndAuditsProps> = ({
  content,
  lang,
  getWhatsAppUrl,
}) => {
  const { modalities, auditsSection } = content;
  const includedText = lang === 'pt' ? 'Incluso' : lang === 'es' ? 'Incluido' : 'Included';
  const notIncludedText = lang === 'pt' ? 'Não incluso' : lang === 'es' ? 'No incluido' : 'Not included';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SECTION 2: TWO COMMERCIAL LINES PRESENTATION */}
      <section
        id="modalidades"
        className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
              {modalities.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
              {modalities.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {modalities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Line 1 Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 border-t-2 border-t-[#1A73E8] p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] mb-2">
                  {modalities.auditCard.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  {modalities.auditCard.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {modalities.auditCard.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {modalities.auditCard.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => scrollToSection('auditorias')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1A73E8] bg-blue-50/60 hover:bg-blue-50 border border-blue-200/80 rounded-lg transition-colors w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                >
                  <span>{modalities.auditCard.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>

            {/* Line 2 Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 border-t-2 border-t-slate-900 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  {modalities.recurringCard.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                  {modalities.recurringCard.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {modalities.recurringCard.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {modalities.recurringCard.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-5 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => scrollToSection('planos')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <span>{modalities.recurringCard.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Practical Distinction Callout */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
              {modalities.differenceTitle}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {modalities.differenceText}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: LINE 1 — PROFESSIONAL SEO AUDITS */}
      <section
        id="auditorias"
        className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
              {auditsSection.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
              {auditsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              {auditsSection.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200/90 rounded-lg px-4 py-3">
              {auditsSection.punctuationNote}
            </p>
          </div>

          {/* 3 Audit Tiers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-16">
            {auditsSection.items.map((audit, idx) => {
              const IconComp = AUDIT_ICONS[idx % AUDIT_ICONS.length];
              return (
                <article
                  key={audit.id}
                  className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white transition-colors ${
                    audit.featured
                      ? 'border-2 border-[#1A73E8] shadow-sm'
                      : 'border border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                        {audit.eyebrow}
                      </span>
                      <IconComp className="w-4 h-4 text-[#1A73E8] shrink-0" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5">
                      {audit.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {audit.positioning}
                    </p>

                    <div className="pt-5 border-t border-slate-100 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                        {auditsSection.deliverablesLabel}
                      </h4>
                      <ul className="space-y-2.5">
                        {audit.deliverables.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <a
                      href={getWhatsAppUrl(audit.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg font-semibold text-sm text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        audit.featured
                          ? 'bg-[#1A73E8] hover:bg-[#174EA6] text-white focus-visible:ring-[#1A73E8]'
                          : 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900'
                      }`}
                    >
                      <span>{audit.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Audits Comparison Table */}
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <div className="max-w-3xl mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5">
                {auditsSection.comparisonTitle}
              </h3>
              <p className="text-sm text-slate-600">
                {auditsSection.comparisonSubtitle}
              </p>
            </div>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3.5 pr-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      {auditsSection.deliverablesLabel}
                    </th>
                    {auditsSection.comparisonColumns.map((col, colIdx) => (
                      <th
                        key={colIdx}
                        className={`py-3.5 px-3 text-xs sm:text-sm font-bold text-slate-900 text-center w-1/5 ${
                          colIdx === 1 ? 'text-[#1A73E8]' : ''
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 bg-white">
                  {auditsSection.comparisonRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60">
                      <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-slate-800">
                        {row.label}
                      </td>
                      {row.values.map((val, vIdx) => (
                        <td key={vIdx} className="py-3.5 px-3 text-center text-xs sm:text-sm text-slate-700">
                          {val === true ? (
                            <Check className="w-4 h-4 text-[#1A73E8] mx-auto" aria-label={includedText} />
                          ) : val === false ? (
                            <Minus className="w-4 h-4 text-slate-300 mx-auto" aria-label={notIncludedText} />
                          ) : (
                            <span className="font-medium text-slate-700">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
