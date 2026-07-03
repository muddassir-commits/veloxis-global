'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface SubservicesDetailSectionProps {
  subservices: { name: string; items: string[] }[];
  accentColor: string;
  serviceId: string;
}

export const SubservicesDetailSection: React.FC<SubservicesDetailSectionProps> = ({ 
  subservices, 
  accentColor,
  serviceId
}) => {
  const [openSubserviceIndex, setOpenSubserviceIndex] = useState<number>(0);

  // Map accentColor to styles
  const accentColors: Record<string, { border: string }> = {
    teal: { border: 'border-teal-200' },
    indigo: { border: 'border-indigo-200' },
    orange: { border: 'border-orange-200' },
    purple: { border: 'border-purple-200' },
    cyan: { border: 'border-cyan-200' },
    gold: { border: 'border-amber-200' },
    green: { border: 'border-green-200' },
    navy: { border: 'border-blue-200' },
    red: { border: 'border-red-200' },
    gray: { border: 'border-slate-200' },
  };

  const currentAccent = accentColors[accentColor] || accentColors.teal;

  if (!subservices || subservices.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Menu Column */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {subservices.map((sub, idx) => {
          const isActive = openSubserviceIndex === idx;
          return (
            <button
              key={idx}
              id={`subservice-toggle-${serviceId}-${idx}`}
              onClick={() => setOpenSubserviceIndex(idx)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex justify-between items-center ${
                isActive 
                  ? `bg-white ${currentAccent.border} shadow-md border-l-4 border-l-royal-blue` 
                  : 'bg-white/50 border-slate-200/60 hover:bg-white hover:shadow-sm'
              }`}
            >
              <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                {sub.name}
              </span>
              <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-royal-blue' : 'text-slate-400'}`} />
            </button>
          );
        })}
      </div>

      {/* Items Column */}
      <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm min-h-[300px]">
        <h3 className="font-extrabold text-xl text-slate-900 border-b border-slate-100 pb-4 mb-6">
          {subservices[openSubserviceIndex]?.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {subservices[openSubserviceIndex]?.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">
              <div className="mt-1 shrink-0 p-0.5 rounded-full bg-teal-50">
                <Check className="w-3 h-3 text-teal-600" />
              </div>
              <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
