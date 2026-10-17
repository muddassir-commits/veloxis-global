import React from 'react';
import Link from 'next/link';
import { FileBarChart2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteData } from '../../data/site';

export const StickyMobileBar: React.FC = () => {
  return (
    <nav
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden px-3 py-2"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={siteData.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-11 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-950/20 active:scale-95 transition-all"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon variant="current" className="w-4 h-4 shrink-0" />
          <span>Chat with us</span>
        </a>

        <Link
          href="/free-audit"
          className="flex-1 flex items-center justify-center gap-1.5 h-11 px-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold text-xs shadow-md shadow-slate-950/20 active:scale-95 transition-all text-center"
        >
          <FileBarChart2 className="w-3.5 h-3.5 text-royal-blue shrink-0" />
          <span>Free Marketing Audit</span>
        </Link>
      </div>
    </nav>
  );
};
