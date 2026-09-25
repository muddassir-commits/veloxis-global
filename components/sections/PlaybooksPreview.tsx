/**
 * PlaybooksPreview — Server Component.
 * Replaces the old case-study teaser: shows example plans, clearly labelled as examples.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { playbooks } from '../../data/playbooks';
import { SectionLabel } from '../ui/SectionLabel';

export const PlaybooksPreview: React.FC = () => (
  <section className="bg-white py-section-gap" id="playbooks">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 section-reveal">
        <div className="max-w-[640px]">
          <SectionLabel>PLAYBOOKS</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
            See exactly how we would run your project
          </h2>
          <p className="text-body-lg text-slate-500 mt-4">
            Example plans with the real research, campaign structure, bidding, page layout and WhatsApp flows. They are
            examples for hypothetical projects — not client results.
          </p>
        </div>
        <Link href="/playbooks" className="group inline-flex items-center gap-1.5 font-bold text-sm text-royal-blue self-start shrink-0">
          All playbooks <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
        {playbooks.map((pb) => (
          <Link key={pb.slug} href={`/playbooks/${pb.slug}`} className="group spotlight rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Example plan</span>
            <h3 className="font-bold text-slate-900 mt-2 mb-3 group-hover:text-royal-blue transition-colors leading-snug">{pb.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed flex-grow">{pb.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
