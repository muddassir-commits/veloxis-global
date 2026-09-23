import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { getArticleSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';
import BlogPostContent from './BlogPostContent';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { blogFaqs } from '../../../data/blog-faqs';
import { constructMetadata } from '../../../lib/seo-config';
import { blogPosts, getPostBySlug } from '../../../data/blog-posts';
import { getServiceBySlug } from '../../../data/services-data';

interface Params {
  params: { slug: string };
}

const readTime = (html: string) => {
  const words = html.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return constructMetadata({
    title: post.seoTitle,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    ogType: 'article',
    publishedTime: post.isoDate,
    modifiedTime: post.modifiedIso,
  });
}

export default function SingleBlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  // Related: same service first, then same category, then newest.
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (post.service && p.service === post.service ? 2 : 0) + (p.category === post.category ? 1 : 0) }))
    .sort((a, b) => b.score - a.score || b.p.isoDate.localeCompare(a.p.isoDate))
    .slice(0, 3)
    .map(({ p }) => ({ ...p, readTime: readTime(p.htmlContent) }));
  const service = post.service ? getServiceBySlug(post.service) : undefined;

  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema({
          title: post.title,
          description: post.excerpt,
          path,
          image: post.image,
          datePublished: post.isoDate,
          dateModified: post.modifiedIso,
          about: post.about,
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: path }]} />
        </div>
      </section>

      <BlogPostContent
        post={{ ...post, readTime: readTime(post.htmlContent) }}
        relatedPosts={relatedPosts}
        service={service ? { slug: service.slug, title: service.title, shortDesc: service.shortDesc } : undefined}
      />

      {blogFaqs[post.slug] && (
        <FaqAccordion customFaqs={blogFaqs[post.slug]} title="Frequently asked questions" badgeText="FAQ" description="Quick answers from this guide." />
      )}

      <CtaBanner />
    </>
  );
}
