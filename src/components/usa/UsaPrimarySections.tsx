import React, { useState } from 'react';
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
  const [activeTabId, setActiveTabId] = useState<'technical' | 'content' | 'local'>('technical');

  const activeTab =
    data.auditReveal.tabs.find((tab) => tab.id === activeTabId) || data.auditReveal.tabs[0];

  const allAreas = data.auditReveal.tabs.flatMap((tab) => tab.areas);

  return (
    <>
      {/* SECTION 2: Institutional Credibility & Positioning (slides smoothly over Hero backdrop on scroll) */}
      <section
        className="relative z-30 py-14 lg:py-16 bg-slate-50 border-b border-slate-200/80 shadow-[0_-18px_42px_-16px_rgba(15,23,42,0.14)]"
        aria-labelledby="usa-credibility-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.credibility.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-credibility-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.credibility.title}
            </ShimmerHeading>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {data.credibility.summary}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.credibility.pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <ShimmerHeading as="h3" fadeInLeft={true} className="text-sm font-bold text-slate-900">
                  {pillar.label}
                </ShimmerHeading>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: American Positioning Card (SEO · GEO · AEO for US Market) */}
      <section
        id="us-positioning"
        className="relative z-30 py-14 lg:py-20 bg-white border-b border-slate-200/80"
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
                    className="w-full h-full aspect-[900/873] lg:aspect-auto object-cover object-center block"
                  />
                </picture>
              </div>

              {/* Textual Column: Commercial US Search, AI & Local Discovery Positioning */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
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
                  className="mt-3 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold tracking-tight leading-[1.18] text-balance"
                >
                  {data.positioning.title}
                </ShimmerHeading>

                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {data.positioning.description}
                </p>

                {/* Unboxed 3-column discipline breakdown separated by subtle hairline dividers */}
                <dl className="mt-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-t border-b border-slate-200">
                  {data.positioning.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.code}
                      className={`py-4 sm:py-5 ${
                        idx === 0
                          ? 'sm:pr-5'
                          : idx === 1
                          ? 'sm:px-5'
                          : 'sm:pl-5'
                      }`}
                    >
                      <dt className="flex items-baseline gap-2">
                        <span className="font-mono text-xs font-extrabold tracking-wider text-[#B31942]">
                          {pillar.code}
                        </span>
                        <span className="text-sm font-bold text-[#0A3161]">{pillar.title}</span>
                      </dt>
                      <dd className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
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

      {/* SECTION 4: Problems & Business Challenges */}
      <section
        id="challenges"
        className="relative z-30 py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
        aria-labelledby="usa-challenges-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.challenges.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-challenges-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.challenges.title}
            </ShimmerHeading>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.challenges.subtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.challenges.items.map((item) => (
              <article
                key={item.number}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1A73E8]">
                    {item.number}
                  </span>
                  <ShimmerHeading
                    as="h3"
                    fadeInLeft={true}
                    className="mt-2 text-lg font-bold text-slate-900 leading-snug"
                  >
                    “{item.statement}”
                  </ShimmerHeading>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.explanation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Specialized SEO Services */}
      <section
        id="services"
        className="relative z-30 py-16 lg:py-24 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
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
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.services.subtitle}
            </p>
            <p className="mt-3 text-sm font-medium text-slate-700">{data.services.scopeNotice}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {data.services.items.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#1A73E8]/50 transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-xs font-mono font-semibold text-[#1A73E8]">
                      {service.number}
                    </span>
                  </div>
                  <ShimmerHeading
                    as="h3"
                    fadeInLeft={true}
                    className="mt-2 text-xl font-bold text-slate-900 leading-snug"
                  >
                    {service.name}
                  </ShimmerHeading>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      {data.services.benefitsHeading}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
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

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      {data.services.deliverablesHeading}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
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
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>

                  {service.relatedGuidePath && service.relatedGuideLabel && (
                    <div className="text-center">
                      <Link
                        to={service.relatedGuidePath}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A73E8] hover:text-[#174EA6] transition-colors"
                      >
                        <span>{service.relatedGuideLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: How Our SEO Work Works */}
      <section
        id="methodology"
        className="relative z-30 py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
        aria-labelledby="usa-methodology-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
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
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.methodology.subtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.methodology.steps.map((step) => (
              <div
                key={step.step}
                className="border border-slate-200 rounded-xl p-6 bg-white flex flex-col"
              >
                <span className="text-xs font-mono font-bold text-[#1A73E8] tracking-wider">
                  {step.step}
                </span>
                <ShimmerHeading
                  as="h3"
                  fadeInLeft={true}
                  className="mt-2 text-lg font-bold text-slate-900 leading-snug"
                >
                  {step.title}
                </ShimmerHeading>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-blue-200/80 bg-blue-50/60 p-6">
            <ShimmerHeading as="h3" fadeInLeft={true} className="text-base font-bold text-slate-900">
              {data.methodology.engagementClarificationTitle}
            </ShimmerHeading>
            <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
              {data.methodology.engagementClarificationText}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: What an SEO Audit Can Reveal */}
      <section
        id="audit-reveal"
        className="relative z-30 py-16 lg:py-24 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-audit-reveal-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.auditReveal.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-audit-reveal-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.auditReveal.title}
            </ShimmerHeading>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.auditReveal.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive 3-tab diagnostic breakdown + full 12-area index */}
            <div className="lg:col-span-6 space-y-6">
              <div
                className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
                role="tablist"
                aria-label={data.auditReveal.title}
              >
                {data.auditReveal.tabs.map((tab) => {
                  const isSelected = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#1A73E8] text-white'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {activeTab.summary}
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeTab.areas.map((area) => (
                    <div
                      key={area.name}
                      className="border border-slate-100 bg-slate-50/70 rounded-lg p-4"
                    >
                      <ShimmerHeading as="h3" fadeInLeft={false} className="text-sm font-bold text-slate-900">
                        {area.name}
                      </ShimmerHeading>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {area.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete 12-item semantic overview rendered unconditionally in HTML */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <ShimmerHeading
                  as="h3"
                  fadeInLeft={true}
                  className="text-xs font-bold uppercase tracking-wider text-slate-800"
                >
                  {data.auditReveal.allAreasHeading}
                </ShimmerHeading>
                <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700">
                  {allAreas.map((area) => (
                    <li key={area.name} className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#1A73E8] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{area.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Demonstrative Semrush Audit Illustration */}
            <div className="lg:col-span-6">
              <figure className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 bg-slate-50">
                  <span className="text-xs font-bold text-slate-900">
                    {data.auditReveal.screenshotCaptionTitle}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600">
                    {data.auditReveal.screenshotBadge}
                  </span>
                </div>
                <img
                  src="/images/usa/audit-sample-semrush.webp"
                  alt={data.auditReveal.screenshotAlt}
                  width={1100}
                  height={618}
                  loading="lazy"
                  className="w-full h-auto block"
                />
                <figcaption className="px-5 py-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                  {data.auditReveal.screenshotCaptionText}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
