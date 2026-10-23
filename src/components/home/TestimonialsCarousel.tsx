import React, { useState, useRef, useEffect } from 'react';
import { REAL_SOCIAL_PROOF_ITEMS, SITE_CONFIG } from '../../data/siteData';
import { SocialProofItem } from '../../types';
import {
  ExternalLink,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Video,
  X,
  CheckCircle2,
  ZoomIn,
} from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeImagePreview, setActiveImagePreview] = useState<{
    src: string;
    title: string;
    author?: string;
    directReviewUrl: string;
    description?: string;
  } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImagePreview(null);
        setActiveVideoId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Detect user's reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const isPaused =
    isUserPaused ||
    isHovered ||
    isFocused ||
    activeVideoId !== null ||
    activeImagePreview !== null ||
    prefersReducedMotion;

  // Manual scroll stepping
  const handleScrollStep = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const step = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

  const handleVideoPlay = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsUserPaused(true);
  };

  const handleVideoClose = () => {
    setActiveVideoId(null);
  };

  return (
    <section
      className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden"
      aria-label="Depoimentos e Avaliações de Clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold tracking-wider text-[#1A73E8] uppercase">
                Prova Social Autêntica
              </span>
              <span className="text-slate-300">·</span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vídeos & Ficha Oficial</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
              Depoimentos e Avaliações Reais
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Sem avaliações inventadas ou textos genéricos. Assista a depoimentos em vídeo de clientes e confira as capturas autênticas publicadas diretamente na nossa ficha oficial do Google Maps.
            </p>
          </div>

          {/* Action Button & Carousel Controls */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Primary Google Maps CTA Button */}
            <a
              href={SITE_CONFIG.googleMapsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Ver avaliações no Google</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Manual Navigation and Pause Controls */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200/90 shadow-xs">
              <button
                type="button"
                onClick={() => handleScrollStep('left')}
                aria-label="Rolar para a esquerda"
                className="w-8 h-8 rounded-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsUserPaused(!isUserPaused)}
                aria-label={isUserPaused ? 'Iniciar rotação automática' : 'Pausar rotação automática'}
                title={isUserPaused ? 'Iniciar rotação' : 'Pausar rotação'}
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] ${
                  isUserPaused
                    ? 'bg-blue-50 text-[#1A73E8] font-medium'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {isUserPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => handleScrollStep('right')}
                aria-label="Rolar para a direita"
                className="w-8 h-8 rounded-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Infinite Loop Carousel Track */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative w-full overflow-x-auto pb-4 scrollbar-none"
        >
          <div
            className={`flex items-stretch gap-6 ${
              prefersReducedMotion ? '' : 'animate-infinite-loop'
            } ${isPaused ? 'is-paused' : ''}`}
          >
            {/* Primary Track Items */}
            {REAL_SOCIAL_PROOF_ITEMS.map((item) => (
              <SocialProofCard
                key={item.id}
                item={item}
                activeVideoId={activeVideoId}
                onPlayVideo={handleVideoPlay}
                onCloseVideo={handleVideoClose}
                onPreviewImage={setActiveImagePreview}
              />
            ))}

            {/* Seamless Infinite Clone Items (Screen Reader Hidden) */}
            {!prefersReducedMotion &&
              REAL_SOCIAL_PROOF_ITEMS.map((item) => (
                <SocialProofCard
                  key={`clone-${item.id}`}
                  item={item}
                  activeVideoId={activeVideoId}
                  onPlayVideo={handleVideoPlay}
                  onCloseVideo={handleVideoClose}
                  onPreviewImage={setActiveImagePreview}
                  isClone={true}
                />
              ))}
          </div>
        </div>

        {/* Section Footnote */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Canal Oficial & Ficha Google Maps:</span>
            <span>Vídeos e capturas de avaliações 100% autênticas da Auditoria SEO.</span>
          </div>
          <a
            href={SITE_CONFIG.googleMapsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1A73E8] hover:text-[#174EA6] font-semibold"
          >
            <span>Acessar perfil completo no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Google Maps Review Screenshot */}
      {activeImagePreview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setActiveImagePreview(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 px-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-100 text-[#1A73E8] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 id="review-modal-title" className="text-sm font-bold text-slate-900 leading-tight">
                    {activeImagePreview.title}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {activeImagePreview.author || 'Google Business Profile'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveImagePreview(null)}
                aria-label="Fechar modal de visualização"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Image */}
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-140px)] bg-slate-100/50 flex flex-col items-center justify-center">
              <img
                src={activeImagePreview.src}
                alt={activeImagePreview.title}
                className="max-w-full h-auto object-contain rounded-lg border border-slate-200/80 shadow-xs"
              />
              {activeImagePreview.description && (
                <p className="mt-3 text-xs text-slate-600 text-center italic max-w-md">
                  {activeImagePreview.description}
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-5 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Avaliação verificada</span>
              <a
                href={activeImagePreview.directReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Ver ficha no Google Maps</span>
                <ExternalLink className="w-3 h-3 opacity-90" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface SocialProofCardProps {
  item: SocialProofItem;
  activeVideoId: string | null;
  onPlayVideo: (id: string) => void;
  onCloseVideo: () => void;
  onPreviewImage: (data: {
    src: string;
    title: string;
    author?: string;
    directReviewUrl: string;
    description?: string;
  }) => void;
  isClone?: boolean;
}

const SocialProofCard: React.FC<SocialProofCardProps> = ({
  item,
  activeVideoId,
  onPlayVideo,
  onCloseVideo,
  onPreviewImage,
  isClone = false,
}) => {
  const isVideo = item.type === 'youtube-video';
  const isCurrentlyPlaying = isVideo && activeVideoId === item.videoId;

  if (isVideo) {
    return (
      <article
        aria-hidden={isClone}
        className="w-[300px] sm:w-[350px] shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
      >
        {/* Card Header */}
        <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white">
              <Video className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-900 tracking-tight">
              YouTube Depoimento
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-400">Verificado</span>
        </div>

        {/* Media Viewport */}
        <div className="relative aspect-[9/14] sm:aspect-[9/13] bg-slate-900 overflow-hidden">
          {isCurrentlyPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={item.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={onCloseVideo}
                aria-label="Fechar reprodutor de vídeo"
                tabIndex={isClone ? -1 : 0}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Play Button Trigger */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <button
                  type="button"
                  onClick={() => onPlayVideo(item.videoId)}
                  aria-label={`Assistir ao vídeo: ${item.title}`}
                  tabIndex={isClone ? -1 : 0}
                  className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400/50"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
                <span className="mt-3 text-xs font-semibold text-white drop-shadow-sm">
                  Assistir depoimento
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
          <div>
            <div className="font-bold text-slate-900 leading-snug">{item.title}</div>
            <div className="text-[11px] text-slate-500">{item.subtitle}</div>
          </div>
          <a
            href={item.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isClone ? -1 : 0}
            className="text-[#1A73E8] hover:text-[#174EA6] p-1"
            title="Abrir no YouTube"
            aria-label="Abrir vídeo diretamente no YouTube"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </article>
    );
  }

  // Google Maps Review Screenshot Card
  return (
    <article
      aria-hidden={isClone}
      className="w-[300px] sm:w-[350px] shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#1A73E8]/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
    >
      {/* Card Header */}
      <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-50 text-[#1A73E8] flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-900 tracking-tight">
            Google Maps Avaliação
          </span>
        </div>
        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
          Ficha Oficial
        </span>
      </div>

      {/* Screenshot or Official Review Container */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-slate-50/50 min-h-[260px]">
        {item.screenshotUrl ? (
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            {/* Clickable Screenshot Preview */}
            <div
              role="button"
              tabIndex={isClone ? -1 : 0}
              onClick={() =>
                onPreviewImage({
                  src: item.screenshotUrl!,
                  title: item.title,
                  author: item.author,
                  directReviewUrl: item.directReviewUrl,
                  description: item.description,
                })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onPreviewImage({
                    src: item.screenshotUrl!,
                    title: item.title,
                    author: item.author,
                    directReviewUrl: item.directReviewUrl,
                    description: item.description,
                  });
                }
              }}
              className="relative group rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs hover:border-[#1A73E8]/50 hover:shadow-md transition-all cursor-pointer bg-white"
              aria-label={`Ampliar captura da avaliação de ${item.author || item.title}`}
              title="Clique para ampliar"
            >
              <img
                src={item.screenshotUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto max-h-[200px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/85 text-white text-[11px] font-semibold shadow-md">
                  <ZoomIn className="w-3 h-3" />
                  <span>Ampliar</span>
                </span>
              </div>
            </div>

            {/* Description quote snippet if provided */}
            {item.description && (
              <p className="text-xs text-slate-600 line-clamp-2 italic px-1">
                {item.description}
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4 max-w-xs mx-auto text-center py-6">
            <div className="w-12 h-12 rounded-full bg-blue-100/70 text-[#1A73E8] flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description ||
                  'Avaliação autêntica registrada na ficha da Auditoria SEO no Google Maps.'}
              </p>
            </div>

            <a
              href={item.directReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isClone ? -1 : 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#1A73E8] hover:border-[#1A73E8]/40 shadow-xs transition-all"
            >
              <span>Conferir na ficha do Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
        <div>
          <div className="font-bold text-slate-900">{item.author}</div>
          <div className="text-[11px] text-slate-500">Google Business Profile</div>
        </div>
        <a
          href={item.directReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isClone ? -1 : 0}
          className="text-[#1A73E8] hover:text-[#174EA6] p-1 inline-flex items-center gap-1 font-semibold text-xs"
          title="Ver no Google Maps"
          aria-label="Abrir avaliação no Google Maps"
        >
          <span>Ver ficha</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
