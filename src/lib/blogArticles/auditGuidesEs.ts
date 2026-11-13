import { SanityPost } from '../../types';

export const ES_AUDIT_GUIDES: SanityPost[] = [
  {
    _id: 'post-auditoria-seo-on-page-es',
    title: 'Auditoría SEO On-Page: checklist para analizar cada página',
    slug: { current: 'auditoria-seo-on-page' },
    excerpt:
      'Método práctico para auditar elementos on-page URL por URL: lectura de la intención de búsqueda en la SERP, organización editorial, title y meta description, jerarquía H1-H3, enlaces internos, imágenes y priorización.',
    readingTimeMinutes: 14,
    category: 'SEO Técnico',
    tags: [
      'Auditoría SEO On-Page',
      'Checklist SEO On-Page',
      'Análisis de Contenido',
      'Títulos y Encabezados',
      'Enlaces Internos',
      'Optimización de Páginas',
    ],
    publishedAt: '2026-11-13T10:00:00Z',
    updatedAt: '2026-11-13T10:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-seo-on-page.webp',
      },
      alt: 'Diagrama editorial de auditoría SEO on-page con revisión de encabezados, enlaces internos y estructura de página',
    },
    ogImage: '/images/blog/og-auditoria-seo-on-page.png',
    seoTitle: 'Auditoría SEO On-Page: checklist para analizar cada página | Auditoria SEO',
    metaDescription:
      'Aprenda a realizar una auditoría SEO on-page URL por URL: intención de búsqueda, calidad editorial, title, encabezados H1-H3, enlaces internos y prioridades.',
    ogTitle: 'Auditoría SEO On-Page: checklist para analizar cada página',
    ogDescription:
      'Guía práctica para revisar señales on-page de cada URL: encaje con la SERP, títulos, encabezados, enlaces internos, multimedia y plan de mejoras.',
    body: [
      'Es frecuente encontrar páginas correctamente indexadas en Google que permanecen estancadas en la segunda o tercera página de resultados. En la mayoría de los casos, la causa no está en el servidor ni en un bloqueo de rastreo, sino en una desconexión entre lo que la URL expresa en su HTML y lo que quien busca necesita resolver al hacer clic.',
      'Una <strong>auditoría SEO on-page</strong> examina precisamente esa capa interna de cada dirección: si el contenido responde a la intención de búsqueda, si los títulos y encabezados organizan el tema sin ambigüedad y si los enlaces internos conectan la página con el resto del sitio.',
      'En lugar de repetir listas automáticas basadas en porcentajes artificiales de palabras clave, esta guía explica cómo revisar páginas de servicios, categorías y artículos informativos en la práctica, validar cada punto en el navegador y ordenar los ajustes según su impacto editorial.',

      '### Qué evalúa realmente una auditoría SEO On-Page',
      'Auditar el on-page de una URL consiste en inspeccionar los componentes visibles y estructurales que pertenecen únicamente a ese documento HTML. Al abrir las herramientas de desarrollo sobre una página comercial o un artículo, cuatro preguntas guían el diagnóstico: si responde al motivo real de la consulta, si el tema central queda claro desde el título y los encabezados, si se lee cómodamente en teléfonos móviles y si orienta al visitante hacia el siguiente paso lógico dentro del dominio.',
      'Este enfoque deja atrás viejas fórmulas basadas en repetir una frase exacta hasta alcanzar cierto porcentaje de densidad. Los motores de búsqueda actuales interpretan contexto, sinónimos y cobertura de subtemas; forzar la misma palabra clave en cada subtítulo o repetirla de forma mecánica en el primer párrafo resta credibilidad frente al lector y no mejora la comprensión semántica.',

      '#### Alcance real: SEO On-Page frente a SEO Técnico',
      'Mezclar hallazgos on-page con fallos de infraestructura suele hacer perder semanas de trabajo. Reescribir un artículo entero no atraerá visitas si el archivo <code>robots.txt</code> impide su rastreo o si la etiqueta <code>canonical</code> apunta a la página de inicio; del mismo modo, acelerar el servidor no corrige una página de servicio con título genérico y contenido superficial.',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Capa</th><th class="p-3 border-b border-slate-200">Auditoría SEO On-Page</th><th class="p-3 border-b border-slate-200">Auditoría Técnica de SEO</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Unidad de análisis</td><td class="p-3">Página individual (contenido, relevancia y HTML semántico).</td><td class="p-3">Dominio, servidor, plantillas y reglas globales de indexación.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Señales revisadas</td><td class="p-3">Intención de búsqueda, <code>&lt;title&gt;</code>, meta description, H1–H3, textos ancla, atributo <code>alt</code>.</td><td class="p-3">Estados HTTP, <code>robots.txt</code>, <code>noindex</code>, canonical, sitemap XML, CWV de campo.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Síntoma habitual</td><td class="p-3">URL indexada que no logra visibilidad o recibe visitas sin convertir.</td><td class="p-3">URL fuera del índice, duplicada, lenta al cargar o inaccesible para el bot.</td></tr></tbody></table></div>',
      'Si el problema inicial apunta a errores de rastreo, redirecciones mal resueltas o exclusiones en Google Search Console, conviene empezar por la base estructural descrita en nuestra guía de <a href="/es/blog/auditoria-tecnica-seo" class="text-[#1A73E8] font-semibold hover:underline">auditoría técnica de SEO sobre rastreo e indexación</a>.',

      '### Análisis de la intención de búsqueda antes de editar',
      'El error más costoso al optimizar páginas web es modificar títulos y párrafos guiándose solo por el volumen mensual de una herramienta de palabras clave. Antes de editar el texto, abra una sesión privada, busque el término objetivo para el país o ciudad de interés y examine los diez primeros resultados orgánicos.',

      '#### Cómo interpretar la SERP antes de intervenir la página',
      'Al revisar la primera página de resultados, compruebe cuatro aspectos concretos que revelan si su URL compite en el formato adecuado:',
      '<ol class="list-decimal pl-6 space-y-2"><li><strong>Tipo de intención dominante:</strong> ¿Quien consulta busca aprender un proceso (informativa), comparar criterios y proveedores (investigación comercial) o contratar de inmediato (transaccional)?</li><li><strong>Formato que domina el top 5:</strong> ¿Aparecen guías prácticas detalladas, páginas de servicio directas con alcance transparente o listados de categoría con múltiples opciones?</li><li><strong>Vacíos en las respuestas actuales:</strong> ¿Qué pasos prácticos, excepciones técnicas o ejemplos reales quedaron incompletos en los resultados visibles?</li><li><strong>Coherencia de la URL propia:</strong> Intentar posicionar una ficha breve de servicio para una pregunta educativa amplia —o un artículo extenso y teórico para quien busca contratar hoy— reduce la retención y debilita la relevancia.</li></ol>',
      'Un caso típico aclara esa diferencia: quien busca "cuánto cuesta una auditoría SEO" espera criterios claros de alcance, factores que modifican el presupuesto y plazos realistas. Si el sitio responde con un texto genérico explicando "qué es el SEO y por qué es importante", el visitante regresa al buscador en segundos.',

      '### Calidad editorial, profundidad y vigencia del contenido',
      'En su documentación oficial sobre <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">contenido útil, fiable y pensado para las personas</a>, Google deja claro que los sistemas de clasificación favorecen páginas escritas para resolver necesidades reales con precisión técnica, y no textos alargados artificialmente para aparentar profundidad.',

      '#### Criterios prácticos para revisar el texto de la URL',
      'Al leer críticamente una página publicada, verifique si los dos primeros párrafos sitúan de inmediato al lector y aportan contexto útil, en lugar de gastar diez líneas con introducciones obvias. Tampoco existe una extensión mínima universal: aclarar qué significa un código de estado HTTP exige concisión, mientras que una guía de auditoría requiere pasos verificables, ejemplos reales y criterios para tomar decisiones.',
      'Preste atención además a tres señales que suelen evidenciar textos descuidados:',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Referencias caducadas:</strong> Citar versiones antiguas de Search Console o métricas ya sustituidas (como FID en lugar de INP) deteriora la confianza del lector profesional.</li><li><strong>Afirmaciones sin sustento lógico:</strong> Asegurar que un cambio "mejora mucho el posicionamiento" sin explicar qué señal técnica o de usuario modifica en la práctica.</li><li><strong>Repetición mecánica:</strong> Incluir exactamente la misma frase clave en casi todos los encabezados resta naturalidad a la lectura.</li></ul>',

      '### Snippets de búsqueda: etiqueta title y meta description',
      'El elemento <code>&lt;title&gt;</code> y la <code>meta description</code> conforman la presentación de su página dentro de los resultados orgánicos. Aunque viven dentro del <code>&lt;head&gt;</code>, resumen directamente la propuesta editorial para alguien que compara varias opciones en pocos segundos.',

      '#### Cómo auditar el Title Tag (y por qué Google a veces lo reescribe)',
      'La guía oficial de Google sobre <a href="https://developers.google.com/search/docs/appearance/title-link?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">enlaces de título en la Búsqueda de Google</a> advierte que los títulos vacíos, duplicados, demasiado largos o sobrecargados de términos suelen ser reescritos automáticamente por el buscador, muchas veces tomando el texto del <code>&lt;h1&gt;</code> o de enlaces externos.',
      'Durante la revisión, confirme que cada URL indexable tenga un <code>&lt;title&gt;</code> distinto (una búsqueda rápida con <code>site:sudominio.com</code> ayuda a detectar títulos repetidos en el índice). Sitúe el tema principal al principio y procure mantenerlo alrededor de 50 a 60 caracteres —teniendo presente que el recorte en pantalla depende del ancho en píxeles (alrededor de 580–600px en escritorio) y que las mayúsculas ocupan más espacio.',
      '<div class="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-2"><p><strong>Ejemplo deficiente (repetitivo y propenso a reescritura):</strong><br/><code>Auditoría On-Page | Checklist SEO On-Page | Optimización Barata</code></p><p><strong>Ejemplo claro y específico:</strong><br/><code>Auditoría SEO On-Page: checklist para analizar cada página | Marca</code></p></div>',
      'En sitios desarrollados con frameworks JavaScript (como React o Next.js), inspeccione tanto el HTML inicial devuelto por el servidor (<em>Ver código fuente</em>) como el DOM final en las herramientas de desarrollo (<code>document.title</code>). Si el título específico solo aparece tras ejecutar scripts en el navegador, redes sociales y rastreadores ligeros pueden leer el título genérico de la plantilla.',

      '#### Cómo auditar la Meta Description con criterio práctico',
      'La <code>meta description</code> no actúa como factor directo de clasificación, pero incide en la claridad del resumen mostrado y en el porcentaje de clics (CTR). Según la documentación sobre <a href="https://developers.google.com/search/docs/appearance/snippet?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">control de fragmentos en los resultados de búsqueda</a>, una descripción precisa entre 130 y 155 caracteres reduce el riesgo de que Google muestre extractos sueltos tomados del menú o del pie de página.',
      'Evite copiar la misma frase institucional en decenas de URLs. Redacte descripciones específicas y fieles al contenido en páginas comerciales, categorías estratégicas y guías centrales; en sitios con miles de fichas muy específicas, conviene priorizar primero las páginas clave, ya que en consultas muy concretas Google suele armar fragmentos dinámicos ajustados a los términos buscados.',

      '### Estructura semántica en HTML: encabezados, URLs y marcado',
      'La organización del código orienta tanto a lectores que escanean la pantalla como a tecnologías de asistencia y sistemas de búsqueda encargados de distinguir el tema principal de sus apartados.',

      '#### Jerarquía lógica de H1, H2 y H3',
      'Aunque la especificación HTML5 admite técnicamente varios <code>&lt;h1&gt;</code> dentro de secciones independientes, en SEO editorial y accesibilidad conviene mantener un único <code>&lt;h1&gt;</code> visible al inicio del contenido para evitar cualquier duda sobre el tema central de la página. Ese H1 debe guardar relación directa con el <code>&lt;title&gt;</code>, sin necesidad de ser idéntico palabra por palabra.',
      'Divida los bloques principales con <code>&lt;h2&gt;</code> y las subdivisiones internas con <code>&lt;h3&gt;</code>, sin saltarse niveles. Pasar directamente de <code>H1</code> a <code>H4</code> solo porque la tipografía se ve más discreta rompe el esquema estructural; el tamaño visual debe ajustarse mediante CSS. Tampoco envuelva el logotipo del encabezado ni etiquetas del pie de página en etiquetas <code>H1</code> o <code>H2</code>.',

      '#### Slugs legibles y etiquetas semánticas HTML5',
      'Una URL clara permite anticipar el contenido antes de hacer clic y facilita analizar el rendimiento por secciones en Search Console. Utilice rutas breves en minúsculas separadas por guiones medios, como <code>/es/blog/auditoria-seo-on-page</code>, evitando parámetros numéricos (<code>/?p=482</code>), tildes o cadenas extensas de fechas.',
      'En la estructura interna del documento, emplee elementos nativos acordes con la función de cada bloque —<code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, listas <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> y tablas <code>&lt;table&gt;</code>— en lugar de construir toda la página solo con contenedores <code>&lt;div&gt;</code> genéricos. Y respete una regla clave de preservación: si una URL ya acumula visitas o enlaces externos, no modifique el slug por preferencia estética; hágalo únicamente por necesidad arquitectónica real y configure una redirección <code>301</code> permanente.',

      '### Arquitectura de enlaces internos y referencias externas',
      'Los enlaces dentro del cuerpo editorial conectan temas relacionados, guían al lector hacia recursos complementarios y muestran a los buscadores qué URLs desempeñan un papel central. Como detalla Google en su guía sobre <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">enlaces rastreables y texto ancla</a>, los vínculos importantes deben construirse con elementos <code>&lt;a href="..."&gt;</code> estándar, no mediante botones activados únicamente por JavaScript sin URL legible.',

      '#### Textos ancla descriptivos y conexión con páginas comerciales',
      'Sustituya expresiones vacías como <em>"haga clic aquí"</em> o <em>"ver más"</em> por textos ancla que anticipen con naturalidad el contenido de destino. No hace falta repetir exactamente la misma frase en todos los enlaces hacia una página; variar la redacción según el contexto de cada párrafo suena más natural y enriquece el contexto semántico.',
      'Observe también hacia dónde conduce el artículo cuando el lector identifica varios fallos en su sitio web: si el diagnóstico supera ajustes aislados en una URL, resulta coherente ofrecer un enlace contextual hacia la página principal para solicitar una <a href="/es" class="text-[#1A73E8] font-semibold hover:underline">auditoría de SEO completa realizada por especialista</a> que ordene las prioridades.',

      '#### Referencias externas fiables e integridad de destino',
      'Respaldar explicaciones técnicas con fuentes primarias —como Google Search Central, especificaciones del W3C o guías de ingeniería en web.dev— aporta transparencia y permite contrastar criterios oficiales. Durante la auditoría de cada página, revise en la pestaña <em>Network</em> del navegador o con un rastreador que ningún enlace interno o saliente apunte a errores <code>404</code> ni a cadenas innecesarias de redirección.',

      '### Imágenes, lectura en pantalla y paridad móvil por URL',
      'La presentación visual y los recursos multimedia determinan si el visitante lee la página hasta el final o regresa a los resultados de Google a los pocos segundos.',

      '#### Atributos alt, nombres de archivo y estabilidad visual de la imagen',
      'Siguiendo las pautas de <a href="https://developers.google.com/search/docs/appearance/google-images?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">prácticas recomendadas para Google Imágenes</a>, redacte el atributo <code>alt</code> describiendo con precisión qué ilustra la imagen en ese punto del artículo, algo esencial para lectores de pantalla y para la indexación visual. Las imágenes puramente decorativas deben conservar <code>alt=""</code> vacío, y ninguna imagen debe acumular listas forzadas de palabras clave.',
      'Emplee nombres de archivo descriptivos (por ejemplo <code>checklist-auditoria-on-page.webp</code> en lugar de <code>IMG_8392.png</code>), sirva formatos comprimidos como WebP o AVIF y defina siempre los atributos HTML <code>width</code> y <code>height</code> (o <code>aspect-ratio</code> en CSS). Así evitará que una imagen desplace el texto al terminar de descargarse. La medición agregada de Core Web Vitals de todo el dominio corresponde a la auditoría técnica.',

      '#### Lectura ágil y equivalencia móvil en la página',
      'Debido a que Google evalúa principalmente la versión para teléfonos inteligentes, inspeccione cada URL en anchos de 360px a 414px desde el modo responsivo del navegador. Compruebe que los párrafos no formen bloques densos interminables, que las tablas cuenten con desplazamiento horizontal contenido y que los botones o enlaces mantengan distancia cómoda al tacto.',
      'Verifique además la paridad de contenido: encabezados, tablas comparativas, preguntas clave y enlaces internos visibles en escritorio deben seguir presentes en la versión móvil, evitando ocultar bloques informativos relevantes solo para simplificar visualmente la pantalla.',

      '### Checklist práctico de auditoría SEO On-Page',
      'La siguiente matriz resume los criterios por prioridad operativa para revisar cada URL importante del sitio:',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Elemento</th><th class="p-3 border-b border-slate-200">Cómo confirmarlo en la práctica</th><th class="p-3 border-b border-slate-200">Prioridad</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Intención de búsqueda</td><td class="p-3">Comparar formato y profundidad de la URL frente al Top 5 orgánico real.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Etiqueta <code>&lt;title&gt;</code></td><td class="p-3">Revisar HTML inicial y DOM renderizado; validar unicidad con <code>site:</code>.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Calidad editorial</td><td class="p-3">Comprobar inicio directo, ejemplos reales, datos vigentes y cero relleno.</td><td class="p-3 font-semibold text-red-700">Crítica</td></tr><tr><td class="p-3 font-semibold text-slate-900">Encabezados H1–H3</td><td class="p-3">Verificar esquema en DevTools: un H1 principal y orden secuencial sin saltos.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Enlaces internos</td><td class="p-3">Revisar textos ancla descriptivos, ausencia de 404 y conexión hacia páginas clave.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Paridad móvil</td><td class="p-3">Probar en 360px sin desbordamiento horizontal, contenido oculto ni bajo contraste.</td><td class="p-3 font-semibold text-amber-700">Alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Meta description</td><td class="p-3">Confirmar resumen exclusivo de 130–155 caracteres en páginas estratégicas.</td><td class="p-3 font-semibold text-blue-700">Recomendada</td></tr><tr><td class="p-3 font-semibold text-slate-900">Imágenes y <code>alt</code></td><td class="p-3">Revisar atributos <code>alt</code> fieles, WebP/AVIF ligero y <code>width</code>/<code>height</code> declarados.</td><td class="p-3 font-semibold text-blue-700">Recomendada</td></tr></tbody></table></div>',

      '### Cinco fallos frecuentes y cómo corregirlos',
      'Incluso en sitios bien diseñados suelen repetirse cinco errores que frenan el rendimiento orgánico:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Canibalización entre URLs parecidas:</strong> Dos o tres páginas responden prácticamente a la misma consulta y compiten entre sí. <em>Solución:</em> unifique el contenido en una URL principal más sólida (aplicando redirección 301 desde las secundarias) o separe claramente la intención de cada una.</li><li><strong>Títulos centrados solo en la marca:</strong> Páginas comerciales con <code>&lt;title&gt;</code> del tipo <em>"Servicios | Empresa X"</em>. <em>Solución:</em> indique el servicio exacto y su alcance al inicio del título.</li><li><strong>Párrafos densos sin pausas visuales:</strong> Guías técnicas publicadas como bloques continuos de 15 líneas sin subtítulos ni listas. <em>Solución:</em> ordene con H2 y H3 claros, tablas comparativas y pasos verificables.</li><li><strong>Páginas de servicio aisladas:</strong> URLs comerciales accesibles únicamente desde el pie de página, sin enlaces editoriales desde artículos afines. <em>Solución:</em> integre vínculos naturales donde la guía informativa conecta con la solución profesional.</li><li><strong>Sobreoptimización mecánica:</strong> Repetir la palabra clave exacta en todos los H2, textos alternativos y pie de página. <em>Solución:</em> reescriba priorizando lectura humana natural y vocabulario variado.</li></ol>',

      '### Cuándo conviene una auditoría especializada',
      'Aplicar este checklist resuelve con agilidad mejoras puntuales en sitios de tamaño reducido. La revisión de un especialista aporta valor diferencial cuando el proyecto reúne decenas de URLs y cuesta definir qué páginas actualizar, fusionar o retirar sin perder tráfico histórico, cuando compiten entre sí artículos del blog y páginas comerciales, o cuando las mejoras de contenido chocan con limitaciones técnicas de plantilla y renderizado.',
      'Si ese escenario coincide con la situación actual de su sitio web, conozca nuestra <a href="/es" class="text-[#1A73E8] font-semibold hover:underline">auditoría SEO realizada por especialista</a> para integrar el análisis on-page y técnico en un plan ordenado de ejecución.',
    ],
  },
  {
    _id: 'post-auditoria-tecnica-seo-es',
    title: 'Auditoría Técnica de SEO: checklist de rastreo e indexación',
    slug: { current: 'auditoria-tecnica-seo' },
    excerpt:
      'Cómo auditar la infraestructura SEO sin depender de alertas genéricas: verificación del HTML renderizado por Googlebot, robots.txt vs. noindex, Search Console, canonical, sitemap XML, encabezados HTTP, Core Web Vitals reales y priorización.',
    readingTimeMinutes: 16,
    category: 'SEO Técnico',
    tags: [
      'Auditoría Técnica de SEO',
      'Checklist de SEO Técnico',
      'Rastreo e Indexación',
      'Canonical',
      'Sitemap XML',
      'Core Web Vitals',
    ],
    publishedAt: '2026-11-13T09:00:00Z',
    updatedAt: '2026-11-13T09:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Fundador de Auditoria SEO & Especialista en Tráfico Orgánico',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-tecnica-seo.webp',
      },
      alt: 'Ilustración técnica de rastreo web, mapa del sitio XML, embudo de indexación y rendimiento en auditoría técnica de SEO',
    },
    ogImage: '/images/blog/og-auditoria-tecnica-seo.png',
    seoTitle: 'Auditoría Técnica de SEO: checklist de rastreo e indexación | Auditoria SEO',
    metaDescription:
      'Guía práctica de auditoría técnica de SEO: verifique rastreo, Google Search Console, robots.txt, canonical, sitemap XML, códigos HTTP y Core Web Vitals reales.',
    ogTitle: 'Auditoría Técnica de SEO: checklist de rastreo e indexación',
    ogDescription:
      'Aprenda a comprobar obstáculos reales de rastreo e indexación, interpretar Search Console y distinguir bloqueos críticos de ruido técnico.',
    body: [
      'Un sitio web puede contar con artículos rigurosos y títulos bien pensados y, aun así, quedar invisible en Google si un fallo de configuración impide descubrir, renderizar o consolidar sus URLs. En el trabajo diario aparecen errores silenciosos —una etiqueta <code>noindex</code> heredada del entorno de pruebas, plantillas que emiten el <code>canonical</code> de la página de inicio en todos los artículos o cadenas de redirecciones tras cambiar de CMS— capaces de neutralizar meses de esfuerzo editorial.',
      'Ejecutar un rastreador automático y exportar cientos de "advertencias críticas" rara vez aclara qué hacer primero, porque esas listas no distinguen un bloqueo sobre páginas de venta de un aviso menor en rutas secundarias. Una <strong>auditoría técnica de SEO</strong> bien planteada comprueba cómo responden realmente el servidor y el navegador ante Googlebot y contrasta cada hipótesis con Google Search Console.',

      '### El papel de la auditoría técnica en la salud del dominio',
      'Su finalidad es asegurar un recorrido limpio en cuatro fases: descubrimiento de la URL, descarga sin errores del servidor, renderizado completo de los elementos esenciales e incorporación de la versión canónica correcta al índice.',

      '#### Cómo distinguir fallos técnicos de ajustes On-Page',
      'Antes de pedir cambios de código o reescribir textos, identifique dónde se origina el síntoma. Cuando páginas clave no aparecen al consultar <code>site:sudominio.com/url</code>, figuran excluidas en Search Console o coexisten variantes duplicadas con y sin barra final, la causa es técnica. Cuando la URL ya figura indexada como canónica única, pero no logra posicionarse para su tema, el trabajo pasa a la capa editorial y semántica explicada en nuestra guía de <a href="/es/blog/auditoria-seo-on-page" class="text-[#1A73E8] font-semibold hover:underline">auditoría SEO on-page página por página</a>.',

      '### Rastreo, renderizado y control de acceso',
      'Googlebot solo interpreta lo que logra descargar y renderizar sin obstáculos. Cualquier fallo en esta etapa condiciona todo el embudo posterior.',

      '#### Cómo comprobar qué ve realmente Googlebot',
      'En Google Search Console, abra la herramienta <strong>Inspección de URLs</strong> sobre la página de inicio, una página comercial y un artículo representativo, y pulse <strong>Probar URL publicada</strong>. En el resultado, abra <em>Ver página probada</em> para revisar tres aspectos concretos: el HTML renderizado tras ejecutar JavaScript, la captura visual generada y la lista de scripts o archivos externos bloqueados o con error.',
      'Esta comprobación resulta indispensable en aplicaciones JavaScript (React, Next.js, Vue). Compare el HTML inicial entregado por el servidor (<em>Ver código fuente</em>) frente al DOM visible en el inspector del navegador. Si el contenido principal, los enlaces internos o metadatos como <code>title</code> y <code>canonical</code> dependen por completo de ejecución tardía en el cliente sin prerenderizado ni SSR, vistas previas al compartir enlaces y rastreadores ligeros suelen fallar, y Google debe posponer la página a una segunda cola de renderizado.',
      'En sitios medianos o grandes, vigile también el consumo innecesario de rastreo: respuestas <code>5xx</code> intermitentes o filtros combinados que multiplican miles de URLs parametrizadas sin valor de búsqueda.',

      '#### Robots.txt frente a meta robots y X-Robots-Tag',
      'Confundir control de rastreo con control de indexación figura entre los errores más dañinos. El archivo <code>robots.txt</code>, explicado en la <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">introducción oficial a robots.txt</a>, indica qué rutas no deben ser rastreadas —útil para paneles privados, carritos o parámetros internos.',
      '<strong>Trampa frecuente:</strong> bloquear una URL en <code>robots.txt</code> <em>no garantiza</em> eliminarla de Google si existen enlaces externos hacia ella; el buscador puede indexar la dirección sin fragmento descriptivo. Además, si una ruta está bloqueada en <code>robots.txt</code>, Googlebot ni siquiera puede entrar para leer una etiqueta <code>&lt;meta name="robots" content="noindex" /&gt;</code> colocada en esa página.',
      'Por eso, cuando desee excluir una URL del índice, permita su rastreo e indique <code>noindex</code> en el <code>&lt;head&gt;</code> o mediante el encabezado HTTP <code>X-Robots-Tag: noindex</code> (muy práctico para documentos PDF). Para validarlo directamente, abra <code>sudominio.com/robots.txt</code> en el navegador y verifique que no exista un <code>Disallow: /</code> residual ni bloqueos accidentales a carpetas de CSS o JavaScript.',

      '### Diagnóstico de indexación en Google Search Console',
      'Una página puede devolver HTTP 200 sin errores de red y seguir fuera de los resultados. El informe <strong>Indexación de páginas</strong> de Search Console detalla los motivos exactos de exclusión.',

      '#### Cómo interpretar los estados que más confunden',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Excluida por etiqueta "noindex":</strong> Revise que todas las URLs listadas deban permanecer ocultas (pantallas de acceso, gracias o buscador interno). Si aparece alguna página comercial, corrija la plantilla de inmediato.</li><li><strong>Rastreada: actualmente sin indexar:</strong> Google leyó el contenido, pero decidió no incluirlo todavía en el índice. Rara vez se soluciona pulsando "solicitar indexación"; suele señalar contenido poco útil, alta similitud con otra URL o ausencia de enlaces internos que respalden su importancia.</li><li><strong>Descubierta: actualmente sin indexar:</strong> Google conoce la dirección, pero aún no la ha rastreado. En dominios extensos refleja saturación de URLs secundarias o lentitud de respuesta del servidor.</li><li><strong>Error 404 blando (Soft 404):</strong> Páginas vacías, productos agotados o mensajes de error que responden con estado HTTP <code>200 OK</code> en lugar de <code>404</code> o <code>410</code>, contaminando el índice.</li></ul>',

      '### Consolidación de URLs duplicadas y Sitemap XML',
      'Un mismo contenido suele ser accesible bajo distintas variaciones: con y sin <code>www</code>, protocolo <code>http</code> y <code>https</code>, barra final (<code>/</code>), mayúsculas o parámetros de seguimiento como <code>?utm_source=</code>.',

      '#### Etiquetas canonical y fallos habituales de plantilla',
      'Como explica la guía oficial para <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">consolidar URLs duplicadas</a>, cada URL principal indexable debe incluir una única etiqueta absoluta <code>&lt;link rel="canonical" href="https://..." /&gt;</code> apuntando a sí misma.',
      'Un error crítico recurrente en sitios con rutas dinámicas consiste en emitir la URL de la portada (<code>https://sudominio.com/</code>) como etiqueta canónica de todos los artículos del blog. Cuando eso ocurre, el buscador interpreta los artículos como copias de la página principal y tiende a excluirlos. Compruebe una muestra de cada plantilla (inicio, servicio, categoría y artículo) tanto en el código fuente inicial como en el DOM renderizado para asegurar un único canonical HTTPS que devuelva <code>200 OK</code>.',

      '#### Qué importa realmente en sitemap.xml',
      'Según la documentación sobre <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Sitemaps en Google Search Central</a>, el archivo <code>sitemap.xml</code> sirve como inventario auxiliar de direcciones canónicas. La regla fundamental es estricta: incluya únicamente URLs indexables, canónicas hacia sí mismas y con estado <code>200 OK</code>, dejando fuera redirecciones 301, páginas 404 o URLs con <code>noindex</code>.',
      'Conviene aclarar dos mitos frecuentes del formato XML: Google ignora en la práctica los atributos <code>&lt;priority&gt;</code> y <code>&lt;changefreq&gt;</code>, mientras que <code>&lt;lastmod&gt;</code> solo aporta valor cuando refleja actualizaciones reales de contenido y no una fecha regenerada automáticamente en cada compilación. Envíe el archivo en Search Console y contraste periódicamente cuántas URLs enviadas terminan indexadas.',

      '### Códigos HTTP, redirecciones e integridad interna',
      'Los encabezados HTTP y los enlaces internos definen si usuarios y rastreadores circulan sin fricción por el sitio.',

      '#### Estados HTTP y cadenas de redirección en la práctica',
      'Al trasladar rutas o retirar páginas, distinga entre redirecciones permanentes (<code>301</code> o <code>308</code>) y temporales (<code>302</code> o <code>307</code>): cualquier cambio definitivo requiere <code>301/308</code> para consolidar señales hacia la nueva URL. Las cadenas de varios saltos (<code>http://</code> -&gt; <code>https://www</code> -&gt; <code>https://sin-www</code> -&gt; <code>/ruta-final</code>) ralentizan la carga; actualice la regla inicial para dirigir en un solo salto al destino final.',
      'Sin necesidad de software costoso, puede comprobarlo en la terminal con <code>curl -sIL https://sudominio.com/ruta</code> y seguir cada bloque <code>HTTP/</code> y encabezado <code>location:</code> hasta confirmar la respuesta final <code>200 OK</code> (o detectar bucles y fallos <code>5xx</code> del servidor). Las páginas retiradas sin reemplazo deben devolver <code>404</code> o <code>410</code> y desaparecer de menús, enlaces internos y sitemap.',

      '#### Enlaces rotos, páginas huérfanas y arquitectura multilingüe',
      'Para identificar <strong>páginas huérfanas</strong> —URLs válidas presentes en el CMS o en el <code>sitemap.xml</code> que carecen de enlaces internos entrantes—, ejecute un rastreo partiendo solo de los vínculos de la página de inicio y cruce el resultado con las URLs del sitemap y de Search Console. Las páginas estratégicas del negocio tampoco deberían quedar ocultas a cinco o seis clics de profundidad.',
      'En sitios con versiones en español, portugués e inglés, valide igualmente la simetría de las etiquetas <code>hreflang</code>: cada versión debe referenciar todas las equivalentes (incluida la propia URL), usando códigos ISO válidos y apuntando únicamente a URLs canónicas con código <code>200 OK</code>. Un <code>hreflang</code> dirigido a una redirección o a una ruta con <code>noindex</code> suele ser descartado por el buscador.',

      '### Rendimiento real (Core Web Vitals), mobile-first y datos estructurados',
      'La infraestructura también abarca el comportamiento de carga en dispositivos reales y la claridad de las entidades declaradas para máquinas.',

      '#### Datos de campo (CrUX) frente a laboratorio y límites de PageSpeed',
      'Los <a href="https://web.dev/articles/vitals?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Core Web Vitals</a> evalúan tres indicadores en el percentil 75 de visitas reales (datos CrUX): <strong>LCP</strong> (carga del bloque visual principal, objetivo saludable hasta 2,5 segundos), <strong>INP</strong> (capacidad de respuesta tras interacciones del usuario, hasta 200 milisegundos) y <strong>CLS</strong> (estabilidad visual durante la carga, hasta 0,1).',
      'Al auditar velocidad, priorice los datos reales del informe de Core Web Vitals en Search Console por encima de puntuaciones sintéticas puntuales en Lighthouse, que fluctúan según la red simulada. Tal como aclara la documentación sobre <a href="https://developers.google.com/search/docs/appearance/page-experience?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">experiencia de página en la Búsqueda de Google</a>, obtener 100 puntos en pruebas de laboratorio no garantiza los primeros puestos ni sustituye un contenido relevante; su utilidad radica en eliminar fricciones que provocan abandono.',

      '#### Indexación mobile-first y marcado JSON-LD coherente',
      'Bajo la <a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing?hl=es" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">indexación mobile-first</a>, Googlebot para smartphones define la evaluación principal del sitio. Verifique la presencia de la meta <code>viewport</code>, que ningún archivo CSS o JS necesario para dibujar la interfaz esté bloqueado en <code>robots.txt</code> y que todo el contenido siga visible en pantallas pequeñas.',
      'Respecto a datos estructurados en <strong>JSON-LD (Schema.org)</strong>, incorpore únicamente esquemas coherentes con el tipo de página y visibles en pantalla —por ejemplo <code>BlogPosting</code> en artículos y <code>ProfessionalService</code> en páginas comerciales— sin duplicar bloques contradictorios ni marcar reseñas o precios ficticios. Valide el HTML publicado en la Prueba de resultados enriquecidos de Google y en Schema Markup Validator.',

      '### Matriz de verificación técnica de SEO',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Área técnica</th><th class="p-3 border-b border-slate-200">Comprobación práctica recomendada</th><th class="p-3 border-b border-slate-200">Nivel habitual</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Acceso HTTP y renderizado</td><td class="p-3">Verificar encabezados (<code>curl -sIL</code>), errores 5xx y HTML en Inspección de URLs.</td><td class="p-3 font-semibold text-red-700">Bloqueo crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Robots.txt y <code>noindex</code></td><td class="p-3">Revisar <code>/robots.txt</code> y descartar <code>noindex</code> involuntario en URLs clave.</td><td class="p-3 font-semibold text-red-700">Bloqueo crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Etiquetas <code>canonical</code></td><td class="p-3">Confirmar canonical único, absoluto, autorreferente y 200 OK por plantilla.</td><td class="p-3 font-semibold text-red-700">Bloqueo crítico</td></tr><tr><td class="p-3 font-semibold text-slate-900">Sitemap XML</td><td class="p-3">Validar en Search Console solo URLs canónicas 200, sin 301/404/noindex.</td><td class="p-3 font-semibold text-amber-700">Prioridad alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Redirecciones y 404</td><td class="p-3">Suprimir enlaces hacia 404 y reducir cadenas multi-salto a un solo 301.</td><td class="p-3 font-semibold text-amber-700">Prioridad alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Huérfanas y arquitectura</td><td class="p-3">Cruzar rastreo interno con sitemap y comprobar simetría <code>hreflang</code> por idioma.</td><td class="p-3 font-semibold text-amber-700">Prioridad alta</td></tr><tr><td class="p-3 font-semibold text-slate-900">Core Web Vitals (campo)</td><td class="p-3">Evaluar LCP, INP y CLS en el percentil 75 con datos reales de Search Console.</td><td class="p-3 font-semibold text-blue-700">Mejora continua</td></tr><tr><td class="p-3 font-semibold text-slate-900">Datos estructurados</td><td class="p-3">Validar JSON-LD en Rich Results Test manteniendo fidelidad al texto visible.</td><td class="p-3 font-semibold text-blue-700">Mejora continua</td></tr></tbody></table></div>',

      '### Priorización de correcciones en tres olas',
      'Un informe técnico solo genera avance cuando desarrollo y marketing saben exactamente qué atender primero sin perder semanas en avisos secundarios:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Ola 1 — Bloqueos críticos de rastreo e indexación:</strong> Corrija de inmediato etiquetas <code>noindex</code> accidentales, bloqueos indebidos en <code>robots.txt</code>, fallos <code>5xx</code>, variantes duplicadas sin redirección ni canonical y plantillas que envían el canonical de todas las rutas hacia la portada.</li><li><strong>Ola 2 — Flujo interno e higiene estructural:</strong> Elimine enlaces internos rotos (404), acorte cadenas <code>301</code> a un salto directo, conecte páginas huérfanas valiosas y depure el <code>sitemap.xml</code>.</li><li><strong>Ola 3 — Rendimiento real y semántica avanzada:</strong> Resuelva cuellos de botella de LCP, INP y CLS medidos en usuarios reales, unifique esquemas JSON-LD por tipo de página y revise etiquetas <code>hreflang</code> en dominios multilingües.</li></ol>',

      '### Cuándo involucrar una auditoría técnica especializada',
      'Esta guía cubre las comprobaciones esenciales para detectar obstáculos evidentes en la mayoría de sitios corporativos. Contar con una auditoría conducida por especialista se vuelve especialmente valioso al planificar migraciones de dominio o cambios de plataforma sin perder tráfico histórico, al operar aplicaciones JavaScript donde el HTML inicial difiere de la página renderizada, o al gestionar miles de filtros parametrizados y conflictos multilingües en Search Console.',
      'Cuando el equipo técnico necesita un diagnóstico claro que separe los bloqueos reales del ruido automático, conozca nuestra <a href="/es" class="text-[#1A73E8] font-semibold hover:underline">auditoría técnica de SEO realizada por especialista</a> con hoja de ruta priorizada.',
    ],
  },
];
