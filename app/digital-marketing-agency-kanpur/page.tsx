import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { audiences } from '../../data/audiences';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.kanpur);

export default function KanpurPage() {
  const audience = audiences.kanpur;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.kanpur.description,
          path: audience.path,
          serviceType: 'Real estate digital marketing in Kanpur',
          audience: 'Real estate developers, builders, brokers and channel partners in Kanpur',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
