/**
 * NicheGuides — Server Component.
 * "Latest guides for <niche>": posts tagged with an `industry` in post.json, or (until posts are tagged)
 * posts whose slug matches the niche's keywords in data/industries.ts. Renders nothing if there are none.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getPostsForIndustry } from '../../lib/blog';
import { getIndustry, type IndustryKey } from '../../data/industries';
import { SectionLabel } from '../ui/SectionLabel';

export const NicheGuides: React.FC<{ industry: IndustryKey; title: string; className?: string }> = ({ industry, title, className = 'bg-slate-50' }) => {
  const posts = getPostsForIndustry(industry, getIndustry(industry).slugKeywords, 3);
  if (!posts.length) return null;

  return (
    <section className={`py-20 border-t border-slate-100 ${className}`}>
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 section-reveal">
          <div className="max-w-2xl">
            <SectionLabel>GUIDES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
          </div>
          <Link href="/blog" className="group inline-flex items-center gap-1.5 font-bold text-sm text-royal-blue self-start shrink-0">
            All articles <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider mb-2">{post.category}</span>
                <h3 className="font-extrabold text-slate-900 leading-snug group-hover:text-royal-blue transition-colors">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2 flex-grow">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-royal-blue">
                  Read the guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
