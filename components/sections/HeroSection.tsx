/**
 * HeroSection — Server Component (homepage).
 * E-commerce first since 10 Nov 2026. Local businesses and real estate stay available through the quick links.
 * No client-side dependencies for maximum LCP performance; the WhatsApp button is a small client island.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { WhatsAppLink } from '../ui/WhatsAppLink';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { CheckCircle } from 'lucide-react';
import { industries } from '../../data/industries';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <Image
        src="/images/people/blog/geo-analytics-dashboard-laptop.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center hero-kenburns"
        quality={80}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(11,15,25,0.94)] via-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.55)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob -left-32 top-1/4 h-[420px] w-[420px] bg-[rgba(37,99,235,0.35)]" />
        <div className="aurora-blob aurora-blob-delay left-1/3 -bottom-40 h-[360px] w-[360px] bg-[rgba(52,211,153,0.18)]" />
      </div>

      <div className="max-w-container-max mx-auto px-gutter w-full relative z-10 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-[720px] flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-blue-200 uppercase tracking-wider mb-6 backdrop-blur-sm">
            E-commerce &amp; D2C growth agency
          </span>

          <h1 className="text-[34px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-[-0.02em] leading-[1.08] text-white mb-6 font-sans">
            More orders from your online store,{' '}
            <span className="text-emerald-400 hero-underline">at a cost you can track</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed max-w-[600px] mb-6">
            Veloxis Global runs <Link href="/services/paid-ads" className="text-white underline decoration-white/40 hover:decoration-emerald-400 hover:text-emerald-400 transition-colors">Meta &amp; Google ads</Link>, builds{' '}
            <Link href="/services/high-converting-landing-pages" className="text-white underline decoration-white/40 hover:decoration-emerald-400 hover:text-emerald-400 transition-colors">websites and landing pages</Link>, improves SEO and sets up{' '}
            <Link href="/services/ai-automation" className="text-white underline decoration-white/40 hover:decoration-emerald-400 hover:text-emerald-400 transition-colors">WhatsApp automation</Link> for
            online stores and D2C brands. We work as your outsourced growth team and report on orders and cost per order, not clicks.
          </p>

          {/* Industries, e-commerce first */}
          <ul className="flex flex-wrap gap-2 mb-8" aria-label="Industries we work with">
            {industries.map((ind) => (
              <li key={ind.key}>
                <Link
                  href={ind.href}
                  className="inline-flex items-center min-h-[36px] px-3.5 rounded-full text-[13px] font-semibold text-white/90 bg-white/10 border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors"
                >
                  {ind.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hero-fade-in flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-5" style={{ animationDelay: '0.2s' }}>
            <Button
              id="hero-free-audit-btn"
              variant="primary"
              size="lg"
              href="/free-audit"
              className="text-center shadow-lg shadow-blue-600/25"
            >
              Get a free audit →
            </Button>
            <WhatsAppLink
              id="hero-whatsapp-btn"
              placement="hero"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-bold text-white px-5 py-3.5 border border-white/25 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Chat on WhatsApp
            </WhatsAppLink>
          </div>

          <p className="hero-fade-in text-sm text-white/70 mb-10" style={{ animationDelay: '0.28s' }}>
            Prefer to check it yourself?{' '}
            <Link
              href="/tools/website-audit"
              data-cta="hero_audit_tool"
              className="font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-emerald-400 hover:text-emerald-400 transition-colors"
            >
              Run the free website audit tool
            </Link>
          </p>

          <div className="hero-fade-in flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70" style={{ animationDelay: '0.35s' }}>
            {['Google certified team', 'Your ad accounts, your data', 'Month-to-month, no lock-in'].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
