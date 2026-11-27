import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteData';
import { useLanguage } from '../../i18n/LanguageContext';
import { getEquivalentPath, getRouteKeyFromPathname } from '../../i18n/routes';
import { Language } from '../../i18n/types';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { UsFlagIcon } from '../usa/UsFlagIcon';
import { Phone, Mail, ShieldCheck, ExternalLink, MapPin, ArrowRight } from 'lucide-react';

const FOOTER_LANGS: Array<{ code: Language; label: string; hreflang: string }> = [
  { code: 'pt', label: 'Português', hreflang: 'pt-BR' },
  { code: 'es', label: 'Español', hreflang: 'es' },
  { code: 'en', label: 'English', hreflang: 'en' },
];

export const Footer: React.FC = () => {
  const { lang, t, navLinks, currentRoutes, getWhatsAppUrl } = useLanguage();
  const location = useLocation();
  const isUsaAgency = getRouteKeyFromPathname(location.pathname) === 'usaAgency';

  const homeServiceLabel =
    lang === 'es'
      ? 'Agencia y Planes de SEO'
      : lang === 'en'
      ? 'SEO Agency & Consulting Plans'
      : 'Agência & Planos de SEO';

  const usaServiceLabel = t.nav.usaAgency;

  const footerUsCallout =
    lang === 'es'
      ? {
          heading: 'Atención al Mercado de Estados Unidos',
          description:
            'SEO técnico, auditorías de sitios y estrategias de búsqueda local para empresas en EE. UU.',
          cta: 'Descubrir servicios SEO',
        }
      : lang === 'en'
      ? {
          heading: 'Serving the US Market',
          description:
            'Technical SEO, website audits and local search strategies for American businesses.',
          cta: 'Discover our SEO services',
        }
      : {
          heading: 'Atuação nos Estados Unidos',
          description:
            'SEO técnico, auditorias de sites e estratégias de busca local para empresas no mercado americano.',
          cta: 'Conhecer nossos serviços de SEO',
        };

  const usaHtmlLang = lang === 'es' ? 'es-419' : lang === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-slate-800">
          {/* Brand Info & Official Contact */}
          <div className="space-y-4">
            <Link to={currentRoutes.home} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#1A73E8] flex items-center justify-center text-white font-bold text-base">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Auditoria<span className="text-[#1A73E8]">SEO</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-2 space-y-2.5">
              {isUsaAgency ? (
                <div>
                  <a
                    href={`mailto:${SITE_CONFIG.commercialEmail}`}
                    onClick={() =>
                      trackAnalyticsEvent('email_click', {
                        page_language: usaHtmlLang,
                        cta_location: 'footer_contact',
                        page_path: location.pathname,
                      })
                    }
                    className="inline-flex items-center gap-2 text-sm text-[#1A73E8] hover:text-blue-400 font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{SITE_CONFIG.commercialEmail}</span>
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#1A73E8] hover:text-blue-400 font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{SITE_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              )}
              <div>
                <a
                  href={SITE_CONFIG.googleMapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#1A73E8]" />
                  <span>{t.footer.officialMaps}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.navHeading}
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    {link.isUsa && <UsFlagIcon />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.servicesHeading}
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to={currentRoutes.home} className="hover:text-white transition-colors">
                  {homeServiceLabel}
                </Link>
              </li>
              <li>
                <Link
                  to={currentRoutes.usaAgency}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <UsFlagIcon />
                  <span>{usaServiceLabel}</span>
                </Link>
              </li>
              <li>
                <Link to={currentRoutes.localSeo} className="hover:text-white transition-colors">
                  {t.nav.localSeo}
                </Link>
              </li>
              <li>
                <Link to={currentRoutes.modernization} className="hover:text-white transition-colors">
                  {t.nav.modernization}
                </Link>
              </li>
              <li>
                <Link to={currentRoutes.googleAds} className="hover:text-white transition-colors">
                  {t.nav.googleAds}
                </Link>
              </li>
              <li>
                <Link to={currentRoutes.blog} className="hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional US Market Strip */}
        <div className="py-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <UsFlagIcon />
              <span>{footerUsCallout.heading}</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-400">{footerUsCallout.description}</p>
          </div>
          <Link
            to={currentRoutes.usaAgency}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0 whitespace-nowrap"
          >
            <span>{footerUsCallout.cta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.footer.whiteHat}</span>
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>{t.footer.coverage}</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <nav aria-label={t.nav.langSelectAria} className="flex items-center gap-2.5">
              {FOOTER_LANGS.map((opt) => {
                const resolvedHreflang = isUsaAgency
                  ? opt.code === 'en'
                    ? 'en-US'
                    : opt.code === 'es'
                    ? 'es-419'
                    : 'pt-BR'
                  : opt.hreflang;
                return (
                  <Link
                    key={opt.code}
                    to={getEquivalentPath(location.pathname, opt.code)}
                    hrefLang={resolvedHreflang}
                    className={
                      opt.code === lang
                        ? 'text-white font-semibold'
                        : 'text-slate-400 hover:text-white transition-colors'
                    }
                  >
                    {opt.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
