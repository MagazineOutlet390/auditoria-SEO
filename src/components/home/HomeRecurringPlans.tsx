import React from 'react';
import { Check, Minus, ArrowRight, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { HomeCommercialContent } from '../../i18n/homeCommercial';

interface HomeRecurringPlansProps {
  content: HomeCommercialContent;
  lang: 'pt' | 'es' | 'en';
  getWhatsAppUrl: (message: string) => string;
}

const PLAN_ICONS = [ShieldCheck, TrendingUp, Award] as const;

export const HomeRecurringPlans: React.FC<HomeRecurringPlansProps> = ({
  content,
  lang,
  getWhatsAppUrl,
}) => {
  const { plansSection } = content;
  const includedText = lang === 'pt' ? 'Incluso' : lang === 'es' ? 'Incluido' : 'Included';
  const notIncludedText = lang === 'pt' ? 'Não incluso' : lang === 'es' ? 'No incluido' : 'Not included';

  return (
    <section
      id="planos"
      className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
            {plansSection.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
            {plansSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            {plansSection.subtitle}
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200/90 rounded-lg px-4 py-3">
            {plansSection.proposalNote}
          </p>
        </div>

        {/* 3 Recurring Plan Cards (no public prices) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-16">
          {plansSection.plans.map((plan, idx) => {
            const IconComp = PLAN_ICONS[idx % PLAN_ICONS.length];
            const isRecommended = Boolean(plan.recommended);
            const isPremium = Boolean(plan.premium);

            return (
              <article
                key={plan.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-white transition-colors ${
                  isRecommended
                    ? 'border-2 border-[#1A73E8] shadow-sm'
                    : isPremium
                    ? 'border border-slate-900/25 border-t-2 border-t-slate-900'
                    : 'border border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 min-h-[20px] mb-3">
                    {plan.badge ? (
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isRecommended ? 'text-[#1A73E8]' : 'text-slate-900'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        SEO
                      </span>
                    )}
                    <IconComp
                      className={`w-4 h-4 shrink-0 ${
                        isRecommended ? 'text-[#1A73E8]' : 'text-slate-500'
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1.5">
                    {plan.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#174EA6] mb-3">
                    {plan.headline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Full Deliverable List (kept visible in DOM for SEO & buyer evaluation) */}
                  <div className="pt-5 border-t border-slate-100 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
                      {plansSection.deliverablesLabel}
                    </h4>
                    <ul className="space-y-2">
                      {plan.deliverables.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2 text-[13px] text-slate-700"
                        >
                          <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto space-y-5 pt-5 border-t border-slate-100">
                  <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-4">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {plan.objectiveLabel}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {plan.objective}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg font-semibold text-sm text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isRecommended
                        ? 'bg-[#1A73E8] hover:bg-[#174EA6] text-white focus-visible:ring-[#1A73E8]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Full Grouped Comparison Matrix of Recurring Plans */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5">
              {plansSection.comparisonTitle}
            </h3>
            <p className="text-sm text-slate-600">
              {plansSection.comparisonSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3.5 pr-4 text-xs font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    {plansSection.deliverablesLabel}
                  </th>
                  {plansSection.comparisonColumns.map((col, colIdx) => (
                    <th
                      key={colIdx}
                      className={`py-3.5 px-3 text-xs sm:text-sm font-bold text-center w-1/5 ${
                        colIdx === 1 ? 'text-[#1A73E8]' : 'text-slate-900'
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80">
                {plansSection.comparisonGroups.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-slate-50/90">
                      <td
                        colSpan={4}
                        className="py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-800"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50">
                        <td className="py-3.5 px-4 text-xs sm:text-sm font-medium text-slate-800">
                          {row.label}
                        </td>
                        {row.values.map((val, vIdx) => (
                          <td
                            key={vIdx}
                            className="py-3.5 px-3 text-center text-xs sm:text-sm text-slate-700"
                          >
                            {val === true ? (
                              <Check
                                className="w-4 h-4 text-[#1A73E8] mx-auto"
                                aria-label={includedText}
                              />
                            ) : val === false ? (
                              <Minus
                                className="w-4 h-4 text-slate-300 mx-auto"
                                aria-label={notIncludedText}
                              />
                            ) : (
                              <span className="font-medium text-slate-700">
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
