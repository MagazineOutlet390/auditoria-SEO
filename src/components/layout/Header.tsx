import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, getWhatsAppLink } from '../../data/siteData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-md py-1"
          aria-label="Auditoria SEO - Início"
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
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`transition-colors py-1 relative whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded ${
                  isActive
                    ? 'text-[#1A73E8] font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A73E8] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppLink('Olá! Gostaria de falar sobre o meu projeto e melhorar a presença digital do meu negócio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] transition-all rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap shrink-0"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1A73E8] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar sobre o meu projeto e melhorar a presença digital do meu negócio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-center text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
