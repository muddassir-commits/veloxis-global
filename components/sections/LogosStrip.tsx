'use client';

import React from 'react';

export const LogosStrip: React.FC = () => {
  const row1Logos = [
    'Malhotra Prop',
    'SkillEdge',
    'Verma Health',
    'Gupta Fabrics',
    'Bloom Skin',
    'Vikas Tech',
    'Noida Labs',
    'Delhi Retail',
    'Apex Diag',
    'Kanpur Leather',
  ];

  const row2Logos = [
    'Hindustan Bld',
    'Lucknow Hotel',
    'CP Retailers',
    'Saket Dental',
    'NCR Cowork',
    'Indira Edutech',
    'Gomti Medical',
    'Ganga Exports',
    'Taj Logistics',
    'Awadh Energy',
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden relative select-none">
      <div className="max-w-[1280px] mx-auto px-6 text-center mb-8">
        <span className="font-sans text-[12px] font-bold tracking-[0.05em] uppercase text-slate-400 block">
          TRUSTED BY 250+ BUSINESSES ACROSS INDIA
        </span>
      </div>

      {/* Row 1: Scrolling Left, 40s loop */}
      <div className="flex overflow-hidden w-full relative mb-6">
        <div className="animate-marquee-left flex gap-6 shrink-0 min-w-full">
          {/* First set of logos */}
          {row1Logos.map((logo, idx) => (
            <div
              key={`r1-1-${idx}`}
              className="group flex items-center justify-center w-[120px] h-[40px] bg-slate-50 border border-slate-100 rounded-md transition-all duration-300 hover:border-royal-blue/30 hover:bg-slate-50/50 cursor-pointer shrink-0"
            >
              <span className="text-[11px] font-bold text-slate-400 group-hover:text-royal-blue transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
          {/* Duplicated set of logos for seamless loop */}
          {row1Logos.map((logo, idx) => (
            <div
              key={`r1-2-${idx}`}
              className="group flex items-center justify-center w-[120px] h-[40px] bg-slate-50 border border-slate-100 rounded-md transition-all duration-300 hover:border-royal-blue/30 hover:bg-slate-50/50 cursor-pointer shrink-0"
            >
              <span className="text-[11px] font-bold text-slate-400 group-hover:text-royal-blue transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Scrolling Right, 50s loop */}
      <div className="flex overflow-hidden w-full relative">
        <div className="animate-marquee-right flex gap-6 shrink-0 min-w-full">
          {/* First set of logos */}
          {row2Logos.map((logo, idx) => (
            <div
              key={`r2-1-${idx}`}
              className="group flex items-center justify-center w-[120px] h-[40px] bg-slate-50 border border-slate-100 rounded-md transition-all duration-300 hover:border-indigo-accent/30 hover:bg-slate-50/50 cursor-pointer shrink-0"
            >
              <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-accent transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
          {/* Duplicated set of logos for seamless loop */}
          {row2Logos.map((logo, idx) => (
            <div
              key={`r2-2-${idx}`}
              className="group flex items-center justify-center w-[120px] h-[40px] bg-slate-50 border border-slate-100 rounded-md transition-all duration-300 hover:border-indigo-accent/30 hover:bg-slate-50/50 cursor-pointer shrink-0"
            >
              <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-accent transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS-only keyframes styled inject */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 50s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
