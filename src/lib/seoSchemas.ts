import { Language } from '../i18n/types';
import { TRANSLATIONS } from '../i18n/translations';
import { HOME_COMMERCIAL_CONTENT } from '../i18n/homeCommercial';
import { SITE_CONFIG } from '../data/siteData';

const DOMAIN = 'https://auditoriaseo.com.br';

const PROVIDER_ENTITY = {
  '@type': 'Organization',
  name: 'Auditoria SEO',
  url: DOMAIN,
  telephone: '+55-19-98933-2087',
  logo: {
    '@type': 'ImageObject',
    url: `${DOMAIN}/icon-512.png`,
  },
  sameAs: [SITE_CONFIG.whatsappBaseUrl, SITE_CONFIG.googleMapsProfileUrl],
};

export function buildHomeJsonLd(lang: Language, canonicalUrl: string): Record<string, unknown> {
  const t = TRANSLATIONS[lang];
  const c = HOME_COMMERCIAL_CONTENT[lang];

  const catalogServices = [
    ...c.auditsSection.items.map((item) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: item.name,
        description: item.positioning,
      },
    })),
    ...c.plansSection.plans.map((plan) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: plan.name,
        description: plan.description,
      },
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Auditoria SEO',
    url: canonicalUrl,
    inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    logo: `${DOMAIN}/icon-512.png`,
    image: `${DOMAIN}/og-image.png`,
    description: t.meta.homeDescription,
    telephone: '+55-19-98933-2087',
    areaServed: lang === 'pt' ? 'BR' : ['BR', 'PY', 'AR', 'CL'],
    hasMap: SITE_CONFIG.googleMapsProfileUrl,
    founder: {
      '@type': 'Person',
      name: c.methodology.specialistName,
      jobTitle: c.methodology.specialistRole,
    },
    sameAs: [SITE_CONFIG.whatsappBaseUrl, SITE_CONFIG.googleMapsProfileUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${c.auditsSection.title} & ${c.plansSection.title}`,
      itemListElement: catalogServices,
    },
  };
}

export function buildLocalSeoJsonLd(lang: Language, canonicalUrl: string): Record<string, unknown> {
  const t = TRANSLATIONS[lang];
  const serviceName =
    lang === 'es'
      ? 'SEO Local y Optimización del Perfil de Empresa en Google'
      : lang === 'en'
      ? 'Local SEO & Google Business Profile Optimization'
      : 'SEO Local e Otimização do Perfil da Empresa no Google';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: 'Local SEO, Google Maps Optimization & Google Business Profile Management',
    url: canonicalUrl,
    inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    provider: {
      ...PROVIDER_ENTITY,
      hasMap: SITE_CONFIG.googleMapsProfileUrl,
    },
    areaServed: lang === 'pt' ? 'BR' : ['BR', 'PY', 'AR', 'CL'],
    description: t.meta.localSeoDescription,
  };
}

export function buildGoogleAdsJsonLd(lang: Language, canonicalUrl: string): Record<string, unknown> {
  const t = TRANSLATIONS[lang];
  const gData = t.googleAdsPage;
  const serviceName =
    lang === 'es'
      ? 'Estructuración Profesional de Campañas en Google Ads'
      : lang === 'en'
      ? 'Professional Google Ads Campaign Structuring'
      : 'Estruturação Profissional de Campanhas no Google Ads';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: serviceName,
        serviceType: 'Google Ads Campaign Setup & Conversion Tracking',
        url: canonicalUrl,
        inLanguage: lang === 'pt' ? 'pt-BR' : lang,
        provider: PROVIDER_ENTITY,
        areaServed: lang === 'pt' ? 'BR' : ['BR', 'PY', 'AR', 'CL'],
        description: t.meta.googleAdsDescription,
      },
      {
        '@type': 'FAQPage',
        mainEntity: gData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildModernizationJsonLd(
  lang: Language,
  canonicalUrl: string
): Record<string, unknown> {
  const t = TRANSLATIONS[lang];
  const pData = t.modernizationPage;
  const serviceName =
    lang === 'es'
      ? 'Modernización, Reconstrucción y Alojamiento de Sitios Web'
      : lang === 'en'
      ? 'Website Modernization, Rebuilding & Cloudflare Edge Hosting'
      : 'Modernização, Reconstrução e Hospedagem de Sites';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: serviceName,
        serviceType: 'Website Modernization, Migration & Performance Optimization',
        url: canonicalUrl,
        inLanguage: lang === 'pt' ? 'pt-BR' : lang,
        provider: PROVIDER_ENTITY,
        areaServed: ['BR', 'PY', 'AR', 'CL'],
        description: t.meta.modernizationDescription,
      },
      {
        '@type': 'FAQPage',
        mainEntity: pData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function buildBlogListJsonLd(lang: Language, canonicalUrl: string): Record<string, unknown> {
  const t = TRANSLATIONS[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.meta.blogTitle,
    description: t.meta.blogDescription,
    url: canonicalUrl,
    inLanguage: lang === 'pt' ? 'pt-BR' : lang,
    publisher: PROVIDER_ENTITY,
  };
}
