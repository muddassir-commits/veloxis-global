import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const InArticleLeadMagnet: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919194020727?text=Hi%20Veloxis%20Global%2C%20please%20send%20me%20the%20free%20marketing%20audit';

  return (
    <aside
      aria-label="Lead generation resource"
      className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden text-left"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold tracking-wider uppercase w-fit border border-emerald-500/20">
          <FileText className="w-3.5 h-3.5" />
          <span>Free Marketing Audit</span>
        </div>

        <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
          Get a free check of your enquiry flow
        </p>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          Send us your project page or ad link and we will show you where enquiries are lost, in plain language. No fee, no obligation.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <WhatsAppIcon variant="current" className="w-4 h-4" />
            <span>Chat with us on WhatsApp</span>
          </a>

          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all text-center"
          >
            <span>Request a Free Marketing Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Veloxis Global · Real estate marketing agency · Serving Noida, NCR, Lucknow &amp; Kanpur</span>
        </div>
      </div>
    </aside>
  );
};
