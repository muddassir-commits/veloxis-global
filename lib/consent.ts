// Cookie consent state shared by the banner and the tracker loader.
// Nothing non-essential loads until the visitor makes a choice.

export type Consent = { analytics: boolean; marketing: boolean };

const KEY = 'cookie-consent-v2';
export const CONSENT_EVENT = 'cookie-consent-change';
export const OPEN_SETTINGS_EVENT = 'open-cookie-settings';

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const c = JSON.parse(raw);
      return { analytics: !!c.analytics, marketing: !!c.marketing };
    }
    // The old banner stored 'accepted' for "Accept All".
    if (localStorage.getItem('cookie-consent') === 'accepted') return { analytics: true, marketing: true };
  } catch {
    // Storage blocked: treat as no choice made.
  }
  return null;
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...consent, at: new Date().toISOString() }));
    localStorage.removeItem('cookie-consent');
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.gtag?.('consent', 'update', googleConsent(consent));
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
}

export function googleConsent(c: Consent) {
  const ads = c.marketing ? 'granted' : 'denied';
  return {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  };
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
