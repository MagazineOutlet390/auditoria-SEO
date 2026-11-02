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
    _id: 'post-como-encontrar-dominio-expirado',
    title: 'Como Encontrar Domínio Expirado com Backlinks de Sites Grandes (Passo a Passo)',
    slug: { current: 'como-encontrar-dominio-expirado' },
    excerpt: 'Guia prático e aprofundado para encontrar domínios expirados com backlinks reais de portais de autoridade. Aprenda o método de Broken Link Building Invertido, auditoria no Wayback Machine e validação no Registro.br.',
    readingTimeMinutes: 14,
    category: 'SEO Técnico',
    tags: ['Domínios Expirados', 'Backlinks', 'Link Building', 'SEO Técnico', 'Registro.br'],
    publishedAt: '2026-11-02T14:30:00Z',
    updatedAt: '2026-11-02T14:30:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO & Especialista em Tráfego',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-como-encontrar-dominio-expirado.webp',
      },
      alt: 'Lupa sobre uma barra de navegador com o endereço www marcado com carimbo de expirado, ao lado de um alerta e de um calendário, ilustrando a busca por domínios expirados para SEO',
    },
    seoTitle: 'Como Encontrar Domínio Expirado com Backlinks de Sites Grandes (Passo a Passo) | Auditoria SEO',
    metaDescription: 'Aprenda a encontrar domínios expirados com backlinks reais e autoridade limpa. Passo a passo com Semrush, validação no Registro.br e auditoria no Wayback Machine.',
    body: [
      'Todo dia, milhares de sites na internet deixam de ser renovados por empresas que fecharam, projetos descontinuados ou simples esquecimento de seus proprietários.',
      'Quando esse abandono acontece, ocorre um fenômeno clássico da web conhecido como <em>link rot</em> (degradação de links): portais de notícias, jornais, universidades e órgãos governamentais continuam apontando links editoriais para um endereço que não existe mais.',
      'Para quem atua com SEO e estratégia digital, a perspectiva de registrar um domínio que já possui histórico e recomendações de peso no Google é tentadora. Afinal, construir autoridade do zero exige meses ou anos de produção consistente.',
      'No entanto, a verdade sobre o mercado de domínios expirados é categórica: <strong>a grande maioria dos domínios abandonados é lixo digital</strong>. Muitos foram utilizados para esquemas automatizados de cassino, apostas, redes privadas de blogs (PBNs) ou carregam penalizações manuais algorítmicas severas.',
      'Neste guia prático e documental, você aprenderá exatamente como garimpar domínios que realmente valem a pena, como executar o método conhecido no mercado como <strong>Broken Link Building Invertido</strong>, como auditar a segurança histórica no Wayback Machine e como validar a disponibilidade no Registro.br sem correr riscos desnecessários.',
      '### O que é um domínio expirado e por que ele atrai o mercado de SEO',
      'Um domínio expirado é aquele cujo período de contratação terminou e o titular anterior não efetuou o pagamento da renovação dentro dos prazos concedidos pela entidade registradora. Após as etapas de tolerância e congelamento, o endereço é removido e volta a ficar disponível para qualquer pessoa ou empresa registrá-lo pelo preço padrão de tabela.',
      'O interesse do mercado de SEO nesse ativo reside no acúmulo histórico de sinais. Quando um domínio antigo esteve no ar por cinco ou dez anos prestando um serviço genuíno, ele frequentemente recebeu links de portais de imprensa, menções acadêmicas e referências espontâneas. Ao registrar esse domínio, esses backlinks voltam a ter um destino ativo.',
      'Entretanto, é fundamental desmistificar uma crença comum: <strong>comprar um domínio expirado não é garantia de primeiras posições automáticas no Google</strong>. O algoritmo de classificação do Google evoluiu substancialmente e avalia não apenas a existência do link, mas a coerência temática entre a página de origem e o conteúdo atual do site.',
      'Se o histórico do domínio tiver lacunas suspeitas ou redirecionamentos para nichos predatórios, o novo proprietário herdará apenas problemas de indexação e suspeitas de manipulação.',
      '### Onde procurar domínios expirados: listas públicas versus Broken Link Building Invertido',
      'Existem essencialmente dois caminhos para localizar domínios que saíram do ar: o caminho das listas públicas e o método investigativo direcionado.',
      'O primeiro caminho baseia-se em agregadores públicos de leilões e listas de expiração (como ExpiredDomains.net ou as próprias tabelas de liberação do Registro.br). O problema desse caminho é que centenas de robôs de corretores de domínios (domainers) e operadores de leilão monitoram essas mesmas listas a cada segundo. Os poucos domínios com métricas visíveis de destaque acabam sendo disputados em lances inflacionados.',
      'O segundo caminho — e o mais eficiente para encontrar ativos de nicho com perfil limpo — é o <strong>Broken Link Building Invertido</strong>.',
      'O método tradicional de Broken Link Building consiste em encontrar links quebrados em sites de terceiros e enviar e-mails aos editores sugerindo que apontem para o seu conteúdo existente. Já na versão invertida, você não pede favores nem depende da resposta de nenhum editor: você identifica quais sites externos mencionados por grandes referências deixaram de existir, isola o domínio correspondente e verifica se ele está elegível para novo registro imediato.',
      '### Passo a passo com o Semrush: identificando páginas quebradas com backlinks',
      'Para executar essa investigação com dados consistentes, ferramentas de análise de concorrentes e backlinks como o Semrush ou o Ahrefs são de grande valia.',
      'O processo consiste em analisar um grande portal ou diretório de referência do seu nicho (jornais regionais, associações de classe, diretórios acadêmicos ou guias especializados) para rastrear para onde esse portal aponta links externos que caíram no esquecimento.',
      'Abaixo, documentamos a interface do Semrush na seção de Análise de Backlinks:',
      '<figure class="my-8"><img src="/images/blog/print-semrush-paginas-quebradas.png" alt="Tela do Semrush, em Backlink Analytics, aba Indexed Pages, com o filtro Broken Pages marcado e uma lista de páginas com erro 404 e seus backlinks" width="1280" height="720" loading="lazy" class="w-full h-auto rounded-xl border border-slate-200/90 shadow-sm" /><figcaption class="mt-2 text-xs text-slate-500 text-center">Print do Semrush (Backlink Analytics &gt; Indexed Pages &gt; Broken Pages), capturado em 02/11/2026. O site analisado serve apenas de exemplo da interface.</figcaption></figure>',
      '<p class="text-xs bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-amber-900 leading-relaxed font-medium"><strong>Distinção Técnica Importante:</strong> O relatório de páginas quebradas (Broken Pages) exibido acima identifica URLs internas do próprio domínio examinado que retornam erro HTTP 404 e ainda sustentam backlinks externos. Isso demonstra a capacidade da ferramenta de catalogar links apontando para páginas inexistentes. O mesmo raciocínio investigativo deve ser aplicado na aba <strong>Outbound Domains</strong> (Domínios de Saída) da ferramenta para localizar domínios de terceiros mencionados que já expiraram. Uma página 404 interna não significa que o domínio principal esteja à venda.</p>',
      'Ao examinar o relatório de páginas e links de saída no Semrush, observe atentamente três colunas essenciais:',
      '1. <strong>Backlinks:</strong> O volume total de referências que ainda apontam para aquela URL. Volumes anormalmente altos em poucas páginas podem sinalizar automações passadas.',
      '2. <strong>Domains (Domínios de Referência):</strong> A métrica mais relevante. Cinco backlinks vindos de cinco domínios distintos de imprensa possuem muito mais valor algorítmico do que quinhentos backlinks vindos de um único fórum ou rodapé.',
      '3. <strong>Last Seen:</strong> A data mais recente em que os robôs da ferramenta confirmaram a presença do link ativo. Links confirmados recentemente têm maior probabilidade de continuarem vivos no código-fonte.',
      '### Como confirmar a disponibilidade no Registro.br',
      'Depois de isolar um domínio que pareça abandonado, o passo seguinte não é comprá-lo de imediato, mas conferir o seu <strong>status regulatório oficial</strong>.',
      'Nem todo domínio fora do ar está disponível para compra. Existe uma enorme diferença entre um site temporariamente com erro de servidor, um domínio suspenso por falta de pagamento e um domínio efetivamente cancelado e aberto ao público.',
      'No Brasil, a autoridade responsável pela extensão <code>.br</code> é o <strong>Registro.br</strong> (NIC.br). O ciclo de vida de um domínio <code>.com.br</code> segue etapas formais com regras e prazos bem determinados:',
      '1. <strong>Vencido (dias 1 a 14):</strong> O domínio ultrapassou a data de validade, mas o site e os e-mails continuam funcionando normalmente. O titular original pode renová-lo a qualquer momento.',
      '2. <strong>Congelado (aproximadamente do 15º ao 104º dia):</strong> Os servidores DNS são desativados, e o site sai do ar. Contudo, o domínio continua registrado em nome do proprietário antigo, que pode reativá-lo quitando a anuidade.',
      '3. <strong>Processo de Liberação:</strong> Se o titular não quitar o domínio após o período de congelamento, o domínio é formalmente cancelado e entra na fila oficial do Processo de Liberação do Registro.br. O calendário desse processo ocorre periodicamente ao longo do ano.',
      'A lista oficial dos domínios participantes é divulgada publicamente no site do Registro.br 2 dias antes da abertura das candidaturas. Durante o período de candidatura, qualquer interessado com CPF ou CNPJ regular pode submeter um pedido de registro:',
      '• Se houver apenas <strong>um único interessado</strong>, o domínio é concedido a ele ao término do processo.',
      '• Se houver <strong>mais de um candidato</strong> para o mesmo endereço, o domínio entra em processo de disputa conforme as regras oficiais do Registro.br.',
      '### O pente fino de segurança: auditando o histórico no Wayback Machine',
      'Antes de cogitar investir qualquer valor ou associar seu nome a um domínio expirado, a consulta ao <strong>Wayback Machine (Internet Archive)</strong> é uma etapa mandatória.',
      'É crucial entender o alcance desta ferramenta: <strong>a consulta ao Wayback Machine é uma investigação histórica de conteúdo, e não uma auditoria técnica completa de segurança</strong>. A ausência de registros em determinado ano não garante que o domínio esteve inativo; pode apenas indicar que os robôs do arquivo não rastrearam a página naquele período.',
      'Ao navegar pelo calendário de capturas do arquivo histórico, investigue os seguintes aspectos:',
      '1. <strong>Coerência de Nicho:</strong> O domínio sempre pertenceu ao mesmo segmento? Por exemplo, se o domínio era de uma clínica médica tradicional em Curitiba e, subitamente, entre 2022 e 2024 passou a exibir textos em chinês sobre jogos de azar, você está diante de um domínio que já foi sequestrado e explorado para spam.',
      '2. <strong>Redirecionamentos Ocultos:</strong> Verifique se em algum ano o domínio foi configurado para redirecionar em massa para portais de terceiros, afiliados agressivos ou páginas maliciosas.',
      '3. <strong>Páginas Doorway e Conteúdo Automatizado:</strong> Desconfie de domínios que repentinamente geraram centenas de páginas em subpastas com textos desconexos repletos de palavras-chave comerciais.',
      'Se o domínio apresentar qualquer histórico comprovado de spam de cassino, farmácia clandestina ou exploração maliciosa, <strong>descarte-o imediatamente</strong>.',
      '### Avaliação do perfil de backlinks: relevância antes de métricas genéricas',
      'Um dos maiores erros cometidos por profissionais iniciantes é avaliar a qualidade de um domínio expirado olhando unicamente para métricas de terceiros, como Domain Authority (Moz), Domain Rating (Ahrefs) ou Authority Score (Semrush).',
      'É fundamental reiterar: <strong>essas pontuações são estimativas estatísticas de empresas privadas e NÃO constituem fatores de ranqueamento oficiais do algoritmo do Google</strong>. É perfeitamente possível encontrar domínios com pontuações infladas por redes artificiais de links em diretórios de baixa qualidade que o Google desconsidera integralmente.',
      'Uma avaliação séria de backlinks exige análise qualitativa manual:',
      '• <strong>Relevância Temática:</strong> Quem linkou para esse domínio? Os links vêm de matérias jornalísticas reais, fóruns legítimos ou páginas editoriais que fazem sentido contextual?',
      '• <strong>Texto Âncora (Anchor Text):</strong> A distribuição de âncoras é natural? Um domínio saudável apresenta como âncoras o nome da marca (ex.: "Clínica São José"), o endereço puro da URL ("www.exemplo.com.br") ou frases neutras ("no site", "leia mais"). Se o perfil de âncoras estiver dominado por termos como "jogo do tigrinho", "apostas online" ou nomes de medicamentos controlados, o domínio foi queimado.',
      '• <strong>Atributos dos Links:</strong> Qual a proporção entre links <code>dofollow</code> e links marcados como <code>nofollow</code>, <code>ugc</code> ou <code>sponsored</code>? Links editoriais sem atributos restritivos possuem maior peso histórico.',
      '### Diagnóstico preliminar de indexação e suspeitas de penalização',
      'Outro teste comum executado por profissionais de SEO é a consulta de indexação no Google através do comando de busca avançada: <code>site:nomedodominio.com.br</code>.',
      'Se o comando retornar páginas ainda indexadas com títulos e descrições condizentes com o histórico legítimo, trata-se de um indicativo favorável de que o domínio não foi expurgado da base do buscador.',
      'Entretanto, é preciso manter a precisão metodológica: <strong>a ausência total de resultados no comando <code>site:</code> NÃO é prova conclusiva de penalização algorítmica ou manual</strong>.',
      'Quando um site fica fora do ar por meses, os robôs do Google (Googlebot) se deparam com erros de DNS ou HTTP 404 sucessivos e, com o tempo, limpam naturalmente essas URLs inativas do índice para não entregar resultados quebrados aos usuários.',
      'A confirmação irrefutável de uma ação manual só pode ser obtida por quem possui a propriedade verificada no <strong>Google Search Console</strong>, na seção "Segurança e ações manuais". Sem acesso a essa ferramenta proprietária, qualquer afirmação sobre penalização é apenas uma hipótese.',
      '### Tabela comparativa: sinais verdes versus sinais vermelhos',
      'Para facilitar a tomada de decisão antes de formalizar qualquer registro, utilize a tabela de critérios objetivos abaixo:',
      '<div class="overflow-x-auto my-8 border border-slate-200/90 rounded-2xl shadow-sm"><table class="min-w-full divide-y divide-slate-200 text-sm text-left"><thead class="bg-slate-50"><tr class="text-slate-900 font-bold text-xs uppercase tracking-wider"><th scope="col" class="px-6 py-4">Critério de Avaliação</th><th scope="col" class="px-6 py-4 text-emerald-800 bg-emerald-50/70">Sinais Verdes (Domínio Promissor)</th><th scope="col" class="px-6 py-4 text-red-800 bg-red-50/70">Sinais Vermelhos (Descarte Imediato)</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white text-slate-700"><tr><td class="px-6 py-4 font-semibold text-slate-900">Histórico no Wayback Machine</td><td class="px-6 py-4">Conteúdo estável no mesmo nicho ao longo de toda a existência; sem interrupções suspeitas.</td><td class="px-6 py-4">Histórico de redirecionamentos para cassinos, pornografia, farmácia ilegal ou artigos automatizados.</td></tr><tr><td class="px-6 py-4 font-semibold text-slate-900">Perfil de Âncoras</td><td class="px-6 py-4">Predomínio de âncoras de marca, URLs limpas e termos naturais em português.</td><td class="px-6 py-4">Âncoras em idiomas estrangeiros (chinês/russo), palavras-chave de apostas ou remédios.</td></tr><tr><td class="px-6 py-4 font-semibold text-slate-900">Origem dos Backlinks</td><td class="px-6 py-4">Veículos de imprensa conhecidos, instituições de ensino (.edu), órgãos públicos (.gov) ou blogs de nicho reais.</td><td class="px-6 py-4">Diretórios automatizados de links, comentários em massa de blogs ou redes de links artificiais.</td></tr><tr><td class="px-6 py-4 font-semibold text-slate-900">Relevância Temática</td><td class="px-6 py-4">O assunto histórico do domínio tem relação direta com o nicho do seu novo projeto.</td><td class="px-6 py-4">Nenhuma aderência temática (ex.: tentar usar um domínio antigo de mecânica para ranquear uma clínica de estética).</td></tr><tr><td class="px-6 py-4 font-semibold text-slate-900">Status no Registro.br</td><td class="px-6 py-4">Cancelado e disponível oficialmente no processo de liberação pública.</td><td class="px-6 py-4">Ainda em fase de congelamento do antigo dono ou sob litígio judicial de marca.</td></tr></tbody></table></div>',
      '### O que fazer depois do registro: reconstrução legítima versus redirecionamento 301',
      'Após registrar o domínio expirado com segurança e regularidade, surge a dúvida operacional: como utilizá-lo na sua estratégia de negócio?',
      'Há dois caminhos fundamentais com objetivos distintos:',
      '#### Opção 1: Reconstrução de Conteúdo Legítimo no Mesmo Nicho (Recomendada)',
      'Consiste em recriar um site ativo, contemporâneo e útil sob aquele mesmo domínio, respeitando o nicho original de atuação.',
      'Essa é a abordagem mais sólida e duradoura. Você restaura a utilidade do domínio para os usuários, recupera as páginas institucionais e editoriais que recebiam os melhores backlinks e passa a publicar novos conteúdos atualizados.',
      'Ao manter a intenção e a semântica originais, os links antigos continuam fazendo sentido editorial e o Google mantém a relevância dos sinais transmitidos.',
      '#### Opção 2: Redirecionamento 301 Mapeado URL por URL',
      'O redirecionamento 301 permanente é uma técnica frequentemente mal utilizada por quem busca atalhos. Apontar um domínio expirado inteiro diretamente para a página inicial do seu site principal (redirecionamento genérico em massa) é uma prática que o Google aprendeu a neutralizar: na maioria dos casos, o buscador trata esses redirecionamentos arbitrários como <em>soft 404</em>, ignorando a transferência de sinais.',
      'O único formato tecnicamente sustentável de redirecionamento 301 exige <strong>correspondência temática estrita URL por URL</strong>:',
      '• Se o domínio expirado tinha uma URL específica como <code>/guia-cuidados-pos-operatorios</code> com backlinks de jornais de saúde, você só deve redirecioná-la para uma página correspondente no seu site que trate com profundidade exatamente sobre cuidados pós-operatórios.',
      '• URLs sem equivalente temático não devem ser redirecionadas.',
      '#### A Política Oficial do Google contra Abuso de Domínio Expirado (Expired Domain Abuse)',
      'Em março de 2024, o Google atualizou oficialmente suas diretrizes de qualidade na documentação do <em>Google Search Central</em>, introduzindo uma cláusula explícita sobre o **Abuso de Domínios Expirados** (<em>Expired Domain Abuse</em>).',
      'A documentação oficial define essa violação como a compra de nomes de domínios expirados e sua reutilização com a intenção principal de manipular classificações de busca, hospedando conteúdos que agregam pouco ou nenhum valor real aos usuários.',
      'O Google esclarece expressamente que <strong>não é proibido registrar um domínio antigo para um projeto legítimo</strong>, desde que o novo site seja construído pensando no usuário em primeiro lugar, e não como uma manobra artificial para herdar autoridade sobre tópicos desconexos. Sites que violam essa diretriz estão sujeitos a rebaixamento algorítmico e remoção integral dos resultados de busca.',
      '### Checklist objetivo de análise de domínio expirado',
      'Antes de tomar a decisão final de compra ou disputa de qualquer domínio, execute esta lista de checagem sequencial em 10 etapas:',
      '<div class="my-8 p-6 sm:p-8 bg-slate-50 border border-slate-200/90 rounded-2xl shadow-sm"><h4 class="text-base font-extrabold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-[#1A73E8]"></span><span>Checklist Editorial de Auditoria (10 Etapas)</span></h4><ol class="space-y-3 text-sm text-slate-700 leading-relaxed list-decimal list-inside font-medium"><li><strong>Consulta oficial de status:</strong> Conferir no Registro.br ou Whois se o domínio está de fato liberado para registro, e não em fase de congelamento do proprietário original.</li><li><strong>Inspeção cronológica no Wayback Machine:</strong> Analisar capturas históricas ano a ano desde a primeira data registrada em busca de quebras temáticas.</li><li><strong>Verificação de termos de risco no histórico:</strong> Averiguar se em algum momento houve injeção de palavras como cassino, apostas, remédios, pornografia ou idiomas asiáticos.</li><li><strong>Mapeamento das âncoras de links:</strong> Confirmar que mais de 70% das âncoras consistem em nome de marca ou variações naturais de endereço.</li><li><strong>Checagem dos domínios de referência principais:</strong> Garantir que os links mais relevantes pertencem a sites de imprensa, órgãos públicos ou portais com tráfego real.</li><li><strong>Proporção Dofollow/Nofollow:</strong> Avaliar se existem links contextuais livres de atributos patrocinados ou de spam automatizado em fóruns.</li><li><strong>Teste do comando site: no Google:</strong> Checar se ainda constam páginas no índice ou se o domínio foi totalmente desindexado há anos.</li><li><strong>Aderência ao nicho do projeto:</strong> Confirmar se o tema original do domínio tem afinidade semântica com o negócio que será desenvolvido.</li><li><strong>Ausência de litígio ou marca registrada:</strong> Verificar no INPI se o termo não viola marcas registradas ativas de terceiros no Brasil.</li><li><strong>Definição do plano de uso pós-registro:</strong> Ter previamente estruturado o projeto de reconstrução com conteúdo original ou mapeamento 301 criterioso.</li></ol></div>',
      '### Perguntas Frequentes sobre Domínios Expirados (FAQ)',
      '#### Vale a pena comprar domínio expirado para um site novo?',
      'Vale a pena somente se você encontrar um domínio com histórico limpo e que pertença rigorosamente ao mesmo nicho da sua empresa. Se o domínio tiver sido explorado com spam ou não guardar relação com o seu setor, você gastará tempo e dinheiro para resolver problemas herdados.',
      '#### O que diz a política do Google sobre o uso de domínios expirados?',
      'O Google atualizou suas políticas de spam para combater o <em>Expired Domain Abuse</em>. É permitido adquirir domínios expirados para construir projetos novos de qualidade voltados aos usuários, mas é expressamente proibido usá-los como atalho predatório de ranqueamento para hospedar conteúdo irrelevante.',
      '#### Como saber se o domínio tem penalização manual no Google?',
      'A certeza de uma ação manual só pode ser verificada através do painel de "Segurança e ações manuais" dentro do Google Search Console após comprovar a propriedade do domínio. Pesquisas públicas como <code>site:</code> oferecem apenas um diagnóstico preliminar de indexação.',
      '#### Quanto tempo leva para um domínio ser liberado no Registro.br?',
      'Após o término da anuidade, o domínio permanece ativo por 14 dias e entra em congelamento por cerca de 90 dias adicionais. Somente após essa fase ele entra na fila do Processo de Liberação oficial do Registro.br, cujas listas são publicadas 2 dias antes do início do ciclo de candidaturas.',
      '#### Fazer redirecionamento 301 do domínio expirado inteiro para a home funciona?',
      'Não. O Google identifica redirecionamentos genéricos em massa de domínios inteiros para páginas iniciais de outros sites e costuma tratá-los como soft 404, neutralizando a transmissão de autoridade. O redirecionamento precisa ser mapeado individualmente para páginas de conteúdo correspondente.',
      '### Conclusão e Próximos Passos',
      'Encontrar um domínio expirado de qualidade com backlinks de sites de grande porte não é fruto de sorte ou automação cega: é um trabalho investigativo que combina mineração de dados, rigor técnico e honestidade metodológica.',
      'Antes de registrar qualquer endereço, reserve tempo para investigar cada snapshot no Wayback Machine, inspecione a autenticidade dos links e certifique-se de que o projeto planejado respeita as diretrizes de qualidade do Google.',
      'Se o seu objetivo é acelerar a visibilidade da sua empresa com bases técnicas sólidas, conheça os serviços estruturados da <a href="/" class="text-[#1A73E8] font-semibold hover:underline">Auditoria SEO</a> e confira nossos <a href="/servicos-seo" class="text-[#1A73E8] font-semibold hover:underline">Planos Especializados de SEO</a> e SEO Local.',
      '### Fontes Consultadas e Referências Oficiais',
      '1. Google Search Central: <a href="https://developers.google.com/search/docs/essentials/spam-policies#expired-domain-abuse" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] hover:underline">Spam Policies for Google Web Search — Expired Domain Abuse</a> (Março de 2024).',
      '2. Registro.br (NIC.br): <a href="https://registro.br" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] hover:underline">Regulamento e Calendário Oficial do Processo de Liberação de Domínios .br</a>.',
      '3. Internet Archive: <a href="https://archive.org/web/" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] hover:underline">Wayback Machine — Consulta Histórica de Snapshots de Conteúdo</a>.',
      '4. Semrush Knowledge Base: <a href="https://www.semrush.com/kb/" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] hover:underline">Documentação Oficial da Ferramenta Backlink Analytics e Relatório de Páginas Quebradas</a>.',
    ],
  },
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
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO & Especialista em Tráfego',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
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
