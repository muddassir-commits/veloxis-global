import { NextResponse } from 'next/server';
import { runAudit, AuditError } from '../../../lib/audit';

// Fetching a slow site can take a while; checks run on the raw HTML, so 30 s is plenty.
export const maxDuration = 30;

// Best-effort limit per server instance: 10 audits per visitor per hour.
const HOURLY_LIMIT = 10;
const hits = new Map<string, number[]>();

function allowed(request: Request): boolean {
  const ip = (request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim();
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  if (recent.length >= HOURLY_LIMIT) return false;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return true;
}

export async function POST(request: Request) {
  let url = '';
  try {
    url = String((await request.json())?.url ?? '').slice(0, 500);
  } catch {
    // fall through to the empty-url error
  }
  if (!url.trim()) return NextResponse.json({ error: 'Enter a website address.' }, { status: 400 });
  if (!allowed(request)) {
    return NextResponse.json({ error: 'You’ve run a lot of audits this hour. Please try again later.' }, { status: 429 });
  }
  try {
    const result = await runAudit(url);
    return NextResponse.json(result, { headers: { 'Cache-Control': 'no-store' } });
  } catch (e) {
    if (e instanceof AuditError) return NextResponse.json({ error: e.message }, { status: 422 });
    console.error('Audit failed:', e);
    return NextResponse.json({ error: 'Something went wrong while checking that site. Please try again.' }, { status: 500 });
  }
}
