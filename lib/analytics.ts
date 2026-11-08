// Google Analytics 4, GTM dataLayer, Meta Pixel and Meta Conversions API (CAPI) event tracking.
// Spec: VELOXIS_GTM_MARKETING_TRACKING_SPEC.md (private business workspace, foundation/website-docs), section 4.

import { readConsent } from './consent';

declare global {
  interface Window {
    gtag?: (command: string, name: string, params?: Record<string, any>) => void;
    fbq?: (command: string, name: string, params?: Record<string, any>, options?: { eventID?: string }) => void;
    dataLayer?: Record<string, any>[];
  }
}

type Params = Record<string, string | number>;

// Meta mapping for our GA4 event names. Only these reach Meta.
// `relay`: the browser also forwards the event to our CAPI route (/api/meta-capi). Lead and
// NewsletterSignup are sent server-side by the form routes themselves (with the hashed phone/email),
// so the browser does not relay them; the shared event_id lets Meta drop the duplicate.
const metaEvents: Record<string, { type: 'track' | 'trackCustom'; name: string; relay: boolean }> = {
  generate_lead: { type: 'track', name: 'Lead', relay: false },
  whatsapp_click: { type: 'track', name: 'Contact', relay: true },
  phone_click: { type: 'track', name: 'Contact', relay: true },
  email_click: { type: 'track', name: 'Contact', relay: true },
  booking_click: { type: 'trackCustom', name: 'BookingClick', relay: true },
  newsletter_signup: { type: 'trackCustom', name: 'NewsletterSignup', relay: false },
};

/** A fresh id shared by the Pixel event and the matching CAPI event (Meta deduplicates on it). */
export function newEventId(): string {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  } catch {
    // fall through
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function isInternalDevice(): boolean {
  try {
    return localStorage.getItem('vg-internal') === '1';
  } catch {
    return false;
  }
}

/** true only when the visitor accepted marketing cookies (and this is not one of our own devices). */
export function hasMarketingConsent(): boolean {
  if (typeof window === 'undefined' || isInternalDevice()) return false;
  return readConsent()?.marketing === true;
}

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Meta browser ids for CAPI matching: _fbp, and _fbc (or one built from ?fbclid= on this URL). */
export function metaBrowserIds(): { fbp?: string; fbc?: string } {
  if (typeof document === 'undefined') return {};
  const fbp = readCookie('_fbp');
  let fbc = readCookie('_fbc');
  if (!fbc) {
    const fbclid = new URLSearchParams(window.location.search).get('fbclid');
    if (fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  }
  return { ...(fbp ? { fbp } : {}), ...(fbc ? { fbc } : {}) };
}

/** Extra fields a form sends to its API route so the server can send the matching CAPI event. */
export function metaFormFields(eventId: string) {
  return { _meta: { event_id: eventId, consent: hasMarketingConsent(), ...metaBrowserIds() } };
}

function relayToCapi(eventName: string, eventId: string, customData: Record<string, string>) {
  if (!hasMarketingConsent()) return;
  const body = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    event_source_url: window.location.href.split('#')[0],
    consent: true,
    custom_data: customData,
    ...metaBrowserIds(),
  });
  try {
    // keepalive: the request survives the page opening WhatsApp or the mail app.
    fetch('/api/meta-capi', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
  } catch {
    // Tracking must never break the page.
  }
}

export function trackEvent(name: string, params: Params = {}, opts: { eventId?: string } = {}) {
  if (typeof window === 'undefined') return;

  // GA4 (direct gtag). Queued until GA loads; with analytics consent denied it is sent as a cookieless ping.
  window.gtag?.('event', name, params);

  // GTM custom-event triggers read plain objects with an `event` key; gtag() commands are invisible to them.
  // This does not create a GA4 hit: GA4 is only fed by the gtag() call above.
  window.dataLayer?.push({ event: name, ...params });

  // Meta Pixel (only defined once marketing consent is given) + server-side copy via CAPI.
  const meta = metaEvents[name];
  if (!meta) return;
  const eventId = opts.eventId ?? newEventId();
  const channel = name === 'whatsapp_click' ? 'whatsapp' : name === 'phone_click' ? 'phone' : name === 'email_click' ? 'email' : undefined;
  const data: Record<string, string> = {
    source_page: String(params.source_page ?? 'unknown'),
    ...(params.form_name ? { content_name: String(params.form_name) } : {}),
    ...(channel ? { contact_method: channel } : {}),
    ...(params.industry ? { industry: String(params.industry) } : {}),
  };
  window.fbq?.(meta.type, meta.name, data, { eventID: eventId });
  if (meta.relay) relayToCapi(meta.name, eventId, data);
}

const withIndustry = (params: Params, industry?: string): Params => (industry ? { ...params, industry } : params);

export type ClickContext = {
  cta?: string;
  ctaLocation?: string;
  pageType?: string;
  waRef?: string;
  industry?: string;
};

function clickParams(sourcePage: string, ctx: ClickContext = {}): Params {
  const p: Params = { source_page: sourcePage };
  if (ctx.cta) p.cta = ctx.cta;
  if (ctx.ctaLocation) p.cta_location = ctx.ctaLocation;
  if (ctx.pageType) p.page_type = ctx.pageType;
  if (ctx.waRef) p.wa_ref = ctx.waRef;
  if (ctx.industry) p.industry = ctx.industry;
  return p;
}

export const events = {
  // Contact form success: the one real lead. form_submit is kept for continuity; generate_lead is the lead metric.
  // eventId must be the one sent to /api/contact (metaFormFields), so the Pixel and server Lead deduplicate.
  leadSubmit: (formName: string, sourcePage: string, eventId?: string, industry?: string) => {
    const params = withIndustry({ form_name: formName, source_page: sourcePage }, industry);
    trackEvent('form_submit', params);
    trackEvent('generate_lead', params, { eventId });
  },
  // First interaction with a lead form (GA4 Enhanced Measurement form tracking is off on purpose).
  formStart: (formName: string, sourcePage: string) => trackEvent('form_start', { form_name: formName, source_page: sourcePage }),
  newsletterSignup: (sourcePage: string, eventId?: string) => trackEvent('newsletter_signup', { source_page: sourcePage }, { eventId }),
  ctaClick: (location: string, cta: string, industry?: string, ctaLocation?: string) => {
    const p: Params = withIndustry({ location, cta }, industry);
    if (ctaLocation) p.cta_location = ctaLocation;
    trackEvent('cta_click', p);
  },
  phoneClick: (sourcePage: string, ctx?: ClickContext) => trackEvent('phone_click', clickParams(sourcePage, ctx)),
  whatsappClick: (sourcePage: string, ctx?: ClickContext) => trackEvent('whatsapp_click', clickParams(sourcePage, ctx)),
  emailClick: (sourcePage: string, ctx?: ClickContext) => trackEvent('email_click', clickParams(sourcePage, ctx)),
  bookingClick: (sourcePage: string, ctx?: ClickContext) => trackEvent('booking_click', clickParams(sourcePage, ctx)),
  scrollDepth: (depth: number, sourcePage?: string) =>
    trackEvent('scroll_depth', sourcePage ? { percent: depth, source_page: sourcePage } : { percent: depth }),
};

/** The niche a page belongs to, from its URL (/industries/<niche>), when no data-industry is set. */
export function industryFromPath(pathname: string): string | undefined {
  const m = pathname.match(/^\/industries\/(ecommerce|local-business|real-estate)(?:\/|$)/);
  return m ? m[1] : undefined;
}
