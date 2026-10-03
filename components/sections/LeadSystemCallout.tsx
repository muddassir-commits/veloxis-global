import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Points service and home visitors to the packaged offer, so the offer page is linked
// from the pages that rank (and is found by search engines).
export const LeadSystemCallout: React.FC<{ className?: string }> = ({ className = 'bg-white' }) => (
  <section className={`py-12 ${className}`}>
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-slate-800 shadow-lg">
        <div className="max-w-2xl">
          <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">Done-for-you real estate lead generation</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Want ads, page and WhatsApp run as one system?</h2>
          <p className="text-slate-300 leading-relaxed">
            The Real Estate Lead System sets up Meta ads, a landing page for your project and an instant WhatsApp reply
            in two weeks, then runs them month to month.
          </p>
        </div>
        <Link
          href="/real-estate-lead-system"
          className="inline-flex items-center justify-center gap-2 shrink-0 bg-royal-blue hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
        >
          See the Real Estate Lead System <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);
