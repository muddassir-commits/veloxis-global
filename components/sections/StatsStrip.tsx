'use client';

import React from 'react';

export const StatsStrip: React.FC = () => {
  const row1Logos = [
    'Malhotra Properties', 'SkillEdge Academy', 'Verma Health Group', 'Gupta Fabrics',
    'Bloom Skincare', 'Vikas Textiles', 'Noida Tech Labs', 'Delhi Retail Corp'
  ];

  const row2Logos = [
    'Hindustan Builders', 'Lucknow Hotel Group', 'Apex Diagnostics', 'Kanpur Leather Exports',
    'CP Retailers', 'Saket Dental Care', 'NCR Coworking', 'Indira Nagar Edutech'
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter text-center mb-8">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
          TRUSTED BY GROWING BUSINESSES ACROSS NORTH INDIA
        </span>
      </div>

      {/* Marquee Row 1 - Left scroll */}
      <div className="flex w-full overflow-hidden relative select-none mb-6">
        <div className="flex gap-16 min-w-full justify-around items-center animate-marquee shrink-0">
          {row1Logos.concat(row1Logos).map((logo, idx) => (
            <span
              key={idx}
              className="text-lg sm:text-xl font-extrabold text-slate-300 hover:text-royal-blue transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right scroll */}
      <div className="flex w-full overflow-hidden relative select-none">
        <div className="flex gap-16 min-w-full justify-around items-center animate-marquee-reverse shrink-0">
          {row2Logos.concat(row2Logos).map((logo, idx) => (
            <span
              key={idx}
              className="text-lg sm:text-xl font-extrabold text-slate-300 hover:text-indigo-accent transition-colors duration-300 whitespace-nowrap cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes styles injector */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
