import React from 'react';
import { MessageSquare, Clock, CheckCheck, Zap, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const WhatsAppFlowSimulator: React.FC = () => {
  return (
    <section className="my-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm text-left">
      <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
        <MessageSquare className="w-4 h-4" />
        <span>Live Automation Architecture</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        How Real Estate WhatsApp Automation Qualifies Buyers in Seconds
      </h2>

      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
        Over 68% of property enquiries in India arrive after 7:00 PM when sales offices are closed. Here is how our automated conversational system captures and books them before they call competing projects.
      </p>

      {/* Simulated Chat Interface */}
      <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-slate-200 bg-[#EFEAE2] shadow-md mb-8">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-sm">
              VG
            </div>
            <div>
              <p className="font-bold text-sm leading-tight">Veloxis Real Estate Assistant</p>
              <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                Verified Business · Instant Reply
              </p>
            </div>
          </div>
          <span className="text-xs bg-emerald-700/60 px-2 py-0.5 rounded text-emerald-100 font-mono">11:15 PM</span>
        </div>

        {/* Chat Body */}
        <div className="p-4 flex flex-col gap-3 font-sans text-xs sm:text-sm">
          {/* Buyer Message 1 */}
          <div className="self-end bg-[#DCF8C6] text-slate-900 p-3 rounded-xl rounded-tr-none max-w-[80%] shadow-sm">
            <p>Hi, I saw your Shaheed Path 3 BHK project ad on Instagram. Please send the brochure and price list.</p>
            <span className="text-[10px] text-slate-500 float-right mt-1 ml-2">11:15 PM · Delivered</span>
          </div>

          {/* Bot Message 1 */}
          <div className="self-start bg-white text-slate-900 p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-sm">
            <p className="font-semibold text-emerald-700 mb-1">Namaste! Welcome to Grand Residency, Lucknow.</p>
            <p className="text-slate-600 mb-2">Here is the verified RERA Project Brochure &amp; Master Layout (RERA: UPRERAPRJ984712):</p>
            <div className="p-2 bg-slate-50 rounded border border-slate-200 flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-[10px]">PDF</div>
              <span className="text-xs font-semibold text-slate-800">Grand_Residency_Brochure_2026.pdf (4.2 MB)</span>
            </div>
            <p className="text-slate-600">Which configuration best fits your requirement?</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200 font-semibold text-xs">2 BHK (₹58L+)</span>
              <span className="px-2.5 py-1 bg-emerald-600 text-white rounded-full font-semibold text-xs">3 BHK (₹82L+) ✓</span>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200 font-semibold text-xs">4 BHK Luxury</span>
            </div>
            <span className="text-[10px] text-slate-400 float-right mt-1">11:15 PM · Sent</span>
          </div>

          {/* Buyer Message 2 */}
          <div className="self-end bg-[#DCF8C6] text-slate-900 p-3 rounded-xl rounded-tr-none max-w-[80%] shadow-sm">
            <p>3 BHK. We want to visit the site this weekend.</p>
            <span className="text-[10px] text-slate-500 float-right mt-1 ml-2">11:16 PM · Delivered</span>
          </div>

          {/* Bot Message 2 */}
          <div className="self-start bg-white text-slate-900 p-3 rounded-xl rounded-tl-none max-w-[85%] shadow-sm">
            <p className="font-semibold text-emerald-700 mb-1">Perfect! We have reserved site visit slots this Saturday:</p>
            <div className="flex flex-col gap-1.5 my-2">
              <div className="p-2 bg-emerald-50 border border-emerald-300 rounded font-semibold text-emerald-900 flex items-center justify-between">
                <span>Saturday, 11:30 AM (Preferred)</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-700">
                <span>Saturday, 3:30 PM</span>
              </div>
            </div>
            <p className="text-slate-600">Site location pin and sample flat walkthrough video have been generated for you.</p>
            <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Lead instantly synchronized to CRM with CP/Ad attribution source.</span>
            </div>
            <span className="text-[10px] text-slate-400 float-right mt-1">11:16 PM · Sent</span>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white border border-rose-200">
          <h3 className="font-bold text-rose-800 text-sm mb-2 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-rose-600" />
            <span>Traditional Telecaller Follow-Up</span>
          </h3>
          <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
            <li>• Average first response delay: <strong>8 to 16 hours</strong></li>
            <li>• Night enquiries sit unattended until 10:30 AM next day</li>
            <li>• Up to <strong>65% of buyers become unresponsive</strong> or cold</li>
            <li>• High telecaller salary overhead and recurring churn</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-white border border-emerald-300 bg-emerald-50/20">
          <h3 className="font-bold text-emerald-800 text-sm mb-2 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Veloxis Automated WhatsApp Engine</span>
          </h3>
          <ul className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
            <li>• First response time: <strong>Under 10 seconds</strong> (24/7/365)</li>
            <li>• Automatic RERA brochure and cost sheet delivery</li>
            <li>• <strong>3.2x higher site-visit booking rate</strong> from paid ads</li>
            <li>• Real-time CRM synchronization with Sell.Do, LeadSquared &amp; Zoho</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
