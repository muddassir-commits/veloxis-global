'use client';

import React, { useState } from 'react';
import { CheckCheck, Phone, Video, MoreVertical, Send, Smile, Paperclip, ShieldCheck } from 'lucide-react';

export interface WhatsAppFlowMockupProps {
  className?: string;
}

export const WhatsAppFlowMockup: React.FC<WhatsAppFlowMockupProps> = ({ className = '' }) => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>('₹70 L – 1 Cr');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSelectBudget = (budget: string) => {
    setSelectedBudget(budget);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 600);
  };

  return (
    <div
      className={`w-full max-w-[360px] mx-auto rounded-[2.5rem] bg-slate-950 p-3 shadow-2xl ring-1 ring-slate-800 transition-all duration-300 hover:shadow-emerald-950/20 ${className}`}
      role="region"
      aria-label="Interactive WhatsApp Lead Qualification Simulator"
    >
      {/* Phone chassis top speaker / notch bar */}
      <div className="flex items-center justify-between px-6 pt-2 pb-1 text-[11px] text-slate-400 font-mono">
        <span>10:02 PM</span>
        <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
        <div className="flex items-center gap-1.5">
          <span className="text-[10px]">5G</span>
          <span className="w-4 h-2 rounded-sm border border-slate-400 inline-block relative after:content-[''] after:absolute after:inset-0.5 after:bg-slate-300" />
        </div>
      </div>

      {/* Screen container */}
      <div className="overflow-hidden rounded-[2rem] bg-[#EFEAE2] flex flex-col border border-slate-800/40">
        {/* WhatsApp App Header */}
        <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-emerald-800 ring-2 ring-emerald-400/30 flex items-center justify-center font-bold text-xs text-emerald-100">
                GV
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#075E54]" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm leading-tight text-white">Green Valley Residency</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              </div>
              <span className="text-[10.5px] text-emerald-200/90 leading-none mt-0.5">Verified Business · Online</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Phone className="w-4 h-4 cursor-pointer hover:text-white" />
            <Video className="w-4 h-4 cursor-pointer hover:text-white" />
            <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Chat message stream */}
        <div className="flex flex-col gap-2.5 p-3.5 min-h-[380px] bg-[radial-gradient(#d1d7db_1px,transparent_1px)] [background-size:16px_16px]">
          
          {/* Security notice */}
          <div className="self-center bg-[#FFEECD] text-[#54656F] text-[10.5px] px-3 py-1 rounded-lg text-center max-w-[280px] shadow-xs">
            🔒 Messages are end-to-end encrypted. No third party can read them.
          </div>

          {/* 1. Buyer Message */}
          <div className="self-end max-w-[85%] rounded-2xl rounded-tr-none bg-[#DCF8C6] px-3.5 py-2 text-[12.5px] leading-snug text-slate-900 shadow-sm">
            <p>Hi, I saw your ad on Facebook. Interested in the 3 BHK flat details.</p>
            <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500 mt-1">
              <span>10:02 PM</span>
              <CheckCheck className="w-3.5 h-3.5 text-sky-500" />
            </div>
          </div>

          {/* 2. Instant Bot Response */}
          <div className="self-start max-w-[88%] rounded-2xl rounded-tl-none bg-white px-3.5 py-2.5 text-[12.5px] leading-snug text-slate-900 shadow-sm border border-black/5">
            <p className="font-semibold text-[#075E54] text-[11px] mb-1">Veloxis Lead Automation</p>
            <p>
              Hi Rahul! Thanks for your interest in <strong>[Your Project]</strong>, Gomti Nagar Extension 🏡
            </p>
            <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2 my-1.5 text-[11.5px] text-slate-700">
              <p className="font-semibold text-slate-900">📄 3 BHK Luxury Residences</p>
              <p>• Starting from ₹78 Lakhs</p>
              <p>• UP RERA no.: [your RERA number]</p>
              <p className="text-emerald-700 font-bold mt-1">✓ Digital Brochure Sent</p>
            </div>
            <p className="mt-1">To connect you with the project lead, what is your preferred budget range?</p>
            <div className="flex items-center justify-end text-[10px] text-slate-400 mt-1">
              <span>10:02 PM</span>
            </div>
          </div>

          {/* 3. Interactive Budget Selector Pills */}
          <div className="self-start w-full my-1 flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-1">Interactive Selection Demo:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: '1️⃣ Under ₹70 L', val: 'Under ₹70 L' },
                { label: '2️⃣ ₹70 L – 1 Cr', val: '₹70 L – 1 Cr' },
                { label: '3️⃣ Above ₹1 Cr', val: 'Above ₹1 Cr' },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => handleSelectBudget(opt.val)}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all border shadow-xs cursor-pointer ${
                    selectedBudget === opt.val
                      ? 'bg-[#075E54] text-white border-[#075E54]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-600'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Buyer Selection message */}
          {selectedBudget && (
            <div className="self-end max-w-[85%] rounded-2xl rounded-tr-none bg-[#DCF8C6] px-3.5 py-2 text-[12.5px] leading-snug text-slate-900 shadow-sm animate-in fade-in duration-200">
              <p>{selectedBudget}</p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500 mt-1">
                <span>10:03 PM</span>
                <CheckCheck className="w-3.5 h-3.5 text-sky-500" />
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="self-start rounded-full bg-white px-3 py-1 text-[11px] text-slate-400 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          {/* 5. Instant Bot Site Visit Booking Offer */}
          {!isTyping && selectedBudget && (
            <div className="self-start max-w-[88%] rounded-2xl rounded-tl-none bg-white px-3.5 py-2.5 text-[12.5px] leading-snug text-slate-900 shadow-sm border border-black/5 animate-in fade-in duration-300">
              <p>
                Perfect! We have 2 corner units in Tower B matching the <strong>{selectedBudget}</strong> bracket.
              </p>
              <p className="mt-1.5">
                Would you like to book a private VIP site visit this weekend?
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-bold">
                <span>📅 Priority Slot Reserved</span>
                <span className="text-[10px] text-slate-400">10:03 PM</span>
              </div>
            </div>
          )}

        </div>

        {/* WhatsApp Mock Input Bar */}
        <div className="bg-[#F0F2F5] px-3 py-2 flex items-center gap-2 border-t border-slate-200">
          <Smile className="w-5 h-5 text-slate-500 shrink-0" />
          <Paperclip className="w-5 h-5 text-slate-500 shrink-0" />
          <div className="flex-grow bg-white rounded-full px-3 py-1 text-xs text-slate-400 border border-slate-200 truncate">
            Type your reply...
          </div>
          <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Send className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>
      </div>
      <div className="text-center pt-2 text-[10px] text-slate-400">
        ⚡ 60-Second Instant Lead Qualification Engine
      </div>
    </div>
  );
};
