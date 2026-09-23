import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';
import BlogPostContent from './BlogPostContent';
import { constructMetadata } from '../../../lib/seo-config';
import { Post, blogPosts } from '../../../data/blog-posts';

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default function SingleBlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const getReadTime = (html: string) => {
    const text = html.replace(/<[^>]*>/g, ' ');
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  };

  const postWithReadTime = {
    ...post,
    readTime: getReadTime(post.htmlContent)
  };

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Blog', url: 'https://veloxisglobal.com/blog' },
    { name: post.title, url: `https://veloxisglobal.com/blog/${post.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.isoDate,
    "dateModified": post.isoDate,
    "image": "https://veloxisglobal.com/images/logos/logo.webp",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.linkedin.com/in/muddassir-alii/",
      "sameAs": [
        "https://www.linkedin.com/in/muddassir-alii/",
        "https://muddassirali.com"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veloxisglobal.com/images/logos/logo.webp"
      }
    },
    "about": post.about ? post.about.map(item => ({
      "@type": "Thing",
      "name": item.name,
      "sameAs": item.sameAs
    })) : undefined,
    "mentions": post.mentions ? post.mentions.map(item => ({
      "@type": "Thing",
      "name": item.name,
      "sameAs": item.sameAs
    })) : undefined
  };

  // Find 2 related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)
    .map(p => ({
      ...p,
      readTime: getReadTime(p.htmlContent)
    }));

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <BlogPostContent post={postWithReadTime} relatedPosts={relatedPosts} />

      <CtaBanner />
    </>
  );
}
