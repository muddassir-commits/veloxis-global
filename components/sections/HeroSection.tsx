/**
 * HeroSection — Server Component.
 * Full-width real estate hero with background image, overlay, and clean CTA.
 * No client-side dependencies for maximum LCP performance.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
        className="object-cover object-center hero-kenburns"
        quality={85}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.9)] via-[rgba(15,23,42,0.75)] to-[rgba(15,23,42,0.4)]"
        aria-hidden="true"
      />

      {/* Slow-drifting brand glows behind the copy (decorative) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob -left-32 top-1/4 h-[420px] w-[420px] bg-[rgba(37,99,235,0.35)]" />
        <div className="aurora-blob aurora-blob-delay left-1/3 -bottom-40 h-[360px] w-[360px] bg-[rgba(52,211,153,0.18)]" />
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full relative z-10 py-20">
        <div className="max-w-[680px] flex flex-col items-start text-left">

          {/* H1 Headline */}
          <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-6 font-sans">
            The real estate marketing agency that fills your{' '}
            <span className="text-emerald-400 hero-underline">site visits</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-[16px] md:text-[18px] font-normal text-white/75 leading-relaxed max-w-[540px] font-sans mb-8">
            We build project landing pages, run Meta (Facebook &amp; Instagram) and Google ads, and set up AI WhatsApp automation that replies to every enquiry in seconds — for developers, brokers and channel partners in Kanpur, Lucknow, Noida and Delhi NCR. Measured on site visits, not clicks.
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in flex flex-wrap items-center gap-4 mb-10" style={{ animationDelay: '0.2s' }}>
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
              className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-white/80 hover:text-white transition-all px-4 py-3 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
            >
              See example plans
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-fade-in flex flex-wrap items-center gap-6 text-sm text-white/60" style={{ animationDelay: '0.35s' }}>
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
