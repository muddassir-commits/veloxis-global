import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '../../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../../components/ui/Breadcrumb';
import { getWebPageSchema } from '../../../../lib/schema';
import { getPostsByIndustry, toCard, POST_INDUSTRIES, type PostIndustry } from '../../../../lib/blog';
import { BLOG_NICHES } from '../../../../data/blog-niches';
import { constructMetadata } from '../../../../lib/seo-config';
import BlogContent from '../../BlogContent';
import { FaqAccordion } from '../../../../components/sections/FaqAccordion';
import { blogIndexFaqs } from '../../../../data/page-faqs';

interface Params {
  params: Promise<{ niche: string }>;
}

// /blog/industry/<niche>: every post of one niche, plain links in the HTML.
export const dynamicParams = false;

export function generateStaticParams() {
  // All niches always exist (the tabs on /blog link to them); a niche with no live post yet shows a short
  // "coming soon" page that points to the niche service page, and is noindex until its first post is live.
  return POST_INDUSTRIES.map((niche) => ({ niche }));
}

const PAGES: Record<PostIndustry, { title: string; description: string; h1: string; intro: string }> = {
  ecommerce: {
    title: 'E-commerce & D2C Marketing Guides | Veloxis Global',
    description: 'Guides for online stores and D2C brands: Meta and Google ads, store pages that convert, WhatsApp and email follow-up, measured on orders.',
    h1: 'E-commerce and D2C marketing guides',
    intro: 'Meta and Google ads, store pages and follow-ups for online stores and D2C brands, written by the Veloxis Global team.',
  },
  'local-business': {
    title: 'Local Business & Clinic Marketing Guides | Veloxis Global',
    description: 'Guides for clinics, dentists and local businesses: Google Business Profile, local SEO, reviews and local ads that bring calls and bookings.',
    h1: 'Local business and clinic marketing guides',
    intro: 'Google Business Profile, local SEO and local ads for clinics and local businesses, written by the Veloxis Global team.',
  },
  'real-estate': {
    title: 'Real Estate Marketing Guides for Builders & Brokers | Veloxis',
    description: 'Guides for builders, brokers and channel partners: Meta and Google ads, project landing pages, WhatsApp follow-up, RERA rules, EOI and CP programmes.',
    h1: 'Real estate marketing guides for builders, brokers and CPs',
    intro: 'Meta and Google ads for property, project landing pages, WhatsApp follow-up, EOI and channel partner programmes, written by the Veloxis Global team.',
  },
  general: {
    title: 'Digital Marketing Guides: Ads, SEO & AI | Veloxis Global',
    description: 'Cross-industry marketing guides: Instagram Reels, AI search (GEO) and other tactics that work for any business running paid or organic marketing.',
    h1: 'General marketing guides',
    intro: 'Marketing guides that apply to any business, written by the Veloxis Global team.',
  },
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { niche } = await params;
  const page = PAGES[niche as PostIndustry];
  if (!page) return {};
  const meta = constructMetadata({ title: page.title, description: page.description, path: `/blog/industry/${niche}` });
  return getPostsByIndustry(niche as PostIndustry).length ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default async function BlogIndustryPage({ params }: Params) {
  const { niche } = await params;
  if (!(POST_INDUSTRIES as readonly string[]).includes(niche)) notFound();
  const key = niche as PostIndustry;
  const page = PAGES[key];
  const info = BLOG_NICHES[key];
  const posts = getPostsByIndustry(key);
  const path = `/blog/industry/${key}`;

  return (
    <>
      <SchemaMarkup schema={getWebPageSchema({ type: 'CollectionPage', name: page.h1, description: page.description, path })} />
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: info.name, href: path }]} />
        </div>
      </section>
      <BlogContent posts={posts.map(toCard)} activeTab={key} heading={page.h1} intro={page.intro} />
      {posts.length === 0 && (
        <section className="bg-white border-t border-slate-100 py-14">
          <div className="max-w-container-max mx-auto px-gutter">
            <p className="text-slate-700">New {info.name} guides are on the way. Meanwhile, see how we can help.</p>
            <Link href={info.href} data-cta="blog_to_niche" data-industry={key} data-cta-location="blog_industry_index" className="inline-flex mt-3 text-sm font-bold text-royal-blue hover:underline">
              {info.endCta.link} →
            </Link>
          </div>
        </section>
      )}
      {posts.length > 0 && (
      <section aria-labelledby="niche-articles-heading" className="bg-white border-t border-slate-100 py-14">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 id="niche-articles-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            All {posts.length} {info.name} articles
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
            {posts.map((p) => (
              <li key={p.slug} className="text-sm leading-snug">
                <Link href={`/blog/${p.slug}`} className="text-slate-800 hover:text-royal-blue hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={info.href}
            data-cta="blog_to_niche"
            data-industry={key}
            data-cta-location="blog_industry_index"
            className="inline-flex items-center gap-1 mt-8 text-sm font-bold text-royal-blue hover:underline"
          >
            {info.endCta.link} →
          </Link>
        </div>
      </section>
      )}
      <FaqAccordion customFaqs={blogIndexFaqs} title="About the blog" badgeText="FAQ" description="Who writes these guides, what they cover and how they are kept up to date." />
    </>
  );
}
