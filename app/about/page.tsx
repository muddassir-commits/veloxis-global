import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Target, Eye, Users, ExternalLink, Award, CheckCircle, MapPin } from 'lucide-react';
import { Linkedin } from '../../components/ui/BrandIcons';
import { constructMetadata, pageMeta, FOUNDER_YEARS } from '../../lib/seo-config';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { getWebPageSchema } from '../../lib/schema';
import { servicesData } from '../../data/services-data';
import { siteData } from '../../data/site';
import { aboutFaqs } from '../../data/page-faqs';

export const metadata: Metadata = constructMetadata(pageMeta.about);

// Course pages on Google Skillshop. Replace with personal credential URLs when available.
const certifications = [
  {
    title: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    link: 'https://skillshop.exceedlms.com/student/path/18128-google-ads-search-certification',
  },
  {
    title: 'Google Analytics Certification',
    issuer: 'Google Skillshop',
    link: 'https://skillshop.exceedlms.com/student/path/29485-google-analytics-individual-qualification',
  },
];

const values = [
  { icon: <Target className="w-5 h-5 text-royal-blue" />, title: 'Site visits, not clicks', desc: 'Every campaign is reported on leads, site visits and cost per site visit — the numbers your sales team cares about.' },
  { icon: <Eye className="w-5 h-5 text-royal-blue" />, title: 'Your accounts, your data', desc: 'Ads run from your own Google and Meta accounts, and lead data stays in your CRM or sheet.' },
  { icon: <Users className="w-5 h-5 text-royal-blue" />, title: 'Founder on every account', desc: 'You work directly with the person planning your campaigns, not a rotating account manager.' },
  { icon: <MapPin className="w-5 h-5 text-royal-blue" />, title: 'Real estate only', desc: 'We don’t split attention across industries. Launches, inventory, RERA, CP programmes — it’s all we work on.' },
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

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-royal-blue/20 blur-[128px]" aria-hidden="true"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-royal-blue uppercase tracking-wider">
              About Veloxis Global
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              A founder-led real estate marketing agency
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              I’m Muddassir Ali. I started Veloxis Global to give builders, brokers and channel partners one thing most
              agencies don’t: marketing that’s judged on site visits and bookings, not impressions.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden">
              <Image src="/images/profiles/muddassir.jpg" alt="Muddassir Ali, founder of Veloxis Global" fill priority sizes="256px" className="object-cover" />
            </div>
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
              builds — only for real estate, and only as three services that work together.
            </p>
            <div className="border-l-4 border-royal-blue pl-4 py-2 my-2 italic text-slate-900 font-semibold bg-slate-50">
              We don’t just run ads. We build the path from the ad to the site visit — and measure every step of it.
            </div>
            <p>
              We work with developers and builders, channel partners and brokers across Kanpur, Lucknow, Noida, Greater
              Noida and the wider Delhi NCR, and run campaigns for projects elsewhere in India.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h2 className="text-xs font-extrabold text-royal-blue uppercase tracking-wider mb-4">What we do</h2>
              <ul className="flex flex-col gap-3.5 text-sm font-semibold text-slate-700">
                {servicesData.map((s) => (
                  <li key={s.slug} className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-royal-blue shrink-0" aria-hidden="true" />
                    <Link href={`/services/${s.slug}`} className="hover:text-royal-blue">{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 text-white p-5 rounded-2xl text-left">
                <span className="text-2xl sm:text-3xl font-black text-royal-blue block">{FOUNDER_YEARS}+ yrs</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">Founder experience</span>
              </div>
              <div className="bg-slate-900 text-white p-5 rounded-2xl text-left">
                <span className="text-2xl sm:text-3xl font-black text-teal-accent block">1</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mt-1">Industry: real estate</span>
              </div>
            </div>
            <div className="relative w-full min-h-[220px] rounded-2xl overflow-hidden border border-slate-100">
              <Image src="/images/sections/about-story.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How we work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Five steps from audit to site visits</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white border border-slate-100 rounded-2xl p-6">
                <span className="text-3xl font-black text-slate-200" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
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
        <div className="max-w-3xl mx-auto px-gutter flex flex-col items-start gap-4">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">How the agency is set up</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Lean by design</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Veloxis Global is a lean, founder-led agency. I plan and oversee every account myself, and work with a small
            network of landing page developers, ad specialists and automation engineers, bringing in the right people for
            each project. No bloated retainer, and no junior account manager between you and the person doing the work.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certifications.map((c) => (
              <div key={c.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                  <Award className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">{c.title}</h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{c.issuer}</span>
                <Link href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-royal-blue hover:underline mt-auto">
                  Course details ↗
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What you can expect</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Four commitments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-100" aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-left" id="founder">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-[380px] mx-auto bg-slate-100 aspect-[4/5]">
              <Image src="/images/profiles/Muddassir_Ali.webp" alt="Portrait of Muddassir Ali" fill sizes="380px" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-700 text-base leading-relaxed">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">Meet the founder</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Muddassir Ali</h2>
            <span className="text-sm font-bold text-slate-500 -mt-4 uppercase tracking-widest block">Founder, Veloxis Global</span>
            <p>
              Muddassir has worked in digital marketing for over {FOUNDER_YEARS} years, focusing on lead generation, landing
              pages, Meta and Google Ads, and sales automation. Working with developers, brokers and channel partners, he kept
              seeing the same pattern: money spent on ads, and leads lost to slow or missing follow-up.
            </p>
            <p>
              He started Veloxis Global to fix that with one connected system for real estate — landing pages, ads and
              WhatsApp automation — and still plans and oversees every client account personally.
            </p>
            <p>He holds Google certifications in Google Ads and Analytics, and is HubSpot certified.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link href="https://www.linkedin.com/in/muddassir-alii/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-royal-blue hover:bg-royal-blue/90 transition-colors px-6 py-3 rounded-xl text-xs font-bold text-white">
                <span>Connect on LinkedIn ↗</span>
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link href="https://muddassirali.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-white transition-colors px-6 py-3 rounded-xl text-xs font-bold text-slate-700">
                <span>Founder portfolio ↗</span>
                <ExternalLink className="w-4 h-4 text-slate-500" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        title="About Veloxis Global"
        badgeText="FAQ"
        description="Quick answers about who we are and how we work."
        customFaqs={aboutFaqs(FOUNDER_YEARS)}
      />

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" aria-hidden="true"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Talk to Muddassir directly</h2>
            <p className="text-slate-300 text-base">
              Book a 30-minute call to walk through your project, your current lead flow and what we would change first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link href={siteData.booking} target="_blank" rel="noopener noreferrer" className="bg-royal-blue text-white px-8 py-4 font-bold rounded-lg transition-colors hover:bg-royal-blue/90 w-full sm:w-auto text-center">
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
