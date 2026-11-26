import createDOMPurify from 'dompurify';

type SanitizerInstance = ReturnType<typeof createDOMPurify>;

let ssrPurifier: SanitizerInstance | null = null;
let browserHookAttached = false;

const ALLOWED_IFRAME_PREFIXES = [
  'https://www.youtube.com/embed/',
  'https://www.youtube-nocookie.com/embed/',
];

function attachIframeHook(purifier: SanitizerInstance) {
  purifier.addHook('uponSanitizeElement', (node) => {
    if (node.nodeName === 'IFRAME') {
      const src = (node as Element).getAttribute('src') || '';
      const allowed = ALLOWED_IFRAME_PREFIXES.some((prefix) => src.startsWith(prefix));
      if (!allowed && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  });
}

export function initSsrSanitizer(domWindow: unknown): void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance = createDOMPurify(domWindow as any);
  attachIframeHook(instance);
  ssrPurifier = instance;
}

export function sanitizeArticleHtml(html: string): string {
  let purifier: SanitizerInstance | null = null;

  if (typeof window !== 'undefined') {
    purifier = createDOMPurify;
    if (!browserHookAttached) {
      attachIframeHook(purifier);
      browserHookAttached = true;
    }
  } else if (ssrPurifier) {
    purifier = ssrPurifier;
  }

  if (!purifier) {
    return html;
  }

  return purifier.sanitize(html, {
    ADD_TAGS: ['figure', 'figcaption', 'iframe'],
    ADD_ATTR: [
      'target',
      'rel',
      'class',
      'loading',
      'fetchpriority',
      'width',
      'height',
      'id',
      'src',
      'title',
      'allow',
      'allowfullscreen',
      'referrerpolicy',
      'frameborder',
    ],
  });
}
