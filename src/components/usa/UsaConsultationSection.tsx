import React, { useEffect, useRef, useState } from 'react';
import { Calendar, CheckCircle2, Copy, Mail, Send, AlertCircle } from 'lucide-react';
import { UsaAgencyContent } from '../../i18n/usaAgencyData';
import { Language } from '../../i18n/types';
import { SITE_CONFIG } from '../../data/siteData';
import { captureUtmAttribution, trackAnalyticsEvent } from '../../lib/analytics';
import { ShimmerHeading } from './UsaMotionHeadings';

interface UsaConsultationSectionProps {
  content: UsaAgencyContent['consultation'];
  lang: Language;
  htmlLang: string;
  pagePath: string;
  selectedServiceOption: string;
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'unconfigured' | 'network_error';

const EMAIL_RE = /^[^\s@<>()[\]\\,;:\s@"]+@[^\s@<>()[\]\\,;:\s@"]+\.[^\s@]{2,}$/;

function isValidWebsiteInput(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || /^(javascript|data|vbscript|file):/i.test(trimmed)) return false;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(candidate);
    return (
      (parsed.protocol === 'https:' || parsed.protocol === 'http:') &&
      Boolean(parsed.hostname) &&
      parsed.hostname.includes('.')
    );
  } catch {
    return false;
  }
}

export const UsaConsultationSection: React.FC<UsaConsultationSectionProps> = ({
  content,
  lang,
  htmlLang,
  pagePath,
  selectedServiceOption,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [copiedBrief, setCopiedBrief] = useState(false);

  const formStartedRef = useRef(false);
  const formRenderedAtRef = useRef<number>(0);

  useEffect(() => {
    formRenderedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (selectedServiceOption) {
      setService(selectedServiceOption);
      if (submitState !== 'idle') {
        setSubmitState('idle');
      }
    }
  }, [selectedServiceOption]);

  const handleFirstInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackAnalyticsEvent('contact_form_start', {
        page_language: htmlLang,
        service_interest: service || undefined,
        cta_location: 'consultation_form',
        page_path: pagePath,
      });
    }
  };

  const buildBriefText = () => {
    return [
      `Name: ${name.trim()}`,
      `Company: ${company.trim()}`,
      `Business Email: ${email.trim()}`,
      `Website URL: ${website.trim()}`,
      `Service of Interest: ${service.trim()}`,
      `Page Language: ${htmlLang}`,
      '',
      'Message:',
      message.trim(),
    ].join('\n');
  };

  const buildMailtoHref = () => {
    const subject = `[SEO Consultation Request] ${company.trim() || 'US Inquiry'} — ${service.trim() || 'SEO Audit'}`;
    return `mailto:${SITE_CONFIG.commercialEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBriefText())}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildBriefText());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 3000);
    } catch {
      setCopiedBrief(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldError(null);

    if (honeypot.trim().length > 0) {
      setFieldError(content.errors.spamDetected);
      return;
    }

    if (name.trim().length < 2) {
      setFieldError(content.errors.nameRequired);
      return;
    }
    if (company.trim().length < 2) {
      setFieldError(content.errors.companyRequired);
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setFieldError(content.errors.emailInvalid);
      return;
    }
    if (!isValidWebsiteInput(website)) {
      setFieldError(content.errors.websiteInvalid);
      return;
    }
    if (!service.trim()) {
      setFieldError(content.errors.serviceRequired);
      return;
    }
    if (message.trim().length < 15) {
      setFieldError(content.errors.messageRequired);
      return;
    }

    setSubmitState('submitting');

    try {
      const response = await fetch(SITE_CONFIG.usLeadEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          website: website.trim(),
          service: service.trim(),
          message: message.trim(),
          lang,
          pagePath,
          utm: captureUtmAttribution(),
          company_website_fax: honeypot,
          formRenderedAt: formRenderedAtRef.current,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        code?: string;
      } | null;

      if (response.ok && result?.ok) {
        setSubmitState('success');
        trackAnalyticsEvent('generate_lead', {
          page_language: htmlLang,
          service_interest: service.trim(),
          cta_location: 'consultation_form',
          page_path: pagePath,
        });
        return;
      }

      if (response.status === 503 || result?.code === 'DELIVERY_NOT_CONFIGURED') {
        setSubmitState('unconfigured');
        return;
      }

      setSubmitState('network_error');
    } catch {
      setSubmitState('network_error');
    }
  };

  const resetForm = () => {
    setName('');
    setCompany('');
    setEmail('');
    setWebsite('');
    setService('');
    setMessage('');
    setFieldError(null);
    setSubmitState('idle');
    formStartedRef.current = false;
  };

  const hasCalendly = Boolean(SITE_CONFIG.calendlyUsaUrl);

  return (
    <section
      id="consultation"
      className="relative z-30 py-16 lg:py-24 bg-slate-950 text-white"
      aria-labelledby="usa-consultation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Consultation Value, Google Meet / Zoom, Calendly Slot, Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
                {content.kicker}
              </p>
              <ShimmerHeading
                as="h2"
                id="usa-consultation-heading"
                isDark={true}
                fadeInLeft={true}
                className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight text-balance"
              >
                {content.title}
              </ShimmerHeading>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
              <p className="text-sm font-semibold text-white">{content.schedulingNote}</p>

              {hasCalendly ? (
                <a
                  href={SITE_CONFIG.calendlyUsaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackAnalyticsEvent('calendly_click', {
                      page_language: htmlLang,
                      cta_location: 'consultation_sidebar',
                      page_path: pagePath,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{content.calendlyCta}</span>
                </a>
              ) : (
                <p className="text-xs text-slate-400 leading-relaxed">{content.noCalendlyNote}</p>
              )}
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {content.directEmailLabel}
              </p>
              <a
                href={`mailto:${SITE_CONFIG.commercialEmail}`}
                onClick={() =>
                  trackAnalyticsEvent('email_click', {
                    page_language: htmlLang,
                    cta_location: 'consultation_sidebar',
                    page_path: pagePath,
                  })
                }
                className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.commercialEmail}</span>
              </a>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {content.channelsHeading}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {content.channelsList.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 6-Field Commercial Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl">
              <ShimmerHeading
                as="h3"
                fadeInLeft={true}
                className="text-xl sm:text-2xl font-bold text-slate-900"
              >
                {content.formHeading}
              </ShimmerHeading>
              <p className="mt-1.5 text-sm text-slate-600">{content.formSubheading}</p>

              {submitState === 'success' ? (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-emerald-950">
                        {content.successTitle}
                      </h4>
                      <p className="mt-1.5 text-sm text-emerald-900 leading-relaxed">
                        {content.successMessage}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-lg transition-colors"
                  >
                    {content.sendAnotherButton}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-4"
                  onFocus={handleFirstInteraction}
                >
                  {/* Anti-spam honeypot (hidden from human visitors and assistive tech) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_website_fax">Leave this field blank</label>
                    <input
                      id="company_website_fax"
                      name="company_website_fax"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="usa-form-name"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {content.fields.nameLabel}
                      </label>
                      <input
                        id="usa-form-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder={content.fields.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="usa-form-company"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {content.fields.companyLabel}
                      </label>
                      <input
                        id="usa-form-company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder={content.fields.companyPlaceholder}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="usa-form-email"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {content.fields.emailLabel}
                      </label>
                      <input
                        id="usa-form-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={content.fields.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="usa-form-website"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {content.fields.websiteLabel}
                      </label>
                      <input
                        id="usa-form-website"
                        name="website"
                        type="url"
                        required
                        autoComplete="url"
                        placeholder={content.fields.websitePlaceholder}
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="usa-form-service"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {content.fields.serviceLabel}
                    </label>
                    <select
                      id="usa-form-service"
                      name="service"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                    >
                      <option value="">{content.fields.servicePlaceholder}</option>
                      {content.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="usa-form-message"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {content.fields.messageLabel}
                    </label>
                    <textarea
                      id="usa-form-message"
                      name="message"
                      required
                      rows={4}
                      placeholder={content.fields.messagePlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]/20"
                    />
                  </div>

                  {fieldError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{fieldError}</span>
                    </div>
                  )}

                  {(submitState === 'unconfigured' || submitState === 'network_error') && (
                    <div
                      role="status"
                      className="rounded-xl border border-amber-300 bg-amber-50 p-4 space-y-3"
                    >
                      <p className="text-sm font-bold text-amber-950">
                        {submitState === 'unconfigured'
                          ? content.unconfiguredTitle
                          : content.networkErrorTitle}
                      </p>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                        {submitState === 'unconfigured'
                          ? content.unconfiguredMessage
                          : content.networkErrorMessage}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={buildMailtoHref()}
                          onClick={() =>
                            trackAnalyticsEvent('email_click', {
                              page_language: htmlLang,
                              service_interest: service || undefined,
                              cta_location: 'form_fallback_mailto',
                              page_path: pagePath,
                            })
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{content.openEmailClientButton}</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyBrief}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>
                            {copiedBrief ? content.copiedBriefLabel : content.copyBriefButton}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] disabled:opacity-60 transition-colors rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                  >
                    <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>
                      {submitState === 'submitting'
                        ? content.submittingButton
                        : content.submitButton}
                    </span>
                  </button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    {content.privacyNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
