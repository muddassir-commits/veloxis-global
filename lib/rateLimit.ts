// Daily form submission limit: 3 per visitor per form, reset at midnight IST.
// Counting happens in Supabase (public.consume_form_quota). Only a salted SHA-256 hash of the
// visitor's IP is sent; the salt is server-side only, so nobody outside can recompute it.
import { createHash } from 'node:crypto';

export const DAILY_FORM_LIMIT = 3;
export type FormName = 'contact' | 'newsletter';

function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim();
}

/** true = allowed. Fails open (allows) if Supabase is unreachable, so real leads are never lost. */
export async function withinDailyLimit(request: Request, form: FormName): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return true;

  const salt = process.env.RATE_LIMIT_SALT || process.env.SMTP_PASS || '';
  const ipHash = createHash('sha256').update(`${salt}:${clientIp(request)}`).digest('hex');

  try {
    const res = await fetch(`${url}/rest/v1/rpc/consume_form_quota`, {
      method: 'POST',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_ip_hash: ipHash, p_form: form }),
      signal: AbortSignal.timeout(5000),
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('Rate limit check failed:', res.status);
      return true;
    }
    return (await res.json()) === true;
  } catch (error) {
    console.error('Rate limit check threw:', error);
    return true;
  }
}
