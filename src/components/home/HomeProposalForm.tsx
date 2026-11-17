import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { HomeCommercialContent } from '../../i18n/homeCommercial';

interface HomeProposalFormProps {
  content: HomeCommercialContent;
  defaultWhatsappMessage: string;
  getWhatsAppUrl: (message: string) => string;
}

interface FormValues {
  name: string;
  company: string;
  website: string;
  country: string;
  service: string;
  notes: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: '',
  company: '',
  website: '',
  country: '',
  service: '',
  notes: '',
};

function isValidWebsiteInput(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length < 4 || /\s/.test(trimmed)) return false;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(candidate);
    return Boolean(parsed.hostname && parsed.hostname.includes('.'));
  } catch {
    return false;
  }
}

export const HomeProposalForm: React.FC<HomeProposalFormProps> = ({
  content,
  defaultWhatsappMessage,
  getWhatsAppUrl,
}) => {
  const { proposalForm, bottomCta } = content;
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) {
      next.name = proposalForm.errors.nameRequired;
    }
    if (!values.company.trim()) {
      next.company = proposalForm.errors.companyRequired;
    }
    if (!isValidWebsiteInput(values.website)) {
      next.website = proposalForm.errors.websiteInvalid;
    }
    if (!values.country.trim()) {
      next.country = proposalForm.errors.countryRequired;
    }
    if (!values.service.trim()) {
      next.service = proposalForm.errors.serviceRequired;
    }
    if (values.notes.trim().length < 10) {
      next.notes = proposalForm.errors.notesRequired;
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formattedSummary = [
      `${proposalForm.fields.nameLabel}: ${values.name.trim()}`,
      `${proposalForm.fields.companyLabel}: ${values.company.trim()}`,
      `${proposalForm.fields.websiteLabel}: ${values.website.trim()}`,
      `${proposalForm.fields.countryLabel}: ${values.country.trim()}`,
      `${proposalForm.fields.serviceLabel}: ${values.service.trim()}`,
      `${proposalForm.fields.notesLabel}: ${values.notes.trim()}`,
    ].join('\n');

    setSubmittedSummary(formattedSummary);
  };

  const handleReset = () => {
    setSubmittedSummary(null);
  };

  return (
    <>
      {/* SECTION 9: STRUCTURED PROPOSAL BRIEF FORM */}
      <section
        id="solicitar-proposta"
        className="py-16 sm:py-20 bg-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Context & Direct Channel Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#1A73E8] uppercase">
                  {proposalForm.kicker}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3 text-balance">
                  {proposalForm.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {proposalForm.subtitle}
                </p>
              </div>

              <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  {proposalForm.sideTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {proposalForm.sideDescription}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {proposalForm.sideHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-200/80">
                  <a
                    href={getWhatsAppUrl(defaultWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-semibold text-[#1A73E8] bg-white hover:bg-blue-50/50 border border-blue-200 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{proposalForm.directWhatsappButton}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive 6-Field Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
                {submittedSummary ? (
                  <div className="space-y-5" role="status" aria-live="polite">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1A73E8] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {proposalForm.successTitle}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {proposalForm.successText}
                        </p>
                      </div>
                    </div>

                    <pre className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 whitespace-pre-wrap font-sans leading-relaxed">
                      {submittedSummary}
                    </pre>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={getWhatsAppUrl(submittedSummary)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                      >
                        <span>{proposalForm.openWhatsappSummary}</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                      >
                        {proposalForm.resetButton}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="proposal-name"
                          className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                        >
                          {proposalForm.fields.nameLabel}
                        </label>
                        <input
                          id="proposal-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={values.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder={proposalForm.fields.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                            errors.name
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="proposal-company"
                          className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                        >
                          {proposalForm.fields.companyLabel}
                        </label>
                        <input
                          id="proposal-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={values.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder={proposalForm.fields.companyPlaceholder}
                          aria-invalid={Boolean(errors.company)}
                          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                            errors.company
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                          }`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="proposal-website"
                          className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                        >
                          {proposalForm.fields.websiteLabel}
                        </label>
                        <input
                          id="proposal-website"
                          name="website"
                          type="url"
                          autoComplete="url"
                          value={values.website}
                          onChange={(e) => handleChange('website', e.target.value)}
                          placeholder={proposalForm.fields.websitePlaceholder}
                          aria-invalid={Boolean(errors.website)}
                          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                            errors.website
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                          }`}
                        />
                        {errors.website && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.website}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="proposal-country"
                          className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                        >
                          {proposalForm.fields.countryLabel}
                        </label>
                        <input
                          id="proposal-country"
                          name="country"
                          type="text"
                          autoComplete="country-name"
                          value={values.country}
                          onChange={(e) => handleChange('country', e.target.value)}
                          placeholder={proposalForm.fields.countryPlaceholder}
                          aria-invalid={Boolean(errors.country)}
                          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                            errors.country
                              ? 'border-red-500 focus:ring-red-200'
                              : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                          }`}
                        />
                        {errors.country && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="proposal-service"
                        className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                      >
                        {proposalForm.fields.serviceLabel}
                      </label>
                      <select
                        id="proposal-service"
                        name="service"
                        value={values.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        aria-invalid={Boolean(errors.service)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 ${
                          errors.service
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                        }`}
                      >
                        <option value="">{proposalForm.fields.servicePlaceholder}</option>
                        {proposalForm.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="proposal-notes"
                        className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                      >
                        {proposalForm.fields.notesLabel}
                      </label>
                      <textarea
                        id="proposal-notes"
                        name="notes"
                        rows={4}
                        value={values.notes}
                        onChange={(e) => handleChange('notes', e.target.value)}
                        placeholder={proposalForm.fields.notesPlaceholder}
                        aria-invalid={Boolean(errors.notes)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.notes
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-[#1A73E8] focus:ring-blue-100'
                        }`}
                      />
                      {errors.notes && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.notes}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#174EA6] rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A73E8]"
                    >
                      <span>{proposalForm.submitButton}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: BOTTOM CONCLUDING CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 text-balance">
            {bottomCta.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            {bottomCta.subtitle}
          </p>
          <a
            href={getWhatsAppUrl(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            <span>{bottomCta.button}</span>
            <ArrowRight className="w-4 h-4 text-[#1A73E8] shrink-0" />
          </a>
        </div>
      </section>
    </>
  );
};
