import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { HomeCommercialContent } from '../../i18n/homeCommercial';
import { useLanguage } from '../../i18n/LanguageContext';
import { UsFlagIcon } from '../usa/UsFlagIcon';
import { RouteMapping } from '../../i18n/types';

interface HomeLocalAndComplementaryProps {
  content: HomeCommercialContent;
  getWhatsAppUrl: (message: string) => string;
  currentRoutes: RouteMapping;
}

export const HomeLocalAndComplementary: React.FC<HomeLocalAndComplementaryProps> = ({
  content,
  getWhatsAppUrl,
  currentRoutes,
}) => {
  const { lang } = useLanguage();
  const { localSeoSection, additionalServices } = content;

  const usaContextualCard =
    lang === 'es'
      ? {
          kicker: 'Servicios Internacionales de SEO',
          title: 'SEO para Empresas en Estados Unidos',
          description:
            'Auditorías técnicas, optimización on-page y estrategias de búsqueda local diseñadas para empresas en EE. UU.',
          cta: 'Explorar servicios SEO en EE. UU.',
        }
      : lang === 'en'
      ? {
          kicker: 'International SEO Services',
          title: 'Professional SEO Services for US Businesses',
          description:
            'Human-led technical SEO audits, on-page optimization, and local search strategies tailored to companies across the United States.',
          cta: 'Explore our US SEO services',
        }
      : {
          kicker: 'Atuação Internacional',
          title: 'SEO para Empresas nos Estados Unidos',
          description:
            'Auditorias técnicas, otimização on-page e estratégias de SEO Local desenhadas para empresas que competem no mercado americano.',
          cta: 'Explorar serviços de SEO para os EUA',
        };

  return (
    <>
      {/* SECTION 5: INTEGRATED LOCAL SEO & GOOGLE BUSINESS PROFILE */}
      <section
        id="seo-local-integrado"
        className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-7 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1A73E8] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{localSeoSection.kicker}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                  {localSeoSection.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {localSeoSection.description}
                </p>

                <div className="bg-white border border-slate-200/90 rounded-xl p-5">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {localSeoSection.eligibilityNote}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to={currentRoutes.localSeo}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                  >
                    <span>{localSeoSection.ctaButton}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                  {localSeoSection.frontsTitle}
                </h3>
                <ul className="space-y-3.5">
                  {localSeoSection.fronts.map((front, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{front}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPLEMENTARY / STANDALONE SERVICES */}
      <section
        id="servicos-complementares"
        className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
              {additionalServices.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
              {additionalServices.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              {additionalServices.subtitle}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-200/90 rounded-lg px-4 py-3">
              {additionalServices.scopeNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.items.map((service) => {
              const targetRoute =
                service.internalRouteKey === 'googleAds'
                  ? currentRoutes.googleAds
                  : service.internalRouteKey === 'modernization'
                  ? currentRoutes.modernization
                  : null;

              return (
                <article
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A73E8] hover:text-[#174EA6] transition-colors"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    {targetRoute && service.internalRouteLabel && (
                      <div>
                        <Link
                          to={targetRoute}
                          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2"
                        >
                          <span>{service.internalRouteLabel}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Contextual Link to US Market SEO Landing Page */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                <UsFlagIcon />
                <span>{usaContextualCard.kicker}</span>
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {usaContextualCard.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {usaContextualCard.description}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to={currentRoutes.usaAgency}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>{usaContextualCard.cta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
