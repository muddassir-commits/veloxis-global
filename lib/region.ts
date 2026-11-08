// Visitor region for cookie consent, shared by proxy.ts (server) and lib/consent.ts (browser).
// Business rule (owner, 8 Nov 2026): analytics and marketing cookies are ON by default, except for
// visitors in the EEA, the UK and Switzerland, where the law requires prior opt-in consent, so they
// get the opt-in banner. Unknown country = protective (banner shown).

export const REGION_COOKIE = 'veloxis_region';
export type Region = 'eea' | 'other';

// EU 27 + Iceland, Liechtenstein, Norway (EEA) + United Kingdom + Switzerland.
export const OPT_IN_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
]);

/** 'other' only for a known country outside the opt-in list; missing/unknown country counts as 'eea'. */
export function regionForCountry(country: string | null | undefined): Region {
  const c = (country || '').trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(c) || c === 'XX') return 'eea';
  return OPT_IN_COUNTRIES.has(c) ? 'eea' : 'other';
}
