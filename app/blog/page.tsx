import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { getWebPageSchema } from '../../lib/schema';
import BlogContent from './BlogContent';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.blog);

export default function BlogPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Veloxis Global real estate marketing blog',
          description: pageMeta.blog.description,
          path: '/blog',
        })}
      />
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
        </div>
      </section>
      <BlogContent />
    </>
  );
}
