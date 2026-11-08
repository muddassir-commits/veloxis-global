import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { AudiencePageTemplate } from '../../../components/services/AudiencePageTemplate';
import { AudienceSplit } from '../../../components/sections/AudienceSplit';
import { LeadSystemCallout } from '../../../components/sections/LeadSystemCallout';
import { NicheGuides } from '../../../components/sections/NicheGuides';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { audiences } from '../../../data/audiences';
import { realEstateFaqs } from '../../../data/faqs';
import { getServiceSchema } from '../../../lib/schema';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// Real estate niche page (one of three equal niches since 8 Nov 2026). Hub for every real estate page:
// Lead System, channel partners, NRI buyers, playbooks and the city pages stay live and are linked from here.
export const metadata: Metadata = constructMetadata(pageMeta.developers);

// General real estate questions that used to be on the homepage, added to the developer FAQs.
const movedFromHome = [
  'How is a real estate digital marketing agency different from a general one?',
  'Which is better for real estate: Google Ads or Meta ads?',
  'How do you deal with fake or low-quality leads?',
  'How soon can campaigns start producing leads?',
];

const hubLinks = [
  { href: '/real-estate-lead-system', title: 'Real Estate Lead System', desc: 'Meta ads, a project landing page and instant WhatsApp replies, set up and run as one system.' },
  { href: '/channel-partners', title: 'For channel partners & brokers', desc: 'Exclusive leads for the projects you are mandated on, under your own brand.' },
  { href: '/industries/real-estate/nri-buyers', title: 'NRI buyer campaigns', desc: 'Reach Indians in the UAE, UK and US with an NRI project page and replies in their time zone.' },
  { href: '/playbooks', title: 'Example playbooks', desc: 'Example plans for launches, landing pages and WhatsApp flows. Examples, not client results.' },
];

const cities = [
  { href: '/digital-marketing-agency-noida', name: 'Noida' },
  { href: '/digital-marketing-agency-lucknow', name: 'Lucknow' },
  { href: '/digital-marketing-agency-kanpur', name: 'Kanpur' },
];

export default function RealEstatePage() {
  const base = audiences.developers;
  const extra = realEstateFaqs.filter((f) => movedFromHome.includes(f.question));
  const audience = {
    ...base,
    breadcrumb: 'Real Estate',
    parent: { name: 'Industries', href: '/industries' },
    eyebrow: 'Real estate marketing',
    h1: 'Real estate marketing agency for builders, developers and brokers',
    faqs: [...extra, ...base.faqs.filter((f) => !extra.some((e) => e.question === f.question))],
  };

  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: 'Real estate marketing for developers, builders and brokers',
          description: pageMeta.developers.description,
          path: audience.path,
          serviceType: 'Real estate marketing',
          audience: 'Real estate developers, builders, brokers and channel partners',
        })}
      />
      <AudiencePageTemplate
        audience={audience}
        beforeFaq={
          <>
            <AudienceSplit />
            <section className="bg-white py-section-gap" aria-labelledby="re-hub-heading">
              <div className="max-w-container-max mx-auto px-gutter">
                <div className="max-w-2xl mb-10 section-reveal">
                  <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">More for real estate</span>
                  <h2 id="re-hub-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Everything we offer property businesses
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
                  {hubLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group spotlight flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                    >
                      <h3 className="font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">{l.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2 flex-grow">{l.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-royal-blue">
                        Open <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4 text-royal-blue" aria-hidden="true" /> Real estate marketing by city:
                  </span>
                  {cities.map((c) => (
                    <Link key={c.href} href={c.href} className="font-bold text-royal-blue hover:underline">
                      {c.name}
                    </Link>
                  ))}
                </p>
              </div>
            </section>
            <LeadSystemCallout className="bg-slate-50" />
            <NicheGuides industry="real-estate" title="Latest guides for real estate" className="bg-white" />
          </>
        }
      />
    </>
  );
}
