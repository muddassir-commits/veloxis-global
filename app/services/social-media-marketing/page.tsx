import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import SmmServiceContent from './SmmServiceContent';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = {
  title: "Professional Social Media Marketing Agency in India 2026 | Veloxis Global",
  description: "Grow your brand and drive sales with our expert social media marketing services in India 2026. Meta, Instagram, LinkedIn marketing. Request audit.",
  alternates: {
    canonical: "https://veloxisglobal.com/services/social-media-marketing/",
  }
};

export default function SocialMediaServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Social Media', href: '/services/social-media-marketing' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Social Media Marketing', url: 'https://veloxisglobal.com/services/social-media-marketing' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Social Media Marketing Services",
    "Social media marketing agency India 2026. Meta, Instagram, LinkedIn marketing strategies designed to build trust and scale leads."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "How long does it take to see results from SMM?",
      a: "Organic community building takes between 3 to 6 months to establish strong, active engagement. However, paid social media advertising campaigns can generate active inquiries and sales in less than 7 days."
    },
    {
      q: "Which platform is best for my business?",
      a: "If you are a B2B startup, IT consulting firm, or manufacturer, LinkedIn is our primary recommended platform. If you are a D2C retail product, clinic, or consumer service, Instagram and Facebook are best."
    },
    {
      q: "Do you create the graphics and videos?",
      a: "Yes, we handle the entire content production lifecycle, including custom vector graphic designs, high-end infographics, captions, hashtag research, and reels editing."
    },
    {
      q: "Do you handle response management?",
      a: "Yes, we actively monitor post comments and can configure quick-replies for common direct inquiries, forwarding high-intent leads to your sales team on WhatsApp."
    },
    {
      q: "How often do you post?",
      a: "Posting frequency depends on your custom package, but standard strategies involve 3 to 5 posts per week, including reels, carousels, and daily engagement stories."
    },
    {
      q: "What is your video editing workflow?",
      a: "You provide raw video clips or product samples, and our team edits them into high-converting, trending 15-to-60 second reels with custom voiceovers, captions, and transitions."
    },
    {
      q: "Do you manage paid ads on social media?",
      a: "Yes, we handle paid social media marketing campaigns (Meta Ads, Facebook & Instagram Ads, LinkedIn sponsored campaigns) as a unified growth package."
    },
    {
      q: "Do you offer influencer marketing?",
      a: "We help identify local influencers in India and orchestrate outreach campaigns, though influencer fees are separate from agency retainer fees."
    },
    {
      q: "Can I review content before it goes live?",
      a: "Yes. We share a complete 30-day draft content calendar using collaborative tools so your team can review and approve every asset before publishing."
    },
    {
      q: "How do you track SMM conversions?",
      a: "We configure custom UTM parameters for bio links and set up tracking codes (Meta Pixel) to trace leads from SMM back to your site conversions."
    }
  ]);

  return (
    <>
      {/* Dynamic JSON-LD injection */}
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* 1. Breadcrumb navigation header */}
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Interactive Main Page Content */}
      <SmmServiceContent />
    </>
  );
}
