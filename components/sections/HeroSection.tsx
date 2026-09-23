/**
 * HeroSection — Server Component.
 * Full-width real estate hero with background image, overlay, and clean CTA.
 * No client-side dependencies for maximum LCP performance.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { companyStats } from '../../data/stats';
import { CheckCircle, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-real-estate.jpg"
        alt="Premium real estate development in Delhi NCR"
        fill
        priority
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
            <span className="text-xs font-bold tracking-wider uppercase text-white/90">Delhi NCR Real Estate Marketing</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-6 font-sans">
            The Growth Agency That Fills Your{' '}
            <span className="text-emerald-400">Site Visits</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-[16px] md:text-[18px] font-normal text-white/75 leading-relaxed max-w-[540px] font-sans mb-8">
            We build predictable lead-generation engines for real estate developers and channel partners in Delhi NCR. High-converting landing pages, Meta & Google Ads, and WhatsApp automation — everything you need to sell properties faster.
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
              Get Your Free Growth Plan →
            </Button>
            <Link
              href="/case-studies"
              className="text-[15px] font-bold text-white/80 hover:text-white transition-colors px-4 py-3 border border-white/20 rounded-xl hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>{companyStats.yearsExperience} Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>{companyStats.projectsDelivered} Projects Delivered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" aria-hidden="true" />
              <span>{companyStats.clientRating} Client Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
