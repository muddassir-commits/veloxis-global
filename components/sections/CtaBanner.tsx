'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const CtaBanner: React.FC = () => {
  const { getSectionAnimation, getGlowHover } = useInViewAnimation();

  return (
    <motion.section 
      {...getSectionAnimation()}
      className="py-12 bg-white overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-royal-blue rounded-2xl p-8 sm:p-16 relative overflow-hidden text-center text-white shadow-xl flex flex-col items-center">
          {/* Animated subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 animate-grid-shift -z-10"></div>
          {/* Radial mask to fade grid edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#2563eb_90%)] -z-10"></div>

          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold tracking-tight mb-4 max-w-2xl leading-tight">
            Ready to Grow Your Business in 2026?
          </h2>
          
          <p className="text-body-lg text-white/80 max-w-xl leading-relaxed mb-8">
            Get a FREE, no-obligation digital marketing audit. We will analyze your search visibility, competitor rankings, and speed profiles to show you exactly how to double your conversions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* White bg / Blue text button */}
            <motion.div {...getGlowHover()} className="w-full sm:w-auto rounded-full">
              <Button href="/free-seo-audit" variant="white" className="w-full sm:w-auto text-center shadow-lg">
                Get Your Free Audit →
              </Button>
            </motion.div>
            {/* Ghost white border button */}
            <motion.div {...getGlowHover()} className="w-full sm:w-auto rounded-full">
              <Button 
                href="/contact" 
                variant="outline" 
                className="w-full sm:w-auto text-center border-white text-white hover:bg-white/10 hover:text-white"
              >
                Talk to our Director
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-xs font-bold uppercase tracking-wider text-white/70">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" />
              <span>48-Hour Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" />
              <span>100% Manual Review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-accent" />
              <span>No Commitments</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes grid-shift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 4rem 4rem;
          }
        }
        .animate-grid-shift {
          animation: grid-shift 20s linear infinite;
        }
      `}</style>
    </motion.section>
  );
};
