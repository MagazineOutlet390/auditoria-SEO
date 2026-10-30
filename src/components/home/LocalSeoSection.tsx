import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  Check,
  Phone,
  Navigation,
  Star,
  TrendingUp,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

export const LocalSeoSection: React.FC = () => {
  const { t, getWhatsAppUrl } = useLanguage();
  const lData = t.home.localSeo;
  const whatsappUrl = getWhatsAppUrl(t.whatsappMessages.localSeo);

  return (
    <section
      aria-labelledby="secao-seo-local-titulo"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================
              COLUNA ESQUERDA: Texto, Título H2, Lista e CTA (Desktop)
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#1A73E8]" aria-hidden="true" />
                {lData.eyebrow}
              </span>
            </div>

            {/* Título H2 Obrigatório */}
            <h2
              id="secao-seo-local-titulo"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2042] tracking-tight leading-[1.2] mb-4"
            >
              {lData.title}
            </h2>

            {/* Subtítulo Obrigatório */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              {lData.subtitle}
            </p>

            {/* Lista: O que fazemos pelo seu perfil */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1A73E8]" aria-hidden="true" />
                {lData.listHeading}
              </h3>
              <ul className="space-y-3.5">
                {lData.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 mt-0.5 text-[#1A73E8]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão de Ação CTA (Visível no desktop aqui; no mobile renderizado ao final do fluxo) */}
            <div className="hidden lg:block pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-xl shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{lData.ctaButton}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <p className="text-xs text-slate-500 mt-2.5">
                {lData.ctaHelper}
              </p>
            </div>
          </div>

          {/* ========================================================
              COLUNA DIREITA: Visuais em HTML/CSS/SVG Inline
              1. Mockup Pack Local
              2. Antes & Depois
              3. Mini Cards de Resultados
              + CTA final no Mobile
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* 1. MOCKUP: PACK LOCAL DO GOOGLE MAPS */}
            <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/70">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 tracking-wide">
                    {lData.mockupHeading}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {lData.mockupIllustrative}
                </span>
              </div>

              {/* 3 Resultados de Negócio */}
              <div className="space-y-3">
                {/* 1º Lugar - DESTAQUE */}
                <div className="p-4 rounded-xl bg-white border-2 border-[#1A73E8] shadow-sm relative transition-all">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-white bg-[#1A73E8] px-2 py-0.5 rounded-md shadow-2xs">
                          {lData.firstPlace}
                        </span>
                        <h4 className="text-base font-bold text-[#0F2042]">
                          Clínica Vida Plena
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-700">
                        <span className="font-bold text-slate-900">4,9</span>
                        <div className="flex items-center text-amber-500" aria-label="Rating 4.9">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                          ))}
                        </div>
                        <span className="text-slate-500">{lData.reviewsText}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                      {lData.openNow}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">
                    {lData.profileSubtitle}
                  </p>

                  {/* Botões Ligar e Rotas */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1A73E8] shadow-2xs">
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                      {lData.callBtn}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1A73E8] bg-blue-50 border border-blue-200">
                      <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                      {lData.directionsBtn}
                    </span>
                    <span className="ml-auto text-[11px] font-medium text-emerald-700 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {lData.mostSearched}
                    </span>
                  </div>
                </div>

                {/* 2º Lugar - Neutro */}
                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 text-slate-700">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                        2º
                      </span>
                      <h4 className="text-sm font-semibold text-slate-800">
                        Centro Médico São Lucas
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-600">{lData.closesAt}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">4,3</span>
                    <div className="flex items-center text-amber-500">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-slate-600">(42)</span>
                  </div>
                </div>

                {/* 3º Lugar - Neutro */}
                <div className="p-3.5 rounded-xl bg-white/70 border border-slate-200/80 text-slate-700">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                        3º
                      </span>
                      <h4 className="text-sm font-semibold text-slate-800">
                        Consultório Integrado Saúde
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-600">{lData.openStatus}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">3,9</span>
                    <div className="flex items-center text-amber-500">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                    <span className="text-slate-600">(15)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ANTES E DEPOIS (Lado a lado no desktop, empilhado no mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card ANTES */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {lData.beforeLabel}
                  </span>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                    {lData.mockupIllustrative}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-600">{lData.mapRank}</span>
                    <span className="font-bold text-slate-800">{lData.beforeRank}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-600">{lData.profileStatus}</span>
                    <span className="font-medium text-rose-700">{lData.beforeProfile}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">{lData.photosLabel}</span>
                    <span className="font-medium text-slate-700">{lData.beforePhotos}</span>
                  </div>
                </div>
              </div>

              {/* Card DEPOIS */}
              <div className="p-4 rounded-xl bg-blue-50/40 border-2 border-[#1A73E8]/60 shadow-2xs">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {lData.afterLabel}
                  </span>
                  <span className="text-[10px] text-[#174EA6] bg-blue-100/70 px-1.5 py-0.5 rounded font-medium">
                    {lData.optimizedProfile}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between border-b border-blue-100/60 pb-1.5">
                    <span className="text-slate-600">{lData.mapRank}</span>
                    <span className="font-bold text-[#1A73E8]">{lData.afterRank}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-100/60 pb-1.5">
                    <span className="text-slate-600">{lData.profileStatus}</span>
                    <span className="font-semibold text-emerald-800">{lData.afterProfile}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">{lData.photosLabel}</span>
                    <span className="font-semibold text-slate-900">{lData.afterPhotos}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. TRÊS MINI CARDS DE RESULTADO */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  {lData.statCalls}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#1A73E8] block">
                  +78%
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  {lData.statCallsSub}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  {lData.statRoutes}
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-700 block">
                  +64%
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  {lData.statRoutesSub}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <span className="text-xs font-medium text-slate-600 block mb-1">
                  {lData.statClicks}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#0F2042] block">
                  +92%
                </span>
                <span className="text-[11px] text-slate-600 block mt-0.5">
                  {lData.statClicksSub}
                </span>
              </div>
            </div>

            {/* Nota Obrigatória de Transparência */}
            <p className="text-xs text-slate-600 text-center sm:text-right italic">
              {lData.disclaimer}
            </p>

            {/* CTA NO MOBILE (renderizado logo após os visuais no fluxo vertical) */}
            <div className="block lg:hidden pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-5 text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] active:scale-[0.98] rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <span>{lData.ctaButton}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <p className="text-xs text-slate-500 text-center mt-2.5">
                {lData.ctaHelper}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
