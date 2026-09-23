import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { playbooks } from '../../data/playbooks';
import { getServiceBySlug } from '../../data/services-data';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { playbooksHubFaqs } from '../../data/page-faqs';
import { ArrowRight, Info } from 'lucide-react';

export const metadata: Metadata = constructMetadata(pageMeta.playbooks);

export default function PlaybooksPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Real estate marketing playbooks',
          description: pageMeta.playbooks.description,
          path: '/playbooks',
        })}
      />
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Playbooks', href: '/playbooks' }]} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <Badge variant="teal" className="mb-4">PLAYBOOKS</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-5">
            Real estate marketing playbooks: how we plan campaigns, pages and follow-up
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            These are the working plans we start from — the research, campaign structure, bidding, page layout and WhatsApp
            flows — written out so you can see exactly how we would approach your project before you speak to us.
          </p>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Each playbook is an example plan for a hypothetical project, not a client result. Search volumes come from Google
              Ads data for India; other figures are planning assumptions and are labelled as such.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-8">
          {playbooks.map((pb) => {
            const service = getServiceBySlug(pb.service);
            return (
              <article key={pb.slug} className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col">
                <div className="relative h-44">
                  <Image src={pb.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Example plan · {service?.title} · For {pb.audience.toLowerCase()}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-3 mb-3">
                    <Link href={`/playbooks/${pb.slug}`} className="hover:text-royal-blue">{pb.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{pb.excerpt}</p>
                  <Link href={`/playbooks/${pb.slug}`} className="inline-flex items-center gap-1 mt-6 text-sm font-bold text-royal-blue">
                    Read the playbook <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FaqAccordion customFaqs={playbooksHubFaqs} title="About these playbooks" badgeText="FAQ" description="What the playbooks are, where the numbers come from, and how to use them." />

      <CtaBanner
        title="Want a plan like this for your project?"
        description="Send us your project details and we’ll review your current pages, ads and lead handling, then share a plan for your launch or inventory."
      />
    </>
  );
}
