import React, { createContext, useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, NavLinkItem } from './types';
import { TRANSLATIONS, SiteTranslations } from './translations';
import { getLanguageFromPathname, getEquivalentPath, ROUTES_BY_LANG } from './routes';
import { SITE_CONFIG } from '../data/siteData';

interface LanguageContextValue {
  lang: Language;
  t: SiteTranslations;
  setLanguage: (targetLang: Language) => void;
  getWhatsAppUrl: (customMessage?: string) => string;
  getLocalizedPath: (path: string) => string;
  navLinks: NavLinkItem[];
  currentRoutes: typeof ROUTES_BY_LANG['pt'];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = useMemo(() => {
    return getLanguageFromPathname(location.pathname);
  }, [location.pathname]);

  const t = useMemo(() => {
    return TRANSLATIONS[lang] || TRANSLATIONS.pt;
  }, [lang]);

  const setLanguage = (targetLang: Language) => {
    if (targetLang === lang) return;
    const targetPath = getEquivalentPath(location.pathname, targetLang);
    navigate(targetPath, { replace: false });
  };

  const getWhatsAppUrl = (customMessage?: string) => {
    const message = customMessage || t.whatsappMessages.default;
    return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const getLocalizedPath = (path: string): string => {
    const routes = ROUTES_BY_LANG[lang];
    if (path === '/' || path === '') return routes.home;
    if (path === '/servicos-seo' || path === '/servicios-seo' || path === '/seo-services') return routes.seoServices;
    if (path === '/google-ads') return routes.googleAds;
    if (path === '/modernizacao-sites' || path === '/modernizacion-sitios' || path === '/site-modernization') return routes.modernization;
    if (path === '/blog') return routes.blog;
    if (path.startsWith('/blog/')) {
      const slug = path.replace(/^\/blog\//, '').replace(/^\/es\/blog\//, '').replace(/^\/en\/blog\//, '');
      return `${routes.blog}/${slug}`;
    }
    return path;
  };

  const navLinks: NavLinkItem[] = useMemo(() => {
    const routes = ROUTES_BY_LANG[lang];
    return [
      { name: t.nav.home, path: routes.home },
      { name: t.nav.seoServices, path: routes.seoServices },
      { name: t.nav.googleAds, path: routes.googleAds },
      { name: t.nav.modernization, path: routes.modernization },
      { name: t.nav.blog, path: routes.blog },
    ];
  }, [lang, t]);

  const value: LanguageContextValue = {
    lang,
    t,
    setLanguage,
    getWhatsAppUrl,
    getLocalizedPath,
    navLinks,
    currentRoutes: ROUTES_BY_LANG[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
