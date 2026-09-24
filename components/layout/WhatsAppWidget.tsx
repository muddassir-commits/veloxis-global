'use client';

import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { siteData } from '../../data/site';

export const WhatsAppWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Appears after 3 seconds page load delay
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(showTimer);
  }, []);

  // Pulse animation: appears every 5s for 1s duration
  useEffect(() => {
    if (!visible) return;
    const pulseInterval = setInterval(() => {
      setPulse(true);
      const disableTimer = setTimeout(() => setPulse(false), 1000);
      return () => clearTimeout(disableTimer);
    }, 5000);
    return () => clearInterval(pulseInterval);
  }, [visible]);

  if (!visible) return null;

  const whatsappUrl = siteData.whatsappLink;

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-6 z-50 group">
      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
        {/* Tooltip Arrow */}
        <div className="absolute top-full right-6 w-2 h-2 bg-slate-900 transform rotate-45 -translate-y-1"></div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-br from-[#2CDA6F] to-[#1DA851] text-white rounded-full shadow-[0_8px_24px_rgba(29,168,81,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(29,168,81,0.55)] focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring animation */}
        {pulse && (
          <span className="absolute inset-0 rounded-full ring-4 ring-green-300 opacity-75 animate-ping"></span>
        )}

        {/* WhatsApp SVG Icon, white, 28px */}
        <WhatsAppIcon className="w-[28px] h-[28px] relative z-10" />
      </a>
    </div>
  );
};
