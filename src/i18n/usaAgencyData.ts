import { Language } from './types';

export interface UsaAgencyServiceItem {
  number: string;
  id: string;
  name: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  relatedGuideLabel?: string;
  relatedGuidePath?: string;
}

export interface UsaAgencyContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    htmlLang: string;
    ogLocale: string;
    ogLocaleAlternates: string[];
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    serviceName: string;
    serviceType: string;
    schemaDescription: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    description: string;
    primaryCta: string;
    formCta: string;
    secondaryCta: string;
    typewriterLabel: string;
    typewriterPhrases: string[];
    complementaryText: string;
    imageAlt: string;
    conceptualNotice: string;
  };
  positioning: {
    eyebrow: string;
    pillarsLabel: string;
    title: string;
    description: string;
    pillars: Array<{
      code: 'SEO' | 'GEO' | 'AEO';
      title: string;
      detail: string;
    }>;
    differentiators: Array<{
      title: string;
      detail: string;
    }>;
    imageAlt: string;
    ctaLabel: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    auditVisualTitle: string;
    auditVisualSummary: string;
    auditVisualAlt: string;
    guidesLabel: string;
    guides: Array<{
      label: string;
      path: string;
    }>;
    items: UsaAgencyServiceItem[];
  };
  industries: {
    kicker: string;
    title: string;
    subtitle: string;
    note: string;
    imageAlt: string;
    items: Array<{
      id: 'industrial' | 'manufacturing' | 'contractors' | 'home-services' | 'technical' | 'b2b';
      name: string;
      searchContext: string;
    }>;
  };
  methodology: {
    kicker: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    scopeClarification: string;
    steps: Array<{
      step: string;
      icon: 'audit' | 'strategy' | 'implementation' | 'growth';
      title: string;
      description: string;
    }>;
  };
  specialist: {
    kicker: string;
    title: string;
    name: string;
    role: string;
    bio: string;
    highlights: string[];
    photoAlt: string;
    ctaLabel: string;
    reviewsHeading: string;
    reviewsSubheading: string;
    verifiedProfileLinkLabel: string;
    reviews: Array<{
      author: string;
      context: string;
      quote: string;
    }>;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  consultation: {
    kicker: string;
    title: string;
    description: string;
    primaryCta: string;
    calendlyCta: string;
    schedulingNote: string;
    noCalendlyNote: string;
    directEmailLabel: string;
    channelsHeading: string;
    channelsList: string[];
    formHeading: string;
    formSubheading: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      websiteLabel: string;
      websitePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
    };
    serviceOptions: string[];
    errors: {
      nameRequired: string;
      companyRequired: string;
      emailInvalid: string;
      websiteInvalid: string;
      serviceRequired: string;
      messageRequired: string;
      spamDetected: string;
    };
    submitButton: string;
    submittingButton: string;
    privacyNote: string;
    successTitle: string;
    successMessage: string;
    sendAnotherButton: string;
    deliveryErrorTitle: string;
    deliveryErrorMessage: string;
    retryButton: string;
  };
}

export const USA_AGENCY_DATA: Record<Language, UsaAgencyContent> = {
  en: {
    meta: {
      title: 'SEO Agency USA | Technical SEO, Local SEO & AI Search',
      description:
        'Professional SEO audits, technical SEO, local SEO, GEO and AEO services for US businesses. Improve your Google visibility. Book a free consultation.',
      ogTitle: 'SEO Agency USA | Technical SEO, Local SEO & AI Search',
      ogDescription:
        'Professional SEO services for US businesses. SEO audits, local search optimization, GEO and AEO strategies. Schedule your free consultation.',
      ogImageAlt:
        'Conceptual Google-inspired character standing over a satellite view of the United States.',
      htmlLang: 'en-US',
      ogLocale: 'en_US',
      ogLocaleAlternates: ['pt_BR', 'es_419'],
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'SEO Agency USA',
      serviceName: 'SEO Audits, Technical Optimization & Local SEO Services for US Businesses',
      serviceType: 'Technical SEO Audit, On-Page SEO, Local SEO, Google Business Profile Optimization',
      schemaDescription:
        'Independent technical SEO consultancy serving businesses across the United States with human-led SEO audits, on-page optimization, local search strategy, GEO, AEO, and ongoing SEO management.',
    },
    hero: {
      eyebrow: 'SEO Agency for US Businesses',
      h1: 'Get Found on Google. Turn Visibility Into Business Opportunities.',
      description:
        'Professional SEO audits, technical optimization, and local search strategies designed to help US businesses improve their online visibility, attract qualified traffic, and generate more business opportunities.',
      primaryCta: 'Schedule a Free Consultation',
      formCta: 'Request an SEO Consultation',
      secondaryCta: 'Explore Our SEO Services',
      typewriterLabel: 'Specialized in:',
      typewriterPhrases: [
        'Technical SEO Audits',
        'On-Page SEO Optimization',
        'Local SEO Strategies',
        'Google Business Profile Optimization',
        'Google Maps Visibility',
        'Ongoing SEO Management',
      ],
      complementaryText:
        'Technical SEO. On-Page Optimization. Local SEO. Measurable Insights.',
      imageAlt:
        'Conceptual 3D illustration of a G mascot standing over the eastern United States territory on Earth viewed from orbit',
      conceptualNotice:
        'Conceptual artwork representing US search visibility. Auditoria SEO is an independent consultancy not affiliated with or endorsed by Google LLC.',
    },
    positioning: {
      eyebrow: 'US Search & AI Positioning',
      pillarsLabel: 'SEO · GEO · AEO',
      title: 'SEO, GEO & AEO for US Businesses',
      description:
        'As an independent SEO Agency USA, we turn organic search visibility into qualified leads for industrial, B2B, and specialized service companies—combining human-led technical rigor with commercial priorities focused on qualified pipeline.',
      pillars: [
        {
          code: 'SEO',
          title: 'Google & Maps Visibility',
          detail: 'Stronger technical architecture, high-intent service pages, and regional Google Maps visibility.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Clear entity authority so generative AI engines cite your brand during US buyer research.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Structured answers built for featured snippets, voice search, and direct buyer decision questions.',
        },
      ],
      differentiators: [
        {
          title: 'Human-Led Diagnostics',
          detail: 'Senior manual inspection of crawl, indexation, and buyer intent—never generic automated software checklists.',
        },
        {
          title: 'Built for Qualified Leads',
          detail: 'Every priority targets high-value RFQs, phone calls, and qualified service inquiries rather than vanity traffic.',
        },
        {
          title: 'Flexible Engagement',
          detail: 'Start with a standalone one-time technical SEO audit or add ongoing monthly execution as you grow.',
        },
      ],
      imageAlt:
        'Patriotic bald eagle emblem representing strategic search positioning across the United States market',
      ctaLabel: 'Explore SEO Services',
    },
    services: {
      kicker: 'Commercial Capabilities',
      title: 'Professional SEO Services',
      subtitle:
        'Tailored SEO services for US businesses—available as an independent one-time audit or ongoing monthly growth partnership.',
      auditVisualTitle: 'Engineering-Grade SEO Audit & Performance Analysis',
      auditVisualSummary:
        'We pinpoint crawl bottlenecks, weak service pages, and local ranking gaps, translating technical findings into an actionable roadmap tied to business growth.',
      auditVisualAlt:
        'Corporate office desk with a desktop monitor displaying website architecture diagrams and organic search visibility trends',
      guidesLabel: 'Technical Guides:',
      guides: [
        { label: 'Technical SEO Audit Guide', path: '/en/blog/auditoria-tecnica-seo' },
        { label: 'On-Page SEO Guide', path: '/en/blog/auditoria-seo-on-page' },
        { label: 'Local SEO & Google Search', path: '/en/blog/seo-local-como-aparecer-google' },
      ],
      items: [
        {
          number: '01',
          id: 'technical-seo-audit',
          name: 'Technical SEO Audits',
          description:
            'Standalone technical diagnostic uncovering indexation errors, speed bottlenecks, crawl waste, and structural issues holding back your organic visibility.',
          benefits: [
            'Faster crawling, cleaner indexation, and stronger Core Web Vitals',
            'Prioritized implementation roadmap ready for your engineering or marketing team',
          ],
          ctaLabel: 'Request Audit',
          relatedGuideLabel: 'Technical Audit Guide',
          relatedGuidePath: '/en/blog/auditoria-tecnica-seo',
        },
        {
          number: '02',
          id: 'on-page-seo',
          name: 'On-Page SEO',
          description:
            'Sharpen commercial service pages, semantic headings, metadata, and internal links so decision-makers and Google clearly understand every solution you offer.',
          benefits: [
            'Stronger relevance and rankings for high-intent US buyer queries',
            'Clearer commercial service pages structured to convert organic visitors',
          ],
          ctaLabel: 'Optimize Pages',
          relatedGuideLabel: 'On-Page Guide',
          relatedGuidePath: '/en/blog/auditoria-seo-on-page',
        },
        {
          number: '03',
          id: 'local-seo',
          name: 'Local SEO & Google Business Profile',
          description:
            'Capture regional US demand with complete Google Business Profile optimization, accurate local citations, and stronger Google Maps SEO signals.',
          benefits: [
            'Higher visibility across competitive Google Maps local packs in your service area',
            'More qualified local calls, direction clicks, and service quote requests',
          ],
          ctaLabel: 'Grow Local Leads',
          relatedGuideLabel: 'Local SEO Guide',
          relatedGuidePath: '/en/blog/seo-local-como-aparecer-google',
        },
        {
          number: '04',
          id: 'keyword-competitor-analysis',
          name: 'Keyword Research & Competitor Analysis',
          description:
            'Map profitable US commercial search demand and uncover exactly where top regional or national competitors outrank you across high-value terms.',
          benefits: [
            'Target proven buyer keywords tied directly to contracts and RFQs',
            'Spot high-value content, structural, and authority gaps you can win',
          ],
          ctaLabel: 'Map Opportunities',
        },
        {
          number: '05',
          id: 'ongoing-seo-management',
          name: 'Ongoing SEO Management',
          description:
            'Monthly technical maintenance, targeted content expansion, and conversion-focused optimization designed to compound qualified organic pipeline over time.',
          benefits: [
            'Consistent senior execution without inflated agency overhead',
            'Transparent monthly reporting focused on rankings and lead impact',
          ],
          ctaLabel: 'Explore Retainer',
        },
        {
          number: '06',
          id: 'geo-aeo-ai-search',
          name: 'GEO & AEO (AI Search Visibility)',
          description:
            'Position your company for Generative Engine Optimization and Answer Engine Optimization so AI assistants and answer engines reference your brand.',
          benefits: [
            'Structured entities and concise answers built for AI citations',
            'Future-proof commercial visibility across evolving US search experiences',
          ],
          ctaLabel: 'Strengthen AI Search',
        },
      ],
    },
    industries: {
      kicker: 'Target US Markets',
      title: 'SEO Solutions for Specialized and Industrial Businesses',
      subtitle:
        'Our industrial SEO and B2B SEO framework is built for US companies that rely on high-value contracts, commercial RFQs, and steady local service inquiries.',
      note: 'Representative US sectors our methodology is built to serve—scoped to your specific niche, territory, and competitive landscape.',
      imageAlt:
        'Technicians inspecting modern CNC manufacturing equipment inside an American industrial B2B facility',
      items: [
        {
          id: 'industrial',
          name: 'Industrial Businesses',
          searchContext: 'Industrial equipment, plant solutions, and regional procurement searches.',
        },
        {
          id: 'manufacturing',
          name: 'Manufacturing Companies',
          searchContext: 'OEM/ODM capabilities, custom fabrication, and qualified RFQ visibility.',
        },
        {
          id: 'contractors',
          name: 'Specialized Contractors',
          searchContext: 'Commercial construction, MEP, roofing, and licensed trade inquiries.',
        },
        {
          id: 'home-services',
          name: 'Home Service Businesses',
          searchContext: 'HVAC, plumbing, electrical, and high-urgency local Google Maps demand.',
        },
        {
          id: 'technical',
          name: 'High-Value Technical Services',
          searchContext: 'Engineering, laboratory testing, compliance, and specialized inspections.',
        },
        {
          id: 'b2b',
          name: 'B2B Service Providers',
          searchContext: 'Logistics, enterprise IT, advisory, and commercial B2B operations.',
        },
      ],
    },
    methodology: {
      kicker: 'Workflow',
      title: 'Our SEO Process',
      subtitle:
        'A transparent four-stage execution framework connecting technical diagnosis directly to qualified leads and sustainable US business growth.',
      imageAlt:
        'Minimalist architectural glass and brushed steel steps symbolizing structured SEO strategy and steady organic growth',
      scopeClarification:
        'Hire Step 1 as an independent one-time SEO audit or partner with us across all four stages for full implementation.',
      steps: [
        {
          step: '01',
          icon: 'audit',
          title: 'Audit',
          description: 'Pinpoint technical bottlenecks, indexation barriers, and missed commercial search opportunities across your domain.',
        },
        {
          step: '02',
          icon: 'strategy',
          title: 'Strategy',
          description: 'Prioritize buyer-intent keywords, competitor gaps, and a structured roadmap tied directly to commercial revenue.',
        },
        {
          step: '03',
          icon: 'implementation',
          title: 'Implementation',
          description: 'Deploy technical fixes, on-page upgrades, Google Maps signals, and AI search improvements accurately.',
        },
        {
          step: '04',
          icon: 'growth',
          title: 'Growth',
          description: 'Measure organic search visibility, refine conversion pathways, and steadily scale qualified US client inquiries.',
        },
      ],
    },
    specialist: {
      kicker: 'Technical Leadership',
      title: 'Meet Your SEO Specialist',
      name: 'Wesley Vieira',
      role: 'Founder of Auditoria SEO · Technical SEO & Organic Growth Strategist',
      bio: 'Every audit and organic growth roadmap is led directly by Wesley Vieira—never outsourced to generic automated reports. We translate complex technical search behavior, local visibility signals, and AI search optimization into practical, revenue-focused actions for US business owners.',
      highlights: [
        'Direct senior specialist access from initial discovery through technical execution',
        'Engineering-level fluency in rendering, structured data, and site speed optimization',
        'Clear business English collaboration via Google Meet, Zoom, or asynchronous email',
      ],
      photoAlt:
        'Wesley Vieira, founder of Auditoria SEO, speaking on stage about Google search visibility strategies',
      ctaLabel: 'Schedule a Consultation with Wesley',
      reviewsHeading: 'Verified Client Feedback (Google Maps)',
      reviewsSubheading:
        'Authentic public reviews from our established practice—verifiable directly on our official Google Business Profile.',
      verifiedProfileLinkLabel: 'Verify on Google Maps',
      reviews: [
        {
          author: 'Alex Caldeira · Local Guide',
          context: 'Google Maps Review (Brazil Practice)',
          quote:
            'Helped place my practice consistently among the top results on Google and brought in qualified new clients.',
        },
        {
          author: 'Jose Diniz · Local Guide',
          context: 'Google Maps Review (Brazil Practice)',
          quote:
            'Truly committed to helping our business improve online visibility and connect with more customers.',
        },
        {
          author: 'Lauro dos Santos',
          context: 'Google Maps Review (Brazil Practice)',
          quote:
            'Dedicated professionals with clear execution—already seeing tangible business results from our partnership.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Direct answers on scope, standalone audits, and collaborating across US time zones.',
      items: [
        {
          question: 'Can I hire a one-time SEO Audit without a monthly contract?',
          answer:
            'Yes. Our Technical SEO Audit is a standalone project with a fixed scope and prioritized roadmap, with zero mandatory monthly retainer.',
        },
        {
          question: 'Do you also implement the SEO, Local SEO, and GEO/AEO fixes?',
          answer:
            'Yes. Your internal team can execute our roadmap, or you can hire Auditoria SEO for hands-on implementation and ongoing SEO management.',
        },
        {
          question: 'Can you improve our Google Business Profile and Google Maps visibility?',
          answer:
            'Yes, for eligible US businesses. We optimize categories, service areas, local landing pages, and regional signals in line with Google guidelines.',
        },
        {
          question: 'How do you collaborate with businesses across the United States?',
          answer:
            'We work remotely across all US time zones, holding discovery calls and audit walkthroughs in English via Google Meet, Zoom, and email.',
        },
        {
          question: 'What happens during the free SEO consultation?',
          answer:
            'We review your website, competitors, and commercial goals on a brief call and outline practical next steps—no high-pressure sales pitch.',
        },
      ],
    },
    consultation: {
      kicker: 'Start the Conversation',
      title: 'Schedule Your Free SEO Consultation',
      description:
        "Let's identify what's holding your website back and uncover new opportunities for qualified US organic leads.",
      primaryCta: 'Schedule Your Free SEO Consultation',
      calendlyCta: 'Schedule a Meeting',
      schedulingNote:
        'Consultations are held remotely via Google Meet or Zoom. No hard sales pitch—we review your website and share practical next steps.',
      noCalendlyNote:
        'Direct online calendar booking is temporarily unavailable. Please submit your request via the form alongside or email comercial@auditoriaseo.com.br.',
      directEmailLabel: 'Direct Commercial Email',
      channelsHeading: 'Built for US Business Collaboration',
      channelsList: [
        'Discovery & audit walkthroughs on Google Meet or Zoom',
        'Asynchronous technical collaboration via email and shared docs',
        'No required phone number—reach out on your schedule',
      ],
      formHeading: 'Request Your Free Consultation',
      formSubheading: 'Share your website and priorities below. Takes under two minutes.',
      fields: {
        nameLabel: 'Full Name *',
        namePlaceholder: 'John Miller',
        companyLabel: 'Company Name *',
        companyPlaceholder: 'Acme Industrial Services LLC',
        emailLabel: 'Business Email *',
        emailPlaceholder: 'john@acmeindustrial.com',
        websiteLabel: 'Website URL *',
        websitePlaceholder: 'https://www.acmeindustrial.com',
        serviceLabel: 'Service of Interest *',
        servicePlaceholder: 'Select an SEO service',
        messageLabel: 'Message *',
        messagePlaceholder: 'Briefly describe your website goals, target US regions, or current challenges on Google.',
      },
      serviceOptions: [
        'Technical SEO Audit (One-Time)',
        'On-Page SEO Optimization',
        'Local SEO & Google Business Profile',
        'Keyword Research & Competitor Analysis',
        'Ongoing SEO Management',
        'GEO & AEO (AI Search Visibility)',
        'Not sure yet — looking for an initial recommendation',
      ],
      errors: {
        nameRequired: 'Please enter your full name.',
        companyRequired: 'Please enter your company name.',
        emailInvalid: 'Please enter a valid business email address.',
        websiteInvalid: 'Please enter a valid website URL (e.g., https://company.com).',
        serviceRequired: 'Please select a service of interest.',
        messageRequired: 'Please share a brief message (at least 15 characters).',
        spamDetected: 'Submission blocked by spam verification.',
      },
      submitButton: 'Send My Request',
      submittingButton: 'Sending Request...',
      privacyNote:
        'Your submitted details are processed securely via FormSubmit strictly to review your website and respond to your inquiry. Zero spam or third-party sharing.',
      successTitle: 'Thank you! Your request has been successfully submitted.',
      successMessage:
        'Our SEO specialist will review your information and contact you shortly.',
      sendAnotherButton: 'Submit another inquiry',
      deliveryErrorTitle: 'We could not complete your submission',
      deliveryErrorMessage:
        'A temporary connection or delivery issue prevented your request from being sent. Your information has been preserved — please try again below.',
      retryButton: 'Try Again',
    },
  },

  pt: {
    meta: {
      title: 'Agência de SEO nos EUA | SEO Técnico, Local e IA',
      description:
        'Auditorias de SEO, SEO técnico, SEO local, GEO e AEO para empresas nos Estados Unidos. Melhore sua visibilidade no Google. Agende uma consulta gratuita.',
      ogTitle: 'Agência de SEO nos EUA | SEO Técnico, Local e IA',
      ogDescription:
        'Serviços profissionais de SEO para empresas nos Estados Unidos. Auditorias de SEO, busca local, GEO e AEO. Agende sua consulta gratuita.',
      ogImageAlt:
        'Personagem conceitual inspirado na letra G sobre imagem de satélite dos Estados Unidos.',
      htmlLang: 'pt-BR',
      ogLocale: 'pt_BR',
      ogLocaleAlternates: ['en_US', 'es_419'],
      breadcrumbHome: 'Início',
      breadcrumbCurrent: 'Agência SEO EUA',
      serviceName: 'Auditorias de SEO, Otimização Técnica e SEO Local para Empresas nos Estados Unidos',
      serviceType: 'Auditoria Técnica de SEO, SEO On-Page, SEO Local, Google Business Profile',
      schemaDescription:
        'Consultoria independente em SEO técnico atendendo empresas nos Estados Unidos com auditorias conduzidas por especialista, otimização on-page, SEO Local, GEO, AEO e gestão contínua.',
    },
    hero: {
      eyebrow: 'Agência SEO para Empresas nos EUA',
      h1: 'Seja Encontrado no Google nos EUA. Transforme Visibilidade em Oportunidades Comerciais.',
      description:
        'Auditorias técnicas de SEO, otimização on-page e estratégias de busca local desenhadas para empresas nos Estados Unidos ampliarem sua visibilidade orgânica, atraírem tráfego qualificado e gerarem novas oportunidades de negócio.',
      primaryCta: 'Agendar Consultoria Gratuita',
      formCta: 'Solicitar Consultoria SEO',
      secondaryCta: 'Explorar Serviços de SEO',
      typewriterLabel: 'Especialidades:',
      typewriterPhrases: [
        'Auditorias Técnicas de SEO',
        'Otimização SEO On-Page',
        'Estratégias de SEO Local',
        'Otimização de Google Business Profile',
        'Visibilidade no Google Maps',
        'Gestão Contínua de SEO',
      ],
      complementaryText:
        'SEO Técnico. Otimização On-Page. SEO Local. Resultados Mensuráveis.',
      imageAlt:
        'Ilustração conceitual em 3D de personagem inspirado na letra G sobre o território leste dos Estados Unidos visto do espaço',
      conceptualNotice:
        'Arte conceitual representando visibilidade de busca nos EUA. A Auditoria SEO é uma consultoria independente sem vínculo ou endosso da Google LLC.',
    },
    positioning: {
      eyebrow: 'Posicionamento nos EUA',
      pillarsLabel: 'SEO · GEO · AEO',
      title: 'SEO, GEO e AEO para Empresas nos EUA',
      description:
        'Atuamos como consultoria estratégica para empresas industriais, B2B e serviços especializados nos Estados Unidos, convertendo visibilidade orgânica em oportunidades comerciais reais com diagnóstico humano e prioridades claras de negócio.',
      pillars: [
        {
          code: 'SEO',
          title: 'Google & Google Maps',
          detail: 'Arquitetura técnica sólida, páginas comerciais claras e presença local estratégica nos EUA.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Autoridade semântica para sua empresa ser citada em respostas geradas por inteligência artificial.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Respostas estruturadas para capturar buscas diretas e dúvidas decisivas de compradores.',
        },
      ],
      differentiators: [
        {
          title: 'Diagnóstico Manual',
          detail: 'Inspeção técnica direta de especialista sobre rastreamento e intenção de compra, sem checklists genéricos.',
        },
        {
          title: 'Foco em Leads Qualificados',
          detail: 'Cada prioridade busca gerar pedidos de orçamento, ligações e contratos reais, nunca tráfego vazio.',
        },
        {
          title: 'Contratação Flexível',
          detail: 'Comece contratando apenas uma auditoria pontual ou avance para acompanhamento mensal contínuo.',
        },
      ],
      imageAlt:
        'Águia patriótica americana representando posicionamento estratégico de busca no mercado dos Estados Unidos',
      ctaLabel: 'Explorar Serviços de SEO',
    },
    services: {
      kicker: 'Soluções Comerciais',
      title: 'Serviços Profissionais de SEO',
      subtitle:
        'Auditorias pontuais independentes e gestão recorrente sob medida para empresas que atuam nos Estados Unidos.',
      auditVisualTitle: 'Auditoria Técnica e Inteligência de Desempenho Orgânico',
      auditVisualSummary:
        'Identificamos gargalos de indexação, páginas comerciais subaproveitadas e lacunas locais, entregando um plano claro voltado a crescimento.',
      auditVisualAlt:
        'Mesa corporativa com monitor exibindo arquitetura de site, diagnóstico técnico de SEO e tendência de visibilidade orgânica',
      guidesLabel: 'Guias Técnicos:',
      guides: [
        { label: 'Guia de Auditoria Técnica SEO', path: '/blog/auditoria-tecnica-seo' },
        { label: 'Guia de SEO On-Page', path: '/blog/auditoria-seo-on-page' },
        { label: 'SEO Local no Google', path: '/blog/seo-local-como-aparecer-google' },
      ],
      items: [
        {
          number: '01',
          id: 'technical-seo-audit',
          name: 'Auditorias Técnicas de SEO',
          description:
            'Projeto pontual independente para identificar erros de indexação, gargalos de velocidade, desperdício de rastreamento e falhas estruturais.',
          benefits: [
            'Rastreamento limpo, indexação eficiente e melhor desempenho técnico',
            'Plano de implementação priorizado por impacto comercial para sua equipe',
          ],
          ctaLabel: 'Solicitar Auditoria',
          relatedGuideLabel: 'Ver Guia Técnico',
          relatedGuidePath: '/blog/auditoria-tecnica-seo',
        },
        {
          number: '02',
          id: 'on-page-seo',
          name: 'SEO On-Page',
          description:
            'Aprimoramos páginas comerciais, hierarquia semântica, metadados e links internos para que compradores e buscadores compreendam sua oferta.',
          benefits: [
            'Maior relevância orgânica para termos de contratação nos EUA',
            'Páginas de serviço objetivas e estruturadas para conversão comercial',
          ],
          ctaLabel: 'Otimizar Páginas',
          relatedGuideLabel: 'Ver Guia On-Page',
          relatedGuidePath: '/blog/auditoria-seo-on-page',
        },
        {
          number: '03',
          id: 'local-seo',
          name: 'SEO Local & Google Business Profile',
          description:
            'Capte demanda regional nos Estados Unidos com otimização completa do Google Business Profile, consistência local e sinais para Google Maps.',
          benefits: [
            'Presença mais competitiva no pacote local e mapas da sua região',
            'Mais ligações comerciais, rotas e pedidos de orçamento qualificados',
          ],
          ctaLabel: 'Ampliar Busca Local',
          relatedGuideLabel: 'Ver Guia Local',
          relatedGuidePath: '/blog/seo-local-como-aparecer-google',
        },
        {
          number: '04',
          id: 'keyword-competitor-analysis',
          name: 'Pesquisa de Palavras-Chave e Concorrentes',
          description:
            'Mapeamos termos comerciais rentáveis nos EUA e analisamos exatamente onde os concorrentes lideram hoje em buscas de alto valor.',
          benefits: [
            'Foco em palavras-chave ligadas diretamente a cotações e contratos',
            'Identificação prática de brechas de conteúdo, estrutura e autoridade',
          ],
          ctaLabel: 'Mapear Demanda',
        },
        {
          number: '05',
          id: 'ongoing-seo-management',
          name: 'Gestão Contínua de SEO',
          description:
            'Acompanhamento técnico mensal, expansão estratégica de páginas e melhorias contínuas de conversão para sustentar geração orgânica de demanda.',
          benefits: [
            'Execução sênior consistente sem burocracia de agência tradicional',
            'Relatórios transparentes focados em visibilidade e oportunidades reais',
          ],
          ctaLabel: 'Conhecer Gestão',
        },
        {
          number: '06',
          id: 'geo-aeo-ai-search',
          name: 'GEO & AEO (Visibilidade em IA)',
          description:
            'Preparamos sua empresa para Generative Engine Optimization e Answer Engine Optimization para ganhar presença em respostas e buscadores de IA.',
          benefits: [
            'Estruturação clara de entidade e respostas diretas para citações em IA',
            'Visibilidade comercial alinhada às novas jornadas de busca nos EUA',
          ],
          ctaLabel: 'Ativar GEO & AEO',
        },
      ],
    },
    industries: {
      kicker: 'Segmentos Atendidos',
      title: 'Soluções de SEO para Empresas Industriais e Especializadas',
      subtitle:
        'Nossa metodologia de SEO industrial e B2B foi desenhada para empresas nos Estados Unidos que dependem de contratos, cotações comerciais e demanda regional.',
      note: 'Segmentos representativos que nossa metodologia está preparada para atender nos EUA, com escopo adaptado ao seu nicho e território.',
      imageAlt:
        'Especialistas inspecionando maquinário industrial CNC moderno em fábrica B2B americana',
      items: [
        {
          id: 'industrial',
          name: 'Empresas Industriais',
          searchContext: 'Equipamentos industriais, soluções de planta e compras B2B regionais.',
        },
        {
          id: 'manufacturing',
          name: 'Indústrias e Manufatura',
          searchContext: 'Capacidade OEM/ODM, fabricação sob medida e pedidos de cotação.',
        },
        {
          id: 'contractors',
          name: 'Empreiteiros Especializados',
          searchContext: 'Obras comerciais, engenharia MEP, coberturas e serviços licenciados.',
        },
        {
          id: 'home-services',
          name: 'Serviços Residenciais',
          searchContext: 'HVAC, elétrica, hidráulica e demanda local urgente no Google Maps.',
        },
        {
          id: 'technical',
          name: 'Serviços Técnicos de Alto Valor',
          searchContext: 'Engenharia, ensaios laboratoriais, conformidade e inspeções técnicas.',
        },
        {
          id: 'b2b',
          name: 'Prestadores B2B',
          searchContext: 'Logística, TI corporativa, consultoria e soluções empresariais.',
        },
      ],
    },
    methodology: {
      kicker: 'Metodologia',
      title: 'Nosso Processo de SEO',
      subtitle:
        'Quatro etapas transparentes que conectam o diagnóstico técnico diretamente à geração de leads qualificados nos Estados Unidos.',
      imageAlt:
        'Composição arquitetônica minimalista com degraus em vidro e aço escovado representando estratégia e crescimento digital',
      scopeClarification:
        'Contrate apenas a etapa de Auditoria como projeto pontual ou avance conosco pelas quatro fases para execução completa.',
      steps: [
        {
          step: '01',
          icon: 'audit',
          title: 'Audit',
          description: 'Mapeamos bloqueios técnicos, falhas de indexação e oportunidades comerciais perdidas em todo o domínio.',
        },
        {
          step: '02',
          icon: 'strategy',
          title: 'Strategy',
          description: 'Priorizamos palavras-chave de compra, brechas competitivas e um plano claro ligado diretamente a receita.',
        },
        {
          step: '03',
          icon: 'implementation',
          title: 'Implementation',
          description: 'Aplicamos correções técnicas, melhorias on-page, sinais do Google Maps e otimizações para busca por IA.',
        },
        {
          step: '04',
          icon: 'growth',
          title: 'Growth',
          description: 'Acompanhamos posições orgânicas, refinamos caminhos de conversão e ampliamos contatos comerciais nos EUA.',
        },
      ],
    },
    specialist: {
      kicker: 'Direção Técnica',
      title: 'Conheça Seu Especialista em SEO',
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO · Especialista em SEO Técnico e Tráfego Orgânico',
      bio: 'Todas as auditorias e planos de crescimento são conduzidos pessoalmente por Wesley Vieira — nunca terceirizados para relatórios automáticos genéricos. Traduzimos comportamento técnico de busca, SEO local e otimização para IA em ações práticas para empresários nos EUA.',
      highlights: [
        'Atuação direta do especialista sênior do diagnóstico inicial à execução',
        'Domínio prático de renderização, dados estruturados, velocidade e arquitetura web',
        'Colaboração em inglês ou português via Google Meet, Zoom e e-mail',
      ],
      photoAlt:
        'Wesley Vieira, fundador da Auditoria SEO, palestrando em palco sobre estratégias de visibilidade no Google',
      ctaLabel: 'Agendar Reunião com Wesley',
      reviewsHeading: 'Avaliações Reais Verificáveis (Google Maps)',
      reviewsSubheading:
        'Depoimentos autênticos da nossa operação no Brasil — públicos e verificáveis diretamente no Google Business Profile.',
      verifiedProfileLinkLabel: 'Verificar no Google Maps',
      reviews: [
        {
          author: 'Alex Caldeira · Local Guide',
          context: 'Avaliação no Google Maps (Brasil)',
          quote:
            'Colocou meu consultório sempre entre os primeiros no Google e trouxe bastante clientes qualificados.',
        },
        {
          author: 'Jose Diniz · Local Guide',
          context: 'Avaliação no Google Maps (Brasil)',
          quote:
            'Comprometidos em ajudar de fato o nosso negócio, aprimorando a presença digital e aproximando mais clientes.',
        },
        {
          author: 'Lauro dos Santos',
          context: 'Avaliação no Google Maps (Brasil)',
          quote:
            'Excelentes profissionais, dedicados e com execução clara — já colhendo frutos consistentes dessa parceria.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas diretas sobre escopo, auditoria pontual e atendimento remoto nos EUA.',
      items: [
        {
          question: 'Posso contratar apenas a Auditoria Técnica de SEO sem mensalidade?',
          answer:
            'Sim. Nossa auditoria é um projeto pontual independente, com escopo definido e plano de ação completo, sem fidelidade mensal.',
        },
        {
          question: 'Vocês também implementam as melhorias de SEO, Local e GEO/AEO?',
          answer:
            'Sim. Sua equipe pode executar o plano técnico ou você pode contratar a Auditoria SEO para implementação direta e gestão contínua.',
        },
        {
          question: 'Vocês ajudam a empresa a aparecer no Google Maps nos EUA?',
          answer:
            'Sim, para negócios elegíveis no Google Business Profile. Otimizamos categorias, regiões atendidas e sinais locais conforme as diretrizes oficiais.',
        },
        {
          question: 'Como funciona o atendimento para empresas nos Estados Unidos?',
          answer:
            'Atendemos 100% remotamente em qualquer fuso horário americano, com reuniões em inglês ou português via Google Meet, Zoom e e-mail.',
        },
        {
          question: 'O que acontece na consultoria gratuita inicial?',
          answer:
            'Analisamos seu site, concorrentes e metas comerciais em uma conversa objetiva e mostramos os próximos passos práticos, sem pressão de venda.',
        },
      ],
    },
    consultation: {
      kicker: 'Próximo Passo',
      title: 'Agende Sua Consultoria Gratuita de SEO',
      description:
        'Vamos identificar o que está limitando o crescimento orgânico do seu domínio e mapear novas oportunidades comerciais nos EUA.',
      primaryCta: 'Agendar Consultoria Gratuita de SEO',
      calendlyCta: 'Agendar Reunião',
      schedulingNote:
        'Reuniões remotas via Google Meet ou Zoom. Conversa técnica objetiva sobre o seu domínio e próximos passos.',
      noCalendlyNote:
        'O agendamento direto por calendário está temporariamente indisponível. Envie sua solicitação pelo formulário ao lado ou escreva para comercial@auditoriaseo.com.br.',
      directEmailLabel: 'E-mail Comercial Oficial',
      channelsHeading: 'Atendimento Preparado para Operações nos EUA',
      channelsList: [
        'Reuniões de alinhamento e apresentação via Google Meet ou Zoom',
        'Comunicação assíncrona objetiva por e-mail e documentação compartilhada',
        'Telefone não obrigatório no formulário de contato',
      ],
      formHeading: 'Solicitar Consultoria Gratuita',
      formSubheading: 'Preencha os dados do seu site e objetivo comercial.',
      fields: {
        nameLabel: 'Nome completo *',
        namePlaceholder: 'Seu nome completo',
        companyLabel: 'Nome da empresa *',
        companyPlaceholder: 'Nome da empresa nos EUA',
        emailLabel: 'E-mail corporativo *',
        emailPlaceholder: 'contato@suaempresa.com',
        websiteLabel: 'URL do site *',
        websitePlaceholder: 'https://www.suaempresa.com',
        serviceLabel: 'Serviço de interesse *',
        servicePlaceholder: 'Selecione um serviço',
        messageLabel: 'Mensagem *',
        messagePlaceholder: 'Descreva brevemente seu segmento nos EUA, metas ou principais desafios atuais no Google.',
      },
      serviceOptions: [
        'Auditoria Técnica de SEO (Pontual)',
        'Otimização On-Page SEO',
        'SEO Local e Google Business Profile',
        'Pesquisa de Palavras-Chave e Concorrentes',
        'Gestão Contínua de SEO',
        'GEO & AEO (Visibilidade em IA)',
        'Ainda não sei — quero uma recomendação inicial',
      ],
      errors: {
        nameRequired: 'Informe seu nome completo.',
        companyRequired: 'Informe o nome da empresa.',
        emailInvalid: 'Informe um endereço de e-mail corporativo válido.',
        websiteInvalid: 'Informe uma URL de site válida (ex.: https://empresa.com).',
        serviceRequired: 'Selecione o serviço de interesse.',
        messageRequired: 'Descreva brevemente sua necessidade (mínimo 15 caracteres).',
        spamDetected: 'Envio bloqueado pela verificação anti-spam.',
      },
      submitButton: 'Enviar Minha Solicitação',
      submittingButton: 'Enviando solicitação...',
      privacyNote:
        'Os dados enviados são processados via FormSubmit exclusivamente para análise preliminar do seu site e resposta à sua solicitação comercial.',
      successTitle: 'Obrigado! Sua solicitação foi enviada com sucesso.',
      successMessage:
        'Nosso especialista em SEO analisará suas informações e entrará em contato em breve.',
      sendAnotherButton: 'Enviar nova solicitação',
      deliveryErrorTitle: 'Não foi possível concluir o envio',
      deliveryErrorMessage:
        'Ocorreu uma instabilidade temporária ao enviar sua solicitação. Seus dados preenchidos foram mantidos — clique abaixo para tentar novamente.',
      retryButton: 'Tentar Novamente',
    },
  },

  es: {
    meta: {
      title: 'Agencia SEO en Estados Unidos | SEO Técnico, Local e IA',
      description:
        'Auditorías SEO, SEO técnico, SEO local, GEO y AEO para empresas en Estados Unidos. Mejora tu visibilidad en Google. Agenda una consulta gratuita.',
      ogTitle: 'Agencia SEO en Estados Unidos | SEO Técnico, Local e IA',
      ogDescription:
        'Servicios profesionales de SEO para empresas en Estados Unidos. Auditorías SEO, búsqueda local, estrategias GEO y AEO. Agenda tu consulta gratuita.',
      ogImageAlt:
        'Personaje conceptual inspirado en la letra G sobre una vista satelital de Estados Unidos.',
      htmlLang: 'es-419',
      ogLocale: 'es_419',
      ogLocaleAlternates: ['en_US', 'pt_BR'],
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'Agencia SEO EE. UU.',
      serviceName: 'Auditorías SEO, Optimización Técnica y SEO Local para Empresas en Estados Unidos',
      serviceType: 'Auditoría Técnica SEO, SEO On-Page, SEO Local, Google Business Profile',
      schemaDescription:
        'Consultora independiente de SEO técnico orientada a empresas en Estados Unidos con auditorías humanas, optimización on-page, SEO Local, GEO, AEO y gestión continua.',
    },
    hero: {
      eyebrow: 'Agencia SEO para Empresas en EE. UU.',
      h1: 'Aparezca en Google en EE. UU. Convierta la Visibilidad en Oportunidades de Negocio.',
      description:
        'Auditorías técnicas de SEO, optimización on-page y estrategias de búsqueda local diseñadas para ayudar a empresas en Estados Unidos a mejorar su visibilidad online, atraer tráfico cualificado y generar nuevas oportunidades comerciales.',
      primaryCta: 'Agendar Consultoría Gratuita',
      formCta: 'Solicitar Consultoría SEO',
      secondaryCta: 'Explorar Servicios SEO',
      typewriterLabel: 'Especialización:',
      typewriterPhrases: [
        'Auditorías Técnicas de SEO',
        'Optimización SEO On-Page',
        'Estrategias de SEO Local',
        'Optimización de Google Business Profile',
        'Visibilidad en Google Maps',
        'Gestión Continua de SEO',
      ],
      complementaryText:
        'SEO Técnico. Optimización On-Page. SEO Local. Información Medible.',
      imageAlt:
        'Ilustración conceptual en 3D de un personaje con forma de letra G sobre la costa este de Estados Unidos desde el espacio',
      conceptualNotice:
        'Arte conceptual que representa visibilidad de búsqueda en EE. UU. Auditoria SEO es una consultora independiente sin afiliación ni respaldo de Google LLC.',
    },
    positioning: {
      eyebrow: 'Posicionamiento en EE. UU.',
      pillarsLabel: 'SEO · GEO · AEO',
      title: 'SEO, GEO y AEO para Empresas en EE. UU.',
      description:
        'Ayudamos a empresas industriales, B2B y servicios especializados en Estados Unidos a transformar su visibilidad orgánica en oportunidades comerciales calificadas, uniendo ingeniería SEO real con prioridades claras de negocio.',
      pillars: [
        {
          code: 'SEO',
          title: 'Google y Google Maps',
          detail: 'Arquitectura técnica sólida, páginas comerciales claras y presencia local estratégica en EE. UU.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Autoridad semántica para que los motores de inteligencia artificial citen su marca en EE. UU.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Respuestas estructuradas para captar búsquedas directas y dudas clave de compradores.',
        },
      ],
      differentiators: [
        {
          title: 'Diagnóstico Humano',
          detail: 'Inspección técnica directa de especialista sobre rastreo e intención de compra, sin listas genéricas.',
        },
        {
          title: 'Enfoque en Leads',
          detail: 'Cada prioridad apunta a cotizaciones, llamadas y contratos comerciales, nunca tráfico vacío.',
        },
        {
          title: 'Alcance Flexible',
          detail: 'Inicie con una auditoría puntual independiente o sume gestión mensual continua.',
        },
      ],
      imageAlt:
        'Águila patriótica estadounidense que representa el posicionamiento estratégico en búsquedas de Estados Unidos',
      ctaLabel: 'Explorar Servicios SEO',
    },
    services: {
      kicker: 'Soluciones Comerciales',
      title: 'Servicios Profesionales de SEO',
      subtitle:
        'Auditorías puntuales independientes y gestión mensual continua adaptada a empresas en Estados Unidos.',
      auditVisualTitle: 'Auditoría Técnica y Análisis de Desempeño Orgánico',
      auditVisualSummary:
        'Detectamos bloqueos de rastreo, páginas comerciales débiles y brechas locales, convirtiendo los hallazgos en una hoja de ruta enfocada en ventas.',
      auditVisualAlt:
        'Escritorio corporativo con monitor mostrando diagramas de arquitectura web y tendencias de visibilidad orgánica',
      guidesLabel: 'Guías Técnicas:',
      guides: [
        { label: 'Guía de Auditoría Técnica SEO', path: '/es/blog/auditoria-tecnica-seo' },
        { label: 'Guía de SEO On-Page', path: '/es/blog/auditoria-seo-on-page' },
        { label: 'SEO Local en Google', path: '/es/blog/seo-local-como-aparecer-google' },
      ],
      items: [
        {
          number: '01',
          id: 'technical-seo-audit',
          name: 'Auditorías Técnicas de SEO',
          description:
            'Diagnóstico puntual independiente para detectar errores de indexación, cuellos de botella de velocidad y fallos de rastreo.',
          benefits: [
            'Rastreo limpio, indexación eficiente y mejor rendimiento técnico',
            'Hoja de ruta priorizada por impacto comercial para su equipo',
          ],
          ctaLabel: 'Solicitar Auditoría',
          relatedGuideLabel: 'Ver Guía Técnica',
          relatedGuidePath: '/es/blog/auditoria-tecnica-seo',
        },
        {
          number: '02',
          id: 'on-page-seo',
          name: 'SEO On-Page',
          description:
            'Optimizamos páginas comerciales, encabezados semánticos, metadatos y enlaces internos para que compradores y Google entiendan su propuesta.',
          benefits: [
            'Mayor relevancia orgánica para búsquedas con intención de compra en EE. UU.',
            'Páginas de servicio más claras y preparadas para convertir visitas',
          ],
          ctaLabel: 'Optimizar Páginas',
          relatedGuideLabel: 'Ver Guía On-Page',
          relatedGuidePath: '/es/blog/auditoria-seo-on-page',
        },
        {
          number: '03',
          id: 'local-seo',
          name: 'SEO Local y Google Business Profile',
          description:
            'Capte demanda regional en Estados Unidos con optimización de Google Business Profile, consistencia local y señales fuertes para Google Maps.',
          benefits: [
            'Mayor visibilidad en el paquete local y mapas de su zona de servicio',
            'Más llamadas comerciales, clics de ruta y solicitudes de presupuesto',
          ],
          ctaLabel: 'Impulsar SEO Local',
          relatedGuideLabel: 'Ver Guía Local',
          relatedGuidePath: '/es/blog/seo-local-como-aparecer-google',
        },
        {
          number: '04',
          id: 'keyword-competitor-analysis',
          name: 'Palabras Clave y Análisis Competitivo',
          description:
            'Mapeamos búsquedas comerciales rentables en EE. UU. y analizamos exactamente dónde los líderes actuales superan a su empresa.',
          benefits: [
            'Enfoque en palabras clave vinculadas a contratos y cotizaciones reales',
            'Detección práctica de brechas de contenido, estructura y autoridad',
          ],
          ctaLabel: 'Mapear Demanda',
        },
        {
          number: '05',
          id: 'ongoing-seo-management',
          name: 'Gestión Continua de SEO',
          description:
            'Mantenimiento técnico mensual, expansión estratégica de páginas y optimización continua enfocada en generar prospectos calificados.',
          benefits: [
            'Ejecución sénior constante sin burocracia ni costos de agencia tradicional',
            'Informes transparentes orientados a visibilidad y oportunidades de venta',
          ],
          ctaLabel: 'Ver Gestión Mensual',
        },
        {
          number: '06',
          id: 'geo-aeo-ai-search',
          name: 'GEO y AEO (Visibilidad en IA)',
          description:
            'Posicionamos su empresa para Generative Engine Optimization y Answer Engine Optimization en buscadores conversacionales con IA.',
          benefits: [
            'Entidades claras y respuestas estructuradas para citas en IA',
            'Visibilidad comercial preparada para las nuevas búsquedas en EE. UU.',
          ],
          ctaLabel: 'Activar GEO y AEO',
        },
      ],
    },
    industries: {
      kicker: 'Sectores en EE. UU.',
      title: 'Soluciones SEO para Empresas Industriales y Especializadas',
      subtitle:
        'Nuestra estrategia de SEO industrial y B2B está diseñada para empresas en Estados Unidos que dependen de contratos, cotizaciones y consultas locales.',
      note: 'Sectores representativos que nuestra metodología está preparada para atender según cada mercado y territorio.',
      imageAlt:
        'Técnicos inspeccionando maquinaria CNC moderna dentro de una planta industrial B2B estadounidense',
      items: [
        {
          id: 'industrial',
          name: 'Empresas Industriales',
          searchContext: 'Equipos industriales, soluciones de planta y compras B2B regionales.',
        },
        {
          id: 'manufacturing',
          name: 'Empresas de Manufactura',
          searchContext: 'Capacidades OEM/ODM, fabricación a medida y pedidos de cotización.',
        },
        {
          id: 'contractors',
          name: 'Contratistas Especializados',
          searchContext: 'Construcción comercial, MEP, techado y servicios con licencia.',
        },
        {
          id: 'home-services',
          name: 'Servicios para el Hogar',
          searchContext: 'HVAC, plomería, electricidad y demanda local urgente en Google Maps.',
        },
        {
          id: 'technical',
          name: 'Servicios Técnicos de Alto Valor',
          searchContext: 'Ingeniería, ensayos de laboratorio, cumplimiento e inspecciones técnicas.',
        },
        {
          id: 'b2b',
          name: 'Proveedores B2B',
          searchContext: 'Logística, TI empresarial, consultoría y soluciones corporativas.',
        },
      ],
    },
    methodology: {
      kicker: 'Metodología',
      title: 'Nuestro Proceso de SEO',
      subtitle:
        'Cuatro etapas transparentes que conectan el diagnóstico técnico directamente con oportunidades comerciales sostenidas en Estados Unidos.',
      imageAlt:
        'Composición arquitectónica minimalista en vidrio y acero cepillado que simboliza estrategia y crecimiento digital',
      scopeClarification:
        'Contrate solo la etapa de Auditoría de forma puntual o avance con nosotros en todo el ciclo de implementación.',
      steps: [
        {
          step: '01',
          icon: 'audit',
          title: 'Audit',
          description: 'Detectamos bloqueos técnicos, fallos de indexación y oportunidades comerciales perdidas en su dominio.',
        },
        {
          step: '02',
          icon: 'strategy',
          title: 'Strategy',
          description: 'Priorizamos palabras clave de compra, brechas competitivas y una hoja de ruta vinculada a ventas.',
        },
        {
          step: '03',
          icon: 'implementation',
          title: 'Implementation',
          description: 'Aplicamos mejoras técnicas, optimización on-page, señales de Google Maps y preparación para IA.',
        },
        {
          step: '04',
          icon: 'growth',
          title: 'Growth',
          description: 'Medimos posiciones orgánicas, refinamos rutas de conversión y escalamos contactos calificados en EE. UU.',
        },
      ],
    },
    specialist: {
      kicker: 'Dirección Técnica',
      title: 'Conozca a Su Especialista en SEO',
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO · Especialista en SEO Técnico y Crecimiento Orgánico',
      bio: 'Cada auditoría y plan de crecimiento es dirigido personalmente por Wesley Vieira, nunca delegado a reportes automáticos genéricos. Convertimos el SEO técnico, la presencia local y la optimización para IA en acciones claras para captar clientes en EE. UU.',
      highlights: [
        'Acompañamiento directo del especialista sénior desde el diagnóstico hasta la ejecución',
        'Dominio técnico de renderizado, datos estructurados, velocidad y arquitectura web',
        'Colaboración fluida en inglés, español o portugués vía Google Meet, Zoom o correo',
      ],
      photoAlt:
        'Wesley Vieira, fundador de Auditoria SEO, exponiendo estrategias de visibilidad en Google sobre un escenario',
      ctaLabel: 'Agendar Reunión con Wesley',
      reviewsHeading: 'Reseñas Reales Verificables (Google Maps)',
      reviewsSubheading:
        'Opiniones reales de nuestra práctica consolidada, verificables directamente en nuestro perfil oficial de Google Business Profile.',
      verifiedProfileLinkLabel: 'Verificar en Google Maps',
      reviews: [
        {
          author: 'Alex Caldeira · Local Guide',
          context: 'Reseña en Google Maps (Brasil)',
          quote:
            'Posicionó mi consulta de forma constante entre los primeros resultados en Google y atrajo numerosos clientes calificados.',
        },
        {
          author: 'Jose Diniz · Local Guide',
          context: 'Reseña en Google Maps (Brasil)',
          quote:
            'Realmente comprometidos con ayudar a nuestro negocio a mejorar su presencia digital y conectar con más clientes.',
        },
        {
          author: 'Lauro dos Santos',
          context: 'Reseña en Google Maps (Brasil)',
          quote:
            'Profesionales dedicados y con ejecución clara; ya vemos resultados comerciales concretos de esta alianza.',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas claras sobre alcance, auditoría puntual y colaboración remota en EE. UU.',
      items: [
        {
          question: '¿Puedo contratar una Auditoría Técnica SEO sin contrato mensual?',
          answer:
            'Sí. La auditoría es un proyecto puntual independiente con entregables claros y sin permanencia ni mensualidad obligatoria.',
        },
        {
          question: '¿También implementan las mejoras técnicas, locales y GEO/AEO?',
          answer:
            'Sí. Su equipo interno puede ejecutar la hoja de ruta o podemos encargarnos directamente de la implementación y gestión mensual.',
        },
        {
          question: '¿Pueden mejorar nuestra visibilidad en Google Maps en EE. UU.?',
          answer:
            'Sí, para empresas elegibles en Google Business Profile. Optimizamos categorías, áreas de servicio y señales locales siguiendo las directrices oficiales.',
        },
        {
          question: '¿Cómo colaboran con empresas en Estados Unidos?',
          answer:
            'Trabajamos de forma remota en todas las zonas horarias de EE. UU. con reuniones en inglés o español vía Google Meet, Zoom y correo.',
        },
        {
          question: '¿Qué ocurre en la consultoría SEO gratuita?',
          answer:
            'Revisamos su sitio web, competencia y metas comerciales en una llamada breve y compartimos los próximos pasos prácticos, sin presiones.',
        },
      ],
    },
    consultation: {
      kicker: 'Contacto Comercial',
      title: 'Agenda Tu Consultoría SEO Gratuita',
      description:
        'Identifiquemos qué frena el crecimiento orgánico de su sitio y descubramos nuevas oportunidades de clientes calificados en EE. UU.',
      primaryCta: 'Agendar Su Consultoría SEO Gratuita',
      calendlyCta: 'Agendar Reunión',
      schedulingNote:
        'Videollamadas vía Google Meet o Zoom. Revisamos su sitio web de forma práctica y sin presiones comerciales.',
      noCalendlyNote:
        'La reserva directa por calendario no está disponible temporalmente. Envíe su solicitud mediante el formulario adjunto o escriba a comercial@auditoriaseo.com.br.',
      directEmailLabel: 'Correo Comercial Oficial',
      channelsHeading: 'Colaboración Ágil para Empresas en EE. UU.',
      channelsList: [
        'Reuniones de descubrimiento y revisión vía Google Meet o Zoom',
        'Seguimiento técnico por correo y documentación compartida',
        'No exigimos teléfono obligatorio en el formulario',
      ],
      formHeading: 'Solicitar Consultoría Gratuita',
      formSubheading: 'Comparta su sitio web y prioridades comerciales.',
      fields: {
        nameLabel: 'Nombre completo *',
        namePlaceholder: 'Nombre y apellido',
        companyLabel: 'Empresa *',
        companyPlaceholder: 'Nombre de su empresa',
        emailLabel: 'Correo corporativo *',
        emailPlaceholder: 'nombre@empresa.com',
        websiteLabel: 'URL del sitio web *',
        websitePlaceholder: 'https://www.empresa.com',
        serviceLabel: 'Servicio de interés *',
        servicePlaceholder: 'Seleccione una opción',
        messageLabel: 'Mensaje *',
        messagePlaceholder: 'Describa brevemente su mercado en EE. UU., metas o desafíos actuales en Google.',
      },
      serviceOptions: [
        'Technical SEO Audit (Puntual)',
        'On-Page SEO Optimization',
        'Local SEO & Google Business Profile',
        'Keyword Research & Competitor Analysis',
        'Ongoing SEO Management',
        'GEO & AEO (Visibilidad en IA)',
        'Aún no estoy seguro — busco recomendación inicial',
      ],
      errors: {
        nameRequired: 'Ingrese su nombre completo.',
        companyRequired: 'Ingrese el nombre de su empresa.',
        emailInvalid: 'Ingrese un correo corporativo válido.',
        websiteInvalid: 'Ingrese una URL válida (ej.: https://empresa.com).',
        serviceRequired: 'Seleccione el servicio de interés.',
        messageRequired: 'Escriba un mensaje breve (mínimo 15 caracteres).',
        spamDetected: 'Envío bloqueado por validación anti-spam.',
      },
      submitButton: 'Enviar Mi Solicitud',
      submittingButton: 'Enviando solicitud...',
      privacyNote:
        'Sus datos enviados se procesan mediante FormSubmit únicamente para evaluar su sitio web y responder a su consulta comercial.',
      successTitle: '¡Gracias! Su solicitud ha sido enviada con éxito.',
      successMessage:
        'Nuestro especialista en SEO revisará su información y se pondrá en contacto con usted pronto.',
      sendAnotherButton: 'Enviar otra consulta',
      deliveryErrorTitle: 'No pudimos completar su envío',
      deliveryErrorMessage:
        'Ocurrió una interrupción temporal al enviar su solicitud. Sus datos permanecen guardados — por favor intente nuevamente abajo.',
      retryButton: 'Intentar de Nuevo',
    },
  },
};
