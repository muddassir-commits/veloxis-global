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
import { siteData } from '../../../../data/site';
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
    title: 'E-commerce Marketing Blog: D2C, Shopify & Meta Ads Guides',
    description: 'Step-by-step e-commerce marketing guides for D2C and Shopify brands in India: Meta and Google ads, ROAS, store conversion, abandoned carts and retention.',
    h1: 'E-commerce and D2C marketing guides',
    intro: 'How-to guides for online stores and D2C brands: setting up and fixing Meta and Google ads, working out a good ROAS, making Shopify pages convert, and bringing buyers back with email and WhatsApp. Every guide gives real steps and cites its sources.',
  },
  'local-business': {
    title: 'Local Business Marketing Guides: Google Maps & Local SEO',
    description: 'Step-by-step guides for clinics, dentists and local businesses: Google Business Profile, local SEO, reviews and local ads that bring calls and bookings.',
    h1: 'Local business and clinic marketing guides',
    intro: "How-to guides for clinics, dentists and other local businesses: setting up a Google Business Profile that follows Google's rules, ranking on Google Maps, getting reviews the right way, and turning searches into calls and bookings.",
  },
  'real-estate': {
    title: 'Real Estate Marketing Blog: Ads, Leads & RERA Guides',
    description: 'Real estate marketing guides for builders, brokers and channel partners in India: Meta and Google ads, lead generation, WhatsApp follow-up and RERA rules.',
    h1: 'Real estate marketing guides for builders, brokers and CPs',
    intro: 'How-to guides for builders, brokers and channel partners in India: Meta and Google ads for property, project landing pages, WhatsApp follow-up, booking site visits, EOI and CP programmes, and the RERA rules every ad must follow.',
  },
  general: {
    title: 'AI Marketing & Automation Guides: GEO, Chatbots, Voice AI',
    description: 'Guides on AI in marketing for any business: getting cited by ChatGPT and AI search (GEO), WhatsApp chatbots, AI voice agents, AI agencies and ad reporting.',
    h1: 'AI and marketing guides for any business',
    intro: 'Guides that apply to any business: how AI search tools such as ChatGPT pick their sources, what a WhatsApp chatbot or AI voice agent should and should not do, how to judge an AI marketing agency, and how to report on ads.',
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
      {posts.length > 0 && (
        <SchemaMarkup
          schema={{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: page.h1,
            itemListElement: posts.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${siteData.url}/blog/${p.slug}`,
              name: p.title,
            })),
          }}
        />
      )}
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
