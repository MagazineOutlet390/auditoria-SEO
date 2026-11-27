import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { UsaAgencyContent } from '../../i18n/usaAgencyData';
import { SITE_CONFIG } from '../../data/siteData';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { ShimmerHeading } from './UsaMotionHeadings';

interface UsaHeroProps {
  content: UsaAgencyContent['hero'];
  htmlLang: string;
  pagePath: string;
  onJumpToConsultation: () => void;
}

export const UsaHero: React.FC<UsaHeroProps> = ({
  content,
  htmlLang,
  pagePath,
  onJumpToConsultation,
}) => {
  const hasCalendly = Boolean(SITE_CONFIG.calendlyUsaUrl);

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const desktopBgLayerRef = useRef<HTMLDivElement | null>(null);
  const mobileBgLayerRef = useRef<HTMLDivElement | null>(null);

  const phrases = content.typewriterPhrases;
  // Start with the first phrase fully rendered so SSR/SSG and client hydration match with zero flicker
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(() => (phrases[0] ? phrases[0].length : 0));
  const [phase, setPhase] = useState<'pausing' | 'deleting' | 'typing'>('pausing');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Sync phrase when switching language dynamically
  useEffect(() => {
    setPhraseIndex(0);
    setCharCount(phrases[0] ? phrases[0].length : 0);
    setPhase('pausing');
  }, [phrases]);

  // Listen to prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Typewriter loop (client-only, preserves semantic text statically in sr-only)
  useEffect(() => {
    if (prefersReducedMotion || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex % phrases.length] || '';
    let delay = 55;

    if (phase === 'pausing') {
      delay = 1900;
    } else if (phase === 'deleting') {
      delay = 32;
    } else {
      delay = 58;
    }

    const timer = window.setTimeout(() => {
      if (phase === 'pausing') {
        setPhase('deleting');
      } else if (phase === 'deleting') {
        if (charCount > 0) {
          setCharCount((c) => c - 1);
        } else {
          setPhraseIndex((idx) => (idx + 1) % phrases.length);
          setPhase('typing');
        }
      } else {
        if (charCount < currentPhrase.length) {
          setCharCount((c) => c + 1);
        } else {
          setPhase('pausing');
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phase, charCount, phraseIndex, phrases, prefersReducedMotion]);

  // Expressive Desktop & Mobile Parallax via GPU translate3d + requestAnimationFrame (zero re-renders on scroll)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const applyParallax = () => {
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        if (desktopBgLayerRef.current) {
          desktopBgLayerRef.current.style.transform = 'none';
        }
        if (mobileBgLayerRef.current) {
          mobileBgLayerRef.current.style.transform = 'none';
        }
        return;
      }

      const heroHeight = heroSectionRef.current?.offsetHeight || 640;
      const scrollY = Math.max(0, window.scrollY);
      const desktopMax = Math.max(heroHeight * 0.56, 320);
      const desktopOffset = Math.min(scrollY * 0.62, desktopMax);
      const mobileOffset = Math.min(scrollY * 0.58, 220);

      if (desktopBgLayerRef.current) {
        desktopBgLayerRef.current.style.transform = `translate3d(0, ${desktopOffset.toFixed(1)}px, 0)`;
      }
      if (mobileBgLayerRef.current) {
        mobileBgLayerRef.current.style.transform = `translate3d(0, ${mobileOffset.toFixed(1)}px, 0)`;
      }
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        applyParallax();
        rafId = null;
      });
    };

    applyParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', applyParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', applyParallax);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);

  const activePhrase = phrases[phraseIndex % phrases.length] || '';
  const visibleTypedText = prefersReducedMotion
    ? phrases[0] || ''
    : activePhrase.slice(0, charCount);

  const handlePrimaryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackAnalyticsEvent('schedule_consultation_click', {
      page_language: htmlLang,
      cta_location: 'hero_primary',
      page_path: pagePath,
    });
    if (hasCalendly) {
      trackAnalyticsEvent('calendly_click', {
        page_language: htmlLang,
        cta_location: 'hero_primary',
        page_path: pagePath,
      });
      return;
    }
    e.preventDefault();
    onJumpToConsultation();
  };

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="relative z-0 overflow-hidden bg-white border-b border-slate-200/80"
      aria-labelledby="usa-hero-heading"
    >
      {/* Desktop full-bleed right-aligned showcase backdrop with expressive parallax */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[64%] pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={desktopBgLayerRef}
          className="absolute -top-[8%] inset-x-0 h-[120%] will-change-transform"
        >
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/usa/hero-seo-usa-960.webp"
              type="image/webp"
            />
            <img
              src="/images/usa/hero-seo-usa-1600.webp"
              alt=""
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-right"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.94) 22%, rgba(255,255,255,0.34) 52%, rgba(255,255,255,0) 80%)',
          }}
        />
      </div>

      {/* Mobile / Tablet Top Cinematic Parallax Visual Stage (G mascot preserved cleanly on the right) */}
      <div className="relative lg:hidden w-full h-[270px] sm:h-[340px] overflow-hidden bg-slate-950">
        <div
          ref={mobileBgLayerRef}
          className="absolute -top-[10%] inset-x-0 h-[126%] will-change-transform"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/usa/hero-seo-usa-1600.webp"
              type="image/webp"
            />
            <img
              src="/images/usa/hero-seo-usa-960.webp"
              alt={content.imageAlt}
              width={960}
              height={540}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              className="w-full h-full object-cover object-right"
            />
          </picture>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content Layer (Rises smoothly over parallax backdrop on mobile & desktop) */}
      <div className="relative z-20 max-w-7xl mx-auto lg:px-8 lg:py-20">
        <div className="-mt-7 lg:mt-0 rounded-t-3xl lg:rounded-none bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none shadow-[0_-14px_34px_-12px_rgba(15,23,42,0.18)] lg:shadow-none px-5 pt-7 pb-10 sm:px-6 lg:p-0 max-w-2xl lg:max-w-[570px]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
            {content.eyebrow}
          </p>

          <ShimmerHeading
            as="h1"
            id="usa-hero-heading"
            fadeInLeft={false}
            className="mt-3.5 text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance"
          >
            {content.h1}
          </ShimmerHeading>

          {/* Layout-Stable Typewriter Service Line (Full service list preserved statically for SEO/SR) */}
          {phrases.length > 0 && (
            <div className="mt-4 min-h-[3.1rem] sm:min-h-[1.85rem] flex items-start sm:items-center text-sm sm:text-base font-semibold text-[#174EA6]">
              <span className="sr-only">
                {content.typewriterLabel} {phrases.join(', ')}
              </span>
              <span aria-hidden="true" className="inline-flex flex-wrap items-center gap-x-2">
                <span className="text-slate-500 font-medium">{content.typewriterLabel}</span>
                <span className="font-mono font-semibold text-[#1A73E8] inline-flex items-center">
                  <span>{visibleTypedText}</span>
                  {!prefersReducedMotion && (
                    <span className="inline-block w-0.5 h-4 ml-1 bg-[#1A73E8] animate-cursor" />
                  )}
                </span>
              </span>
            </div>
          )}

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.description}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">
            <a
              href={hasCalendly ? SITE_CONFIG.calendlyUsaUrl : '#consultation'}
              target={hasCalendly ? '_blank' : undefined}
              rel={hasCalendly ? 'noopener noreferrer' : undefined}
              onClick={handlePrimaryClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.99] transition-all rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{content.primaryCta}</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap"
            >
              <span>{content.secondaryCta}</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#1A73E8]" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-slate-700 border-t border-slate-200/90 pt-4">
            {content.complementaryText}
          </p>

          <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
            {content.conceptualNotice}
          </p>
        </div>
      </div>

      {/* Screen-reader semantic image description for desktop visual */}
      <img
        src="/images/usa/hero-seo-usa-1600.webp"
        alt={content.imageAlt}
        width={1600}
        height={900}
        className="sr-only"
      />
    </section>
  );
};
