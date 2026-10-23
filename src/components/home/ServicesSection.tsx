import React from 'react';
import { MAIN_SERVICES } from '../../data/siteData';
import { Check, ArrowRight, Layout, MapPin } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            Nossos Serviços Principais
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            Soluções digitais focadas em clareza, relevância e geração de contatos
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Desenvolvemos a estrutura que sua empresa precisa para ser encontrada por quem procura os seus serviços e transmitir autoridade no primeiro clique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {MAIN_SERVICES.map((service, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1A73E8] flex items-center justify-center mb-6">
                    {isFirst ? <Layout className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#174EA6] mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      O que entregamos nesta solução:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={service.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A73E8] hover:text-[#174EA6] transition-colors group"
                  >
                    <span>{service.actionLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
