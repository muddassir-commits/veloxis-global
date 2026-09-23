import React from 'react';
import Link from 'next/link';
import { Phone, FileBarChart2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteData } from '../../data/site';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        <a 
          href={`tel:${siteData.phoneRaw}`}
          className="flex flex-col items-center justify-center w-full h-full text-slate-600 hover:text-royal-blue transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">Call</span>
        </a>
        
        <div className="w-[1px] h-8 bg-slate-200"></div>
        
        <a 
          href={`https://wa.me/${siteData.phoneRaw}?text=Hi%20Veloxis%20Global,%20I%20would%20like%20to%20discuss%20a%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full text-[#25D366] hover:text-[#1da851] transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold text-emerald-800">WhatsApp</span>
        </a>
        
        <div className="w-[1px] h-8 bg-slate-200"></div>
        
        <Link 
          href="/contact"
          className="flex flex-col items-center justify-center w-full h-full text-indigo-accent hover:text-indigo-600 transition-colors"
        >
          <FileBarChart2 className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold">Get Audit</span>
        </Link>
      </div>
    </div>
  );
};
