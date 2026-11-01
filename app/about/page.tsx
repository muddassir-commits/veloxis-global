import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Target, Eye, Users, CheckCircle, MapPin } from 'lucide-react';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { getWebPageSchema } from '../../lib/schema';
import { servicesData } from '../../data/services-data';
import { siteData } from '../../data/site';
import { aboutFaqs } from '../../data/page-faqs';

export const metadata: Metadata = constructMetadata(pageMeta.about);

const values = [
  { icon: <Target className="w-5 h-5 text-royal-blue" />, title: 'Results, not clicks', desc: 'Every campaign is reported on enquiries, site visits or orders — the numbers your sales team cares about.' },
  { icon: <Eye className="w-5 h-5 text-royal-blue" />, title: 'Your accounts, your data', desc: 'Ads run from your own Google and Meta accounts, and lead data stays in your CRM or sheet.' },
  { icon: <Users className="w-5 h-5 text-royal-blue" />, title: 'No middlemen', desc: 'You work directly with the people planning your campaigns, not a rotating account manager.' },
  { icon: <MapPin className="w-5 h-5 text-royal-blue" />, title: 'Three industries, not thirty', desc: 'Real estate first, plus D2C brands and local businesses. We stay in industries we know well instead of taking everyone.' },
];

const steps = [
  { title: 'Audit', desc: 'We review your project pages, ad accounts, lead sources and how fast enquiries are answered today.' },
  { title: 'Plan', desc: 'A 90-day plan covering channels, campaign structure, budget split, pages and WhatsApp flows.' },
  { title: 'Build', desc: 'Landing page, tracking, WhatsApp automation and CRM connection, tested before launch.' },
  { title: 'Launch', desc: 'Meta and Google campaigns go live with every enquiry answered on WhatsApp in seconds.' },
  { title: 'Optimise', desc: 'Weekly changes towards the campaigns producing site visits, with a plain-language report.' },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'AboutPage',
          name: 'About Veloxis Global',
          description: pageMeta.about.description,
          path: '/about',
        })}
      />

      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true"></div>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
              About Veloxis Global
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Digital marketing judged on results, not clicks
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">{siteData.definition}</p>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We started Veloxis Global to give businesses one thing most agencies don’t: marketing that’s judged on
              enquiries, site visits and orders, not impressions.
            </p>
          </div>
          <div className="lg:col-span-4 w-full max-w-sm mx-auto lg:max-w-none">
            <ImageFrame
              src="/images/people/about/campaign-planning-session.jpg"
              alt="Two people planning a marketing campaign together at a laptop"
              ratio="4/3"
              sizes="(max-width: 1024px) 384px, 30vw"
              priority
              className="shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-base leading-relaxed">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">Why Veloxis Global exists</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Leads were never the whole problem</h2>
            <p>
              Real estate businesses spend heavily on ads, portals and brokers, yet the same complaints come up again and
              again: leads that don’t pick up, enquiries answered the next morning, and ad reports full of clicks that never
              became site visits.
            </p>
            <p>
              The fix isn’t just more leads. It’s a connected system: a page built for the project, ads that bring
              exclusive enquiries, and follow-up that happens in seconds instead of hours. That is what Veloxis Global
              builds, mainly for real estate, as three services that work together.
            </p>
            <div className="border-l-4 border-royal-blue pl-4 py-2 my-2 italic text-slate-900 font-semibold bg-slate-50">
              We don’t just run ads. We build the path from the ad to the site visit — and measure every step of it.
            </div>
            <p>
              We are based in Noida and work with developers and builders, channel partners and brokers across Noida,
              Greater Noida, the wider Delhi NCR, Lucknow and Kanpur. We also work with{' '}
              <Link href="/d2c" className="font-semibold text-royal-blue hover:underline">D2C brands</Link> and{' '}
              <Link href="/local-business" className="font-semibold text-royal-blue hover:underline">local businesses</Link>{' '}
              in India and abroad.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 section-reveal">
              <h2 className="text-xs font-extrabold text-royal-blue uppercase tracking-wider mb-4">What we do</h2>
              <ul className="flex flex-col gap-3.5 text-sm font-semibold text-slate-700">
                {servicesData.map((s) => (
                  <li key={s.slug} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" aria-hidden="true" />
                    <Link href={`/services/${s.slug}`} className="hover:text-royal-blue transition-colors">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 stagger-reveal">
              <div className="spotlight spotlight-dark bg-slate-900 text-white p-5 rounded-2xl text-left">
                <span className="text-2xl sm:text-3xl font-black text-royal-blue block">3</span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mt-1">Google certifications</span>
              </div>
              <div className="spotlight spotlight-dark bg-slate-900 text-white p-5 rounded-2xl text-left">
                <span className="text-2xl sm:text-3xl font-black text-teal-accent block">3</span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mt-1">Industries we serve</span>
              </div>
            </div>
            <ImageFrame
              src="/images/people/about/reviewing-printed-chart.jpg"
              alt="Person reviewing a printed chart of campaign results"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How we work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Five steps from audit to site visits</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 stagger-reveal">
            {steps.map((s, i) => (
              <li key={s.title} className="group spotlight bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <span className="text-3xl font-black text-slate-200 transition-colors duration-500 group-hover:text-royal-blue" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-extrabold text-slate-900 mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-center mt-10 text-sm text-slate-600">
            Want to see this applied to a real scenario? Read our{' '}
            <Link href="/playbooks" className="font-bold text-royal-blue hover:underline">example playbooks</Link>.
          </p>
        </div>
      </section>

      {/* Operating model */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-last lg:order-first">
            <ImageFrame
              src="/images/people/about/campaign-planning-session.jpg"
              alt="Two people planning a marketing campaign together at a laptop, one taking notes"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="shadow-xl border border-slate-100"
            />
          </div>
        <div className="lg:col-span-6 flex flex-col items-start gap-4 section-reveal">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">How the agency is set up</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Lean by design</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Veloxis Global is a lean agency. Our core team plans and oversees every account, and works with a small
            network of landing page developers, ad specialists and automation engineers, bringing in the right people for
            each project. No bloated retainer, and no junior account manager between you and the person doing the work.
          </p>
        </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What you can expect</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Four commitments</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 max-w-md w-full mx-auto lg:max-w-none">
            <ImageFrame
              src="/images/people/about/colleague-office-lounge.jpg"
              alt="A smiling man in a waistcoat holding a mug during an informal office conversation"
              ratio="4/5"
              sizes="(max-width: 1024px) 448px, 30vw"
              position="center top"
              className="shadow-xl border border-slate-100"
            />
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-reveal">
            {values.map((v) => (
              <div key={v.title} className="group spotlight bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-slate-50 shadow-sm flex items-center justify-center mb-5 border border-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>


      <FaqAccordion
        title="About Veloxis Global"
        badgeText="FAQ"
        description="Quick answers about who we are and how we work."
        customFaqs={aboutFaqs}
      />

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" aria-hidden="true"></div>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob left-1/2 top-1/2 -ml-48 -mt-48 w-96 h-96 bg-[rgba(37,99,235,0.28)]" />
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 section-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Talk to us directly</h2>
            <p className="text-slate-300 text-base">
              Book a 30-minute call to walk through your project, your current lead flow and what we would change first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link href={siteData.booking} target="_blank" rel="noopener noreferrer" className="btn-shine bg-royal-blue text-white px-8 py-4 font-bold rounded-lg transition-all hover:bg-royal-blue/90 hover:shadow-[0_0_0_4px_rgba(37,99,235,0.3)] w-full sm:w-auto text-center">
                Book a call →
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-4 font-bold rounded-lg transition-colors text-white w-full sm:w-auto text-center">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
