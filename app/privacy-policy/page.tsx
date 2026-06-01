import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { constructMetadata } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Veloxis Global Digital Marketing Agency",
  description: "Read the Privacy Policy for Veloxis Global. Learn how we collect, protect, and securely use your personal data. Contact us today for any data requests.",
  path: "/privacy-policy"
});

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
            <p>We collect information you provide directly through our Contact forms, Free SEO Audit forms, and newsletter signups. This includes names, company details, website URLs, emails, phone numbers, and cities of operation.</p>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">2. Cookies & Analytics</h2>
            <p>We use cookies, Google Analytics, and mapping cookies to track visitor traffic, identify page speeds, and optimize user experience. You can configure your browser to reject cookies, though some features might not function correctly.</p>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">3. Direct Data Use</h2>
            <p>We use contact details exclusively to respond to your strategy inquiries, deliver website PDF reports, and send transactional email/WhatsApp templates. We never sell or rent your personal details to third parties.</p>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">4. Compliance & Contact</h2>
            <p>For questions or requests regarding data removal, please contact us directly at <a href="mailto:muddassir@veloxisglobal.com" className="text-royal-blue hover:underline font-bold">muddassir@veloxisglobal.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
