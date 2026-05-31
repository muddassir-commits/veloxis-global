/**
 * HeroSection — Server Component.
 *
 * Critical design decisions for LCP:
 * 1. No 'use client' — renders as server HTML so H1 and CTA are visible on first paint.
 * 2. No initial opacity:0 on the left column — text is immediately visible.
 * 3. CSS keyframe fade-in (hero-fade-in) runs AFTER paint, so LCP element is
 *    measured before animation, not after JS hydration.
 * 4. HeroDashboard (the animated right panel) is dynamically imported with ssr:false
 *    so Framer Motion never ships in the critical path of this page.
 */
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { AnimatedCounter } from '../ui/AnimatedCounter';

// Dynamically import the animated dashboard panel — client-only, non-blocking.
// A static placeholder prevents layout shift while the component loads.
const HeroDashboard = dynamic(() => import('./HeroDashboard'), {
  ssr: false,
  loading: () => (
    <div
      className="lg:col-span-4 relative h-[380px] md:h-[450px] w-full flex items-center justify-center mt-8 lg:mt-0"
      aria-hidden="true"
    >
      <div className="bg-white/70 backdrop-blur-[20px] rounded-2xl border border-white/40 p-6 shadow-xl w-full max-w-[380px] h-[280px] md:h-[320px]" />
    </div>
  ),
});

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] bg-slate-50 flex items-center py-16 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Column — server-rendered, immediately visible for LCP */}
        {/* CSS hero-fade-in starts after paint so LCP is captured before animation */}
        <div
          className="lg:col-span-6 flex flex-col items-start text-left hero-fade-in"
        >
          {/* Badge */}
          <Badge color="teal" className="mb-6">
            ⚡ CERTIFIED TEAM · SERVING BUSINESSES ACROSS INDIA
          </Badge>

          {/* H1 Headline — LCP element, no opacity:0 initial state */}
          <h1 className="text-[32px] md:text-[72px] font-bold md:font-extrabold tracking-[-0.02em] leading-tight md:leading-[1.1] text-slate-900 mb-6 font-sans">
            India&apos;s Most{' '}
            <span className="relative inline-block z-10 text-slate-900">
              Results-Driven
              <span
                className="absolute left-0 bottom-2 md:bottom-3 w-full h-[6px] md:h-[8px] bg-gradient-to-r from-royal-blue to-indigo-accent -z-10 rounded-full opacity-35"
                aria-hidden="true"
              />
            </span>{' '}
            Digital Marketing Agency
          </h1>

          {/* Body Paragraph */}
          <p className="text-[18px] font-normal text-on-surface-variant leading-relaxed max-w-[560px] font-sans">
            From professional <Link href="/services/seo" className="text-royal-blue hover:underline font-semibold">SEO Services</Link> to Google Ads campaigns, Veloxis Global delivers measurable digital growth. We are a leading <Link href="/digital-marketing-agency-kanpur" className="text-royal-blue hover:underline font-semibold">Digital Marketing Agency in Kanpur</Link>, serving clients pan-India. No fluff. Only results.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-[16px] mt-10 w-full sm:w-auto">
            <div className="w-full sm:w-auto rounded-md hero-cta-hover">
              <Button
                variant="primary"
                size="lg"
                href="/free-seo-audit"
                className="w-full sm:w-auto text-center"
              >
                Get Your Free Marketing Audit →
              </Button>
            </div>
            <div className="w-full sm:w-auto rounded-md hero-cta-hover">
              <Button
                variant="secondary"
                size="lg"
                href="#case-studies"
                className="w-full sm:w-auto text-center"
              >
                See Our Results ↓
              </Button>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4 font-sans">
            Have questions? <Link href="/contact" className="text-royal-blue hover:underline font-semibold">Contact Veloxis Global</Link> today for a quick consultation.
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-[32px] mt-12 border-t border-slate-200 pt-8 w-full">
            {/* Experience */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                <AnimatedCounter value={4} suffix="+" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-500 leading-none">
                Years Experience
              </span>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                <AnimatedCounter value={20} suffix="+" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-500 leading-none">
                Projects Delivered
              </span>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-500 text-lg leading-none" aria-hidden="true">⭐</span>
                <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                  <AnimatedCounter value={5} suffix="★" />
                </span>
              </div>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-500 leading-none">
                Client Rating
              </span>
            </div>

            {/* Cities Served */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                Pan-India
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-500 leading-none">
                Reach
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — animated dashboard, client-only, non-blocking */}
        <HeroDashboard />

      </div>
    </section>
  );
};
