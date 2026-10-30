import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { SeoServicesPage } from './pages/SeoServicesPage';
import { GoogleAdsPage } from './pages/GoogleAdsPage';
import { ModernizationPage } from './pages/ModernizationPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-white text-[#202124]">
          {/* Universal Accessible Top Bar */}
          <Header />

          {/* Dynamic Route Pages */}
          <div className="flex-1">
            <Routes>
              {/* Portuguese (Default) */}
              <Route path="/" element={<HomePage />} />
              <Route path="/servicos-seo" element={<SeoServicesPage />} />
              <Route path="/google-ads" element={<GoogleAdsPage />} />
              <Route path="/modernizacao-sites" element={<ModernizationPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Spanish (Español) */}
              <Route path="/es" element={<HomePage />} />
              <Route path="/es/servicios-seo" element={<SeoServicesPage />} />
              <Route path="/es/google-ads" element={<GoogleAdsPage />} />
              <Route path="/es/modernizacion-sitios" element={<ModernizationPage />} />
              <Route path="/es/blog" element={<BlogListPage />} />
              <Route path="/es/blog/:slug" element={<BlogPostPage />} />

              {/* English */}
              <Route path="/en" element={<HomePage />} />
              <Route path="/en/seo-services" element={<SeoServicesPage />} />
              <Route path="/en/google-ads" element={<GoogleAdsPage />} />
              <Route path="/en/site-modernization" element={<ModernizationPage />} />
              <Route path="/en/blog" element={<BlogListPage />} />
              <Route path="/en/blog/:slug" element={<BlogPostPage />} />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Floating WhatsApp Action Button */}
          <FloatingWhatsApp />

          {/* Institutional Commercial Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

