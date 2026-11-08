import React from 'react';
import { Metadata } from 'next';
import { CityPageTemplate } from '../../components/services/CityPageTemplate';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { cities } from '../../data/cities';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.kanpur);

export default function KanpurPage() {
  const city = cities.kanpur;
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: city.h1,
          description: pageMeta.kanpur.description,
          path: city.path,
          serviceType: city.schemaServiceType,
          audience: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers in Kanpur',
        })}
      />
      <CityPageTemplate city={city} />
    </>
  );
}
