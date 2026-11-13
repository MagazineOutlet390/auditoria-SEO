import { SanityPost } from '../../types';

export const EN_AUDIT_GUIDES: SanityPost[] = [
  {
    _id: 'post-auditoria-seo-on-page-en',
    title: 'On-Page SEO Audit: A Page-by-Page Checklist to Review Every URL',
    slug: { current: 'auditoria-seo-on-page' },
    excerpt:
      'A practical workflow to audit on-page SEO elements URL by URL: reading live search intent, editorial structure, title tags and meta descriptions, H1-H3 outline, internal links, images, and fix prioritization.',
    readingTimeMinutes: 14,
    category: 'Technical SEO',
    tags: [
      'On-Page SEO Audit',
      'On-Page SEO Checklist',
      'Content Analysis',
      'Title Tags & Headings',
      'Internal Linking',
      'Page Optimization',
    ],
    publishedAt: '2026-11-13T10:00:00Z',
    updatedAt: '2026-11-13T10:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Founder of Auditoria SEO & Organic Traffic Strategist',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-seo-on-page.webp',
      },
      alt: 'Editorial diagram illustrating an on-page SEO audit inspecting H1-H3 headings, internal links, and page layout',
    },
    ogImage: '/images/blog/og-auditoria-seo-on-page.png',
    seoTitle: 'On-Page SEO Audit: Checklist to Analyze Every Page | Auditoria SEO',
    metaDescription:
      'Step-by-step on-page SEO audit workflow: validate search intent, content depth, title tags, H1-H3 headings, clean URLs, internal links, and fix priorities.',
    ogTitle: 'On-Page SEO Audit: A Page-by-Page Checklist to Review Every URL',
    ogDescription:
      'Practical workflow to inspect on-page SEO signals per URL: SERP alignment, titles, headings, internal links, media optimization, and prioritized fixes.',
    body: [
      'It is common to see pages cleanly indexed in Google that still sit stuck on page two or three. Most of the time, the culprit is neither server speed nor a crawl block—it is a mismatch between what the HTML communicates on that URL and what searchers actually expect when they click.',
      'An <strong>on-page SEO audit</strong> examines that page-level layer: how well the content matches search intent, whether the title and heading hierarchy establish the topic clearly, and how internal links connect the URL to the rest of the site.',
      'Rather than chasing arbitrary tool scores built around keyword-density formulas, this guide walks through how to inspect commercial pages, category hubs, and informational articles in the browser, verify each signal directly, and sequence edits by editorial impact.',

      '### What an On-Page SEO Audit Actually Evaluates',
      'Auditing on-page signals means inspecting the visible copy and semantic HTML inside a single document. When you open DevTools on a service page or blog post, four questions frame the review: does the page answer the real reason behind the search, do the title and headings state the core subject without ambiguity, is the layout effortless to read on a phone, and does the copy guide readers toward a logical next step on the site?',
      'That approach replaces outdated tactics like repeating an exact phrase until hitting 2% density. Modern search systems evaluate topical coverage, related terminology, and practical usefulness. Cramming the same keyword into every subheading damages credibility with human readers without improving search understanding.',

      '#### Scope Boundaries: On-Page SEO vs. Technical SEO',
      'Mixing up on-page work with infrastructure problems wastes weeks of effort. Rewriting an article will not bring organic traffic if <code>robots.txt</code> blocks the folder or if a template points the <code>canonical</code> tag to the homepage. Conversely, faster servers cannot rescue a service page written with a vague title and thin generic copy.',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Layer</th><th class="p-3 border-b border-slate-200">On-Page SEO Audit</th><th class="p-3 border-b border-slate-200">Technical SEO Audit</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Unit of review</td><td class="p-3">Individual URL (copy, intent fit, and semantic HTML).</td><td class="p-3">Domain, server, templates, and sitewide indexing rules.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Signals audited</td><td class="p-3">Search intent, <code>&lt;title&gt;</code>, meta description, H1–H3, anchor text, <code>alt</code> attributes.</td><td class="p-3">HTTP status codes, <code>robots.txt</code>, <code>noindex</code>, canonicals, XML sitemap, field CWV.</td></tr><tr><td class="p-3 font-semibold text-slate-900">Typical symptom</td><td class="p-3">Indexed URL that ranks poorly or gets clicks without converting.</td><td class="p-3">URL excluded from the index, duplicated, slow, or blocked from crawling.</td></tr></tbody></table></div>',
      'If initial checks point to crawl failures, redirect chains, or Search Console exclusions, start with the infrastructure layer covered in our <a href="/en/blog/auditoria-tecnica-seo" class="text-[#1A73E8] font-semibold hover:underline">technical SEO audit checklist for crawling and indexing</a>.',

      '### Checking Search Intent Before Editing Any Copy',
      'The most expensive mistake in page optimization is rewriting headlines and paragraphs purely off keyword volume spreadsheets. Before editing a single sentence, open a private browser session, run the target query for your region, and examine the top ten organic results.',

      '#### How to Read the Live SERP Effectively',
      'Look for four concrete signals on page one to judge whether your URL competes in the right format:',
      '<ol class="list-decimal pl-6 space-y-2"><li><strong>Dominant intent type:</strong> Are searchers trying to learn a workflow (informational), weigh providers and criteria (commercial investigation), or hire immediately (transactional)?</li><li><strong>Winning page format:</strong> Do top listings feature step-by-step checklists, focused service pages with transparent pricing, or multi-item category hubs?</li><li><strong>Noticeable content gaps:</strong> Which practical verification steps, exceptions, or real examples did competing pages leave shallow?</li><li><strong>Page-type alignment:</strong> Trying to rank a brief sales page for a broad educational query—or a long theoretical guide when searchers want a service overview—drives quick bounces and weakens topical relevance.</li></ol>',
      'A straightforward example illustrates why this matters: someone searching "how much does an SEO audit cost" expects scope variables, realistic price ranges, and timeline expectations. A site that responds with a generic post explaining "what SEO is and why businesses need it" loses the visitor within seconds.',

      '### Editorial Quality, Depth, and Freshness',
      'In its guidelines on <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">creating helpful, reliable, people-first content</a>, Google makes clear that ranking systems reward pages written to genuinely solve user problems with technical substance—not pages padded to hit arbitrary word targets.',

      '#### Practical Standards for Reviewing Page Content',
      'When reading a live URL critically, check whether the first two paragraphs orient the reader and deliver useful context right away rather than burning ten lines on generic throat-clearing. Nor is there a universal word count threshold: explaining an HTTP status code demands precision in a few paragraphs, whereas an audit guide requires reproducible steps, code examples, and edge-case notes.',
      'Watch closely for three telltale weaknesses that undermine reader trust:',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Outdated technical references:</strong> Citing retired tools or superseded metrics (such as FID instead of INP) signals stale maintenance immediately.</li><li><strong>Unsupported claims:</strong> Writing "this dramatically improves rankings" without explaining the underlying search behavior or user impact.</li><li><strong>Mechanical keyword repetition:</strong> Repeating the exact target phrase in nearly every H2 makes the page read like template filler.</li></ul>',

      '### Search Snippets: Title Tags and Meta Descriptions',
      'Your <code>&lt;title&gt;</code> element and <code>meta description</code> act as the page’s storefront in organic results. Although they sit inside <code>&lt;head&gt;</code>, they directly shape whether someone comparing ten links chooses yours.',

      '#### Auditing Title Tags (and Why Google Rewrites Them)',
      'Google’s documentation on <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">influencing title links in Google Search</a> explains that empty, duplicated, overly long, or keyword-stuffed titles are frequently rewritten automatically—often pulled from the page’s <code>&lt;h1&gt;</code> or external anchor text.',
      'Verify that every indexable URL carries a distinct <code>&lt;title&gt;</code> (a quick <code>site:yourdomain.com</code> query often catches duplicate template titles). Front-load the main subject and aim for roughly 50–60 characters, keeping in mind that truncation happens by pixel width (~580–600px on desktop), so wide uppercase words clip sooner.',
      '<div class="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-2"><p><strong>Weak example (repetitive and prone to truncation/rewrites):</strong><br/><code>On-Page SEO Audit | On-Page Checklist | Cheap On-Page Optimization</code></p><p><strong>Clear, specific example:</strong><br/><code>On-Page SEO Audit: A Page-by-Page Checklist | Brand</code></p></div>',
      'On JavaScript-driven sites (React, Next.js, Vue), inspect both the initial server HTML (<em>View Page Source</em>) and the rendered DOM in DevTools (<code>document.title</code>). If the page-specific title only mounts after client-side execution, link previews and lighter crawlers may capture only a generic fallback string.',

      '#### Auditing Meta Descriptions Without Myths',
      'While the <code>meta description</code> is not a direct ranking signal, it clarifies page value and affects click-through rate (CTR). Per Google’s guide to <a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">controlling snippets in search results</a>, concise 130–155 character summaries lower the odds of awkward excerpts pulled from navigation bars or footers.',
      'Avoid pasting boilerplate company descriptions across dozens of URLs. Write tailored summaries for core service pages, category hubs, and flagship guides; on sprawling sites with thousands of narrow pages, focus manual descriptions on high-value URLs first, since Google often generates query-matched snippets dynamically for specific long-tail searches.',

      '### Semantic HTML Structure: Headings, URLs, and Landmarks',
      'Clean document structure helps scanning visitors, screen-reader users, and search engines distinguish primary themes from supporting subsections.',

      '#### Logical H1, H2, and H3 Hierarchy',
      'While the HTML5 specification technically permits multiple <code>&lt;h1&gt;</code> elements across isolated sectioning roots, keeping a single visible <code>&lt;h1&gt;</code> at the top of the page eliminates editorial ambiguity in SEO and accessibility audits. That H1 should align closely with the <code>&lt;title&gt;</code> without needing to match word for word.',
      'Organize main topics under <code>&lt;h2&gt;</code> and nested subtopics under <code>&lt;h3&gt;</code> sequentially. Jumping straight from <code>H1</code> to <code>H4</code> just for smaller type breaks the outline—control typography through CSS instead. Likewise, never wrap site logos, navigation items, or footer headings in <code>H1</code> or <code>H2</code> tags.',

      '#### Readable Slugs and Semantic HTML5 Tags',
      'Clear URLs preview page context before a click and make Search Console reporting easier to filter. Stick to short lowercase paths separated by hyphens, such as <code>/en/blog/auditoria-seo-on-page</code>, avoiding numeric IDs (<code>/?p=482</code>), special characters, or redundant date folders.',
      'Use semantic landmarks matching each element’s role—<code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> lists, and real <code>&lt;table&gt;</code> markup—rather than nesting generic <code>&lt;div&gt;</code> containers everywhere. Just as importantly: never rename an established live URL with existing traffic or backlinks for cosmetic reasons; change a slug only when structural gains clearly outweigh redirect friction, and always deploy a permanent <code>301</code> redirect.',

      '### Internal Linking Architecture and External Citations',
      'Contextual links connect related guides, route visitors toward relevant solutions, and clarify which URLs carry central weight on the domain. Google’s documentation on <a href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">crawlable links and anchor text</a> stresses standard <code>&lt;a href="..."&gt;</code> links rather than JavaScript click handlers without resolvable URLs.',

      '#### Descriptive Anchor Text and Commercial Pathways',
      'Replace empty phrases like <em>"click here"</em> or <em>"read more"</em> with anchor text describing the linked destination naturally. You do not need to force identical exact-match wording into every internal link—varying anchors naturally to fit each sentence reads better and broadens contextual signals.',
      'Also examine where informational articles route readers who uncover widespread page issues: when a diagnostic exposes multi-page problems beyond quick edits, linking naturally to the homepage service overview for a <a href="/en" class="text-[#1A73E8] font-semibold hover:underline">specialist-led SEO audit</a> gives teams a direct path to prioritized help.',

      '#### Authoritative External Links and Destination Health',
      'Citing primary technical sources—such as Google Search Central, W3C specifications, or engineering guides on web.dev—anchors recommendations in verifiable documentation. During URL checks, inspect the DevTools <em>Network</em> tab or run a crawl to confirm no internal or external links inside the copy return <code>404</code> errors or pointless redirect hops.',

      '### Images, Scannability, and Mobile Content Parity',
      'Visual layout and media hygiene often decide whether a visitor finishes reading a page or hits the back button within seconds.',

      '#### Alt Attributes, Filenames, and Visual Image Stability',
      'Following <a href="https://developers.google.com/search/docs/appearance/google-images" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Google Images SEO best practices</a>, write accurate <code>alt</code> attributes describing what the visual shows in context—critical for assistive screen readers and image search. Purely decorative graphics should keep empty <code>alt=""</code>, and no editorial image should carry stuffed keyword strings.',
      'Name files descriptively (<code>on-page-seo-checklist.webp</code> rather than <code>IMG_8392.png</code>), serve compressed WebP or AVIF assets, and explicitly declare HTML <code>width</code> and <code>height</code> (or CSS <code>aspect-ratio</code>) so images never shove text downward mid-read. Domain-wide Core Web Vitals telemetry belongs to the technical audit layer.',

      '#### Scannable Formatting and Mobile Parity per URL',
      'Because Google evaluates pages primarily on mobile viewports, inspect every audited URL at 360px–414px in responsive DevTools mode. Check that dense paragraphs break into readable 3–4 line blocks, wide tables sit inside horizontally scrollable containers, and adjacent buttons have comfortable tap spacing.',
      'Verify content parity carefully: headings, comparison tables, FAQs, and internal links present on desktop must stay visible and accessible on mobile rather than getting hidden behind collapsed mobile layouts.',

      '### Practical On-Page SEO Audit Checklist',
      'Use this priority matrix to structure page-by-page reviews consistently:',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Check</th><th class="p-3 border-b border-slate-200">Practical Verification</th><th class="p-3 border-b border-slate-200">Priority</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">Search intent match</td><td class="p-3">Compare page format and depth against the live Top 5 organic results.</td><td class="p-3 font-semibold text-red-700">Critical</td></tr><tr><td class="p-3 font-semibold text-slate-900"><code>&lt;title&gt;</code> tag</td><td class="p-3">Inspect raw HTML and rendered DOM; confirm uniqueness via <code>site:</code>.</td><td class="p-3 font-semibold text-red-700">Critical</td></tr><tr><td class="p-3 font-semibold text-slate-900">Content quality</td><td class="p-3">Verify direct opening, concrete examples, current facts, zero stuffing.</td><td class="p-3 font-semibold text-red-700">Critical</td></tr><tr><td class="p-3 font-semibold text-slate-900">H1–H3 outline</td><td class="p-3">Confirm one primary H1 and sequential H2/H3 nesting in DevTools.</td><td class="p-3 font-semibold text-amber-700">High</td></tr><tr><td class="p-3 font-semibold text-slate-900">Internal links</td><td class="p-3">Check descriptive anchors, zero 404 targets, and pathways to core pages.</td><td class="p-3 font-semibold text-amber-700">High</td></tr><tr><td class="p-3 font-semibold text-slate-900">Mobile parity</td><td class="p-3">Test at 360px for zero overflow, full content visibility, clear contrast.</td><td class="p-3 font-semibold text-amber-700">High</td></tr><tr><td class="p-3 font-semibold text-slate-900">Meta description</td><td class="p-3">Verify tailored 130–155 char summary on priority commercial and guide URLs.</td><td class="p-3 font-semibold text-blue-700">Recommended</td></tr><tr><td class="p-3 font-semibold text-slate-900">Images & <code>alt</code></td><td class="p-3">Check contextual <code>alt</code> text, lean WebP/AVIF files, explicit dimensions.</td><td class="p-3 font-semibold text-blue-700">Recommended</td></tr></tbody></table></div>',

      '### Five Recurring Mistakes and How to Fix Them',
      'Even experienced teams frequently run into five avoidable issues:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Keyword cannibalization across similar URLs:</strong> Two or three pages answer nearly the same query and split relevance. <em>Fix:</em> merge overlapping articles into one authoritative resource (redirecting secondary URLs via 301) or sharply differentiate each page’s search intent.</li><li><strong>Generic brand-only titles:</strong> Service pages titled simply <em>"Services | Company Name"</em>. <em>Fix:</em> lead with the specific service and scope.</li><li><strong>Unbroken walls of text:</strong> Technical posts published as 15-line paragraphs without visual landmarks. <em>Fix:</em> break content into informative H2/H3 sections, comparison tables, and verification examples.</li><li><strong>Isolated commercial pages:</strong> Core service URLs reachable only from footer menus, with zero contextual links from related guides. <em>Fix:</em> add relevant editorial links where informational topics meet practical solutions.</li><li><strong>Mechanical over-optimization:</strong> Forcing exact-match phrases into every H2, <code>alt</code> attribute, and footer label. <em>Fix:</em> rewrite for natural clarity and varied terminology.</li></ol>',

      '### When a Specialist Audit Is Worthwhile',
      'Working through this workflow resolves straightforward bottlenecks on compact websites. A specialist review delivers real leverage once a domain accumulates dozens of URLs that need triage—deciding what to update, consolidate, or prune without losing historical traffic—when blog posts and service pages compete in Search Console, or when copy improvements collide with template and rendering constraints.',
      'If that matches where your site stands today, explore how our <a href="/en" class="text-[#1A73E8] font-semibold hover:underline">human-led technical and on-page SEO audit</a> brings page signals and sitewide infrastructure together into one clear execution roadmap.',
    ],
  },
  {
    _id: 'post-auditoria-tecnica-seo-en',
    title: 'Technical SEO Audit: A Crawling and Indexing Checklist',
    slug: { current: 'auditoria-tecnica-seo' },
    excerpt:
      'How to audit technical SEO infrastructure without getting lost in automated crawler noise: Googlebot rendering inspection, robots.txt vs. noindex, Search Console coverage, canonicals, XML sitemaps, HTTP headers, real Core Web Vitals, and triage.',
    readingTimeMinutes: 16,
    category: 'Technical SEO',
    tags: [
      'Technical SEO Audit',
      'Technical SEO Checklist',
      'Crawling and Indexing',
      'Canonical Tags',
      'XML Sitemap',
      'Core Web Vitals',
    ],
    publishedAt: '2026-11-13T09:00:00Z',
    updatedAt: '2026-11-13T09:00:00Z',
    author: {
      name: 'Wesley Vieira',
      role: 'Founder of Auditoria SEO & Organic Traffic Strategist',
      avatar: '/images/blog/wesley-vieira-autor.jpg',
    },
    mainImage: {
      asset: {
        url: '/images/blog/capa-auditoria-tecnica-seo.webp',
      },
      alt: 'Technical diagram illustrating search engine crawling, XML sitemaps, indexing funnel, and performance metrics',
    },
    ogImage: '/images/blog/og-auditoria-tecnica-seo.png',
    seoTitle: 'Technical SEO Audit: Crawling and Indexing Checklist | Auditoria SEO',
    metaDescription:
      'Practical technical SEO audit guide: verify crawling, Google Search Console coverage, robots.txt, canonicals, XML sitemaps, HTTP headers, and real Core Web Vitals.',
    ogTitle: 'Technical SEO Audit: A Crawling and Indexing Checklist',
    ogDescription:
      'Learn how to confirm real crawling and indexing blockers, interpret Search Console statuses, and separate critical errors from automated noise.',
    body: [
      'A website can publish thorough guides and crisp headlines yet attract zero organic visits if structural flaws block Google from discovering, rendering, or consolidating its URLs. Silent configuration bugs—a leftover <code>noindex</code> tag from staging, templates emitting the homepage <code>canonical</code> across every blog post, or multi-hop redirect chains after a CMS move—routinely erase months of editorial output.',
      'Running an automated site crawler and exporting hundreds of "red warnings" seldom points to the real bottleneck, because generic tools cannot separate a revenue-blocking template error from harmless noise on low-value URLs. A practical <strong>technical SEO audit</strong> verifies how servers and browsers actually respond to Googlebot and cross-checks every finding inside Google Search Console.',

      '### The Role of Technical Auditing in Domain Health',
      'Technical auditing ensures clean execution across four sequential stages: URL discovery, error-free server fetch, complete rendering of core content, and indexing under the single intended canonical address.',

      '#### Separating Technical Blockers From On-Page Adjustments',
      'Before asking writers to revise copy or developers to refactor components, isolate which layer produces the symptom. When key service URLs fail to appear under <code>site:yourdomain.com/path</code>, show up excluded in Search Console, or compete as duplicate trailing-slash variants, the root cause is technical. When a URL already sits cleanly indexed as a self-referencing canonical yet fails to gain visibility for its topic, shift focus to the page-level signals covered in our <a href="/en/blog/auditoria-seo-on-page" class="text-[#1A73E8] font-semibold hover:underline">on-page SEO audit checklist</a>.',

      '### Crawling, Rendering, and Access Control',
      'Googlebot can only evaluate what it downloads and renders reliably. Friction here constrains everything downstream.',

      '#### Verifying What Googlebot Actually Sees',
      'Inside Google Search Console, run <strong>URL Inspection</strong> on your homepage, a primary service page, and a representative article, then click <strong>Test Live URL</strong>. Open <em>View Tested Page</em> to check three concrete outputs: the rendered HTML after JavaScript execution, the rendered screenshot, and any blocked or failed CSS, script, or API requests.',
      'This check becomes essential on JavaScript-rendered applications (React, Next.js, Vue). Always compare initial server HTML (<em>View Page Source</em>) against the live DOM in DevTools. When core copy, internal links, or head tags like <code>title</code> and <code>canonical</code> only appear after client-side hydration without SSR or static prerendering, link-preview scrapers and secondary crawlers frequently fail, while Google must queue the page for deferred rendering.',
      'On larger sites, also watch for wasted crawl capacity—intermittent <code>5xx</code> server errors in crawl logs or faceted filter combinations generating thousands of parameterized URLs with zero search demand.',

      '#### Robots.txt vs. Meta Robots and X-Robots-Tag',
      'Confusing crawl control with index control remains one of the costliest mistakes in technical SEO. As documented in <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Google’s introduction to robots.txt</a>, <code>robots.txt</code> instructs crawlers which paths not to fetch—useful for admin panels, cart endpoints, or internal search parameters.',
      '<strong>Classic trap:</strong> disallowing a URL in <code>robots.txt</code> does <em>not</em> guarantee removal from Google Search if external sites link to it; Google may still index the bare URL without a snippet. Worse, once a path is blocked in <code>robots.txt</code>, Googlebot cannot crawl the page to read a <code>&lt;meta name="robots" content="noindex" /&gt;</code> directive placed inside it.',
      'Therefore, to keep a page out of search results reliably, allow crawling and serve <code>noindex</code> via the page’s <code>&lt;head&gt;</code> or the <code>X-Robots-Tag: noindex</code> HTTP header (especially handy for PDFs). To verify live rules quickly, open <code>yourdomain.com/robots.txt</code> in the browser and ensure no stray <code>Disallow: /</code> rule or blocked CSS/JS asset folder exists.',

      '### Interpreting Indexing Statuses in Google Search Console',
      'A URL can return <code>200 OK</code> without network errors and still stay absent from search results. Search Console’s <strong>Page Indexing</strong> report shows why Google excluded specific addresses.',

      '#### Making Sense of the Most Misunderstood Statuses',
      '<ul class="list-disc pl-6 space-y-2"><li><strong>Excluded by "noindex" tag:</strong> Confirm every listed URL genuinely belongs outside Google (login, thank-you, or internal search views). Any commercial page appearing here signals an urgent template fix.</li><li><strong>Crawled – currently not indexed:</strong> Google fetched and read the page yet declined to index it for now. Clicking "Request indexing" rarely changes this outcome; it typically points to thin substance, near-duplication with another URL, or insufficient internal linking.</li><li><strong>Discovered – currently not indexed:</strong> Google knows the URL exists (via sitemap or links) but has not crawled it yet—usually reflecting low-value URL bloat or server response bottlenecks on larger domains.</li><li><strong>Soft 404:</strong> Empty screens, out-of-stock listings, or "not found" templates returning HTTP <code>200 OK</code> instead of proper <code>404</code> or <code>410</code> status codes.</li></ul>',

      '### Duplicate URL Consolidation and XML Sitemaps',
      'Identical content often resolves across multiple URL variants—<code>www</code> vs. non-<code>www</code>, <code>http</code> vs. <code>https</code>, trailing slashes, uppercase letters, or campaign query parameters such as <code>?utm_source=</code>.',

      '#### Canonical Tags and Recurring Template Bugs',
      'Following Google’s guidance on <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">consolidating duplicate URLs</a>, each primary indexable URL should emit one absolute self-referencing <code>&lt;link rel="canonical" href="https://..." /&gt;</code>.',
      'One severe yet surprisingly common bug appears on dynamic templates or single-page apps: every blog post outputs the homepage URL (<code>https://yourdomain.com/</code>) as its canonical target. Search engines then treat individual posts as variants of the homepage and drop them from search results. Inspect representative templates (home, service, category, article) in both raw HTML and rendered DOM to confirm a single HTTPS canonical resolving cleanly to <code>200 OK</code>.',

      '#### What Actually Matters in sitemap.xml',
      'Per Google Search Central’s <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">overview of sitemaps</a>, <code>sitemap.xml</code> acts as a clean inventory of preferred canonical URLs. Stick strictly to one rule: list only indexable, self-canonical URLs returning <code>200 OK</code>, keeping 301 redirects, 404 pages, and <code>noindex</code> URLs out.',
      'It is worth clearing up two persistent XML myths: Google largely ignores <code>&lt;priority&gt;</code> and <code>&lt;changefreq&gt;</code>, while <code>&lt;lastmod&gt;</code> helps only when it reflects genuine, verifiable content updates rather than timestamps overwritten on every build. Submit your sitemap in Search Console and monitor whether submitted URLs align with indexed counts.',

      '### HTTP Status Codes, Redirects, and Internal Link Integrity',
      'HTTP response headers and internal pathways determine whether visitors and search bots navigate cleanly without wasted hops.',

      '#### Checking HTTP Headers and Redirect Chains in Practice',
      'When retiring or moving routes, distinguish permanent redirects (<code>301</code> or <code>308</code>) from temporary ones (<code>302</code> or <code>307</code>): permanent migrations require <code>301/308</code> to consolidate signals onto the new URL. Multi-hop chains (<code>http://</code> -&gt; <code>https://www</code> -&gt; <code>https://apex</code> -&gt; <code>/new-slug</code>) add latency and waste requests; update origin rules to jump directly to the final destination.',
      'You can verify headers quickly in any terminal with <code>curl -sIL https://yourdomain.com/path</code>, tracing every <code>HTTP/</code> status line and <code>location:</code> header until confirming a clean final <code>200 OK</code> (and spotting redirect loops or <code>5xx</code> server errors). Removed pages without replacements should serve <code>404</code> or <code>410</code> and be scrubbed from navigation menus, internal links, and sitemaps.',

      '#### Broken Links, Orphan Pages, and Multilingual Architecture',
      'To uncover <strong>orphan pages</strong>—live URLs sitting in your CMS or <code>sitemap.xml</code> with zero internal links pointing to them—crawl the site starting strictly from homepage links and diff that discovered list against your sitemap and Search Console URLs. Priority commercial pages should sit only a few clicks away from the homepage or main hubs.',
      'On multilingual sites spanning English, Spanish, and Portuguese, validate <code>hreflang</code> symmetry just as carefully: every localized URL must reference all equivalent versions (including itself) using valid ISO language codes and pointing solely to canonical <code>200 OK</code> targets. An <code>hreflang</code> tag targeting a redirected or <code>noindex</code> URL is routinely ignored.',

      '### Real-World Performance (Core Web Vitals), Mobile-First, and Structured Data',
      'Site infrastructure also covers how pages load for actual visitors and how machine-readable metadata describes page entities.',

      '#### Field Data (CrUX) vs. Lab Runs and PageSpeed Limits',
      'According to <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Web Vitals (web.dev)</a>, Core Web Vitals measure three thresholds at the 75th percentile of real user visits (CrUX data): <strong>LCP</strong> (main visual block loading, good ≤ 2.5s), <strong>INP</strong> (interaction responsiveness, good ≤ 200ms), and <strong>CLS</strong> (visual stability, good ≤ 0.1).',
      'Prioritize Search Console’s real-user Core Web Vitals report over isolated Lighthouse lab scores, which shift with simulated CPU and network throttling. As Google’s <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">page experience documentation</a> explains, hitting a synthetic 100 score never guarantees top rankings or compensates for weak topical relevance; its real payoff is removing slowness that drives users away.',

      '#### Mobile-First Infrastructure and Valid JSON-LD Markup',
      'Under <a href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" target="_blank" rel="noopener noreferrer" class="text-[#1A73E8] font-semibold hover:underline">Google mobile-first indexing</a>, smartphone rendering drives primary evaluation. Confirm a valid <code>viewport</code> meta tag, unrestricted crawling of essential CSS and JavaScript bundles in <code>robots.txt</code>, and full visibility of main content on mobile.',
      'For <strong>JSON-LD (Schema.org)</strong> markup, use only entity types matching visible on-page content—such as <code>BlogPosting</code> on articles or <code>ProfessionalService</code> on service pages—without duplicating conflicting graphs or marking unseen prices and reviews. Validate live URLs in Google’s Rich Results Test and the Schema Markup Validator.',

      '### Technical SEO Verification Matrix',
      '<div class="overflow-x-auto my-6"><table class="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-100 text-slate-900 font-bold"><tr><th class="p-3 border-b border-slate-200">Technical Area</th><th class="p-3 border-b border-slate-200">Recommended Verification</th><th class="p-3 border-b border-slate-200">Typical Severity</th></tr></thead><tbody class="divide-y divide-slate-200 bg-white"><tr><td class="p-3 font-semibold text-slate-900">HTTP access & rendering</td><td class="p-3">Trace headers (<code>curl -sIL</code>), check 5xx logs, inspect rendered HTML in GSC.</td><td class="p-3 font-semibold text-red-700">Critical blocker</td></tr><tr><td class="p-3 font-semibold text-slate-900">Robots.txt & <code>noindex</code></td><td class="p-3">Inspect <code>/robots.txt</code> and rule out accidental <code>noindex</code> on core URLs.</td><td class="p-3 font-semibold text-red-700">Critical blocker</td></tr><tr><td class="p-3 font-semibold text-slate-900"><code>canonical</code> tags</td><td class="p-3">Confirm one absolute, self-referencing 200 OK canonical per template.</td><td class="p-3 font-semibold text-red-700">Critical blocker</td></tr><tr><td class="p-3 font-semibold text-slate-900">XML Sitemap</td><td class="p-3">Verify in GSC that only canonical indexable 200 URLs appear—no 301/404/noindex.</td><td class="p-3 font-semibold text-amber-700">High priority</td></tr><tr><td class="p-3 font-semibold text-slate-900">Redirects & 404s</td><td class="p-3">Remove internal 404 links and flatten multi-hop chains to a single 301.</td><td class="p-3 font-semibold text-amber-700">High priority</td></tr><tr><td class="p-3 font-semibold text-slate-900">Orphans & architecture</td><td class="p-3">Diff internal crawl vs. sitemap and check multilingual <code>hreflang</code> symmetry.</td><td class="p-3 font-semibold text-amber-700">High priority</td></tr><tr><td class="p-3 font-semibold text-slate-900">Core Web Vitals (field)</td><td class="p-3">Track real-user 75th-percentile LCP, INP, and CLS in Search Console.</td><td class="p-3 font-semibold text-blue-700">Ongoing improvement</td></tr><tr><td class="p-3 font-semibold text-slate-900">Structured data</td><td class="p-3">Validate JSON-LD in Rich Results Test matching visible page copy.</td><td class="p-3 font-semibold text-blue-700">Ongoing improvement</td></tr></tbody></table></div>',

      '### Three-Wave Prioritization Framework',
      'A technical audit only creates value when engineering and marketing align on execution order instead of burning sprints on cosmetic alerts:',
      '<ol class="list-decimal pl-6 space-y-3"><li><strong>Wave 1 — Critical crawl and indexing blockers:</strong> Resolve unintended <code>noindex</code> tags, over-broad <code>robots.txt</code> rules, server <code>5xx</code> errors, unredirected duplicate variants, and templates pointing canonicals to the homepage first.</li><li><strong>Wave 2 — Internal pathways and site hygiene:</strong> Strip broken internal 404 links, collapse <code>301</code> chains into single hops, link valuable orphan pages, and clean <code>sitemap.xml</code>.</li><li><strong>Wave 3 — Real-world performance and advanced semantics:</strong> Fix field LCP, INP, and CLS bottlenecks, standardize JSON-LD graphs per template, and audit <code>hreflang</code> symmetry across languages.</li></ol>',

      '### When to Bring In a Specialist Technical SEO Audit',
      'This checklist covers the checks required to catch clear issues on most corporate websites. Specialist oversight becomes especially valuable when planning a domain or CMS migration without losing organic equity, maintaining JavaScript apps where initial HTML diverges from rendered pages, or untangling thousands of parameterized filter URLs and multilingual indexing conflicts in Search Console.',
      'When your engineering and marketing teams need an objective roadmap separating real blockers from automated tool noise, explore our <a href="/en" class="text-[#1A73E8] font-semibold hover:underline">specialist-led technical SEO audit</a>.',
    ],
  },
];
