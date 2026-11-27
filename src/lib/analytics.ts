export type AnalyticsEventName =
  | 'schedule_consultation_click'
  | 'calendly_click'
  | 'contact_form_start'
  | 'generate_lead'
  | 'email_click'
  | 'service_cta_click';

export interface AnalyticsEventParams {
  page_language: string;
  service_interest?: string;
  cta_location?: string;
  page_path?: string;
}

interface AttributionParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const ATTRIBUTION_STORAGE_KEY = 'aseo_utm_attribution';
const UTM_KEYS: Array<keyof AttributionParams> = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function captureUtmAttribution(): AttributionParams {
  if (typeof window === 'undefined') return {};

  try {
    const params = new URLSearchParams(window.location.search);
    const current: AttributionParams = {};
    let hasNewUtm = false;

    for (const key of UTM_KEYS) {
      const value = params.get(key)?.trim();
      if (value) {
        current[key] = value.slice(0, 120);
        hasNewUtm = true;
      }
    }

    if (hasNewUtm) {
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(current));
      return current;
    }

    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as AttributionParams) : {};
  } catch {
    return {};
  }
}

/**
 * Dispatch non-PII GA4 / GTM conversion events safely without injecting duplicate tags.
 * Never pass user names, email addresses, phone numbers, or message text here.
 */
export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsEventParams
): void {
  if (typeof window === 'undefined') return;

  const utm = captureUtmAttribution();
  const payload: Record<string, unknown> = {
    event: eventName,
    page_language: params.page_language,
    page_path: params.page_path || window.location.pathname,
    ...(params.service_interest ? { service_interest: params.service_interest } : {}),
    ...(params.cta_location ? { cta_location: params.cta_location } : {}),
    ...utm,
  };

  try {
    if (typeof window.gtag === 'function') {
      const { event: _ignored, ...gtagParams } = payload;
      window.gtag('event', eventName, gtagParams);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    }
  } catch {
    // Non-blocking analytics failure guard
  }
}
