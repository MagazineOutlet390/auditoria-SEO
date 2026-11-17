import { Language } from './types';

export interface AuditProduct {
  id: 'diagnostico-seo' | 'auditoria-seo-estrategica' | 'auditoria-seo-360';
  eyebrow: string;
  name: string;
  positioning: string;
  deliverables: string[];
  ctaLabel: string;
  whatsappMessage: string;
  featured?: boolean;
}

export interface RecurringPlan {
  id: 'seo-essencial' | 'seo-performance' | 'seo-authority';
  badge?: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  objectiveLabel: string;
  objective: string;
  ctaLabel: string;
  whatsappMessage: string;
  recommended?: boolean;
  premium?: boolean;
}

export interface ComparisonRow {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
}

export interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

export interface ComplementaryService {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  internalRouteKey?: 'googleAds' | 'modernization';
  internalRouteLabel?: string;
}

export interface HomeCommercialContent {
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
  modalities: {
    kicker: string;
    title: string;
    subtitle: string;
    auditCard: {
      eyebrow: string;
      title: string;
      description: string;
      bullets: string[];
      ctaLabel: string;
    };
    recurringCard: {
      eyebrow: string;
      title: string;
      description: string;
      bullets: string[];
      ctaLabel: string;
    };
    differenceTitle: string;
    differenceText: string;
  };
  auditsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    punctuationNote: string;
    deliverablesLabel: string;
    showAllLabel: string;
    showLessLabel: string;
    items: AuditProduct[];
    comparisonTitle: string;
    comparisonSubtitle: string;
    comparisonColumns: [string, string, string];
    comparisonRows: ComparisonRow[];
  };
  plansSection: {
    kicker: string;
    title: string;
    subtitle: string;
    proposalNote: string;
    deliverablesLabel: string;
    showAllLabel: string;
    showLessLabel: string;
    plans: RecurringPlan[];
    comparisonTitle: string;
    comparisonSubtitle: string;
    comparisonColumns: [string, string, string];
    comparisonGroups: ComparisonGroup[];
  };
  localSeoSection: {
    kicker: string;
    title: string;
    description: string;
    frontsTitle: string;
    fronts: string[];
    eligibilityNote: string;
    ctaButton: string;
  };
  additionalServices: {
    kicker: string;
    title: string;
    subtitle: string;
    scopeNote: string;
    items: ComplementaryService[];
  };
  methodology: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: Array<{ step: string; title: string; description: string }>;
    differentialsTitle: string;
    differentials: Array<{ title: string; description: string }>;
    specialistEyebrow: string;
    specialistName: string;
    specialistRole: string;
    specialistBio: string;
    specialistWhatsappLabel: string;
    specialistMapsLabel: string;
  };
  faqsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  proposalForm: {
    kicker: string;
    title: string;
    subtitle: string;
    sideTitle: string;
    sideDescription: string;
    sideHighlights: string[];
    directWhatsappButton: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      websiteLabel: string;
      websitePlaceholder: string;
      countryLabel: string;
      countryPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
    };
    serviceOptions: string[];
    errors: {
      nameRequired: string;
      companyRequired: string;
      websiteInvalid: string;
      countryRequired: string;
      serviceRequired: string;
      notesRequired: string;
    };
    submitButton: string;
    successTitle: string;
    successText: string;
    openWhatsappSummary: string;
    resetButton: string;
  };
  bottomCta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const HOME_COMMERCIAL_CONTENT: Record<Language, HomeCommercialContent> = {
  pt: {
    hero: {
      kicker: 'Auditoria SEO Especializada & Consultoria Técnica',
      titlePart1: 'Auditoria SEO técnica feita por especialista.',
      titleShimmer: 'Diagnóstico completo e plano de ação priorizado.',
      typewriterLabel: 'Frentes de trabalho:',
      typewriterPhrases: [
        'Auditoria SEO técnica, rastreamento e indexação.',
        'Consultoria SEO e arquitetura para negócios.',
        'Planos recorrentes com execução e conteúdo.',
      ],
      subtitle:
        'Unimos diagnóstico técnico aprofundado, inteligência competitiva e execução White Hat em duas linhas de atuação: auditorias SEO pontuais e planos contínuos de crescimento orgânico, sempre sob proposta personalizada para o estágio do seu projeto.',
      primaryCta: 'Solicitar uma Auditoria SEO',
      secondaryCta: 'Conhecer os Planos de SEO',
      trustBadges: [
        'Especialização técnica e análise baseada em dados',
        'Metodologia 100% White Hat SEO',
        'Proposta personalizada por escopo do projeto',
      ],
    },
    modalities: {
      kicker: 'Estrutura de Atendimento',
      title: 'Duas linhas independentes para diagnosticar e evoluir seu SEO',
      subtitle:
        'Estruturamos os serviços para atender desde empresas que precisam primeiro enxergar gargalos reais até negócios prontos para execução técnica e editorial contínua.',
      auditCard: {
        eyebrow: 'Linha 1 · Projetos Pontuais',
        title: 'Auditorias SEO Profissionais',
        description:
          'Projetos com início, análise aprofundada e entrega definida. Indicados quando sua empresa precisa identificar bloqueios técnicos, erros de indexação, canibalização ou lacunas frente aos concorrentes sem assumir um contrato mensal.',
        bullets: [
          'Diagnóstico detalhado com relatório técnico e prioridades claras.',
          'Ideal para sua própria equipe executar ou validar antes de investir em recorrência.',
          'Três níveis de profundidade: Diagnóstico SEO, Estratégica e Auditoria SEO 360º.',
        ],
        ctaLabel: 'Comparar Auditorias SEO',
      },
      recurringCard: {
        eyebrow: 'Linha 2 · Acompanhamento Mensal',
        title: 'Planos Recorrentes de SEO',
        description:
          'Serviço contínuo que combina monitoramento constante, correções técnicas, otimização de páginas existentes, produção de artigos estratégicos, fortalecimento de autoridade e evolução de SEO Local quando aplicável.',
        bullets: [
          'Execução mensal planejada em cima de dados reais de busca e concorrência.',
          'Progresso sustentável orientado a tráfego qualificado e oportunidades comerciais.',
          'Três modalidades escaláveis: SEO Essencial, SEO Performance e SEO Authority.',
        ],
        ctaLabel: 'Comparar Planos Recorrentes',
      },
      differenceTitle: 'Qual a diferença prática entre contratar uma auditoria e um plano recorrente?',
      differenceText:
        'A auditoria entrega o diagnóstico completo e o mapa de prioridades — é um projeto pontual, sem mensalidade. Já o plano recorrente assume a execução contínua mês a mês: implementar correções, publicar conteúdos novos, construir autoridade e acompanhar resultados ao longo do tempo.',
    },
    auditsSection: {
      kicker: 'Linha 1 · Projetos Pontuais',
      title: 'Auditorias SEO Profissionais',
      subtitle:
        'Cada auditoria tem escopo fechado, execução humana conduzida por especialista e entrega prática — nunca exportações automáticas de ferramentas sem contexto.',
      punctuationNote:
        'Importante: todas as auditorias abaixo são projetos pontuais com início, análise e entrega definidos. Não são contratos mensais.',
      deliverablesLabel: 'Entregáveis inclusos:',
      showAllLabel: 'Ver lista completa de entregáveis',
      showLessLabel: 'Recolher detalhes',
      items: [
        {
          id: 'diagnostico-seo',
          eyebrow: 'Projeto Pontual · Nível Inicial',
          name: 'Diagnóstico SEO',
          positioning:
            'Para empresas que precisam identificar problemas e oportunidades de melhoria no Google.',
          deliverables: [
            'Análise técnica inicial',
            'Verificação de indexação e rastreamento',
            'Análise On-Page',
            'Pesquisa inicial de palavras-chave',
            'Análise dos principais concorrentes',
            'Identificação de problemas prioritários',
            'Relatório de diagnóstico',
            'Recomendações iniciais',
          ],
          ctaLabel: 'Solicitar Diagnóstico SEO',
          whatsappMessage:
            'Olá! Gostaria de solicitar uma proposta para o Diagnóstico SEO (auditoria pontual) para o meu site.',
        },
        {
          id: 'auditoria-seo-estrategica',
          eyebrow: 'Projeto Pontual · Aprofundado',
          name: 'Auditoria SEO Estratégica',
          featured: true,
          positioning:
            'Para empresas que precisam de uma análise aprofundada e de um planejamento estratégico de otimização.',
          deliverables: [
            'Auditoria técnica aprofundada',
            'Análise de arquitetura do site',
            'Análise On-Page',
            'Pesquisa de palavras-chave e intenção de busca',
            'Análise de concorrência',
            'Análise de backlinks e autoridade',
            'Identificação de canibalização',
            'Avaliação de Core Web Vitals',
            'Análise de conteúdo e cobertura semântica',
            'Plano de ação priorizado',
            'Reunião de apresentação',
          ],
          ctaLabel: 'Solicitar Auditoria Estratégica',
          whatsappMessage:
            'Olá! Tenho interesse na Auditoria SEO Estratégica para analisar meu site em profundidade. Como funciona a proposta?',
        },
        {
          id: 'auditoria-seo-360',
          eyebrow: 'Projeto Pontual · Inteligência Completa',
          name: 'Auditoria SEO 360º',
          positioning:
            'Para empresas que precisam de inteligência competitiva, diagnóstico abrangente e planejamento de crescimento orgânico.',
          deliverables: [
            'Auditoria técnica completa',
            'Análise aprofundada de concorrentes',
            'Keyword Gap',
            'Content Gap',
            'Análise de autoridade e perfil de backlinks',
            'Análise de arquitetura e distribuição de autoridade interna',
            'Análise de conteúdo e E-E-A-T',
            'Avaliação de SEO Local, quando aplicável',
            'Avaliação de SEO internacional, quando aplicável',
            'Análise de oportunidades comerciais',
            'Avaliação de experiência do usuário e conversão',
            'Estratégia de crescimento orgânico',
            'Roadmap estratégico de 90 dias',
            'Priorização por impacto e esforço',
            'Apresentação executiva',
            'Reunião de acompanhamento',
          ],
          ctaLabel: 'Solicitar Auditoria SEO 360º',
          whatsappMessage:
            'Olá! Gostaria de solicitar uma proposta personalizada para a Auditoria SEO 360º do nosso domínio.',
        },
      ],
      comparisonTitle: 'Comparativo das Auditorias SEO',
      comparisonSubtitle:
        'Visualize rapidamente o avanço de profundidade técnica, inteligência competitiva e planejamento entre os três formatos.',
      comparisonColumns: ['Diagnóstico SEO', 'Auditoria Estratégica', 'Auditoria SEO 360º'],
      comparisonRows: [
        { label: 'Indexação, rastreamento e On-Page', values: ['Inicial', 'Aprofundada', 'Completa'] },
        { label: 'Arquitetura do site e Core Web Vitals', values: [false, true, true] },
        { label: 'Palavras-chave, intenção e canibalização', values: ['Pesquisa inicial', true, 'Completo + Keyword Gap'] },
        { label: 'Análise de backlinks e autoridade', values: [false, true, true] },
        { label: 'Cobertura semântica, Content Gap e E-E-A-T', values: [false, 'Cobertura semântica', 'Content Gap + E-E-A-T'] },
        { label: 'SEO Local e Internacional (quando aplicável)', values: [false, false, true] },
        { label: 'Experiência do usuário, conversão e oportunidades comerciais', values: [false, false, true] },
        { label: 'Entregável e reunião', values: ['Relatório inicial', 'Plano priorizado + 1 reunião', 'Roadmap 90 dias + Executiva + Acompanhamento'] },
      ],
    },
    plansSection: {
      kicker: 'Linha 2 · Acompanhamento Recorrente',
      title: 'Planos Recorrentes de SEO',
      subtitle:
        'Execução técnica, produção de conteúdo, autoridade e acompanhamento contínuo. Os valores são definidos conforme tamanho do site, mercado e complexidade mediante proposta personalizada.',
      proposalNote:
        'Todos os planos têm escopo personalizado conforme as características do projeto — sem pacotes engessados nem cobranças ocultas.',
      deliverablesLabel: 'Entregas mensais e recorrentes:',
      showAllLabel: 'Ver todas as entregas do plano',
      showLessLabel: 'Recolher entregas',
      plans: [
        {
          id: 'seo-essencial',
          name: 'SEO Essencial',
          headline: 'Construa sua presença orgânica.',
          description:
            'Para empresas que precisam estruturar, corrigir e manter sua presença nos resultados orgânicos do Google.',
          deliverables: [
            'Monitoramento de até 15 palavras-chave',
            'Monitoramento de até 20 URLs prioritárias',
            'Monitoramento e correções técnicas prioritárias',
            'Otimização de até 2 páginas mensais',
            'Produção e publicação de 1 artigo mensal',
            'Artigo com até aproximadamente 1.200 palavras',
            'Pesquisa de palavras-chave',
            'Otimização de títulos, descrições e headings',
            'Otimização de links internos',
            'Monitoramento de indexação',
            'Análise de 2 concorrentes',
            'Gestão de 1 Perfil da Empresa no Google, quando aplicável',
            'Até 2 publicações mensais no Google Business Profile',
            'Relatório mensal',
            'Reunião trimestral',
          ],
          objectiveLabel: 'Objetivo',
          objective: 'Melhorar a qualidade técnica do site e ampliar sua visibilidade orgânica.',
          ctaLabel: 'Solicitar proposta personalizada',
          whatsappMessage:
            'Olá! Gostaria de solicitar uma proposta personalizada para o plano recorrente SEO Essencial.',
        },
        {
          id: 'seo-performance',
          badge: 'Plano Recomendado',
          recommended: true,
          name: 'SEO Performance',
          headline: 'Transforme visibilidade em oportunidades.',
          description:
            'Para empresas que desejam conquistar posições relevantes, ampliar palavras-chave posicionadas e gerar oportunidades comerciais.',
          deliverables: [
            'Monitoramento de até 40 palavras-chave',
            'Monitoramento de até 50 URLs prioritárias',
            'Otimização técnica contínua',
            'Otimização de até 5 páginas mensais',
            'Produção e publicação de 2 artigos mensais',
            'Artigos com até aproximadamente 1.500 palavras cada',
            'Pesquisa e expansão estratégica de palavras-chave',
            'Mapeamento de intenção de busca',
            'Planejamento editorial SEO',
            'Otimização de páginas comerciais',
            'Análise de Content Gap',
            'Identificação de canibalização',
            'Melhorias na arquitetura do site',
            'Avaliação de Core Web Vitals',
            'Análise de backlinks e oportunidades',
            'Monitoramento de conversões orgânicas',
            'Análise de até 4 concorrentes',
            'Gestão de 1 Perfil da Empresa no Google, quando aplicável',
            'Até 4 publicações mensais no Google Business Profile',
            'Relatório estratégico mensal',
            'Reunião mensal',
          ],
          objectiveLabel: 'Objetivo',
          objective:
            'Transformar o site em um canal consistente de aquisição de tráfego qualificado e geração de negócios.',
          ctaLabel: 'Solicitar proposta personalizada',
          whatsappMessage:
            'Olá! Tenho interesse no plano recomendado SEO Performance e gostaria de solicitar uma proposta personalizada.',
        },
        {
          id: 'seo-authority',
          badge: 'Modalidade Premium',
          premium: true,
          name: 'SEO Authority',
          headline: 'Construa autoridade e competitividade.',
          description:
            'Para empresas que desejam disputar mercados competitivos, fortalecer sua autoridade digital e construir uma presença orgânica relevante.',
          deliverables: [
            'Monitoramento de até 100 palavras-chave',
            'Monitoramento de até 100 URLs prioritárias',
            'Gestão técnica avançada',
            'Otimização de até 10 páginas mensais',
            'Produção e publicação de 4 artigos estratégicos mensais',
            'Artigos com até aproximadamente 1.800 palavras cada',
            'Estratégia de autoridade temática',
            'Planejamento de clusters de conteúdo',
            'Estratégia de E-E-A-T',
            'Análise aprofundada de concorrentes',
            'Keyword Gap e Content Gap',
            'Estratégia de backlinks',
            'Prospecção de oportunidades editoriais',
            'Digital PR',
            'Recuperação de páginas com perda de desempenho',
            'Estratégia avançada de arquitetura',
            'Dados estruturados, quando aplicável',
            'Análise de conversão e CRO',
            'Integração estratégica entre SEO, Google Ads e SEO Local',
            'Planejamento de expansão orgânica',
            'Análise de SEO internacional, quando aplicável',
            'Gestão de 1 Perfil da Empresa no Google, quando aplicável',
            'Até 8 publicações mensais no Google Business Profile',
            'Relatório executivo mensal',
            'Até 2 reuniões mensais',
            'Roadmap estratégico trimestral',
          ],
          objectiveLabel: 'Objetivo',
          objective:
            'Construir vantagem competitiva orgânica, ampliar autoridade e desenvolver um canal sustentável de aquisição de clientes.',
          ctaLabel: 'Solicitar proposta personalizada',
          whatsappMessage:
            'Olá! Gostaria de solicitar uma proposta personalizada para a modalidade premium SEO Authority.',
        },
      ],
      comparisonTitle: 'Comparativo de Entregas dos Planos Recorrentes',
      comparisonSubtitle:
        'Compare por área operacional o volume de acompanhamento, otimização, conteúdo, autoridade e governança em cada plano.',
      comparisonColumns: ['SEO Essencial', 'SEO Performance', 'SEO Authority'],
      comparisonGroups: [
        {
          category: 'Monitoramento e Inteligência Competitiva',
          rows: [
            { label: 'Palavras-chave monitoradas', values: ['Até 15', 'Até 40', 'Até 100'] },
            { label: 'URLs prioritárias monitoradas', values: ['Até 20', 'Até 50', 'Até 100'] },
            { label: 'Análise de concorrentes', values: ['2 concorrentes', 'Até 4 concorrentes', 'Aprofundada contínua'] },
            { label: 'Keyword Gap e Content Gap', values: [false, 'Content Gap', 'Keyword Gap + Content Gap'] },
            { label: 'Monitoramento de conversões orgânicas e CRO', values: [false, 'Conversões orgânicas', 'Conversões + CRO'] },
          ],
        },
        {
          category: 'Otimização Técnica e Arquitetura',
          rows: [
            { label: 'Gestão e correções técnicas', values: ['Monitoramento e correções prioritárias', 'Otimização técnica contínua', 'Gestão técnica avançada'] },
            { label: 'Páginas otimizadas por mês', values: ['Até 2 páginas', 'Até 5 páginas', 'Até 10 páginas'] },
            { label: 'Arquitetura, canibalização e Core Web Vitals', values: ['Títulos, headings e links internos', 'Arquitetura, canibalização e CWV', 'Arquitetura avançada + dados estruturados'] },
            { label: 'Recuperação de páginas com perda de desempenho', values: [false, false, true] },
          ],
        },
        {
          category: 'Conteúdo, Autoridade Temática e Backlinks',
          rows: [
            { label: 'Artigos estratégicos por mês', values: ['1 artigo (~1.200 palavras)', '2 artigos (~1.500 palavras cada)', '4 artigos (~1.800 palavras cada)'] },
            { label: 'Planejamento editorial, clusters e E-E-A-T', values: ['Pesquisa de palavras-chave', 'Mapeamento de intenção e editorial SEO', 'Clusters, autoridade temática e E-E-A-T'] },
            { label: 'Estratégia de backlinks e Digital PR', values: [false, 'Análise de backlinks e oportunidades', 'Backlinks, prospecção editorial e Digital PR'] },
          ],
        },
        {
          category: 'SEO Local & Google Business Profile (quando elegível)',
          rows: [
            { label: 'Gestão de Perfil da Empresa no Google', values: ['1 perfil (se aplicável)', '1 perfil (se aplicável)', '1 perfil (se aplicável)'] },
            { label: 'Publicações mensais no Google Business Profile', values: ['Até 2 publicações', 'Até 4 publicações', 'Até 8 publicações'] },
          ],
        },
        {
          category: 'Governança, Expansão e Reuniões',
          rows: [
            { label: 'Integração SEO + Ads + Local e SEO Internacional', values: [false, false, 'Integração completa e internacional (se aplicável)'] },
            { label: 'Relatórios e alinhamento', values: ['Relatório mensal · Reunião trimestral', 'Relatório estratégico · Reunião mensal', 'Relatório executivo · Até 2 reuniões/mês · Roadmap trimestral'] },
          ],
        },
      ],
    },
    localSeoSection: {
      kicker: 'Presença Geográfica & Google Maps',
      title: 'SEO Local e Google Business Profile integrados aos planos elegíveis',
      description:
        'Para negócios com atendimento presencial ou área de cobertura regional, o Perfil da Empresa no Google (Google Business Profile) atua em conjunto com as páginas do site nos três planos recorrentes.',
      frontsTitle: 'Frentes trabalhadas no perfil local:',
      fronts: [
        'Otimização consistente de informações comerciais (NAP, horários e atributos).',
        'Estruturação de categorias principais, secundárias e catálogo de serviços.',
        'Redação e refinamento da descrição comercial do negócio.',
        'Publicações regulares com foco em novidades e serviços prioritários.',
        'Acompanhamento de métricas e desempenho de interações locais.',
        'Estratégia de relevância e presença geográfica alinhada ao site.',
      ],
      eligibilityNote:
        'Critério de elegibilidade: o Google Business Profile não é apresentado como obrigatório para empresas exclusivamente digitais ou modelos sem elegibilidade pelas diretrizes do Google. Quando não aplicável, essa frente é convertida em atividades adicionais de SEO orgânico dentro do mesmo escopo contratado. Nenhuma ação envolve promessas artificiais de posição no Local Pack ou no Google Maps.',
      ctaButton: 'Explorar página dedicada de SEO Local',
    },
    additionalServices: {
      kicker: 'Projetos Independentes & Demandas Especiais',
      title: 'Serviços Complementares',
      subtitle:
        'Frentes especializadas contratadas separadamente ou adicionadas sob demanda conforme o momento do projeto.',
      scopeNote:
        'Os serviços abaixo são contratados à parte ou mediante escopo específico — não estão incluídos automaticamente em todos os planos de SEO.',
      items: [
        {
          id: 'gestao-google-ads',
          title: 'Gestão de Google Ads',
          description:
            'Acompanhamento recorrente de campanhas de pesquisa, negativação contínua de termos e otimização orientada ao retorno comercial.',
          ctaLabel: 'Consultar gestão de Ads',
          whatsappMessage: 'Olá! Gostaria de consultar informações sobre o serviço complementar de Gestão de Google Ads.',
        },
        {
          id: 'consultoria-google-ads',
          title: 'Consultoria de Google Ads',
          description:
            'Estruturação inicial profissional da conta, grupos temáticos, palavras negativas e configuração de conversões sem mensalidade fixa.',
          ctaLabel: 'Consultar consultoria Ads',
          whatsappMessage: 'Olá! Tenho interesse na Consultoria / Estruturação de Google Ads.',
          internalRouteKey: 'googleAds',
          internalRouteLabel: 'Ver página de Google Ads',
        },
        {
          id: 'reconstrucao-sites',
          title: 'Reconstrução de sites antigos em arquitetura moderna',
          description:
            'Reestruturação completa de sites lentos ou legados preservando URLs estratégicas e corrigindo base técnica de renderização e mobile.',
          ctaLabel: 'Consultar reconstrução',
          whatsappMessage: 'Olá! Gostaria de avaliar a reconstrução do nosso site atual em arquitetura moderna.',
          internalRouteKey: 'modernization',
          internalRouteLabel: 'Ver modernização de sites',
        },
        {
          id: 'migracao-cloudflare',
          title: 'Migração de sites para Cloudflare',
          description:
            'Implantação em edge network com configuração segura de DNS, regras de cache, HTTPS, redirecionamentos e proteção contra tráfego abusivo.',
          ctaLabel: 'Consultar migração Cloudflare',
          whatsappMessage: 'Olá! Gostaria de consultar sobre migração do nosso site para a infraestrutura Cloudflare.',
        },
        {
          id: 'hospedagem-manutencao',
          title: 'Hospedagem e manutenção',
          description:
            'Operação técnica contínua, monitoramento de disponibilidade, atualizações seguras e suporte para manter o site rápido e estável.',
          ctaLabel: 'Consultar hospedagem',
          whatsappMessage: 'Olá! Tenho interesse em hospedagem e manutenção técnica gerenciada para nosso site.',
        },
        {
          id: 'seo-internacional',
          title: 'SEO internacional',
          description:
            'Arquitetura multilíngue e multirregional, implementação rigorosa de hreflang, canônicas por idioma e planejamento por país.',
          ctaLabel: 'Consultar SEO internacional',
          whatsappMessage: 'Olá! Precisamos de apoio com arquitetura e estratégia de SEO internacional.',
        },
        {
          id: 'link-building-avancado',
          title: 'Estratégia avançada de link building',
          description:
            'Planejamento dedicado de autoridade externa, ativos linkáveis, análise editorial de domínios e prospecção White Hat.',
          ctaLabel: 'Consultar link building',
          whatsappMessage: 'Olá! Gostaria de entender como funciona o projeto dedicado de estratégia avançada de link building.',
        },
        {
          id: 'recuperacao-organica',
          title: 'Projetos especiais de recuperação orgânica',
          description:
            'Investigação forense para quedas bruscas após migrações, atualizações de algoritmo do Google ou problemas severos de indexação.',
          ctaLabel: 'Consultar recuperação orgânica',
          whatsappMessage: 'Olá! Tivemos perda de tráfego orgânico e gostaríamos de avaliar um projeto especial de recuperação.',
        },
      ],
    },
    methodology: {
      kicker: 'Processo & Governança Técnica',
      title: 'Metodologia de trabalho e diferenciais da Auditoria SEO',
      subtitle:
        'Atuamos com método verificável — da coleta técnica de dados à evolução contínua — sem caixas-pretas nem promessas incompatíveis com as diretrizes do Google.',
      steps: [
        {
          step: '01',
          title: 'Diagnóstico e levantamento de dados',
          description:
            'Coleta técnica no Search Console, rastreamento completo das URLs, leitura de logs/respostas HTTP e entendimento dos objetivos comerciais.',
        },
        {
          step: '02',
          title: 'Identificação de problemas e oportunidades',
          description:
            'Mapeamento de bloqueios de indexação, falhas estruturais, canibalização, lacunas de palavras-chave e oportunidades imediatas.',
        },
        {
          step: '03',
          title: 'Planejamento estratégico',
          description:
            'Definição da ordem exata de execução por impacto e esforço, arquitetura de páginas comerciais e calendário editorial alinhado à intenção de busca.',
        },
        {
          step: '04',
          title: 'Execução das otimizações',
          description:
            'Implementação técnica, revisão de metadados, headings, links internos, Core Web Vitals, dados estruturados e correções on-page.',
        },
        {
          step: '05',
          title: 'Produção e otimização de conteúdo',
          description:
            'Criação e atualização de artigos estratégicos e páginas comerciais com profundidade temática, linguagem natural e critérios de E-E-A-T.',
        },
        {
          step: '06',
          title: 'Monitoramento e mensuração',
          description:
            'Acompanhamento de impressões, cliques, indexação, palavras-chave monitoradas e conversões orgânicas com relatórios transparentes.',
        },
        {
          step: '07',
          title: 'Evolução contínua',
          description:
            'Ajustes recorrentes baseados nos dados coletados, expansão de cobertura semântica, defesa de posições conquistadas e novos ciclos de crescimento.',
        },
      ],
      differentialsTitle: 'Pilares da nossa atuação',
      differentials: [
        {
          title: 'Metodologia White Hat SEO',
          description: 'Práticas integralmente alinhadas às políticas oficiais do Google, protegendo o histórico e a reputação do domínio.',
        },
        {
          title: 'Estratégias baseadas em dados',
          description: 'Decisões apoiadas em evidências de Search Console, comportamento da SERP e leitura técnica real — nunca em achismos.',
        },
        {
          title: 'Execução técnica precisa',
          description: 'Conhecimento prático de HTML semântico, renderização, canonicals, redirecionamentos, desempenho e arquitetura.',
        },
        {
          title: 'Transparência nos relatórios',
          description: 'Você acompanha o que foi feito, o que está em andamento e os indicadores reais sem maquiagem de métricas de vaidade.',
        },
        {
          title: 'Foco em resultados comerciais',
          description: 'Prioridade para páginas, termos de pesquisa e melhorias que contribuem para gerar oportunidades reais de negócio.',
        },
        {
          title: 'Estratégias personalizadas',
          description: 'Cada negócio tem mercado, capacidade técnica e concorrência próprios; o plano acompanha essa realidade.',
        },
        {
          title: 'Ausência de promessas artificiais',
          description: 'Não prometemos primeiro lugar no Google nem volumes garantidos de tráfego, pois algoritmos de busca não são controlados por terceiros.',
        },
      ],
      specialistEyebrow: 'Liderança técnica',
      specialistName: 'Wesley Vieira',
      specialistRole: 'Fundador da Auditoria SEO & Especialista em SEO e Tráfego',
      specialistBio:
        'A frente técnica dos diagnósticos e do planejamento estratégico é conduzida diretamente por Wesley Vieira e pela equipe especializada da Auditoria SEO. Trabalhamos com análise manual, clareza na comunicação entre marketing e desenvolvimento e foco em crescimento sustentável.',
      specialistWhatsappLabel: 'Conversar no WhatsApp',
      specialistMapsLabel: 'Ver ficha oficial no Google Maps',
    },
    faqsSection: {
      kicker: 'Esclarecimentos Objetivos',
      title: 'Perguntas Frequentes sobre Auditorias e Planos de SEO',
      subtitle:
        'Respostas diretas sobre escopo, propostas personalizadas, prazos realistas e critérios técnicos.',
      items: [
        {
          question: 'Por que os valores não ficam publicados na página?',
          answer:
            'Cada domínio tem tamanho, histórico técnico, nível de concorrência e complexidade de plataforma distintos. Após avaliar rapidamente a URL e os objetivos da empresa, apresentamos uma proposta comercial personalizada e transparente com escopo exato antes de qualquer contratação.',
        },
        {
          question: 'Qual a diferença entre contratar uma Auditoria SEO e um Plano Recorrente?',
          answer:
            'Diagnóstico SEO, Auditoria SEO Estratégica e Auditoria SEO 360º são projetos pontuais com entrega definida (relatório, plano de ação e reuniões conforme a modalidade), sem contrato mensal. Já os planos SEO Essencial, SEO Performance e SEO Authority envolvem execução mensal contínua de correções, conteúdos, autoridade e monitoramento.',
        },
        {
          question: 'Vocês garantem primeira posição no Google ou no Google Maps?',
          answer:
            'Não. Nenhuma consultoria ética pode garantir posições específicas ou quantidades fixas de visitas, porque o ranqueamento depende de algoritmos do Google em atualização constante e da movimentação dos concorrentes. O que garantimos é aplicação técnica criteriosa, transparência total e execução orientada às melhores práticas.',
        },
        {
          question: 'Empresas digitais sem atendimento físico podem contratar os planos recorrentes?',
          answer:
            'Sim. O Google Business Profile só é gerenciado quando o modelo de negócio é elegível pelas regras do Google. Caso a empresa opere exclusivamente online ou não seja elegível, substituímos essa frente por atividades adicionais de SEO orgânico dentro do mesmo escopo.',
        },
        {
          question: 'Em quanto tempo costumam aparecer os primeiros sinais de evolução?',
          answer:
            'Correções críticas de indexação costumam surtir efeito nas semanas seguintes ao novo rastreamento. Movimentos consistentes de posicionamento e ganho gradual de tráfego orgânico normalmente se consolidam entre 3 e 6 meses de execução contínua, variando conforme a competitividade do setor e o estado inicial do domínio.',
        },
      ],
    },
    proposalForm: {
      kicker: 'Solicite sua Proposta',
      title: 'Avaliação preliminar e proposta personalizada para o seu site',
      subtitle:
        'Preencha os dados essenciais do seu projeto para prepararmos o contexto da análise ou fale diretamente pelo WhatsApp oficial.',
      sideTitle: 'Atendimento direto e técnico',
      sideDescription:
        'Avaliamos sua URL, entendemos se o melhor caminho inicial é uma auditoria pontual ou um plano recorrente e respondemos com uma recomendação objetiva.',
      sideHighlights: [
        'Sem spam e sem roteiros comerciais agressivos.',
        'Atendimento para empresas no Brasil, América Latina e mercados internacionais.',
        'Integração direta com o canal oficial de WhatsApp da Auditoria SEO.',
      ],
      directWhatsappButton: 'Conversar direto no WhatsApp',
      fields: {
        nameLabel: 'Nome completo',
        namePlaceholder: 'Seu nome',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nome da empresa',
        websiteLabel: 'Site atual',
        websitePlaceholder: 'https://suaempresa.com.br',
        countryLabel: 'País',
        countryPlaceholder: 'Ex.: Brasil, México, Portugal, EUA',
        serviceLabel: 'Serviço de interesse',
        servicePlaceholder: 'Selecione uma opção',
        notesLabel: 'Breve descrição da necessidade',
        notesPlaceholder: 'Conte em poucas linhas o momento do site, metas ou principais dificuldades atuais.',
      },
      serviceOptions: [
        'Diagnóstico SEO (Auditoria Pontual)',
        'Auditoria SEO Estratégica (Auditoria Pontual)',
        'Auditoria SEO 360º (Auditoria Pontual)',
        'Plano Recorrente — SEO Essencial',
        'Plano Recorrente — SEO Performance (Recomendado)',
        'Plano Recorrente — SEO Authority (Premium)',
        'Serviços Complementares (Ads, Cloudflare, Migração, etc.)',
        'Ainda não sei — quero uma recomendação inicial',
      ],
      errors: {
        nameRequired: 'Informe seu nome para identificação.',
        companyRequired: 'Informe o nome da sua empresa.',
        websiteInvalid: 'Informe um endereço de site válido (ex.: https://empresa.com.br).',
        countryRequired: 'Informe o país de atuação ou atendimento.',
        serviceRequired: 'Selecione o serviço ou plano de interesse.',
        notesRequired: 'Descreva brevemente sua necessidade (mínimo 10 caracteres).',
      },
      submitButton: 'Solicitar proposta personalizada',
      successTitle: 'Resumo da solicitação preparado com sucesso',
      successText:
        'Os dados foram validados e organizados. Clique abaixo para enviar sua solicitação diretamente no nosso canal oficial de WhatsApp sem precisar repetir as informações.',
      openWhatsappSummary: 'Enviar resumo no WhatsApp agora',
      resetButton: 'Editar dados do formulário',
    },
    bottomCta: {
      title: 'Pronto para identificar o que trava o crescimento orgânico do seu site?',
      subtitle:
        'Envie o endereço do seu domínio pelo WhatsApp ou solicite uma proposta personalizada com o escopo mais adequado ao seu momento.',
      button: 'Solicitar proposta personalizada',
    },
  },

  es: {
    hero: {
      kicker: 'Auditoría SEO Especializada & Consultoría Técnica',
      titlePart1: 'Auditoría SEO técnica realizada por especialista.',
      titleShimmer: 'Diagnóstico completo y plan de acción priorizado.',
      typewriterLabel: 'Áreas de trabajo:',
      typewriterPhrases: [
        'Auditoría SEO técnica, rastreo e indexación.',
        'Consultoría SEO y arquitectura para empresas.',
        'Planes recurrentes con ejecución y contenido.',
      ],
      subtitle:
        'Combinamos diagnóstico técnico profundo, inteligencia competitiva y ejecución White Hat en dos líneas de servicio: auditorías SEO puntuales y planes continuos de crecimiento orgánico, siempre mediante propuesta personalizada.',
      primaryCta: 'Solicitar una Auditoría SEO',
      secondaryCta: 'Conocer los Planes de SEO',
      trustBadges: [
        'Especialización técnica y análisis basado en datos',
        'Metodología 100% White Hat SEO',
        'Propuesta personalizada según alcance real',
      ],
    },
    modalities: {
      kicker: 'Estructura de Servicio',
      title: 'Dos líneas independientes para diagnosticar y hacer crecer su SEO',
      subtitle:
        'Organizamos nuestros servicios para responder tanto a empresas que necesitan primero un diagnóstico claro como a negocios listos para ejecución técnica y editorial continua.',
      auditCard: {
        eyebrow: 'Línea 1 · Proyectos Puntuales',
        title: 'Auditorías SEO Profesionales',
        description:
          'Proyectos con inicio, análisis en profundidad y entrega definida. Ideales cuando necesita detectar bloqueos técnicos, errores de indexación, canibalización o brechas frente a competidores sin asumir mensualidades.',
        bullets: [
          'Diagnóstico detallado con informe técnico y prioridades ordenadas.',
          'Ideal para ejecutar con su equipo interno o validar antes de un plan mensual.',
          'Tres niveles: Diagnóstico SEO, Auditoría SEO Estratégica y Auditoría SEO 360º.',
        ],
        ctaLabel: 'Comparar Auditorías SEO',
      },
      recurringCard: {
        eyebrow: 'Línea 2 · Acompañamiento Mensual',
        title: 'Planes Recurrentes de SEO',
        description:
          'Servicio continuo que integra monitoreo constante, correcciones técnicas, optimización de páginas existentes, creación de artículos estratégicos, autoridad digital y SEO Local cuando aplica.',
        bullets: [
          'Ejecución mensual guiada por datos reales de búsqueda y competencia.',
          'Crecimiento sostenible orientado a tráfico cualificado y oportunidades comerciales.',
          'Tres modalidades: SEO Essencial, SEO Performance y SEO Authority.',
        ],
        ctaLabel: 'Comparar Planes Recurrentes',
      },
      differenceTitle: '¿Cuál es la diferencia práctica entre una auditoría y un plan recurrente?',
      differenceText:
        'La auditoría entrega el diagnóstico completo y la hoja de ruta priorizada como un proyecto puntual, sin mensualidad. El plan recurrente asume la ejecución continua mes a mes: implementar mejoras, publicar contenidos, construir autoridad y medir avances.',
    },
    auditsSection: {
      kicker: 'Línea 1 · Proyectos Puntuales',
      title: 'Auditorías SEO Profesionales',
      subtitle:
        'Cada auditoría tiene alcance definido, revisión humana realizada por especialista y entregables accionables — nunca reportes automáticos sin criterio.',
      punctuationNote:
        'Importante: todas las auditorías son proyectos puntuales con inicio, ejecución y entrega definidos. No son contratos mensuales.',
      deliverablesLabel: 'Entregables incluidos:',
      showAllLabel: 'Ver lista completa de entregables',
      showLessLabel: 'Contraer detalles',
      items: [
        {
          id: 'diagnostico-seo',
          eyebrow: 'Proyecto Puntual · Nivel Inicial',
          name: 'Diagnóstico SEO',
          positioning:
            'Para empresas que necesitan identificar problemas y oportunidades de mejora en Google.',
          deliverables: [
            'Análisis técnico inicial',
            'Verificación de indexación y rastreo',
            'Análisis On-Page',
            'Investigación inicial de palabras clave',
            'Análisis de principales competidores',
            'Identificación de problemas prioritarios',
            'Informe de diagnóstico',
            'Recomendaciones iniciales',
          ],
          ctaLabel: 'Solicitar Diagnóstico SEO',
          whatsappMessage:
            '¡Hola! Quisiera solicitar una propuesta para el Diagnóstico SEO puntual de nuestro sitio web.',
        },
        {
          id: 'auditoria-seo-estrategica',
          eyebrow: 'Proyecto Puntual · Profundización',
          name: 'Auditoría SEO Estratégica',
          featured: true,
          positioning:
            'Para empresas que necesitan un análisis en profundidad y una planificación estratégica de optimización.',
          deliverables: [
            'Auditoría técnica en profundidad',
            'Análisis de arquitectura del sitio',
            'Análisis On-Page',
            'Investigación de palabras clave e intención de búsqueda',
            'Análisis de competencia',
            'Análisis de backlinks y autoridad',
            'Identificación de canibalización',
            'Evaluación de Core Web Vitals',
            'Análisis de contenido y cobertura semántica',
            'Plan de acción priorizado',
            'Reunión de presentación',
          ],
          ctaLabel: 'Solicitar Auditoría Estratégica',
          whatsappMessage:
            '¡Hola! Estoy interesado en la Auditoría SEO Estratégica para analizar nuestro sitio web. ¿Cómo solicitamos una propuesta?',
        },
        {
          id: 'auditoria-seo-360',
          eyebrow: 'Proyecto Puntual · Inteligencia Integral',
          name: 'Auditoría SEO 360º',
          positioning:
            'Para empresas que necesitan inteligencia competitiva, diagnóstico integral y planificación de crecimiento orgánico.',
          deliverables: [
            'Auditoría técnica completa',
            'Análisis profundo de competidores',
            'Keyword Gap',
            'Content Gap',
            'Análisis de autoridad y perfil de backlinks',
            'Análisis de arquitectura y distribución de autoridad interna',
            'Análisis de contenido y E-E-A-T',
            'Evaluación de SEO Local, cuando aplique',
            'Evaluación de SEO internacional, cuando aplique',
            'Análisis de oportunidades comerciales',
            'Evaluación de experiencia de usuario y conversión',
            'Estrategia de crecimiento orgánico',
            'Roadmap estratégico de 90 días',
            'Priorización por impacto y esfuerzo',
            'Presentación ejecutiva',
            'Reunión de seguimiento',
          ],
          ctaLabel: 'Solicitar Auditoría SEO 360º',
          whatsappMessage:
            '¡Hola! Quisiera solicitar una propuesta personalizada para la Auditoría SEO 360º de nuestro dominio.',
        },
      ],
      comparisonTitle: 'Comparativo de Auditorías SEO',
      comparisonSubtitle:
        'Compare la profundidad técnica, inteligencia competitiva y nivel de planificación de las tres modalidades.',
      comparisonColumns: ['Diagnóstico SEO', 'Auditoría Estratégica', 'Auditoría SEO 360º'],
      comparisonRows: [
        { label: 'Indexación, rastreo y On-Page', values: ['Inicial', 'En profundidad', 'Completa'] },
        { label: 'Arquitectura del sitio y Core Web Vitals', values: [false, true, true] },
        { label: 'Palabras clave, intención y canibalización', values: ['Investigación inicial', true, 'Completo + Keyword Gap'] },
        { label: 'Análisis de backlinks y autoridad', values: [false, true, true] },
        { label: 'Cobertura semántica, Content Gap y E-E-A-T', values: [false, 'Cobertura semántica', 'Content Gap + E-E-A-T'] },
        { label: 'SEO Local e Internacional (cuando aplique)', values: [false, false, true] },
        { label: 'UX, conversión y oportunidades comerciales', values: [false, false, true] },
        { label: 'Entregable y reuniones', values: ['Informe inicial', 'Plan priorizado + 1 reunión', 'Roadmap 90 días + Ejecutiva + Seguimiento'] },
      ],
    },
    plansSection: {
      kicker: 'Línea 2 · Acompañamiento Recurrente',
      title: 'Planes Recurrentes de SEO',
      subtitle:
        'Ejecución técnica, producción editorial, autoridad y seguimiento mensual. Los honorarios se determinan según tamaño del sitio, mercado y complejidad mediante propuesta personalizada.',
      proposalNote:
        'Cada plan se dimensiona según el alcance real de su proyecto, sin precios rígidos ni cargos ocultos.',
      deliverablesLabel: 'Entregables incluidos cada mes:',
      showAllLabel: 'Ver todos los entregables del plan',
      showLessLabel: 'Contraer entregables',
      plans: [
        {
          id: 'seo-essencial',
          name: 'SEO Essencial',
          headline: 'Construya su presencia orgánica.',
          description:
            'Para empresas que necesitan estructurar, corregir y mantener su presencia en los resultados orgánicos de Google.',
          deliverables: [
            'Monitoreo de hasta 15 palabras clave',
            'Monitoreo de hasta 20 URLs prioritarias',
            'Monitoreo y correcciones técnicas prioritarias',
            'Optimización de hasta 2 páginas mensuales',
            'Producción y publicación de 1 artículo mensual',
            'Artículo de hasta aproximadamente 1.200 palabras',
            'Investigación de palabras clave',
            'Optimización de títulos, descripciones y encabezados',
            'Optimización de enlaces internos',
            'Monitoreo de indexación',
            'Análisis de 2 competidores',
            'Gestión de 1 Perfil de Empresa en Google, cuando aplique',
            'Hasta 2 publicaciones mensuales en Google Business Profile',
            'Informe mensual',
            'Reunión trimestral',
          ],
          objectiveLabel: 'Objetivo',
          objective: 'Mejorar la calidad técnica del sitio y ampliar su visibilidad orgánica.',
          ctaLabel: 'Solicitar propuesta personalizada',
          whatsappMessage:
            '¡Hola! Quisiera solicitar una propuesta personalizada para el plan recurrente SEO Essencial.',
        },
        {
          id: 'seo-performance',
          badge: 'Plan Recomendado',
          recommended: true,
          name: 'SEO Performance',
          headline: 'Transforme visibilidad en oportunidades.',
          description:
            'Para empresas que desean conquistar posiciones relevantes, ampliar palabras clave posicionadas y generar oportunidades comerciales.',
          deliverables: [
            'Monitoreo de hasta 40 palabras clave',
            'Monitoreo de hasta 50 URLs prioritarias',
            'Optimización técnica continua',
            'Optimización de hasta 5 páginas mensuales',
            'Producción y publicación de 2 artículos mensuales',
            'Artículos de hasta aproximadamente 1.500 palabras cada uno',
            'Investigación y expansión estratégica de palabras clave',
            'Mapeo de intención de búsqueda',
            'Planificación editorial SEO',
            'Optimización de páginas comerciales',
            'Análisis de Content Gap',
            'Identificación de canibalización',
            'Mejoras en la arquitectura del sitio',
            'Evaluación de Core Web Vitals',
            'Análisis de backlinks y oportunidades',
            'Monitoreo de conversiones orgánicas',
            'Análisis de hasta 4 competidores',
            'Gestión de 1 Perfil de Empresa en Google, cuando aplique',
            'Hasta 4 publicaciones mensuales en Google Business Profile',
            'Informe estratégico mensual',
            'Reunión mensual',
          ],
          objectiveLabel: 'Objetivo',
          objective:
            'Convertir el sitio web en un canal consistente de adquisición de tráfico cualificado y generación de negocio.',
          ctaLabel: 'Solicitar propuesta personalizada',
          whatsappMessage:
            '¡Hola! Me interesa el plan recomendado SEO Performance y deseo solicitar una propuesta personalizada.',
        },
        {
          id: 'seo-authority',
          badge: 'Modalidad Premium',
          premium: true,
          name: 'SEO Authority',
          headline: 'Construya autoridad y competitividad.',
          description:
            'Para empresas que desean competir en mercados exigentes, fortalecer su autoridad digital y consolidar una presencia orgánica relevante.',
          deliverables: [
            'Monitoreo de hasta 100 palabras clave',
            'Monitoreo de hasta 100 URLs prioritarias',
            'Gestión técnica avanzada',
            'Optimización de hasta 10 páginas mensuales',
            'Producción y publicación de 4 artículos estratégicos mensuales',
            'Artículos de hasta aproximadamente 1.800 palabras cada uno',
            'Estrategia de autoridad temática',
            'Planificación de clusters de contenido',
            'Estrategia de E-E-A-T',
            'Análisis en profundidad de competidores',
            'Keyword Gap y Content Gap',
            'Estrategia de backlinks',
            'Prospección de oportunidades editoriales',
            'Digital PR',
            'Recuperación de páginas con pérdida de rendimiento',
            'Estrategia avanzada de arquitectura',
            'Datos estructurados, cuando aplique',
            'Análisis de conversión y CRO',
            'Integración estratégica entre SEO, Google Ads y SEO Local',
            'Planificación de expansión orgánica',
            'Análisis de SEO internacional, cuando aplique',
            'Gestión de 1 Perfil de Empresa en Google, cuando aplique',
            'Hasta 8 publicaciones mensuales en Google Business Profile',
            'Informe ejecutivo mensual',
            'Hasta 2 reuniones mensuales',
            'Roadmap estratégico trimestral',
          ],
          objectiveLabel: 'Objetivo',
          objective:
            'Construir ventaja competitiva orgánica, ampliar la autoridad del dominio y desarrollar un canal sostenible de captación de clientes.',
          ctaLabel: 'Solicitar propuesta personalizada',
          whatsappMessage:
            '¡Hola! Quisiera solicitar una propuesta personalizada para la modalidad premium SEO Authority.',
        },
      ],
      comparisonTitle: 'Comparativo de Entregables de los Planes Recurrentes',
      comparisonSubtitle:
        'Revise por área el alcance técnico, producción de contenido, autoridad, SEO Local y reportes incluidos en cada nivel.',
      comparisonColumns: ['SEO Essencial', 'SEO Performance', 'SEO Authority'],
      comparisonGroups: [
        {
          category: 'Monitoreo e Inteligencia Competitiva',
          rows: [
            { label: 'Palabras clave monitoreadas', values: ['Hasta 15', 'Hasta 40', 'Hasta 100'] },
            { label: 'URLs prioritarias monitoreadas', values: ['Hasta 20', 'Hasta 50', 'Hasta 100'] },
            { label: 'Análisis de competidores', values: ['2 competidores', 'Hasta 4 competidores', 'Profundo continuo'] },
            { label: 'Keyword Gap y Content Gap', values: [false, 'Content Gap', 'Keyword Gap + Content Gap'] },
            { label: 'Conversiones orgánicas y CRO', values: [false, 'Conversiones orgánicas', 'Conversiones + CRO'] },
          ],
        },
        {
          category: 'Optimización Técnica y Arquitectura',
          rows: [
            { label: 'Gestión y correcciones técnicas', values: ['Monitoreo y correcciones prioritarias', 'Optimización técnica continua', 'Gestión técnica avanzada'] },
            { label: 'Páginas optimizadas al mes', values: ['Hasta 2 páginas', 'Hasta 5 páginas', 'Hasta 10 páginas'] },
            { label: 'Arquitectura, canibalización y Core Web Vitals', values: ['Títulos, encabezados y enlaces', 'Arquitectura, canibalización y CWV', 'Arquitectura avanzada + Schema'] },
            { label: 'Recuperación de páginas con caída', values: [false, false, true] },
          ],
        },
        {
          category: 'Contenido, Autoridad Temática y Backlinks',
          rows: [
            { label: 'Artículos estratégicos al mes', values: ['1 artículo (~1.200 palabras)', '2 artículos (~1.500 palabras c/u)', '4 artículos (~1.800 palabras c/u)'] },
            { label: 'Planificación editorial, clusters y E-E-A-T', values: ['Investigación de palabras clave', 'Mapeo de intención y editorial SEO', 'Clusters, autoridad temática y E-E-A-T'] },
            { label: 'Estrategia de backlinks y Digital PR', values: [false, 'Análisis de backlinks y oportunidades', 'Backlinks, prospección editorial y Digital PR'] },
          ],
        },
        {
          category: 'SEO Local & Google Business Profile (cuando aplique)',
          rows: [
            { label: 'Gestión de Perfil de Empresa en Google', values: ['1 perfil (si aplica)', '1 perfil (si aplica)', '1 perfil (si aplica)'] },
            { label: 'Publicaciones mensuales en GBP', values: ['Hasta 2 publicaciones', 'Hasta 4 publicaciones', 'Hasta 8 publicaciones'] },
          ],
        },
        {
          category: 'Gobernanza, Expansión y Reuniones',
          rows: [
            { label: 'Integración SEO + Ads + Local e Internacional', values: [false, false, 'Integración completa e internacional (si aplica)'] },
            { label: 'Informes y seguimiento', values: ['Informe mensual · Reunión trimestral', 'Informe estratégico · Reunión mensual', 'Informe ejecutivo · Hasta 2 reuniones/mes · Roadmap'] },
          ],
        },
      ],
    },
    localSeoSection: {
      kicker: 'Presencia Geográfica & Google Maps',
      title: 'SEO Local y Google Business Profile integrados en planes elegibles',
      description:
        'Para empresas con atención presencial o cobertura territorial definida, el Perfil de Empresa en Google se trabaja de manera integrada dentro de los tres planes recurrentes.',
      frontsTitle: 'Acciones trabajadas en el perfil local:',
      fronts: [
        'Optimización coherente de datos comerciales (NAP, horarios y atributos).',
        'Configuración de categorías principales, secundarias y catálogo de servicios.',
        'Redacción estratégica de la descripción comercial del negocio.',
        'Publicaciones periódicas enfocadas en servicios y novedades.',
        'Seguimiento de métricas e interacciones locales.',
        'Estrategia de relevancia y presencia geográfica vinculada al sitio web.',
      ],
      eligibilityNote:
        'Criterio de elegibilidad: Google Business Profile no se presenta como obligatorio para negocios exclusivamente digitales ni empresas no elegibles. Cuando no corresponde, ese esfuerzo se reasigna a acciones adicionales de SEO orgánico dentro del mismo alcance contratado. No realizamos promesas de posiciones en Local Pack o Google Maps.',
      ctaButton: 'Explorar página de SEO Local',
    },
    additionalServices: {
      kicker: 'Proyectos Especiales & Frentes Adicionales',
      title: 'Servicios Complementarios',
      subtitle:
        'Soluciones especializadas contratadas por separado o incorporadas a medida según las necesidades técnicas de cada etapa.',
      scopeNote:
        'Estos servicios no están incluidos automáticamente en todos los planes de SEO y requieren cotización específica.',
      items: [
        {
          id: 'gestao-google-ads',
          title: 'Gestión de Google Ads',
          description:
            'Administración recurrente de campañas de búsqueda, ampliación de palabras negativas y optimización orientada al retorno comercial.',
          ctaLabel: 'Consultar gestión Ads',
          whatsappMessage: '¡Hola! Quisiera consultar por el servicio complementario de Gestión de Google Ads.',
        },
        {
          id: 'consultoria-google-ads',
          title: 'Consultoría de Google Ads',
          description:
            'Configuración inicial profesional de la cuenta, estructura temática, palabras negativas y medición de conversiones sin mensualidad fija.',
          ctaLabel: 'Consultar consultoría Ads',
          whatsappMessage: '¡Hola! Estoy interesado en Consultoría y Estructuración de Google Ads.',
          internalRouteKey: 'googleAds',
          internalRouteLabel: 'Ver servicio de Google Ads',
        },
        {
          id: 'reconstrucao-sites',
          title: 'Reconstrucción de sitios antiguos en arquitectura moderna',
          description:
            'Renovación técnica de sitios lentos o heredados cuidando redirecciones, renderizado rápido y experiencia móvil.',
          ctaLabel: 'Consultar reconstrucción',
          whatsappMessage: '¡Hola! Queremos evaluar la reconstrucción de nuestro sitio web en arquitectura moderna.',
          internalRouteKey: 'modernization',
          internalRouteLabel: 'Ver modernización web',
        },
        {
          id: 'migracao-cloudflare',
          title: 'Migración de sitios a Cloudflare',
          description:
            'Implementación en infraestructura edge con DNS seguro, reglas de caché, HTTPS, redirecciones limpias y protección de red.',
          ctaLabel: 'Consultar migración Cloudflare',
          whatsappMessage: '¡Hola! Necesitamos asesoría para migrar nuestro sitio web a Cloudflare.',
        },
        {
          id: 'hospedagem-manutencao',
          title: 'Alojamiento y mantenimiento',
          description:
            'Soporte técnico continuo, monitoreo de disponibilidad y actualizaciones controladas para garantizar estabilidad y velocidad.',
          ctaLabel: 'Consultar alojamiento',
          whatsappMessage: '¡Hola! Me gustaría consultar planes de alojamiento y mantenimiento técnico.',
        },
        {
          id: 'seo-internacional',
          title: 'SEO internacional',
          description:
            'Arquitectura multilingüe o multipaís, etiquetas hreflang consistentes, canonicals por idioma y estrategia por mercado.',
          ctaLabel: 'Consultar SEO internacional',
          whatsappMessage: '¡Hola! Necesitamos una estrategia técnica de SEO internacional.',
        },
        {
          id: 'link-building-avancado',
          title: 'Estrategia avanzada de link building',
          description:
            'Construcción de autoridad externa con activos enlazables, evaluación editorial de dominios y prospección White Hat.',
          ctaLabel: 'Consultar link building',
          whatsappMessage: '¡Hola! Deseo información sobre proyectos dedicados de estrategia avanzada de link building.',
        },
        {
          id: 'recuperacao-organica',
          title: 'Proyectos especiales de recuperación orgánica',
          description:
            'Investigación técnica tras migraciones fallidas, actualizaciones algorítmicas de Google o pérdidas severas de indexación.',
          ctaLabel: 'Consultar recuperación',
          whatsappMessage: '¡Hola! Sufrimos una caída de tráfico orgánico y necesitamos evaluar un proyecto de recuperación.',
        },
      ],
    },
    methodology: {
      kicker: 'Proceso & Criterio Técnico',
      title: 'Metodología de trabajo y diferenciales de Auditoria SEO',
      subtitle:
        'Seguimos un flujo verificable —desde la recolección técnica hasta la mejora continua— con total transparencia y apego a las directrices de Google.',
      steps: [
        {
          step: '01',
          title: 'Diagnóstico y levantamiento de datos',
          description:
            'Lectura técnica de Search Console, rastreo integral del sitio, inspección HTTP y alineación con objetivos comerciales.',
        },
        {
          step: '02',
          title: 'Identificación de problemas y oportunidades',
          description:
            'Mapeo de bloqueos de indexación, errores estructurales, canibalización, brechas semánticas y prioridades inmediatas.',
        },
        {
          step: '03',
          title: 'Planificación estratégica',
          description:
            'Definición del orden de ejecución por impacto y esfuerzo, arquitectura de páginas comerciales y calendario editorial.',
        },
        {
          step: '04',
          title: 'Ejecución de las optimizaciones',
          description:
            'Ajustes técnicos, metadatos, jerarquía de encabezados, enlazado interno, Core Web Vitals y datos estructurados.',
        },
        {
          step: '05',
          title: 'Producción y optimización de contenido',
          description:
            'Redacción y actualización de artículos y páginas de servicio con profundidad temática, lenguaje natural y enfoque E-E-A-T.',
        },
        {
          step: '06',
          title: 'Monitoreo y medición',
          description:
            'Seguimiento continuo de indexación, impresiones, clics, palabras clave monitoreadas y conversiones orgánicas.',
        },
        {
          step: '07',
          title: 'Evolución continua',
          description:
            'Iteraciones mensuales basadas en datos reales, expansión de cobertura temática y defensa de posiciones estratégicas.',
        },
      ],
      differentialsTitle: 'Principios que guían nuestro trabajo',
      differentials: [
        {
          title: 'Metodología White Hat SEO',
          description: 'Prácticas 100% conformes con las políticas de Google para proteger la salud y el futuro del dominio.',
        },
        {
          title: 'Estrategias basadas en datos',
          description: 'Decisiones respaldadas por Search Console, análisis de SERP y evidencia técnica verificable.',
        },
        {
          title: 'Ejecución técnica especializada',
          description: 'Dominio práctico de HTML semántico, renderizado, canonicals, redirecciones, rendimiento y arquitectura.',
        },
        {
          title: 'Transparencia en los informes',
          description: 'Visibilidad clara de tareas ejecutadas, bloqueos detectados e indicadores comerciales reales.',
        },
        {
          title: 'Foco en resultados de negocio',
          description: 'Priorizamos URLs y búsquedas con intención comercial real, no métricas vacías de vanidad.',
        },
        {
          title: 'Estrategias personalizadas',
          description: 'Cada empresa tiene competencia, plataforma y recursos propios; la estrategia se adapta a esa realidad.',
        },
        {
          title: 'Sin promesas artificiales de posición',
          description: 'No garantizamos primeros puestos ni cifras fijas de tráfico, porque ningún tercero controla los algoritmos de Google.',
        },
      ],
      specialistEyebrow: 'Dirección técnica',
      specialistName: 'Wesley Vieira',
      specialistRole: 'Fundador de Auditoria SEO & Especialista en SEO y Tráfico',
      specialistBio:
        'Las auditorías y la estrategia técnica son dirigidas personalmente por Wesley Vieira junto al equipo técnico de Auditoria SEO. Trabajamos sin plantillas automáticas genéricas, traduciendo cada hallazgo en un plan comprensible para negocio y desarrollo.',
      specialistWhatsappLabel: 'Hablar por WhatsApp',
      specialistMapsLabel: 'Ver ficha oficial en Google Maps',
    },
    faqsSection: {
      kicker: 'Preguntas Frecuentes',
      title: 'Dudas habituales sobre Auditorías y Planes de SEO',
      subtitle:
        'Respuestas claras sobre formato de trabajo, presupuestos a medida, plazos y criterios éticos.',
      items: [
        {
          question: '¿Por qué no se muestran precios fijos en la página?',
          answer:
            'Cada sitio web tiene un tamaño, historial técnico, plataforma y nivel de competencia distintos. Revisamos rápidamente su URL y necesidades antes de presentar una propuesta comercial personalizada con alcance exacto.',
        },
        {
          question: '¿Qué diferencia una Auditoría SEO de un Plan Recurrente?',
          answer:
            'El Diagnóstico SEO, la Auditoría SEO Estratégica y la Auditoría SEO 360º son proyectos puntuales con entregable definido y sin compromiso mensual. Los planes SEO Essencial, SEO Performance y SEO Authority contemplan ejecución mensual continua de optimización, contenidos, autoridad y monitoreo.',
        },
        {
          question: '¿Garantizan el primer puesto en Google o Google Maps?',
          answer:
            'No. Ninguna consultora seria puede garantizar posiciones exactas o volumen fijo de visitas, ya que Google actualiza sus algoritmos continuamente y la competencia también actúa. Garantizamos trabajo técnico riguroso y transparencia total.',
        },
        {
          question: '¿Empresas 100% digitales sin oficina física pueden contratar los planes?',
          answer:
            'Sí. La gestión de Google Business Profile aplica únicamente cuando el negocio es elegible según las políticas de Google. Si su empresa no es elegible, destinamos ese espacio a tareas adicionales de SEO orgánico dentro del mismo alcance.',
        },
        {
          question: '¿En cuánto tiempo suelen verse avances orgánicos?',
          answer:
            'Las correcciones técnicas críticas de indexación suelen reflejarse tras los primeros ciclos de rastreo. La evolución sostenida de palabras clave y tráfico orgánico cualificado suele consolidarse entre 3 y 6 meses según la competencia del mercado.',
        },
      ],
    },
    proposalForm: {
      kicker: 'Solicite su Propuesta',
      title: 'Evaluación inicial y propuesta personalizada para su sitio web',
      subtitle:
        'Complete estos datos breves para preparar su propuesta comercial o escríbanos directamente por nuestro WhatsApp oficial.',
      sideTitle: 'Contacto técnico directo',
      sideDescription:
        'Analizamos su dominio, validamos si conviene iniciar por una auditoría puntual o un plan recurrente y respondemos con claridad.',
      sideHighlights: [
        'Sin spam ni presiones comerciales.',
        'Atención en español, portugués e inglés para Latinoamérica, España, Brasil y EE. UU.',
        'Conexión directa con el canal oficial de WhatsApp de Auditoria SEO.',
      ],
      directWhatsappButton: 'Hablar directo por WhatsApp',
      fields: {
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Su nombre',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Nombre de la empresa',
        websiteLabel: 'Sitio web',
        websitePlaceholder: 'https://suempresa.com',
        countryLabel: 'País',
        countryPlaceholder: 'Ej.: México, Colombia, España, Chile',
        serviceLabel: 'Servicio de interés',
        servicePlaceholder: 'Seleccione una opción',
        notesLabel: 'Breve descripción de la necesidad',
        notesPlaceholder: 'Cuéntenos brevemente el estado actual de su sitio, metas o principales desafíos.',
      },
      serviceOptions: [
        'Diagnóstico SEO (Auditoría Puntual)',
        'Auditoría SEO Estratégica (Auditoría Puntual)',
        'Auditoría SEO 360º (Auditoría Puntual)',
        'Plan Recurrente — SEO Essencial',
        'Plan Recurrente — SEO Performance (Recomendado)',
        'Plan Recurrente — SEO Authority (Premium)',
        'Servicios Complementarios (Ads, Cloudflare, Migración, etc.)',
        'Aún no estoy seguro — necesito recomendación inicial',
      ],
      errors: {
        nameRequired: 'Ingrese su nombre completo.',
        companyRequired: 'Ingrese el nombre de su empresa.',
        websiteInvalid: 'Ingrese una URL válida (ej.: https://empresa.com).',
        countryRequired: 'Indique el país de operación.',
        serviceRequired: 'Seleccione un servicio o plan de interés.',
        notesRequired: 'Describa brevemente su necesidad (mínimo 10 caracteres).',
      },
      submitButton: 'Solicitar propuesta personalizada',
      successTitle: 'Resumen de solicitud listo para enviar',
      successText:
        'Validamos sus datos correctamente. Pulse el botón inferior para abrir nuestro WhatsApp oficial con toda la información ya completada.',
      openWhatsappSummary: 'Enviar resumen por WhatsApp ahora',
      resetButton: 'Modificar datos del formulario',
    },
    bottomCta: {
      title: '¿Listo para detectar qué limita el crecimiento orgánico de su sitio?',
      subtitle:
        'Envíe su dominio por WhatsApp o solicite una propuesta personalizada adaptada a la etapa real de su empresa.',
      button: 'Solicitar propuesta personalizada',
    },
  },

  en: {
    hero: {
      kicker: 'Specialist SEO Audits & Technical Consulting',
      titlePart1: 'Human-led technical SEO audit for your site.',
      titleShimmer: 'Full diagnosis and a prioritized action roadmap.',
      typewriterLabel: 'Core focus:',
      typewriterPhrases: [
        'Technical SEO audits, crawling, and indexing.',
        'Strategic SEO consulting and site architecture.',
        'Ongoing execution, content, and authority building.',
      ],
      subtitle:
        'We combine in-depth technical diagnostics, competitive intelligence, and White Hat SEO execution across two dedicated service tracks: one-time SEO audits and ongoing recurring plans, scoped through a tailored commercial proposal.',
      primaryCta: 'Request an SEO Audit',
      secondaryCta: 'Explore SEO Plans',
      trustBadges: [
        'Technical specialization & data-driven analysis',
        '100% White Hat SEO methodology',
        'Tailored proposal scoped to your site',
      ],
    },
    modalities: {
      kicker: 'Service Architecture',
      title: 'Two independent tracks to diagnose and scale your organic search',
      subtitle:
        'Whether your team needs an objective technical diagnosis first or continuous monthly execution and content production, our structure separates both engagements cleanly.',
      auditCard: {
        eyebrow: 'Track 1 · One-Time Projects',
        title: 'Professional SEO Audits',
        description:
          'Fixed-scope engagements with a defined start, deep manual inspection, and final deliverable. Built for teams that need to uncover indexing blockers, cannibalization, or competitive gaps without entering a monthly retainer.',
        bullets: [
          'Detailed technical diagnostics and prioritized roadmap.',
          'Ideal for in-house engineering/content teams or pre-retainer validation.',
          'Three tiers: Diagnóstico SEO, Strategic SEO Audit, and 360º SEO Audit.',
        ],
        ctaLabel: 'Compare SEO Audits',
      },
      recurringCard: {
        eyebrow: 'Track 2 · Monthly Execution',
        title: 'Recurring SEO Plans',
        description:
          'Continuous optimization pairing technical monitoring and fixes with existing page improvements, strategic content publishing, authority building, and Local SEO where eligible.',
        bullets: [
          'Structured monthly delivery anchored in real search and competitor data.',
          'Sustainable growth focused on qualified traffic and commercial pipeline.',
          'Three scalable tiers: SEO Essencial, SEO Performance, and SEO Authority.',
        ],
        ctaLabel: 'Compare Recurring Plans',
      },
      differenceTitle: 'What is the practical difference between hiring an audit vs. a recurring plan?',
      differenceText:
        'An audit delivers the diagnostic findings and prioritized action blueprint as a one-off project with zero ongoing commitment. A recurring plan takes over continuous monthly execution—implementing technical fixes, publishing search-led content, building authority, and tracking impact over time.',
    },
    auditsSection: {
      kicker: 'Track 1 · One-Time Projects',
      title: 'Professional SEO Audits',
      subtitle:
        'Every audit has a defined scope, manual specialist inspection, and practical deliverables—never generic automated PDF exports.',
      punctuationNote:
        'Important: all audits below are one-time engagements with clear scope and delivery milestones. They are not recurring monthly contracts.',
      deliverablesLabel: 'Included deliverables:',
      showAllLabel: 'Show full deliverables list',
      showLessLabel: 'Collapse details',
      items: [
        {
          id: 'diagnostico-seo',
          eyebrow: 'One-Time Project · Foundation',
          name: 'Diagnóstico SEO',
          positioning:
            'For businesses that need to pinpoint technical issues and immediate Google improvement opportunities.',
          deliverables: [
            'Initial technical analysis',
            'Indexing and crawl verification',
            'On-Page SEO analysis',
            'Initial keyword research',
            'Top competitor review',
            'Priority issue identification',
            'Diagnostic report',
            'Initial recommendations',
          ],
          ctaLabel: 'Request Diagnóstico SEO',
          whatsappMessage:
            'Hello! I would like to request a custom proposal for the one-time Diagnóstico SEO review for our website.',
        },
        {
          id: 'auditoria-seo-estrategica',
          eyebrow: 'One-Time Project · In-Depth',
          name: 'Auditoria SEO Estratégica',
          featured: true,
          positioning:
            'For companies seeking deep technical inspection alongside a structured optimization roadmap.',
          deliverables: [
            'In-depth technical SEO audit',
            'Site architecture analysis',
            'On-Page SEO audit',
            'Keyword research & search intent mapping',
            'Competitor analysis',
            'Backlink & authority profile review',
            'Keyword cannibalization check',
            'Core Web Vitals evaluation',
            'Content & semantic coverage review',
            'Prioritized action plan',
            'Presentation walkthrough meeting',
          ],
          ctaLabel: 'Request Strategic Audit',
          whatsappMessage:
            'Hello! I am interested in the Strategic SEO Audit (Auditoria SEO Estratégica) for our site. How do we proceed with a proposal?',
        },
        {
          id: 'auditoria-seo-360',
          eyebrow: 'One-Time Project · Full Intelligence',
          name: 'Auditoria SEO 360º',
          positioning:
            'For organizations requiring competitive intelligence, comprehensive site diagnostics, and a structured organic growth plan.',
          deliverables: [
            'Complete technical SEO audit',
            'Deep competitor intelligence analysis',
            'Keyword Gap analysis',
            'Content Gap analysis',
            'Domain authority & backlink profile review',
            'Site architecture & internal PageRank distribution',
            'Content quality & E-E-A-T evaluation',
            'Local SEO assessment, when applicable',
            'International SEO assessment, when applicable',
            'Commercial opportunity mapping',
            'UX & conversion evaluation',
            'Organic growth strategy',
            '90-day strategic roadmap',
            'Impact vs. effort prioritization',
            'Executive presentation',
            'Follow-up review meeting',
          ],
          ctaLabel: 'Request 360º SEO Audit',
          whatsappMessage:
            'Hello! I would like to request a custom proposal for the 360º SEO Audit for our domain.',
        },
      ],
      comparisonTitle: 'SEO Audits Comparison',
      comparisonSubtitle:
        'See how technical inspection depth, competitive intelligence, and strategic planning scale across all three audit engagements.',
      comparisonColumns: ['Diagnóstico SEO', 'Strategic Audit', '360º SEO Audit'],
      comparisonRows: [
        { label: 'Indexing, crawling & On-Page review', values: ['Initial', 'In-depth', 'Complete'] },
        { label: 'Site architecture & Core Web Vitals', values: [false, true, true] },
        { label: 'Keywords, intent & cannibalization', values: ['Initial research', true, 'Full + Keyword Gap'] },
        { label: 'Backlinks & authority profile', values: [false, true, true] },
        { label: 'Semantic coverage, Content Gap & E-E-A-T', values: [false, 'Semantic coverage', 'Content Gap + E-E-A-T'] },
        { label: 'Local & International SEO (when applicable)', values: [false, false, true] },
        { label: 'UX, conversion & commercial opportunities', values: [false, false, true] },
        { label: 'Deliverables & meetings', values: ['Initial report', 'Prioritized plan + 1 meeting', '90-day roadmap + Executive + Follow-up'] },
      ],
    },
    plansSection: {
      kicker: 'Track 2 · Ongoing Retainers',
      title: 'Recurring SEO Plans',
      subtitle:
        'Continuous technical stewardship, editorial production, authority building, and reporting. Pricing is tailored to site scale, market competitiveness, and complexity via custom proposal.',
      proposalNote:
        'Every engagement is scoped through a custom proposal for Brazilian and international companies—no rigid public price tiers or surprise fees.',
      deliverablesLabel: 'Monthly & recurring deliverables:',
      showAllLabel: 'Show all plan deliverables',
      showLessLabel: 'Collapse deliverables',
      plans: [
        {
          id: 'seo-essencial',
          name: 'SEO Essencial',
          headline: 'Build your organic presence.',
          description:
            'For businesses looking to structure, fix, and maintain reliable visibility across Google organic search.',
          deliverables: [
            'Tracking up to 15 keywords',
            'Monitoring up to 20 priority URLs',
            'Priority technical monitoring & fixes',
            'Optimization of up to 2 pages per month',
            'Production & publishing of 1 article per month',
            'Article up to approx. 1,200 words',
            'Keyword research',
            'Title tag, meta description & heading optimization',
            'Internal linking optimization',
            'Indexation monitoring',
            'Analysis of 2 competitors',
            'Management of 1 Google Business Profile, when applicable',
            'Up to 2 monthly Google Business Profile posts',
            'Monthly report',
            'Quarterly review meeting',
          ],
          objectiveLabel: 'Objective',
          objective: 'Strengthen website technical health and expand steady organic search visibility.',
          ctaLabel: 'Request custom proposal',
          whatsappMessage:
            'Hello! I would like to request a custom proposal for the SEO Essencial recurring plan.',
        },
        {
          id: 'seo-performance',
          badge: 'Recommended Plan',
          recommended: true,
          name: 'SEO Performance',
          headline: 'Turn visibility into pipeline.',
          description:
            'For companies aiming to win competitive rankings, expand keyword footprint, and generate consistent commercial leads.',
          deliverables: [
            'Tracking up to 40 keywords',
            'Monitoring up to 50 priority URLs',
            'Continuous technical optimization',
            'Optimization of up to 5 pages per month',
            'Production & publishing of 2 articles per month',
            'Articles up to approx. 1,500 words each',
            'Strategic keyword research & expansion',
            'Search intent mapping',
            'Editorial SEO planning',
            'Commercial landing page optimization',
            'Content Gap analysis',
            'Cannibalization identification & cleanup',
            'Site architecture improvements',
            'Core Web Vitals evaluation',
            'Backlink profile & opportunity review',
            'Organic conversion tracking',
            'Analysis of up to 4 competitors',
            'Management of 1 Google Business Profile, when applicable',
            'Up to 4 monthly Google Business Profile posts',
            'Monthly strategic report',
            'Monthly review meeting',
          ],
          objectiveLabel: 'Objective',
          objective:
            'Turn the website into a dependable acquisition channel for qualified organic traffic and business opportunities.',
          ctaLabel: 'Request custom proposal',
          whatsappMessage:
            'Hello! I am interested in the recommended SEO Performance plan and would like a custom proposal.',
        },
        {
          id: 'seo-authority',
          badge: 'Premium Tier',
          premium: true,
          name: 'SEO Authority',
          headline: 'Build authority and competitive edge.',
          description:
            'For organizations competing in demanding markets that want to strengthen domain authority and durable organic reach.',
          deliverables: [
            'Tracking up to 100 keywords',
            'Monitoring up to 100 priority URLs',
            'Advanced technical SEO management',
            'Optimization of up to 10 pages per month',
            'Production & publishing of 4 strategic articles per month',
            'Articles up to approx. 1,800 words each',
            'Topical authority strategy',
            'Content cluster planning',
            'E-E-A-T strategy implementation',
            'In-depth competitor analysis',
            'Keyword Gap & Content Gap execution',
            'Backlink acquisition strategy',
            'Editorial outreach & prospecting',
            'Digital PR initiatives',
            'Recovery of traffic-losing pages',
            'Advanced site architecture strategy',
            'Structured data markup, when applicable',
            'Conversion & CRO analysis',
            'Strategic alignment across SEO, Google Ads & Local SEO',
            'Organic market expansion planning',
            'International SEO review, when applicable',
            'Management of 1 Google Business Profile, when applicable',
            'Up to 8 monthly Google Business Profile posts',
            'Monthly executive report',
            'Up to 2 monthly meetings',
            'Quarterly strategic roadmap',
          ],
          objectiveLabel: 'Objective',
          objective:
            'Build lasting organic competitive advantage, grow authority signals, and establish a sustainable customer acquisition engine.',
          ctaLabel: 'Request custom proposal',
          whatsappMessage:
            'Hello! I would like to request a custom proposal for the premium SEO Authority tier.',
        },
      ],
      comparisonTitle: 'Recurring Plans Feature & Deliverable Matrix',
      comparisonSubtitle:
        'Compare monitoring limits, technical depth, monthly editorial output, authority building, and reporting cadence across plans.',
      comparisonColumns: ['SEO Essencial', 'SEO Performance', 'SEO Authority'],
      comparisonGroups: [
        {
          category: 'Monitoring & Competitive Intelligence',
          rows: [
            { label: 'Tracked keywords', values: ['Up to 15', 'Up to 40', 'Up to 100'] },
            { label: 'Priority URLs monitored', values: ['Up to 20', 'Up to 50', 'Up to 100'] },
            { label: 'Competitor tracking', values: ['2 competitors', 'Up to 4 competitors', 'Continuous deep review'] },
            { label: 'Keyword Gap & Content Gap', values: [false, 'Content Gap', 'Keyword Gap + Content Gap'] },
            { label: 'Organic conversion & CRO tracking', values: [false, 'Organic conversions', 'Conversions + CRO'] },
          ],
        },
        {
          category: 'Technical SEO & Architecture',
          rows: [
            { label: 'Technical monitoring & execution', values: ['Monitoring & priority fixes', 'Continuous technical optimization', 'Advanced technical management'] },
            { label: 'Pages optimized monthly', values: ['Up to 2 pages', 'Up to 5 pages', 'Up to 10 pages'] },
            { label: 'Architecture, cannibalization & CWV', values: ['Titles, headings & internal links', 'Architecture, cannibalization & CWV', 'Advanced architecture + Schema'] },
            { label: 'Decaying page recovery', values: [false, false, true] },
          ],
        },
        {
          category: 'Content, Topical Authority & Links',
          rows: [
            { label: 'Monthly strategic articles', values: ['1 article (~1,200 words)', '2 articles (~1,500 words ea.)', '4 articles (~1,800 words ea.)'] },
            { label: 'Editorial planning, clusters & E-E-A-T', values: ['Keyword research', 'Intent mapping & editorial plan', 'Clusters, topical authority & E-E-A-T'] },
            { label: 'Backlink strategy & Digital PR', values: [false, 'Backlink & opportunity analysis', 'Backlinks, editorial outreach & Digital PR'] },
          ],
        },
        {
          category: 'Local SEO & Google Business Profile (where eligible)',
          rows: [
            { label: 'Google Business Profile management', values: ['1 profile (if eligible)', '1 profile (if eligible)', '1 profile (if eligible)'] },
            { label: 'Monthly GBP posts', values: ['Up to 2 posts', 'Up to 4 posts', 'Up to 8 posts'] },
          ],
        },
        {
          category: 'Governance, Expansion & Reporting',
          rows: [
            { label: 'Cross-channel & international scope', values: [false, false, 'SEO + Ads + Local alignment & International SEO'] },
            { label: 'Reporting & meetings', values: ['Monthly report · Quarterly call', 'Strategic report · Monthly call', 'Executive report · Up to 2 calls/mo · Roadmap'] },
          ],
        },
      ],
    },
    localSeoSection: {
      kicker: 'Regional Visibility & Google Maps',
      title: 'Local SEO & Google Business Profile integrated into eligible plans',
      description:
        'For companies serving physical locations or defined geographic territories, Google Business Profile optimization runs directly alongside organic website SEO inside all three recurring plans.',
      frontsTitle: 'Local profile areas managed:',
      fronts: [
        'Accurate optimization of core business details, hours, and attributes.',
        'Selection of primary/secondary categories and service catalog.',
        'Clear, conversion-minded business description copy.',
        'Recurring profile posts highlighting key services and updates.',
        'Local interaction and performance monitoring.',
        'Geographic relevance alignment between your profile and website pages.',
      ],
      eligibilityNote:
        'Eligibility policy: Google Business Profile is never treated as mandatory for purely digital businesses or models ineligible under Google guidelines. When not applicable, that capacity is reallocated to additional organic website SEO work within the same plan scope. No Local Pack or Maps position guarantees are ever made.',
      ctaButton: 'Explore Local SEO details',
    },
    additionalServices: {
      kicker: 'Standalone & Specialized Engagements',
      title: 'Complementary Services',
      subtitle:
        'Specialized technical and acquisition projects contracted independently or scoped separately as needed.',
      scopeNote:
        'Note: these services are scoped individually outside standard plan inclusions and are not automatically bundled into every SEO retainer.',
      items: [
        {
          id: 'gestao-google-ads',
          title: 'Google Ads Management',
          description:
            'Ongoing search campaign optimization, negative keyword refinement, and conversion-focused budget stewardship.',
          ctaLabel: 'Inquire on Ads management',
          whatsappMessage: 'Hello! I would like to inquire about ongoing Google Ads Management.',
        },
        {
          id: 'consultoria-google-ads',
          title: 'Google Ads Consulting & Setup',
          description:
            'Turnkey account architecture, ad groups, negative keyword protection, and conversion tracking with no forced retainer.',
          ctaLabel: 'Inquire on Ads consulting',
          whatsappMessage: 'Hello! I am interested in Google Ads Consulting and campaign setup.',
          internalRouteKey: 'googleAds',
          internalRouteLabel: 'View Google Ads page',
        },
        {
          id: 'reconstrucao-sites',
          title: 'Legacy Website Modernization & Rebuilding',
          description:
            'Full technical rebuild of slow or outdated sites preserving SEO equity, clean rendering, and mobile responsiveness.',
          ctaLabel: 'Inquire on modernization',
          whatsappMessage: 'Hello! We would like to discuss rebuilding our legacy site on a modern architecture.',
          internalRouteKey: 'modernization',
          internalRouteLabel: 'View modernization page',
        },
        {
          id: 'migracao-cloudflare',
          title: 'Cloudflare Migration',
          description:
            'Edge deployment with clean DNS, caching rules, HTTPS enforcement, redirect hygiene, and network-level security.',
          ctaLabel: 'Inquire on Cloudflare migration',
          whatsappMessage: 'Hello! We are looking for assistance migrating our site infrastructure to Cloudflare.',
        },
        {
          id: 'hospedagem-manutencao',
          title: 'Managed Hosting & Maintenance',
          description:
            'Ongoing technical maintenance, uptime monitoring, dependency updates, and stability support.',
          ctaLabel: 'Inquire on hosting',
          whatsappMessage: 'Hello! I would like to learn more about managed hosting and technical maintenance.',
        },
        {
          id: 'seo-internacional',
          title: 'International SEO',
          description:
            'Multilingual and multi-regional site architecture, strict hreflang validation, per-language canonicals, and market expansion.',
          ctaLabel: 'Inquire on international SEO',
          whatsappMessage: 'Hello! We need support with International SEO architecture and hreflang implementation.',
        },
        {
          id: 'link-building-avancado',
          title: 'Advanced Link Building Strategy',
          description:
            'Dedicated off-page authority initiatives, linkable research assets, domain quality vetting, and White Hat outreach.',
          ctaLabel: 'Inquire on link building',
          whatsappMessage: 'Hello! I would like to inquire about a dedicated Advanced Link Building engagement.',
        },
        {
          id: 'recuperacao-organica',
          title: 'Organic Traffic Recovery Projects',
          description:
            'Forensic technical diagnosis following botched site migrations, Google core updates, or severe indexing drops.',
          ctaLabel: 'Inquire on traffic recovery',
          whatsappMessage: 'Hello! Our domain experienced an organic traffic drop and we need a recovery assessment.',
        },
      ],
    },
    methodology: {
      kicker: 'Process & Technical Standards',
      title: 'How we work and what sets Auditoria SEO apart',
      subtitle:
        'A transparent, repeatable methodology—from initial technical telemetry to iterative organic growth—built strictly on verifiable Google standards.',
      steps: [
        {
          step: '01',
          title: 'Diagnosis & data collection',
          description:
            'Search Console inspection, full-site crawl, HTTP response checks, and alignment around commercial goals.',
        },
        {
          step: '02',
          title: 'Issue & opportunity mapping',
          description:
            'Pinpointing indexing barriers, structural bugs, cannibalization, keyword gaps, and immediate quick wins.',
        },
        {
          step: '03',
          title: 'Strategic planning',
          description:
            'Prioritizing tasks by business impact and engineering effort alongside commercial page architecture and editorial schedules.',
        },
        {
          step: '04',
          title: 'Technical & on-page execution',
          description:
            'Implementing technical fixes, metadata, heading hierarchy, internal links, Core Web Vitals improvements, and structured data.',
        },
        {
          step: '05',
          title: 'Content production & optimization',
          description:
            'Writing and refining strategic articles and commercial landing pages with real topical depth and E-E-A-T rigor.',
        },
        {
          step: '06',
          title: 'Monitoring & measurement',
          description:
            'Tracking indexing health, impressions, clicks, priority keywords, and organic conversions with clear reporting.',
        },
        {
          step: '07',
          title: 'Continuous evolution',
          description:
            'Data-backed monthly iterations, semantic expansion, protection of existing rankings, and sustained growth cycles.',
        },
      ],
      differentialsTitle: 'Core operating principles',
      differentials: [
        {
          title: 'White Hat SEO methodology',
          description: '100% aligned with Google Search essentials to protect your domain’s long-term equity.',
        },
        {
          title: 'Data-driven decisions',
          description: 'Recommendations grounded in Search Console telemetry, live SERP analysis, and verified technical checks.',
        },
        {
          title: 'Hands-on technical execution',
          description: 'Practical mastery of semantic HTML, rendering, canonicals, redirects, speed, and site architecture.',
        },
        {
          title: 'Clear, honest reporting',
          description: 'Full visibility into completed work, active priorities, and real commercial indicators without vanity metrics.',
        },
        {
          title: 'Commercial focus',
          description: 'Effort directed toward pages, search intents, and improvements tied to qualified lead generation.',
        },
        {
          title: 'Custom strategies',
          description: 'Every plan adapts to your industry competition, tech stack, and internal team capacity.',
        },
        {
          title: 'Zero artificial ranking guarantees',
          description: 'We never promise #1 positions or fixed traffic quotas because no external party controls Google’s algorithms.',
        },
      ],
      specialistEyebrow: 'Technical leadership',
      specialistName: 'Wesley Vieira',
      specialistRole: 'Founder of Auditoria SEO & Organic Traffic Strategist',
      specialistBio:
        'Technical audits and strategic planning are led directly by Wesley Vieira and the technical team at Auditoria SEO—never outsourced to generic automated reports. We translate technical findings into plain priorities shared cleanly across marketing and engineering.',
      specialistWhatsappLabel: 'Chat on WhatsApp',
      specialistMapsLabel: 'Official Google Maps profile',
    },
    faqsSection: {
      kicker: 'FAQ',
      title: 'Common Questions About SEO Audits & Recurring Plans',
      subtitle:
        'Straightforward answers on custom scoping, audit vs. retainer models, timelines, and ethical standards.',
      items: [
        {
          question: 'Why are prices not listed publicly on the homepage?',
          answer:
            'Every website varies in page count, technical debt, tech stack, and competitive landscape. Once we briefly inspect your domain and goals, we deliver a clear, tailored commercial proposal specifying exact scope and investment.',
        },
        {
          question: 'What is the difference between an SEO Audit and a Recurring Plan?',
          answer:
            'Diagnóstico SEO, Strategic Audit, and 360º SEO Audit are one-time projects with defined deliverables and zero monthly commitment. SEO Essencial, SEO Performance, and SEO Authority are ongoing monthly retainers covering continuous fixes, content publishing, authority building, and reporting.',
        },
        {
          question: 'Do you guarantee top rankings on Google or Google Maps?',
          answer:
            'No. No reputable SEO consultancy can guarantee specific rankings or fixed traffic volumes since Google algorithms and competitors evolve constantly. We guarantee rigorous technical execution, transparent reporting, and White Hat standards.',
        },
        {
          question: 'Can online-only businesses without a physical storefront hire recurring plans?',
          answer:
            'Yes. Google Business Profile management is included only when your business model qualifies under Google guidelines. For non-eligible digital businesses, that allocation shifts into additional organic website SEO work inside your plan.',
        },
        {
          question: 'How long does it typically take to see organic progress?',
          answer:
            'Critical indexing and crawl fixes often register within weeks of re-crawling. Broader keyword movement and qualified organic traffic growth usually develop over 3 to 6 months depending on domain history and market competitiveness.',
        },
      ],
    },
    proposalForm: {
      kicker: 'Request Proposal',
      title: 'Preliminary review & tailored proposal for your website',
      subtitle:
        'Share a few essential details below to prepare your custom scope, or start directly via our official WhatsApp channel.',
      sideTitle: 'Direct technical evaluation',
      sideDescription:
        'We review your URL, determine whether a one-time audit or recurring plan makes more sense today, and follow up with an objective recommendation.',
      sideHighlights: [
        'No spam and no aggressive sales scripts.',
        'Serving organizations across Brazil, Latin America, North America, and Europe.',
        'Connected directly to Auditoria SEO’s official WhatsApp channel.',
      ],
      directWhatsappButton: 'Chat directly on WhatsApp',
      fields: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        companyLabel: 'Company',
        companyPlaceholder: 'Company name',
        websiteLabel: 'Website URL',
        websitePlaceholder: 'https://yourcompany.com',
        countryLabel: 'Country',
        countryPlaceholder: 'e.g., United States, UK, Brazil, Mexico',
        serviceLabel: 'Service of interest',
        servicePlaceholder: 'Select an option',
        notesLabel: 'Brief description of your needs',
        notesPlaceholder: 'Share your site context, primary goals, or current organic search challenges.',
      },
      serviceOptions: [
        'Diagnóstico SEO (One-Time Audit)',
        'Strategic SEO Audit (One-Time Audit)',
        '360º SEO Audit (One-Time Audit)',
        'Recurring Plan — SEO Essencial',
        'Recurring Plan — SEO Performance (Recommended)',
        'Recurring Plan — SEO Authority (Premium)',
        'Complementary Services (Ads, Cloudflare, Migration, etc.)',
        'Not sure yet — recommend the best starting point',
      ],
      errors: {
        nameRequired: 'Please enter your name.',
        companyRequired: 'Please enter your company name.',
        websiteInvalid: 'Please enter a valid website URL (e.g., https://company.com).',
        countryRequired: 'Please specify your country.',
        serviceRequired: 'Please select a service or plan of interest.',
        notesRequired: 'Please describe your needs briefly (at least 10 characters).',
      },
      submitButton: 'Request custom proposal',
      successTitle: 'Proposal brief prepared successfully',
      successText:
        'Your project details are validated and ready. Click below to send this brief directly via our official WhatsApp channel without retyping anything.',
      openWhatsappSummary: 'Send brief on WhatsApp now',
      resetButton: 'Edit form details',
    },
    bottomCta: {
      title: 'Ready to uncover what is holding back your site’s organic visibility?',
      subtitle:
        'Send your domain on WhatsApp or request a tailored commercial proposal aligned with your business goals.',
      button: 'Request custom proposal',
    },
  },
};
