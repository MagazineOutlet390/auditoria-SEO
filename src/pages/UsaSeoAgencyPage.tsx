import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { UsaHero } from '../components/usa/UsaHero';
import { UsaPrimarySections } from '../components/usa/UsaPrimarySections';
import { UsaSecondarySections } from '../components/usa/UsaSecondarySections';
import { UsaConsultationSection } from '../components/usa/UsaConsultationSection';
import { useLanguage } from '../i18n/LanguageContext';
import { getHreflangs } from '../i18n/routes';
import { USA_AGENCY_DATA } from '../i18n/usaAgencyData';
import { buildUsaAgencyJsonLd } from '../lib/seoSchemas';
import { captureUtmAttribution } from '../lib/analytics';

const DOMAIN = 'https://auditoriaseo.com.br';

const SERVICE_ID_TO_OPTION_INDEX: Record<string, number> = {
  'technical-seo-audit': 0,
  'on-page-seo': 1,
  'local-seo': 2,
  'google-business-profile': 2,
  'keyword-competitor-analysis': 3,
  'ongoing-seo-management': 4,
};

export const UsaSeoAgencyPage: React.FC = () => {
  const { lang, currentRoutes } = useLanguage();
  const location = useLocation();
  const [selectedServiceOption, setSelectedServiceOption] = useState<string>('');

  const data = USA_AGENCY_DATA[lang];
  const canonicalPath = currentRoutes.usaAgency;
  const canonicalUrl = `${DOMAIN}${canonicalPath}`;

  useEffect(() => {
    captureUtmAttribution();
  }, [location.search]);

  const jumpToConsultation = () => {
    if (typeof document !== 'undefined') {
      const target = document.getElementById('consultation');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSelectService = (serviceId: string, _serviceTitle: string) => {
    const idx = SERVICE_ID_TO_OPTION_INDEX[serviceId];
    if (idx !== undefined && data.consultation.serviceOptions[idx]) {
      setSelectedServiceOption(data.consultation.serviceOptions[idx]);
    }
    jumpToConsultation();
  };

  return (
    <main className="bg-white text-[#202124]">
      <SEOHead
        title={data.meta.title}
        description={data.meta.description}
        ogTitle={data.meta.ogTitle}
        ogDescription={data.meta.ogDescription}
        canonicalPath={canonicalPath}
        ogType="website"
        ogImage={`${DOMAIN}/images/usa/og-seo-agency-usa.jpg`}
        ogImageAlt={data.meta.ogImageAlt}
        ogImageWidth="1200"
        ogImageHeight="630"
        currentLang={lang}
        htmlLang={data.meta.htmlLang}
        ogLocale={data.meta.ogLocale}
        ogLocaleAlternates={data.meta.ogLocaleAlternates}
        hreflangs={getHreflangs(canonicalPath)}
        jsonLd={buildUsaAgencyJsonLd(lang, canonicalUrl)}
      />

      <UsaHero
        content={data.hero}
        htmlLang={data.meta.htmlLang}
        pagePath={canonicalPath}
        onJumpToConsultation={jumpToConsultation}
      />

      <UsaPrimarySections
        data={data}
        htmlLang={data.meta.htmlLang}
        pagePath={canonicalPath}
        onSelectService={handleSelectService}
      />

      <UsaSecondarySections
        data={data}
        htmlLang={data.meta.htmlLang}
        pagePath={canonicalPath}
        onJumpToConsultation={jumpToConsultation}
      />

      <UsaConsultationSection
        content={data.consultation}
        lang={lang}
        htmlLang={data.meta.htmlLang}
        pagePath={canonicalPath}
        selectedServiceOption={selectedServiceOption}
      />
    </main>
  );
};
