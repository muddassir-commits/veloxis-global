import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../lib/seo-config';
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '../lib/schema';
import { SchemaMarkup } from '../components/ui/SchemaMarkup';
import { HeroSection } from '../components/sections/HeroSection';
import { LogosStrip } from '../components/sections/LogosStrip';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { CasestudyFeature } from '../components/sections/CasestudyFeature';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider';
import { LocationsGrid } from '../components/sections/LocationsGrid';
import { BlogPreview } from '../components/sections/BlogPreview';
import { CtaBanner } from '../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: pageMeta.home.path
});

export default function Home() {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const businessSchema = getLocalBusinessSchema({ city: 'General' });

  return (
    <>
      {/* SEO Structured Data */}
      <SchemaMarkup schema={orgSchema} />
      <SchemaMarkup schema={websiteSchema} />
      <SchemaMarkup schema={businessSchema} />

      {/* Page Sections */}
      <HeroSection />
      <LogosStrip />
      <ServicesGrid />
      <CasestudyFeature />
      <ProcessTimeline />
      <TestimonialsSlider />
      <LocationsGrid />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
