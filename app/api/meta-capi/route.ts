import { after } from 'next/server';
import * as z from 'zod';
import { capiEnabled, clientIp, sameSiteUrl, sendCapiEvent } from '../../../lib/metaCapi';

// Browser -> Meta Conversions API relay for click events (lib/analytics.ts, relayToCapi).
// Lead and NewsletterSignup are NOT accepted here: the form routes send them server-side.
// The browser calls this only while marketing consent is in force (default outside the EEA/UK/
// Switzerland, or accepted in the banner; never after the visitor turned marketing off, see
// hasMarketingConsent in lib/analytics.ts). We also refuse (403) anything without consent: true.
// Feature is off (204, nothing sent) until META_PIXEL_ID + META_CAPI_ACCESS_TOKEN are set.

const MAX_BODY = 4096;
const ALLOWED_EVENTS = ['Contact', 'BookingClick'] as const;

const eventSchema = z.object({
  event_name: z.enum(ALLOWED_EVENTS),
  event_id: z.string().min(8).max(64).regex(/^[A-Za-z0-9-]+$/),
  event_source_url: z.string().url().max(2000),
  consent: z.literal(true),
  fbp: z.string().max(200).regex(/^fb\.\d\.\d+\.[\w.-]+$/).optional(),
  fbc: z.string().max(500).regex(/^fb\.\d\.\d+\.[\w.-]+$/).optional(),
  custom_data: z
    .object({
      source_page: z.string().max(200).optional(),
      contact_method: z.enum(['whatsapp', 'phone', 'email']).optional(),
      industry: z.string().max(40).optional(),
      content_name: z.string().max(80).optional(),
    })
    .optional(),
});

// Simple per-instance limit: 20 events per IP per minute (clicks are rare; this stops floods).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // same-origin keepalive fetches may omit it
  try {
    const host = new URL(origin).host;
    return host === new URL(request.url).host || host.endsWith('veloxisglobal.com') || host.startsWith('localhost');
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!capiEnabled()) return new Response(null, { status: 204 });
  if (!sameOrigin(request)) return new Response(null, { status: 403 });

  const length = Number(request.headers.get('content-length') || 0);
  if (length > MAX_BODY) return new Response(null, { status: 413 });
  const text = await request.text();
  if (text.length > MAX_BODY) return new Response(null, { status: 413 });

  if (rateLimited(clientIp(request) || 'unknown')) return new Response(null, { status: 429 });

  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400 });
  }
  // Without consent: true the schema fails, so nothing is sent.
  const parsed = eventSchema.safeParse(json);
  if (!parsed.success) {
    const noConsent = typeof json === 'object' && json !== null && (json as { consent?: unknown }).consent !== true;
    return new Response(null, { status: noConsent ? 403 : 400 });
  }

  const e = parsed.data;
  const customData = Object.fromEntries(
    Object.entries(e.custom_data || {}).filter((entry): entry is [string, string] => typeof entry[1] === 'string'),
  );
  // Answer at once; the Meta call runs after the response is sent.
  after(() =>
    sendCapiEvent({
      eventName: e.event_name,
      eventId: e.event_id,
      eventSourceUrl: sameSiteUrl(request, e.event_source_url),
      request,
      fbp: e.fbp,
      fbc: e.fbc,
      customData,
    }),
  );
  return new Response(null, { status: 202 });
}
