import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { audiences } from '../../data/audiences';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.lucknow);

export default function LucknowPage() {
  const audience = audiences.lucknow;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.lucknow.description,
          path: audience.path,
          serviceType: 'Real estate digital marketing in Lucknow',
          audience: 'Real estate developers, builders, brokers and channel partners in Lucknow',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
