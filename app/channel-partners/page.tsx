import React from 'react';
import { Metadata } from 'next';
import { AudiencePageTemplate } from '../../components/services/AudiencePageTemplate';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { audiences } from '../../data/audiences';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.channelPartners);

export default function ChannelPartnersPage() {
  const audience = audiences['channel-partners'];
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: audience.h1,
          description: pageMeta.channelPartners.description,
          path: audience.path,
          serviceType: 'Channel partner marketing',
          audience: 'Real estate channel partners and brokers',
        })}
      />
      <AudiencePageTemplate audience={audience} />
    </>
  );
}
