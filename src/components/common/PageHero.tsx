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
      {/* 
        A) MOBILE TOP PHOTO (Abaixo de 768px / md:)
        Ocupa cerca de 45% da altura útil (45svh, min 260px, max 380px),
        object-position center 25% para manter rosto, microfone e telão visíveis sem cortar a cabeça.
        Overlay escuro suave rgba(5,10,25, 0.35).
      */}
      <div className="relative md:hidden w-full h-[45svh] min-h-[260px] max-h-[380px] overflow-hidden bg-slate-900">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/aistudio/img-fundo-auditoria-mobile.webp"
            type="image/webp"
          />
          <source
            srcSet="/assets/aistudio/img-fundo-auditoria.webp"
            type="image/webp"
          />
          <img
            src={SITE_CONFIG.heroImage}
            alt={imageAlt}
            width={800}
            height={889}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
          />
        </picture>
        {/* Overlay escuro leve sobre a foto mobile: rgba(5,10,25, 0.35) */}
        <div className="absolute inset-0 bg-[#050a19]/35 pointer-events-none" />
      </div>

      {/* 
        DESKTOP BACKGROUND CONTAINER (md: e acima)
        Mantido pixel a pixel idêntico com parallax e split suave
      */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
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
          <picture>
            <source
              srcSet="/assets/aistudio/img-fundo-auditoria.webp"
              type="image/webp"
            />
            <img
              src={SITE_CONFIG.heroImage}
              alt={imageAlt}
              width={577}
              height={641}
              className="w-full h-full object-cover object-top lg:object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
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

      {/* 
        B) MAIN CONTENT AREA:
        Mobile: Painel de vidro claro sobrepondo a foto em 28px (-mt-[28px]),
        cantos superiores 24px, backdrop-filter blur 14px, fundo rgba(255,255,255,0.88),
        padding bottom estendido (pb-24 sm:pb-28) para o botão flutuante de WhatsApp não sobrepor.
        Desktop: Grid limpo com padding padrão max-w-2xl lg:max-w-xl.
      */}
      <div className="relative z-20 max-w-7xl mx-auto md:px-6 lg:px-8 md:py-16 sm:md:py-24 lg:py-32">
        <div className="mobile-hero-glass -mt-[28px] md:mt-0 relative z-10 px-5 pt-6 pb-24 sm:pb-28 md:p-0 rounded-t-[24px] md:rounded-none max-w-2xl lg:max-w-xl">
          {/* Eyebrow: Mobile pill azul-claro com texto azul; Desktop clássico */}
          <div className="inline-flex items-center gap-2 mb-3.5 md:mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-semibold tracking-wider text-[#1A73E8] uppercase md:bg-transparent md:border-0 md:p-0 md:text-[#1A73E8]">
              {kicker}
            </span>
          </div>

          {/* Main H1 Headline: H1 único mantido no DOM. Mobile text-[#0F2042] tracking-normal, Desktop text-slate-900 tracking-tight */}
          <h1 className="hero-headline text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0F2042] md:text-slate-900 tracking-normal md:tracking-tight leading-[1.2] md:leading-[1.15] mb-3.5 md:mb-5">
            {title}
          </h1>

          {/* Animated Typewriter Sub-tagline: Mobile font-sans texto azul; Desktop font-mono texto azul-marinho */}
          {typewriterPhrases.length > 0 && (
            <div
              className="min-h-[32px] h-auto md:h-8 mb-3.5 md:mb-4 flex items-center flex-wrap text-sm sm:text-base font-semibold text-[#174EA6]"
              role="text"
              aria-label={`${typewriterLabel} ${typewriterPhrases.join(', ')}`}
            >
              {/* Accessible text for screen readers & crawlers */}
              <span className="sr-only">
                {typewriterLabel} {typewriterPhrases.join('. ')}
              </span>
              <span aria-hidden="true" className="flex items-center flex-wrap">
                <span className="text-slate-600 md:text-slate-500 mr-2 font-normal">{typewriterLabel}</span>
                <span className="font-sans md:font-mono font-semibold text-[#1A73E8] md:text-[#174EA6]">
                  {prefersReducedMotion ? (typewriterPhrases[0] || '') : currentText}
                </span>
                {!prefersReducedMotion && (
                  <span className="inline-block w-0.5 h-4 ml-1 bg-[#1A73E8] animate-cursor" />
                )}
              </span>
            </div>
          )}

          {/* Subtitle: Mobile cinza-azulado escuro; Desktop text-slate-600 */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 md:text-slate-600 leading-relaxed mb-6 md:mb-8 font-normal">
            {subtitle}
          </p>

          {/* Optional Extra Banner / Scope alert */}
          {extraBanner && <div className="mb-6 md:mb-8">{extraBanner}</div>}

          {/* Action CTAs: Mobile botões largura total (azul sólido + branco com borda azul); Desktop inline */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3.5 md:gap-4 mb-6 md:mb-10">
            {primaryCta.isExternal ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-xl md:rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] text-center"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            ) : (
              <Link
                to={primaryCta.href}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-xl md:rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] text-center"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            )}

            {secondaryCta && (
              secondaryCta.onClick ? (
                <button
                  type="button"
                  onClick={secondaryCta.onClick}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-[#1A73E8] md:text-slate-700 hover:text-[#174EA6] md:hover:text-slate-900 bg-white md:bg-slate-100 border-2 border-[#1A73E8] md:border-0 hover:bg-blue-50/50 md:hover:bg-slate-200/80 active:scale-[0.98] rounded-xl md:rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] md:focus-visible:ring-slate-400 text-center"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              ) : secondaryCta.isExternal ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-[#1A73E8] md:text-slate-700 hover:text-[#174EA6] md:hover:text-slate-900 bg-white md:bg-slate-100 border-2 border-[#1A73E8] md:border-0 hover:bg-blue-50/50 md:hover:bg-slate-200/80 active:scale-[0.98] rounded-xl md:rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] md:focus-visible:ring-slate-400 text-center"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </a>
              ) : (
                <Link
                  to={secondaryCta.href || '/'}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-semibold text-[#1A73E8] md:text-slate-700 hover:text-[#174EA6] md:hover:text-slate-900 bg-white md:bg-slate-100 border-2 border-[#1A73E8] md:border-0 hover:bg-blue-50/50 md:hover:bg-slate-200/80 active:scale-[0.98] rounded-xl md:rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] md:focus-visible:ring-slate-400 text-center"
                >
                  <span>{secondaryCta.label}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </Link>
              )
            )}
          </div>

          {/* Trust Badges: Compactos com check azul dentro do painel */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="pt-4 border-t border-slate-200/80 flex flex-col md:flex-row md:flex-wrap md:items-center gap-2.5 md:gap-x-6 md:gap-y-2 text-xs text-slate-700 md:text-slate-600">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1A73E8] shrink-0" />
                  <span className="font-medium md:font-normal">{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
