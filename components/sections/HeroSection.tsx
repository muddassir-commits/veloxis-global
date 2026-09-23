/**
 * HeroSection — Server Component.
 * Full-width real estate hero with background image, overlay, and clean CTA.
 * No client-side dependencies for maximum LCP performance.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-real-estate.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full relative z-10 py-20">
        <div className="max-w-[680px] flex flex-col items-start text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-white/90">For builders, brokers &amp; channel partners</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-6 font-sans">
            The real estate marketing agency that fills your{' '}
            <span className="text-emerald-400">site visits</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-[16px] md:text-[18px] font-normal text-white/75 leading-relaxed max-w-[540px] font-sans mb-8">
            We build project landing pages, run Meta and Google ads, and set up WhatsApp automation that replies to every enquiry in seconds — for developers, brokers and channel partners in Kanpur, Lucknow, Noida and Delhi NCR. Measured on site visits, not clicks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button
              id="hero-free-audit-btn"
              variant="primary"
              size="lg"
              href="/contact"
              className="text-center shadow-lg shadow-blue-600/25"
            >
              Get a free marketing audit →
            </Button>
            <Link
              href="/playbooks"
              className="text-[15px] font-bold text-white/80 hover:text-white transition-colors px-4 py-3 border border-white/20 rounded-xl hover:bg-white/10"
            >
              See example plans
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Real estate only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Ad spend stays in your accounts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Month-to-month, no lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
