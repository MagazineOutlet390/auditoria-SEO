import { Language } from './types';

export interface UsaAgencyServiceItem {
  number: string;
  id: string;
  name: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  ctaLabel: string;
  relatedGuideLabel?: string;
  relatedGuidePath?: string;
}

export interface UsaAgencyContent {
  meta: {
    title: string;
    description: string;
    htmlLang: string;
    ogLocale: string;
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
  credibility: {
    kicker: string;
    title: string;
    summary: string;
    pillars: Array<{ label: string; detail: string }>;
  };
  positioning: {
    eyebrow: string;
    title: string;
    description: string;
    pillarsLabel: string;
    pillars: Array<{
      code: 'SEO' | 'GEO' | 'AEO';
      title: string;
      detail: string;
    }>;
    imageAlt: string;
    ctaLabel: string;
  };
  challenges: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{
      number: string;
      statement: string;
      explanation: string;
    }>;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    scopeNotice: string;
    benefitsHeading: string;
    deliverablesHeading: string;
    items: UsaAgencyServiceItem[];
  };
  methodology: {
    kicker: string;
    title: string;
    subtitle: string;
    engagementClarificationTitle: string;
    engagementClarificationText: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  auditReveal: {
    kicker: string;
    title: string;
    subtitle: string;
    tabs: Array<{
      id: 'technical' | 'content' | 'local';
      label: string;
      summary: string;
      areas: Array<{ name: string; detail: string }>;
    }>;
    allAreasHeading: string;
    screenshotCaptionTitle: string;
    screenshotBadge: string;
    screenshotCaptionText: string;
    screenshotAlt: string;
  };
  industries: {
    kicker: string;
    title: string;
    subtitle: string;
    note: string;
    items: Array<{
      name: string;
      searchContext: string;
    }>;
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    verifiedReviewsTitle: string;
    verifiedReviewsSubtitle: string;
    verifiedProfileLinkLabel: string;
    reviews: Array<{
      author: string;
      context: string;
      quote: string;
    }>;
    frameworkTitle: string;
    frameworkSubtitle: string;
    frameworkSteps: Array<{
      phase: string;
      title: string;
      detail: string;
    }>;
    resourcesHeading: string;
    resources: Array<{
      label: string;
      path: string;
    }>;
  };
  specialist: {
    kicker: string;
    title: string;
    name: string;
    role: string;
    bioParagraphs: string[];
    highlights: string[];
    photoAlt: string;
    ctaLabel: string;
  };
  whyUs: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
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
      title: 'SEO Agency USA | SEO Audits & Local SEO Services',
      description:
        'Professional SEO audits, technical SEO, on-page optimization and local SEO services for US businesses. Discover opportunities to improve your Google visibility.',
      htmlLang: 'en-US',
      ogLocale: 'en_US',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'SEO Agency USA',
      serviceName: 'SEO Audits, Technical Optimization & Local SEO Services for US Businesses',
      serviceType: 'Technical SEO Audit, On-Page SEO, Local SEO, Google Business Profile Optimization',
      schemaDescription:
        'Independent technical SEO consultancy serving businesses across the United States with human-led SEO audits, on-page optimization, local search strategy, and ongoing SEO management.',
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
    credibility: {
      kicker: 'Institutional Profile',
      title: 'Hands-on technical SEO consulting built for clarity and execution',
      summary:
        'Auditoria SEO is an independent search consultancy led directly by Wesley Vieira. We deliver human-conducted technical audits, clear engineering priorities, and structured SEO execution—serving companies remotely across the United States, Brazil, and Latin America.',
      pillars: [
        {
          label: 'Human-Led Audits',
          detail: 'Every domain review is executed manually by a specialist—never auto-generated tool PDFs.',
        },
        {
          label: 'White Hat Standards',
          detail: 'Recommendations aligned strictly with Google Search Essentials to protect long-term domain equity.',
        },
        {
          label: 'Flexible Scope',
          detail: 'Engage us for an independent one-time SEO audit or ongoing optimization and strategy.',
        },
        {
          label: 'Verified Reputation',
          detail: '5.0-star average rating across verified client reviews on our official Google Business Profile.',
        },
      ],
    },
    positioning: {
      eyebrow: 'Built for US Businesses',
      title: 'American Visibility for Search, AI and Local Discovery',
      description:
        'Auditoria SEO built a dedicated consulting model tailored to companies competing across the United States. We pair hands-on technical SEO with structured GEO and AEO optimization so your business strengthens its visibility across traditional Google Search, Google Maps, and emerging AI-driven discovery experiences.',
      pillarsLabel: 'SEO · GEO · AEO',
      pillars: [
        {
          code: 'SEO',
          title: 'Search Engine Optimization',
          detail: 'Technical crawlability, URL architecture, and commercial service pages built for US Google visibility.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Consistent entity signals, schema clarity, and authoritative topical structure for AI search systems.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Direct, verifiable answers structured for featured results, voice search, and AI summaries.',
        },
      ],
      imageAlt:
        'Editorial image of an American bald eagle with a US flag backdrop representing search, AI, and local visibility strategy for US businesses',
      ctaLabel: 'Explore US SEO Services',
    },
    challenges: {
      kicker: 'Common Commercial Bottlenecks',
      title: 'Why many established US websites fail to turn search demand into qualified inquiries',
      subtitle:
        'A polished website rarely ranks or converts on design alone. Beneath the surface, technical blockers, misaligned search intent, and local visibility gaps quietly hand high-intent prospects to competitors.',
      items: [
        {
          number: '01.',
          statement: 'My website is not ranking on Google.',
          explanation:
            'Crawl barriers, thin service pages, weak internal link distribution, or unindexed URLs prevent Google from recognizing your core commercial offerings.',
        },
        {
          number: '02.',
          statement: 'My competitors appear before my business.',
          explanation:
            'Rivals capturing buyer queries typically pair cleaner site architecture with targeted service landing pages and stronger topical authority.',
        },
        {
          number: '03.',
          statement: 'My website gets traffic but generates few leads.',
          explanation:
            'Informational visits rarely convert when service pages lack clear value propositions, search-intent alignment, or friction-free inquiry paths.',
        },
        {
          number: '04.',
          statement: 'My business is difficult to find on Google Maps.',
          explanation:
            'Incomplete Google Business Profile categories, inconsistent business citations, or weak local page signals limit visibility in regional service searches.',
        },
        {
          number: '05.',
          statement: "I don't know which technical issues are affecting my website.",
          explanation:
            'Without log, crawl, canonical, and rendering inspection, broken redirects, duplicate URLs, and Core Web Vitals bottlenecks go unnoticed for months.',
        },
        {
          number: '06.',
          statement: "I'm investing in marketing without understanding my organic search performance.",
          explanation:
            'Paid campaigns stop producing the moment ad spend pauses. Clear organic diagnostics show where SEO can lower long-term customer acquisition reliance.',
        },
      ],
    },
    services: {
      kicker: 'Specialized SEO Services',
      title: 'Practical SEO audits and optimization services tailored to US companies',
      subtitle:
        'Every service focuses on transparent diagnostics, clear engineering and editorial execution, and commercial alignment—without fixed generic packages or unrealistic guarantees.',
      scopeNotice:
        'All engagements are scoped individually after reviewing your website, market competition, and business goals—no one-size-fits-all retainers.',
      benefitsHeading: 'Commercial impact',
      deliverablesHeading: 'Key activities & deliverables',
      items: [
        {
          number: '01.',
          id: 'technical-seo-audit',
          name: 'Technical SEO Audit',
          description:
            'Deep engineering-level review of crawlability, indexation, URL architecture, JavaScript rendering, page speed, canonicalization, redirect chains, XML sitemaps, and structured data.',
          benefits: [
            'Eliminates hidden indexing blocks holding back important revenue pages.',
            'Gives your internal dev team or agency an exact, prioritized repair roadmap.',
          ],
          deliverables: [
            'Full crawl & indexation diagnostic (Search Console + crawler inspection)',
            'Canonical, redirect hygiene, and duplicate content mapping',
            'Core Web Vitals, rendering, XML sitemap, and schema markup review',
          ],
          ctaLabel: 'Request Technical Audit',
          relatedGuideLabel: 'Read our Technical SEO Audit Guide',
          relatedGuidePath: '/en/blog/auditoria-tecnica-seo',
        },
        {
          number: '02.',
          id: 'on-page-seo',
          name: 'On-Page SEO',
          description:
            'Structured optimization of title tags, meta descriptions, semantic heading hierarchy, service page copy, search-intent alignment, and internal linking architecture.',
          benefits: [
            'Clarifies each page’s primary commercial topic for both users and Google.',
            'Strengthens internal authority flow toward high-margin service pages.',
          ],
          deliverables: [
            'Title tag, meta description, and H1–H3 semantic restructuring',
            'Search-intent alignment and commercial copy refinement',
            'Internal link architecture and anchor-text optimization',
          ],
          ctaLabel: 'Inquire on On-Page SEO',
          relatedGuideLabel: 'Read our On-Page SEO Audit Guide',
          relatedGuidePath: '/en/blog/auditoria-seo-on-page',
        },
        {
          number: '03.',
          id: 'local-seo',
          name: 'Local SEO',
          description:
            'Targeted search strategies designed for businesses competing across specific US cities, metropolitan areas, service territories, or multi-location footprints.',
          benefits: [
            'Connects regional service demand directly with dedicated local landing pages.',
            'Builds consistent geographic relevance across organic search results.',
          ],
          deliverables: [
            'City, state, and service-area page architecture planning',
            'NAP consistency and local structured data alignment',
            'Localized keyword mapping for regional buyer intent',
          ],
          ctaLabel: 'Explore Local SEO',
          relatedGuideLabel: 'Explore our Local SEO overview',
          relatedGuidePath: '/en/local-seo',
        },
        {
          number: '04.',
          id: 'google-business-profile',
          name: 'Google Business Profile & Google Maps',
          description:
            'Compliant setup, category refinement, service structuring, and relevance optimization for your Google Business Profile to strengthen visibility in Google Maps searches.',
          benefits: [
            'Improves how your business appears when local buyers compare providers on Maps.',
            'Follows Google’s official eligibility and profile guidelines to protect account standing.',
          ],
          deliverables: [
            'Primary & secondary category audit and service catalog setup',
            'Profile completeness, attribute alignment, and photo/update hygiene',
            'Review acquisition guidance and profile-to-website linking alignment',
          ],
          ctaLabel: 'Optimize Google Business Profile',
          relatedGuideLabel: 'Read our Google Business Profile Guide',
          relatedGuidePath: '/en/blog/como-criar-google-meu-negocio',
        },
        {
          number: '05.',
          id: 'keyword-competitor-analysis',
          name: 'Keyword Research & Competitor Analysis',
          description:
            'Evidence-based research identifying high-intent US commercial keywords, organic competitors winning buyer searches, and actionable content or landing-page gaps.',
          benefits: [
            'Prioritizes search terms tied to commercial RFQs, consultations, and sales.',
            'Prevents wasted effort on irrelevant informational traffic.',
          ],
          deliverables: [
            'Commercial & local keyword mapping grouped by search intent',
            'Organic competitor benchmark and keyword/content gap matrix',
            'Prioritized new-page and editorial opportunity backlog',
          ],
          ctaLabel: 'Request Keyword & Gap Research',
        },
        {
          number: '06.',
          id: 'ongoing-seo-management',
          name: 'Ongoing SEO Management',
          description:
            'Continuous monthly execution combining technical monitoring, on-page improvements, strategic content creation, and transparent search performance tracking.',
          benefits: [
            'Turns audit findings into implemented improvements month after month.',
            'Maintains technical health as your website, catalog, and competitors evolve.',
          ],
          deliverables: [
            'Monthly technical health checks and prioritized fix implementation',
            'Continuous on-page optimization and strategic content roadmap',
            'Clear monthly progress reporting tied to organic impressions, clicks, and leads',
          ],
          ctaLabel: 'Discuss Ongoing SEO Management',
        },
      ],
    },
    methodology: {
      kicker: 'How We Work',
      title: 'A straightforward 4-stage workflow from diagnosis to execution',
      subtitle:
        'Whether you need an independent technical blueprint for your internal team or ongoing implementation support, every engagement follows a clear, documented sequence.',
      engagementClarificationTitle: 'Standalone Audits vs. Ongoing Execution — Your Choice',
      engagementClarificationText:
        'You can hire Auditoria SEO strictly for a standalone one-time SEO audit with a complete action plan and zero ongoing retainer—or partner with us for implementation and monthly SEO management.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Website Assessment',
          description:
            'We review your business model, US target markets, commercial priorities, existing website stack, and Search Console/analytics setup.',
        },
        {
          step: '02',
          title: 'SEO Audit & Opportunity Analysis',
          description:
            'We audit technical health, crawl behavior, on-page structure, local signals, and organic competitors to prioritize the highest-impact gaps.',
        },
        {
          step: '03',
          title: 'Strategic Optimization',
          description:
            'Depending on your chosen scope, we either deliver an actionable engineering/editorial roadmap or execute improvements directly on your site.',
        },
        {
          step: '04',
          title: 'Monitoring & Continuous Improvement',
          description:
            'When ongoing management is engaged, we track indexing, keyword visibility, and lead attribution while refining pages iteratively.',
        },
      ],
    },
    auditReveal: {
      kicker: 'Inside the Diagnostic',
      title: 'What a professional SEO audit can uncover on your website',
      subtitle:
        'Most sites lose organic visibility due to a combination of technical friction, unclear page targeting, and overlooked local signals. Here are the 12 core areas we inspect.',
      tabs: [
        {
          id: 'technical',
          label: 'Technical Foundations',
          summary: 'Ensuring Googlebot can crawl, render, and index your commercial pages without friction or wasted crawl budget.',
          areas: [
            { name: 'Crawlability', detail: 'Robots.txt rules, blocked resources, orphan URLs, and server response consistency.' },
            { name: 'Indexability', detail: 'Unintended noindex tags, soft-404s, parameter bloat, and Search Console exclusions.' },
            { name: 'Site architecture', detail: 'URL hierarchy, click depth, and logical grouping of core revenue pages.' },
            { name: 'Technical performance', detail: 'Server latency, asset delivery, render-blocking scripts, and caching hygiene.' },
          ],
        },
        {
          id: 'content',
          label: 'Experience, Content & Intent',
          summary: 'Aligning speed, mobile usability, keywords, and internal links with what US buyers actually search for.',
          areas: [
            { name: 'Core Web Vitals', detail: 'LCP, INP, and CLS stability checks across mobile and desktop viewports.' },
            { name: 'Mobile usability', detail: 'Responsive layout clarity, legible typography, and tap-target accessibility.' },
            { name: 'Keyword opportunities', detail: 'High-intent commercial terms and missing service queries uncovered in your niche.' },
            { name: 'Search intent', detail: 'Matching page format and messaging to transactional, local, or comparative searches.' },
          ],
        },
        {
          id: 'local',
          label: 'Authority, Local & Conversion',
          summary: 'Connecting internal equity, local map visibility, competitor gaps, and frictionless inquiry paths.',
          areas: [
            { name: 'Internal linking', detail: 'Distributing internal authority cleanly to priority service and regional pages.' },
            { name: 'Local search visibility', detail: 'Google Business Profile accuracy, regional cues, and local landing-page structure.' },
            { name: 'Competitor gaps', detail: 'Topics, service pages, and structural strengths helping organic rivals win clicks.' },
            { name: 'Conversion opportunities', detail: 'CTA clarity, form friction, trust signals, and mobile contact pathways.' },
          ],
        },
      ],
      allAreasHeading: 'All 12 audited diagnostic dimensions',
      screenshotCaptionTitle: 'Sample Technical Diagnostic Interface (Illustrative Tool View)',
      screenshotBadge: 'Demonstrative Example — Not Client Data',
      screenshotCaptionText:
        'Example crawler/indexation inspection view (Semrush interface) illustrating how broken 404 URLs and wasted backlink equity are identified during a technical audit. All client engagements are documented using your domain’s live Search Console and crawl telemetry.',
      screenshotAlt:
        'Illustrative Semrush Broken Pages diagnostic screenshot showing how 404 URLs and backlink equity issues are identified during an audit',
    },
    industries: {
      kicker: 'Target Industries',
      title: 'Businesses our technical and local SEO methodology is built to serve',
      subtitle:
        'Our diagnostic and execution framework adapts cleanly to US B2B, industrial, and specialized service organizations where high-value inquiries start with an online Google search.',
      note: 'The segments below represent industries aligned with our commercial methodology and active outreach—not a claim of existing US client portfolios across every listed category.',
      items: [
        {
          name: 'Industrial service providers',
          searchContext: 'Maintenance, calibration, field engineering, and regional plant support searches.',
        },
        {
          name: 'Manufacturing companies',
          searchContext: 'OEM/ODM capabilities, custom fabrication, and technical specification queries.',
        },
        {
          name: 'Specialized contractors',
          searchContext: 'Commercial construction, MEP, roofing, and licensed specialty trade searches.',
        },
        {
          name: 'Home service businesses',
          searchContext: 'HVAC, plumbing, electrical, and high-intent local Google Maps service discovery.',
        },
        {
          name: 'Engineering & technical services',
          searchContext: 'Consulting engineers, environmental testing, compliance, and inspection RFQs.',
        },
        {
          name: 'Equipment suppliers',
          searchContext: 'Commercial machinery, parts distribution, rentals, and industrial catalog SEO.',
        },
        {
          name: 'Local service businesses',
          searchContext: 'Medical, legal, consulting, and regional service providers competing by city or metro area.',
        },
        {
          name: 'B2B service providers',
          searchContext: 'Logistics, IT, advisory, and specialized commercial solutions targeting decision-makers.',
        },
      ],
    },
    experience: {
      kicker: 'Track Record & Delivery Standards',
      title: 'Verified reviews and transparent engagement documentation',
      subtitle:
        'We earn trust with verifiable facts rather than inflated metrics. Below are real client reviews from our official Google Business Profile alongside the structured workflow used to document every project.',
      verifiedReviewsTitle: 'Verified Client Reviews (Official Google Business Profile)',
      verifiedReviewsSubtitle:
        'Authentic testimonials from our established Brazilian & Portuguese-speaking client practice—verifiable directly on Google Maps.',
      verifiedProfileLinkLabel: 'Verify Reviews on Google Maps',
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
      frameworkTitle: 'How We Document Every US Engagement',
      frameworkSubtitle:
        'As we expand US engagements, every client project follows a clean, auditable three-phase documentation format:',
      frameworkSteps: [
        {
          phase: 'Phase 1',
          title: 'Baseline Snapshot',
          detail: 'Documented crawl errors, indexing state, Search Console impressions, and priority page rankings before changes.',
        },
        {
          phase: 'Phase 2',
          title: 'Prioritized Execution Log',
          detail: 'Clear record of every technical fix, metadata update, internal link change, and content asset deployed.',
        },
        {
          phase: 'Phase 3',
          title: 'Measured Organic Impact',
          detail: 'Post-implementation verification of index health, qualified search traffic, and tracked inquiry conversions.',
        },
      ],
      resourcesHeading: 'Explore our existing English technical guides & services',
      resources: [
        { label: 'Technical SEO Audit Guide', path: '/en/blog/auditoria-tecnica-seo' },
        { label: 'On-Page SEO Audit Guide', path: '/en/blog/auditoria-seo-on-page' },
        { label: 'How to Appear on Google Local Search', path: '/en/blog/seo-local-como-aparecer-google' },
        { label: 'Website Modernization & Edge Architecture', path: '/en/site-modernization' },
      ],
    },
    specialist: {
      kicker: 'Technical Leadership',
      title: 'Meet the Specialist Behind Your SEO Strategy',
      name: 'Wesley Vieira',
      role: 'Founder of Auditoria SEO · Technical SEO & Organic Growth Strategist',
      bioParagraphs: [
        'Every audit and strategic roadmap at Auditoria SEO is led directly by Wesley Vieira alongside our technical team—never handed off to generic automated report templates.',
        'With hands-on expertise spanning technical SEO diagnostics, semantic site architecture, on-page optimization, and local search visibility, Wesley translates complex crawl and indexing findings into plain, prioritized action plans shared seamlessly across business leadership and engineering teams.',
      ],
      highlights: [
        'Direct specialist involvement from discovery through audit presentation',
        'Deep familiarity with modern web stacks, rendering, canonicals, and edge hosting',
        'Bilingual communication conducted in clear business English via Google Meet, Zoom, or email',
      ],
      photoAlt:
        'Wesley Vieira, founder of Auditoria SEO, speaking on stage during a presentation on Google search visibility strategies',
      ctaLabel: 'Schedule a Consultation with Wesley',
    },
    whyUs: {
      kicker: 'Why Auditoria SEO',
      title: 'The difference between automated checklists and engineering-grade SEO consulting',
      subtitle:
        'Automated tools flag dozens of surface warnings without business context. We focus on the structural issues and search opportunities that genuinely move commercial needle.',
      items: [
        {
          title: 'Data-driven SEO analysis',
          description:
            'Every recommendation is grounded in live crawl diagnostics, Google Search Console telemetry, and real SERP observation.',
        },
        {
          title: 'Transparent communication',
          description:
            'Plain-language explanations of what is broken, why it matters commercially, and how each fix works.',
        },
        {
          title: 'Technical expertise',
          description:
            'Fluency in rendering behavior, canonical architecture, redirects, structured data, and Core Web Vitals.',
        },
        {
          title: 'Actionable recommendations',
          description:
            'Concrete implementation specs your developers and content writers can act on immediately—not vague theory.',
        },
        {
          title: 'Business-oriented SEO strategy',
          description:
            'Focus stays locked on commercial service pages, buyer intent, and inquiry conversion paths rather than vanity clicks.',
        },
        {
          title: 'Customized solutions',
          description:
            'Scope adapts to your exact website size, tech stack, internal resources, and regional US competition.',
        },
        {
          title: 'Clear priorities',
          description:
            'Tasks are ordered by expected commercial impact vs. implementation effort so your team tackles high-leverage work first.',
        },
        {
          title: 'Flexible service engagements',
          description:
            'Start with a standalone audit or transition smoothly into hands-on optimization and ongoing SEO management.',
        },
      ],
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Straightforward answers before we speak',
      subtitle: 'Clear details on scope, implementation options, remote collaboration across the US, and ethical SEO standards.',
      items: [
        {
          question: 'What is included in a professional SEO audit?',
          answer:
            'A professional SEO audit evaluates technical crawlability and indexation, URL architecture, canonical tags, redirect hygiene, mobile rendering, Core Web Vitals, on-page structure, internal linking, local search signals (when applicable), and priority keyword/competitor gaps—delivered as a clear, prioritized action plan.',
        },
        {
          question: 'How long does an SEO audit take?',
          answer:
            'Delivery timing depends on your website’s page count, technical complexity, and audit depth. During our initial consultation, we inspect your domain and confirm an exact schedule and scope in your custom proposal before work begins.',
        },
        {
          question: 'Can you help implement the recommended SEO improvements?',
          answer:
            'Yes. You can either hand the audit roadmap to your internal developers and marketing team, or engage Auditoria SEO to execute technical fixes, on-page optimizations, and content improvements directly.',
        },
        {
          question: 'Do you offer monthly SEO services?',
          answer:
            'Yes. Beyond one-time SEO audits, we offer ongoing SEO management tailored to your goals—covering continuous technical monitoring, on-page refinement, strategic content development, and transparent monthly reporting.',
        },
        {
          question: 'Can you help my business appear on Google Maps?',
          answer:
            'Yes, for businesses that meet Google Business Profile eligibility requirements. We optimize profile categories, service listings, geographic landing pages, and on-site local signals in full compliance with Google’s guidelines.',
        },
        {
          question: 'Do you work with businesses across the United States?',
          answer:
            'Yes. We work remotely with businesses across all US time zones, conducting discovery calls, audit walkthroughs, and ongoing strategy sessions in English via Google Meet, Zoom, and email.',
        },
        {
          question: 'Can I hire an SEO audit without a monthly contract?',
          answer:
            'Absolutely. Our SEO audits are independent one-time engagements with clear deliverables and zero mandatory monthly retainer.',
        },
        {
          question: 'How do we communicate and schedule meetings?',
          answer:
            'You can request a consultation through the form below or email us directly at comercial@auditoriaseo.com.br. Meetings are held via Google Meet or Zoom at a time convenient for your US team.',
        },
      ],
    },
    consultation: {
      kicker: 'Start the Conversation',
      title: "Ready to Improve Your Website's Visibility on Google?",
      description:
        "Let's identify what's holding your website back and uncover new opportunities for organic growth.",
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
      formSubheading: 'Share your website and priorities below. All fields except optional context take under two minutes.',
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
      title: 'Agência SEO para Empresas nos EUA | Auditorias e SEO Local',
      description:
        'Auditorias técnicas de SEO, otimização on-page e SEO Local para empresas que atuam nos Estados Unidos. Diagnóstico completo para ampliar sua visibilidade no Google.',
      htmlLang: 'pt-BR',
      ogLocale: 'pt_BR',
      breadcrumbHome: 'Início',
      breadcrumbCurrent: 'Agência SEO EUA',
      serviceName: 'Auditorias de SEO, Otimização Técnica e SEO Local para Empresas nos Estados Unidos',
      serviceType: 'Auditoria Técnica de SEO, SEO On-Page, SEO Local, Google Business Profile',
      schemaDescription:
        'Consultoria independente em SEO técnico atendendo empresas nos Estados Unidos com auditorias conduzidas por especialista, otimização on-page, SEO Local e gestão contínua.',
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
        'Otimização do Google Business Profile',
        'Visibilidade no Google Maps',
        'Gestão Contínua de SEO',
      ],
      complementaryText:
        'SEO Técnico. Otimização On-Page. SEO Local. Diagnósticos Mensuráveis.',
      imageAlt:
        'Ilustração conceitual em 3D de um mascote em formato de G posicionado sobre a costa leste dos Estados Unidos visto do espaço',
      conceptualNotice:
        'Arte conceitual representando visibilidade de busca nos Estados Unidos. A Auditoria SEO é uma consultoria independente sem afiliação ou endosso da Google LLC.',
    },
    credibility: {
      kicker: 'Perfil Institucional',
      title: 'Consultoria técnica em SEO focada em clareza diagnóstica e execução',
      summary:
        'A Auditoria SEO é uma consultoria independente liderada diretamente por Wesley Vieira. Entregamos auditorias conduzidas por especialista, prioridades técnicas objetivas e execução estratégica — atendendo remotamente empresas nos Estados Unidos, Brasil e América Latina.',
      pillars: [
        {
          label: 'Auditorias Humanas',
          detail: 'Cada domínio é analisado manualmente por especialista — nunca exportações automáticas de ferramentas.',
        },
        {
          label: 'Critérios White Hat',
          detail: 'Recomendações alinhadas às diretrizes oficiais do Google para proteger a autoridade do domínio.',
        },
        {
          label: 'Escopo Flexível',
          detail: 'Contrate apenas uma auditoria SEO pontual ou evolua para implementação e acompanhamento contínuo.',
        },
        {
          label: 'Reputação Verificada',
          detail: 'Nota média 5,0 estrelas em avaliações autênticas de clientes na ficha oficial no Google Maps.',
        },
      ],
    },
    positioning: {
      eyebrow: 'Desenvolvido para Empresas nos EUA',
      title: 'Visibilidade Americana em Busca Tradicional, IA e Descoberta Local',
      description:
        'A Auditoria SEO estruturou uma oferta dedicada para empresas que atuam ou competem nos Estados Unidos. Unimos SEO técnico rigoroso a práticas de GEO e AEO para fortalecer sua presença nos resultados orgânicos do Google, no Google Maps e nas experiências de descoberta baseadas em inteligência artificial.',
      pillarsLabel: 'SEO · GEO · AEO',
      pillars: [
        {
          code: 'SEO',
          title: 'Search Engine Optimization',
          detail: 'Rastreamento técnico, arquitetura limpa e páginas comerciais orientadas às buscas no Google EUA.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Sinais claros de entidade, dados estruturados e profundidade temática para descoberta generativa.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Respostas diretas e verificáveis estruturadas para snippets em destaque e motores de resposta.',
        },
      ],
      imageAlt:
        'Imagem editorial de uma águia americana diante da bandeira dos Estados Unidos simbolizando posicionamento em SEO, GEO e AEO para empresas americanas',
      ctaLabel: 'Explorar Serviços de SEO',
    },
    challenges: {
      kicker: 'Gargalos Comerciais Comuns',
      title: 'Por que empresas estruturadas nos EUA não convertem buscas no Google em oportunidades reais',
      subtitle:
        'Um site visualmente moderno não garante posicionamento nem geração de leads. Bloqueios técnicos, desalinhamento de intenção de busca e lacunas locais entregam clientes qualificados à concorrência.',
      items: [
        {
          number: '01.',
          statement: 'Meu site não está ranqueando no Google.',
          explanation:
            'Falhas de rastreamento, páginas de serviços rasas, distribuição interna fraca de links ou URLs não indexadas impedem o Google de reconhecer suas soluções.',
        },
        {
          number: '02.',
          statement: 'Meus concorrentes aparecem antes da minha empresa.',
          explanation:
            'Concorrentes que capturam buscas comerciais combinam arquitetura limpa, páginas específicas por serviço e maior autoridade temática.',
        },
        {
          number: '03.',
          statement: 'Meu site recebe visitas, mas gera poucos contatos.',
          explanation:
            'Tráfego sem aderência à intenção de compra, com propostas pouco claras ou atrito nos formulários, raramente gera solicitações comerciais.',
        },
        {
          number: '04.',
          statement: 'Minha empresa é difícil de encontrar no Google Maps.',
          explanation:
            'Categorias incompletas no Google Business Profile, inconsistências cadastrais ou sinais locais fracos reduzem a visibilidade regional.',
        },
        {
          number: '05.',
          statement: 'Não sei quais problemas técnicos estão travando o meu site.',
          explanation:
            'Sem auditoria de rastreamento, canonicals, redirecionamentos e renderização, erros críticos passam meses despercebidos.',
        },
        {
          number: '06.',
          statement: 'Invisto em marketing sem entender meu desempenho orgânico.',
          explanation:
            'Mídia paga para de gerar retorno no instante em que o orçamento cessa. O diagnóstico orgânico mostra onde o SEO reduz a dependência de anúncios.',
        },
      ],
    },
    services: {
      kicker: 'Serviços Especializados',
      title: 'Auditorias de SEO e otimização estratégica para empresas no mercado americano',
      subtitle:
        'Cada frente prioriza diagnóstico transparente, execução técnica precisa e foco em conversão comercial — sem pacotes genéricos nem promessas artificiais.',
      scopeNotice:
        'Todo escopo é definido individualmente após análise inicial do domínio, concorrência nos EUA e metas comerciais — sem preços fixos engessados.',
      benefitsHeading: 'Benefícios comerciais',
      deliverablesHeading: 'Entregáveis e atividades',
      items: [
        {
          number: '01.',
          id: 'technical-seo-audit',
          name: 'Technical SEO Audit',
          description:
            'Auditoria técnica aprofundada de rastreamento, indexação, arquitetura de URLs, renderização, desempenho, canonicalização, redirecionamentos, sitemap XML e dados estruturados.',
          benefits: [
            'Remove bloqueios técnicos que impedem a indexação de páginas comerciais estratégicas.',
            'Entrega à sua equipe de tecnologia um plano de correção claro e priorizado.',
          ],
          deliverables: [
            'Diagnóstico completo de rastreamento e indexação (Search Console + crawler)',
            'Auditoria de canonicals, cadeias de redirecionamento e duplicidades',
            'Revisão de Core Web Vitals, renderização, sitemaps e Schema Markup',
          ],
          ctaLabel: 'Solicitar Auditoria Técnica',
          relatedGuideLabel: 'Ler guia de Auditoria Técnica SEO',
          relatedGuidePath: '/blog/auditoria-tecnica-seo',
        },
        {
          number: '02.',
          id: 'on-page-seo',
          name: 'On-Page SEO',
          description:
            'Otimização estruturada de títulos SEO, metadados, hierarquia semântica H1–H3, copy orientada à intenção de busca e arquitetura de links internos.',
          benefits: [
            'Deixa inequívoco para usuários e algoritmos o foco comercial de cada página.',
            'Direciona relevância interna para serviços prioritários de maior margem.',
          ],
          deliverables: [
            'Reestruturação de títulos, meta descriptions e headings semânticos',
            'Alinhamento de conteúdo à intenção de pesquisa americana',
            'Otimização de links internos e textos-âncora',
          ],
          ctaLabel: 'Consultar SEO On-Page',
          relatedGuideLabel: 'Ler guia de Auditoria SEO On-Page',
          relatedGuidePath: '/blog/auditoria-seo-on-page',
        },
        {
          number: '03.',
          id: 'local-seo',
          name: 'Local SEO',
          description:
            'Estratégias direcionadas para empresas que atendem cidades, condados, regiões metropolitanas ou áreas de cobertura específicas nos Estados Unidos.',
          benefits: [
            'Conecta a demanda local de pesquisa diretamente a páginas regionais relevantes.',
            'Consolida sinais geográficos consistentes nos resultados orgânicos locais.',
          ],
          deliverables: [
            'Arquitetura de páginas por cidade, estado e área de atuação',
            'Padronização de NAP e dados estruturados locais',
            'Mapeamento de palavras-chave com intenção regional nos EUA',
          ],
          ctaLabel: 'Explorar SEO Local',
          relatedGuideLabel: 'Ver página de SEO Local',
          relatedGuidePath: '/seo-local',
        },
        {
          number: '04.',
          id: 'google-business-profile',
          name: 'Google Business Profile & Google Maps',
          description:
            'Configuração e otimização estratégica do perfil empresarial no Google para fortalecer a presença em buscas locais no Maps em total conformidade com as diretrizes da plataforma.',
          benefits: [
            'Melhora a clareza e relevância da ficha quando clientes comparam fornecedores locais.',
            'Respeita rigorosamente as regras de elegibilidade do Google para evitar suspensões.',
          ],
          deliverables: [
            'Auditoria de categorias principais/secundárias e catálogo de serviços',
            'Higienização de atributos, mídia e consistência com o site oficial',
            'Diretrizes éticas para captação e resposta a avaliações',
          ],
          ctaLabel: 'Otimizar Google Business Profile',
          relatedGuideLabel: 'Ler guia de Google Meu Negócio',
          relatedGuidePath: '/blog/como-criar-google-meu-negocio',
        },
        {
          number: '05.',
          id: 'keyword-competitor-analysis',
          name: 'Keyword Research & Competitor Analysis',
          description:
            'Pesquisa baseada em dados para identificar palavras-chave comerciais nos EUA, mapear concorrentes orgânicos reais e revelar lacunas de conteúdo.',
          benefits: [
            'Prioriza termos ligados a pedidos de orçamento, consultorias e contratos B2B/B2C.',
            'Evita dispersão de recursos em pautas sem retorno comercial.',
          ],
          deliverables: [
            'Mapeamento de palavras-chave comerciais e locais por intenção',
            'Benchmarking competitivo de concorrentes orgânicos',
            'Matriz priorizada de novas páginas e oportunidades editoriais',
          ],
          ctaLabel: 'Solicitar Pesquisa Competitiva',
        },
        {
          number: '06.',
          id: 'ongoing-seo-management',
          name: 'Ongoing SEO Management',
          description:
            'Acompanhamento mensal contínuo unindo monitoramento técnico, implementação de melhorias on-page, desenvolvimento estratégico de conteúdo e análise de desempenho.',
          benefits: [
            'Transforma o diagnóstico em execução contínua mês a mês.',
            'Mantém a saúde técnica do site conforme novas páginas e ofertas são publicadas.',
          ],
          deliverables: [
            'Monitoramento técnico recorrente e execução de correções priorizadas',
            'Otimização contínua de páginas comerciais e calendário editorial',
            'Relatórios transparentes de indexação, impressões, cliques e conversões',
          ],
          ctaLabel: 'Conversar sobre Gestão Contínua',
        },
      ],
    },
    methodology: {
      kicker: 'Metodologia de Trabalho',
      title: 'Processo em 4 etapas da análise inicial à evolução contínua',
      subtitle:
        'Seja para entregar um plano técnico independente ao seu time interno ou conduzir a implementação recorrente, trabalhamos com método claro e documentado.',
      engagementClarificationTitle: 'Auditoria Pontual ou Acompanhamento Recorrente — Você Escolhe',
      engagementClarificationText:
        'A Auditoria SEO pode ser contratada exclusivamente como diagnóstico pontual independente (com plano de ação completo e sem mensalidade) ou integrada à implementação e gestão contínua.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Website Assessment',
          description:
            'Compreensão do modelo de negócio, regiões-alvo nos EUA, metas comerciais, arquitetura atual do site e instrumentação de dados.',
        },
        {
          step: '02',
          title: 'SEO Audit & Opportunity Analysis',
          description:
            'Mapeamento aprofundado dos gargalos técnicos, lacunas frente à concorrência e oportunidades imediatas e estruturais de ranqueamento.',
        },
        {
          step: '03',
          title: 'Strategic Optimization',
          description:
            'Entrega de plano de ação técnico detalhado ou implementação direta das melhorias contratadas no código, conteúdo e estrutura.',
        },
        {
          step: '04',
          title: 'Monitoring & Continuous Improvement',
          description:
            'Nos contratos de acompanhamento recorrente, monitoramos indicadores orgânicos e evoluímos continuamente páginas e autoridade.',
        },
      ],
    },
    auditReveal: {
      kicker: 'O Que a Auditoria Revela',
      title: 'As 12 áreas técnicas e estratégicas inspecionadas no seu domínio',
      subtitle:
        'Identificamos desde falhas invisíveis de rastreamento até oportunidades de intenção de busca que impedem seu site de gerar negócios.',
      tabs: [
        {
          id: 'technical',
          label: 'Fundamentos Técnicos',
          summary: 'Garantia de que o Googlebot consiga rastrear, renderizar e indexar suas páginas comerciais sem atritos.',
          areas: [
            { name: 'Crawlability', detail: 'Regras de robots.txt, bloqueios de recursos, páginas órfãs e respostas HTTP.' },
            { name: 'Indexability', detail: 'Tags noindex indevidas, soft-404, parâmetros duplicados e exclusões no Search Console.' },
            { name: 'Site architecture', detail: 'Hierarquia de URLs, profundidade de cliques e organização de silos comerciais.' },
            { name: 'Technical performance', detail: 'Latência do servidor, carregamento de ativos e recursos bloqueadores.' },
          ],
        },
        {
          id: 'content',
          label: 'Experiência, Conteúdo e Intenção',
          summary: 'Alinhamento entre velocidade, usabilidade móvel, palavras-chave e intenção real do comprador.',
          areas: [
            { name: 'Core Web Vitals', detail: 'Análise de estabilidade visual (CLS), LCP e interatividade (INP).' },
            { name: 'Mobile usability', detail: 'Legibilidade, responsividade e conforto de navegação em smartphones.' },
            { name: 'Keyword opportunities', detail: 'Termos comerciais e de serviço com demanda qualificada no mercado-alvo.' },
            { name: 'Search intent', detail: 'Adequação da página à expectativa transacional ou local de quem pesquisa.' },
          ],
        },
        {
          id: 'local',
          label: 'Autoridade, Local e Conversão',
          summary: 'Conexão entre autoridade interna, presença no mapa, brechas competitivas e pontos de contato.',
          areas: [
            { name: 'Internal linking', detail: 'Distribuição estratégica de relevância interna para páginas de maior valor.' },
            { name: 'Local search visibility', detail: 'Estrutura de SEO Local e aderência às diretrizes do Google Business Profile.' },
            { name: 'Competitor gaps', detail: 'Lacunas de conteúdo e estrutura exploradas pelos principais concorrentes orgânicos.' },
            { name: 'Conversion opportunities', detail: 'Clareza de CTAs, atrito em formulários e sinais de credibilidade.' },
          ],
        },
      ],
      allAreasHeading: 'Todas as 12 dimensões analisadas na auditoria',
      screenshotCaptionTitle: 'Exemplo Ilustrativo de Interface Diagnóstica (Semrush)',
      screenshotBadge: 'Material Demonstrativo — Não Representa Cliente Real',
      screenshotCaptionText:
        'Captura ilustrativa de inspeção técnica de páginas quebradas (HTTP 404) e perda de autoridade de backlinks. Em projetos reais, toda documentação utiliza a telemetria do seu próprio domínio no Google Search Console e crawlers.',
      screenshotAlt:
        'Captura ilustrativa da ferramenta Semrush exibindo identificação de páginas quebradas 404 durante uma auditoria técnica',
    },
    industries: {
      kicker: 'Segmentos Compatíveis',
      title: 'Empresas que podem se beneficiar da nossa metodologia nos Estados Unidos',
      subtitle:
        'Nossa estrutura técnica e comercial se adapta especialmente a empresas B2B, industriais e prestadores especializados que dependem de descoberta online qualificada.',
      note: 'Os segmentos abaixo representam perfis de mercado compatíveis com a atuação da consultoria e prospecção nos EUA — sem implicar portfólio prévio em todas as categorias listadas.',
      items: [
        {
          name: 'Prestadores de serviços industriais',
          searchContext: 'Buscas por manutenção, calibração, engenharia de campo e suporte fabril.',
        },
        {
          name: 'Indústrias e manufatura',
          searchContext: 'Capacidades OEM/ODM, usinagem sob medida e especificações técnicas.',
        },
        {
          name: 'Empreiteiros especializados',
          searchContext: 'Construção comercial, climatização industrial, engenharia elétrica e obras.',
        },
        {
          name: 'Serviços residenciais locais',
          searchContext: 'HVAC, elétrica, hidráulica e buscas locais de alta intenção no Google Maps.',
        },
        {
          name: 'Engenharia e serviços técnicos',
          searchContext: 'Consultorias de engenharia, laudos, inspeções e conformidade regulatória.',
        },
        {
          name: 'Fornecedores de equipamentos',
          searchContext: 'Máquinas comerciais, distribuição de peças, locação e catálogos técnicos.',
        },
        {
          name: 'Negócios locais de serviço',
          searchContext: 'Empresas e escritórios regionais que competem por visibilidade municipal.',
        },
        {
          name: 'Empresas de serviços B2B',
          searchContext: 'Logística, tecnologia, assessoria e soluções corporativas de alto valor.',
        },
      ],
    },
    experience: {
      kicker: 'Experiência e Padrão de Entrega',
      title: 'Avaliações verificáveis e formato estruturado de documentação',
      subtitle:
        'Preservamos total transparência: apresentamos abaixo avaliações reais da nossa ficha oficial no Google Maps (atuação no Brasil) junto ao modelo modular utilizado para documentar novos projetos nos EUA.',
      verifiedReviewsTitle: 'Avaliações Reais (Ficha Oficial no Google Maps)',
      verifiedReviewsSubtitle:
        'Depoimentos autênticos publicados diretamente por clientes atendidos no Brasil, verificáveis na ficha pública da Auditoria SEO.',
      verifiedProfileLinkLabel: 'Conferir Avaliações no Google Maps',
      reviews: [
        {
          author: 'Alex Caldeira · Local Guide',
          context: 'Avaliação verificada no Google Maps (Brasil)',
          quote:
            'Colocou meu consultório sempre entre os primeiros no Google e trouxe bastante clientes qualificados.',
        },
        {
          author: 'Jose Diniz · Local Guide',
          context: 'Avaliação verificada no Google Maps (Brasil)',
          quote:
            'Comprometidos em ajudar de fato o nosso negócio, aprimorando a presença digital e aproximando clientes.',
        },
        {
          author: 'Lauro dos Santos',
          context: 'Avaliação verificada no Google Maps (Brasil)',
          quote:
            'Profissionais dedicados e atendimento claro — já colhendo frutos concretos da parceria.',
        },
      ],
      frameworkTitle: 'Como Documentamos Cada Projeto',
      frameworkSubtitle:
        'Estrutura modular pronta para registrar novos estudos de caso nos Estados Unidos sem métricas fabricadas:',
      frameworkSteps: [
        {
          phase: 'Etapa 1',
          title: 'Linha de Base Técnica',
          detail: 'Registro inicial de erros de rastreamento, indexação e impressões no Search Console.',
        },
        {
          phase: 'Etapa 2',
          title: 'Log de Implementação',
          detail: 'Histórico objetivo das correções técnicas, ajustes on-page e links internos aplicados.',
        },
        {
          phase: 'Etapa 3',
          title: 'Evolução Mensurável',
          detail: 'Verificação pós-implantação da saúde de indexação, cliques qualificados e conversões.',
        },
      ],
      resourcesHeading: 'Conteúdos técnicos existentes na Auditoria SEO',
      resources: [
        { label: 'Guia de Auditoria Técnica SEO', path: '/blog/auditoria-tecnica-seo' },
        { label: 'Guia de Auditoria SEO On-Page', path: '/blog/auditoria-seo-on-page' },
        { label: 'SEO Local: Como Aparecer no Google', path: '/blog/seo-local-como-aparecer-google' },
        { label: 'Modernização e Arquitetura Web', path: '/modernizacao-sites' },
      ],
    },
    specialist: {
      kicker: 'Liderança Técnica',
      title: 'Conheça o Especialista por Trás da Sua Estratégia de SEO',
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO · Especialista em SEO Técnico e Tráfego Orgânico',
      bioParagraphs: [
        'Todas as auditorias e planejamentos estratégicos da Auditoria SEO são conduzidos diretamente por Wesley Vieira e pela equipe técnica — nunca terceirizados para relatórios automáticos genéricos.',
        'Com atuação prática em diagnósticos técnicos, arquitetura semântica, SEO on-page e visibilidade local, Wesley traduz achados complexos de rastreamento e indexação em planos de ação objetivos para gestores e desenvolvedores.',
      ],
      highlights: [
        'Participação direta do especialista do diagnóstico inicial à reunião de apresentação',
        'Domínio prático de renderização, canonicals, redirecionamentos e infraestrutura web',
        'Reuniões em inglês ou português via Google Meet, Zoom e comunicação por e-mail',
      ],
      photoAlt:
        'Wesley Vieira, fundador da Auditoria SEO, palestrando em palco sobre estratégias de visibilidade no Google',
      ctaLabel: 'Agendar Reunião com Wesley',
    },
    whyUs: {
      kicker: 'Por Que Contratar a Auditoria SEO',
      title: 'A diferença entre um checklist automático e uma auditoria conduzida por especialista',
      subtitle:
        'Ferramentas apontam alertas isolados sem contexto comercial. Nossa análise conecta problemas técnicos diretamente às prioridades de crescimento da empresa.',
      items: [
        {
          title: 'Análise baseada em dados',
          description: 'Diagnósticos sustentados por rastreamento real, Search Console e análise direta das páginas.',
        },
        {
          title: 'Comunicação transparente',
          description: 'Explicações diretas sobre o que precisa de correção e qual o impacto prático esperado.',
        },
        {
          title: 'Profundidade técnica',
          description: 'Experiência real em HTML semântico, renderização, canonicalização, sitemaps e performance.',
        },
        {
          title: 'Recomendações acionáveis',
          description: 'Especificações claras que sua equipe de TI e conteúdo consegue executar imediatamente.',
        },
        {
          title: 'Visão orientada a negócios',
          description: 'Foco em páginas comerciais, intenções de contratação e conversão em oportunidades.',
        },
        {
          title: 'Soluções personalizadas',
          description: 'Escopo adaptado ao tamanho do domínio, plataforma e realidade competitiva do seu setor.',
        },
        {
          title: 'Priorização clara',
          description: 'Ordenação por impacto comercial versus esforço técnico para gerar ganhos ordenados.',
        },
        {
          title: 'Contratação flexível',
          description: 'Comece com uma auditoria pontual ou conte conosco na implementação e gestão contínua.',
        },
      ],
    },
    faq: {
      kicker: 'Perguntas Frequentes',
      title: 'Dúvidas objetivas sobre atuação nos EUA, escopo e contratação',
      subtitle: 'Respostas diretas sem promessas irreais ou condições ocultas.',
      items: [
        {
          question: 'O que está incluído em uma auditoria profissional de SEO?',
          answer:
            'Analisamos rastreamento, indexação, arquitetura de URLs, tags canônicas, redirecionamentos, usabilidade mobile, Core Web Vitals, estrutura on-page, links internos, sinais locais (quando aplicável) e lacunas competitivas, entregando um plano de ação priorizado.',
        },
        {
          question: 'Quanto tempo leva para concluir uma auditoria SEO?',
          answer:
            'O prazo varia conforme a quantidade de URLs, a complexidade técnica da plataforma e a profundidade contratada. Confirmamos o cronograma exato na proposta comercial após a conversa inicial.',
        },
        {
          question: 'Vocês também implementam as melhorias recomendadas?',
          answer:
            'Sim. Sua equipe interna pode executar as ações a partir do nosso plano técnico, ou você pode contratar a Auditoria SEO para implementar correções técnicas, on-page e melhorias de conteúdo.',
        },
        {
          question: 'Vocês oferecem gestão mensal contínua de SEO?',
          answer:
            'Sim. Além das auditorias pontuais, oferecemos acompanhamento mensal sob medida com monitoramento técnico, otimizações contínuas, produção estratégica e relatórios transparentes.',
        },
        {
          question: 'Vocês ajudam empresas a aparecer no Google Maps nos EUA?',
          answer:
            'Sim, desde que o modelo de negócio atenda aos critérios de elegibilidade do Google Business Profile. Otimizamos categorias, serviços, sinais locais e páginas regionais em conformidade com as diretrizes oficiais.',
        },
        {
          question: 'Vocês atendem empresas em todo o território dos Estados Unidos?',
          answer:
            'Sim. O atendimento é 100% remoto para empresas em qualquer fuso horário americano, com reuniões conduzidas em inglês ou português via Google Meet, Zoom e e-mail.',
        },
        {
          question: 'Posso contratar apenas a auditoria sem contrato mensal?',
          answer:
            'Sim. A auditoria SEO é um projeto pontual independente com escopo e entrega definidos, sem exigência de fidelidade ou mensalidade.',
        },
        {
          question: 'Como funciona a comunicação e o agendamento de reuniões?',
          answer:
            'Envie sua solicitação pelo formulário abaixo ou escreva diretamente para comercial@auditoriaseo.com.br. As reuniões acontecem por Google Meet ou Zoom conforme a disponibilidade da sua equipe.',
        },
      ],
    },
    consultation: {
      kicker: 'Próximo Passo',
      title: 'Pronto para Melhorar a Visibilidade do Seu Site no Google nos EUA?',
      description:
        'Vamos identificar o que está limitando o crescimento orgânico do seu domínio e mapear novas oportunidades comerciais.',
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
      title: 'Agencia SEO para Empresas en EE. UU. | Auditorías y SEO Local',
      description:
        'Auditorías técnicas de SEO, optimización on-page y SEO Local para empresas en Estados Unidos. Diagnóstico profesional para mejorar su visibilidad en Google.',
      htmlLang: 'es-419',
      ogLocale: 'es_419',
      breadcrumbHome: 'Inicio',
      breadcrumbCurrent: 'Agencia SEO EE. UU.',
      serviceName: 'Auditorías SEO, Optimización Técnica y SEO Local para Empresas en Estados Unidos',
      serviceType: 'Auditoría Técnica SEO, SEO On-Page, SEO Local, Google Business Profile',
      schemaDescription:
        'Consultora independiente de SEO técnico orientada a empresas en Estados Unidos con auditorías humanas, optimización on-page, SEO Local y gestión continua.',
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
        'Ilustración conceptual sobre visibilidad en buscadores en EE. UU. Auditoria SEO es una consultora independiente sin afiliación ni respaldo de Google LLC.',
    },
    credibility: {
      kicker: 'Respaldo Institucional',
      title: 'Consultoría técnica SEO enfocada en claridad diagnóstica y ejecución real',
      summary:
        'Auditoria SEO es una consultora independiente dirigida por Wesley Vieira. Realizamos auditorías técnicas conducidas por especialistas, definimos prioridades prácticas para su equipo de desarrollo y ejecutamos estrategias orgánicas de forma remota para empresas en EE. UU. y Latinoamérica.',
      pillars: [
        {
          label: 'Auditorías por Especialista',
          detail: 'Cada sitio es inspeccionado manualmente — nunca reportes automáticos genéricos.',
        },
        {
          label: 'Criterios White Hat',
          detail: 'Buenas prácticas alineadas con Google Search Essentials para proteger la reputación del dominio.',
        },
        {
          label: 'Contratación Flexible',
          detail: 'Contrate una auditoría puntual independiente o avance hacia implementación y gestión mensual.',
        },
        {
          label: 'Reseñas Verificadas',
          detail: 'Calificación promedio de 5.0 estrellas en reseñas auténticas dentro de nuestra ficha oficial en Google Maps.',
        },
      ],
    },
    positioning: {
      eyebrow: 'Diseñado para Empresas en EE. UU.',
      title: 'Visibilidad en EE. UU. para Buscadores, IA y Búsqueda Local',
      description:
        'Auditoria SEO desarrolló un enfoque comercial pensado para empresas que compiten en Estados Unidos. Combinamos SEO técnico de precisión con optimización GEO y AEO para consolidar su presencia en Google Search, Google Maps y los nuevos entornos de descubrimiento asistidos por IA.',
      pillarsLabel: 'SEO · GEO · AEO',
      pillars: [
        {
          code: 'SEO',
          title: 'Search Engine Optimization',
          detail: 'Rastreo técnico, arquitectura web y páginas comerciales orientadas al mercado de Google en EE. UU.',
        },
        {
          code: 'GEO',
          title: 'Generative Engine Optimization',
          detail: 'Señales consistentes de entidad, Schema claro y profundidad temática para motores generativos.',
        },
        {
          code: 'AEO',
          title: 'Answer Engine Optimization',
          detail: 'Respuestas claras y verificables preparadas para fragmentos destacados y motores de respuesta.',
        },
      ],
      imageAlt:
        'Imagen editorial de un águila americana con la bandera de Estados Unidos detrás, simbolizando visibilidad en SEO, GEO y AEO para empresas en EE. UU.',
      ctaLabel: 'Explorar Servicios SEO',
    },
    challenges: {
      kicker: 'Obstáculos Comerciales Frecuentes',
      title: 'Por qué muchos sitios en EE. UU. no logran transformar búsquedas en clientes potenciales',
      subtitle:
        'Un diseño atractivo no basta para posicionar ni convertir. Errores técnicos ocultos, páginas desconectadas de la intención de búsqueda y brechas locales desvían compradores hacia la competencia.',
      items: [
        {
          number: '01.',
          statement: 'Mi sitio web no posiciona en Google.',
          explanation:
            'Bloqueos de rastreo, páginas de servicio débiles, enlaces internos deficientes o URLs sin indexar impiden que Google comprenda su oferta comercial.',
        },
        {
          number: '02.',
          statement: 'Mis competidores aparecen antes que mi empresa.',
          explanation:
            'Quienes lideran las búsquedas combinan arquitectura clara, páginas orientadas a servicios y mayor cobertura semántica.',
        },
        {
          number: '03.',
          statement: 'Mi web recibe tráfico pero genera pocos leads.',
          explanation:
            'Las visitas sin alineación comercial, con propuestas difusas o formularios con fricción rara vez derivan en contactos reales.',
        },
        {
          number: '04.',
          statement: 'Es difícil encontrar mi negocio en Google Maps.',
          explanation:
            'Categorías incompletas en Google Business Profile, datos inconsistentes o señales locales débiles reducen su presencia regional.',
        },
        {
          number: '05.',
          statement: 'No sé qué problemas técnicos afectan a mi sitio web.',
          explanation:
            'Sin auditoría de rastreo, canonicals, redirecciones y renderizado, los fallos técnicos persisten durante meses sin ser detectados.',
        },
        {
          number: '06.',
          statement: 'Invierto en marketing sin comprender mi rendimiento orgánico.',
          explanation:
            'Los anuncios dejan de generar contactos cuando se pausa la inversión. Un diagnóstico SEO muestra cómo reducir la dependencia exclusiva de pauta paga.',
        },
      ],
    },
    services: {
      kicker: 'Servicios Especializados',
      title: 'Auditorías SEO y servicios de optimización para empresas en Estados Unidos',
      subtitle:
        'Cada línea prioriza diagnóstico transparente, ejecución técnica rigurosa y foco comercial — sin promesas garantizadas de primer lugar ni tarifas genéricas.',
      scopeNotice:
        'Cada propuesta se adapta al tamaño del sitio, competencia en Estados Unidos y objetivos comerciales tras una evaluación inicial.',
      benefitsHeading: 'Valor comercial',
      deliverablesHeading: 'Actividades y entregables clave',
      items: [
        {
          number: '01.',
          id: 'technical-seo-audit',
          name: 'Technical SEO Audit',
          description:
            'Revisión técnica integral de rastreo, indexación, arquitectura de URLs, renderizado, velocidad, canonicalización, redirecciones, sitemaps XML y datos estructurados.',
          benefits: [
            'Elimina bloqueos técnicos que frenan la indexación de páginas clave.',
            'Entrega a su equipo técnico una hoja de ruta ordenada por prioridad.',
          ],
          deliverables: [
            'Diagnóstico de rastreo e indexación (Search Console + crawler)',
            'Higiene de etiquetas canonical, redirecciones y duplicidades',
            'Revisión de Core Web Vitals, renderizado, sitemaps y Schema',
          ],
          ctaLabel: 'Solicitar Auditoría Técnica',
          relatedGuideLabel: 'Leer guía de Auditoría Técnica SEO',
          relatedGuidePath: '/es/blog/auditoria-tecnica-seo',
        },
        {
          number: '02.',
          id: 'on-page-seo',
          name: 'On-Page SEO',
          description:
            'Optimización de títulos SEO, meta descripciones, jerarquía semántica H1–H3, contenido comercial, intención de búsqueda y enlazado interno.',
          benefits: [
            'Comunica con claridad el enfoque de cada servicio a usuarios y buscadores.',
            'Concentra relevancia interna en las páginas comerciales estratégicas.',
          ],
          deliverables: [
            'Optimización semántica de encabezados, títulos y meta tags',
            'Alineación editorial con la intención de búsqueda en EE. UU.',
            'Arquitectura de enlaces internos y textos ancla',
          ],
          ctaLabel: 'Consultar SEO On-Page',
          relatedGuideLabel: 'Leer guía de Auditoría SEO On-Page',
          relatedGuidePath: '/es/blog/auditoria-seo-on-page',
        },
        {
          number: '03.',
          id: 'local-seo',
          name: 'Local SEO',
          description:
            'Estrategias enfocadas en empresas que compiten por visibilidad geográfica en ciudades, áreas metropolitanas o territorios específicos de Estados Unidos.',
          benefits: [
            'Conecta búsquedas locales con páginas de servicio adaptadas a cada región.',
            'Fortalece señales geográficas consistentes en resultados orgánicos.',
          ],
          deliverables: [
            'Arquitectura de páginas locales por ciudad, estado o área de servicio',
            'Consistencia NAP y datos estructurados locales',
            'Mapeo de palabras clave con intención local estadounidense',
          ],
          ctaLabel: 'Explorar SEO Local',
          relatedGuideLabel: 'Ver página de SEO Local',
          relatedGuidePath: '/es/seo-local',
        },
        {
          number: '04.',
          id: 'google-business-profile',
          name: 'Google Business Profile & Google Maps',
          description:
            'Optimización estratégica de su perfil empresarial en Google conforme a las normas de la plataforma para fortalecer su presencia en búsquedas locales.',
          benefits: [
            'Mejora la claridad de su ficha cuando clientes locales comparan proveedores.',
            'Cumple estrictamente los lineamientos de elegibilidad de Google.',
          ],
          deliverables: [
            'Auditoría de categorías, servicios y completitud del perfil',
            'Coherencia técnica entre la ficha empresarial y el sitio web',
            'Buenas prácticas para gestión y obtención ética de reseñas',
          ],
          ctaLabel: 'Optimizar Google Business Profile',
          relatedGuideLabel: 'Leer guía de Google Business Profile',
          relatedGuidePath: '/es/blog/como-criar-google-meu-negocio',
        },
        {
          number: '05.',
          id: 'keyword-competitor-analysis',
          name: 'Keyword Research & Competitor Analysis',
          description:
            'Investigación basada en datos para detectar palabras clave comerciales en EE. UU., analizar competidores orgánicos reales e identificar brechas de contenido.',
          benefits: [
            'Enfoca esfuerzos en búsquedas vinculadas a cotizaciones y contrataciones.',
            'Evita invertir recursos en términos sin potencial de negocio.',
          ],
          deliverables: [
            'Mapa de palabras clave comerciales y locales por intención',
            'Análisis de competidores orgánicos y brechas de contenido',
            'Listado priorizado de nuevas páginas y mejoras editoriales',
          ],
          ctaLabel: 'Solicitar Análisis Competitivo',
        },
        {
          number: '06.',
          id: 'ongoing-seo-management',
          name: 'Ongoing SEO Management',
          description:
            'Gestión mensual continua que integra monitoreo técnico, implementación de mejoras, optimización de páginas y seguimiento de desempeño orgánico.',
          benefits: [
            'Convierte los hallazgos de la auditoría en avances sostenidos cada mes.',
            'Mantiene la salud técnica mientras su sitio y oferta comercial evolucionan.',
          ],
          deliverables: [
            'Monitoreo técnico continuo y ejecución de correcciones prioritarias',
            'Optimización on-page periódica y desarrollo de contenido',
            'Reportes claros de indexación, visibilidad y oportunidades generadas',
          ],
          ctaLabel: 'Consultar Gestión Mensual',
        },
      ],
    },
    methodology: {
      kicker: 'Metodología de Trabajo',
      title: 'Proceso claro en 4 etapas desde el diagnóstico hasta la mejora continua',
      subtitle:
        'Podemos entregar una auditoría independiente para su equipo interno o encargarnos de la implementación y acompañamiento continuo.',
      engagementClarificationTitle: 'Auditoría Independiente o Gestión Continua — Según su Necesidad',
      engagementClarificationText:
        'Contrate únicamente una auditoría SEO puntual con hoja de ruta accionable y sin mensualidades, o incorpore nuestro soporte para implementación y seguimiento continuo.',
      steps: [
        {
          step: '01',
          title: 'Discovery & Website Assessment',
          description:
            'Comprensión del negocio, mercados objetivo en Estados Unidos, prioridades comerciales e infraestructura web actual.',
        },
        {
          step: '02',
          title: 'SEO Audit & Opportunity Analysis',
          description:
            'Detección de errores técnicos, oportunidades de palabras clave, brechas competitivas y orden de prioridades.',
        },
        {
          step: '03',
          title: 'Strategic Optimization',
          description:
            'Entrega de plan de acción técnico detallado o ejecución directa de las mejoras acordadas en el alcance.',
        },
        {
          step: '04',
          title: 'Monitoring & Continuous Improvement',
          description:
            'Seguimiento continuo de indicadores orgánicos y evolución estratégica cuando se contrata gestión recurrente.',
        },
      ],
    },
    auditReveal: {
      kicker: 'Alcance del Diagnóstico',
      title: 'Las 12 áreas clave que una auditoría profesional puede revelar',
      subtitle:
        'Combinamos inspección técnica profunda, análisis de contenido y señales locales para identificar qué frena su visibilidad orgánica.',
      tabs: [
        {
          id: 'technical',
          label: 'Base Técnica',
          summary: 'Asegurar que Googlebot pueda rastrear, renderizar e indexar sus páginas comerciales sin obstáculos.',
          areas: [
            { name: 'Crawlability', detail: 'Robots.txt, recursos bloqueados, URLs huérfanas y códigos de estado HTTP.' },
            { name: 'Indexability', detail: 'Etiquetas noindex indebidas, soft-404 y exclusiones en Search Console.' },
            { name: 'Site architecture', detail: 'Jerarquía de URLs, profundidad de clics y estructura comercial.' },
            { name: 'Technical performance', detail: 'Latencia de servidor, carga de recursos y bloqueo de renderizado.' },
          ],
        },
        {
          id: 'content',
          label: 'Experiencia e Intención',
          summary: 'Alinear velocidad, experiencia móvil, palabras clave y contenido con la búsqueda del comprador.',
          areas: [
            { name: 'Core Web Vitals', detail: 'Evaluación de LCP, INP y CLS en dispositivos móviles y escritorio.' },
            { name: 'Mobile usability', detail: 'Legibilidad, diseño adaptable y accesibilidad táctil.' },
            { name: 'Keyword opportunities', detail: 'Oportunidades comerciales y de servicio en su mercado estadounidense.' },
            { name: 'Search intent', detail: 'Coherencia entre la página de destino y la intención del usuario.' },
          ],
        },
        {
          id: 'local',
          label: 'Autoridad, Local y Conversión',
          summary: 'Conectar autoridad interna, visibilidad en mapas, brechas competitivas y captación comercial.',
          areas: [
            { name: 'Internal linking', detail: 'Distribución estratégica de autoridad interna hacia páginas prioritarias.' },
            { name: 'Local search visibility', detail: 'Señales locales y alineación con Google Business Profile.' },
            { name: 'Competitor gaps', detail: 'Oportunidades aprovechadas por competidores orgánicos en EE. UU.' },
            { name: 'Conversion opportunities', detail: 'Claridad de llamados a la acción, formularios y confianza comercial.' },
          ],
        },
      ],
      allAreasHeading: 'Las 12 dimensiones evaluadas en la auditoría',
      screenshotCaptionTitle: 'Vista Ilustrativa de Diagnóstico Técnico (Semrush)',
      screenshotBadge: 'Material Demostrativo — No Son Datos de Clientes',
      screenshotCaptionText:
        'Captura ilustrativa de inspección de páginas rotas (HTTP 404) y pérdida de enlaces. En proyectos reales documentamos su dominio con datos propios de Search Console y rastreo técnico.',
      screenshotAlt:
        'Captura ilustrativa de Semrush mostrando cómo se detectan URLs con error 404 durante una auditoría técnica SEO',
    },
    industries: {
      kicker: 'Sectores Compatibles',
      title: 'Empresas en Estados Unidos a las que podemos ayudar',
      subtitle:
        'Metodología adaptable a empresas B2B, industriales y de servicios especializados que dependen de la búsqueda en Google para captar nuevos clientes.',
      note: 'Estos segmentos reflejan perfiles compatibles con nuestra propuesta comercial y prospección — sin declarar casos previos en todas las industrias listadas.',
      items: [
        {
          name: 'Proveedores de servicios industriales',
          searchContext: 'Búsquedas de mantenimiento, calibración, soporte técnico y servicios en planta.',
        },
        {
          name: 'Empresas manufactureras',
          searchContext: 'Capacidades OEM/ODM, fabricación a medida y especificaciones técnicas.',
        },
        {
          name: 'Contratistas especializados',
          searchContext: 'Construcción comercial, instalaciones técnicas, climatización y obras.',
        },
        {
          name: 'Servicios locales para el hogar',
          searchContext: 'Plomería, electricidad, HVAC y búsquedas de alta intención en Google Maps.',
        },
        {
          name: 'Ingeniería y servicios técnicos',
          searchContext: 'Consultoría de ingeniería, inspecciones, ensayos y cumplimiento normativo.',
        },
        {
          name: 'Proveedores de equipamiento',
          searchContext: 'Maquinaria industrial, repuestos, alquiler y catálogos B2B.',
        },
        {
          name: 'Negocios locales de servicios',
          searchContext: 'Empresas y firmas regionales que compiten por ciudad o área metropolitana.',
        },
        {
          name: 'Proveedores de servicios B2B',
          searchContext: 'Logística, tecnología, consultoría y soluciones corporativas de alto valor.',
        },
      ],
    },
    experience: {
      kicker: 'Trayectoria y Evidencia',
      title: 'Reseñas verificables y estructura transparente de documentación',
      subtitle:
        'Presentamos reseñas reales de nuestra ficha oficial en Google Maps (práctica en Brasil) junto con el formato modular con el que documentaremos proyectos en Estados Unidos.',
      verifiedReviewsTitle: 'Reseñas Verificadas (Ficha Oficial en Google Maps)',
      verifiedReviewsSubtitle:
        'Testimonios auténticos publicados directamente por clientes en nuestra ficha verificada de Google.',
      verifiedProfileLinkLabel: 'Verificar Reseñas en Google Maps',
      reviews: [
        {
          author: 'Alex Caldeira · Local Guide',
          context: 'Reseña verificada en Google Maps (Brasil)',
          quote:
            'Posicionó mi consultorio de forma constante entre los primeros resultados de Google y trajo clientes nuevos.',
        },
        {
          author: 'Jose Diniz · Local Guide',
          context: 'Reseña verificada en Google Maps (Brasil)',
          quote:
            'Comprometidos en ayudar realmente a nuestro negocio, mejorando nuestra presencia y acercando más clientes.',
        },
        {
          author: 'Lauro dos Santos',
          context: 'Reseña verificada en Google Maps (Brasil)',
          quote:
            'Profesionales dedicados y claros — ya obteniendo resultados concretos de esta alianza.',
        },
      ],
      frameworkTitle: 'Cómo Documentamos Cada Proyecto',
      frameworkSubtitle:
        'Estructura modular lista para incorporar nuevos casos en EE. UU. con datos reales:',
      frameworkSteps: [
        {
          phase: 'Fase 1',
          title: 'Línea Base Inicial',
          detail: 'Registro previo de errores de rastreo, indexación e impresiones en Search Console.',
        },
        {
          phase: 'Fase 2',
          title: 'Registro de Ejecución',
          detail: 'Detalle de cada mejora técnica, actualización on-page y ajuste arquitectónico.',
        },
        {
          phase: 'Fase 3',
          title: 'Impacto Verificado',
          detail: 'Validación posterior en salud de indexación, tráfico cualificado y oportunidades generadas.',
        },
      ],
      resourcesHeading: 'Recursos técnicos publicados en español',
      resources: [
        { label: 'Guía de Auditoría Técnica SEO', path: '/es/blog/auditoria-tecnica-seo' },
        { label: 'Guía de Auditoría SEO On-Page', path: '/es/blog/auditoria-seo-on-page' },
        { label: 'SEO Local: Cómo Aparecer en Google', path: '/es/blog/seo-local-como-aparecer-google' },
        { label: 'Modernización y Arquitectura Web', path: '/es/modernizacion-sitios' },
      ],
    },
    specialist: {
      kicker: 'Dirección Técnica',
      title: 'Conozca al Especialista Detrás de Su Estrategia SEO',
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO · Especialista en SEO Técnico y Crecimiento Orgánico',
      bioParagraphs: [
        'Cada auditoría y plan estratégico de Auditoria SEO es dirigido personalmente por Wesley Vieira junto al equipo técnico, evitando reportes automatizados sin criterio.',
        'Especializado en auditorías técnicas, arquitectura semántica, optimización on-page y SEO local, traduce hallazgos complejos de rastreo e indexación en prioridades claras para dirección comercial y desarrollo.',
      ],
      highlights: [
        'Acompañamiento directo del especialista desde la evaluación inicial hasta la presentación',
        'Dominio técnico de renderizado, canonicals, redirecciones y arquitectura web',
        'Reuniones en inglés, español o portugués por Google Meet, Zoom y correo electrónico',
      ],
      photoAlt:
        'Wesley Vieira, fundador de Auditoria SEO, exponiendo estrategias de visibilidad en Google sobre un escenario',
      ctaLabel: 'Agendar Reunión con Wesley',
    },
    whyUs: {
      kicker: 'Por Qué Elegir Auditoria SEO',
      title: 'La diferencia entre un reporte automático y una consultoría técnica real',
      subtitle:
        'Las herramientas muestran alertas aisladas. Nosotros priorizamos los ajustes técnicos y estratégicos que impactan en sus oportunidades comerciales.',
      items: [
        {
          title: 'Análisis basado en datos',
          description: 'Recomendaciones apoyadas en rastreo real, Search Console y análisis directo de SERP.',
        },
        {
          title: 'Comunicación transparente',
          description: 'Explicaciones claras sobre qué falla, por qué importa y cómo implementarlo.',
        },
        {
          title: 'Experiencia técnica',
          description: 'Dominio de HTML semántico, renderizado, canonicalización, sitemaps y rendimiento.',
        },
        {
          title: 'Recomendaciones accionables',
          description: 'Especificaciones listas para ejecutar por su equipo técnico o de contenidos.',
        },
        {
          title: 'Estrategia orientada al negocio',
          description: 'Enfoque directo en páginas comerciales, intención de compra y conversión.',
        },
        {
          title: 'Soluciones a medida',
          description: 'Alcance ajustado al tamaño de su sitio, tecnología y competencia en EE. UU.',
        },
        {
          title: 'Prioridades claras',
          description: 'Ordenamos cada acción por impacto comercial frente a esfuerzo técnico.',
        },
        {
          title: 'Modalidades flexibles',
          description: 'Contrate una auditoría puntual o sume implementación y gestión mensual continua.',
        },
      ],
    },
    faq: {
      kicker: 'Preguntas Frecuentes',
      title: 'Respuestas claras antes de conversar',
      subtitle: 'Detalles directos sobre alcance, plazos, colaboración remota con EE. UU. y estándares éticos.',
      items: [
        {
          question: '¿Qué incluye una auditoría SEO profesional?',
          answer:
            'Incluye análisis de rastreo e indexación, arquitectura de URLs, etiquetas canonical, redirecciones, usabilidad móvil, Core Web Vitals, estructura on-page, enlaces internos, señales locales (cuando aplique) y brechas competitivas, todo organizado en un plan de acción priorizado.',
        },
        {
          question: '¿Cuánto tiempo toma completar una auditoría SEO?',
          answer:
            'El plazo depende de la cantidad de URLs, la plataforma tecnológica y la profundidad solicitada. Confirmamos el cronograma exacto en la propuesta tras la evaluación inicial.',
        },
        {
          question: '¿Pueden ayudar a implementar las mejoras recomendadas?',
          answer:
            'Sí. Su equipo interno puede ejecutar las recomendaciones con nuestra hoja de ruta, o podemos encargarnos de implementar ajustes técnicos, on-page y editoriales.',
        },
        {
          question: '¿Ofrecen servicios mensuales de SEO?',
          answer:
            'Sí. Además de auditorías puntuales, ofrecemos gestión continua de SEO con monitoreo técnico, mejoras on-page, desarrollo estratégico de contenido e informes claros.',
        },
        {
          question: '¿Pueden ayudar a que mi empresa aparezca en Google Maps?',
          answer:
            'Sí, siempre que la empresa cumpla los criterios oficiales de Google Business Profile. Optimizamos categorías, servicios y señales locales cumpliendo estrictamente las directrices.',
        },
        {
          question: '¿Trabajan con empresas en todo Estados Unidos?',
          answer:
            'Sí. Colaboramos de forma remota con empresas en todas las zonas horarias de Estados Unidos mediante Google Meet, Zoom y correo electrónico.',
        },
        {
          question: '¿Puedo contratar una auditoría SEO sin compromiso mensual?',
          answer:
            'Por supuesto. Las auditorías SEO son proyectos puntuales independientes sin mensualidades obligatorias.',
        },
        {
          question: '¿Cómo nos comunicamos y agendamos reuniones?',
          answer:
            'Complete el formulario de contacto o escriba directamente a comercial@auditoriaseo.com.br para coordinar una videollamada por Google Meet o Zoom.',
        },
      ],
    },
    consultation: {
      kicker: 'Contacto Comercial',
      title: '¿Listo para Mejorar la Visibilidad de Su Sitio Web en Google?',
      description:
        'Identifiquemos qué frena el crecimiento orgánico de su sitio y descubramos nuevas oportunidades comerciales en EE. UU.',
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
