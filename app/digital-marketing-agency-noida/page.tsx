import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { audiences } from '../../data/audiences';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.noida);

export default function NoidaPage() {
  const audience = audiences.noida;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.noida.description,
          path: audience.path,
          serviceType: 'Real estate digital marketing in Noida and Greater Noida',
          audience: 'Real estate developers, builders, brokers and channel partners in Noida and Greater Noida',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
