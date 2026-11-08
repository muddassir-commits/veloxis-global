// Meta Conversions API (server-side events). Server-only.
// Off unless META_PIXEL_ID and META_CAPI_ACCESS_TOKEN are set (Vercel env). With
// META_CAPI_TEST_EVENT_CODE set, every event goes to Events Manager > Test events only.
// Callers must only send events when the browser reports marketing consent in force (`consent: true`:
// the default outside the EEA/UK/Switzerland, or accepted in the banner; see lib/consent.ts).
// Never log personal data here: only event names and HTTP status codes.
import { createHash } from 'node:crypto';
import * as z from 'zod';

const GRAPH_VERSION = process.env.META_GRAPH_API_VERSION || 'v24.0';

export function capiEnabled(): boolean {
  return Boolean(process.env.META_PIXEL_ID && process.env.META_CAPI_ACCESS_TOKEN);
}

/** Meta browser ids + consent sent by our forms in `_meta` (see metaFormFields in lib/analytics.ts). */
export const metaFieldsSchema = z
  .object({
    event_id: z.string().min(8).max(64).regex(/^[A-Za-z0-9-]+$/),
    consent: z.boolean(),
    fbp: z.string().max(200).regex(/^fb\.\d\.\d+\.[\w.-]+$/).optional(),
    fbc: z.string().max(500).regex(/^fb\.\d\.\d+\.[\w.-]+$/).optional(),
  })
  .optional()
  // Bad or missing Meta fields must never block a lead: they just turn the CAPI event off.
  .catch(undefined);
export type MetaFields = z.infer<typeof metaFieldsSchema>;

const sha256 = (v: string) => createHash('sha256').update(v).digest('hex');
const isHashed = (v: string) => /^[a-f0-9]{64}$/.test(v);

export function hashEmail(email?: string): string | undefined {
  if (!email) return undefined;
  const v = email.trim().toLowerCase();
  if (!v) return undefined;
  return isHashed(v) ? v : sha256(v);
}

/** Digits only with country code. A bare 10-digit Indian mobile gets 91 in front. */
export function hashPhone(phone?: string): string | undefined {
  if (!phone) return undefined;
  const raw = phone.trim().toLowerCase();
  if (isHashed(raw)) return raw;
  let digits = raw.replace(/\D/g, '').replace(/^0+/, '');
  if (/^[6-9]\d{9}$/.test(digits)) digits = `91${digits}`;
  return digits.length >= 8 ? sha256(digits) : undefined;
}

function hashName(name?: string): string | undefined {
  const first = name?.trim().split(/\s+/)[0]?.toLowerCase().replace(/[^\p{L}]/gu, '');
  return first ? sha256(first) : undefined;
}

export function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = (forwarded?.split(',')[0] || request.headers.get('x-real-ip') || '').trim();
  return ip || undefined;
}

export type CapiEvent = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  request: Request;
  email?: string;
  phone?: string;
  name?: string;
  country?: string;
  fbp?: string;
  fbc?: string;
  customData?: Record<string, string>;
};

/** Sends one event to Meta. Returns the HTTP status (0 = not sent). Never throws. */
export async function sendCapiEvent(e: CapiEvent): Promise<number> {
  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return 0;

  const userData: Record<string, unknown> = {
    client_user_agent: e.request.headers.get('user-agent')?.slice(0, 512) || undefined,
    client_ip_address: clientIp(e.request),
    fbp: e.fbp,
    fbc: e.fbc,
  };
  const em = hashEmail(e.email);
  const ph = hashPhone(e.phone);
  const fn = hashName(e.name);
  if (em) userData.em = [em];
  if (ph) userData.ph = [ph];
  if (fn) userData.fn = [fn];
  if (e.country) userData.country = [sha256(e.country.trim().toLowerCase())];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: e.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: e.eventId,
        event_source_url: e.eventSourceUrl,
        action_source: 'website',
        user_data: userData,
        ...(e.customData && Object.keys(e.customData).length ? { custom_data: e.customData } : {}),
      },
    ],
  };
  const testCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;
  // Token in the body, not the URL, so it never shows up in request logs.
  payload.access_token = token;

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
      cache: 'no-store',
    });
    if (!res.ok) console.warn(`Meta CAPI ${e.eventName} failed: HTTP ${res.status}`);
    return res.status;
  } catch {
    console.warn(`Meta CAPI ${e.eventName} failed: network error`);
    return 0;
  }
}

/** The page the form was sent from, if it is on this site; else the site root. */
export function sameSiteUrl(request: Request, candidate?: string | null): string {
  const fallback = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.veloxisglobal.com';
  try {
    const host = new URL(request.url).host;
    if (candidate) {
      const u = new URL(candidate);
      if (u.host === host || u.host.endsWith('veloxisglobal.com')) return `${u.origin}${u.pathname}`;
    }
  } catch {
    // fall through
  }
  return fallback;
}
