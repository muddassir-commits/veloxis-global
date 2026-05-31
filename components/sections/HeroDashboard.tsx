'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroDashboard — client component for the decorative animated right-side panel.
 * Loaded with ssr:false via dynamic() in HeroSection so it never blocks LCP.
 */
export default function HeroDashboard() {
  return (
    <div className="lg:col-span-4 relative h-[380px] md:h-[450px] w-full flex items-center justify-center mt-8 lg:mt-0">
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
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-4 bg-teal-50/95 border border-teal-200/60 p-3 rounded-full shadow-lg flex items-center gap-2 max-w-[260px] z-20"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
        </span>
        <div className="leading-tight font-sans text-left">
          <span className="text-[11px] font-bold text-slate-800 block">↑ 280% Organic Traffic</span>
          <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">Client, Delhi</span>
        </div>
      </motion.div>

      {/* Floating Pill 2: Noida ROAS */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-10 -right-4 bg-orange-50/95 border border-orange-200/60 p-3 rounded-full shadow-lg flex items-center gap-2 max-w-[260px] z-20"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
        </span>
        <div className="leading-tight font-sans text-left">
          <span className="text-[11px] font-bold text-slate-800 block">4.8x ROAS</span>
          <span className="text-[9px] font-semibold text-slate-400 block uppercase tracking-wider">E-Commerce Client, Noida</span>
        </div>
      </motion.div>
    </div>
  );
}
