import React from 'react';
import { DIFFERENTIALS } from '../../data/siteData';
import { ShieldCheck } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Compromisso Técnico
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            Princípios reais que orientam cada entrega
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Sem promessas irreais de faturamento milionário ou primeira posição imediata. Nosso compromisso é com a qualidade técnica e a geração de oportunidades consistentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200/90 bg-white hover:border-[#1A73E8]/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#1A73E8]" />
                <h3 className="text-base font-bold text-slate-900">
                  {diff.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
