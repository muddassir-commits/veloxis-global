/**
 * AuditToolBlock — Server Component (homepage).
 * Promotes the free self-serve website audit tool (/tools/website-audit) next to the personal free audit.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Gauge, Search, LineChart, MousePointerClick, Sparkles, Smartphone } from 'lucide-react';

const checks = [
  { icon: Search, label: 'SEO basics' },
  { icon: Gauge, label: 'Page speed' },
  { icon: LineChart, label: 'Tracking tags' },
  { icon: MousePointerClick, label: 'Lead capture' },
  { icon: Smartphone, label: 'Mobile layout' },
  { icon: Sparkles, label: 'AI search readiness' },
];

export const AuditToolBlock: React.FC = () => (
  <section className="bg-white py-section-gap" id="website-audit-tool">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] text-white p-7 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <span className="border-beam border-beam-light" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-royal-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative">
          <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block mb-3">Free tool · No sign-up</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">Audit your website in under a minute</h2>
          <p className="text-slate-300 leading-relaxed mt-4 max-w-xl">
            Paste any page address and our free website audit tool checks the basics that decide whether visitors turn into
            enquiries or orders, then lists what to fix first. Works for stores, clinic and business websites, and property pages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/tools/website-audit"
              data-cta="home_audit_tool"
              className="inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-colors"
            >
              Run the free audit tool <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/free-audit"
              data-cta="home_personal_audit"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
            >
              Or ask for a personal audit
            </Link>
          </div>
        </div>
        <ul className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3" aria-label="What the tool checks">
          {checks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col gap-3 rounded-2xl bg-white/5 border border-white/10 p-4">
              <span className="w-9 h-9 rounded-lg bg-royal-blue/25 text-blue-200 flex items-center justify-center" aria-hidden="true">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-bold text-white">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
