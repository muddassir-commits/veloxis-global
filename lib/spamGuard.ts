// Contact-form spam guard (server side). Spam is dropped silently: the sender sees the normal
// success screen, but nothing is saved (so no CRM lead), no email alert is sent and the browser
// does not fire generate_lead.
//
// Checks, in order:
// 1. Honeypot: a field real visitors never see (off-screen, not display:none). Bots fill it.
// 2. Time to submit: the form sends how long it was open. Missing or under 3 seconds = a script.
// 3. Link-building / guest-post pitches: the only kind of spam seen on the form (Oct 2026).
//    Kept narrow on purpose so a real builder or broker is never blocked.

export const MIN_FILL_MS = 3000;

const PITCH_PATTERNS = [
  /guest[\s-]?post/i,
  /link[\s-]?building/i,
  /back[\s-]?links?/i,
  /\bDA\s*\d{2}\b/i,
  /domain authority/i,
  /sponsored (post|article)s?/i,
  /\bseo services\b/i,
];

export type SpamInput = {
  honeypots: (string | undefined)[];
  elapsedMs: unknown;
  message?: string;
};

/** Returns a short reason if the submission is spam, otherwise null. */
export function spamReason({ honeypots, elapsedMs, message }: SpamInput): string | null {
  if (honeypots.some((v) => typeof v === 'string' && v.trim() !== '')) return 'honeypot';
  const ms = typeof elapsedMs === 'number' ? elapsedMs : Number(elapsedMs);
  if (!Number.isFinite(ms) || ms < MIN_FILL_MS) return 'too-fast';
  const text = message || '';
  if (PITCH_PATTERNS.some((re) => re.test(text))) return 'pitch';
  if ((text.match(/https?:\/\//gi) || []).length >= 3) return 'links';
  return null;
}
