import { SanityPost } from '../../types';

export const PT_AUDIT_GUIDES: SanityPost[] = [
  {
    _id: 'post-auditoria-seo-on-page',
    title: 'Auditoria SEO On-Page: checklist para analisar cada página',
    slug: { current: 'auditoria-seo-on-page' },
    excerpt:
      'Método prático para auditar elementos on-page URL por URL: leitura de intenção na SERP, organização editorial, title e meta description, hierarquia H1-H3, links internos, imagens e priorização de ajustes.',
    readingTimeMinutes: 14,
    category: 'SEO Técnico',
    tags: [
      'Auditoria SEO On-Page',
      'Checklist SEO On-Page',
      'Análise de Conteúdo',
      'Títulos e Headings',
      'Links Internos',
      'Otimização de Páginas',
    ],
    publishedAt: '2026-11-13T10:00:00Z',
    updatedAt: '2026-11-13T10:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO & Especialista em Tráfego',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-seo-on-page.webp',
      },
      alt: 'Diagrama editorial representando auditoria SEO on page com inspeção de headings, links internos e estrutura de página',
    },
    ogImage: '/images/blog/og-auditoria-seo-on-page.png',
    seoTitle: 'Auditoria SEO On-Page: checklist para analisar cada página | Auditoria SEO',
    metaDescription:
      'Aprenda a executar uma auditoria SEO on-page página por página: intenção de busca, qualidade editorial, title, headings H1-H3, URLs, links internos e prioridades.',
    ogTitle: 'Auditoria SEO On-Page: checklist para analisar cada página',
    ogDescription:
      'Roteiro prático para revisar sinais on-page de cada URL: aderência à SERP, títulos, headings, links internos, mídia e plano de correção.',
    body: [
      'É comum encontrar páginas bem indexadas no Google que, ainda assim, ficam estagnadas na segunda ou terceira página de resultados. Na maioria das vezes, o problema não está no servidor nem em bloqueios de rastreamento, mas no desalinhamento entre o que a URL comunica no HTML e o que quem pesquisa realmente espera resolver ao clicar.',
      'Uma <strong>auditoria SEO on-page</strong> examina justamente essa camada interna de cada página: a aderência do conteúdo à intenção de busca, a clareza de títulos e cabeçalhos, a estrutura semântica do documento e a forma como os links internos contextualizam o assunto dentro do domínio.',
      'Mais do que conferir uma lista genérica de pontuação automática — que costuma reduzir SEO à contagem mecânica de palavras-chave —, este roteiro mostra como inspecionar páginas comerciais, categorias e artigos informativos na prática, validar cada ponto no navegador e ordenar correções pelo impacto editorial.',

      '### O que uma auditoria SEO On-Page realmente avalia',
      'Auditar o on-page de uma URL significa revisar todos os elementos visíveis e estruturais que pertencem exclusivamente àquele documento HTML. Quando você abre o inspetor do navegador em uma página de serviço ou em um artigo, quatro perguntas orientam o diagnóstico: a página responde ao motivo real da busca, o tema principal fica explícito logo no título e nos cabeçalhos, a leitura funciona sem atrito no celular e o texto encaminha o visitante para o próximo passo lógico dentro do site.',
      'Esse processo substitui antigas regras artificiais, como tentar atingir 2% de repetição exata da palavra-chave. Hoje, buscadores interpretam contexto, sinônimos e cobertura de subtópicos. Repetir o mesmo termo cinco vezes em subtítulos ou forçar variações estranhas no primeiro parágrafo prejudica a credibilidade com o leitor sem melhorar a compreensão semântica.',

      '#### Limite de escopo: SEO On-Page vs. SEO Técnico',
      'Misturar diagnósticos on-page com problemas de infraestrutura costuma desperdiçar semanas de trabalho. Reescrever um artigo inteiro não traz visitas se o arquivo <code>robots.txt</code> bloqueia o diretório ou se a tag <code>canonical</code> aponta para a homepage; da mesma forma, acelerar o servidor não resolve uma página de serviço escrita com título vago e texto genérico.',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Camada</th><th class="p-3 border-b border-slate-200">Auditoria SEO On-Page</th><th class="p-3 border-b border-slate-200">Auditoria Técnica de SEO</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Unidade de análise</td><td class="p-3">Página individual (conteúdo, relevância e HTML semântico).</td><td class="p-3">Domínio, servidor, templates e regras globais de indexação.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Sinais inspecionados</td><td class="p-3">Intenção de busca, <code>&lt;title&gt;</code>, meta description, H1–H3, textos-âncora, atributo <code>alt</code>.</td><td class="p-3">Códigos HTTP, <code>robots.txt</code>, <code>noindex</code>, canonical, sitemap XML, CWV em campo.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Sintoma típico</td><td class="p-3">URL indexada que não ranqueia bem ou recebe cliques sem converter.</td><td class="p-3">URL fora do índice, duplicada, lenta no carregamento ou inacessível ao bot.</td></tr></tbody></table></div>',
      'Se a suspeita inicial envolver falhas de rastreamento, redirecionamentos ou exclusão no Google Search Console, o ponto de partida correto é a camada estrutural descrita em nosso guia de <a href="/blog/auditoria-tecnica-seo" class="text-[#1A73E8] font-semibold hover:underline">auditoria técnica de SEO para rastreamento e indexação</a>.',

      '### Diagnóstico de intenção de busca antes de editar qualquer texto',
      'O erro mais custoso em projetos de <strong>otimização de páginas</strong> é alterar títulos e parágrafos no escuro, guiado apenas por volume mensal de busca em uma planilha. Antes de mexer no conteúdo, abra uma janela anônima, pesquise a consulta principal para a região do negócio e observe os dez primeiros resultados orgânicos.',

      '#### Como ler a SERP na prática',
      'Ao analisar a primeira página do Google, avalie quatro sinais objetivos que indicam se a sua URL compete em igualdade de formato:',
      '<ol class="list-decimal pl-6 space-y-2"><li><strong>Natureza predominante da busca:</strong> A consulta busca uma explicação prática (intenção informativa), comparação de critérios e fornecedores (investigação comercial) ou contratação imediata (transacional)?</li><li><strong>Tipo de página premiado:</strong> Os primeiros links são guias passo a passo, páginas comerciais enxutas com escopo e preço transparentes ou páginas de categoria com vários itens?</li><li><strong>Profundidade e lacunas:</strong> O que os artigos ou páginas no topo respondem de maneira superficial, sem exemplos concretos ou sem explicar exceções?</li><li><strong>Compatibilidade da sua URL:</strong> Tentar ranquear uma página comercial direta para uma dúvida educativa ampla — ou um artigo longo e teórico para quem busca contratar um serviço imediato — reduz a permanência na página e enfraquece a aderência temática.</li></ol>',
      'Um exemplo claro ajuda a enxergar esse conflito: se alguém pesquisa "quanto custa auditoria SEO", espera critérios objetivos de escopo, fatores que alteram o orçamento e prazos realistas. Se uma empresa responde a essa busca com um texto genérico sobre "o que é SEO e por que ele importa", o visitante fecha a aba em poucos segundos.',

      '### Qualidade editorial, profundidade e atualização do conteúdo',
      'Na documentação sobre <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">conteúdo útil, confiável e focado nas pessoas</a>, o Google deixa explícito que seus sistemas procuram páginas criadas para resolver dúvidas reais com substância técnica, e não textos inchados para parecerem longos.',

      '#### Critérios objetivos para revisar o texto da página',
      'Durante a leitura crítica de uma URL publicada, vale checar se os dois primeiros parágrafos já situam o leitor no assunto e entregam valor concreto, em vez de gastar dez linhas com introduções históricas óbvias ("desde o surgimento da internet..."). Também não existe contagem mínima de palavras válida para todo tema: uma dúvida pontual sobre um status HTTP precisa de precisão imediata, enquanto um guia de auditoria exige etapas verificáveis, exemplos de código e critérios de decisão.',
      'Observe ainda três aspectos que costumam denunciar conteúdo descuidado durante uma revisão:',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Referências desatualizadas:</strong> Mencionar interfaces antigas (como a versão descontinuada do Google Search Console ou métricas substituídas, caso do FID no lugar do INP) mina a confiança de quem trabalha na área.</li><li><strong>Afirmações vagas sem comprovação lógica:</strong> Frases como "isso melhora muito o posicionamento" sem explicar qual mecanismo de busca ou comportamento do usuário muda na prática.</li><li><strong>Otimização mecânica:</strong> Repetir a expressão exata da palavra-chave em quase todo subtítulo prejudica a fluidez e dá ao texto aparência artificial.</li></ul>',

      '### Snippets de pesquisa: tag title e meta description',
      'O <code>&lt;title&gt;</code> e a <code>meta description</code> formam a vitrine da URL nos resultados orgânicos. Embora existam dentro do <code>&lt;head&gt;</code>, eles resumem diretamente a proposta editorial da página para o usuário que compara dez links em poucos segundos.',

      '#### Como auditar a tag title (e entender por que o Google a reescreve)',
      'A documentação oficial sobre <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">links de título na Pesquisa Google</a> explica que títulos duplicados, vazios, extremamente longos ou recheados de palavras-chave costumam ser substituídos pelo buscador — muitas vezes puxando o texto do <code>&lt;h1&gt;</code> ou até de textos-âncora externos.',
      'Na auditoria, confirme se cada URL indexável possui um <code>&lt;title&gt;</code> exclusivo (uma busca rápida usando <code>site:seudominio.com.br</code> ajuda a flagrar títulos repetidos no índice). Posicione o tema central no início e mantenha a extensão por volta de 50 a 60 caracteres — lembrando que o corte na SERP ocorre por largura em pixels (cerca de 580–600px em desktop), e letras maiúsculas ocupam mais espaço.',
      '<div class="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-2"><p><strong>Exemplo fraco (repetitivo e sujeito a corte/reescrita):</strong><br/><code>Auditoria On-Page | Checklist SEO On-Page | Otimização On-Page Barata</code></p><p><strong>Exemplo claro e específico:</strong><br/><code>Auditoria SEO On-Page: checklist para analisar cada página | Marca</code></p></div>',
      'Um cuidado adicional em aplicações JavaScript (como React ou Next.js): inspecione tanto o HTML inicial retornado pelo servidor (<em>Exibir código-fonte</em>) quanto o DOM renderizado no DevTools (<code>document.title</code>). Se o título correto só aparece após execução de scripts no navegador, plataformas de compartilhamento e rastreadores mais simples podem capturar o título padrão genérico do template.',

      '#### Como auditar a meta description sem cair em mitos',
      'A <code>meta description</code> não entra como sinal direto de ranqueamento, mas influencia diretamente a clareza do resumo e a taxa de cliques (CTR). Segundo o guia oficial sobre <a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">controle de snippets na Pesquisa Google</a>, descrições objetivas entre 130 e 155 caracteres reduzem o risco de o buscador exibir trechos desconexos pinçados de menus ou rodapés.',
      'Evite repetir a mesma descrição institucional em dezenas de URLs. Em páginas estratégicas e guias principais, redija um resumo fiel ao que o leitor encontra na abertura. Em sites muito extensos com milhares de páginas de produto ou variações secundárias, priorize descrições manuais nas URLs comerciais e pilares — em buscas de cauda longa muito específicas, o próprio Google tende a montar um trecho dinâmico mais próximo da consulta digitada.',

      '### Estrutura semântica no HTML: headings, URLs e marcação',
      'A forma como o código organiza o conteúdo ajuda leitores que escaneiam a página, usuários de leitores de tela e algoritmos que extraem a hierarquia entre o tema central e seus subtópicos.',

      '#### Hierarquia lógica de H1, H2 e H3',
      'Do ponto de vista estrito da especificação HTML5, um documento pode conter mais de um <code>&lt;h1&gt;</code> dentro de seções isoladas; na prática editorial de SEO e acessibilidade, manter apenas um <code>&lt;h1&gt;</code> visível no topo evita qualquer ambiguidade sobre o assunto principal da URL. Esse H1 deve dialogar com o <code>&lt;title&gt;</code>, sem precisar ser uma cópia idêntica letra por letra.',
      'Organize os blocos principais em <code>&lt;h2&gt;</code> e as subdivisões subordinadas em <code>&lt;h3&gt;</code>, respeitando a ordem sequencial. Pular diretamente de <code>H1</code> para <code>H4</code> apenas porque a fonte menor agradou visualmente quebra o contorno semântico do documento — o tamanho tipográfico deve ser ajustado no CSS, nunca alterando o nível da tag. Da mesma forma, nunca use <code>H1</code> ou <code>H2</code> no logotipo do cabeçalho ou em títulos genéricos de rodapé.',

      '#### Slugs limpos e HTML semântico',
      'Uma URL descritiva antecipa o assunto antes do clique e simplifica a leitura de relatórios no Search Console. Prefira endereços curtos em minúsculas separados por hifens, como <code>/blog/auditoria-seo-on-page</code>, evitando códigos numéricos (<code>/?p=482</code>), acentos ou sequências longas de datas e preposições.',
      'No corpo da página, utilize tags nativas compatíveis com a função de cada bloco — <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, listas <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> e tabelas <code>&lt;table&gt;</code> — em vez de montar toda a estrutura com <code>&lt;div&gt;</code> genéricas. E uma regra de preservação essencial: se uma URL antiga já recebe tráfego orgânico ou links de outros sites, não mude o slug por preferência estética; só altere quando houver ganho arquitetônico real e configure redirecionamento permanente <code>301</code>.',

      '### Arquitetura de links internos e referências externas',
      'Os links dentro do texto ligam tópicos complementares, guiam o leitor para a próxima etapa da jornada e ajudam mecanismos de busca a entender quais URLs têm papel central no domínio. Como detalha a documentação do Google sobre <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">links rastreáveis e textos-âncora</a>, links relevantes precisam existir em elementos HTML padrão <code>&lt;a href="..."&gt;</code>, e não em botões acionados apenas por eventos JavaScript sem destino legível.',

      '#### Textos-âncora descritivos e conexão com páginas comerciais',
      'Substitua âncoras genéricas como <em>"clique aqui"</em> ou <em>"saiba mais"</em> por descrições naturais do conteúdo de destino. Não é necessário repetir o mesmo termo exato em todos os links que apontam para uma página — variar o texto-âncora conforme o contexto da frase soa mais natural e amplia o repertório semântico.',
      'Também observe para onde o artigo encaminha o leitor quando o diagnóstico expõe múltiplos problemas no site: após identificar falhas distribuídas em várias URLs, faz sentido oferecer uma transição natural para a página principal de serviço caso a equipe precise de uma <a href="/" class="text-[#1A73E8] font-semibold hover:underline">auditoria de SEO completa conduzida por especialista</a> para priorizar as correções.',

      '#### Links externos de referência e integridade de destino',
      'Citar fontes primárias — como guias técnicos do Google Search Central, especificações da W3C ou documentação de engenharia como o web.dev — sustenta afirmações técnicas com transparência e ajuda o leitor a validar regras oficiais. Durante a auditoria de cada URL, verifique na aba <em>Network</em> do DevTools ou em um rastreador se nenhum link interno ou externo do artigo retorna erro <code>404</code> ou passa por redirecionamentos desnecessários.',

      '### Imagens, leitura em tela e paridade mobile na página',
      'Elementos visuais e formatação decidem se quem clicou no resultado vai ler o conteúdo até o fim ou retornar para a página de busca em segundos.',

      '#### Atributos alt, arquivos descritivos e estabilidade visual da imagem',
      'Seguindo as práticas descritas em <a href="https://developers.google.com/search/docs/appearance/google-images" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">SEO para Google Imagens</a>, preencha o atributo <code>alt</code> descrevendo fielmente o que a figura representa no contexto do parágrafo — função indispensável para leitores de tela e para indexação visual. Imagens puramente decorativas devem manter <code>alt=""</code> vazio, e nenhuma imagem editorial deve carregar listas artificiais de palavras-chave no atributo.',
      'Use nomes de arquivo descritivos (como <code>checklist-auditoria-on-page.webp</code> no lugar de <code>IMG_8392.png</code>), sirva formatos comprimidos como WebP ou AVIF e declare sempre os atributos HTML <code>width</code> e <code>height</code> (ou <code>aspect-ratio</code> no CSS). Esse cuidado por página evita que o carregamento tardio de uma foto empurre o texto para baixo durante a leitura. A avaliação agregada das métricas Core Web Vitals no domínio inteiro pertence à camada técnica da auditoria.',

      '#### Escaneabilidade e paridade mobile por URL',
      'Como o Google utiliza indexação com prioridade para dispositivos móveis, inspecione a própria página em larguras de 360px a 414px no modo responsivo do navegador. Confirme se parágrafos longos estão quebrados em blocos de 3 a 4 linhas, se tabelas extensas usam container com rolagem horizontal sem estourar a largura da tela e se botões ou links próximos possuem espaçamento confortável ao toque.',
      'Verifique também a paridade de conteúdo: títulos, tabelas comparativas, perguntas frequentes e links internos visíveis no desktop devem permanecer acessíveis no celular — esconder blocos inteiros de texto no mobile para "limpar o layout" pode reduzir os sinais avaliados na indexação.',

      '### Checklist prático de auditoria SEO On-Page',
      'A matriz abaixo organiza os pontos de revisão por impacto prático para orientar a inspeção página por página:',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Elemento</th><th class="p-3 border-b border-slate-200">Como confirmar na prática</th><th class="p-3 border-b border-slate-200">Prioridade</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Intenção de busca</td><td class="p-3">Comparar formato e profundidade da URL com o Top 5 orgânico real da consulta.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Tag <code>&lt;title&gt;</code></td><td class="p-3">Inspecionar HTML inicial e DOM renderizado; confirmar exclusividade via <code>site:</code>.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Qualidade do conteúdo</td><td class="p-3">Validar abertura direta, exemplos concretos, dados atuais e zero repetição forçada.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Headings H1–H3</td><td class="p-3">Conferir contorno estrutural no DevTools: um H1 principal e sequência sem saltos.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Links internos</td><td class="p-3">Revisar âncoras descritivas, ausência de 404 e conexão com páginas estratégicas.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Paridade mobile</td><td class="p-3">Testar em 360px: sem corte horizontal, sem texto oculto e contraste legível.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Meta description</td><td class="p-3">Verificar resumo exclusivo de 130–155 caracteres nas páginas prioritárias.</td><td class="p-3 font-semibold text-blue-700">Recomendada</td></tr><tr><td class="p-3 font-semibold text-slate-900">Imagens e <code>alt</code></td><td class="p-3">Conferir atributos <code>alt</code> fiéis, WebP/AVIF leve e <code>width</code>/<code>height</code> declarados.</td><td class="p-3 font-semibold text-blue-700">Recomendada</td></tr></tbody></table></div>',

      '### Cinco erros frequentes e como corrigi-los',
      'Mesmo equipes experientes repetem padrões que diluem a força orgânica das páginas:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Canibalização entre páginas semelhantes:</strong> Duas ou três URLs respondendo quase à mesma pergunta e disputando os mesmos termos. <em>Correção:</em> consolide os conteúdos em uma página principal mais completa (aplicando redirecionamento 301 nas URLs secundárias) ou separe com clareza o papel de cada uma — por exemplo, página comercial focada em contratação e guia educativo focado em método.</li><li><strong>Títulos orientados apenas à marca ou genéricos:</strong> Páginas comerciais com <code>&lt;title&gt;</code> como <em>"Serviços | Empresa X"</em>. <em>Correção:</em> explicite o serviço específico e o escopo logo no início do título.</li><li><strong>Blocos densos sem pontos de respiro:</strong> Artigos técnicos publicados como blocos contínuos de 15 linhas sem subtítulos, listas ou exemplos. <em>Correção:</em> estruture subtítulos H2/H3 informativos, tabelas de comparação e trechos reais de verificação.</li><li><strong>Páginas comerciais sem entrada contextual:</strong> Páginas de serviço escondidas apenas no menu de rodapé, sem receber links internos a partir dos guias informativos relacionados. <em>Correção:</em> crie conexões editoriais genuínas dentro dos artigos onde o tema se encontra com a solução.</li><li><strong>Superotimização mecânica:</strong> Inserir a palavra-chave exata em todas as tags <code>alt</code>, todos os H2 e no rodapé. <em>Correção:</em> reescreva os elementos priorizando clareza para quem lê e variação natural de termos.</li></ol>',

      '### Quando uma auditoria especializada se justifica',
      'Aplicar este roteiro resolve rapidamente gargalos pontuais em sites enxutos. A revisão por um especialista passa a fazer diferença real quando o projeto acumula dezenas de URLs e precisa definir o que atualizar, fundir ou remover sem perder histórico orgânico, quando há disputa direta entre artigos do blog e páginas de venda no Search Console, ou quando melhorias de texto esbarram em limitações técnicas de template e renderização.',
      'Se esse diagnóstico descreve o momento do seu site, conheça como funciona nossa <a href="/" class="text-[#1A73E8] font-semibold hover:underline">auditoria SEO conduzida por especialista</a> para cruzar problemas on-page e infraestrutura em um plano único de execução.',
    ],
  },
  {
    _id: 'post-auditoria-tecnica-seo',
    title: 'Auditoria Técnica de SEO: checklist de rastreamento e indexação',
    slug: { current: 'auditoria-tecnica-seo' },
    excerpt:
      'Como auditar a infraestrutura de SEO de um site sem depender de alertas genéricos: teste de renderização do Googlebot, robots.txt vs. noindex, Search Console, canonical, sitemap XML, headers HTTP, Core Web Vitals reais e priorização.',
    readingTimeMinutes: 16,
    category: 'SEO Técnico',
    tags: [
      'Auditoria Técnica de SEO',
      'Checklist de SEO Técnico',
      'Rastreamento e Indexação',
      'Canonical',
      'Sitemap XML',
      'Core Web Vitals',
    ],
    publishedAt: '2026-11-13T09:00:00Z',
    updatedAt: '2026-11-13T09:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador da Auditoria SEO & Especialista em Tráfego',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-tecnica-seo.webp',
      },
      alt: 'Ilustração técnica de rastreamento, sitemap XML, funil de indexação e métricas de desempenho na auditoria técnica de SEO',
    },
    ogImage: '/images/blog/og-auditoria-tecnica-seo.png',
    seoTitle: 'Auditoria Técnica de SEO: checklist de rastreamento e indexação | Auditoria SEO',
    metaDescription:
      'Guia prático de auditoria técnica de SEO: inspecione rastreamento, Google Search Console, robots.txt, canonical, sitemap XML, HTTP e Core Web Vitals com precisão.',
    ogTitle: 'Auditoria Técnica de SEO: checklist de rastreamento e indexação',
    ogDescription:
      'Aprenda a validar gargalos reais de rastreamento e indexação, interpretar relatórios do Search Console e separar bloqueios críticos de ruído técnico.',
    body: [
      'Um site pode ter conteúdo aprofundado e títulos bem escritos e, mesmo assim, não gerar visitas orgânicas se uma falha estrutural impedir o Google de descobrir, renderizar ou consolidar suas URLs. Na rotina técnica, problemas silenciosos — uma diretiva <code>noindex</code> herdada do ambiente de homologação, templates emitindo a tag <code>canonical</code> da página inicial em todos os artigos ou redirecionamentos encadeados após uma troca de CMS — neutralizam meses de publicação.',
      'Rodar um rastreador automático e exportar uma planilha com centenas de "alertas vermelhos" raramente resolve o problema, porque ferramentas automatizadas não distinguem um bloqueio comercial crítico de um aviso cosmético em páginas irrelevantes. Uma <strong>auditoria técnica de SEO</strong> útil verifica como o servidor e o navegador respondem de fato diante do Googlebot e cruza cada hipótese com os dados reais do Google Search Console.',

      '### O papel da auditoria técnica na saúde do domínio',
      'O objetivo dessa revisão é garantir um percurso limpo em quatro etapas: descoberta da URL, rastreamento sem falhas de servidor, renderização fiel dos elementos principais e inclusão da versão oficial correta no índice de busca.',

      '#### Como separar falhas técnicas de ajustes On-Page',
      'Antes de abrir editores de texto ou pedir mudanças no código, identifique em qual camada está o sintoma. Quando páginas comerciais não aparecem ao buscar <code>site:seudominio.com.br/url</code>, retornam erro no Search Console ou apresentam variações duplicadas com e sem barra final competindo entre si, a raiz é técnica. Quando a URL já está indexada como canônica única, mas não conquista visibilidade para seu tema, o foco passa a ser a camada editorial e semântica tratada em nosso guia de <a href="/blog/auditoria-seo-on-page" class="text-[#1A73E8] font-semibold hover:underline">auditoria SEO on-page página por página</a>.',

      '### Rastreamento, renderização e controle de acesso',
      'O Googlebot só avalia aquilo que consegue baixar e renderizar sem impedimentos. Problemas nessa etapa afetam todo o restante do funil de indexação.',

      '#### Como confirmar o que o Googlebot realmente vê',
      'No Google Search Console, abra a ferramenta <strong>Inspeção de URL</strong> para uma página comercial, uma categoria e um artigo representativo, e execute <strong>Testar URL publicado</strong>. Na aba de resultados, abra <em>Ver página testada</em> para checar três pontos concretos: o código HTML renderizado após JavaScript, a captura visual da tela e a lista de recursos externos ou scripts que falharam no carregamento.',
      'Esse cuidado é ainda mais relevante em aplicações baseadas em JavaScript (React, Next.js, Vue). Compare sempre o HTML inicial entregue pelo servidor (<em>Exibir código-fonte</em> no navegador) com o DOM final visível no DevTools. Se textos principais, links internos ou metadados como <code>title</code> e <code>canonical</code> dependem exclusivamente de execução tardia no cliente sem pré-renderização ou SSR, rastreadores secundários e visualizações de compartilhamento falham com frequência, e o Google precisa enfileirar a página em uma segunda etapa de renderização.',
      'Em domínios com milhares de URLs, observe também sinais de desperdício de rastreamento: erros intermitentes <code>5xx</code> nos registros de rastreamento ou parâmetros infinitos de filtros e busca interna gerando centenas de variações vazias.',

      '#### Robots.txt vs. meta robots e X-Robots-Tag',
      'Confundir controle de rastreamento com controle de indexação está entre os equívocos mais prejudiciais em auditorias técnicas. O arquivo <code>robots.txt</code>, detalhado na <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">introdução oficial ao robots.txt</a>, orienta onde o robô não deve entrar — útil para painéis administrativos, carrinhos ou parâmetros de ordenação interna.',
      '<strong>Armadilha clássica:</strong> bloquear uma URL no <code>robots.txt</code> <em>não garante</em> que ela desapareça do Google se outros sites ou páginas apontarem para ela; nesse caso, o Google pode manter o endereço indexado sem snippet descritivo. Além disso, se uma URL já está bloqueada no <code>robots.txt</code>, o Googlebot não consegue acessá-la para ler uma tag <code>&lt;meta name="robots" content="noindex" /&gt;</code> inserida na página.',
      'Portanto, para impedir que uma página apareça na busca, libere o rastreamento e aplique <code>noindex</code> via meta tag no <code>&lt;head&gt;</code> ou cabeçalho HTTP <code>X-Robots-Tag: noindex</code> (recurso muito útil para arquivos PDF). Na validação prática, acesse <code>seudominio.com.br/robots.txt</code> diretamente no navegador para conferir se não restou um <code>Disallow: /</code> de ambiente de testes nem bloqueios acidentais a pastas de CSS e JavaScript.',

      '### Diagnóstico de indexação no Google Search Console',
      'Uma URL pode responder com HTTP 200 sem erros de servidor e, mesmo assim, permanecer fora dos resultados. O relatório <strong>Indexação de páginas</strong> no Search Console detalha exatamente por que o Google excluiu determinados endereços.',

      '#### Como interpretar os status que mais geram confusão',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Excluída pela tag "noindex":</strong> Confirme se todas as URLs ali listadas devem mesmo ficar fora da busca (como telas de login, obrigado ou busca interna). Se páginas comerciais aparecerem nessa lista, remova o <code>noindex</code> no template imediatamente.</li><li><strong>Rastreada, mas não indexada no momento:</strong> O Google baixou e leu a URL, mas optou por não indexá-la agora. Esse status raramente se resolve apenas clicando em "solicitar indexação": costuma indicar conteúdo raso, alta sobreposição com outra página do site ou ausência de links internos mostrando relevância.</li><li><strong>Descoberta, mas não indexada no momento:</strong> O Google sabe que a URL existe (via sitemap ou links), mas sequer a rastreou. Em sites grandes, aponta excesso de URLs de baixo valor disputando atenção do rastreador ou lentidão de resposta do servidor.</li><li><strong>Soft 404:</strong> Ocorre quando uma página vazia, sem produtos em estoque ou com mensagem "página não encontrada" retorna status HTTP <code>200 OK</code> em vez de <code>404</code> ou <code>410</code>, confundindo o índice com falsas páginas válidas.</li></ul>',

      '### Consolidação de URLs duplicadas e Sitemap XML',
      'Um mesmo conteúdo frequentemente responde por endereços ligeiramente distintos: com e sem <code>www</code>, protocolo <code>http</code> e <code>https</code>, presença ou ausência de barra final (<code>/</code>), letras maiúsculas ou parâmetros de campanha como <code>?utm_source=</code>.',

      '#### Tags canonical e conflitos recorrentes de template',
      'Conforme orienta a documentação sobre <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">consolidação de URLs duplicadas</a>, cada URL principal indexável deve declarar uma única tag <code>&lt;link rel="canonical" href="https://..." /&gt;</code> absoluta apontando para si mesma.',
      'Um bug grave e surpreendentemente comum ocorre em sites com rotas dinâmicas ou blogs configurados sobre templates únicos: todas as páginas de artigo emitem o endereço da homepage (<code>https://seudominio.com.br/</code>) como canonical. Quando isso acontece, o Google interpreta cada artigo como uma variante secundária da página inicial e tende a excluí-los do índice. Inspecione uma amostra de cada tipo de template (home, serviço, categoria, artigo) verificando tanto o código-fonte bruto quanto o DOM renderizado para confirmar canonical único, em HTTPS e com destino retornando <code>200 OK</code>.',

      '#### O que realmente importa no sitemap.xml',
      'De acordo com o guia oficial de <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Sitemaps do Google Search Central</a>, o arquivo <code>sitemap.xml</code> funciona como inventário auxiliar das URLs canônicas do site. Sua regra básica é simples: liste apenas URLs indexáveis, canônicas para si mesmas e que devolvam status <code>200 OK</code>. Incluir redirecionamentos 301, erros 404 ou páginas com <code>noindex</code> no sitemap envia sinais contraditórios.',
      'Vale desmistificar dois campos antigos do formato XML: o Google ignora na prática as tags <code>&lt;priority&gt;</code> e <code>&lt;changefreq&gt;</code>; já a tag <code>&lt;lastmod&gt;</code> só tem utilidade real quando reflete modificações substanciais verificáveis na página, e não quando um script atualiza a data de todas as URLs automaticamente a cada build. Envie o sitemap no Search Console e confira regularmente se o total de URLs enviadas corresponde ao volume indexado esperado.',

      '### Códigos HTTP, redirecionamentos e integridade interna',
      'Cabeçalhos HTTP e links internos determinam se a navegação flui sem desperdício tanto para visitantes quanto para robôs.',

      '#### Status HTTP e cadeias de redirecionamento na prática',
      'Ao migrar rotas ou descontinuar páginas, diferencie redirecionamentos permanentes (<code>301</code> ou <code>308</code>) de redirecionamentos temporários (<code>302</code> ou <code>307</code>): trocas definitivas exigem <code>301/308</code> para consolidar sinais na URL nova. Já cadeias de múltiplos saltos (<code>http://</code> -&gt; <code>https://www</code> -&gt; <code>https://sem-www</code> -&gt; <code>/nova-rota</code>) atrasam o carregamento e desperdiçam requisições; ajuste as regras de origem para apontar em um único salto direto ao destino final.',
      'Para confirmar sem depender de ferramentas pagas, rode um teste rápido no terminal com <code>curl -sIL https://seudominio.com.br/rota</code> e acompanhe cada linha de resposta <code>HTTP/</code> e cabeçalho <code>location:</code> até validar se a cadeia termina em <code>200 OK</code> (ou se há loops infinitos e falhas <code>5xx</code> de servidor). Páginas que realmente deixaram de existir sem substituta devem responder <code>404</code> ou <code>410</code> e ser removidas dos links internos e do sitemap.',

      '#### Links quebrados, páginas órfãs e arquitetura multilíngue',
      'Para localizar <strong>páginas órfãs</strong> — URLs válidas existentes no CMS ou no <code>sitemap.xml</code> que não recebem nenhum link interno vindo de outras páginas —, execute um rastreamento partindo exclusivamente dos links da homepage e compare essa lista com as URLs presentes no sitemap e nos relatórios de desempenho do Search Console. Páginas importantes não deveriam exigir cinco ou seis cliques profundos para serem encontradas.',
      'Em sites com versões em português, espanhol e inglês, valide também a simetria das anotações <code>hreflang</code>: cada página deve listar todas as versões equivalentes (incluindo a própria URL), usando códigos de idioma válidos e apontando exclusivamente para URLs canônicas com resposta <code>200 OK</code>. Um <code>hreflang</code> apontando para uma rota redirecionada ou marcada como <code>noindex</code> costuma ser ignorado pelo buscador.',

      '### Desempenho real (Core Web Vitals), mobile-first e dados estruturados',
      'Infraestrutura também envolve como a página se comporta em dispositivos reais e como entidades são descritas em metadados legíveis por máquina.',

      '#### Dados de campo (CrUX) vs. laboratório e limites do PageSpeed',
      'Os <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Core Web Vitals</a> acompanham três métricas no percentil 75 das visitas reais de usuários (dados CrUX): <strong>LCP</strong> (carregamento do maior elemento visível, referência saudável até 2,5 segundos), <strong>INP</strong> (latência de resposta após interações, até 200 milissegundos) e <strong>CLS</strong> (estabilidade visual durante o carregamento, até 0,1).',
      'Ao auditar velocidade, dê prioridade aos dados de campo no relatório de Core Web Vitals do Search Console antes de perseguir notas sintéticas no Lighthouse, que variam conforme rede simulada e hardware do teste. Como esclarece a documentação oficial sobre <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">experiência da página nos resultados da Pesquisa Google</a>, atingir nota 100 em testes sintéticos não garante topo do Google nem compensa conteúdo irrelevante; o ganho real está em remover lentidão que afasta visitantes.',

      '#### Mobile-first indexing e marcação JSON-LD válida',
      'Sob a <a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">indexação mobile-first do Google</a>, o Googlebot para smartphones define a avaliação principal do site. Confirme presença da tag <code>viewport</code>, carregamento livre de CSS/JS essenciais no <code>robots.txt</code> e visibilidade integral do conteúdo em telas estreitas.',
      'Quanto a dados estruturados em <strong>JSON-LD (Schema.org)</strong>, utilize apenas esquemas que correspondam fielmente ao conteúdo visível da página — por exemplo, <code>BlogPosting</code> em artigos e <code>ProfessionalService</code>/<code>LocalBusiness</code> em páginas de serviço. Nunca duplique blocos JSON-LD conflitantes nem marque avaliações ou preços inexistentes na tela. Valide o HTML publicado no Teste de Resultados Avançados do Google e no Schema Markup Validator.',

      '### Matriz de verificação técnica de SEO',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Área técnica</th><th class="p-3 border-b border-slate-200">Verificação prática recomendada</th><th class="p-3 border-b border-slate-200">Gravidade típica</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Acesso HTTP e renderização</td><td class="p-3">Testar headers (<code>curl -sIL</code>), erros 5xx e HTML renderizado na Inspeção de URL.</td><td class="p-3 font-semibold text-red-700">Bloqueio crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Robots.txt e <code>noindex</code></td><td class="p-3">Inspecionar <code>/robots.txt</code> e confirmar ausência de <code>noindex</code> em URLs comerciais.</td><td class="p-3 font-semibold text-red-700">Bloqueio crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Tags <code>canonical</code></td><td class="p-3">Validar canonical único, absoluto, autorreferente e com status 200 por template.</td><td class="p-3 font-semibold text-red-700">Bloqueio crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Sitemap XML</td><td class="p-3">Garantir no Search Console apenas URLs canônicas 200, sem 301/404/noindex.</td><td class="p-3 font-semibold text-amber-700">Prioridade alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Redirecionamentos e 404</td><td class="p-3">Eliminar links internos para 404 e reduzir cadeias multi-salto a um único 301.</td><td class="p-3 font-semibold text-amber-700">Prioridade alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Órfãs e arquitetura</td><td class="p-3">Comparar crawl interno vs. sitemap e auditar simetria <code>hreflang</code> em idiomas.</td><td class="p-3 font-semibold text-amber-700">Prioridade alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Core Web Vitals (campo)</td><td class="p-3">Monitorar LCP, INP e CLS no percentil 75 com dados reais do Search Console.</td><td class="p-3 font-semibold text-blue-700">Melhoria contínua</td></tr><tr><td class="p-3 font-semibold text-slate-900">Dados estruturados</td><td class="p-3">Testar JSON-LD no Rich Results Test mantendo fidelidade total ao texto visível.</td><td class="p-3 font-semibold text-blue-700">Melhoria contínua</td></tr></tbody></table></div>',

      '### Método de priorização em três ondas',
      'Um diagnóstico técnico só vira resultado quando desenvolvimento e marketing sabem exatamente por onde começar, sem desperdiçar horas corrigindo avisos irrelevantes:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Onda 1 — Bloqueios críticos de rastreamento e indexação:</strong> Corrija imediatamente diretivas <code>noindex</code> indevidas, regras restritivas no <code>robots.txt</code>, erros <code>5xx</code>, variantes duplicadas sem redirecionamento ou canonical e templates com <code>canonical</code> apontando para a homepage.</li><li><strong>Onda 2 — Fluxo interno e higiene de arquitetura:</strong> Remova links internos quebrados (404), achate cadeias <code>301</code> para salto único, conecte páginas órfãs estratégicas e limpe o <code>sitemap.xml</code>.</li><li><strong>Onda 3 — Desempenho real e semântica avançada:</strong> Ataque gargalos de LCP, INP e CLS medidos em usuários reais, padronize blocos JSON-LD por tipo de página e revise tags <code>hreflang</code> em sites multilíngues.</li></ol>',

      '### Quando envolver uma auditoria técnica especializada',
      'Este roteiro cobre as verificações necessárias para identificar problemas diretos na maioria dos sites institucionais. Uma análise técnica conduzida por especialista passa a valer o investimento quando a empresa enfrenta migração de domínio ou troca de plataforma sem perder histórico, administra aplicações JavaScript onde HTML bruto e página renderizada divergem, ou lida com milhares de parâmetros de filtro e conflitos multilíngues no Search Console.',
      'Se o time precisa de um diagnóstico objetivo separando bloqueios reais de alertas automáticos irrelevantes, conheça nossa <a href="/" class="text-[#1A73E8] font-semibold hover:underline">auditoria técnica de SEO conduzida por especialista</a> com plano de ação priorizado.',
    ],
  },
];
