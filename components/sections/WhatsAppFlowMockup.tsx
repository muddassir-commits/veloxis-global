import React from 'react';
import { CheckCheck } from 'lucide-react';

// Illustrative phone mockup of the instant WhatsApp reply a buyer gets after enquiring.
// Sample project and buyer only; shown as "Example" so it never reads as a real client chat.
const messages = [
  { from: 'buyer', text: 'Hi, I saw your ad. Interested in the 3 BHK.', time: '10:02 PM' },
  {
    from: 'bot',
    text: 'Hi Rahul, thanks for your interest in Green Valley Residency, Gomti Nagar Extension 🏡\n\n3 BHK from ₹78 L · RERA registered\nBrochure and floor plans attached below.',
    time: '10:02 PM',
  },
  { from: 'bot', text: 'To share the right options, what is your budget?\n1️⃣ Under ₹70 L\n2️⃣ ₹70 L – 1 Cr\n3️⃣ Above ₹1 Cr', time: '10:02 PM' },
  { from: 'buyer', text: '2', time: '10:03 PM' },
  { from: 'bot', text: 'Great. Would you like a site visit this weekend? Reply with a day and our team will confirm the time.', time: '10:03 PM' },
];

export const WhatsAppFlowMockup: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`w-full max-w-[340px] rounded-[2.25rem] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800 ${className}`}
    role="img"
    aria-label="Example WhatsApp chat: a buyer enquires at 10 PM and gets an instant reply with project details, a budget question and a site visit offer"
  >
    <div className="overflow-hidden rounded-[1.75rem] bg-[#efe7dd]">
      <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">GV</div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold leading-tight">Green Valley Residency</p>
          <p className="text-[11px] text-white/70">Business account</p>
        </div>
        <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Example</span>
      </div>
      <div className="flex flex-col gap-2 px-3 py-4" aria-hidden="true">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-3 py-2 text-[12.5px] leading-snug text-slate-800 shadow-sm whitespace-pre-line ${
              m.from === 'buyer' ? 'self-end rounded-tr-none bg-[#d9fdd3]' : 'self-start rounded-tl-none bg-white'
            }`}
          >
            {m.text}
            <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
              {m.time}
              {m.from === 'buyer' && <CheckCheck className="h-3 w-3 text-sky-500" />}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
