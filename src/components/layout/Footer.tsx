import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteData';
import { useLanguage } from '../../i18n/LanguageContext';
import { Phone, ShieldCheck, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, navLinks, currentRoutes, getWhatsAppUrl } = useLanguage();

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
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to={currentRoutes.seoServices} className="hover:text-white transition-colors">
                  {t.nav.seoServices}
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
                <Link to={currentRoutes.home} className="hover:text-white transition-colors">
                  {t.home.services.landingTitle}
                </Link>
              </li>
              <li>
                <Link to={currentRoutes.home} className="hover:text-white transition-colors">
                  {t.home.services.localSeoTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.footer.whiteHat}</span>
            </span>
            <span className="text-slate-600">·</span>
            <span>{t.footer.coverage}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
