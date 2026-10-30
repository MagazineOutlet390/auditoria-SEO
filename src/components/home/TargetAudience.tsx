import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Check, CheckCircle2 } from 'lucide-react';

interface NicheMockupConfig {
  domain: string;
  brandName: string;
  headline: string;
  ctaText: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  proofPills: string[];
  whatsappLabel: string;
}

const NICHE_MOCKUPS: Record<string, Partial<NicheMockupConfig>> = {
  'profissionais-liberais': {
    domain: 'advocacia.com.br',
    brandName: 'SILVA & ASSOCIADOS ADVOCACIA',
    accentColor: '#1A73E8',
    accentBg: '#eff6ff',
    accentBorder: '#bfdbfe',
  },
  'clinicas-estetica': {
    domain: 'clinicaestetica.com.br',
    brandName: 'LUMIÈRE ESTÉTICA AVANÇADA',
    accentColor: '#0284c7',
    accentBg: '#f0f9ff',
    accentBorder: '#bae6fd',
  },
  'academias-estudios': {
    domain: 'studiopilates.com.br',
    brandName: 'VITA PILATES & FITNESS',
    accentColor: '#1e40af',
    accentBg: '#eef2ff',
    accentBorder: '#c7d2fe',
  },
  dentistas: {
    domain: 'odontopremium.com.br',
    brandName: 'ODONTO PREMIUM CLINIC',
    accentColor: '#2563eb',
    accentBg: '#eff6ff',
    accentBorder: '#bfdbfe',
  },
  medicos: {
    domain: 'drfelipe.med.br',
    brandName: 'DR. FELIPE SANTOS · CRM 123456',
    accentColor: '#1d4ed8',
    accentBg: '#f8fafc',
    accentBorder: '#cbd5e1',
  },
  'arquitetos-engenheiros': {
    domain: 'voxarquitetura.com.br',
    brandName: 'VOX ARQUITETURA & DESIGN',
    accentColor: '#0369a1',
    accentBg: '#f0f9ff',
    accentBorder: '#bae6fd',
  },
};

const WhatsAppIcon: React.FC = () => (
  <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
  </svg>
);

interface LocalizedSegment {
  id: string;
  title: string;
  description: string;
  benefit: string;
  mockupHeadline: string;
  mockupCta: string;
  mockupPills: string[];
  mockupWhatsapp: string;
}

interface NicheCardProps {
  segment: LocalizedSegment;
  exampleBadge: string;
  isClone?: boolean;
  isMobile?: boolean;
}

const NicheCard: React.FC<NicheCardProps> = ({
  segment,
  exampleBadge,
  isClone = false,
  isMobile = false,
}) => {
  const styleConfig = NICHE_MOCKUPS[segment.id] || NICHE_MOCKUPS['profissionais-liberais'];
  const accentColor = styleConfig.accentColor || '#1A73E8';
  const accentBorder = styleConfig.accentBorder || '#bfdbfe';
  const domain = styleConfig.domain || 'site.com';
  const brandName = styleConfig.brandName || segment.title;

  return (
    <div
      className={`${
        isMobile
          ? 'w-[82vw] max-w-[340px] shrink-0 snap-center'
          : 'w-[320px] lg:w-[350px] shrink-0'
      } flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 hover:shadow-md transition-all select-none`}
      aria-hidden={isClone ? 'true' : undefined}
    >
      <div>
        {/* ========================================================
            MINI MOCKUP DE LANDING PAGE DO SEGMENTO (100% HTML/CSS/SVG)
           ======================================================== */}
        <div className="relative rounded-xl border border-slate-200/90 bg-slate-50/60 shadow-2xs overflow-hidden mb-4 p-2.5">
          {/* Top Browser / App Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="ml-1 text-[9px] font-mono text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200/60 truncate max-w-[120px]">
                {domain}
              </span>
            </div>

            {/* Selo pequeno obrigatório */}
            <span className="text-[9px] font-semibold text-[#1A73E8] bg-blue-50/90 px-1.5 py-0.5 rounded border border-blue-200/70 shrink-0">
              {exampleBadge}
            </span>
          </div>

          {/* Mockup Body Content */}
          <div
            className="p-2.5 rounded-lg border bg-white shadow-2xs space-y-2"
            style={{ borderColor: accentBorder }}
          >
            {/* Top Brand / Logo Fictício */}
            <div className="flex items-center justify-between">
              <span
                className="text-[9px] font-black tracking-wider uppercase truncate"
                style={{ color: accentColor }}
              >
                {brandName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Headline de Exemplo do Nicho */}
            <p className="text-[11px] font-bold text-[#0F2042] leading-tight line-clamp-2">
              {segment.mockupHeadline}
            </p>

            {/* Botão de CTA da Landing Page */}
            <div
              className="w-full py-1.5 px-2 rounded-md text-white text-[10px] font-bold text-center shadow-2xs flex items-center justify-center gap-1"
              style={{ backgroundColor: accentColor }}
            >
              <span>{segment.mockupCta}</span>
            </div>

            {/* 2 ou 3 Blocos de Prova / Serviços */}
            <div className="flex flex-wrap gap-1 pt-1">
              {segment.mockupPills.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="inline-flex items-center gap-1 text-[8.5px] font-medium text-slate-700 bg-slate-100/90 border border-slate-200/80 px-1.5 py-0.5 rounded"
                >
                  <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[2.5]" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* Botão de WhatsApp */}
            <div className="pt-1">
              <div className="w-full py-1 px-2 rounded-md bg-[#25D366] text-white text-[9.5px] font-bold flex items-center justify-center gap-1.5 shadow-2xs">
                <WhatsAppIcon />
                <span>{segment.mockupWhatsapp}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CONTEÚDO TEXTUAL DO CARD
           ======================================================== */}
        <h3 className="text-base font-bold text-slate-900 mb-1.5">
          {segment.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {segment.description}
        </p>
      </div>

      {/* Frase em Azul */}
      <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-[#174EA6] flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A73E8] shrink-0" />
        <span>{segment.benefit}</span>
      </div>
    </div>
  );
};

export const TargetAudience: React.FC = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const tData = t.home.targetAudience;
  const segments = tData.segments;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
            {tData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
            {tData.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {tData.subtitle}
          </p>
        </div>

        {/* ========================================================
            DESKTOP: Marquee Infinito em CSS (~40s), Pausa em Hover/Foco
           ======================================================== */}
        <div
          className="hidden md:block relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {/* Subtle lateral gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div
            className={`flex items-stretch gap-6 ${
              prefersReducedMotion ? 'overflow-x-auto pb-4' : 'animate-target-marquee'
            } ${isHovered || isFocused ? 'is-paused' : ''}`}
          >
            {/* Conjunto Principal de Cards */}
            {segments.map((segment) => (
              <NicheCard
                key={segment.id}
                segment={segment}
                exampleBadge={tData.exampleBadge}
              />
            ))}

            {/* Conjunto Duplicado para Loop Infinito (Aria-hidden & não focável) */}
            {!prefersReducedMotion &&
              segments.map((segment) => (
                <NicheCard
                  key={`clone-${segment.id}`}
                  segment={segment}
                  exampleBadge={tData.exampleBadge}
                  isClone={true}
                />
              ))}
          </div>
        </div>

        {/* ========================================================
            MOBILE: Carrossel Horizontal Nativo com Scroll-Snap (82vw)
           ======================================================== */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 -mx-4 scrollbar-none">
          {segments.map((segment) => (
            <NicheCard
              key={`mobile-${segment.id}`}
              segment={segment}
              exampleBadge={tData.exampleBadge}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

