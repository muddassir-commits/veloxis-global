'use client';

import React, { useState, useEffect } from 'react';

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

  const whatsappUrl = "https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
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
        className="relative flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring animation */}
        {pulse && (
          <span className="absolute inset-0 rounded-full ring-4 ring-green-300 opacity-75 animate-ping"></span>
        )}
        
        {/* WhatsApp SVG Icon, white, 28px */}
        <svg
          className="w-[28px] h-[28px] fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 0 0-6.98-2.879c-5.443 0-9.876 4.373-9.88 9.802-.001 1.765.474 3.489 1.377 5.01L1.92 21.65l5.807-1.517.92.547zm13.109-7.89c-.33-.165-1.951-.951-2.252-1.059-.3-.109-.521-.163-.74.163-.219.327-.848 1.059-1.039 1.277-.19.218-.38.245-.71.082-1.121-.559-1.925-.979-2.695-2.278-.2-.34.2-.315.571-1.047.061-.123.03-.23-.015-.313-.045-.082-.41-1.004-.562-1.368-.148-.354-.298-.306-.41-.312-.107-.006-.23-.007-.353-.007-.123 0-.323.046-.492.23-.169.184-.645.623-.645 1.519 0 .896.658 1.764.75 1.887.093.123 1.294 1.956 3.135 2.736.438.185.78.295 1.047.379.44.139.84.12 1.157.073.354-.053 1.059-.429 1.208-.844.149-.415.149-.77.104-.844-.045-.074-.165-.12-.495-.285z" />
        </svg>
      </a>
    </div>
  );
};
