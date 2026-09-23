/**
 * ProcessTimeline — Server Component.
 * One ordered list, laid out vertically on mobile and as a 5-column row on desktop,
 * so each step's heading appears once in the HTML.
 */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';

const steps = [
  {
    title: 'Free audit',
    desc: 'We review your project pages, ad accounts, lead sources and how fast enquiries get a reply today.',
  },
  {
    title: '90-day plan',
    desc: 'Channels, campaign structure, budget split, pages and WhatsApp flows — agreed with you before anything is built.',
  },
  {
    title: 'Build',
    desc: 'Landing page, tracking, WhatsApp automation and CRM connection, tested with dummy leads from every source.',
  },
  {
    title: 'Launch',
    desc: 'Meta and Google campaigns go live, with every enquiry answered on WhatsApp within seconds.',
  },
  {
    title: 'Optimise weekly',
    desc: 'Budgets move towards the campaigns producing site visits. You get a plain-language report every week.',
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="bg-white py-section-gap relative" id="process">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-[700px] mx-auto mb-16 lg:mb-20 section-reveal">
          <SectionLabel className="text-center">HOW WE WORK</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            From first call to booked site visits in five steps
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            The same process for a developer’s launch or a channel partner’s mandate — only the scale changes.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-[2px] -z-10 bg-slate-100" aria-hidden="true" />
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-slate-100 -z-10" aria-hidden="true" />

          <ol className="flex flex-col gap-12 lg:grid lg:grid-cols-5 lg:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-6 items-start lg:flex-col lg:items-center lg:text-center">
                <span
                  className="w-12 h-12 rounded-full border-2 border-royal-blue bg-white flex items-center justify-center font-bold text-royal-blue text-lg z-10 shadow-sm shrink-0 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="pt-2 lg:pt-0 section-reveal">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 lg:mt-6">{step.title}</h3>
                  <p className="text-body-md text-slate-500 leading-relaxed lg:max-w-[200px] lg:mx-auto">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
