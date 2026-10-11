'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle, XCircle, Info, Loader2, Search, ArrowRight } from 'lucide-react';
import { trackEvent } from '../../../lib/analytics';
import { siteData } from '../../../data/site';
import type { AuditResult, Check, Status } from '../../../lib/audit';

const ICON: Record<Status, React.ReactNode> = {
  pass: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-label="Pass" />,
  warn: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" aria-label="Needs work" />,
  fail: <XCircle className="w-5 h-5 text-red-600 shrink-0" aria-label="Fail" />,
  info: <Info className="w-5 h-5 text-slate-400 shrink-0" aria-label="Info" />,
};

const scoreColor = (s: number) => (s >= 80 ? 'text-emerald-600' : s >= 50 ? 'text-amber-500' : 'text-red-600');
const barColor = (s: number) => (s >= 80 ? 'bg-emerald-500' : s >= 50 ? 'bg-amber-400' : 'bg-red-500');

function CheckRow({ c }: { c: Check }) {
  return (
    <li className="py-4 flex gap-3">
      {ICON[c.status]}
      <div className="min-w-0">
        <p className="font-semibold text-slate-900">{c.label}</p>
        <p className="text-sm text-slate-600 mt-0.5 break-words">{c.detail}</p>
        {c.fix && <p className="text-sm text-slate-800 mt-2 bg-slate-50 border border-slate-200 rounded-lg p-3"><strong>Fix: </strong>{c.fix}</p>}
      </div>
    </li>
  );
}

export default function AuditTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/audit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setResult(data);
      trackEvent('website_audit_run', { score: data.score });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const topFixes = result
    ? result.checks
        .filter((c) => c.status === 'fail' || c.status === 'warn')
        .sort((a, b) => (a.priority ?? 3) - (b.priority ?? 3) || (a.status === 'fail' ? -1 : 1) || b.weight - a.weight)
        .slice(0, 5)
    : [];

  return (
    <div>
      <form onSubmit={run} className="flex flex-col sm:flex-row gap-3" role="search" aria-label="Website audit">
        <label htmlFor="audit-url" className="sr-only">Website address</label>
        <input
          id="audit-url"
          type="text"
          inputMode="url"
          autoComplete="url"
          required
          placeholder="yourwebsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-royal-blue"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-royal-blue px-6 py-3.5 font-bold text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Search className="w-5 h-5" aria-hidden="true" />}
          {loading ? 'Checking…' : 'Audit my site'}
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-2">Checks one page (usually your homepage or a landing page). Takes 5–20 seconds. Nothing is stored.</p>

      {error && <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">{error}</p>}

      {result && (
        <div className="mt-10" aria-live="polite">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="text-center sm:text-left">
                <p className={`text-6xl font-extrabold ${scoreColor(result.score)}`}>{result.score}</p>
                <p className="text-sm text-slate-500">overall score / 100</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 break-all">Checked: {result.finalUrl}</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {result.categories.map((c) => (
                    <a key={c.id} href={`#cat-${c.id}`} className="block group">
                      <div className="flex justify-between text-sm font-semibold text-slate-800 group-hover:text-royal-blue">
                        <span>{c.label}</span><span>{c.score}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 mt-1 overflow-hidden">
                        <div className={`h-full ${barColor(c.score)}`} style={{ width: `${c.score}%` }} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {topFixes.length > 0 && (
            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Fix these first</h2>
              <ol className="mt-4 space-y-3 list-decimal pl-5">
                {topFixes.map((c) => (
                  <li key={c.id} className="text-slate-800"><strong>{c.label}:</strong> {c.fix}</li>
                ))}
              </ol>
            </div>
          )}

          {result.categories.map((cat) => (
            <section key={cat.id} id={`cat-${cat.id}`} className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 scroll-mt-24">
              <h2 className="text-xl font-bold text-slate-900 flex justify-between gap-4">
                <span>{cat.label}</span><span className={scoreColor(cat.score)}>{cat.score}/100</span>
              </h2>
              <ul className="divide-y divide-slate-100 mt-2">
                {result.checks.filter((c) => c.category === cat.id).map((c) => <CheckRow key={c.id} c={c} />)}
              </ul>
            </section>
          ))}

          <div className="mt-8 rounded-3xl bg-slate-900 text-white p-6 sm:p-8">
            <h2 className="text-xl font-bold">Want a person to go through it with you?</h2>
            <p className="text-slate-300 mt-2">
              This tool reads one page. A free marketing audit covers your pages, ads and lead follow-up together, reviewed
              personally by Muddassir, with the fixes in order.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-900 hover:bg-emerald-300">
                Get a free marketing audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source_page: '/tools/website-audit' })}
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
