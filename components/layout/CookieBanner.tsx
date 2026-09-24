'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Consent, OPEN_SETTINGS_EVENT, readConsent, saveConsent } from '../../lib/consent';

const categories: { key: keyof Consent; title: string; desc: string }[] = [
  { key: 'analytics', title: 'Analytics', desc: 'Google Analytics and Microsoft Clarity: which pages are visited and where people get stuck.' },
  { key: 'marketing', title: 'Marketing', desc: 'Meta Pixel and Google ads measurement: which ads bring enquiries.' },
];

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [choice, setChoice] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    if (!readConsent()) setVisible(true);
    const open = () => {
      setChoice(readConsent() ?? { analytics: false, marketing: false });
      setManaging(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const decide = (c: Consent) => {
    saveConsent(c);
    setVisible(false);
    setManaging(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 w-full z-[60] bg-slate-900 text-white border-t border-slate-700 py-4 md:py-3.5 px-gutter shadow-2xl"
    >
      <div className="max-w-container-max mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] font-medium font-sans text-slate-300 text-center md:text-left leading-relaxed">
            We use cookies for analytics and ads only if you allow them.{' '}
            <Link href="/privacy-policy" className="underline text-white hover:text-slate-200">
              Privacy Policy
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-center">
            <Button
              track={false}
              onClick={() => decide({ analytics: false, marketing: false })}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 font-bold px-4 py-2 min-h-[44px]"
            >
              Reject all
            </Button>
            <Button
              track={false}
              onClick={() => setManaging((m) => !m)}
              variant="ghost"
              size="sm"
              aria-expanded={managing}
              className="text-white hover:bg-white/10 font-bold px-4 py-2 min-h-[44px]"
            >
              Manage preferences
            </Button>
            <Button
              track={false}
              onClick={() => decide({ analytics: true, marketing: true })}
              variant="primary"
              size="sm"
              className="bg-royal-blue hover:bg-[#1D4ED8] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.2)] text-white font-bold px-6 py-2 min-h-[44px]"
            >
              Accept all
            </Button>
          </div>
        </div>

        {managing && (
          <div className="border-t border-slate-700 pt-4 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-sm">Essential</p>
                <p className="text-xs text-slate-300">Keeps the site working and remembers this choice. Always on.</p>
              </div>
              <span className="text-xs font-bold text-slate-300 shrink-0 pt-1">Always on</span>
            </div>
            {categories.map(({ key, title, desc }) => (
              <label key={key} className="flex items-start justify-between gap-4 cursor-pointer">
                <span>
                  <span className="block font-bold text-sm">{title}</span>
                  <span className="block text-xs text-slate-300">{desc}</span>
                </span>
                <input
                  type="checkbox"
                  checked={choice[key]}
                  onChange={(e) => setChoice((c) => ({ ...c, [key]: e.target.checked }))}
                  className="mt-1 h-5 w-5 shrink-0 accent-blue-500"
                />
              </label>
            ))}
            <div className="flex justify-end">
              <Button
              track={false}
                onClick={() => decide(choice)}
                variant="primary"
                size="sm"
                className="bg-royal-blue hover:bg-[#1D4ED8] text-white font-bold px-6 py-2 min-h-[44px]"
              >
                Save preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
