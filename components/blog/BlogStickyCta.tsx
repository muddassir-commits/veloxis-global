'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { WhatsAppLink } from '../ui/WhatsAppLink';
import { BLOG_NICHES } from '../../data/blog-niches';
import type { PostIndustry } from '../../lib/blog';
const DISMISS_KEY = 'vg-blog-cta-closed';

// Small CTA that appears once a reader passes ~30% of a blog post and hides again near the end
// (where the full CTA banner sits). Desktop: a card bottom-left (the WhatsApp bubble is bottom-right).
// Mobile: a slim strip just above the existing quick-actions bar. Closing it hides it for the rest of
// the visit. Clicks are tracked by AnalyticsTracker through the data-cta names below.
export function BlogStickyCta({ postTitle, industry = 'general' }: { postTitle?: string; industry?: PostIndustry }) {
  const niche = BLOG_NICHES[industry];
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    try {
      // Closed earlier in this visit: never start showing it (it stays hidden and inert).
      if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {
      // Storage blocked: the CTA can still be closed for this page view.
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setShow(pct >= 30 && pct < 85);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (closed) return null;

  const close = () => {
    setClosed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  const motion = 'transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none';
  const state = show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none';

  return (
    <aside aria-label="Free audit offer" inert={!show} aria-hidden={!show}>
      {/* Mobile: slim strip above the quick-actions bar (WhatsApp is already in that bar) */}
      <div className={`md:hidden fixed left-2 right-2 bottom-[calc(68px+env(safe-area-inset-bottom))] z-40 ${motion} ${state}`}>
        <div className="flex items-center gap-2 rounded-xl bg-slate-900 text-white shadow-lg pl-3 pr-1 py-1.5">
          <Link
            href={niche.href}
            data-cta="blog_to_niche"
            data-industry={industry}
            data-cta-location="blog_sticky_mobile"
            className="flex-1 flex items-center gap-1.5 text-xs font-bold leading-tight py-1.5"
          >
            <span>{niche.barText}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={close}
            data-cta="blog_sticky_close"
            aria-label="Close"
            className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg text-slate-300 hover:bg-white/10"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop: card bottom-left */}
      <div className={`hidden md:block fixed left-6 bottom-6 z-40 w-[320px] ${motion} ${state}`}>
        <div className="relative rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl p-5">
          <button
            type="button"
            onClick={close}
            data-cta="blog_sticky_close"
            aria-label="Close"
            className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
          <p className="font-extrabold text-base leading-snug pr-6">Want this checked on your own marketing?</p>
          <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
            Run the free website audit, or send us your page or ad link on WhatsApp. No fee, no obligation.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/tools/website-audit"
              data-cta="blog_sticky_audit_tool"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-royal-blue hover:bg-[#1D4ED8] text-white font-bold text-sm transition-colors"
            >
              Free website audit
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <WhatsAppLink
              placement="sticky"
              title={postTitle}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-colors"
            >
              <WhatsAppIcon variant="current" className="w-4 h-4" />
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </aside>
  );
}
