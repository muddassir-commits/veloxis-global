import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BLOG_NICHES } from '../../data/blog-niches';
import type { PostIndustry } from '../../lib/blog';

// Blog -> niche funnel boxes. Plain server-rendered links (no redirects) so crawlers and GTM see them.
// Every link carries data-cta="blog_to_niche" + data-industry; AnalyticsTracker sends both with the click.
export const NicheCta: React.FC<{ industry: PostIndustry; variant: 'inline' | 'end' }> = ({ industry, variant }) => {
  const n = BLOG_NICHES[industry];

  if (variant === 'inline') {
    return (
      <aside
        aria-label={`${n.name} marketing`}
        className="my-8 rounded-xl border border-royal-blue/20 bg-blue-50/60 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"
      >
        <p className="flex-1 text-sm sm:text-base font-bold text-slate-900 leading-snug">{n.inlineCta.title}</p>
        <Link
          href={n.href}
          data-cta="blog_to_niche"
          data-industry={industry}
          data-cta-location="blog_inline"
          className="shrink-0 inline-flex items-center gap-1.5 py-1.5 text-sm font-bold text-royal-blue hover:underline"
        >
          {n.inlineCta.link} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </aside>
    );
  }

  return (
    <aside aria-label={`${n.name} marketing`} className="my-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/30 rounded-full blur-2xl" aria-hidden="true" />
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">{n.endCta.title}</h3>
        <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed max-w-xl">{n.endCta.desc}</p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            href={n.href}
            data-cta="blog_to_niche"
            data-industry={industry}
            data-cta-location="blog_end"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-royal-blue hover:bg-blue-600 text-white font-bold text-sm transition-colors"
          >
            {n.endCta.link} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/tools/website-audit"
            data-cta="blog_end_audit_tool"
            data-industry={industry}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-colors"
          >
            Get a free website audit
          </Link>
        </div>
      </div>
    </aside>
  );
};
