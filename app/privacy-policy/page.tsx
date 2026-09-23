import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { siteData } from '../../data/site';
import { privacyFaqs } from '../../data/page-faqs';

export const metadata: Metadata = constructMetadata(pageMeta.privacy);

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ name: 'Privacy Policy', href: '/privacy-policy' }];

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter text-left">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-left font-sans">
        <div className="max-w-3xl mx-auto px-gutter">
          <Badge color="indigo" className="mb-4">LEGAL DETAILS</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-bold mb-8 uppercase tracking-wider">Last Updated: May 24, 2026</p>

          <div className="flex flex-col gap-6 text-sm sm:text-body-md text-slate-600 leading-relaxed">
            <p>At Veloxis Global, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit forms, or utilize our performance services.</p>
            
            <h2 className="text-lg font-extrabold text-slate-900 mt-4">1. Information We Collect</h2>
            <p>We collect information you provide directly through our digital channels. Key data points include:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Personal details:</strong> Names, email addresses, and phone numbers.</li>
              <li><strong>Business statistics:</strong> Company name, target website URLs, and marketing spends.</li>
              <li><strong>Geographic data:</strong> Operational cities like Delhi, Noida, and Greater Noida.</li>
            </ul>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">2. Cookies & Analytics</h2>
            <p>We utilize browser cookies and analytics packages to monitor site patterns:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Tracking:</strong> Google Analytics checks session behavior and conversion paths.</li>
              <li><strong>Performance:</strong> Tracking page loading speeds and rendering performance.</li>
              <li><strong>Customization:</strong> Storing user layout preferences dynamically.</li>
            </ul>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">3. Direct Data Use</h2>
            <p>We use contact details exclusively to optimize user communications and strategy:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Responding directly to consultation bookings or audits.</li>
              <li>Compiling manual growth audit report metrics.</li>
              <li>Sharing occasional technical marketing updates.</li>
            </ul>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">4. Compliance & Contact</h2>
            <p>For questions or requests regarding data removal, please contact us directly at <a href={`mailto:${siteData.email}`} className="text-royal-blue hover:underline font-bold">{siteData.email}</a>.</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy FAQ Accordion */}
      <FaqAccordion
        withSchema={false}
        title="Privacy & Data FAQ"
        badgeText="PRIVACY POLICY FAQ"
        customFaqs={privacyFaqs}
        description="Short answers based on the policy above."
      />
    </>
  );
}
