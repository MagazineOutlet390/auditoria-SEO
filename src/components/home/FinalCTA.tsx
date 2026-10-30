import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const FinalCTA: React.FC = () => {
  const { t, getWhatsAppUrl } = useLanguage();
  const cta = t.home.finalCta;

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual geometry */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1A73E8] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
          {cta.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-6 max-w-3xl mx-auto leading-tight">
          {cta.title}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          {cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(t.whatsappMessages.finalCta)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{cta.primaryButton}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8]" />
          </a>

          <a
            href="tel:+5519989332087"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>(19) 98933-2087</span>
          </a>
        </div>
      </div>
    </section>
  );
};

