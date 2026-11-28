import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Cog,
  Compass,
  ExternalLink,
  Factory,
  HardHat,
  SearchCheck,
  ShieldCheck,
  Star,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import { UsaAgencyContent } from '../../i18n/usaAgencyData';
import { SITE_CONFIG } from '../../data/siteData';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { ShimmerHeading, useFadeInLeft } from './UsaMotionHeadings';

interface UsaSecondarySectionsProps {
  data: UsaAgencyContent;
  htmlLang: string;
  pagePath: string;
  onJumpToConsultation: () => void;
}

const INDUSTRY_ICONS = {
  industrial: Factory,
  manufacturing: Cog,
  contractors: HardHat,
  'home-services': Wrench,
  technical: ShieldCheck,
  b2b: Building2,
} as const;

const PROCESS_ICONS = {
  audit: SearchCheck,
  strategy: Compass,
  implementation: Wrench,
  growth: TrendingUp,
} as const;

const FaqHeadingItem: React.FC<{
  question: string;
  answer: string;
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, idx, isOpen, onToggle }) => {
  const { ref, fadeClass } = useFadeInLeft<HTMLHeadingElement>(true);
  const panelId = `usa-faq-panel-${idx}`;
  const btnId = `usa-faq-btn-${idx}`;

  return (
    <div className="px-5 py-3.5 sm:px-6 sm:py-4">
      <h3 ref={ref} className={fadeClass}>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-[#1A73E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded py-0.5"
        >
          <span className="usa-american-shimmer">{question}</span>
          <ChevronDown
            className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#1A73E8]' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {/* Always mounted in initial SSG HTML for Googlebot indexing while visually collapsed when inactive */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={isOpen ? 'mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed' : 'hidden'}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export const UsaSecondarySections: React.FC<UsaSecondarySectionsProps> = ({
  data,
  htmlLang,
  pagePath,
  onJumpToConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  return (
    <>
      {/* SECTION 4: Target US Industrial & Specialized Industries (Image 2 + Visual Grid) */}
      <section
        id="industries"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80"
        aria-labelledby="usa-industries-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.industries.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-industries-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.industries.title}
            </ShimmerHeading>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {data.industries.subtitle}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Image 2: American Industrial & Specialized Businesses */}
            <div className="lg:col-span-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm">
              <picture className="w-full h-full block">
                <source
                  media="(max-width: 767px)"
                  srcSet="/images/usa/american-industrial-b2b-640.webp"
                  type="image/webp"
                />
                <img
                  src="/images/usa/american-industrial-b2b-1200.webp"
                  alt={data.industries.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full aspect-video lg:aspect-auto object-cover block"
                />
              </picture>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {data.industries.items.map((industry) => {
                const Icon = INDUSTRY_ICONS[industry.id];
                return (
                  <div
                    key={industry.id}
                    className="border border-slate-200 rounded-xl p-3.5 sm:p-4 bg-white flex flex-col justify-between"
                  >
                    <div>
                      <Icon className="w-5 h-5 text-[#1A73E8]" aria-hidden="true" />
                      <ShimmerHeading
                        as="h3"
                        fadeInLeft={true}
                        className="mt-2.5 text-sm sm:text-base font-bold text-slate-900 leading-snug"
                      >
                        {industry.name}
                      </ShimmerHeading>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {industry.searchContext}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">{data.industries.note}</p>
        </div>
      </section>

      {/* SECTION 5: Unified 4-Stage Methodology (Audit -> Strategy -> Implementation -> Growth + Image 3) */}
      <section
        id="methodology"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-methodology-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
                {data.methodology.kicker}
              </p>
              <ShimmerHeading
                as="h2"
                id="usa-methodology-heading"
                fadeInLeft={true}
                className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
              >
                {data.methodology.title}
              </ShimmerHeading>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.methodology.subtitle}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#174EA6]">
                {data.methodology.scopeClarification}
              </p>
            </div>

            {/* Image 3: SEO Strategy & Growth */}
            <div className="lg:col-span-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/images/usa/seo-strategy-growth-640.webp"
                  type="image/webp"
                />
                <img
                  src="/images/usa/seo-strategy-growth-1200.webp"
                  alt={data.methodology.imageAlt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-video object-cover block"
                />
              </picture>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {data.methodology.steps.map((step) => {
              const Icon = PROCESS_ICONS[step.icon];
              return (
                <div
                  key={step.step}
                  className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Icon className="w-5 h-5 text-[#1A73E8]" aria-hidden="true" />
                    <span className="text-xs font-mono font-bold text-slate-400 tabular-nums">
                      {step.step}
                    </span>
                  </div>
                  <ShimmerHeading
                    as="h3"
                    fadeInLeft={true}
                    className="mt-3 text-base sm:text-lg font-bold text-slate-900 leading-snug"
                  >
                    {step.title}
                  </ShimmerHeading>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Specialist & Credibility (Real Stage Photo + Bio + Real Google Maps Reviews) */}
      <section
        id="specialist"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80"
        aria-labelledby="usa-specialist-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            {/* Real stage photograph preserved crisply */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm aspect-[4/3] sm:aspect-[9/10] max-w-md mx-auto lg:max-w-none">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/usa/wesley-vieira-stage-600.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/usa/wesley-vieira-stage-900.webp"
                    alt={data.specialist.photoAlt}
                    width={900}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
                {data.specialist.kicker}
              </p>
              <ShimmerHeading
                as="h2"
                id="usa-specialist-heading"
                fadeInLeft={true}
                className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
              >
                {data.specialist.title}
              </ShimmerHeading>

              <div className="mt-3">
                <p className="text-base sm:text-lg font-bold text-slate-900">{data.specialist.name}</p>
                <p className="text-xs sm:text-sm font-medium text-[#1A73E8]">
                  {data.specialist.role}
                </p>
              </div>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.specialist.bio}
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                {data.specialist.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href="#consultation"
                  onClick={(e) => {
                    e.preventDefault();
                    trackAnalyticsEvent('schedule_consultation_click', {
                      page_language: htmlLang,
                      cta_location: 'specialist_section',
                      page_path: pagePath,
                    });
                    onJumpToConsultation();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] transition-colors rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{data.specialist.ctaLabel}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Integrated Verified Google Maps Reviews */}
          <div className="mt-8 pt-7 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <ShimmerHeading as="h3" fadeInLeft={true} className="text-base sm:text-lg font-bold text-slate-900">
                  {data.specialist.reviewsHeading}
                </ShimmerHeading>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  {data.specialist.reviewsSubheading}
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleMapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1A73E8] hover:text-[#174EA6] whitespace-nowrap shrink-0"
              >
                <span>{data.specialist.verifiedProfileLinkLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.specialist.reviews.map((review) => (
                <article
                  key={review.author}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="flex items-center gap-1 text-amber-500"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      “{review.quote}”
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-900">{review.author}</span>
                    <span className="text-slate-500">{review.context}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Compact Frequently Asked Questions (5 concise decision Q&As) */}
      <section
        id="faq"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.faq.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-faq-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.faq.title}
            </ShimmerHeading>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {data.faq.subtitle}
            </p>
          </div>

          <div className="mt-6 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
            {data.faq.items.map((faq, idx) => (
              <FaqHeadingItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                idx={idx}
                isOpen={openFaqIndex === idx}
                onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
