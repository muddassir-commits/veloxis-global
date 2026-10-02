import { NextResponse } from 'next/server';
import { verifyEmailLogin } from '../../../lib/mail';

// Health check for both lead-capture paths, used two ways:
// 1. A daily Vercel cron (vercel.json) calls it, which keeps the free Supabase project from auto-pausing.
// 2. UptimeRobot watches it: a 503 means leads are not being saved or not being emailed.
export const dynamic = 'force-dynamic';

// The mail login is cached per server instance so frequent monitor checks cannot hammer Hostinger.
const EMAIL_CHECK_TTL_MS = 10 * 60 * 1000;
let emailCache: { ok: boolean; at: number } | null = null;

async function databaseAwake(): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return false;

  try {
    // The publishable key is insert-only, so Postgres answers "permission denied" (42501).
    // That answer can only come from a running database, and nothing is read or written.
    const res = await fetch(`${url}/rest/v1/contacts?select=created_at&limit=1`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      signal: AbortSignal.timeout(8000),
      cache: 'no-store',
    });
    if (res.ok) return true;
    const body = await res.json().catch(() => ({}));
    return body?.code === '42501';
  } catch (error) {
    console.error('Health check: Supabase unreachable:', error);
    return false;
  }
}

async function emailWorking(): Promise<boolean> {
  if (emailCache && Date.now() - emailCache.at < EMAIL_CHECK_TTL_MS) return emailCache.ok;
  const ok = await verifyEmailLogin();
  emailCache = { ok, at: Date.now() };
  return ok;
}

export async function GET() {
  const [database, email] = await Promise.all([databaseAwake(), emailWorking()]);
  const healthy = database && email;
  if (!healthy) console.error('Health check failed:', { database, email });

  return NextResponse.json(
    { status: healthy ? 'ok' : 'down', database: database ? 'ok' : 'down', email: email ? 'ok' : 'login failed' },
    { status: healthy ? 200 : 503, headers: { 'Cache-Control': 'no-store' } }
  );
}
