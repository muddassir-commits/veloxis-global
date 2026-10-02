import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../../../components/ui/SchemaMarkup';
import { audiences } from '../../../../data/audiences';
import { getServiceSchema } from '../../../../lib/schema';
import { constructMetadata, pageMeta } from '../../../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.nriBuyers);

// Our clients are Indian developers and CPs; the NRI buyers are their audience, not ours,
// so areaServed and the page language stay as set site-wide.
export default function NriBuyersPage() {
  const audience = audiences.nri;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.nriBuyers.description,
          path: audience.path,
          serviceType: 'NRI real estate marketing',
          audience: 'Real estate developers and channel partners selling to NRI buyers',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
