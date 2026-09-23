/**
 * CtaBanner — Server Component.
 * Framer Motion removed; CSS section-reveal and animate-grid-shift from globals.css.
 * styled-jsx global block removed — keyframes now in globals.css.
 */
import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

export interface CtaBannerProps {
  title?: string;
  description?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ title, description }) => {
  const displayTitle = title || 'Get a free real estate marketing audit';
  const displayDescription =
    description ||
    'Send us your project or current campaigns. We’ll review your landing page, ads and lead follow-up and tell you what to fix first — no obligation.';

  return (
    <section className="py-12 bg-white overflow-hidden section-reveal">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-royal-blue rounded-2xl p-8 sm:p-16 relative overflow-hidden text-center text-white shadow-xl flex flex-col items-center">
          {/* Animated subtle grid pattern — keyframe in globals.css */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 animate-grid-shift -z-10"
            aria-hidden="true"
          />
          {/* Radial mask to fade grid edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#2563eb_90%)] -z-10" aria-hidden="true" />

          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold tracking-tight mb-4 max-w-2xl leading-tight">
            {displayTitle}
          </h2>

          <p className="text-body-lg text-white max-w-xl leading-relaxed mb-8">
            {displayDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* White bg / Blue text button */}
            <div className="w-full sm:w-auto rounded-full hero-cta-hover">
              <Button id="cta-banner-free-audit-btn" href="/contact" variant="white" className="w-full sm:w-auto text-center shadow-lg">
                Get a free audit →
              </Button>
            </div>
            {/* Ghost white border button */}
            <div className="w-full sm:w-auto rounded-full hero-cta-hover">
              <Button
                id="cta-banner-whatsapp-btn"
                href="https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit"
                variant="outline"
                className="w-full sm:w-auto text-center border-white text-white hover:bg-white/10 hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-xs font-bold uppercase tracking-wider text-white">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" aria-hidden="true" />
              <span>Real estate only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" aria-hidden="true" />
              <span>Month-to-month</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" aria-hidden="true" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
