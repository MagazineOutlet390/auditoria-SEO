import { SanityPost } from '../types';

export const SANITY_CONFIG = {
  projectId: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_PROJECT_ID) || (typeof process !== 'undefined' && process.env?.VITE_SANITY_PROJECT_ID) || '',
  dataset: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_DATASET) || (typeof process !== 'undefined' && process.env?.VITE_SANITY_DATASET) || 'production',
  apiVersion: '2024-03-01',
  isConfigured: Boolean((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_PROJECT_ID) || (typeof process !== 'undefined' && process.env?.VITE_SANITY_PROJECT_ID)),
};

export const SANITY_SCHEMA_DEFINITION = `
// schemas/post.ts (Sanity Studio schema definition)
export default {
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    },
    {
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Resumo do Artigo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Conteúdo do Artigo (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'SEO Local', value: 'SEO Local' },
          { title: 'SEO Técnico', value: 'SEO Técnico' },
          { title: 'Google Ads', value: 'Google Ads' },
          { title: 'Landing Pages', value: 'Landing Pages' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Nome' },
        { name: 'role', type: 'string', title: 'Cargo' },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'Título SEO (Meta Title)',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
    },
  ],
};
`;

// Initial high-quality articles in Portuguese for SEO authority, used directly or as fallback when Sanity credentials are not present in .env
export const FALLBACK_ARTICLES: SanityPost[] = [
  {
    _id: 'post-1',
    title: 'Como colocar sua empresa no topo do Google Maps com SEO Local',
    slug: { current: 'como-colocar-empresa-topo-google-maps-seo-local' },
    excerpt: 'Descubra os pilares fundamentais do Google Business Profile e como negócios locais conquistam posições de destaque sem gastar fortuna em anúncios.',
    readingTimeMinutes: 5,
    category: 'SEO Local',
    tags: ['Google Maps', 'Google Meu Negócio', 'SEO Local', 'Pequenas Empresas'],
    publishedAt: '2026-03-15T10:00:00Z',
    updatedAt: '2026-03-20T14:30:00Z',
    author: {
      name: 'Wesley',
      role: 'Especialista em SEO e Estratégia Digital',
    },
    seoTitle: 'Como colocar sua empresa no topo do Google Maps com SEO Local | Auditoria SEO',
    metaDescription: 'Aprenda as práticas recomendadas de SEO Local para posicionar sua clínica, consultório ou negócio no topo das buscas do Google.',
    body: [
      'Quando uma pessoa procura por "dentista no centro", "clínica de estética perto de mim" ou "engenheiro civil em Campinas", o Google aciona imediatamente o bloco local (Local 3-Pack).',
      'Estar presente entre esses três primeiros resultados não é uma questão de sorte: é o reflexo de consistência cadastral (NAP: Nome, Endereço e Telefone), relevância das categorias escolhidas e autoridade construída por meio de avaliações genuínas.',
      '### 1. A consistência das informações cadastrais (NAP)',
      'O primeiro erro cometido pela maioria das empresas locais é a divergência de dados. O nome da sua empresa precisa ser idêntico no Perfil do Google, no rodapé da sua landing page e nas menções locais. Pequenas variações geram desconfiança no algoritmo de relevância local.',
      '### 2. A escolha precisa das categorias primária e secundárias',
      'A categoria primária do Google Business Profile possui um peso desproporcional no ranqueamento. Escolha a categoria mais específica possível para a sua atividade central e utilize categorias secundárias apenas para serviços complementares comprovados.',
      '### 3. A estratégia contínua de avaliações autênticas',
      'Avaliações frequentes, detalhadas e respondidas pelo proprietário sinalizam ao Google que o estabelecimento é ativo e recomendado pela comunidade. Incentive seus melhores clientes a mencionar o nome do serviço realizado na avaliação.',
      '### Conclusão',
      'O SEO Local é um dos investimentos com maior retorno para prestadores de serviços. Uma presença bem arquitetada no Google Maps garante fluxo contínuo de contatos no WhatsApp sem dependência de leilões pagos.',
    ],
  },
  {
    _id: 'post-2',
    title: 'Landing Pages que Convertem: O que diferencia uma página que vende de um site comum',
    slug: { current: 'landing-pages-que-convertem-diferenca-site-comum' },
    excerpt: 'Entenda os erros que fazem potenciais clientes abandonarem sites lentos e confusos, e conheça os princípios de CRO essenciais para conversão.',
    readingTimeMinutes: 6,
    category: 'Landing Pages',
    tags: ['CRO', 'Landing Pages', 'Conversão', 'Design'],
    publishedAt: '2026-03-08T09:00:00Z',
    author: {
      name: 'Wesley',
      role: 'Especialista em SEO e Estratégia Digital',
    },
    seoTitle: 'Landing Pages que Convertem: Princípios de CRO | Auditoria SEO',
    metaDescription: 'Saiba como transformar visitantes em oportunidades reais com estruturas pensadas para velocidade, clareza e ação imediata.',
    body: [
      'Muitos empresários investem em tráfego ou SEO, mas direcionam o visitante para páginas institucionais dispersas, cheias de abas irrelevantes, textos prolixos e botões escondidos.',
      'O resultado? Taxa de rejeição elevada e a sensação frustrante de que "a internet não funciona para o meu ramo".',
      '### O princípio da mensagem única',
      'Uma landing page de alta conversão resolve uma única dor para um público definido. Ela elimina menus dispersivos e foca a atenção do leitor em uma sequência lógica: dor, solução, comprovação de competência e chamada para contato.',
      '### Velocidade em dispositivos móveis (Mobile First)',
      'Mais de 75% dos cliques de busca local ocorrem pelo celular. Se sua página demorar mais de 2.5 segundos para carregar em redes móveis convencionais, grande parte dos usuários voltará para os resultados da busca antes mesmo de ler o título.',
      '### O poder do botão de WhatsApp contextual',
      'Não basta colocar um ícone solto de WhatsApp. O botão deve apresentar uma mensagem de abertura inteligente, para que o cliente sinta facilidade ao iniciar a conversa já informando seu interesse específico.',
    ],
  },
  {
    _id: 'post-3',
    title: 'Estruturação de Google Ads: Por que você deve separar campanhas de busca de campanhas genéricas',
    slug: { current: 'estruturacao-google-ads-separar-campanhas-busca' },
    excerpt: 'Evite o desperdício de verba no Google Ads. Saiba como a segmentação cirúrgica de palavras-chave negativas protege seu orçamento.',
    readingTimeMinutes: 7,
    category: 'Google Ads',
    tags: ['Google Ads', 'Tráfego Pago', 'Palavras-chave', 'Orçamento'],
    publishedAt: '2026-02-24T14:00:00Z',
    author: {
      name: 'Wesley',
      role: 'Especialista em SEO e Estratégia Digital',
    },
    seoTitle: 'Estruturação de Google Ads: Como evitar desperdício de verba | Auditoria SEO',
    metaDescription: 'Como estruturar campanhas no Google Ads com grupos temáticos e palavras-chave negativas para atrair clientes reais.',
    body: [
      'O maior gerador de frustração com o Google Ads entre pequenas empresas é o clique irrelevante. Quando a conta não é configurada com exclusões adequadas, o orçamento diário se esgota com pesquisas curiosas ou de quem procura vagas de emprego e cursos gratuitos.',
      '### O papel fundamental da lista de palavras-chave negativas',
      'Antes de subir qualquer anúncio, uma boa estruturação de conta exige a inclusão de dezenas de termos negativos: "grátis", "curso", "como fazer", "salário", "PDF", "faculdade", entre outros.',
      '### Correspondência de frase versus correspondência ampla',
      'Usar correspondência ampla sem controle automatizado é a forma mais rápida de gastar verba com pesquisas sem correlação com intenção de compra. A estruturação inicial deve focar em termos de intenção transacional e comercial.',
      '### Por que a estrutura inicial bem-feita não depende de gestão diária',
      'Para prestadores de serviços locais com raio geográfico definido, uma conta bem estruturada, com lances ajustados e tags de conversão ativas, opera de maneira estável e eficiente sem a necessidade de mensalidades pesadas de gestão.',
    ],
  },
];

export async function fetchSanityPosts(): Promise<SanityPost[]> {
  if (!SANITY_CONFIG.isConfigured) {
    return FALLBACK_ARTICLES;
  }

  const query = encodeURIComponent(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    body,
    category,
    tags,
    author,
    publishedAt,
    updatedAt,
    seoTitle,
    metaDescription,
    "readingTimeMinutes": 5
  }`);

  const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      console.warn('Sanity fetch returned status', res.status, 'using fallback content');
      return FALLBACK_ARTICLES;
    }
    const data = await res.json();
    if (Array.isArray(data.result) && data.result.length > 0) {
      return data.result;
    }
    return FALLBACK_ARTICLES;
  } catch (err) {
    console.warn('Failed to fetch from Sanity CMS, fallback active:', err);
    return FALLBACK_ARTICLES;
  }
}

export async function fetchSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  const all = await fetchSanityPosts();
  return all.find((p) => p.slug?.current === slug) || null;
}
