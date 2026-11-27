import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { getRouteKeyFromPathname } from '../../i18n/routes';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { LanguageSelector } from '../common/LanguageSelector';
import { UsFlagIcon } from '../usa/UsFlagIcon';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, navLinks, t, getWhatsAppUrl, currentRoutes } = useLanguage();

  const isUsaAgency = getRouteKeyFromPathname(location.pathname) === 'usaAgency';
  const usaCtaLabel =
    lang === 'es'
      ? 'Agendar Consultoría'
      : lang === 'pt'
      ? 'Agendar Consultoria'
      : 'Free Consultation';
  const usaHtmlLang = lang === 'es' ? 'es-419' : lang === 'pt' ? 'pt-BR' : 'en-US';

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUsaHeaderCta = (e: React.MouseEvent<HTMLAnchorElement>, ctaLocation: string) => {
    setMobileMenuOpen(false);
    trackAnalyticsEvent('schedule_consultation_click', {
      page_language: usaHtmlLang,
      cta_location: ctaLocation,
      page_path: location.pathname,
    });
    if (typeof document !== 'undefined') {
      const target = document.getElementById('consultation');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          to={currentRoutes.home}
          onClick={handleLinkClick}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-md py-1"
          aria-label={`${t.meta.siteName} - ${t.nav.home}`}
        >
          <div className="w-8 h-8 rounded-lg bg-[#1A73E8] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-[#174EA6] transition-colors">
            A
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Auditoria<span className="text-[#1A73E8]">SEO</span>
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Clean unboxed text links) */}
        <nav
          className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium text-slate-600"
          aria-label={t.nav.home}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`inline-flex items-center gap-1.5 transition-colors py-1 relative whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded ${
                  isActive
                    ? 'text-[#1A73E8] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.isUsa && <UsFlagIcon />}
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A73E8] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Language Selector & Primary Action CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Discreet Multilingual Selector */}
          <LanguageSelector />

          {/* Primary Action Button */}
          {isUsaAgency ? (
            <a
              href="#consultation"
              onClick={(e) => handleUsaHeaderCta(e, 'header_desktop')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] transition-all rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 opacity-90" aria-hidden="true" />
              <span>{usaCtaLabel}</span>
            </a>
          ) : (
            <a
              href={getWhatsAppUrl(t.whatsappMessages.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] transition-all rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap shrink-0"
            >
              <span>{t.nav.whatsappCta}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          )}
        </div>

        {/* Mobile / Tablet Header Zone: Selector (<md) + Hamburger (<lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="md:hidden">
            <LanguageSelector />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg"
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          {/* Language Pills in Mobile Drawer */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 px-1">
              {t.nav.langSelectAria}
            </span>
            <LanguageSelector isMobile={true} />
          </div>

          <div className="flex flex-col space-y-1 pt-1 border-t border-slate-100">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1A73E8] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.isUsa && <UsFlagIcon />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            {isUsaAgency ? (
              <a
                href="#consultation"
                onClick={(e) => handleUsaHeaderCta(e, 'header_mobile')}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-center text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>{usaCtaLabel}</span>
              </a>
            ) : (
              <a
                href={getWhatsAppUrl(t.whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-center text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm"
              >
                <span>{t.nav.whatsappCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
