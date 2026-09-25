/**
 * ProcessTimeline — Server Component.
 * One ordered list: a vertical timeline on mobile, five connected cards on desktop,
 * so each step's heading appears once in the HTML.
 */
import React from 'react';
import { Search, ClipboardList, Wrench, Rocket, RefreshCw } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const steps = [
  {
    title: 'Free audit',
    desc: 'We review your project pages, ad accounts, lead sources and how fast enquiries get a reply today.',
    phase: 'Before we start',
    output: 'Audit notes with the first fixes',
    Icon: Search,
  },
  {
    title: '90-day plan',
    desc: 'Channels, campaign structure, budget split, pages and WhatsApp flows — agreed with you before anything is built.',
    phase: 'Planning',
    output: 'A written plan you sign off',
    Icon: ClipboardList,
  },
  {
    title: 'Build',
    desc: 'Landing page, tracking, WhatsApp automation and CRM connection, tested with dummy leads from every source.',
    phase: 'Set-up',
    output: 'Page, tracking and flows, tested',
    Icon: Wrench,
  },
  {
    title: 'Launch',
    desc: 'Meta and Google campaigns go live, with every enquiry answered on WhatsApp within seconds.',
    phase: 'Go-live',
    output: 'Live campaigns, instant replies',
    Icon: Rocket,
  },
  {
    title: 'Optimise weekly',
    desc: 'Budgets move towards the campaigns producing site visits. You get a plain-language report every week.',
    phase: 'Every week',
    output: 'A weekly report on site visits',
    Icon: RefreshCw,
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-section-gap" id="process">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-[700px] mx-auto mb-14 lg:mb-20 section-reveal">
          <SectionLabel className="text-center">HOW WE WORK</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            From first call to booked site visits in five steps
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            The same process for a developer’s launch or a channel partner’s mandate — only the scale changes.
          </p>
        </div>

        <div className="relative">
          {/* Connector: horizontal through the icons on desktop, vertical on mobile */}
          <div
            data-reveal="line-x"
            className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"
            aria-hidden="true"
          />
          <div
            data-reveal="line-y"
            className="lg:hidden absolute left-7 top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600"
            aria-hidden="true"
          />

          <ol className="relative flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-5 stagger-reveal">
            {steps.map(({ title, desc, phase, output, Icon }, index) => {
              const last = index === steps.length - 1;
              return (
                <li key={title} className="group relative flex gap-5 lg:flex-col lg:gap-0">
                  {/* Icon node on the line */}
                  <div className="relative z-10 shrink-0 lg:mx-auto lg:mb-6">
                    <span
                      className={`flex h-14 w-14 lg:h-[104px] lg:w-[104px] items-center justify-center rounded-2xl lg:rounded-3xl border shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:shadow-lg ${
                        last
                          ? 'halo-pulse bg-blue-600 border-blue-600 text-white'
                          : 'bg-white border-slate-200 text-blue-600 group-hover:border-blue-300'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 lg:h-9 lg:w-9 transition-transform duration-500 group-hover:scale-110" />
                    </span>
                    <span
                      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white ring-4 ring-white"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div
                    className={`spotlight flex-1 rounded-2xl border p-5 lg:p-6 flex flex-col transition-shadow hover:shadow-md ${
                      last ? 'spotlight-dark bg-slate-900 border-slate-900' : 'bg-white border-slate-200'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                        last ? 'text-blue-300' : 'text-blue-700'
                      }`}
                    >
                      {phase}
                    </span>
                    <h3 className={`mt-2 text-lg font-bold ${last ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed flex-grow ${last ? 'text-slate-300' : 'text-slate-600'}`}>
                      {desc}
                    </p>
                    <p
                      className={`mt-5 border-t pt-4 text-[13px] font-semibold ${
                        last ? 'border-white/15 text-white' : 'border-slate-100 text-slate-800'
                      }`}
                    >
                      <span className={last ? 'text-blue-300' : 'text-slate-500'}>You get: </span>
                      {output}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
