// Cookie consent state shared by the banner and the tracker loader.
// Rule (owner, 8 Nov 2026): outside the EEA/UK/Switzerland analytics + marketing are ON by default
// (no banner; "Cookie settings" in the footer turns them off). In the EEA/UK/Switzerland, or when the
// country is unknown, nothing non-essential loads until the visitor accepts (opt-in banner).
// A choice saved by the visitor always wins over the default.

import { REGION_COOKIE, type Region } from './region';

export type Consent = { analytics: boolean; marketing: boolean };

const KEY = 'cookie-consent-v2';
export const CONSENT_EVENT = 'cookie-consent-change';
export const OPEN_SETTINGS_EVENT = 'open-cookie-settings';
export const ALL_GRANTED: Consent = { analytics: true, marketing: true };
export const ALL_DENIED: Consent = { analytics: false, marketing: false };

/** The visitor's saved choice, or null if they never chose. */
export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const c = JSON.parse(raw);
      return { analytics: !!c.analytics, marketing: !!c.marketing };
    }
    // The old banner stored 'accepted' for "Accept All".
    if (localStorage.getItem('cookie-consent') === 'accepted') return { ...ALL_GRANTED };
  } catch {
    // Storage blocked: treat as no choice made.
  }
  return null;
}

/** Region set by proxy.ts from the visitor's country. Missing cookie = 'eea' (protective). */
export function readRegion(): Region {
  try {
    const m = document.cookie.match(new RegExp(`(?:^|; )${REGION_COOKIE}=(eea|other)(?:;|$)`));
    return m?.[1] === 'other' ? 'other' : 'eea';
  } catch {
    return 'eea';
  }
}

/** Consent in force now: the saved choice, else the default for the region (null = must ask). */
export function effectiveConsent(): Consent | null {
  return readConsent() ?? (readRegion() === 'other' ? { ...ALL_GRANTED } : null);
}

/** true when the opt-in banner must be shown (EEA/UK/CH or unknown country, and no choice yet). */
export function needsBanner(): boolean {
  return effectiveConsent() === null;
}

export function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...consent, at: new Date().toISOString() }));
    localStorage.removeItem('cookie-consent');
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  window.gtag?.('consent', 'update', googleConsent(consent));
  // Withdrawn marketing consent: stop the already-loaded Meta Pixel from sending more events now.
  window.fbq?.('consent', consent.marketing ? 'grant' : 'revoke');
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
