import React from 'react';
import Link from 'next/link';

export const LogosStrip: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100 relative select-none" aria-label="Trusted clients">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <span className="font-sans text-[12px] font-bold tracking-[0.05em] uppercase text-slate-500 block mb-4">
          NOW ONBOARDING FOUNDING CLIENTS ACROSS INDIA
        </span>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-6">
          We are partnering with select businesses in Delhi, Noida, Lucknow, and Kanpur to build predictable client-acquisition engines.
        </p>
        <Link 
          href="/contact"
          className="text-sm font-bold text-royal-blue hover:text-royal-blue/80 transition-colors inline-flex items-center"
        >
          Become one of our first 10 founding clients &rarr;
        </Link>
      </div>
    </section>
  );
};
