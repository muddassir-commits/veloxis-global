'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const HeroSection: React.FC = () => {
  const { getGlowHover } = useInViewAnimation();

  return (
    <section className="relative min-h-[92vh] bg-slate-50 flex items-center py-16 overflow-hidden">
      {/* Decorative background grid pattern from tailwind config specs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column (60% split: col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <Badge color="teal" className="mb-6">
            ⚡ CERTIFIED TEAM · SERVING BUSINESSES ACROSS INDIA
          </Badge>

          {/* H1 Headline */}
          <h1 className="text-[32px] md:text-[72px] font-bold md:font-extrabold tracking-[-0.02em] leading-tight md:leading-[1.1] text-slate-900 mb-6 font-sans">
            India's Most{' '}
            <span className="relative inline-block z-10 text-slate-900">
              Results-Driven
              <span className="absolute left-0 bottom-2 md:bottom-3 w-full h-[6px] md:h-[8px] bg-gradient-to-r from-royal-blue to-indigo-accent -z-10 rounded-full opacity-35"></span>
            </span>{' '}
            Digital Marketing Agency
          </h1>

          {/* Body Paragraph */}
          <p className="text-[18px] font-normal text-on-surface-variant leading-relaxed max-w-[560px] font-sans">
            From SEO that ranks to Google Ads that converts — Veloxis Global
            delivers measurable digital growth for businesses across India.
            Headquartered in Kanpur, serving clients pan-India.
            No fluff. Only results.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center gap-[16px] mt-10 w-full sm:w-auto">
            <motion.div {...getGlowHover()} className="w-full sm:w-auto rounded-md">
              <Button
                variant="primary"
                size="lg"
                href="/free-seo-audit/"
                className="w-full sm:w-auto text-center"
              >
                Get Your Free Marketing Audit →
              </Button>
            </motion.div>
            <motion.div {...getGlowHover()} className="w-full sm:w-auto rounded-md">
              <Button
                variant="secondary"
                size="lg"
                href="#case-studies"
                className="w-full sm:w-auto text-center"
              >
                See Our Results ↓
              </Button>
            </motion.div>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-[32px] mt-12 border-t border-slate-200 pt-8 w-full">
            {/* Experience */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                <AnimatedCounter value={4} suffix="+" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-400 leading-none">
                Years Experience
              </span>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                <AnimatedCounter value={20} suffix="+" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-400 leading-none">
                Projects Delivered
              </span>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-500 text-lg leading-none">⭐</span>
                <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                  <AnimatedCounter value={5} suffix="★" />
                </span>
              </div>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-400 leading-none">
                Client Rating
              </span>
            </div>

            {/* Cities Served */}
            <div className="flex flex-col gap-1 min-w-[100px] font-sans">
              <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-slate-900 leading-none">
                Pan-India
              </span>
              <span className="text-[12px] font-bold tracking-[0.05em] uppercase text-slate-400 leading-none">
                Reach
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (40% split: col-span-4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 relative h-[380px] md:h-[450px] w-full flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Glassmorphism Dashboard Mockup */}
          <div className="bg-white/70 backdrop-blur-[20px] rounded-2xl border border-white/40 p-6 shadow-xl relative w-full max-w-[380px] h-[280px] md:h-[320px] flex flex-col justify-between overflow-hidden">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100/50">
              <span className="font-bold text-sm text-slate-900 font-sans">Campaign ROI Center</span>
              <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse"></span>
            </div>

            {/* Metric summary */}
            <div className="flex items-center gap-6 mt-2 font-sans">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Avg CTR</span>
                <span className="text-lg font-extrabold text-teal-accent">4.82%</span>
              </div>
              <div className="border-l border-slate-100/80 pl-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">CPA Status</span>
                <span className="text-lg font-extrabold text-sunset-orange">₹182.50</span>
              </div>
            </div>

            {/* Sparkline wave chart */}
            <div className="flex-grow flex items-end relative h-28 mt-2 overflow-visible">
              <svg
                viewBox="0 0 100 40"
                className="w-full h-full text-royal-blue/20 fill-royal-blue/5 stroke-royal-blue stroke-[2] overflow-visible"
              >
                <path d="M0,40 C15,35 20,15 35,25 C50,35 60,5 75,18 C90,30 95,5 100,2 M100,2 L100,40 L0,40 Z" />
                <path
                  d="M0,40 C15,35 20,15 35,25 C50,35 60,5 75,18 C90,30 95,5 100,2"
                  fill="none"
                  className="stroke-royal-blue stroke-[2]"
                />
                <circle cx="100" cy="2" r="3" className="fill-royal-blue" />
              </svg>
              <div className="absolute top-2 right-0 bg-royal-blue text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                Peak
              </div>
            </div>
          </div>

          {/* Floating Pill 1: Delhi Traffic */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-10 -left-4 bg-teal-50/95 border border-teal-200/60 p-3 rounded-full shadow-lg flex items-center gap-2 max-w-[260px] z-20"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <div className="leading-tight font-sans text-left">
              <span className="text-[11px] font-bold text-slate-800 block">
                ↑ 280% Organic Traffic
              </span>
              <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">
                Client, Delhi
              </span>
            </div>
          </motion.div>

          {/* Floating Pill 2: Noida ROAS */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-10 -right-4 bg-orange-50/95 border border-orange-200/60 p-3 rounded-full shadow-lg flex items-center gap-2 max-w-[260px] z-20"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <div className="leading-tight font-sans text-left">
              <span className="text-[11px] font-bold text-slate-800 block">
                4.8x ROAS
              </span>
              <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">
                E-Commerce Client, Noida
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
