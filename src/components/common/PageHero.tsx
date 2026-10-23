import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteData';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export interface PageHeroProps {
  kicker: string;
  title: React.ReactNode;
  typewriterLabel?: string;
  typewriterPhrases: string[];
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    isExternal?: boolean;
  };
  trustBadges?: string[];
  extraBanner?: React.ReactNode;
  imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  typewriterLabel = 'Foco em:',
  typewriterPhrases,
  subtitle,
  primaryCta,
  secondaryCta,
  trustBadges,
  extraBanner,
  imageAlt = 'Palestrante especialista da Auditoria SEO apresentando estratégias para visibilidade no Google',
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(typewriterPhrases[0] || '');
      return;
    }

    if (!typewriterPhrases.length) return;

    const targetPhrase = typewriterPhrases[phraseIndex % typewriterPhrases.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetPhrase.length) {
          setCurrentText(targetPhrase.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetPhrase.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typewriterPhrases, prefersReducedMotion]);

  // Subtle smooth background parallax listener with requestAnimationFrame
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);

  // Subtle background parallax translation offset clamped to prevent edge bleeding
  const bgParallaxOffset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.16, 75);

  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-slate-200/80">
      {/* Background Container: Desktop split & mobile adaptive with subtle parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right side photo anchor with smooth subtle parallax translation */}
        <div
          className="absolute -top-[6%] right-0 w-full lg:w-7/12 h-[116%] z-0 will-change-transform"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(0, ${bgParallaxOffset}px, 0)`,
            transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1)',
          }}
        >
          <img
            src={SITE_CONFIG.heroImage}
            alt={imageAlt}
            className="w-full h-full object-cover object-top lg:object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle dark tint specifically on the image to ensure photo depth */}
          <div className="absolute inset-0 bg-slate-950/15 lg:bg-slate-950/5" />
        </div>

        {/* Gradient Blur Mask: White transition from left across to center, fading smoothly into the photo */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 to-transparent hidden lg:block"
          style={{ width: '64%' }}
        />
        {/* Secondary soft linear blend across the whole hero */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/80 to-transparent lg:hidden" />
        <div className="absolute inset-0 z-10 backdrop-blur-[2px] lg:backdrop-blur-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Tagline kicker: Mobile Google Red (#EA4335) with enhanced weight, Desktop Google Blue (#1A73E8) */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-bold sm:font-semibold tracking-wider text-[#EA4335] sm:text-[#1A73E8] uppercase">
              {kicker}
            </span>
          </div>

          {/* Main H1 Headline: Restored original font-extrabold text-slate-900 across all screens */}
          <h1 className="hero-headline text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            {title}
          </h1>

          {/* Animated Typewriter Sub-tagline: Mobile Red (#EA4335) with bold weight & Desktop Blue (#174EA6) */}
          {typewriterPhrases.length > 0 && (
            <div className="h-8 mb-4 flex items-center text-sm sm:text-base font-bold sm:font-semibold text-[#EA4335] sm:text-[#174EA6]">
              <span className="text-slate-500 mr-2 font-normal">{typewriterLabel}</span>
              <span className="font-mono font-bold sm:font-semibold">{currentText}</span>
              <span className="inline-block w-0.5 h-4 ml-1 bg-[#EA4335] sm:bg-[#1A73E8] animate-cursor" />
            </div>
          )}

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* Optional Extra Banner / Scope alert */}
          {extraBanner && <div className="mb-8">{extraBanner}</div>}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            {primaryCta.isExternal ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {secondaryCta && (
              secondaryCta.onClick ? (
                <button
                  type="button"
                  onClick={secondaryCta.onClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 active:scale-[0.98] rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : secondaryCta.isExternal ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 active:scale-[0.98] rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={secondaryCta.href || '/'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 active:scale-[0.98] rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )
            )}
          </div>

          {/* Trust Badges: Stable layout without text displacement */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A73E8]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
