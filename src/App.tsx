import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { SeoServicesPage } from './pages/SeoServicesPage';
import { GoogleAdsPage } from './pages/GoogleAdsPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-[#202124]">
        {/* Universal Accessible Top Bar */}
        <Header />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicos-seo" element={<SeoServicesPage />} />
            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Floating WhatsApp Action Button (Strictly on Home, SEO Services, and Google Ads; hidden on Blog) */}
        <FloatingWhatsApp />

        {/* Institutional Commercial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
