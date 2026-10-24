import { Plan, ServiceItem, TargetSegment, FAQItem, SocialProofItem } from '../types';

export const SITE_CONFIG = {
  name: 'Auditoria SEO',
  domain: 'auditoriaseo.com.br',
  phoneDisplay: '(19) 98933-2087',
  phoneRaw: '5519989332087',
  whatsappBaseUrl: 'https://wa.me/5519989332087',
  heroImage: '/assets/aistudio/img-fundo-auditoria.jpg',
  defaultOgImage: 'https://auditoriaseo.com.br/og-image.png',
  googleMapsProfileUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
  author: 'Wesley - Auditoria SEO',
};

export const NAV_LINKS = [
  { name: 'Início', path: '/' },
  { name: 'Serviços de SEO', path: '/servicos-seo' },
  { name: 'Google Ads', path: '/google-ads' },
  { name: 'Blog', path: '/blog' },
];

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || 'Olá! Vim pelo site da Auditoria SEO e gostaria de melhorar a presença digital do meu negócio.';
  return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const SEO_PLANS: Plan[] = [
  {
    id: 'auditoria-seo',
    name: 'Auditoria de SEO',
    tagline: 'Diagnóstico aprofundado para identificar gargalos e oportunidades reais de crescimento.',
    price: 'R$ 1.447,00',
    priceNumeric: 1447,
    description: 'Análise detalhada da situação atual do seu site. Mapeia problemas técnicos, falhas de indexação, gargalos de rastreamento e oportunidades de melhoria com plano de ação claro.',
    deliverables: [
      'Diagnóstico de SEO Técnico Completo',
      'Mapeamento de Erros de Indexação e Rastreamento',
      'Análise de Arquitetura e Velocidade (Core Web Vitals)',
      'Avaliação de Palavras-Chave e Oportunidades Orgânicas',
      'Relatório Técnico Detalhado com Priorização de Ações',
    ],
    whatsappMessage: 'Olá! Tenho interesse no serviço de Auditoria de SEO (R$ 1.447,00) para o meu site. Gostaria de entender os próximos passos.',
  },
  {
    id: 'seo-performance',
    name: 'Plano SEO Performance',
    tagline: 'Evolução contínua e consistente da sua autoridade orgânica mês a mês.',
    price: 'R$ 2.447,00',
    priceNumeric: 2447,
    highlighted: true,
    description: 'Serviço estruturado para crescimento orgânico progressivo com foco na criação de conteúdo qualificado e expansão de relevância.',
    deliverables: [
      '4 artigos por mês orientados a intenção de busca',
      '3 backlinks por mês para construção de autoridade',
      'Acompanhamento mensal de posicionamento orgânico',
      'Otimizações contínuas de SEO on-page',
      'Relatório de evolução de visibilidade',
    ],
    whatsappMessage: 'Olá! Gostaria de contratar o plano SEO Performance (R$ 2.447,00) para evoluir a presença orgânica do meu negócio.',
  },
  {
    id: 'seo-authority-elite',
    name: 'SEO Authority Elite',
    tagline: 'O plano mais abrangente para dominar o nicho local e construir autoridade máxima.',
    price: 'R$ 3.247,00',
    priceNumeric: 3247,
    description: 'Solução completa para empresas e profissionais que buscam consolidação definitiva de marca no Google e multiplicação de pontos de contato.',
    deliverables: [
      'Auditoria Full-Stack e Técnico Avançado',
      'SEO Semântico e Arquitetura de Silos',
      'Estratégia de Conteúdo E-E-A-T',
      'Link Building Premium (Outreach e Authority)',
      'Dominação no Google Business Profile',
      'Otimização de Conversão (CRO)',
      'Relatórios de Inteligência de Negócio',
      'Suporte Prioritário',
    ],
    whatsappMessage: 'Olá! Tenho interesse no plano mais completo: SEO Authority Elite (R$ 3.247,00). Podemos conversar sobre o meu projeto?',
  },
];

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages e Sites de Alta Conversão',
    subtitle: 'Estruturas profissionais desenvolvidas para transformar tráfego em contatos comerciais.',
    description: 'Apresente seu negócio de forma profissional e persuasiva. Desenvolvemos páginas responsivas, rápidas e orientadas a CRO, destacando os diferenciais da sua empresa e facilitando a tomada de decisão do visitante.',
    benefits: [
      'Layout limpo, contemporâneo e sem distrações visuais',
      'Hierarquia comercial que conduz o leitor à ação imediata',
      'Velocidade extrema de carregamento em redes 4G/5G',
      'Integração direta com WhatsApp e formulários de contato',
      'Totalmente adaptado para navegação em smartphones',
    ],
    actionLabel: 'Saber mais sobre Landing Pages',
    actionUrl: getWhatsAppLink('Olá! Gostaria de saber mais sobre o desenvolvimento de uma Landing Page de Alta Conversão para o meu negócio.'),
  },
  {
    id: 'seo-local',
    title: 'SEO Local e Google Business Profile',
    subtitle: 'Seja a primeira opção quando clientes da sua cidade buscarem pelo seu serviço no Google.',
    description: 'Estruturação estratégica da sua presença local para destacar sua empresa nas buscas de mapa e resultados locais do Google. Informações consistentes, categorias precisas e melhor aproveitamento do perfil empresarial.',
    benefits: [
      'Configuração e otimização completa do Perfil da Empresa (Google Meu Negócio)',
      'Padronização de informações de contato, horários e serviços',
      'Estratégia para obtenção e gestão de avaliações 5 estrelas',
      'Otimização semântica para pesquisas geolocalizadas "perto de mim"',
      'Aumento direto de ligações, rotas no mapa e conversas no WhatsApp',
    ],
    actionLabel: 'Saber mais sobre SEO Local',
    actionUrl: getWhatsAppLink('Olá! Gostaria de saber mais sobre SEO Local e otimização do Google Business Profile.'),
  },
];

export const HOW_IT_WORKS_STEPS = [
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
];

export const TARGET_SEGMENTS: TargetSegment[] = [
  {
    id: 'profissionais-liberais',
    title: 'Profissionais Liberais e Autônomos',
    description: 'Advogados, contadores, consultores e peritos que precisam transmitir segurança e fechar novos contratos.',
    iconName: 'Briefcase',
    benefit: 'Autoridade imediata e captação qualificada.',
  },
  {
    id: 'clinicas-estetica',
    title: 'Clínicas de Estética e Beleza',
    description: 'Espaços que necessitam atrair novos pacientes locais para procedimentos faciais e corporais.',
    iconName: 'Sparkles',
    benefit: 'Agenda preenchida com pacientes da sua região.',
  },
  {
    id: 'academias-estudios',
    title: 'Academias, Studios e Pilates',
    description: 'Negócios com raio de atendimento geográfico delimitado onde a busca local no mapa decide a matrícula.',
    iconName: 'Dumbbell',
    benefit: 'Mais visitas presenciais e leads no WhatsApp.',
  },
  {
    id: 'personal-trainers',
    title: 'Personal Trainers',
    description: 'Profissionais de educação física que buscam valorizar seu trabalho e conquistar alunos particulares.',
    iconName: 'Activity',
    benefit: 'Página exclusiva para apresentar método e resultados.',
  },
  {
    id: 'dentistas',
    title: 'Dentistas e Clínicas Odontológicas',
    description: 'Consultórios odontológicos que oferecem implantes, ortodontia e estética dental.',
    iconName: 'Smile',
    benefit: 'Destaque no mapa do Google para pesquisas de urgência e tratamentos.',
  },
  {
    id: 'medicos',
    title: 'Médicos e Especialistas',
    description: 'Médicos de diversas especialidades que desejam fortalecer presença digital ética e receber novos agendamentos.',
    iconName: 'Stethoscope',
    benefit: 'Posicionamento ético e informativo que gera confiança.',
  },
  {
    id: 'arquitetos-engenheiros',
    title: 'Arquitetos e Engenheiros',
    description: 'Escritórios de projetos e obras que precisam de uma vitrine impecável para propostas de alto padrão.',
    iconName: 'Compass',
    benefit: 'Portfólio refinado com foco em fechamento de projetos.',
  },
  {
    id: 'negocios-locais',
    title: 'Outros Negócios Locais',
    description: 'Empresas de serviços que dependem de clientes que moram ou trabalham na mesma região.',
    iconName: 'Store',
    benefit: 'Visibilidade expressiva no Google Maps.',
  },
];

export const DIFFERENTIALS = [
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
];

export const GOOGLE_ADS_STAGES = [
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
];

export const GOOGLE_ADS_BOUNDARIES = [
  {
    isIncluded: true,
    text: 'Criação da conta Google Ads quando necessária',
  },
  {
    isIncluded: true,
    text: 'Estruturação completa dos grupos de anúncio e palavras-chave',
  },
  {
    isIncluded: true,
    text: 'Configuração inicial das tags de conversão',
  },
  {
    isIncluded: true,
    text: 'Otimização inicial após primeiras impressões para refinar termos',
  },
  {
    isIncluded: false,
    text: 'NÃO inclui gestão mensal contínua ou acompanhamento recorrente',
  },
  {
    isIncluded: false,
    text: 'NÃO inclui o orçamento pago ao Google (verba de mídia é paga diretamente pelo cliente ao Google)',
  },
  {
    isIncluded: false,
    text: 'NÃO promete garantia de faturamento fixo, leads mínimos ou custo por aquisição pré-definido',
  },
];

export const SEO_FAQS: FAQItem[] = [
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
    answer: 'A Auditoria de SEO (R$ 1.447) é um diagnóstico pontual completo para identificar erros e oportunidades com plano de ação. Já os planos mensais (SEO Performance e SEO Authority Elite) são serviços de execução contínua com entregas regulares de artigos, backlinks e otimizações.',
  },
  {
    question: 'O que são backlinks e por que eles são importantes?',
    answer: 'Backlinks são links de outros sites apontando para o seu. Para os mecanismos de busca, links de qualidade funcionam como votos de confiança, transferindo autoridade e ajudando suas páginas a conquistarem melhores posições.',
  },
];

export const GOOGLE_ADS_FAQS: FAQItem[] = [
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
];

// Official Social Proof: Real YouTube video testimonials and authentic Google Maps review screenshots
export const REAL_SOCIAL_PROOF_ITEMS: SocialProofItem[] = [
  {
    id: 'yt-7Ism2nc0Opc',
    type: 'youtube-video',
    videoId: '7Ism2nc0Opc',
    title: 'Depoimento em Vídeo de Cliente',
    author: 'Cliente Auditoria SEO',
    subtitle: 'Depoimento em Vídeo no YouTube',
    youtubeUrl: 'https://youtube.com/shorts/7Ism2nc0Opc?si=3oMwseggJMBwj25S',
    thumbnailUrl: 'https://img.youtube.com/vi/7Ism2nc0Opc/hqdefault.jpg',
  },
  {
    id: 'g-rev-07',
    type: 'google-review-screenshot',
    title: 'Resumo de Avaliações: 5,0 Estrelas',
    author: 'Ficha Oficial no Google Maps',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_07_54cafffb.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: 'Resumo oficial com nota máxima 5,0 estrelas verificada no Google Maps da Auditoria SEO.',
  },
  {
    id: 'g-rev-02',
    type: 'google-review-screenshot',
    title: 'Avaliação de Alex Caldeira & Ana Paula Gontijo',
    author: 'Alex Caldeira (Local Guide) & Ana Paula',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_02_62d68d72.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: '"Colocou meu consultório sempre entre os primeiros no Google e trouxe bastante clientes..."',
  },
  {
    id: 'yt-TQ2EWgDloOI',
    type: 'youtube-video',
    videoId: 'TQ2EWgDloOI',
    title: 'Depoimento em Vídeo de Cliente',
    author: 'Cliente Auditoria SEO',
    subtitle: 'Depoimento em Vídeo no YouTube',
    youtubeUrl: 'https://youtube.com/shorts/TQ2EWgDloOI?si=-Pnw70-1SY4Lt8iw',
    thumbnailUrl: 'https://img.youtube.com/vi/TQ2EWgDloOI/hqdefault.jpg',
  },
  {
    id: 'g-rev-04',
    type: 'google-review-screenshot',
    title: 'Avaliação de Jose Diniz & Helder Borges',
    author: 'Jose Diniz (Local Guide) & Helder Borges',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_04_b25dab45.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: '"Show de agência... São comprometidos em ajudar de fato o nosso comércio, buscando aprimorar e aproximar mais clientes..."',
  },
  {
    id: 'g-rev-01',
    type: 'google-review-screenshot',
    title: 'Avaliação de Guilherme Barini & José Dias',
    author: 'Guilherme Barini & José Dias',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_01_860cd493.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: '"Me ajudaram muito a divulgar meu estúdio!" - Avaliação autêntica no Google Maps.',
  },
  {
    id: 'g-rev-05',
    type: 'google-review-screenshot',
    title: 'Avaliação de Lauro dos Santos & Larissa Biglia',
    author: 'Lauro dos Santos & Larissa Biglia',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_05_8dc6cc8d.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: '"Excelentes profissionais, dedicados e já estou colhendo frutos dessa parceria."',
  },
  {
    id: 'g-rev-03',
    type: 'google-review-screenshot',
    title: 'Avaliação de Jonathan G. N. Costa & Enéias Tiago',
    author: 'Jonathan G. N. Costa & Enéias Tiago',
    screenshotUrl: '/assets/aistudio/avalia__o_auditoria_SEO_03_995f272e.jpeg',
    directReviewUrl: 'https://share.google/LAMoroMJbdrI9QCsk',
    description: 'Avaliações confirmadas de clientes para campanhas e páginas de alta conversão.',
  },
];

