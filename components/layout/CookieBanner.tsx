'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    // Set consent flag in localStorage
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);

    // Send GA4 consent update
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
      } catch (err) {
        console.error('Failed to update GA4 consent:', err);
      }
    }
  };

  const handleManagePreferences = () => {
    // For "Manage Preferences", we can just set it as accepted or close the banner for now, 
    // but we can also set the consent flag in localStorage and hide the banner.
    localStorage.setItem('cookie-consent', 'preferences');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-900 text-white border-t border-slate-700 py-4 md:py-3.5 px-gutter shadow-2xl">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Banner Text */}
        <p className="text-[14px] font-medium font-sans text-slate-300 text-center md:text-left leading-relaxed">
          We use cookies to improve your experience and analyse website traffic.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center">
          <Button
            onClick={handleManagePreferences}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/10 font-bold px-4 py-2"
          >
            Manage Preferences
          </Button>
          <Button
            onClick={handleAcceptAll}
            variant="primary"
            size="sm"
            className="bg-royal-blue hover:bg-[#1D4ED8] hover:shadow-[0_0_0_4px_rgba(37,99,235,0.2)] text-white font-bold px-6 py-2 w-full md:w-auto"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};
