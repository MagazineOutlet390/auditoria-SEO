import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const hData = t.home.howItWorks;

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {hData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            {hData.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {hData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hData.steps.map((item) => (
            <div
              key={item.step}
              className="relative p-6 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#1A73E8]/30 hover:shadow-sm transition-all"
            >
              <div className="font-mono text-2xl font-extrabold text-[#1A73E8] mb-3">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
