// Google Analytics 4, GTM dataLayer and Meta Pixel event tracking.
// Spec: VELOXIS_GTM_MARKETING_TRACKING_SPEC.md, section 4.

declare global {
  interface Window {
    gtag?: (command: string, name: string, params?: Record<string, any>) => void;
    fbq?: (command: string, name: string, params?: Record<string, any>) => void;
    dataLayer?: Record<string, any>[];
  }
}

type Params = Record<string, string | number>;

// Meta Pixel mapping for our GA4 event names. Only these reach Meta.
const metaEvents: Record<string, { type: 'track' | 'trackCustom'; name: string }> = {
  generate_lead: { type: 'track', name: 'Lead' },
  whatsapp_click: { type: 'track', name: 'Contact' },
  phone_click: { type: 'track', name: 'Contact' },
  booking_click: { type: 'trackCustom', name: 'BookingClick' },
  newsletter_signup: { type: 'trackCustom', name: 'NewsletterSignup' },
};

export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === 'undefined') return;

  // GA4 (direct gtag). Queued until GA loads, dropped if analytics consent is refused.
  window.gtag?.('event', name, params);

  // GTM custom-event triggers read plain objects with an `event` key; gtag() commands are invisible to them.
  // This does not create a GA4 hit: GA4 is only fed by the gtag() call above.
  window.dataLayer?.push({ event: name, ...params });

  // Meta Pixel: only defined once marketing consent is given.
  const meta = metaEvents[name];
  if (meta && window.fbq) {
    const channel = name === 'whatsapp_click' ? 'whatsapp' : name === 'phone_click' ? 'phone' : undefined;
    window.fbq(meta.type, meta.name, {
      source_page: String(params.source_page ?? 'unknown'),
      ...(params.form_name ? { content_name: String(params.form_name) } : {}),
      ...(channel ? { contact_method: channel } : {}),
    });
  }
}

export const events = {
  // Contact form success: the one real lead. form_submit is kept for continuity; generate_lead is the lead metric.
  leadSubmit: (formName: string, sourcePage: string) => {
    trackEvent('form_submit', { form_name: formName, source_page: sourcePage });
    trackEvent('generate_lead', { form_name: formName, source_page: sourcePage });
  },
  newsletterSignup: (sourcePage: string) => trackEvent('newsletter_signup', { source_page: sourcePage }),
  ctaClick: (location: string, cta: string) => trackEvent('cta_click', { location, cta }),
  phoneClick: (sourcePage: string) => trackEvent('phone_click', { source_page: sourcePage }),
  whatsappClick: (sourcePage: string) => trackEvent('whatsapp_click', { source_page: sourcePage }),
  bookingClick: (sourcePage: string) => trackEvent('booking_click', { source_page: sourcePage }),
  scrollDepth: (depth: number) => trackEvent('scroll_depth', { percent: depth }),
};
