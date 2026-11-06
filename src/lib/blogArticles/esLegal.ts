import { SanityPost } from '../../types';

export const ES_LEGAL_ARTICLES: SanityPost[] = [
  // =========================================================================
  // ARTÍCULO 1: PILAR CENTRAL — SEO PARA ABOGADOS
  // =========================================================================
  {
    _id: 'post-seo-para-advogados-es',
    title: 'SEO para abogados: cómo posicionar su despacho jurídico en Google',
    slug: { current: 'seo-para-advogados' },
    excerpt: 'Guía definitiva de SEO para despachos de abogados. Descubra cómo estructurar su visibilidad orgánica en Google con técnica rigurosa, cumplimiento ético y sólida autoridad digital.',
    readingTimeMinutes: 14,
    category: 'SEO para Abogados',
    tags: ['SEO para Abogados', 'Marketing Jurídico', 'Google para Abogados', 'SEO Local Jurídico', 'Posicionamiento Orgánico'],
    publishedAt: '2026-11-05T12:00:00Z',
    updatedAt: '2026-11-05T12:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/og-seo-para-advogados.webp',
      },
      alt: 'SEO para Abogados - Mayor visibilidad en Google y Google Maps',
    },
    ogImage: '/images/blog/og-seo-para-advogados.webp',
    seoTitle: 'SEO para Abogados: cómo posicionar su despacho en Google',
    metaDescription: 'Descubra cómo el SEO posiciona su despacho de abogados en Google combinando optimización web, contenido informativo, presencia local en Maps y estrategia.',
    body: [
      'La forma en que las personas y empresas contratan servicios legales ha experimentado una transformación irreversible. La tradicional costumbre de depender exclusivamente de recomendaciones personales se complementa hoy con una etapa previa e ineludible de validación: antes de programar una reunión o firmar un poder, el cliente potencial busca en Google.',
      'Más aún: miles de ciudadanos y directivos de empresas enfrentan contingencias inmediatas —una notificación judicial imprevista, una rescisión laboral litigiosa, un conflicto societario o una inspección fiscal— y acuden al buscador para encontrar respuestas fiables y especialistas acreditados en su ciudad.',
      'En este contexto, los despachos jurídicos que no figuran en las primeras posiciones orgánicas de Google resultan prácticamente invisibles para quienes buscan activamente asesoría profesional.',
      'Muchos bufetes intentan subsanar esta carencia invirtiendo sumas considerables en anuncios de pago (Google Ads). Sin embargo, en sectores legales competitivos, el coste por clic (CPC) alcanza cifras extremadamente altas. Una estrategia sustentada únicamente en pujas publicitarias genera dependencia financiera: en cuanto se suspende el presupuesto diario, el flujo de nuevos contactos se interrumpe de inmediato.',
      'Es precisamente aquí donde interviene el <strong>SEO para abogados</strong>: la metodología técnica y editorial orientada a posicionar las páginas de su despacho en los primeros resultados orgánicos y en Google Maps, convirtiendo la autoridad intelectual de su equipo en un activo digital permanente y sostenible.',
      'En esta guía completa, comprenderá el funcionamiento del algoritmo de Google en el ámbito legal, cómo actuar con total respeto a la deontología profesional y cómo diseñar una presencia digital sólida para su firma.',

      '### La encrucijada de la publicidad jurídica: pujas de pago frente a autoridad orgánica',
      'El mercado de anuncios patrocinados en el sector legal se ha convertido en uno de los más competidos. Términos con alta intención de contratación —como derecho tributario, asesoría laboral de empresas, litigación civil o fusiones y adquisiciones— exigen costes significativos por cada clic recibido.',
      'Cuando un despacho confía únicamente en anuncios, alquila tráfico transitorio. En contraste, construir una arquitectura web orientada al SEO equivale a adquirir un activo patrimonial propio:',
      '• <strong>Coste marginal decreciente:</strong> un artículo técnico exhaustivo o una página de especialidad bien posicionada sigue captando consultas cualificadas mes tras mes sin coste adicional por visita.',
      '• <strong>Percepción de prestigio y rigor:</strong> los estudios de comportamiento digital confirman que una proporción sustancial de usuarios evita los anuncios publicitarios y prefiere hacer clic en los resultados orgánicos principales, asociándolos a un mayor rigor técnico y respaldo algorítmico.',
      '• <strong>Conexión directa con la necesidad del cliente:</strong> quien busca en Google ya tiene un requerimiento concreto; no está navegando pasivamente, sino investigando cómo resolver un problema relevante.',

      '### Principios deontológicos y rigor ético en el marketing legal',
      'Tradicionalmente, los profesionales del derecho han mantenido cautela ante las iniciativas de difusión digital por temor a vulnerar los estatutos éticos de la abogacía. Sin embargo, las normativas deontológicas autorizan y respaldan la difusión de información jurídica objetiva, siempre que respete directrices indispensables:',
      '1. <strong>Carácter estrictamente pedagógico e informativo:</strong> las publicaciones deben orientar al público, explicar el alcance de las leyes y detallar procedimientos legales sin fomentar el litigio.',
      '2. <strong>Prohibición de mercantilización y captación desleal:</strong> no se permite recurrir a promesas de éxito asegurado, comparaciones peyorativas con otros letrados ni exhibición comercial agresiva de honorarios.',
      '3. <strong>Sobriedad y dignidad visual:</strong> interfaces limpias, tipografía legible, colores institucionales y ausencia de reclamos sensacionalistas.',
      'El SEO representa, por su propia naturaleza, la disciplina más respetuosa con el marco ético: en lugar de irrumpir con publicidad invasiva, organiza el conocimiento para que esté accesible exactamente cuando el usuario lo solicita.',

      '<figure class="my-8"><img src="/images/blog/pilares-seo-para-advogados.webp" alt="Infografía de los 4 Pilares de SEO para Abogados: Técnico, Google Maps, Contenido y Autoridad" width="1280" height="720" class="w-full h-auto rounded-xl border border-slate-200 shadow-sm" /><figcaption class="mt-2 text-xs text-slate-500 text-center">Los cuatro pilares interconectados de una estrategia de SEO duradera para despachos de abogados.</figcaption></figure>',

      '### Los 4 pilares fundamentales del SEO para despachos jurídicos',
      'Para que una firma legal alcance y consolide posiciones destacadas en Google, el proyecto debe sustentarse sobre cuatro pilares coordinados:',

      '#### 1. SEO Técnico e Infraestructura del Sitio Web',
      'Los motores de búsqueda deben rastrear, interpretar e indexar las páginas con absoluta fluidez. Una web lenta, desarrollada sobre plantillas obsoletas o con deficiencias técnicas, se ve penalizada algorítmicamente.',
      'Los requisitos esenciales comprenden:',
      '• <strong>Velocidad de carga (Core Web Vitals):</strong> métricas de LCP inferiores a 2,5 segundos, garantizando navegación inmediata tanto en ordenadores como en dispositivos móviles.',
      '• <strong>Datos estructurados Schema.org:</strong> implementación de marcado específico <code>LegalService</code> o <code>Attorney</code>, que explicita ante Google las áreas de práctica, dirección física y datos de acreditación.',
      '• <strong>Arquitectura jerárquica limpia:</strong> separación precisa de páginas por especialidad jurídica (por ejemplo, /derecho-tributario, /derecho-laboral).',

      '#### 2. SEO Local y Presencia en Google Maps',
      'Gran parte de los clientes potenciales añade un componente territorial en sus consultas: <em>"abogado laboralista en Madrid"</em>, <em>"bufete mercantil cerca de mí"</em> o <em>"abogado de herencias"</em>.',
      'Dominar el bloque local (Local 3-Pack) exige optimizar minuciosamente el Perfil de Empresa en Google (Google Business Profile), manteniendo coincidencia exacta en nombre, dirección y teléfono (NAP) con el pie de página del sitio web.',

      '#### 3. Contenido Jurídico Estratégico y Arquitectura Semántica',
      'Para atraer clientes cualificados, el blog institucional no debe publicar noticias dispersas, sino guías exhaustivas que resuelvan dudas reales del público.',
      'Las consultas deben clasificarse según la fase del usuario:',
      '• <strong>Búsquedas informativas:</strong> cómo se calcula una indemnización, qué requisitos exige un concurso de acreedores.',
      '• <strong>Búsquedas transaccionales y de decisión:</strong> bufete especialista en derecho corporativo, asesoría jurídica para startups.',

      '#### 4. Autoridad Digital y Menciones Sectoriales (E-E-A-T)',
      'Google prioriza con especial rigor los sitios clasificados como YMYL (<em>Your Money or Your Life</em>), categoría donde se ubica el ámbito legal. La firma debe acreditar Experiencia, Especialización, Autoridad y Fiabilidad mediante perfiles profesionales claros, autorías verificables y enlaces procedentes de portales de referencia.',

      '### El embudo de búsqueda del cliente jurídico',
      'Comprender el itinerario del usuario en Google es indispensable para diseñar el embudo de captación del despacho:',
      '1. <strong>Fase de Conciencia (Top of Funnel):</strong> el usuario identifica un problema y busca términos informativos: <em>"plazos para impugnar un despido"</em> o <em>"cómo funciona una herencia sin testamento"</em>.',
      '2. <strong>Fase de Evaluación (Middle of Funnel):</strong> comprende la complejidad legal y compara opciones: <em>"documentos para disolución societaria"</em> o <em>"ventajas del concurso voluntario"</em>.',
      '3. <strong>Fase de Decisión (Bottom of Funnel):</strong> ha decidido contratar asistencia letrada y localiza profesionales cualificados: <em>"abogado societario en Barcelona"</em> o <em>"bufete tributario para empresas"</em>.',

      '### Diagnóstico técnico y acompañamiento profesional para firmas jurídicas',
      'Implantar una estrategia de SEO jurídico requiere rigor multidisciplinar: desarrollo web rápido, marcado semántico estricto, redacción adaptada a la legislación vigente y seguimiento continuo de las directrices algorítmicas.',
      '<div class="p-6 my-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg"><h4 class="text-xl font-bold text-white mb-2">¿Desea posicionar su despacho en lo más alto de Google con garantías éticas?</h4><p class="text-slate-300 text-sm mb-4 leading-relaxed">Auditoria SEO ofrece auditoría técnica exhaustiva, diseño de arquitectura semántica y planes de optimización continua para despachos que buscan consolidar autoridad orgánica sostenible.</p><div class="flex flex-wrap gap-3"><a href="/es" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white font-semibold text-sm transition-colors shadow">Conozca Nuestros Planes de SEO</a><a href="https://wa.me/5519989332087?text=¡Hola!%20Deseo%20un%20diagnóstico%20de%20SEO%20para%20mi%20despacho%20jurídico." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow">Consultar por WhatsApp</a></div></div>',
      'Invertir en SEO es asegurar que la reputación profesional construida por su despacho sea visible ante quienes precisan asesoramiento letrado en el instante preciso de la búsqueda.',
    ],
  },

  // =========================================================================
  // ARTÍCULO 2: GOOGLE MAPS PARA ABOGADOS
  // =========================================================================
  {
    _id: 'post-google-meu-negocio-para-advogados-es',
    title: 'Google Business Profile para abogados: cómo destacar en Google Maps',
    slug: { current: 'google-meu-negocio-para-advogados' },
    excerpt: 'Aprenda cómo configurar y optimizar la ficha de su despacho en Google Maps para captar clientes en su ciudad respetando las directrices oficiales.',
    readingTimeMinutes: 12,
    category: 'SEO para Abogados',
    tags: ['Google Maps Abogados', 'SEO Local Despachos', 'Google Business Profile', 'Perfil de Empresa', 'Local 3-Pack'],
    publishedAt: '2026-11-05T11:00:00Z',
    updatedAt: '2026-11-05T11:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/og-google-meu-negocio-para-advogados.webp',
      },
      alt: 'Google Business Profile para Abogados - Cómo aparecer en Google Maps',
    },
    ogImage: '/images/blog/og-google-meu-negocio-para-advogados.webp',
    seoTitle: 'Google Business Profile para Abogados: presencia en Google Maps',
    metaDescription: 'Descubra cómo posicionar la ficha de su despacho en Google Maps mediante selección adecuada de categorías, datos consistentes y optimización local.',
    body: [
      'Cuando un cliente potencial afronta una necesidad legal urgente en su localidad, el primer paso suele consistir en abrir Google en su teléfono móvil y escribir términos como <em>"abogado cerca de mí"</em> o <em>"bufete en mi ciudad"</em>.',
      'En ese instante, Google activa el paquete local (el destacado <strong>Local 3-Pack</strong>), exhibiendo tres fichas comerciales con mapa, valoraciones, horario y botones de llamada.',
      'Para un despacho de abogados, figurar en este bloque no es una opción secundaria: representa la vía más directa para generar llamadas telefónicas y solicitudes de consulta de proximidad.',

      '### 1. Elección rigurosa de la categoría principal',
      'La categoría principal es el factor que más pondera el algoritmo local. Debe reflejar la actividad letrada principal (por ejemplo, <em>"Bufete de abogados"</em> o <em>"Abogado laboralista"</em>). Añada categorías secundarias solo si corresponden a especialidades consolidadas de la firma.',

      '### 2. Consistencia estricta del NAP (Nombre, Dirección y Teléfono)',
      'El nombre registrado en el perfil debe coincidir con la denominación profesional real del despacho. No incluya palabras clave artificiales en el nombre comercial, pues infringe las políticas de Google y acarrea suspensiones.',
      'Asimismo, la dirección física y el teléfono deben ser idénticos a los mostrados en el pie de página de su sitio web oficial.',

      '### 3. Gestión profesional de reseñas y reputación ética',
      'Las opiniones reales de clientes son esenciales para consolidar el factor Relevancia y Prominencia. Solicite valoraciones a través del enlace oficial y responda siempre con cortesía, manteniendo el deber de confidencialidad y sin revelar datos de los asuntos tratados.',

      '### 4. Fotos profesionales de la sede e instalaciones',
      'Suba fotografías nítidas de la fachada, entrada, sala de reuniones y equipo profesional. Las imágenes auténticas generan credibilidad inmediata y refuerzan la autenticidad geográfica ante Google.',

      '### 5. Sincronización entre el perfil y el sitio web institucional',
      'El perfil no actúa aislado. Google rastrea el enlace del sitio web vinculado para confirmar datos estructurados <code>LegalService</code> y validar la concordancia semántica con la especialidad declarada. Descubra los detalles en nuestra guía sobre <a href="/es/blog/site-para-escritorio-de-advocacia" class="text-[#1A73E8] font-semibold hover:underline">cómo optimizar la web de un despacho de abogados</a>.',

      '<div class="p-6 my-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg"><h4 class="text-xl font-bold text-white mb-2">¿Su despacho aún no aparece en los primeros puestos de Google Maps?</h4><p class="text-slate-300 text-sm mb-4 leading-relaxed">Nuestro equipo realiza auditoría cadastral completa, resolución de duplicidades, prevención de suspensiones y optimización avanzada para consolidar su liderazgo territorial.</p><div class="flex flex-wrap gap-3"><a href="/es/seo-local" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white font-semibold text-sm transition-colors shadow">Conozca Nuestros Servicios de SEO Local</a><a href="https://wa.me/5519989332087?text=¡Hola!%20Necesito%20ayuda%20para%20posicionar%20mi%20despacho%20en%20Google%20Maps." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow">Consultar por WhatsApp</a></div></div>',
    ],
  },

  // =========================================================================
  // ARTÍCULO 3: SITIO WEB DEL DESPACHO & OPTIMIZACIÓN TÉCNICA
  // =========================================================================
  {
    _id: 'post-site-para-escritorio-de-advocacia-es',
    title: 'Cómo optimizar el sitio web de un despacho de abogados para Google',
    slug: { current: 'site-para-escritorio-de-advocacia' },
    excerpt: 'La anatomía técnica de un sitio web jurídico de alto rendimiento. Descubra cómo estructurar páginas de especialidad, aplicar datos estructurados LegalService y acelerar la carga.',
    readingTimeMinutes: 13,
    category: 'SEO para Abogados',
    tags: ['Web para Abogados', 'SEO Técnico Legal', 'Schema LegalService', 'Core Web Vitals', 'Arquitectura Web'],
    publishedAt: '2026-11-05T10:00:00Z',
    updatedAt: '2026-11-05T10:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/og-site-para-escritorio-de-advocacia.webp',
      },
      alt: 'Sitio web para despacho de abogados - Optimización técnica y SEO',
    },
    ogImage: '/images/blog/og-site-para-escritorio-de-advocacia.webp',
    seoTitle: 'Sitio Web para Despacho de Abogados: cómo mejorar su SEO',
    metaDescription: 'Vea cómo estructurar y optimizar la web de un despacho jurídico: arquitectura de especialidades, velocidad, indexación, schema y experiencia móvil.',
    body: [
      'El sitio web de un despacho no es un simple folleto digital: es la sede institucional electrónica de la firma, el destino de quienes buscan sus especialidades y la fuente primordial de datos que Google consulta para evaluar su relevancia.',
      'Un sitio lento, confuso o sin arquitectura estructurada frustra al usuario cualificado y pierde visibilidad orgánica frente a firmas competidoras.',

      '### Arquitectura orientada a especialidades jurídicas',
      'Uno de los errores más frecuentes es agrupar todas las áreas del derecho en una única página genérica de "Servicios". Google indexa y posiciona URLs individuales; por tanto, cada especialidad debe contar con su propia página exclusiva:',
      '• <code>/derecho-tributario</code>: defensa en inspecciones fiscales, planificación impositiva y litigios tributarios.',
      '• <code>/derecho-laboral</code>: asesoría preventiva patronal, convenios colectivos y contencioso laboral.',
      '• <code>/derecho-mercantil</code>: pactos de socios, operaciones corporativas y contratos mercantiles.',

      '### Velocidad móvil y Core Web Vitals',
      'Más del 70% de las consultas a despachos se efectúan desde teléfonos móviles. Garantizar que la página interactúe en menos de 2 segundos es indispensable para retener visitantes y satisfacer los estándares de Google PageSpeed.',

      '### Marcado semántico Schema.org LegalService',
      'Mediante código JSON-LD semántico, especificamos claramente ante los robots de búsqueda la tipología del despacho, nombres de los socios letrados, ámbito territorial y números de registro profesional.',

      '<div class="p-6 my-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg"><h4 class="text-xl font-bold text-white mb-2">¿La web de su firma es lenta o no aparece en las búsquedas?</h4><p class="text-slate-300 text-sm mb-4 leading-relaxed">Modernizamos y optimizamos técnicamente sitios jurídicos para alcanzar puntuaciones máximas en PageSpeed, marcado semántico impecable y alta capacidad de conversión institucional.</p><div class="flex flex-wrap gap-3"><a href="/es/modernizacion-sitios" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white font-semibold text-sm transition-colors shadow">Conozca la Modernización Web</a><a href="/es" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-colors shadow">Ver Planes de SEO Técnico</a></div></div>',
    ],
  },

  // =========================================================================
  // ARTÍCULO 4: MARKETING DE CONTENIDOS JURÍDICOS
  // =========================================================================
  {
    _id: 'post-marketing-de-conteudo-juridico-es',
    title: 'Marketing de contenidos jurídicos: cómo atraer consultas desde Google',
    slug: { current: 'marketing-de-conteudo-juridico' },
    excerpt: 'Cómo producir contenidos legales de alto valor para Google respetando la sobriedad deontológica. Metodología para resolver dudas reales de clientes con rigor y claridad.',
    readingTimeMinutes: 11,
    category: 'SEO para Abogados',
    tags: ['Marketing de Contenidos', 'Artículos Jurídicos SEO', 'Blog Jurídico', 'Autoridad en Google', 'Captación Ética'],
    publishedAt: '2026-11-05T09:00:00Z',
    updatedAt: '2026-11-05T09:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/og-marketing-de-conteudo-juridico.webp',
      },
      alt: 'Marketing de Contenidos Jurídicos - Artículos que atraen visitas cualificadas',
    },
    ogImage: '/images/blog/og-marketing-de-conteudo-juridico.webp',
    seoTitle: 'Marketing de Contenidos Jurídicos: atraiga visitas desde Google',
    metaDescription: 'Descubra cómo planificar artículos jurídicos informativos, resolver las dudas de su público y consolidar la presencia orgánica de su bufete con responsabilidad.',
    body: [
      'La producción editorial es el motor principal para construir autoridad temática ante los algoritmos de Google. No obstante, en la abogacía, escribir sin estrategia o redactar textos con excesivo tecnicismo académico genera artículos que nadie lee ni encuentra.',
      'Un blog jurídico efectivo responde a las preguntas concretas que el cliente se formula antes de acudir al despacho.',

      '### Redacción pedagógica y estructurada',
      'Evite párrafos interminables y latinismos innecesarios. Organice los artículos con encabezados H2 y H3 claros, listas descriptivas y resúmenes ejecutivos que permitan al lector comprender el procedimiento con transparencia.',

      '### Interconexión interna del silo de contenidos',
      'Cada artículo de su blog debe enlazar de forma contextual a la página de especialidad correspondiente y a las guías fundamentales de la firma, consolidando la transferencia de autoridad algorítmica.',

      '<div class="p-6 my-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg"><h4 class="text-xl font-bold text-white mb-2">¿Desea un calendario editorial de SEO estructurado para su firma?</h4><p class="text-slate-300 text-sm mb-4 leading-relaxed">En Auditoria SEO mapeamos las consultas legales de sus clientes ideales y elaboramos contenidos de alto impacto y estricta conformidad ética para liderar las búsquedas de su especialidad.</p><div class="flex flex-wrap gap-3"><a href="/es" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white font-semibold text-sm transition-colors shadow">Conozca Nuestros Servicios de SEO</a><a href="https://wa.me/5519989332087?text=¡Hola!%20Deseo%20un%20plan%20de%20contenidos%20SEO%20para%20mi%20área%20jurídica." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow">Consultar por WhatsApp</a></div></div>',
    ],
  },

  // =========================================================================
  // ARTÍCULO 5: PALABRAS CLAVE PARA ABOGADOS
  // =========================================================================
  {
    _id: 'post-palavras-chave-para-advogados-es',
    title: 'Cómo elegir palabras clave para abogados y despachos jurídicos',
    slug: { current: 'palavras-chave-para-advogados' },
    excerpt: 'Estrategia completa de investigación de palabras clave para el sector legal. Aprenda a identificar términos informativos y transaccionales, explorar la cola larga y segmentar por localidad.',
    readingTimeMinutes: 11,
    category: 'SEO para Abogados',
    tags: ['Palabras Clave Abogados', 'Investigación de Términos', 'SEO Jurídico', 'Long-Tail Legal', 'Intención de Búsqueda'],
    publishedAt: '2026-11-05T08:00:00Z',
    updatedAt: '2026-11-05T08:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/og-palavras-chave-para-advogados.webp',
      },
      alt: 'Palabras clave para Abogados - Investigación de términos e intención de búsqueda',
    },
    ogImage: '/images/blog/og-palavras-chave-para-advogados.webp',
    seoTitle: 'Palabras Clave para Abogados: cómo elegir los términos adecuados',
    metaDescription: 'Aprenda a investigar palabras clave por área del Derecho, ubicación e intención de búsqueda para estructurar las páginas y artículos de su despacho.',
    body: [
      'El fundamento de cualquier campaña de SEO rentable reside en la selección quirúrgica de las palabras clave. Si su despacho elige términos equivocados, todo el esfuerzo de desarrollo y redacción atraerá visitantes genéricos que jamás contratarán sus servicios.',
      'En el ámbito jurídico, el error más común es perseguir términos de volumen desorbitado pero intención ambigua (como <em>"derecho"</em> o <em>"abogado"</em>). Nadie contrata una defensa escribiendo simplemente una palabra aislada.',

      '### Los 3 niveles de intención de búsqueda jurídica',
      '1. <strong>Intención Informativa:</strong> el usuario tiene una duda conceptual (<em>"requisitos para heredar sin testamento"</em>). Ideal para artículos educativos del blog.',
      '2. <strong>Intención de Procedimiento:</strong> investiga el trámite legal (<em>"pasos para impugnar un despido disciplinario"</em>).',
      '3. <strong>Intención Transaccional o de Contratación:</strong> busca constituir defensa y contratar letrados (<em>"abogado mercantil en Valencia"</em>). Estos términos deben integrarse en las páginas de práctica y en Google Maps.',

      '### El poder de las búsquedas de cola larga (Long-Tail)',
      'Las consultas formadas por 3 a 5 palabras presentan menor volumen individual pero acumulan más del 70% de las búsquedas totales. Además, gozan de una competencia menor y concentran la mayor tasa de conversión comercial.',

      '<div class="p-6 my-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg"><h4 class="text-xl font-bold text-white mb-2">¿Desea un estudio de palabras clave a medida para su bufete?</h4><p class="text-slate-300 text-sm mb-4 leading-relaxed">Auditoria SEO identifica todas las oportunidades de búsqueda en su especialidad y ciudad, priorizando los términos de mayor rentabilidad para su firma.</p><div class="flex flex-wrap gap-3"><a href="/es" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557b0] text-white font-semibold text-sm transition-colors shadow">Conozca Nuestros Planes de SEO</a><a href="https://wa.me/5519989332087?text=¡Hola!%20Deseo%20un%20estudio%20de%20palabras%20clave%20para%20mi%20despacho." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow">Consultar por WhatsApp</a></div></div>',
    ],
  },
];
