/**
 * ProcessTimeline — Server Component.
 * Four simple steps. One ordered list: each step's heading appears once in the HTML.
 */
import React from 'react';
import { Search, ClipboardList, Rocket, RefreshCw } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const steps = [
  { title: 'Free audit', desc: 'We look at your store, ads and tracking, and tell you what to fix first.', Icon: Search },
  { title: 'Plan', desc: 'A short written plan you approve before we build anything.', Icon: ClipboardList },
  { title: 'Launch', desc: 'We set everything up, test it, then go live.', Icon: Rocket },
  { title: 'Improve weekly', desc: 'Every week you get a plain report, and we move budget to what works.', Icon: RefreshCw },
];

export const ProcessTimeline: React.FC = () => (
  <section className="relative overflow-hidden bg-white py-section-gap" id="process">
    <div className="relative max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16 section-reveal">
        <SectionLabel className="text-center">HOW WE WORK</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
          From free audit to results in four steps
        </h2>
        <p className="text-body-lg text-slate-500 max-w-[560px] mx-auto text-center mt-4">
          Same simple process for every business.
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-reveal">
        {steps.map(({ title, desc, Icon }, index) => (
          <li
            key={title}
            className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            <span className="absolute right-6 top-5 text-5xl font-extrabold text-slate-200 transition-colors group-hover:text-blue-100" aria-hidden="true">
              {index + 1}
            </span>
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-blue to-blue-400 text-white shadow-md shadow-blue-600/20"
              aria-hidden="true"
            >
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
