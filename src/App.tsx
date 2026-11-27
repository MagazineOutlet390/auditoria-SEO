import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import {
  PageComponent,
  PageComponentKey,
  getRegisteredPageComponent,
  loadPageComponent,
} from './lib/routeRegistry';

const LazyRoutePage: React.FC<{ pageKey: PageComponentKey }> = ({ pageKey }) => {
  const registered = getRegisteredPageComponent(pageKey);
  const [Component, setComponent] = useState<PageComponent | null>(() => registered);

  useEffect(() => {
    let active = true;
    const syncComp = getRegisteredPageComponent(pageKey);
    if (syncComp) {
      setComponent(() => syncComp);
      return;
    }

    loadPageComponent(pageKey).then((loaded) => {
      if (active) {
        setComponent(() => loaded);
      }
    });

    return () => {
      active = false;
    };
  }, [pageKey]);

  const ActiveComp = registered || Component;
  if (!ActiveComp) {
    return <main className="min-h-[60vh] bg-white" aria-busy="true" />;
  }

  return <ActiveComp />;
};

export const AppContent: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#202124]">
        {/* Universal Accessible Top Bar */}
        <Header />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            {/* Portuguese (Default) */}
            <Route path="/" element={<LazyRoutePage pageKey="home" />} />
            <Route path="/seo-local" element={<LazyRoutePage pageKey="localSeo" />} />
            <Route path="/servicos-seo" element={<Navigate to="/" replace />} />
            <Route path="/google-ads" element={<LazyRoutePage pageKey="googleAds" />} />
            <Route path="/modernizacao-sites" element={<LazyRoutePage pageKey="modernization" />} />
            <Route path="/agencia-seo-eua" element={<LazyRoutePage pageKey="usaAgency" />} />
            <Route path="/blog" element={<LazyRoutePage pageKey="blog" />} />
            <Route path="/blog/:slug" element={<LazyRoutePage pageKey="blogPost" />} />

            {/* Spanish (Español) */}
            <Route path="/es" element={<LazyRoutePage pageKey="home" />} />
            <Route path="/es/seo-local" element={<LazyRoutePage pageKey="localSeo" />} />
            <Route path="/es/servicios-seo" element={<Navigate to="/es" replace />} />
            <Route path="/es/google-ads" element={<LazyRoutePage pageKey="googleAds" />} />
            <Route path="/es/modernizacion-sitios" element={<LazyRoutePage pageKey="modernization" />} />
            <Route path="/es/agencia-seo-estados-unidos" element={<LazyRoutePage pageKey="usaAgency" />} />
            <Route path="/es/blog" element={<LazyRoutePage pageKey="blog" />} />
            <Route path="/es/blog/:slug" element={<LazyRoutePage pageKey="blogPost" />} />

            {/* English */}
            <Route path="/en" element={<LazyRoutePage pageKey="home" />} />
            <Route path="/en/local-seo" element={<LazyRoutePage pageKey="localSeo" />} />
            <Route path="/en/seo-services" element={<Navigate to="/en" replace />} />
            <Route path="/en/google-ads" element={<LazyRoutePage pageKey="googleAds" />} />
            <Route path="/en/site-modernization" element={<LazyRoutePage pageKey="modernization" />} />
            <Route path="/en/seo-agency-usa" element={<LazyRoutePage pageKey="usaAgency" />} />
            <Route path="/en/blog" element={<LazyRoutePage pageKey="blog" />} />
            <Route path="/en/blog/:slug" element={<LazyRoutePage pageKey="blogPost" />} />

            {/* Catch-all 404 NotFoundPage (no redirect to homepage) */}
            <Route path="*" element={<LazyRoutePage pageKey="notFound" />} />
          </Routes>
        </div>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Institutional Commercial Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
