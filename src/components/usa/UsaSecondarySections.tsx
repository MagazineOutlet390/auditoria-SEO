import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, ChevronDown, ExternalLink, Star } from 'lucide-react';
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
    <div className="px-6 py-5">
      <h3 ref={ref} className={fadeClass}>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 text-left text-base font-bold text-slate-900 hover:text-[#1A73E8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded"
        >
          <span className="usa-american-shimmer">{question}</span>
          <ChevronDown
            className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-200 ${
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
        className={isOpen ? 'mt-3 text-sm sm:text-base text-slate-600 leading-relaxed' : 'hidden'}
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
      {/* SECTION 7: Ideal Industries & Business Types */}
      <section
        id="industries"
        className="relative z-30 py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
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
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.industries.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.industries.items.map((industry) => (
              <div
                key={industry.name}
                className="border border-slate-200 rounded-xl p-5 bg-white hover:border-slate-300 transition-colors"
              >
                <ShimmerHeading as="h3" fadeInLeft={true} className="text-base font-bold text-slate-900">
                  {industry.name}
                </ShimmerHeading>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {industry.searchContext}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-500">{data.industries.note}</p>
        </div>
      </section>

      {/* SECTION 8: Experience, Verified Reviews & Results Framework */}
      <section
        id="experience"
        className="relative z-30 py-16 lg:py-24 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-experience-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.experience.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-experience-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.experience.title}
            </ShimmerHeading>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.experience.subtitle}
            </p>
          </div>

          {/* Verified Official Google Maps Reviews */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <ShimmerHeading as="h3" fadeInLeft={true} className="text-lg font-bold text-slate-900">
                  {data.experience.verifiedReviewsTitle}
                </ShimmerHeading>
                <p className="mt-1 text-sm text-slate-600">
                  {data.experience.verifiedReviewsSubtitle}
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleMapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A73E8] hover:text-[#174EA6] whitespace-nowrap shrink-0"
              >
                <span>{data.experience.verifiedProfileLinkLabel}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.experience.reviews.map((review) => (
                <article
                  key={review.author}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="flex items-center gap-1 text-amber-500"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                      “{review.quote}”
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-sm font-bold text-slate-900">{review.author}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{review.context}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 3-Phase Modular Project Documentation Framework */}
          <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="max-w-3xl">
              <ShimmerHeading
                as="h3"
                fadeInLeft={true}
                className="text-lg sm:text-xl font-bold text-slate-900"
              >
                {data.experience.frameworkTitle}
              </ShimmerHeading>
              <p className="mt-1.5 text-sm text-slate-600">{data.experience.frameworkSubtitle}</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.experience.frameworkSteps.map((step) => (
                <div
                  key={step.phase}
                  className="border border-slate-200/90 rounded-lg p-5 bg-slate-50/70"
                >
                  <span className="text-xs font-mono font-bold text-[#1A73E8]">{step.phase}</span>
                  <h4 className="mt-1.5 text-base font-bold text-slate-900">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>

            {/* Crawlable internal links to published technical guides & service pages */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {data.experience.resourcesHeading}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {data.experience.resources.map((res) => (
                  <Link
                    key={res.path}
                    to={res.path}
                    className="text-sm font-semibold text-[#1A73E8] hover:text-[#174EA6] underline-offset-4 hover:underline"
                  >
                    {res.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Meet the SEO Specialist */}
      <section
        id="specialist"
        className="relative z-30 py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80"
        aria-labelledby="usa-specialist-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Real photograph — rendered crisply without physical alterations */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm aspect-[9/10]">
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
                    className="w-full h-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>

            <div className="lg:col-span-7">
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

              <div className="mt-4">
                <p className="text-lg font-bold text-slate-900">{data.specialist.name}</p>
                <p className="text-sm font-medium text-[#1A73E8]">{data.specialist.role}</p>
              </div>

              <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed">
                {data.specialist.bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                {data.specialist.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] transition-colors rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{data.specialist.ctaLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Why Hire Auditoria SEO */}
      <section
        id="why-us"
        className="relative z-30 py-16 lg:py-20 bg-white border-b border-slate-200/80"
        aria-labelledby="usa-why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A73E8]">
              {data.whyUs.kicker}
            </p>
            <ShimmerHeading
              as="h2"
              id="usa-why-heading"
              fadeInLeft={true}
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance"
            >
              {data.whyUs.title}
            </ShimmerHeading>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {data.whyUs.subtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyUs.items.map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <ShimmerHeading as="h3" fadeInLeft={true} className="text-base font-bold text-slate-900">
                  {item.title}
                </ShimmerHeading>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Frequently Asked Questions */}
      <section
        id="faq"
        className="relative z-30 py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80"
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
            <p className="mt-3 text-base text-slate-600 leading-relaxed">{data.faq.subtitle}</p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
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
