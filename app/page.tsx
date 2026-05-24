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

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Best Digital Marketing Agency in India | Veloxis Global",
    description: "Veloxis Global — India's results-driven digital marketing agency. Expert SEO, Google Ads & Social Media for businesses across India. Serving Delhi, Noida, Lucknow & Kanpur. Get your free audit today.",
    path: pageMeta.home.path
  }),
  keywords: "best digital marketing agency in India, digital marketing agency India, digital marketing services India 2026, performance marketing agency India, SEO agency India, Google Ads agency India"
};

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
