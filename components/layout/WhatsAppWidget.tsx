'use client';

import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { siteData } from '../../data/site';

export const WhatsAppWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Appears after 1.5 seconds page load delay
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(showTimer);
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center">
      <a
        href={siteData.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_8px_24px_rgba(18,140,126,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(18,140,126,0.5)] focus:outline-none"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp glyph */}
        <WhatsAppIcon variant="current" className="w-5 h-5 shrink-0" />

        <span className="text-sm font-bold tracking-tight pr-1">Chat with us</span>
      </a>
    </div>
  );
};
