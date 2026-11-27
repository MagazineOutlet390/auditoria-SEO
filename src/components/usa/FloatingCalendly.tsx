import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { getRouteKeyFromPathname } from '../../i18n/routes';
import { SITE_CONFIG } from '../../data/siteData';
import { trackAnalyticsEvent } from '../../lib/analytics';

const LABELS: Record<'en' | 'pt' | 'es', string> = {
  en: 'Book a Free Call',
  pt: 'Agendar Consulta Gratuita',
  es: 'Agendar Consulta Gratuita',
};

export const FloatingCalendly: React.FC = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const isUsaAgency = getRouteKeyFromPathname(location.pathname) === 'usaAgency';
  const calendlyUrl = SITE_CONFIG.calendlyUsaUrl;
  const isEnabled = isUsaAgency && Boolean(calendlyUrl);

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined' || typeof document === 'undefined') {
      setIsVisible(false);
      return;
    }

    let rafId: number | null = null;

    const evaluateVisibility = () => {
      const heroEl = document.getElementById('hero');
      const heroPassed = heroEl
        ? heroEl.getBoundingClientRect().bottom <= 88
        : window.scrollY > 480;

      // Never overlap active consultation form inputs, virtual keyboards, or submit button
      const consultationEl = document.getElementById('consultation');
      const activeEl = document.activeElement;
      const isFormFocused = Boolean(
        consultationEl &&
          activeEl &&
          consultationEl.contains(activeEl) &&
          (activeEl.tagName === 'INPUT' ||
            activeEl.tagName === 'TEXTAREA' ||
            activeEl.tagName === 'SELECT')
      );

      let isFormCoveringCorner = false;
      const formEl = consultationEl?.querySelector('form');
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const vh = window.innerHeight;
        // Hide floating CTA when the form occupies the bottom-right viewport zone
        if (rect.top < vh - 16 && rect.bottom > vh - 104) {
          isFormCoveringCorner = true;
        }
      }

      const shouldShow = heroPassed && !isFormFocused && !isFormCoveringCorner;
      setIsVisible(shouldShow);
    };

    const scheduleEval = () => {
      if (typeof window.requestAnimationFrame !== 'function') {
        evaluateVisibility();
        return;
      }
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        evaluateVisibility();
        rafId = null;
      });
    };

    const heroEl = document.getElementById('hero');
    let observer: IntersectionObserver | null = null;
    if (heroEl && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            scheduleEval();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(heroEl);
    }

    evaluateVisibility();
    window.addEventListener('scroll', scheduleEval, { passive: true });
    window.addEventListener('resize', scheduleEval, { passive: true });
    document.addEventListener('focusin', scheduleEval);
    document.addEventListener('focusout', scheduleEval);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', scheduleEval);
      window.removeEventListener('resize', scheduleEval);
      document.removeEventListener('focusin', scheduleEval);
      document.removeEventListener('focusout', scheduleEval);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isEnabled, location.pathname]);

  if (!isEnabled) {
    return null;
  }

  const label = LABELS[lang] || LABELS.en;
  const htmlLang = lang === 'es' ? 'es-419' : lang === 'pt' ? 'pt-BR' : 'en-US';

  const handleClick = () => {
    trackAnalyticsEvent('calendly_click', {
      page_language: htmlLang,
      cta_location: 'floating_button',
      page_path: location.pathname,
    });
  };

  return (
    <aside
      aria-label={label}
      aria-hidden={!isVisible}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
        onClick={handleClick}
        aria-label={`${label} — Calendly`}
        className="inline-flex items-center gap-2.5 bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/15 shadow-[0_10px_28px_-6px_rgba(26,115,232,0.45)] hover:shadow-[0_14px_32px_-6px_rgba(23,78,166,0.52)] transition-all duration-200 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
      >
        <Calendar className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-white" aria-hidden="true" />
        <span className="font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap text-white">
          {label}
        </span>
      </a>
    </aside>
  );
};
