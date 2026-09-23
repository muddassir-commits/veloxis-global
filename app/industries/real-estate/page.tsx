import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { audiences } from '../../../data/audiences';
import { getServiceSchema } from '../../../lib/schema';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.developers);

export default function DevelopersPage() {
  const audience = audiences.developers;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.developers.description,
          path: audience.path,
          serviceType: 'Real estate developer marketing',
          audience: 'Real estate developers and builders',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
