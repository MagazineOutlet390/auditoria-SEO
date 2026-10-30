import { Language } from './types';

export interface SiteTranslations {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
    seoServicesTitle: string;
    seoServicesDescription: string;
    googleAdsTitle: string;
    googleAdsDescription: string;
    modernizationTitle: string;
    modernizationDescription: string;
    blogTitle: string;
    blogDescription: string;
  };
  nav: {
    home: string;
    seoServices: string;
    googleAds: string;
    modernization: string;
    blog: string;
    whatsappCta: string;
    menuOpen: string;
    menuClose: string;
    langSelectAria: string;
  };
  whatsappMessages: {
    default: string;
    homeHero: string;
    localSeo: string;
    seoServices: string;
    googleAds: string;
    modernization: string;
    finalCta: string;
  };
  home: {
    hero: {
      kicker: string;
      titlePart1: string;
      titleShimmer: string;
      typewriterLabel: string;
      typewriterPhrases: string[];
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      trustBadges: string[];
    };
    localSeo: {
      eyebrow: string;
      title: string;
      subtitle: string;
      listHeading: string;
      deliverables: string[];
      ctaButton: string;
      ctaHelper: string;
      mockupHeading: string;
      mockupIllustrative: string;
      firstPlace: string;
      reviewsText: string;
      openNow: string;
      profileSubtitle: string;
      callBtn: string;
      directionsBtn: string;
      mostSearched: string;
      closesAt: string;
      openStatus: string;
      beforeLabel: string;
      afterLabel: string;
      optimizedProfile: string;
      mapRank: string;
      beforeRank: string;
      afterRank: string;
      profileStatus: string;
      beforeProfile: string;
      afterProfile: string;
      photosLabel: string;
      beforePhotos: string;
      afterPhotos: string;
      statCalls: string;
      statCallsSub: string;
      statRoutes: string;
      statRoutesSub: string;
      statClicks: string;
      statClicksSub: string;
      disclaimer: string;
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      landingTitle: string;
      landingSubtitle: string;
      landingDesc: string;
      landingDeliverablesHeading: string;
      landingDeliverables: string[];
      landingCta: string;
      localSeoTitle: string;
      localSeoSubtitle: string;
      localSeoDesc: string;
      localSeoDeliverablesHeading: string;
      localSeoDeliverables: string[];
      localSeoCta: string;
    };
    howItWorks: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: Array<{ step: string; title: string; description: string }>;
    };
    targetAudience: {
      eyebrow: string;
      title: string;
      subtitle: string;
      exampleBadge: string;
      segments: Array<{
        id: string;
        title: string;
        description: string;
        benefit: string;
        mockupHeadline: string;
        mockupCta: string;
        mockupPills: string[];
        mockupWhatsapp: string;
      }>;
    };
    differentials: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: Array<{ title: string; description: string }>;
    };
    testimonials: {
      eyebrow: string;
      title: string;
      subtitle: string;
      watchVideo: string;
      enlargeImage: string;
      openYouTube: string;
      viewOnMaps: string;
      pauseRotation: string;
      resumeRotation: string;
      modalClose: string;
      modalOpenSource: string;
      fiveStarSummary: string;
      fiveStarSubtitle: string;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryButton: string;
      phoneButton: string;
    };
  };
  seoServicesPage: {
    kicker: string;
    titlePart1: string;
    titleShimmer: string;
    typewriterLabel: string;
    typewriterPhrases: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadges: string[];
    plansHeadingKicker: string;
    plansTitle: string;
    plansSubtitle: string;
    deliverablesLabel: string;
    contractButton: string;
    whyHeadingKicker: string;
    whyTitle: string;
    whySubtitle: string;
    whyCards: Array<{ title: string; description: string }>;
    faqKicker: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: Array<{ question: string; answer: string }>;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaButton: string;
  };
  googleAdsPage: {
    kicker: string;
    titlePart1: string;
    titleShimmer: string;
    typewriterLabel: string;
    typewriterPhrases: string[];
    subtitle: string;
    extraBannerTitle: string;
    extraBannerText: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadges: string[];
    problemKicker: string;
    problemTitle: string;
    problemParagraphs: string[];
    benefitsHeading: string;
    benefitsList: Array<{ title: string; description: string }>;
    stagesKicker: string;
    stagesTitle: string;
    stagesSubtitle: string;
    stages: Array<{ number: string; title: string; description: string }>;
    boundariesKicker: string;
    boundariesTitle: string;
    boundariesSubtitle: string;
    boundaries: Array<{ isIncluded: boolean; text: string }>;
    faqKicker: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: Array<{ question: string; answer: string }>;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaButton: string;
  };
  modernizationPage: {
    kicker: string;
    titlePart1: string;
    titleShimmer: string;
    typewriterLabel: string;
    typewriterPhrases: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadges: string[];
    positioningAlert: {
      title: string;
      text: string;
    };
    pillarsKicker: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillars: Array<{
      id: string;
      title: string;
      tagline: string;
      description: string;
      benefits: string[];
      highlighted?: boolean;
    }>;
    marketsKicker: string;
    marketsTitle: string;
    marketsSubtitle: string;
    markets: Array<{
      region: string;
      description: string;
      tags: string[];
    }>;
    processKicker: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    technicalClarificationsKicker: string;
    technicalClarificationsTitle: string;
    technicalClarificationsSubtitle: string;
    clarifications: Array<{
      title: string;
      description: string;
    }>;
    faqKicker: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaButton: string;
  };
  blog: {
    heroKicker: string;
    heroCategoryBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    filterLabel: string;
    filterAll: string;
    loading: string;
    noPosts: string;
    minRead: string;
    readArticle: string;
    backToAll: string;
    inThisArticle: string;
    nextStrategicStep: string;
    nextStrategicText: string;
    nextStrategicCta: string;
    relatedTopics: string;
    recommendedArticles: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundBack: string;
  };
  footer: {
    description: string;
    officialMaps: string;
    navHeading: string;
    servicesHeading: string;
    copyright: string;
    whiteHat: string;
    coverage: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  pt: {
    meta: {
      siteName: 'Auditoria SEO',
      homeTitle: 'Auditoria SEO | Sites de Alta Conversão e SEO Local',
      homeDescription: 'Melhore sua presença no Google com sites de alta conversão e SEO Local. Atraia mais clientes pelo Google Maps e fortaleça sua presença digital.',
      seoServicesTitle: 'Serviços de SEO e SEO Local | Auditoria SEO',
      seoServicesDescription: 'Conheça nossos serviços de SEO, auditoria técnica, estratégia de conteúdo e SEO Local para melhorar a visibilidade da sua empresa no Google e atrair clientes.',
      googleAdsTitle: 'Google Ads: Configuração e Otimização de Campanhas | Auditoria SEO',
      googleAdsDescription: 'Configure suas campanhas do Google Ads com uma estrutura profissional, segmentação estratégica e otimização inicial para aproveitar melhor seu investimento em anúncios.',
      modernizationTitle: 'Modernização, Reconstrução e Hospedagem de Sites | Auditoria SEO',
      modernizationDescription: 'Modernize seu site antigo ou lento com arquitetura de alta performance, hospedagem na infraestrutura Cloudflare, segurança avançada e manutenção técnica recorrente.',
      blogTitle: 'Blog de SEO e Google Ads | Auditoria SEO',
      blogDescription: 'Aprenda sobre SEO, Google Ads, Google Meu Negócio e estratégias de marketing digital para aumentar sua visibilidade e conquistar mais clientes.',
    },
    nav: {
      home: 'Início',
      seoServices: 'Serviços de SEO',
      googleAds: 'Google Ads',
      modernization: 'Modernização de Sites',
      blog: 'Blog',
      whatsappCta: 'Falar no WhatsApp',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu',
      langSelectAria: 'Selecionar idioma',
    },
    whatsappMessages: {
      default: 'Olá! Vim pelo site da Auditoria SEO e gostaria de melhorar a presença digital do meu negócio.',
      homeHero: 'Olá! Quero melhorar a presença digital do meu negócio com a Auditoria SEO.',
      localSeo: 'Olá! Gostaria de saber mais sobre SEO Local e otimização do Google Business Profile.',
      seoServices: 'Olá! Gostaria de falar sobre os planos de SEO para o meu site.',
      googleAds: 'Olá! Gostaria de conversar sobre a estruturação de campanhas no Google Ads para o meu negócio.',
      modernization: 'Olá! Tenho um site existente e gostaria de uma avaliação para modernização, reconstrução ou hospedagem na Cloudflare.',
      finalCta: 'Olá! Gostaria de uma avaliação inicial para o meu negócio com a Auditoria SEO.',
    },
    home: {
      hero: {
        kicker: 'Auditoria SEO & Estratégia Digital',
        titlePart1: 'Seu negócio precisa ser encontrado.',
        titleShimmer: 'E convencer quem encontra você.',
        typewriterLabel: 'Foco em:',
        typewriterPhrases: [
          'Visibilidade no Google.',
          'Mais oportunidades comerciais.',
          'Presença digital profissional.',
        ],
        subtitle: 'Landing pages de alta conversão, SEO Local e estratégias digitais para fortalecer sua presença no Google e transformar oportunidades em contatos.',
        primaryCta: 'Quero melhorar minha presença digital',
        secondaryCta: 'Conhecer os serviços',
        trustBadges: [
          'Sem contratos abusivos',
          'Comunicação direta via WhatsApp',
          'Atendimento em todo o Brasil',
        ],
      },
      localSeo: {
        eyebrow: 'SEO LOCAL',
        title: 'Quem aparece primeiro no Google Maps recebe a ligação',
        subtitle: 'Quando um cliente procura pelo seu serviço perto dele, poucos negócios aparecem no mapa. Estar entre os primeiros é o que transforma a busca em contato.',
        listHeading: 'O que fazemos pelo seu perfil:',
        deliverables: [
          'Otimização completa do Perfil da Empresa (categorias primárias e secundárias, serviços detalhados e descrição estratégica)',
          'Gestão visual com fotos de alta qualidade e publicações periódicas para manter o perfil ativo e relevante',
          'Seção de Perguntas e Respostas estratégicas alinhadas às principais dúvidas comerciais dos clientes',
          'Estratégia e orientação para solicitação contínua de avaliações autênticas de clientes',
          'Consistência rigorosa de NAP (Nome, Endereço e Telefone) em toda a web local',
          'Mapeamento de palavras-chave locais e termos geolocalizados ("perto de mim")',
        ],
        ctaButton: 'Quero destacar meu perfil no Google Maps',
        ctaHelper: 'Atendimento rápido e direto via WhatsApp com nossos especialistas.',
        mockupHeading: 'Resultados no mapa da sua cidade',
        mockupIllustrative: 'Exemplo ilustrativo',
        firstPlace: '1º LUGAR',
        reviewsText: '(128 avaliações)',
        openNow: 'Aberto agora',
        profileSubtitle: 'Clínica médica · Av. Central, 850 · Perfil 100% verificado e ativo',
        callBtn: 'Ligar',
        directionsBtn: 'Rotas',
        mostSearched: 'Mais procurado',
        closesAt: 'Fecha às 18:00',
        openStatus: 'Aberto',
        beforeLabel: 'Antes',
        afterLabel: 'Depois',
        optimizedProfile: 'Perfil Otimizado',
        mapRank: 'Posição no mapa:',
        beforeRank: 'Posição #9 (invisível)',
        afterRank: 'Entre os 3 primeiros',
        profileStatus: 'Perfil:',
        beforeProfile: 'Incompleto / sem serviços',
        afterProfile: '100% preenchido e verificado',
        photosLabel: 'Fotos e avaliações:',
        beforePhotos: 'Poucas e desatualizadas',
        afterPhotos: 'Fotos em dia + estratégia',
        statCalls: 'Ligações',
        statCallsSub: 'em buscas locais',
        statRoutes: 'Pedidos de rota',
        statRoutesSub: 'no Google Maps',
        statClicks: 'Cliques no site',
        statClicksSub: 'e conversas diretas',
        disclaimer: 'Resultados variam conforme o negócio e o mercado.',
      },
      services: {
        eyebrow: 'Nossos Serviços Principais',
        title: 'Soluções digitais focadas em clareza, relevância e geração de contatos',
        subtitle: 'Desenvolvemos a estrutura que sua empresa precisa para ser encontrada por quem procura os seus serviços e transmitir autoridade no primeiro clique.',
        landingTitle: 'Landing Pages e Sites de Alta Conversão',
        landingSubtitle: 'Estruturas profissionais desenvolvidas para transformar tráfego em contatos comerciais.',
        landingDesc: 'Apresente seu negócio de forma profissional e persuasiva. Desenvolvemos páginas responsivas, rápidas e orientadas a CRO, destacando os diferenciais da sua empresa e facilitando a tomada de decisão do visitante.',
        landingDeliverablesHeading: 'O que entregamos nesta solução:',
        landingDeliverables: [
          'Layout limpo, contemporâneo e sem distrações visuais',
          'Hierarquia comercial que conduz o leitor à ação imediata',
          'Velocidade extrema de carregamento em redes 4G/5G',
          'Integração direta com WhatsApp e formulários de contato',
          'Totalmente adaptado para navegação em smartphones',
        ],
        landingCta: 'Saber mais sobre Landing Pages',
        localSeoTitle: 'SEO Local e Google Business Profile',
        localSeoSubtitle: 'Seja a primeira opção quando clientes da sua cidade buscarem pelo seu serviço no Google.',
        localSeoDesc: 'Estruturação estratégica da sua presença local para destacar sua empresa nas buscas de mapa e resultados locais do Google. Informações consistentes, categorias precisas e melhor aproveitamento do perfil empresarial.',
        localSeoDeliverablesHeading: 'O que entregamos nesta solução:',
        localSeoDeliverables: [
          'Configuração e otimização completa do Perfil da Empresa (Google Meu Negócio)',
          'Padronização de informações de contato, horários e serviços',
          'Estratégia para obtenção e gestão de avaliações 5 estrelas',
          'Otimização semântica para pesquisas geolocalizadas "perto de mim"',
          'Aumento direto de ligações, rotas no mapa e conversas no WhatsApp',
        ],
        localSeoCta: 'Saber mais sobre SEO Local',
      },
      howItWorks: {
        eyebrow: 'Metodologia & Transparência',
        title: 'Como funciona o processo de trabalho',
        subtitle: 'Um fluxo estruturado e direto ao ponto para que você saiba exatamente o que esperar em cada etapa do seu projeto.',
        steps: [
          {
            step: '01',
            title: 'Entendimento do negócio e dos objetivos',
            description: 'Analisamos seu mercado de atuação, seu público-alvo, seus diferenciais competitivos e quais são as metas comerciais prioritárias.',
          },
          {
            step: '02',
            title: 'Definição da estrutura e da estratégia',
            description: 'Planejamos a arquitetura do site, o mapa de conteúdo, as palavras-chave locais e o fluxo ideal de conversão dos visitantes.',
          },
          {
            step: '03',
            title: 'Desenvolvimento ou otimização',
            description: 'Executamos o trabalho técnico: criação da landing page rápida, implementação de SEO on-page ou estruturação da campanha.',
          },
          {
            step: '04',
            title: 'Revisão, publicação e próximos passos',
            description: 'Validação final de todos os canais de contato, publicação em ambiente de alta performance e orientação dos próximos passos.',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'Públicos Prioritários',
        title: 'Para quem este trabalho é ideal',
        subtitle: 'Nossas soluções são desenhadas sob medida para negócios que dependem da decisão de contratação local e da confiança transmitida no ambiente digital.',
        exampleBadge: 'Exemplo de landing page',
        segments: [
          {
            id: 'profissionais-liberais',
            title: 'Profissionais Liberais e Autônomos',
            description: 'Advogados, contadores, consultores e peritos que precisam transmitir segurança e fechar novos contratos.',
            benefit: 'Autoridade imediata e captação qualificada.',
            mockupHeadline: 'Assessoria Jurídica Estratégica para Empresas',
            mockupCta: 'Agendar Consulta Inicial',
            mockupPills: ['Direito Empresarial', 'Contratos Seguros', '15 Anos de Atuação'],
            mockupWhatsapp: 'Falar no WhatsApp',
          },
          {
            id: 'clinicas-estetica',
            title: 'Clínicas de Estética e Beleza',
            description: 'Espaços que necessitam atrair novos pacientes locais para procedimentos faciais e corporais.',
            benefit: 'Agenda preenchida com pacientes da sua região.',
            mockupHeadline: 'Tratamentos Faciais e Corporais com Tecnologia',
            mockupCta: 'Avaliação Personalizada',
            mockupPills: ['Harmonização & Botox', 'Protocolos Exclusivos', '+1.200 Pacientes'],
            mockupWhatsapp: 'Agendar no WhatsApp',
          },
          {
            id: 'academias-estudios',
            title: 'Academias, Studios e Pilates',
            description: 'Negócios com raio de atendimento geográfico delimitado onde a busca local no mapa decide a matrícula.',
            benefit: 'Mais visitas presenciais e leads no WhatsApp.',
            mockupHeadline: 'Saúde, Postura e Força com Acompanhamento',
            mockupCta: 'Agendar Aula Experimental',
            mockupPills: ['Pilates Clínico', 'Fisioterapeutas', 'Máx. 4 por Turma'],
            mockupWhatsapp: 'Garantir Vaga no WhatsApp',
          },
          {
            id: 'dentistas',
            title: 'Dentistas e Clínicas Odontológicas',
            description: 'Consultórios odontológicos que oferecem implantes, ortodontia e estética dental.',
            benefit: 'Destaque no mapa do Google para pesquisas de urgência e tratamentos.',
            mockupHeadline: 'Implantes Dentários e Ortodontia Digital',
            mockupCta: 'Agendar Avaliação Dentária',
            mockupPills: ['Implantes Rápidos', 'Alinhadores Invisíveis', 'Laser sem Dor'],
            mockupWhatsapp: 'Atendimento no WhatsApp',
          },
          {
            id: 'medicos',
            title: 'Médicos e Especialistas',
            description: 'Médicos de diversas especialidades que desejam fortalecer presença digital ética e receber novos agendamentos.',
            benefit: 'Posicionamento ético e informativo que gera confiança.',
            mockupHeadline: 'Consulta Médica Especializada e Diagnóstico',
            mockupCta: 'Agendar Consulta Presencial',
            mockupPills: ['Atendimento Humanizado', 'Exames Integrados', 'Espaço Moderno'],
            mockupWhatsapp: 'Marcar pelo WhatsApp',
          },
          {
            id: 'arquitetos-engenheiros',
            title: 'Arquitetos e Engenheiros',
            description: 'Escritórios de projetos e obras que precisam de uma vitrine impecável para propostas de alto padrão.',
            benefit: 'Portfólio refinado com foco em fechamento de projetos.',
            mockupHeadline: 'Projetos Residenciais e Comerciais Exclusivos',
            mockupCta: 'Solicitar Proposta de Projeto',
            mockupPills: ['Design Autoral', 'Gestão de Obras', 'Visualização 3D'],
            mockupWhatsapp: 'Conversar no WhatsApp',
          },
        ],
      },
      differentials: {
        eyebrow: 'Compromisso Técnico',
        title: 'Princípios reais que orientam cada entrega',
        subtitle: 'Sem promessas irreais de faturamento milionário ou primeira posição imediata. Nosso compromisso é com a qualidade técnica e a geração de oportunidades consistentes.',
        items: [
          {
            title: 'Comunicação Clara e Sem Jargões',
            description: 'Explicamos tudo em linguagem acessível para que você compreenda com precisão o que está sendo construído e o objetivo de cada ação.',
          },
          {
            title: 'Estrutura Pensada para Conversão',
            description: 'Cada título, botão e bloco é planejado para reduzir atritos e conduzir o visitante ao botão do WhatsApp ou formulário.',
          },
          {
            title: 'Experiência do Usuário e Responsividade',
            description: 'Navegação fluida e rápida em qualquer celular, tablet ou desktop, garantindo que nenhum contato seja perdido por lentidão.',
          },
          {
            title: 'Fundamentos de SEO Técnico',
            description: 'Código semântico, arquitetura limpa, tags canônicas, metadados bem estruturados e conformidade com diretrizes do Google.',
          },
          {
            title: 'Atenção à Experiência de Contato',
            description: 'Links diretos para WhatsApp com mensagens de abertura inteligentes que contextualizam o interesse do cliente.',
          },
          {
            title: 'Estratégia Compatível com seu Objetivo',
            description: 'Sem soluções genéricas ou empacotadas sem critério. Cada projeto respeita o momento comercial e os limites do seu negócio.',
          },
        ],
      },
      testimonials: {
        eyebrow: 'Prova Social Autêntica',
        title: 'Avaliações e depoimentos verificados',
        subtitle: 'Resultados e experiências reais de clientes que confiaram sua presença digital e estratégias de captação aos nossos serviços.',
        watchVideo: 'Assistir ao vídeo',
        enlargeImage: 'Clique para ampliar',
        openYouTube: 'Abrir no YouTube',
        viewOnMaps: 'Ver no Google Maps',
        pauseRotation: 'Pausar rotação',
        resumeRotation: 'Iniciar rotação',
        modalClose: 'Fechar prévia',
        modalOpenSource: 'Abrir no Google Maps',
        fiveStarSummary: 'Resumo de Avaliações: 5,0 Estrelas',
        fiveStarSubtitle: 'Ficha Oficial no Google Maps',
      },
      finalCta: {
        eyebrow: 'Dê o Próximo Passo',
        title: 'Pronto para posicionar seu negócio com a autoridade que ele merece no Google?',
        subtitle: 'Vamos conversar diretamente sobre os desafios de visibilidade da sua empresa e definir a melhor estratégia para transformar buscas locais em contatos reais no WhatsApp.',
        primaryButton: 'Falar com especialista no WhatsApp',
        phoneButton: '(19) 98933-2087',
      },
    },
    seoServicesPage: {
      kicker: 'Serviços Especializados de SEO',
      titlePart1: 'Estratégias estruturadas para posicionar seu site.',
      titleShimmer: 'Com autoridade técnica e relevância real.',
      typewriterLabel: 'Foco em:',
      typewriterPhrases: [
        'Primeira página do Google.',
        'Tráfego orgânico qualificado.',
        'Autoridade e relevância permanente.',
      ],
      subtitle: 'Do diagnóstico técnico profundo à construção contínua de relevância orgânica. Escolha o formato de atuação mais alinhado aos objetivos do seu negócio.',
      primaryCta: 'Falar com especialista no WhatsApp',
      secondaryCta: 'Ver planos e preços',
      trustBadges: [
        'Valores claros e entregáveis confirmados',
        'Práticas 100% White Hat SEO',
        'Sem contratos de fidelidade abusivos',
      ],
      plansHeadingKicker: 'Investimento & Escopo',
      plansTitle: 'Escolha o formato ideal para o momento do seu negócio',
      plansSubtitle: 'Valores transparentes e entregáveis definidos com precisão, sem surpresas ou cobranças adicionais ocultas.',
      deliverablesLabel: 'Itens e Entregáveis Inclusos:',
      contractButton: 'Contratar no WhatsApp',
      whyHeadingKicker: 'Fundamentos',
      whyTitle: 'Por que uma estratégia de SEO consistente supera soluções improvisadas',
      whySubtitle: 'Diferente de anúncios pagos que cessam no momento em que a verba acaba, a autoridade orgânica constrói um ativo patrimonial permanente para o seu domínio.',
      whyCards: [
        {
          title: 'Tráfego Qualificado e Espontâneo',
          description: 'Quem pesquisa no Google já possui uma dor e intenção clara. Seu site é apresentado exatamente no momento em que o cliente procura pela solução.',
        },
        {
          title: 'Credibilidade e Confiança Natural',
          description: 'Os usuários reconhecem os resultados orgânicos como recomendações imparciais de relevância pelo Google, conferindo autoridade instantânea ao negócio.',
        },
        {
          title: 'Redução do Custo por Aquisição',
          description: 'Ao somar visitas orgânicas com tráfego pago, sua empresa diversifica canais e reduz a vulnerabilidade diante do aumento no custo dos leilões de anúncios.',
        },
      ],
      faqKicker: 'Tire suas Dúvidas',
      faqTitle: 'Perguntas Frequentes sobre os Serviços de SEO',
      faqSubtitle: 'Respostas técnicas, honestas e sem rodeios para as principais dúvidas sobre nossos planos.',
      faqs: [
        {
          question: 'Em quanto tempo vejo resultados com SEO?',
          answer: 'O SEO é uma estratégia de médio a longo prazo. Geralmente, as primeiras melhorias de indexação e movimentações de palavras-chave começam a ser percebidas entre 3 a 6 meses de trabalho consistente, variando conforme a concorrência do nicho e o histórico do domínio.',
        },
        {
          question: 'Vocês garantem a primeira posição no Google?',
          answer: 'Não, e nenhuma empresa séria pode garantir isso. O Google utiliza mais de 200 fatores em seus algoritmos que mudam constantemente. Nosso trabalho aplica com rigor técnico as melhores práticas oficiais recomendadas para maximizar sua relevância e autoridade.',
        },
        {
          question: 'Qual a diferença entre a Auditoria e os Planos Mensais?',
          answer: 'A Auditoria de SEO é um diagnóstico pontual completo para identificar erros e oportunidades com plano de ação. Já os planos mensais (SEO Performance e SEO Authority Elite) são serviços de execução contínua com entregas regulares de artigos, backlinks e otimizações.',
        },
        {
          question: 'O que são backlinks e por que eles são importantes?',
          answer: 'Backlinks são links de outros sites apontando para o seu. Para os mecanismos de busca, links de qualidade funcionam como votos de confiança, transferindo autoridade e ajudando suas páginas a conquistarem melhores posições.',
        },
      ],
      bottomCtaTitle: 'Ainda em dúvida sobre qual plano escolher?',
      bottomCtaSubtitle: 'Envie o link do seu site pelo WhatsApp. Faremos uma análise preliminar rápida para recomendar a opção mais adequada para o seu estágio atual.',
      bottomCtaButton: 'Falar com especialista no WhatsApp',
    },
    googleAdsPage: {
      kicker: 'Google Ads para Negócios Locais',
      titlePart1: 'Estruturação profissional de campanhas.',
      titleShimmer: 'Prontas para gerar contatos no WhatsApp.',
      typewriterLabel: 'Foco em:',
      typewriterPhrases: [
        'Zero desperdício de verba.',
        'Pesquisas com real intenção de compra.',
        'Conta pronta sem mensalidade recorrente.',
      ],
      subtitle: 'Configure sua conta do Google Ads do jeito certo desde o primeiro dia. Sem desperdício de verba com cliques curiosos e sem contratos de mensalidade recorrente.',
      extraBannerTitle: 'Modelo de Entrega Pontual:',
      extraBannerText: 'Este serviço contempla a criação, estruturação, configuração inicial e otimização inicial da sua conta e campanhas. Não cobramos gestão mensal recorrente. A conta é 100% sua e fica pronta para veicular.',
      primaryCta: 'Solicitar proposta no WhatsApp',
      secondaryCta: 'Conhecer as etapas',
      trustBadges: [
        'Sem mensalidade recorrente de gestão',
        'A conta e os dados são 100% seus',
        'Segmentação cirúrgica com palavras negativas',
      ],
      problemKicker: 'O Problema e a Solução',
      problemTitle: 'Por que a maioria das pequenas empresas perde dinheiro no Google Ads?',
      problemParagraphs: [
        'O Google Ads é a ferramenta de tráfego com maior intenção de compra do mundo. No entanto, sua interface padrão foi desenhada para incentivar configurações amplas que consomem o orçamento rapidamente com termos irrelevantes.',
        'Quando uma clínica, consultório ou prestador de serviço ativa anúncios sem uma lista sólida de palavras-chave negativas e sem segmentação cirúrgica, até 70% da verba é gasta com quem busca empregos, cursos ou serviços gratuitos.',
        'Nosso trabalho é blindar sua conta, configurar os termos exatos de alta intenção comercial e entregar uma estrutura enxuta e eficiente.',
      ],
      benefitsHeading: 'O que uma conta bem estruturada proporciona:',
      benefitsList: [
        {
          title: 'Foco em Pesquisas Transacionais',
          description: 'Apareça apenas para quem está ativamente procurando contratar o serviço no seu raio de atendimento.',
        },
        {
          title: 'Blindagem com Palavras Negativas',
          description: 'Centenas de exclusões pré-configuradas para impedir que cliques indesejados consumam seu saldo.',
        },
        {
          title: 'Mensuração de Conversões',
          description: 'Rastreamento correto de cliques no WhatsApp para você saber exatamente quais palavras geram contatos.',
        },
      ],
      stagesKicker: 'Etapas do Processo',
      stagesTitle: 'Como estruturamos sua campanha do zero ao ar',
      stagesSubtitle: 'Um cronograma transparente dividido em quatro fases técnicas objetivas.',
      stages: [
        {
          number: '01',
          title: 'Criação ou auditoria da conta Google Ads',
          description: 'Configuração correta das diretrizes de faturamento, acessos de administrador, vinculação com Google Analytics e Tag Manager.',
        },
        {
          number: '02',
          title: 'Estruturação estratégica das campanhas',
          description: 'Segmentação por grupos de anúncios temáticos, pesquisa de palavras-chave negativas para evitar desperdício de verba e definição geográfica precisa.',
        },
        {
          number: '03',
          title: 'Configuração inicial e redação dos anúncios',
          description: 'Criação de anúncios responsivos de pesquisa com títulos atraentes, extensões de sitelink, chamada, local e recursos complementares.',
        },
        {
          number: '04',
          title: 'Otimização inicial e entrega',
          description: 'Ajuste inicial dos lances, testes de conversão (clique em WhatsApp/formulário) e entrega da conta pronta para rodar.',
        },
      ],
      boundariesKicker: 'Clareza de Escopo',
      boundariesTitle: 'O que está incluso e quais são os limites do serviço',
      boundariesSubtitle: 'Acreditamos na honestidade comercial. Veja exatamente o que entregamos e o que fica sob responsabilidade do cliente.',
      boundaries: [
        { isIncluded: true, text: 'Criação da conta Google Ads quando necessária' },
        { isIncluded: true, text: 'Estruturação completa dos grupos de anúncio e palavras-chave' },
        { isIncluded: true, text: 'Configuração inicial das tags de conversão' },
        { isIncluded: true, text: 'Otimização inicial após primeiras impressões para refinar termos' },
        { isIncluded: false, text: 'NÃO inclui gestão mensal contínua ou acompanhamento recorrente' },
        { isIncluded: false, text: 'NÃO inclui o orçamento pago ao Google (verba de mídia é paga diretamente pelo cliente ao Google)' },
        { isIncluded: false, text: 'NÃO promete garantia de faturamento fixo, leads mínimos ou custo por aquisição pré-definido' },
      ],
      faqKicker: 'Dúvidas Frequentes',
      faqTitle: 'Perguntas Frequentes sobre a Estruturação no Google Ads',
      faqSubtitle: 'Esclarecimentos fundamentais antes de iniciar a estruturação da sua conta.',
      faqs: [
        {
          question: 'O serviço inclui a gestão mensal das campanhas?',
          answer: 'Não. Este serviço específico é focado na criação, estruturação e otimização inicial da conta e campanhas. O objetivo é deixar tudo perfeitamente configurado e pronto para veiculação, sem prender você a uma mensalidade recorrente de agência.',
        },
        {
          question: 'A verba que vou pagar ao Google já está inclusa no serviço?',
          answer: 'Não. O valor pago à Auditoria SEO refere-se estritamente à mão de obra técnica especializada de estruturação. O orçamento de mídia é pago por você diretamente ao Google Ads por cartão de crédito ou boleto.',
        },
        {
          question: 'Como sei quanto devo investir por dia no Google Ads?',
          answer: 'Durante a etapa inicial de entendimento do seu negócio, avaliamos o custo médio por clique das palavras-chave do seu nicho e recomendamos um valor diário saudável e realista para o seu orçamento.',
        },
        {
          question: 'As campanhas já começam a gerar contatos imediatamente?',
          answer: 'Assim que os anúncios são aprovados pelo Google e entram no ar, seu negócio passa a receber cliques de pessoas que pesquisaram ativamente pelo seu serviço. A taxa de conversão dependerá da atratividade da sua oferta e da qualidade da sua página de destino.',
        },
      ],
      bottomCtaTitle: 'Quer estruturar seus anúncios no Google com precisão técnica?',
      bottomCtaSubtitle: 'Converse diretamente conosco pelo WhatsApp. Entendemos seu nicho de atuação e desenhamos a proposta ideal para colocar suas campanhas no ar.',
      bottomCtaButton: 'Solicitar proposta no WhatsApp',
    },
    modernizationPage: {
      kicker: 'Modernização & Infraestrutura Web',
      titlePart1: 'Seu site é antigo, lento ou tecnicamente limitado?',
      titleShimmer: 'Modernizamos com arquitetura segura de alta performance.',
      typewriterLabel: 'Foco em:',
      typewriterPhrases: [
        'Reconstrução moderna e segura.',
        'Infraestrutura Cloudflare global.',
        'Manutenção e suporte contínuo.',
      ],
      subtitle: 'Modernização, reconstrução, migração, hospedagem na nuvem e manutenção recorrente de sites para empresas no Brasil e América Latina que exigem velocidade, segurança e disponibilidade real.',
      primaryCta: 'Solicitar avaliação técnica do site',
      secondaryCta: 'Conhecer os serviços',
      trustBadges: [
        'Avaliação técnica inicial sem compromisso',
        'Arquitetura moderna sem dependências obsoletas',
        'Atendimento para Brasil e América Latina',
      ],
      positioningAlert: {
        title: 'Posicionamento e Transparência Técnica:',
        text: 'Não afirmamos que todos os sites precisam migrar para a Cloudflare ou que a migração isolada garante resultados milagrosos. Cada projeto passa por uma avaliação criteriosa para escolher a tecnologia exata: desde migração suave de infraestrutura até reconstrução integral quando a base existente não suporta mais evolução.',
      },
      pillarsKicker: 'Nossos Serviços Especializados',
      pillarsTitle: 'Soluções completas para cada fase do seu site',
      pillarsSubtitle: 'Diferenciamos com total clareza os serviços de reconstrução, migração, hospedagem e manutenção contínua.',
      pillars: [
        {
          id: 'rebuilding',
          title: 'Reconstrução Integral de Sites',
          tagline: 'Para sites antigos, travados em temas pesados ou CMS obsoletos que não compensam ser remendados.',
          description: 'Desenvolvemos uma estrutura 100% nova, modular, leve e orientada aos padrões contemporâneos da web. Código semântico, carregamento em milissegundos e experiência de navegação impecável em qualquer dispositivo móvel.',
          benefits: [
            'Eliminação definitiva de temas lentos e plugins conflitantes',
            'Arquitetura moderna em Vite, React ou JAMstack estático',
            'Tempo de carregamento abaixo de 1 segundo nos Core Web Vitals',
            'Layout alinhado à identidade e posicionamento da sua marca',
            'SEO técnico estruturado desde a primeira linha de código',
          ],
          highlighted: true,
        },
        {
          id: 'migration',
          title: 'Migração Técnica sem Reconstrução',
          tagline: 'Para sites cuja estrutura visual e funcional ainda atende, mas sofrem em servidores lentos ou instáveis.',
          description: 'Realizamos a transferência segura de arquivos, bancos de dados, DNS e certificados SSL para provedores modernos de hospedagem e edge computing, preservando 100% dos seus conteúdos, URLs e tráfego orgânico indexado.',
          benefits: [
            'Mapeamento completo de URLs para evitar links quebrados (404)',
            'Transição sem queda de disponibilidade (zero downtime)',
            'Otimização prévia de banco de dados e arquivos estáticos',
            'Apontamento seguro de DNS com propagação assistida',
            'Testes rigorosos de formulários e canais de contato após a virada',
          ],
        },
        {
          id: 'hosting',
          title: 'Hospedagem & Infraestrutura Cloudflare',
          tagline: 'Publicação e distribuição na rede global mais segura e rápida do mundo.',
          description: 'Configuramos seu site na infraestrutura de borda (edge) adequada da Cloudflare (Pages, Workers, Cache e CDN), aproximando seu conteúdo dos visitantes em mais de 300 cidades globais com proteção DDoS integrada.',
          benefits: [
            'Distribuição global de conteúdo com latência mínima no Brasil e América Latina',
            'Certificado SSL/TLS gerenciado e criptografia HTTPS moderna',
            'Proteção nativa contra ataques DDoS e tentativas de invasão',
            'Regras inteligentes de cache e compressão Brotli/WebP',
            'Compatibilidade nativa com fluxos contínuos via Git/GitHub',
          ],
        },
        {
          id: 'maintenance',
          title: 'Manutenção Técnica Recorrente',
          tagline: 'Acompanhamento preventivo para garantir estabilidade, segurança e suporte contínuo.',
          description: 'Seu site não fica abandonado após a entrega. Cuidamos das atualizações de segurança, correções preventivas, monitoramento de integridade e atendimento a solicitações técnicas conforme o plano acordado.',
          benefits: [
            'Monitoramento contínuo de disponibilidade (uptime 24/7)',
            'Auditorias periódicas de links quebrados e erros 5xx',
            'Aplicação regular de patches e atualizações de dependências',
            'Backups programados e plano de recuperação rápida',
            'Canal de suporte direto para ajustes e dúvidas técnicas',
          ],
        },
        {
          id: 'security-performance',
          title: 'Segurança, HTTPS & Core Web Vitals',
          tagline: 'Blindagem técnica e otimização profunda para notas máximas de velocidade.',
          description: 'Ajustamos cabeçalhos HTTP de segurança (HSTS, CSP, X-Frame-Options), eliminamos scripts bloqueadores de renderização e garantimos pontuações exemplares no Google PageSpeed Insights.',
          benefits: [
            'Pontuação próxima a 100 no PageSpeed mobile e desktop',
            'Otimização avançada de imagens (WebP/AVIF e aspect-ratio)',
            'Configuração de cabeçalhos de segurança contra vulnerabilidades',
            'Redução drástica de Cumulative Layout Shift (CLS) e LCP',
            'Conformidade técnica com as exigências de experiência de página do Google',
          ],
        },
        {
          id: 'evaluation',
          title: 'Avaliação Técnica Inicial',
          tagline: 'Diagnóstico transparente para identificar a solução mais inteligente para o seu caso.',
          description: 'Antes de qualquer contratação, analisamos o estado do seu site atual: servidor, tempo de resposta, tecnologia utilizada, segurança e riscos. Indicamos com clareza se você precisa apenas de migração, de ajustes ou de uma reconstrução.',
          benefits: [
            'Análise real de performance e gargalos do servidor atual',
            'Inspeção de segurança e status do certificado HTTPS',
            'Recomendação imparcial da melhor relação custo-benefício',
            'Sem empurrar serviços desnecessários para a sua empresa',
            'Relatório resumido com plano de ação prioritário',
          ],
        },
      ],
      marketsKicker: 'Atendimento Internacional',
      marketsTitle: 'Projetos para o Brasil e América Latina',
      marketsSubtitle: 'Atuamos fortemente no mercado brasileiro e atendemos empresas na América Latina com prioridade para Paraguai, Argentina e Chile, além de clientes globais em inglês.',
      markets: [
        {
          region: 'Brasil',
          description: 'Atendimento comercial e técnico completo em português, com pagamento facilitado e foco no mercado nacional.',
          tags: ['São Paulo', 'Campinas & Região', 'Nacional'],
        },
        {
          region: 'Paraguai, Argentina & Chile',
          description: 'Comunicação fluida em espanhol, compreendendo as particularidades técnicas, de infraestrutura e comerciais da região sul-americana.',
          tags: ['Assunção', 'Buenos Aires', 'Santiago', 'América Latina'],
        },
        {
          region: 'Alcance Global (Inglês)',
          description: 'Estruturas bilíngues e multilíngues preparadas para internacionalização com conformidade SEO de tags hreflang e CDN mundial.',
          tags: ['Estados Unidos', 'Europa', 'Internacional'],
        },
      ],
      processKicker: 'Metodologia Transparente',
      processTitle: 'Como funciona a modernização ou migração do seu site',
      processSubtitle: 'Um roteiro com etapas claras, prazos previsíveis e sem surpresas no meio do caminho.',
      processSteps: [
        {
          number: '01',
          title: 'Diagnóstico e Levantamento Técnico',
          description: 'Auditamos o site existente, acessos de hospedagem, domínio, registros DNS e definimos se o melhor caminho é a migração ou a reconstrução.',
        },
        {
          number: '02',
          title: 'Definição da Arquitetura & Proposta',
          description: 'Apresentamos o escopo detalhado com entregáveis, tecnologia escolhida e plano de publicação sem promessas irrealistas.',
        },
        {
          number: '03',
          title: 'Desenvolvimento, Migração e Homologação',
          description: 'Construímos ou migramos o ambiente em servidor de testes controlado, validando formulários, responsividade e velocidade.',
        },
        {
          number: '04',
          title: 'Virada de DNS, Publicação e Suporte',
          description: 'Realizamos o apontamento definitivo com verificação minuciosa de disponibilidade, certificados SSL e início da manutenção acordada.',
        },
      ],
      technicalClarificationsKicker: 'Transparência de Escopo',
      technicalClarificationsTitle: 'Diferenças essenciais entre nossos serviços',
      technicalClarificationsSubtitle: 'Entenda com clareza o que cada modalidade contempla para tomar a melhor decisão para sua empresa.',
      clarifications: [
        {
          title: 'Hospedagem vs. Reconstrução',
          description: 'A hospedagem na infraestrutura Cloudflare garante entrega rápida e proteção de rede para os arquivos do site. A reconstrução, por sua vez, reescreve o código interno do site do zero para torná-lo moderno, enxuto e compatível com as tecnologias atuais.',
        },
        {
          title: 'Migração vs. Manutenção',
          description: 'A migração é um serviço pontual de transferência segura do site de um servidor antigo para um ambiente moderno. A manutenção técnica é um acompanhamento recorrente contínuo de segurança, atualizações e estabilidade.',
        },
        {
          title: 'O papel real da Cloudflare',
          description: 'A Cloudflare é uma plataforma líder mundial de borda (edge) e segurança. No entanto, ela não conserta códigos mal programados por si só. Combinamos a excelência da infraestrutura com código limpo e boas práticas de desenvolvimento.',
        },
        {
          title: 'Avaliação personalizada sem valores inventados',
          description: 'Cada site legado tem um tamanho, dependências e complexidades únicas. Por isso, não publicamos tabelas de preços fictícias. Avaliamos seu site e apresentamos uma proposta técnica compatível com a sua necessidade.',
        },
      ],
      faqKicker: 'Perguntas Frequentes',
      faqTitle: 'Dúvidas sobre Modernização, Migração e Hospedagem',
      faqSubtitle: 'Respostas claras sobre prazos, funcionamento e requisitos técnicos.',
      faqs: [
        {
          question: 'Meu site vai ficar fora do ar durante a modernização ou migração?',
          answer: 'Não. Todo o trabalho de desenvolvimento ou migração é realizado em um ambiente de homologação separado. O site atual permanece 100% ativo e funcional até que a nova versão seja homologada e a virada de DNS seja executada em minutos.',
        },
        {
          question: 'Vocês atendem sites feitos em WordPress ou outras plataformas?',
          answer: 'Sim. Avaliamos a situação do seu site atual. Se o WordPress estiver viável, podemos otimizar, migrar ou manter. Se a estrutura estiver excessivamente pesada e lenta, recomendamos a reconstrução em arquitetura moderna e estática, muito mais veloz e segura.',
        },
        {
          question: 'Como funciona o atendimento para empresas fora do Brasil (Paraguai, Argentina, Chile)?',
          answer: 'Nosso atendimento para a América Latina é realizado de forma remota com total suporte em espanhol ou inglês via WhatsApp, videochamadas e e-mail, respeitando os horários comerciais e com canais de comunicação ágeis.',
        },
        {
          question: 'O que acontece com os e-mails da minha empresa durante a migração?',
          answer: 'Seus e-mails corporativos não são interrompidos. Durante o processo de gestão de DNS, preservamos rigorosamente todos os registros MX, SPF, DKIM e DMARC do seu provedor de e-mail atual (Google Workspace, Microsoft 365, etc.).',
        },
      ],
      bottomCtaTitle: 'Quer modernizar seu site ou melhorar sua infraestrutura?',
      bottomCtaSubtitle: 'Envie o link do seu site atual pelo WhatsApp. Faremos uma avaliação técnica preliminar e apresentaremos a melhor solução para sua empresa.',
      bottomCtaButton: 'Solicitar avaliação no WhatsApp',
    },
    blog: {
      heroKicker: 'Artigos & Autoridade Temática',
      heroCategoryBadge: 'Conteúdo Estratégico',
      heroTitle: 'Estratégias de SEO, Conversão e Tráfego para o Mundo Real',
      heroSubtitle: 'Conteúdos práticos e aprofundados sobre visibilidade no Google, otimização de páginas e geração contínua de oportunidades para o seu negócio.',
      filterLabel: 'Filtrar:',
      filterAll: 'Todos',
      loading: 'Carregando artigos do blog...',
      noPosts: 'Nenhum artigo encontrado para esta categoria no momento.',
      minRead: 'min de leitura',
      readArticle: 'Ler artigo',
      backToAll: 'Voltar para todos os artigos',
      inThisArticle: 'Neste artigo:',
      nextStrategicStep: 'Próximo passo estratégico',
      nextStrategicText: 'Quer analisar a situação técnica do seu site ou posicionar sua empresa no Google Maps?',
      nextStrategicCta: 'Conhecer nossos planos de SEO',
      relatedTopics: 'Tópicos relacionados:',
      recommendedArticles: 'Artigos Recomendados',
      notFoundTitle: 'Artigo não encontrado',
      notFoundText: 'O artigo solicitado não está disponível ou a URL foi alterada.',
      notFoundBack: 'Voltar para o blog',
    },
    footer: {
      description: 'Landing pages de alta conversão, SEO Local e estruturação de campanhas Google Ads para profissionais e negócios locais.',
      officialMaps: 'Ficha Oficial no Google Maps',
      navHeading: 'Navegação',
      servicesHeading: 'Serviços Especializados',
      copyright: 'Auditoria SEO. Todos os direitos reservados.',
      whiteHat: 'Práticas éticas de White Hat SEO',
      coverage: 'Brasil & América Latina · Atendimento Internacional',
    },
  },

  es: {
    meta: {
      siteName: 'Auditoria SEO',
      homeTitle: 'Auditoría SEO | Sitios de Alta Conversión y SEO Local',
      homeDescription: 'Mejore su presencia en Google con sitios de alta conversión y SEO Local. Atraiga más clientes a través de Google Maps y fortalezca su presencia digital.',
      seoServicesTitle: 'Servicios de SEO y SEO Local | Auditoría SEO',
      seoServicesDescription: 'Conozca nuestros servicios de SEO, auditoría técnica, estrategia de contenido y SEO Local para mejorar la visibilidad de su empresa en Google.',
      googleAdsTitle: 'Google Ads: Configuración y Optimización de Campañas | Auditoría SEO',
      googleAdsDescription: 'Configure sus campañas de Google Ads con estructura profesional, segmentación estratégica y optimización inicial sin mensualidades obligatorias.',
      modernizationTitle: 'Modernización, Reconstrucción y Alojamiento Web | Auditoría SEO',
      modernizationDescription: 'Modernice su sitio web antiguo o lento con arquitectura de alto rendimiento, alojamiento en infraestructura Cloudflare, seguridad y mantenimiento técnico.',
      blogTitle: 'Blog de SEO y Google Ads | Auditoría SEO',
      blogDescription: 'Aprenda sobre SEO, Google Ads, Google Business Profile y estrategias de marketing digital para aumentar su visibilidade y captar clientes.',
    },
    nav: {
      home: 'Inicio',
      seoServices: 'Servicios de SEO',
      googleAds: 'Google Ads',
      modernization: 'Modernización Web',
      blog: 'Blog',
      whatsappCta: 'Hablar por WhatsApp',
      menuOpen: 'Abrir menú de navegación',
      menuClose: 'Cerrar menú',
      langSelectAria: 'Seleccionar idioma',
    },
    whatsappMessages: {
      default: '¡Hola! Llegué a través del sitio web de Auditoria SEO y me gustaría mejorar la presencia digital de mi negocio.',
      homeHero: '¡Hola! Quiero mejorar la presencia digital de mi negocio con Auditoria SEO.',
      localSeo: '¡Hola! Me gustaría saber más sobre SEO Local y optimización de Google Business Profile.',
      seoServices: '¡Hola! Me gustaría conversar sobre los planes de SEO para mi sitio web.',
      googleAds: '¡Hola! Quisiera información sobre la estructuración de campañas de Google Ads para mi negocio.',
      modernization: '¡Hola! Tengo un sitio web existente y me gustaría una evaluación para modernización, reconstrucción o alojamiento en Cloudflare.',
      finalCta: '¡Hola! Me gustaría una evaluación inicial para mi negocio con Auditoria SEO.',
    },
    home: {
      hero: {
        kicker: 'Auditoría SEO & Estrategia Digital',
        titlePart1: 'Su negocio necesita ser encontrado.',
        titleShimmer: 'Y convencer a quien lo encuentra.',
        typewriterLabel: 'Enfoque en:',
        typewriterPhrases: [
          'Visibilidad en Google.',
          'Más oportunidades comerciales.',
          'Presencia digital profesional.',
        ],
        subtitle: 'Landing pages de alta conversión, SEO Local y estrategias digitales para posicionar su empresa en Google y transformar visitas en contactos reales.',
        primaryCta: 'Quiero mejorar mi presencia digital',
        secondaryCta: 'Conocer los servicios',
        trustBadges: [
          'Sin contratos abusivos',
          'Comunicación directa por WhatsApp',
          'Atención en Brasil y Latinoamérica',
        ],
      },
      localSeo: {
        eyebrow: 'SEO LOCAL',
        title: 'Quien aparece primero en Google Maps recibe la llamada',
        subtitle: 'Cuando un cliente busca su servicio cerca de él, pocos negocios aparecen en el mapa. Estar entre los primeros es lo que transforma la búsqueda en contacto.',
        listHeading: 'Lo que hacemos por su perfil:',
        deliverables: [
          'Optimización integral del Perfil de Empresa (categorías principales y secundarias, servicios detallados y descripción estratégica)',
          'Gestión visual con fotografías profesionales y publicaciones periódicas para mantener el perfil activo',
          'Sección de Preguntas y Respuestas estratégicas alineadas con las principales dudas de sus clientes',
          'Estrategia orientada a la recolección continua de opiniones y reseñas auténticas',
          'Consistencia rigurosa de NAP (Nombre, Dirección y Teléfono) en todo el entorno local',
          'Mapeo de palabras clave locales y términos geolocalizados ("cerca de mí")',
        ],
        ctaButton: 'Quiero destacar mi perfil en Google Maps',
        ctaHelper: 'Atención rápida y directa por WhatsApp con nuestros especialistas.',
        mockupHeading: 'Resultados en el mapa de su ciudad',
        mockupIllustrative: 'Ejemplo ilustrativo',
        firstPlace: '1.er LUGAR',
        reviewsText: '(128 reseñas)',
        openNow: 'Abierto ahora',
        profileSubtitle: 'Clínica médica · Av. Central, 850 · Perfil 100% verificado y activo',
        callBtn: 'Llamar',
        directionsBtn: 'Cómo llegar',
        mostSearched: 'Más buscado',
        closesAt: 'Cierra a las 18:00',
        openStatus: 'Abierto',
        beforeLabel: 'Antes',
        afterLabel: 'Después',
        optimizedProfile: 'Perfil Optimizado',
        mapRank: 'Posición en el mapa:',
        beforeRank: 'Posición #9 (invisible)',
        afterRank: 'Entre los 3 primeros',
        profileStatus: 'Perfil:',
        beforeProfile: 'Incompleto / sin servicios',
        afterProfile: '100% verificado y detallado',
        photosLabel: 'Fotos y opiniones:',
        beforePhotos: 'Pocas y desactualizadas',
        afterPhotos: 'Fotos actualizadas + estrategia',
        statCalls: 'Llamadas',
        statCallsSub: 'en búsquedas locales',
        statRoutes: 'Solicitudes de ruta',
        statRoutesSub: 'en Google Maps',
        statClicks: 'Clics al sitio',
        statClicksSub: 'y mensajes directos',
        disclaimer: 'Los resultados varían según el negocio y el mercado.',
      },
      services: {
        eyebrow: 'Nuestros Servicios Principales',
        title: 'Soluciones digitales enfocadas en claridad, relevancia y generación de contactos',
        subtitle: 'Desarrollamos la estructura técnica que su empresa necesita para ser encontrada por quienes buscan sus servicios y transmitir autoridad inmediata.',
        landingTitle: 'Landing Pages y Sitios de Alta Conversión',
        landingSubtitle: 'Estructuras profesionales diseñadas para transformar tráfico en oportunidades de negocio.',
        landingDesc: 'Presente su propuesta de valor de forma clara y persuasiva. Desarrollamos páginas responsivas, ultrarrápidas y orientadas a CRO, destacando sus ventajas competitivas.',
        landingDeliverablesHeading: 'Lo que entregamos en esta solución:',
        landingDeliverables: [
          'Diseño limpio, contemporáneo y sin distracciones visuales',
          'Jerarquía comercial que guía al lector a la acción directa',
          'Velocidad de carga sobresaliente en redes 4G/5G',
          'Integración directa con WhatsApp y formularios de contacto',
          'Totalmente adaptado para navegación móvil en smartphones',
        ],
        landingCta: 'Saber más sobre Landing Pages',
        localSeoTitle: 'SEO Local y Google Business Profile',
        localSeoSubtitle: 'Sea la primera opción cuando sus clientes locales busquen su especialidad en Google.',
        localSeoDesc: 'Estructuración estratégica de su presencia geográfica para destacar en el mapa y en las búsquedas locales. Información confiable, categorías exactas y perfil verificado.',
        localSeoDeliverablesHeading: 'Lo que entregamos en esta solución:',
        localSeoDeliverables: [
          'Configuración y optimización completa del Perfil de Empresa en Google',
          'Estandarización de datos de contacto, horarios y servicios prestados',
          'Estrategia de reputación y reseñas de 5 estrellas',
          'Optimización semántica para búsquedas con intención local',
          'Aumento directo de llamadas, visitas y consultas por WhatsApp',
        ],
        localSeoCta: 'Saber más sobre SEO Local',
      },
      howItWorks: {
        eyebrow: 'Metodología & Transparencia',
        title: 'Cómo funciona el proceso de trabajo',
        subtitle: 'Un flujo estructurado y transparente para que conozca con precisión cada etapa de su proyecto.',
        steps: [
          {
            step: '01',
            title: 'Entendimiento del negocio y objetivos',
            description: 'Analizamos su mercado, su cliente ideal, sus diferenciales y cuáles son las metas comerciales prioritarias.',
          },
          {
            step: '02',
            title: 'Definición de estructura y estrategia',
            description: 'Diseñamos la arquitectura de la página, el mapa de contenido, las palabras clave y el camino de conversión.',
          },
          {
            step: '03',
            title: 'Desarrollo o ejecución técnica',
            description: 'Ejecutamos el trabajo: programación de la landing page, implementación de SEO técnico o configuración de campañas.',
          },
          {
            step: '04',
            title: 'Revisión, publicación y próximos pasos',
            description: 'Validación integral de canales de contacto, despliegue en infraestructura de alta velocidad y orientación continua.',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'Públicos Prioritarios',
        title: 'Para quién es ideal este servicio',
        subtitle: 'Soluciones diseñadas a la medida de empresas y profesionales que dependen de la confianza y de la decisión de contratación local.',
        exampleBadge: 'Ejemplo de landing page',
        segments: [
          {
            id: 'profissionais-liberais',
            title: 'Profesionales Independientes y Consultores',
            description: 'Abogados, contadores, consultores y peritos que necesitan transmitir credibilidad y cerrar nuevos clientes.',
            benefit: 'Autoridad inmediata y captación calificada.',
            mockupHeadline: 'Asesoría Jurídica Estratégica para Empresas',
            mockupCta: 'Agendar Consulta Inicial',
            mockupPills: ['Derecho Corporativo', 'Contratos Seguros', '15 Años de Trayectoria'],
            mockupWhatsapp: 'Consultar por WhatsApp',
          },
          {
            id: 'clinicas-estetica',
            title: 'Clínicas de Estética y Bienestar',
            description: 'Centros de estética que necesitan atraer pacientes locales para tratamientos faciales y corporales.',
            benefit: 'Agenda completa con pacientes de su zona.',
            mockupHeadline: 'Tratamientos Faciales y Corporales Avanzados',
            mockupCta: 'Evaluación Personalizada',
            mockupPills: ['Medicina Estética', 'Protocolos Exclusivos', '+1.200 Pacientes'],
            mockupWhatsapp: 'Agendar por WhatsApp',
          },
          {
            id: 'academias-estudios',
            title: 'Gimnasios, Estudios y Pilates',
            description: 'Negocios con radio de atención geográfica donde la búsqueda en el mapa define la inscripción.',
            benefit: 'Más visitas presenciales y consultas directas.',
            mockupHeadline: 'Salud, Postura y Fuerza con Guía Profesional',
            mockupCta: 'Clase de Prueba sin Costo',
            mockupPills: ['Pilates Clínico', 'Kinesiólogos', 'Máximo 4 por Clase'],
            mockupWhatsapp: 'Reservar por WhatsApp',
          },
          {
            id: 'dentistas',
            title: 'Odontólogos y Clínicas Dentales',
            description: 'Consultorios odontológicos que ofrecen implantes, ortodoncia digital y estética dental.',
            benefit: 'Destacado en el mapa de Google para urgencias y tratamientos.',
            mockupHeadline: 'Implantes Dentales y Ortodoncia Invisible',
            mockupCta: 'Agendar Evaluación Dental',
            mockupPills: ['Implantes Guiados', 'Alineadores Invisibles', 'Tecnología Láser'],
            mockupWhatsapp: 'Atención por WhatsApp',
          },
          {
            id: 'medicos',
            title: 'Médicos y Especialistas',
            description: 'Médicos de diversas especialidades que buscan fortalecer su presencia digital ética y recibir consultas.',
            benefit: 'Posicionamiento ético e informativo que genera confianza.',
            mockupHeadline: 'Consulta Médica Especializada y Diagnóstico',
            mockupCta: 'Solicitar Turno Presencial',
            mockupPills: ['Atención Personalizada', 'Estudios Integrados', 'Instalaciones Modernas'],
            mockupWhatsapp: 'Solicitar por WhatsApp',
          },
          {
            id: 'arquitetos-engenheiros',
            title: 'Arquitectos e Ingenieros',
            description: 'Estudios de arquitectura y constructoras que requieren una vitrina digital para proyectos destacados.',
            benefit: 'Portafolio refinado enfocado en contratación de proyectos.',
            mockupHeadline: 'Proyectos Residenciales y Comerciales Exclusivos',
            mockupCta: 'Solicitar Cotización de Proyecto',
            mockupPills: ['Diseño de Autor', 'Dirección de Obra', 'Modelado 3D'],
            mockupWhatsapp: 'Conversar por WhatsApp',
          },
        ],
      },
      differentials: {
        eyebrow: 'Compromiso Técnico',
        title: 'Principios reales que guían cada entrega',
        subtitle: 'Sin promesas irreales de ganancias mágicas o primer lugar garantizado. Nuestro compromiso se basa en rigor técnico y resultados sostenibles.',
        items: [
          {
            title: 'Comunicación Clara y Sin Tecnicismos',
            description: 'Explicamos cada paso en lenguaje accesible para que comprenda con claridad qué se construye y el objetivo de cada acción.',
          },
          {
            title: 'Estructura Enfocada en Conversión',
            description: 'Cada título, botón y sección está planeado para reducir fricciones y guiar al visitante al contacto directo.',
          },
          {
            title: 'Experiencia Móvil y Velocidad',
            description: 'Navegación fluida y ágil en teléfonos móviles, tabletas o computadoras, asegurando que ninguna oportunidad se pierda por lentitud.',
          },
          {
            title: 'Fundamentos de SEO Técnico',
            description: 'Código semántico, etiquetas canónicas correctas, datos estructurados y total apego a las directrices de Google.',
          },
          {
            title: 'Facilidad de Contacto Directo',
            description: 'Enlaces inteligentes a WhatsApp con mensajes contextualizados que facilitan el inicio de la conversación.',
          },
          {
            title: 'Estrategia Adecuada a su Realidad',
            description: 'Sin fórmulas genéricas. Cada proyecto respeta el momento comercial y las capacidades de su empresa.',
          },
        ],
      },
      testimonials: {
        eyebrow: 'Prueba Social Auténtica',
        title: 'Opiniones y testimonios verificados',
        subtitle: 'Experiencias de clientes reales que confiaron su presencia digital y estrategias de captación a nuestro equipo.',
        watchVideo: 'Ver testimonio en video',
        enlargeImage: 'Clic para ampliar imagen',
        openYouTube: 'Abrir en YouTube',
        viewOnMaps: 'Ver en Google Maps',
        pauseRotation: 'Pausar rotación',
        resumeRotation: 'Reanudar rotación',
        modalClose: 'Cerrar vista previa',
        modalOpenSource: 'Ver en Google Maps',
        fiveStarSummary: 'Resumen de Calificaciones: 5,0 Estrellas',
        fiveStarSubtitle: 'Perfil Oficial en Google Maps',
      },
      finalCta: {
        eyebrow: 'Dé el Siguiente Paso',
        title: '¿Listo para posicionar su negocio con la autoridad que merece en Google?',
        subtitle: 'Conversemos directamente sobre los desafíos de visibilidad de su empresa y definamos la estrategia adecuada para transformar búsquedas en contactos.',
        primaryButton: 'Hablar con especialista por WhatsApp',
        phoneButton: '+55 (19) 98933-2087',
      },
    },
    seoServicesPage: {
      kicker: 'Servicios Especializados de SEO',
      titlePart1: 'Estrategias estructuradas para posicionar su sitio web.',
      titleShimmer: 'Con autoridad técnica y relevancia sostenible.',
      typewriterLabel: 'Enfoque en:',
      typewriterPhrases: [
        'Primera página de Google.',
        'Tráfico orgánico calificado.',
        'Autoridad y relevancia permanente.',
      ],
      subtitle: 'Desde el diagnóstico técnico profundo hasta la construcción continua de relevancia orgánica. Elija el formato más adecuado a sus objetivos.',
      primaryCta: 'Hablar con especialista por WhatsApp',
      secondaryCta: 'Ver planes y alcance',
      trustBadges: [
        'Valores claros y entregables confirmados',
        'Prácticas 100% White Hat SEO',
        'Sin contratos de permanencia forzosa',
      ],
      plansHeadingKicker: 'Inversión & Alcance',
      plansTitle: 'Elija el formato ideal para la etapa de su negocio',
      plansSubtitle: 'Entregables definidos con precisión y transparencia, sin cargos ocultos ni sorpresas.',
      deliverablesLabel: 'Entregables incluidos en el servicio:',
      contractButton: 'Contratar por WhatsApp',
      whyHeadingKicker: 'Fundamentos',
      whyTitle: 'Por qué una estrategia seria de SEO supera soluciones improvisadas',
      whySubtitle: 'A diferencia de los anuncios que se detienen cuando se agota el presupuesto, la autoridad orgánica construye un activo digital permanente para su marca.',
      whyCards: [
        {
          title: 'Tráfico Calificado con Intención Real',
          description: 'Quien busca en Google ya tiene una necesidad manifiesta. Su negocio se presenta en el momento preciso en que el cliente busca una solución.',
        },
        {
          title: 'Credibilidad y Confianza Natural',
          description: 'Los usuarios reconocen las posiciones orgánicas como recomendaciones imparciales de relevancia, generando autoridad inmediata.',
        },
        {
          title: 'Optimización del Costo por Adquisición',
          description: 'Al sumar visitas orgánicas con publicidad pagada, su empresa diversifica canales y reduce la dependencia de subastas publicitarias.',
        },
      ],
      faqKicker: 'Preguntas Frecuentes',
      faqTitle: 'Dudas Frecuentes sobre los Servicios de SEO',
      faqSubtitle: 'Respuestas técnicas, honestas y directas sobre el funcionamiento de nuestros planes.',
      faqs: [
        {
          question: '¿En cuánto tiempo se observan resultados con SEO?',
          answer: 'El SEO es una estrategia de mediano a largo plazo. Generalmente, las mejoras de indexación y los movimientos de palabras clave se aprecian entre los 3 y 6 meses de trabajo metódico, variando según la competencia del nicho y el historial del dominio.',
        },
        {
          question: '¿Garantizan el primer lugar en Google?',
          answer: 'No, y ninguna empresa seria puede prometerlo. Google evalúa cientos de factores algorítmicos que evolucionan constantemente. Nuestro trabajo aplica con rigor las mejores prácticas oficiales para maximizar su relevancia y visibilidad.',
        },
        {
          question: '¿Cuál es la diferencia entre la Auditoría y los Planes Mensuales?',
          answer: 'La Auditoría de SEO es un diagnóstico integral puntual para detectar errores y oportunidades con un plan de acción concreto. Los planes mensuales son servicios de ejecución continuada con publicaciones, backlinks y optimizaciones recurrentes.',
        },
        {
          question: '¿Qué son los backlinks y por qué son importantes?',
          answer: 'Los backlinks son enlaces desde otros sitios web que apuntan hacia el suyo. Para los motores de búsqueda, los enlaces de calidad funcionan como votos de confianza que transmiten autoridad a su dominio.',
        },
      ],
      bottomCtaTitle: '¿Tiene dudas sobre qué opción es la mejor?',
      bottomCtaSubtitle: 'Envíe el enlace de su sitio web por WhatsApp. Realizaremos un análisis preliminar para recomendar la alternativa más conveniente.',
      bottomCtaButton: 'Hablar con especialista por WhatsApp',
    },
    googleAdsPage: {
      kicker: 'Google Ads para Empresas Locales',
      titlePart1: 'Estructuración profesional de campañas.',
      titleShimmer: 'Listas para generar contactos en WhatsApp.',
      typewriterLabel: 'Enfoque en:',
      typewriterPhrases: [
        'Cero desperdicio de presupuesto.',
        'Búsquedas con intención de compra.',
        'Cuenta configurada sin mensualidades.',
      ],
      subtitle: 'Configure su cuenta de Google Ads de manera profesional desde el primer día. Sin desperdicio de dinero en clics irrelevantes y sin contratos mensuales forzosos.',
      extraBannerTitle: 'Modelo de Entrega Puntual:',
      extraBannerText: 'Este servicio contempla la creación, estructuración, configuración inicial y optimización de su cuenta. No cobramos mensualidades recurrentes de gestión. La cuenta y los datos son 100% suyos.',
      primaryCta: 'Solicitar propuesta por WhatsApp',
      secondaryCta: 'Conocer las etapas',
      trustBadges: [
        'Sin mensualidad obligatoria de agencia',
        'La cuenta y los datos son 100% de su empresa',
        'Segmentación precisa con palabras negativas',
      ],
      problemKicker: 'El Problema y la Solución',
      problemTitle: '¿Por qué la mayoría de las empresas gasta de más en Google Ads?',
      problemParagraphs: [
        'Google Ads es la plataforma publicitaria con mayor intención de compra del mundo. Sin embargo, su configuración predeterminada suele incentivar concordancias amplias que consumen el presupuesto en búsquedas irrelevantes.',
        'Cuando un negocio activa anuncios sin una lista sólida de palabras negativas y sin segmentación geográfica rigurosa, gran parte de su dinero se disipa en usuarios que buscan empleos, cursos o servicios gratuitos.',
        'Nuestro trabajo consiste en blindar su cuenta, seleccionar términos comerciales de alta intención y entregar una estructura eficiente y rentable.',
      ],
      benefitsHeading: 'Lo que proporciona una cuenta bien estructurada:',
      benefitsList: [
        {
          title: 'Foco en Búsquedas Transaccionales',
          description: 'Aparezca únicamente ante personas que buscan contratar su servicio en su zona de cobertura.',
        },
        {
          title: 'Blindaje con Palabras Negativas',
          description: 'Cientos de exclusiones preconfiguradas para evitar que clics no deseados agoten su saldo.',
        },
        {
          title: 'Medición de Conversiones Reales',
          description: 'Seguimiento exacto de clics hacia WhatsApp y llamadas para saber qué términos generan contactos.',
        },
      ],
      stagesKicker: 'Etapas del Proceso',
      stagesTitle: 'Cómo estructuramos su campaña desde cero',
      stagesSubtitle: 'Un cronograma transparente dividido en cuatro fases técnicas ordenadas.',
      stages: [
        {
          number: '01',
          title: 'Creación o auditoría de la cuenta de Google Ads',
          description: 'Configuración correcta de facturación, accesos administrativos y vinculación con Google Analytics.',
        },
        {
          number: '02',
          title: 'Estructuración estratégica de campañas',
          description: 'Segmentación en grupos de anuncios temáticos, investigación de palabras negativas y delimitación geográfica.',
        },
        {
          number: '03',
          title: 'Redacción y configuración de anuncios',
          description: 'Redacción de anuncios responsivos con títulos persuasivos, extensiones de llamada, vínculos a sitios y ubicación.',
        },
        {
          number: '04',
          title: 'Optimización inicial y entrega',
          description: 'Ajuste inicial de ofertas, validación de etiquetas de conversión y entrega de la cuenta lista para operar.',
        },
      ],
      boundariesKicker: 'Claridad de Alcance',
      boundariesTitle: 'Qué incluye y cuáles son los límites del servicio',
      boundariesSubtitle: 'Creemos en la transparencia comercial. Conozca exactamente lo que entregamos y lo que corresponde al cliente.',
      boundaries: [
        { isIncluded: true, text: 'Creación de la cuenta en Google Ads cuando sea necesario' },
        { isIncluded: true, text: 'Estructuración integral de grupos de anuncios y palabras clave' },
        { isIncluded: true, text: 'Configuración inicial de etiquetas de conversión (WhatsApp y llamadas)' },
        { isIncluded: true, text: 'Optimización tras las primeras impresiones para refinar términos' },
        { isIncluded: false, text: 'NO incluye gestión mensual continua ni fee recurrente de agencia' },
        { isIncluded: false, text: 'NO incluye el presupuesto publicitario (el cliente abona su inversión directamente a Google)' },
        { isIncluded: false, text: 'NO promete garantías ficticias de facturación o volumen fijo de clientes' },
      ],
      faqKicker: 'Preguntas Frecuentes',
      faqTitle: 'Dudas Frecuentes sobre la Estructuración en Google Ads',
      faqSubtitle: 'Aspectos esenciales a tener en cuenta antes de iniciar la configuración de sus anuncios.',
      faqs: [
        {
          question: '¿El servicio incluye la gestión mensual de los anuncios?',
          answer: 'No. Este servicio está enfocado en la creación, estructuración y afinación inicial. El objetivo es dejar todo configurado correctamente sin atarlo a mensualidades recurrentes de agencia.',
        },
        {
          question: '¿La inversión que pagaré a Google está incluida en el precio?',
          answer: 'No. El valor abonado a Auditoria SEO corresponde exclusivamente al trabajo técnico de estructuración. El saldo de anuncios se paga directamente a Google mediante tarjeta o facturación local.',
        },
        {
          question: '¿Cómo sé cuánto debo invertir por día en Google Ads?',
          answer: 'Durante la etapa inicial de diagnóstico, evaluamos el costo promedio por clic en su nicho y recomendamos un presupuesto diario razonable y acorde a sus metas.',
        },
        {
          question: '¿Los anuncios comienzan a generar contactos de inmediato?',
          answer: 'Una vez que Google aprueba los anuncios y entran en circulación, su negocio comenzará a recibir visitas de usuarios que buscan activamente su servicio.',
        },
      ],
      bottomCtaTitle: '¿Desea estructurar sus anuncios con rigor técnico?',
      bottomCtaSubtitle: 'Escríbanos directamente por WhatsApp. Evaluamos su rubro y preparamos una propuesta a la medida de su negocio.',
      bottomCtaButton: 'Solicitar propuesta por WhatsApp',
    },
    modernizationPage: {
      kicker: 'Modernización & Infraestructura Web',
      titlePart1: '¿Su sitio web es antiguo, lento o técnicamente limitado?',
      titleShimmer: 'Lo modernizamos con arquitectura segura de alto rendimiento.',
      typewriterLabel: 'Enfoque en:',
      typewriterPhrases: [
        'Reconstrucción moderna y segura.',
        'Infraestructura global de Cloudflare.',
        'Mantenimiento y soporte continuo.',
      ],
      subtitle: 'Modernización, reconstrucción, migración técnica, alojamiento en la nube y mantenimiento para empresas en Brasil y Latinoamérica que exigen velocidad, disponibilidad y seguridad real.',
      primaryCta: 'Solicitar evaluación técnica del sitio',
      secondaryCta: 'Conocer las soluciones',
      trustBadges: [
        'Evaluación técnica inicial sin compromiso',
        'Código limpio sin dependencias obsoletas',
        'Atención para Brasil y Latinoamérica',
      ],
      positioningAlert: {
        title: 'Posicionamiento y Transparencia Técnica:',
        text: 'No afirmamos que todos los sitios deban migrar a Cloudflare ni que una migración por sí sola garantice resultados milagrosos. Cada proyecto se evalúa con rigor para definir la solución técnica adecuada: desde una migración fluida hasta la reconstrucción integral cuando la base existente ya no es viable.',
      },
      pillarsKicker: 'Servicios Especializados',
      pillarsTitle: 'Soluciones integrales para la infraestructura de su sitio web',
      pillarsSubtitle: 'Diferenciamos con total claridad los servicios de reconstrucción, migración, alojamiento y mantenimiento continuo.',
      pillars: [
        {
          id: 'rebuilding',
          title: 'Reconstrucción Integral de Sitios Web',
          tagline: 'Para sitios antiguos, sobrecargados de plugins o atrapados en plataformas obsoletas que ya no admiten mejoras.',
          description: 'Desarrollamos una estructura completamente nueva, moderna y ligera. Código semántico, velocidad de carga instantánea y una experiencia de usuario impecable en cualquier dispositivo.',
          benefits: [
            'Eliminación total de plantillas pesadas y plugins conflictivos',
            'Arquitectura moderna en React, Vite o entornos estáticos',
            'Tiempos de carga menores a 1 segundo en Core Web Vitals',
            'Diseño alineado a la identidad y prestigio de su marca',
            'SEO técnico estructurado desde la base del desarrollo',
          ],
          highlighted: true,
        },
        {
          id: 'migration',
          title: 'Migración Técnica sin Reconstrucción',
          tagline: 'Para sitios cuyo diseño aún responde a sus necesidades pero sufren caídas o lentitud en servidores deficientes.',
          description: 'Transferimos de forma segura sus archivos, bases de datos, registros DNS y certificados SSL hacia infraestructura moderna, protegiendo sus contenidos, URLs y posicionamiento indexado.',
          benefits: [
            'Mapeo exhaustivo de URLs para prevenir enlaces rotos (404)',
            'Transición fluida sin caídas de servicio (cero downtime)',
            'Optimización previa de base de datos y archivos estáticos',
            'Configuración asistida de DNS con propagación inmediata',
            'Validación minuciosa de formularios y botones de contacto',
          ],
        },
        {
          id: 'hosting',
          title: 'Alojamiento e Infraestructura Cloudflare',
          tagline: 'Publicación y distribución en la red perimetral más rápida y segura a nivel global.',
          description: 'Configuramos su sitio en la infraestructura perimetral (edge) adecuada de Cloudflare (Pages, Workers, Cache y CDN), acercando el contenido a sus usuarios en más de 300 ciudades con protección DDoS integrada.',
          benefits: [
            'Distribución con latencia mínima en Brasil, Paraguay, Argentina y Chile',
            'Certificado SSL/TLS administrado con cifrado HTTPS moderno',
            'Protección nativa contra ataques DDoS e intentos de intrusión',
            'Reglas inteligentes de caché y compresión avanzada Brotli/WebP',
            'Compatibilidad directa con flujos de actualización continua vía Git',
          ],
        },
        {
          id: 'maintenance',
          title: 'Mantenimiento Técnico Recurrente',
          tagline: 'Acompañamiento preventivo para garantizar estabilidad, seguridad y soporte ágil.',
          description: 'Su sitio web no queda abandonado tras la entrega. Nos encargamos de actualizaciones de seguridad, revisiones periódicas, monitoreo de disponibilidad y atención a requerimientos técnicos según su plan.',
          benefits: [
            'Monitoreo continuo de disponibilidad en línea (uptime 24/7)',
            'Detección y corrección de enlaces rotos o errores 5xx',
            'Aplicación oportuna de parches y actualización de librerías',
            'Copias de seguridad programadas y protocolo de recuperación',
            'Canal de soporte directo para ajustes y dudas técnicas',
          ],
        },
        {
          id: 'security-performance',
          title: 'Seguridad, HTTPS y Core Web Vitals',
          tagline: 'Protección técnica y optimización profunda para máximas puntuaciones de velocidad.',
          description: 'Ajustamos encabezados de seguridad (HSTS, CSP), eliminamos scripts que bloquean la renderización y garantizamos notas sobresalientes en Google PageSpeed Insights.',
          benefits: [
            'Puntuación cercana a 100 en PageSpeed móvil y escritorio',
            'Optimización avanzada de recursos gráficos en WebP/AVIF',
            'Configuración de cabeceras de seguridad contra vulnerabilidades',
            'Reducción drástica de saltos visuales (CLS) y retrasos (LCP)',
            'Alineación total con las directrices de experiencia de página de Google',
          ],
        },
        {
          id: 'evaluation',
          title: 'Evaluación Técnica Inicial',
          tagline: 'Diagnóstico transparente para definir la solución más conveniente para su empresa.',
          description: 'Antes de iniciar cualquier contratación, revisamos el estado de su sitio actual: servidor, velocidad de respuesta, tecnología, seguridad y riesgos. Le indicamos con honestidad qué camino tomar.',
          benefits: [
            'Análisis real de rendimiento y cuellos de botella del servidor actual',
            'Inspección de seguridad y validez del certificado HTTPS',
            'Recomendación imparcial con la mejor relación costo-beneficio',
            'Sin proponer servicios innecesarios ni falsas urgencias',
            'Informe conciso con plan de acción por orden de prioridad',
          ],
        },
      ],
      marketsKicker: 'Alcance Internacional',
      marketsTitle: 'Proyectos para Brasil, Latinoamérica y el Mundo',
      marketsSubtitle: 'Atendemos activamente a empresas en Brasil, Paraguay, Argentina y Chile, además de proyectos internacionales en idioma inglés.',
      markets: [
        {
          region: 'Brasil',
          description: 'Atención técnica y comercial integral en portugués, con conocimiento profundo del ecosistema digital local.',
          tags: ['São Paulo', 'Campinas y Región', 'Nacional'],
        },
        {
          region: 'Paraguay, Argentina y Chile',
          description: 'Comunicación fluida en español adaptada al contexto de negocios, infraestructura y requerimientos de la región.',
          tags: ['Asunción', 'Buenos Aires', 'Santiago', 'Cono Sur'],
        },
        {
          region: 'Alcance Global (Inglés)',
          description: 'Estructuras bilingües y multilingües preparadas para internacionalización con etiquetas hreflang y CDN mundial.',
          tags: ['Estados Unidos', 'Europa', 'Global'],
        },
      ],
      processKicker: 'Metodología Transparente',
      processTitle: 'Cómo se lleva a cabo la modernización o migración',
      processSubtitle: 'Un proceso claro con etapas ordenadas, plazos previsibles y sin interrupciones operativas.',
      processSteps: [
        {
          number: '01',
          title: 'Diagnóstico y Relevamiento Técnico',
          description: 'Auditamos el sitio actual, accesos de alojamiento, dominio y registros DNS para definir el plan de acción más eficiente.',
        },
        {
          number: '02',
          title: 'Definición de Arquitectura y Propuesta',
          description: 'Presentamos la propuesta detallada con tecnologías elegidas, entregables precisos y calendario de trabajo.',
        },
        {
          number: '03',
          title: 'Desarrollo, Migración y Pruebas',
          description: 'Construimos o migramos en un entorno de pruebas controlado, validando velocidad, adaptabilidad y formularios.',
        },
        {
          number: '04',
          title: 'Publicación en Producción y Seguimiento',
          description: 'Efectuamos el cambio definitivo de DNS, verificamos certificados SSL y activamos el soporte técnico continuo.',
        },
      ],
      technicalClarificationsKicker: 'Claridad Conceptual',
      technicalClarificationsTitle: 'Diferencias clave entre nuestras modalidades de servicio',
      technicalClarificationsSubtitle: 'Comprenda qué abarca cada solución para tomar la mejor decisión según sus necesidades.',
      clarifications: [
        {
          title: 'Alojamiento vs. Reconstrucción',
          description: 'El alojamiento en la red Cloudflare proporciona entrega veloz y protección perimetral. La reconstrucción rehace el código interno del sitio desde cero para asegurar modernidad y agilidad técnica.',
        },
        {
          title: 'Migración vs. Mantenimiento',
          description: 'La migración es un servicio puntual de traslado de archivos y base de datos a un servidor moderno. El mantenimiento es el seguimiento continuo de seguridad, actualizaciones y monitoreo.',
        },
        {
          title: 'El papel real de Cloudflare',
          description: 'Cloudflare es líder mundial en seguridad perimetral y CDN. Sin embargo, no corrige códigos obsoletos por sí sola. Unimos infraestructura de primer nivel con código limpio y bien estructurado.',
        },
        {
          title: 'Evaluación técnica sin tarifas ficticias',
          description: 'Cada sitio web existente posee complejidades y tamaños diferentes. Por ello, no publicamos precios ficticios. Analizamos su caso y entregamos una cotización acorde a su proyecto.',
        },
      ],
      faqKicker: 'Preguntas Frecuentes',
      faqTitle: 'Dudas sobre Modernización, Migración y Alojamiento',
      faqSubtitle: 'Aclaraciones sobre tiempos de trabajo, requisitos y aspectos técnicos.',
      faqs: [
        {
          question: '¿Mi sitio web dejará de funcionar durante la modernización o migración?',
          answer: 'No. Todo el trabajo se efectúa en un entorno de pruebas independiente. Su sitio web actual permanece en línea y recibiendo visitas hasta que la nueva versión esté validada y la transición de DNS se realice en minutos.',
        },
        {
          question: '¿Trabajan con sitios desarrollados en WordPress u otras plataformas?',
          answer: 'Sí. Evaluamos el estado de su plataforma actual. Si el sitio en WordPress es viable, podemos migrarlo u optimizarlo. Si presenta excesiva lentitud y fallas estructurales, aconsejamos su reconstrucción en arquitectura estática moderna.',
        },
        {
          question: '¿Cómo se coordina el trabajo con clientes en Paraguay, Argentina o Chile?',
          answer: 'El servicio se brinda de forma remota y ágil en español mediante WhatsApp, reuniones por video y correo electrónico, ajustándonos a los husos horarios comerciales de cada país.',
        },
        {
          question: '¿Qué sucede con los correos corporativos durante el cambio de DNS?',
          answer: 'Sus casillas de correo no se interrumpen. Al gestionar los registros DNS, conservamos rigurosamente todas las configuraciones MX, SPF, DKIM y DMARC de su proveedor (Google Workspace, Microsoft 365, etc.).',
        },
      ],
      bottomCtaTitle: '¿Desea modernizar su sitio web o renovar su infraestructura?',
      bottomCtaSubtitle: 'Envíenos el enlace de su sitio actual por WhatsApp. Efectuaremos una revisión técnica preliminar para asesorarlo.',
      bottomCtaButton: 'Solicitar evaluación por WhatsApp',
    },
    blog: {
      heroKicker: 'Artículos & Autoridad Temática',
      heroCategoryBadge: 'Contenido Estratégico',
      heroTitle: 'Estrategias de SEO, Conversión y Tráfico para el Mundo Real',
      heroSubtitle: 'Contenidos prácticos y en profundidad sobre visibilidad en Google, optimización web y captación continua de clientes.',
      filterLabel: 'Filtrar:',
      filterAll: 'Todos',
      loading: 'Cargando artículos del blog...',
      noPosts: 'No se encontraron artículos para esta categoría por el momento.',
      minRead: 'min de lectura',
      readArticle: 'Leer artículo',
      backToAll: 'Volver a todos los artículos',
      inThisArticle: 'En este artículo:',
      nextStrategicStep: 'Próximo paso estratégico',
      nextStrategicText: '¿Desea evaluar el estado técnico de su sitio o posicionar su negocio en Google Maps?',
      nextStrategicCta: 'Conocer nuestros planes de SEO',
      relatedTopics: 'Temas relacionados:',
      recommendedArticles: 'Artículos Recomendados',
      notFoundTitle: 'Artículo no encontrado',
      notFoundText: 'El artículo solicitado no está disponible o el enlace ha cambiado.',
      notFoundBack: 'Volver al blog',
    },
    footer: {
      description: 'Landing pages de alta conversión, SEO Local y estructuración de campañas Google Ads para profesionales y empresas locales.',
      officialMaps: 'Perfil Oficial en Google Maps',
      navHeading: 'Navegación',
      servicesHeading: 'Servicios Especializados',
      copyright: 'Auditoria SEO. Todos los derechos reservados.',
      whiteHat: 'Prácticas éticas de White Hat SEO',
      coverage: 'Brasil y Latinoamérica · Atención Internacional',
    },
  },

  en: {
    meta: {
      siteName: 'Auditoria SEO',
      homeTitle: 'Auditoria SEO | High-Converting Websites & Local SEO',
      homeDescription: 'Improve your Google presence with high-converting websites and Local SEO. Attract more clients through Google Maps and strengthen your digital authority.',
      seoServicesTitle: 'SEO & Local SEO Services | Auditoria SEO',
      seoServicesDescription: 'Discover our specialized SEO services, technical audits, content strategies, and Local SEO to elevate your company visibility on Google.',
      googleAdsTitle: 'Google Ads: Campaign Setup & Strategic Optimization | Auditoria SEO',
      googleAdsDescription: 'Set up your Google Ads campaigns with a professional structure, negative keyword protection, and initial optimization without recurring management fees.',
      modernizationTitle: 'Website Modernization, Rebuilding & Edge Hosting | Auditoria SEO',
      modernizationDescription: 'Modernize slow or legacy websites with high-performance architecture, Cloudflare edge hosting, enterprise-grade security, and ongoing technical maintenance.',
      blogTitle: 'SEO & Google Ads Blog | Auditoria SEO',
      blogDescription: 'Learn about search engine optimization, Google Ads, Google Business Profile, and conversion rate optimization strategies to grow your business.',
    },
    nav: {
      home: 'Home',
      seoServices: 'SEO Services',
      googleAds: 'Google Ads',
      modernization: 'Website Modernization',
      blog: 'Blog',
      whatsappCta: 'Chat on WhatsApp',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close menu',
      langSelectAria: 'Select language',
    },
    whatsappMessages: {
      default: 'Hello! I found your website at Auditoria SEO and would like to improve my company digital presence.',
      homeHero: 'Hello! I would like to improve my company digital presence with Auditoria SEO.',
      localSeo: 'Hello! I would like to learn more about Local SEO and Google Business Profile optimization.',
      seoServices: 'Hello! I would like to discuss SEO plans for my website.',
      googleAds: 'Hello! I would like to talk about Google Ads campaign setup for my business.',
      modernization: 'Hello! I have an existing website and would like a technical assessment for modernization, rebuilding, or Cloudflare hosting.',
      finalCta: 'Hello! I would like an initial consultation for my business with Auditoria SEO.',
    },
    home: {
      hero: {
        kicker: 'SEO Audit & Digital Strategy',
        titlePart1: 'Your business needs to be found.',
        titleShimmer: 'And convince those who find you.',
        typewriterLabel: 'Focus on:',
        typewriterPhrases: [
          'Google search visibility.',
          'Qualified sales opportunities.',
          'Professional digital authority.',
        ],
        subtitle: 'High-converting landing pages, Local SEO, and strategic digital consulting to strengthen your presence on Google and turn visitors into real client inquiries.',
        primaryCta: 'Improve my digital presence',
        secondaryCta: 'Explore our services',
        trustBadges: [
          'No predatory lock-in contracts',
          'Direct communication via WhatsApp',
          'Serving Brazil & International clients',
        ],
      },
      localSeo: {
        eyebrow: 'LOCAL SEO',
        title: 'Whoever appears first on Google Maps receives the call',
        subtitle: 'When a customer searches for your service nearby, only a few businesses appear on the map pack. Being among the top is what converts a search into contact.',
        listHeading: 'What we deliver for your business profile:',
        deliverables: [
          'Full Google Business Profile optimization (primary & secondary categories, complete services catalog, and strategic description)',
          'Visual curation with high-definition photos and periodic posts to keep your profile active and relevant',
          'Strategic Q&A section tailored to high-intent customer purchasing questions',
          'Actionable framework for collecting authentic, high-rating client reviews',
          'Strict NAP (Name, Address, Phone) consistency across the local web ecosystem',
          'Hyper-local keyword mapping and geo-targeted "near me" search optimization',
        ],
        ctaButton: 'Feature my profile on Google Maps',
        ctaHelper: 'Fast and direct assistance via WhatsApp with our senior specialists.',
        mockupHeading: 'Local map pack results in your city',
        mockupIllustrative: 'Illustrative example',
        firstPlace: '#1 RANK',
        reviewsText: '(128 reviews)',
        openNow: 'Open now',
        profileSubtitle: 'Medical clinic · 850 Central Ave · 100% verified & active profile',
        callBtn: 'Call',
        directionsBtn: 'Directions',
        mostSearched: 'Most popular',
        closesAt: 'Closes at 6:00 PM',
        openStatus: 'Open',
        beforeLabel: 'Before',
        afterLabel: 'After',
        optimizedProfile: 'Optimized Profile',
        mapRank: 'Map position:',
        beforeRank: 'Rank #9 (invisible)',
        afterRank: 'Top 3 positions',
        profileStatus: 'Profile:',
        beforeProfile: 'Incomplete / missing services',
        afterProfile: '100% complete and verified',
        photosLabel: 'Photos & reviews:',
        beforePhotos: 'Few & outdated photos',
        afterPhotos: 'Fresh photos + review strategy',
        statCalls: 'Phone calls',
        statCallsSub: 'from local searches',
        statRoutes: 'Direction requests',
        statRoutesSub: 'on Google Maps',
        statClicks: 'Website visits',
        statClicksSub: 'and direct inquiries',
        disclaimer: 'Results vary depending on market competitiveness and niche history.',
      },
      services: {
        eyebrow: 'Our Core Services',
        title: 'Digital solutions built for clarity, relevance, and commercial inquiries',
        subtitle: 'We engineer the digital foundation your company needs to be easily found by active buyers and establish immediate credibility on the first click.',
        landingTitle: 'High-Converting Landing Pages & Websites',
        landingSubtitle: 'Engineered structures tailored to transform organic and paid traffic into commercial leads.',
        landingDesc: 'Present your business with authority and clarity. We craft fast, responsive, and CRO-driven landing pages that highlight your competitive strengths and facilitate prompt decision-making.',
        landingDeliverablesHeading: 'Key deliverables in this solution:',
        landingDeliverables: [
          'Clean, contemporary layout free from visual clutter',
          'Commercial visual hierarchy guiding visitors to immediate action',
          'Sub-second loading speeds on mobile networks',
          'Direct integration with WhatsApp and lead forms',
          'Fully optimized for touch navigation on mobile smartphones',
        ],
        landingCta: 'Learn more about Landing Pages',
        localSeoTitle: 'Local SEO & Google Business Profile',
        localSeoSubtitle: 'Be the first choice when customers in your area search for your services on Google.',
        localSeoDesc: 'Strategic structuring of your local presence to dominate map packs and local search results. Accurate data, precise categories, and maximum profile authority.',
        localSeoDeliverablesHeading: 'Key deliverables in this solution:',
        localSeoDeliverables: [
          'Comprehensive setup and optimization of your Google Business Profile',
          'Standardization of contact information, operating hours, and service lists',
          'Proven strategy for gathering and managing 5-star customer reviews',
          'Semantic optimization for local proximity queries ("near me")',
          'Direct boost in phone calls, driving directions, and WhatsApp conversations',
        ],
        localSeoCta: 'Learn more about Local SEO',
      },
      howItWorks: {
        eyebrow: 'Methodology & Transparency',
        title: 'How our process works',
        subtitle: 'A structured, straightforward workflow so you know exactly what to expect at every milestone.',
        steps: [
          {
            step: '01',
            title: 'Business & objective assessment',
            description: 'We evaluate your competitive landscape, target demographics, value proposition, and key commercial goals.',
          },
          {
            step: '02',
            title: 'Strategy & architecture definition',
            description: 'We map site structure, content blueprints, local keywords, and the ideal visitor-to-lead conversion funnel.',
          },
          {
            step: '03',
            title: 'Development or optimization',
            description: 'We execute the technical work: high-speed landing page coding, on-page SEO implementation, or ad structuring.',
          },
          {
            step: '04',
            title: 'Review, deployment & next steps',
            description: 'Rigorous validation of all contact channels, deployment onto high-performance edge infrastructure, and clear next steps.',
          },
        ],
      },
      targetAudience: {
        eyebrow: 'Target Segments',
        title: 'Who our services are built for',
        subtitle: 'Our solutions are tailored specifically for businesses and independent professionals where local trust and digital reputation drive customer decisions.',
        exampleBadge: 'Landing page example',
        segments: [
          {
            id: 'profissionais-liberais',
            title: 'Independent Professionals & Consultants',
            description: 'Lawyers, accountants, consultants, and experts who need to inspire trust and secure high-value contracts.',
            benefit: 'Immediate authority and qualified lead acquisition.',
            mockupHeadline: 'Strategic Corporate Legal Counsel',
            mockupCta: 'Book Initial Consultation',
            mockupPills: ['Corporate Law', 'Secure Contracts', '15+ Years Track Record'],
            mockupWhatsapp: 'Chat on WhatsApp',
          },
          {
            id: 'clinicas-estetica',
            title: 'Aesthetic & Wellness Clinics',
            description: 'Aesthetic practices looking to attract local patients for specialized facial and body treatments.',
            benefit: 'A steady appointment calendar with local patients.',
            mockupHeadline: 'Advanced Facial & Body Aesthetic Treatments',
            mockupCta: 'Personalized Assessment',
            mockupPills: ['Aesthetic Medicine', 'Exclusive Protocols', '1,200+ Patients'],
            mockupWhatsapp: 'Book on WhatsApp',
          },
          {
            id: 'academias-estudios',
            title: 'Fitness Centers, Studios & Pilates',
            description: 'Local facilities where proximity and Google Maps visibility directly influence memberships.',
            benefit: 'More physical visits and qualified WhatsApp leads.',
            mockupHeadline: 'Clinical Pilates & Supervised Strength Training',
            mockupCta: 'Book Trial Session',
            mockupPills: ['Clinical Pilates', 'Licensed Therapists', 'Max 4 per Class'],
            mockupWhatsapp: 'Reserve on WhatsApp',
          },
          {
            id: 'dentistas',
            title: 'Dentists & Dental Practices',
            description: 'Dental clinics offering dental implants, clear aligners, and aesthetic dentistry.',
            benefit: 'Top ranking on Google Maps for high-intent dental inquiries.',
            mockupHeadline: 'Dental Implants & Digital Orthodontics',
            mockupCta: 'Book Dental Evaluation',
            mockupPills: ['Guided Implants', 'Invisible Aligners', 'Painless Laser'],
            mockupWhatsapp: 'Contact on WhatsApp',
          },
          {
            id: 'medicos',
            title: 'Physicians & Medical Specialists',
            description: 'Specialists who want to build an ethical digital presence and facilitate direct appointment bookings.',
            benefit: 'Ethical, authoritative positioning that builds patient trust.',
            mockupHeadline: 'Specialized Medical Consultations & Diagnostics',
            mockupCta: 'Schedule Office Visit',
            mockupPills: ['Personalized Care', 'In-House Diagnostics', 'Modern Facility'],
            mockupWhatsapp: 'Schedule on WhatsApp',
          },
          {
            id: 'arquitetos-engenheiros',
            title: 'Architects & Engineering Firms',
            description: 'Architecture and construction studios requiring an impeccable showcase for high-end residential and commercial projects.',
            benefit: 'Refined portfolio presentation focused on contract signing.',
            mockupHeadline: 'Bespoke Residential & Commercial Architecture',
            mockupCta: 'Request Project Proposal',
            mockupPills: ['Signature Design', 'Construction Oversight', '3D Visualization'],
            mockupWhatsapp: 'Discuss on WhatsApp',
          },
        ],
      },
      differentials: {
        eyebrow: 'Technical Commitment',
        title: 'Core principles guiding our deliverables',
        subtitle: 'No unrealistic overnight guarantees or empty marketing promises. Our reputation is built on sound technical engineering and consistent business outcomes.',
        items: [
          {
            title: 'Clear Communication Without Jargon',
            description: 'We explain everything in plain language so you understand exactly what is being built and why it matters.',
          },
          {
            title: 'Engineered for Conversion',
            description: 'Every headline, call-to-action button, and content block is designed to reduce friction and guide visitors to take action.',
          },
          {
            title: 'Mobile-First UX & Fast Loading',
            description: 'Fluid, lightning-fast navigation across mobile smartphones, tablets, and desktop computers to ensure zero leads are lost to lag.',
          },
          {
            title: 'Solid Technical SEO Fundamentals',
            description: 'Semantic markup, canonical tags, structured data, clean code hierarchy, and full alignment with official Google guidelines.',
          },
          {
            title: 'Seamless Contact Channels',
            description: 'Direct WhatsApp integration with smart, pre-filled opening messages that give context to the customer inquiry.',
          },
          {
            title: 'Tailored Strategy for Your Real Goals',
            description: 'No generic, one-size-fits-all bundles. Every strategy respects your budget, your timeline, and your commercial scope.',
          },
        ],
      },
      testimonials: {
        eyebrow: 'Authentic Social Proof',
        title: 'Verified reviews & video testimonials',
        subtitle: 'Genuine feedback from real business owners who trust their search visibility and lead acquisition to our team.',
        watchVideo: 'Watch video testimonial',
        enlargeImage: 'Click to enlarge image',
        openYouTube: 'Open on YouTube',
        viewOnMaps: 'View on Google Maps',
        pauseRotation: 'Pause rotation',
        resumeRotation: 'Resume rotation',
        modalClose: 'Close preview',
        modalOpenSource: 'Open on Google Maps',
        fiveStarSummary: 'Reviews Summary: 5.0 Stars',
        fiveStarSubtitle: 'Official Google Maps Business Profile',
      },
      finalCta: {
        eyebrow: 'Take the Next Step',
        title: 'Ready to position your business with the authority it deserves on Google?',
        subtitle: 'Let us discuss your search visibility challenges and determine the most effective roadmap to turn local queries into direct WhatsApp leads.',
        primaryButton: 'Speak with a specialist on WhatsApp',
        phoneButton: '+55 (19) 98933-2087',
      },
    },
    seoServicesPage: {
      kicker: 'Specialized SEO Services',
      titlePart1: 'Structured strategies to rank your website.',
      titleShimmer: 'With technical authority and genuine relevance.',
      typewriterLabel: 'Focus on:',
      typewriterPhrases: [
        'Google first page.',
        'Qualified organic traffic.',
        'Permanent authority and relevance.',
      ],
      subtitle: 'From comprehensive technical audits to ongoing organic relevance building. Choose the engagement model best aligned with your company goals.',
      primaryCta: 'Speak with a specialist on WhatsApp',
      secondaryCta: 'View plans and pricing',
      trustBadges: [
        'Clear pricing & confirmed deliverables',
        '100% White Hat SEO practices',
        'No abusive lock-in contracts',
      ],
      plansHeadingKicker: 'Scope & Investment',
      plansTitle: 'Choose the ideal plan for your current business stage',
      plansSubtitle: 'Transparent pricing and clearly defined deliverables without hidden surprises or unexpected extra fees.',
      deliverablesLabel: 'Included deliverables in this plan:',
      contractButton: 'Get Started on WhatsApp',
      whyHeadingKicker: 'Core Principles',
      whyTitle: 'Why a consistent SEO strategy outperforms temporary shortcuts',
      whySubtitle: 'Unlike paid advertising that stops the instant ad spend dries up, organic authority builds an enduring equity asset for your domain.',
      whyCards: [
        {
          title: 'Qualified Organic Traffic',
          description: 'Users searching on Google have active purchasing intent. Your business appears right when they are seeking solutions.',
        },
        {
          title: 'Natural Authority & Trust',
          description: 'Searchers regard top organic listings as impartial badges of authority from Google, instilling immediate customer confidence.',
        },
        {
          title: 'Reduced Customer Acquisition Cost',
          description: 'By complementing paid ads with organic rankings, your business diversifies acquisition channels and shields margins.',
        },
      ],
      faqKicker: 'Frequently Asked Questions',
      faqTitle: 'Frequently Asked Questions about our SEO Plans',
      faqSubtitle: 'Honest, technical, and direct answers to common questions about our search engine optimization services.',
      faqs: [
        {
          question: 'How long does it take to see tangible SEO results?',
          answer: 'SEO is an organic medium-to-long term investment. Initial indexing improvements and keyword upward trends typically manifest within 3 to 6 months of steady execution, depending on niche competitiveness and domain history.',
        },
        {
          question: 'Do you guarantee a #1 ranking on Google?',
          answer: 'No, and no ethical agency can make that promise. Google uses hundreds of algorithmic factors that update constantly. Our team applies industry-standard best practices to maximize your ranking potential and business relevance.',
        },
        {
          question: 'What is the difference between an Audit and Monthly Plans?',
          answer: 'An SEO Audit is a comprehensive, one-time deep diagnostic mapping all technical bottlenecks and opportunities with an actionable roadmap. Monthly plans involve active execution including content creation, link building, and on-page optimization.',
        },
        {
          question: 'What are backlinks and why are they important?',
          answer: 'Backlinks are inbound links from reputable external websites to yours. Search engines interpret authoritative backlinks as votes of trust, passing domain authority and boosting keyword rankings.',
        },
      ],
      bottomCtaTitle: 'Still wondering which plan suits you best?',
      bottomCtaSubtitle: 'Send us your website URL on WhatsApp. We will conduct a quick preliminary audit and recommend the most effective option.',
      bottomCtaButton: 'Speak with a specialist on WhatsApp',
    },
    googleAdsPage: {
      kicker: 'Google Ads for Local Businesses',
      titlePart1: 'Professional campaign setup.',
      titleShimmer: 'Ready to drive WhatsApp inquiries.',
      typewriterLabel: 'Focus on:',
      typewriterPhrases: [
        'Zero wasted budget.',
        'High-intent commercial searches.',
        'Turnkey setup without recurring agency fees.',
      ],
      subtitle: 'Set up your Google Ads account properly from day one. Avoid wasted budget on irrelevant clicks and eliminate forced monthly agency retainers.',
      extraBannerTitle: 'One-Time Delivery Model:',
      extraBannerText: 'This service covers the creation, strategic structuring, initial setup, and post-launch refinement of your account and campaigns. We do not charge recurring monthly management retainers. Your account and data remain 100% yours.',
      primaryCta: 'Request proposal on WhatsApp',
      secondaryCta: 'Explore the stages',
      trustBadges: [
        'No mandatory monthly management fee',
        'Account & data remain 100% your property',
        'Surgical negative keyword protection',
      ],
      problemKicker: 'The Problem & The Solution',
      problemTitle: 'Why do most small businesses lose money on Google Ads?',
      problemParagraphs: [
        'Google Ads is the world’s most powerful intent-driven traffic channel. However, default account settings encourage broad matches that rapidly consume your budget on unqualified search queries.',
        'When a business launches ads without robust negative keyword lists and strict geographic fences, up to 70% of the media spend is wasted on job seekers, free tutorials, or irrelevant searches.',
        'Our role is to shield your budget, configure exact transactional keywords, and deliver an efficient, streamlined campaign structure.',
      ],
      benefitsHeading: 'What a well-structured account delivers:',
      benefitsList: [
        {
          title: 'Laser Focus on Transactional Searches',
          description: 'Appear exclusively in front of prospects actively seeking to hire your service in your target service radius.',
        },
        {
          title: 'Negative Keyword Shielding',
          description: 'Hundreds of pre-configured negative keywords preventing unqualified clicks from eating up your daily balance.',
        },
        {
          title: 'Accurate Conversion Tracking',
          description: 'Properly implemented tracking for WhatsApp and phone clicks so you know exactly which keywords produce real leads.',
        },
      ],
      stagesKicker: 'Workflow Stages',
      stagesTitle: 'How we build your campaign from scratch to launch',
      stagesSubtitle: 'A transparent four-stage roadmap with clear technical milestones.',
      stages: [
        {
          number: '01',
          title: 'Google Ads account setup or audit',
          description: 'Proper billing configuration, administrator access delegation, and linkage with Google Analytics and Tag Manager.',
        },
        {
          number: '02',
          title: 'Strategic campaign & keyword structuring',
          description: 'Thematic ad groups, negative keyword research to prevent wasted spend, and precise geographic fencing.',
        },
        {
          number: '03',
          title: 'Responsive ad copywriting & asset creation',
          description: 'High-performing responsive search ads with engaging headlines, sitelinks, callouts, and location extensions.',
        },
        {
          number: '04',
          title: 'Initial optimization & handover',
          description: 'Initial bid tuning, conversion tag testing, and delivery of a turnkey account ready to generate revenue.',
        },
      ],
      boundariesKicker: 'Scope Transparency',
      boundariesTitle: 'What is included and the exact service boundaries',
      boundariesSubtitle: 'We pride ourselves on commercial honesty. Here is exactly what we provide and what remains client responsibility.',
      boundaries: [
        { isIncluded: true, text: 'Google Ads account creation whenever needed' },
        { isIncluded: true, text: 'Full structure of thematic ad groups and high-intent keywords' },
        { isIncluded: true, text: 'Initial conversion tracking tag configuration' },
        { isIncluded: true, text: 'Post-launch search term refinement after initial impressions' },
        { isIncluded: false, text: 'Does NOT include ongoing monthly agency retainers or daily management' },
        { isIncluded: false, text: 'Does NOT include Google ad spend (media budget is paid directly by the client to Google)' },
        { isIncluded: false, text: 'Does NOT make unrealistic guarantees of fixed revenue, minimum leads, or preset CPA' },
      ],
      faqKicker: 'Common Questions',
      faqTitle: 'Frequently Asked Questions about Google Ads Setup',
      faqSubtitle: 'Important points to understand before starting your campaign setup.',
      faqs: [
        {
          question: 'Does this service include monthly ongoing management?',
          answer: 'No. This service focuses on professional account architecture, creation, and initial calibration. The objective is to provide a turnkey campaign ready to run without locking you into monthly agency retainers.',
        },
        {
          question: 'Is the ad budget paid to Google included in the fee?',
          answer: 'No. The fee paid to Auditoria SEO covers technical labor and campaign structuring. Your media budget is paid directly to Google Ads via your credit card or billing profile.',
        },
        {
          question: 'How do I know what daily budget I should set?',
          answer: 'During our initial onboarding review, we analyze average cost-per-click rates in your industry and recommend a realistic daily budget aligned with your goals.',
        },
        {
          question: 'Do campaigns begin generating leads immediately upon launch?',
          answer: 'As soon as Google reviews and approves the ads, your business begins receiving impressions from high-intent searches. Lead volume depends on offer competitiveness and page speed.',
        },
      ],
      bottomCtaTitle: 'Ready to configure your Google Ads with technical precision?',
      bottomCtaSubtitle: 'Speak directly with our team on WhatsApp. We will evaluate your market and tailor an optimal campaign blueprint.',
      bottomCtaButton: 'Request proposal on WhatsApp',
    },
    modernizationPage: {
      kicker: 'Website Modernization & Web Infrastructure',
      titlePart1: 'Is your website outdated, slow, or technically limited?',
      titleShimmer: 'We modernize it with secure, high-performance architecture.',
      typewriterLabel: 'Focus on:',
      typewriterPhrases: [
        'Modern and secure rebuilding.',
        'Global Cloudflare infrastructure.',
        'Ongoing maintenance and support.',
      ],
      subtitle: 'Modernization, rebuilding, seamless migration, edge cloud hosting, and recurring maintenance for businesses in Brazil, Latin America, and internationally demanding speed, uptime, and real security.',
      primaryCta: 'Request website technical assessment',
      secondaryCta: 'Explore our solutions',
      trustBadges: [
        'Initial technical assessment with no obligation',
        'Clean architecture without legacy bloat',
        'Serving Brazil, Latin America & International',
      ],
      positioningAlert: {
        title: 'Technical Positioning & Honest Transparency:',
        text: 'We do not claim that every website must migrate to Cloudflare or that migration alone guarantees miracles. Every project undergoes a thorough audit to select the right technical path: from a smooth infrastructure migration to a complete rebuild when the legacy foundation no longer supports growth.',
      },
      pillarsKicker: 'Specialized Capabilities',
      pillarsTitle: 'Comprehensive solutions for every stage of your website',
      pillarsSubtitle: 'We clearly differentiate website rebuilding, migration, edge hosting, and ongoing maintenance.',
      pillars: [
        {
          id: 'rebuilding',
          title: 'Full Website Rebuilding',
          tagline: 'For legacy websites locked in slow CMS themes, monolithic bloat, or outdated code that cannot be salvaged.',
          description: 'We build a 100% new, modular, lightweight, and modern web application. Clean semantic code, sub-second load times, and an optimal browsing experience on every screen size.',
          benefits: [
            'Total elimination of bloated themes and conflicting plugins',
            'Modern frontend architecture using React, Vite, or static JAMstack',
            'Sub-second loading times achieving green Core Web Vitals',
            'Contemporary design aligned with your brand identity and authority',
            'Technical SEO engineered into the codebase from day one',
          ],
          highlighted: true,
        },
        {
          id: 'migration',
          title: 'Technical Migration Without Rebuilding',
          tagline: 'For websites whose design still functions well, but suffer from sluggish or unreliable hosting servers.',
          description: 'We securely transfer your files, databases, DNS records, and SSL certificates to modern cloud infrastructure, preserving 100% of your existing content, URLs, and organic rankings.',
          benefits: [
            'Thorough URL mapping to prevent broken links and 404 errors',
            'Seamless transition with zero downtime during the cutover',
            'Pre-migration database and asset compression and cleanup',
            'Assisted DNS cutover with instant global propagation',
            'Comprehensive post-launch testing of contact forms and lead funnels',
          ],
        },
        {
          id: 'hosting',
          title: 'Cloudflare Edge Hosting & Infrastructure',
          tagline: 'Deployment and distribution across the world’s fastest and most secure edge network.',
          description: 'We publish your site on Cloudflare’s appropriate edge infrastructure (Pages, Workers, Cache, and CDN), serving content closer to your visitors across 300+ global cities with built-in DDoS defense.',
          benefits: [
            'Global edge distribution with ultra-low latency in Brazil & Latin America',
            'Managed SSL/TLS certificate with modern HTTPS encryption',
            'Native enterprise protection against DDoS attacks and brute force',
            'Intelligent edge caching rules and modern Brotli/WebP compression',
            'Native CI/CD pipeline integration with Git and GitHub repositories',
          ],
        },
        {
          id: 'maintenance',
          title: 'Recurring Technical Maintenance',
          tagline: 'Preventive monitoring to ensure stability, security, and responsive technical support.',
          description: 'Your website will not be abandoned post-launch. We oversee security patches, broken link monitoring, uptime verification, and provide priority assistance per your plan agreement.',
          benefits: [
            '24/7 continuous availability and uptime monitoring',
            'Routine audits for broken links and 5xx server errors',
            'Prompt application of security patches and dependency updates',
            'Scheduled automated backups with fast disaster recovery',
            'Direct technical support channel for inquiries and adjustments',
          ],
        },
        {
          id: 'security-performance',
          title: 'Security, HTTPS & Core Web Vitals',
          tagline: 'Technical hardening and deep optimization for top-tier Google speed ratings.',
          description: 'We calibrate HTTP security headers (HSTS, CSP), eliminate render-blocking assets, and guarantee top-percentile scores on Google PageSpeed Insights.',
          benefits: [
            'Scores near 100 on both mobile and desktop PageSpeed Insights',
            'Modern visual asset optimization (WebP/AVIF format and aspect-ratio)',
            'Strict security header configuration protecting against exploits',
            'Drastic reduction of Cumulative Layout Shift (CLS) and LCP',
            'Full compliance with Google Page Experience algorithm standards',
          ],
        },
        {
          id: 'evaluation',
          title: 'Initial Technical Diagnostic',
          tagline: 'An honest, transparent audit to identify the most cost-effective solution for your site.',
          description: 'Before any commitment, we examine your current website: server response times, tech stack, vulnerabilities, and SEO bottlenecks. We tell you frankly whether you need a rebuild, a migration, or simple optimizations.',
          benefits: [
            'Real performance and server bottleneck analysis',
            'Security audit including SSL certificates and vulnerabilities',
            'Unbiased recommendation based on best return on investment',
            'No pushy sales or unnecessary services',
            'Executive summary report with prioritized action items',
          ],
        },
      ],
      marketsKicker: 'International Reach',
      marketsTitle: 'Projects for Brazil, Latin America, and Global Clients',
      marketsSubtitle: 'We actively serve enterprises across Brazil, Paraguay, Argentina, and Chile, alongside global international clients in English.',
      markets: [
        {
          region: 'Brazil',
          description: 'Full commercial and technical consulting in Portuguese, tailored to local market requirements and payment methods.',
          tags: ['São Paulo', 'Campinas & Region', 'Nationwide'],
        },
        {
          region: 'Paraguay, Argentina & Chile',
          description: 'Fluent communication in Spanish, understanding regional infrastructure, business dynamics, and southern cone markets.',
          tags: ['Asunción', 'Buenos Aires', 'Santiago', 'Southern Cone'],
        },
        {
          region: 'Global Scale (English)',
          description: 'Bilingual and trilingual web architectures prepared for global internationalization with proper hreflang and worldwide CDN delivery.',
          tags: ['United States', 'Europe', 'Global'],
        },
      ],
      processKicker: 'Transparent Methodology',
      processTitle: 'How website modernization or migration works',
      processSubtitle: 'A structured roadmap with clear milestones, predictable timelines, and zero surprises.',
      processSteps: [
        {
          number: '01',
          title: 'Diagnostic & Technical Discovery',
          description: 'We audit the existing website, hosting access, DNS records, and determine whether rebuilding or migration is the most viable path.',
        },
        {
          number: '02',
          title: 'Architecture Blueprint & Proposal',
          description: 'We present a detailed technical proposal with deliverables, chosen technology stack, and an achievable deployment plan.',
        },
        {
          number: '03',
          title: 'Development, Migration & Staging Tests',
          description: 'We build or migrate the environment on a private staging server, rigorously validating forms, responsiveness, and speed.',
        },
        {
          number: '04',
          title: 'DNS Cutover, Deployment & Ongoing Support',
          description: 'We execute the production cutover with thorough uptime verification, SSL validation, and initiate agreed ongoing support.',
        },
      ],
      technicalClarificationsKicker: 'Scope Clarification',
      technicalClarificationsTitle: 'Key distinctions between our service options',
      technicalClarificationsSubtitle: 'Understand clearly what each solution provides so you can make the best decision for your company.',
      clarifications: [
        {
          title: 'Hosting vs. Rebuilding',
          description: 'Cloudflare edge hosting delivers high-speed global asset delivery and DDoS defense. Rebuilding writes clean, modern application code from the ground up to replace bloated legacy themes.',
        },
        {
          title: 'Migration vs. Maintenance',
          description: 'Migration is a one-time project safely transferring files and databases from an old server to a modern cloud host. Maintenance is ongoing recurring oversight for security, stability, and updates.',
        },
        {
          title: 'The Real Role of Cloudflare',
          description: 'Cloudflare is a world-class edge security and distribution platform. However, it cannot fix poorly written code by itself. We combine enterprise infrastructure with pristine, lightweight code.',
        },
        {
          title: 'Custom Evaluation Without Fabricated Prices',
          description: 'Every legacy site possesses unique scale, plugins, and dependencies. We do not publish fake pricing tables. We review your site and provide a realistic, tailored quote.',
        },
      ],
      faqKicker: 'Frequently Asked Questions',
      faqTitle: 'Questions about Modernization, Migration & Hosting',
      faqSubtitle: 'Clear answers on timelines, requirements, and technical workflows.',
      faqs: [
        {
          question: 'Will my website experience downtime during the modernization or migration?',
          answer: 'No. All development and migration tasks occur in an isolated staging environment. Your current website stays 100% online until the new version is verified and DNS cutover happens in minutes.',
        },
        {
          question: 'Do you work with WordPress or other legacy CMS platforms?',
          answer: 'Yes. We audit your existing installation. If your WordPress site is viable, we can migrate and optimize it. If it is severely bloated, slow, or compromised, we recommend rebuilding with modern, static architecture.',
        },
        {
          question: 'How do you coordinate with clients in Paraguay, Argentina, or Chile?',
          answer: 'We operate remotely with fluid communication in Spanish via WhatsApp, video meetings, and email, aligning with your local business hours and payment requirements.',
        },
        {
          question: 'What happens to our corporate email accounts during DNS cutover?',
          answer: 'Your email accounts are never disrupted. When managing DNS, we strictly preserve all existing MX, SPF, DKIM, and DMARC records for your provider (Google Workspace, Microsoft 365, etc.).',
        },
      ],
      bottomCtaTitle: 'Ready to modernize your website or upgrade infrastructure?',
      bottomCtaSubtitle: 'Send us your current website link on WhatsApp. We will conduct a preliminary assessment and recommend the ideal path.',
      bottomCtaButton: 'Request assessment on WhatsApp',
    },
    blog: {
      heroKicker: 'Articles & Topical Authority',
      heroCategoryBadge: 'Strategic Content',
      heroTitle: 'Practical Strategies for SEO, Conversion, and Sustainable Traffic',
      heroSubtitle: 'In-depth, real-world guides on Google search visibility, high-speed page optimization, and consistent lead generation.',
      filterLabel: 'Filter by:',
      filterAll: 'All',
      loading: 'Loading blog articles...',
      noPosts: 'No articles found in this category at the moment.',
      minRead: 'min read',
      readArticle: 'Read article',
      backToAll: 'Back to all articles',
      inThisArticle: 'In this article:',
      nextStrategicStep: 'Next strategic step',
      nextStrategicText: 'Want to assess your website technical health or dominate Google Maps?',
      nextStrategicCta: 'Explore our SEO plans',
      relatedTopics: 'Related topics:',
      recommendedArticles: 'Recommended Articles',
      notFoundTitle: 'Article not found',
      notFoundText: 'The requested article is not available or the URL has changed.',
      notFoundBack: 'Back to blog',
    },
    footer: {
      description: 'High-converting landing pages, Local SEO, and Google Ads campaign setup for businesses and independent professionals.',
      officialMaps: 'Official Google Maps Profile',
      navHeading: 'Navigation',
      servicesHeading: 'Specialized Services',
      copyright: 'Auditoria SEO. All rights reserved.',
      whiteHat: 'Ethical White Hat SEO practices',
      coverage: 'Brazil & Latin America · International Service',
    },
  },
};
