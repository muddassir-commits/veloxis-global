import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import AnalyticsContent from './AnalyticsContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.analyticsTracking.title,
  description: pageMeta.analyticsTracking.description,
  path: pageMeta.analyticsTracking.path
});

export default function AnalyticsPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Analytics & Tracking', href: '/services/analytics-tracking' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Analytics & Tracking', url: 'https://veloxisglobal.com/services/analytics-tracking' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Analytics, Tracking & Attribution",
    "Implement GA4, server-side tracking, and multi-channel attribution to measure exactly where your revenue comes from."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What does Analytics & Tracking involve?",
      a: "We set up Google Analytics 4 (GA4), custom event triggers via Google Tag Manager (GTM), server-side tagging, and multi-channel attribution models to measure exactly where your leads and revenue come from."
    },
    {
      q: "What is GA4 transition?",
      a: "Google Analytics 4 is Google's modern analytics system replacing Universal Analytics, relying on an event-based tracking structure rather than pageviews, providing robust cross-device user mapping."
    },
    {
      q: "What is Server-Side Tagging?",
      a: "Instead of loading pixel scripts directly in user browsers, server-side tagging routes data through a secure cloud server first. This bypasses ad-blockers, increases site speed, and secures user data privacy."
    },
    {
      q: "Can you track call leads?",
      a: "Yes, we integrate third-party call-tracking tools (like Ringba or CallRail) to measure which search terms or ad sets triggered direct phone calls."
    },
    {
      q: "What is Attribution Modeling?",
      a: "Attribution modeling allocates credit for conversions across different marketing touchpoints (like first click, last click, or linear), showing you which channels nurture vs close sales."
    },
    {
      q: "Do you build custom reporting dashboards?",
      a: "Yes, we build interactive Looker Studio (formerly Google Data Studio) dashboards, combining your ad platforms, search console, and analytics into one clean, real-time interface."
    },
    {
      q: "What is the monthly pricing?",
      a: "Analytics setup and tracking retainers range from ₹8,000 to ₹50,000/month depending on site complexity, e-commerce scale, and server-side tracking configurations."
    },
    {
      q: "How long does setup take?",
      a: "Basic GA4 and tag setup takes 3 to 7 days, while custom server-side tagging and multi-platform dashboard builds typically take 10 to 14 days."
    }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <AnalyticsContent />
    </>
  );
}
