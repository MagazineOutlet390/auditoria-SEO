import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { UsaAgencyContent } from '../../i18n/usaAgencyData';
import { trackAnalyticsEvent } from '../../lib/analytics';
import { ShimmerHeading } from './UsaMotionHeadings';

interface UsaPrimarySectionsProps {
  data: UsaAgencyContent;
  htmlLang: string;
  pagePath: string;
  onSelectService: (serviceId: string, serviceTitle: string) => void;
}

export const UsaPrimarySections: React.FC<UsaPrimarySectionsProps> = ({
  data,
  htmlLang,
  pagePath,
  onSelectService,
}) => {
  return (
    <>
      {/* SECTION 2: US Positioning (Patriotic Eagle + SEO / GEO / AEO + Core Commercial Differentiators) */}
      <section
        id="us-positioning"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80 shadow-[0_-18px_42px_-16px_rgba(15,23,42,0.14)]"
        aria-labelledby="usa-positioning-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {/* Subtle US-palette editorial top rule */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  'linear-gradient(90deg, #0A3161 0%, #0A3161 52%, #B31942 52%, #B31942 86%, #E2E8F0 86%, #E2E8F0 100%)',
              }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual Column: Eagle Positioning Visual Frame */}
              <div className="lg:col-span-5 relative bg-[#0A3161] overflow-hidden flex items-center justify-center">
                <picture className="w-full h-full block">
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/usa/us-positioning-eagle-600.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/usa/us-positioning-eagle-900.webp"
                    alt={data.positioning.imageAlt}
                    width={900}
                    height={873}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[280px] sm:max-h-[340px] lg:max-h-none object-cover object-center block"
                  />
                </picture>
              </div>

              {/* Textual Column: SEO · GEO · AEO + Core Business Differentiators */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-[0.14em]">
                  <span className="text-[#B31942]">{data.positioning.eyebrow}</span>
                  <span className="text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[#0A3161]">{data.positioning.pillarsLabel}</span>
                </div>

                <ShimmerHeading
                  as="h2"
                  id="usa-positioning-heading"
                  fadeInLeft={true}
                  className="mt-2.5 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold tracking-tight leading-[1.18] text-balance"
                >
                  {data.positioning.title}
                </ShimmerHeading>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {data.positioning.description}
                </p>

                {/* Unboxed 3-column discipline breakdown separated by hairline dividers */}
                <dl className="mt-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-t border-b border-slate-200">
                  {data.positioning.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.code}
                      className={`py-3 sm:py-4 ${
                        idx === 0 ? 'sm:pr-4' : idx === 1 ? 'sm:px-4' : 'sm:pl-4'
                      }`}
                    >
                      <dt className="flex items-baseline gap-2">
                        <span className="font-mono text-xs font-extrabold tracking-wider text-[#B31942]">
                          {pillar.code}
                        </span>
                        <span className="text-sm font-bold text-[#0A3161]">{pillar.title}</span>
                      </dt>
                      <dd className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Compact Commercial Differentiators fused from institutional value */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.positioning.differentiators.map((diff) => (
                    <div key={diff.title} className="rounded-lg bg-slate-50 border border-slate-200/80 p-3">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">{diff.title}</h3>
                      <p className="mt-1 text-xs text-slate-600 leading-snug">{diff.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A3161] hover:text-[#B31942] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A3161] rounded"
                  >
                    <span>{data.positioning.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Compact Commercial SEO Services + Visual Audit Showcase (Image 1) */}
      <section
        id="services"
        className="relative z-30 py-10 sm:py-12 lg:py-16 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
                {data.services.kicker}
              </p>
              <ShimmerHeading
                as="h2"
                id="usa-services-heading"
                fadeInLeft={true}
                className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
              >
                {data.services.title}
              </ShimmerHeading>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.services.subtitle}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm font-bold text-slate-900">{data.services.auditVisualTitle}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {data.services.auditVisualSummary}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                  <span className="font-semibold text-slate-500">{data.services.guidesLabel}</span>
                  {data.services.guides.map((guide) => (
                    <Link
                      key={guide.path}
                      to={guide.path}
                      className="font-semibold text-[#1A73E8] hover:text-[#174EA6] underline-offset-4 hover:underline"
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Image 1: SEO Audit & Analytics */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/usa/seo-audit-analytics-640.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/usa/seo-audit-analytics-1200.webp"
                    alt={data.services.auditVisualAlt}
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
          </div>

          <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {data.services.items.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#1A73E8]/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1A73E8] tabular-nums">
                    {service.number}
                  </span>
                  <ShimmerHeading
                    as="h3"
                    fadeInLeft={true}
                    className="mt-1.5 text-lg font-bold text-slate-900 leading-snug"
                  >
                    {service.name}
                  </ShimmerHeading>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      trackAnalyticsEvent('service_cta_click', {
                        page_language: htmlLang,
                        service_interest: service.name,
                        cta_location: 'services_card',
                        page_path: pagePath,
                      });
                      onSelectService(service.id, service.name);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[42px] text-xs sm:text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8] whitespace-nowrap"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </button>

                  {service.relatedGuidePath && service.relatedGuideLabel && (
                    <Link
                      to={service.relatedGuidePath}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A73E8] hover:text-[#174EA6] transition-colors whitespace-nowrap"
                    >
                      <span>{service.relatedGuideLabel}</span>
                      <ArrowRight className="w-3 h-3 shrink-0" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
