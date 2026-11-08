import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { getWebPageSchema } from '../../lib/schema';
import BlogContent from './BlogContent';
import Link from 'next/link';
import { getAllPosts, toCard, CATEGORIES } from '../../lib/blog';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { blogIndexFaqs } from '../../data/page-faqs';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.blog);

export default function BlogPage() {
  const posts = getAllPosts();
  // Plain links to every live post, grouped by category, in the server HTML. The card grid above
  // pages through posts on the client, so without this list crawlers would only see the first page.
  const groups = CATEGORIES.map((c) => ({ category: c, posts: posts.filter((p) => p.category === c) })).filter((g) => g.posts.length);
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Veloxis Global marketing blog',
          description: pageMeta.blog.description,
          path: '/blog',
        })}
      />
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
        </div>
      </section>
      <BlogContent posts={posts.map(toCard)} />
      <section id="all-articles" aria-labelledby="all-articles-heading" className="bg-white border-t border-slate-100 py-14 scroll-mt-24">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 id="all-articles-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            All {posts.length} articles
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Every guide on one page, by topic. Looking for a starting point? The{' '}
            <Link href="/guides" className="font-semibold text-royal-blue hover:underline">guides hub</Link> groups them into
            short reading paths.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {groups.map((g) => (
              <div key={g.category}>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">{g.category}</h3>
                <ul className="flex flex-col gap-2.5">
                  {g.posts.map((p) => (
                    <li key={p.slug} className="text-sm leading-snug">
                      <Link href={`/blog/${p.slug}`} className="text-slate-800 hover:text-royal-blue hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqAccordion customFaqs={blogIndexFaqs} title="About the blog" badgeText="FAQ" description="Who writes these guides, what they cover and how they are kept up to date." />
    </>
  );
}
