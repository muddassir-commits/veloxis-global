// Lead storage in Supabase (Postgres) via its REST API.
// The tables are insert-only for the publishable key (see RLS policies in Supabase),
// so this key can add leads but never read them back.

type InsertResult = { ok: true } | { ok: false; duplicate: boolean; error: string };

export async function insertRow(table: string, row: Record<string, unknown>): Promise<InsertResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.warn(`Supabase not configured. Skipping insert into "${table}".`);
    return { ok: false, duplicate: false, error: 'Supabase not configured' };
  }

  try {
    const res = await fetch(`${url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
      signal: AbortSignal.timeout(8000),
      cache: 'no-store',
    });

    if (res.ok) return { ok: true };

    const body = await res.json().catch(() => ({}));
    const duplicate = body?.code === '23505';
    if (!duplicate) console.error(`Supabase insert into "${table}" failed:`, res.status, body);
    return { ok: false, duplicate, error: body?.message || `HTTP ${res.status}` };
  } catch (error: any) {
    console.error(`Supabase insert into "${table}" threw:`, error);
    return { ok: false, duplicate: false, error: error?.message || 'Network error' };
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
