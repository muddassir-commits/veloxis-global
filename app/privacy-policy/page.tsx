import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { siteData } from '../../data/site';
import { privacyFaqs } from '../../data/page-faqs';

export const metadata: Metadata = constructMetadata(pageMeta.privacy);

const LAST_UPDATED = '23 September 2026';
const PRIVACY_EMAIL = 'support@veloxisglobal.com';

// Services that receive data from this site. Keep in sync with app/layout.tsx and lib/.
const providers = [
  { name: 'Vercel', role: 'Hosts the website and keeps short-term server logs', data: 'IP address, browser, pages requested' },
  { name: 'Supabase', role: 'Stores form submissions (servers in Mumbai, India)', data: 'Name, phone, service, message, newsletter email' },
  { name: 'Hostinger', role: 'Sends form notifications to our inbox', data: 'The details you enter in a form' },
  { name: 'Google (Analytics, Tag Manager)', role: 'Measures visits and enquiries', data: 'Device, browser, approximate location, pages, clicks' },
  { name: 'Meta (Pixel)', role: 'Measures and improves our Facebook and Instagram ads', data: 'Device, browser, pages, a “Lead” event when a form is sent' },
  { name: 'Microsoft (Clarity)', role: 'Heatmaps and session recordings to fix usability problems', data: 'Clicks, scrolling, mouse movement, device' },
  { name: 'Calendly', role: 'Books calls when you use our booking link', data: 'What you enter on Calendly' },
  { name: 'WhatsApp (Meta)', role: 'Chats when you message us on WhatsApp', data: 'Your number and messages' },
];

const h2 = 'text-lg font-extrabold text-slate-900 mt-6';
const list = 'list-disc pl-5 flex flex-col gap-2';
const link = 'text-royal-blue hover:underline font-bold';

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
          <p className="text-xs text-slate-500 font-bold mb-8 uppercase tracking-wider">Last updated: {LAST_UPDATED}</p>

          <div className="flex flex-col gap-4 text-sm sm:text-body-md text-slate-600 leading-relaxed">
            <p>
              This policy explains what personal data Veloxis Global collects through veloxisglobal.com,
              why we collect it, who we share it with and how you can control it. It is written to follow India’s Digital
              Personal Data Protection Act, 2023 (DPDP Act).
            </p>

            <h2 className={h2}>1. Who we are</h2>
            <p>
              Veloxis Global is a real estate marketing agency serving builders, developers and channel partners in
              Kanpur, Lucknow, Noida and Delhi NCR. For the personal data described here, we decide why and how it is
              used, which makes us the “Data Fiduciary” under the DPDP Act. You can reach us at{' '}
              <a href={`mailto:${siteData.email}`} className={link}>{siteData.email}</a> or{' '}
              <a href={`tel:${siteData.phoneRaw}`} className={link}>{siteData.phone}</a>.
            </p>

            <h2 className={h2}>2. What we collect</h2>
            <p><strong className="text-slate-900">Information you give us</strong></p>
            <ul className={list}>
              <li><strong>Contact form:</strong> your name, phone number, the service you are interested in and any message you write.</li>
              <li><strong>Newsletter:</strong> your email address.</li>
              <li><strong>Calls, WhatsApp, email and booked calls:</strong> your name, number or email and whatever you choose to tell us about your project or business.</li>
              <li><strong>If you become a client:</strong> business details and access to accounts (such as ad accounts) that you share with us under our agreement.</li>
            </ul>
            <p><strong className="text-slate-900">Information collected automatically</strong></p>
            <ul className={list}>
              <li>Device and browser type, approximate location (city level), the page you came from, pages viewed, clicks and time on site, collected through cookies and similar tools (see section 5).</li>
              <li>Server logs kept by our hosting provider, including your IP address, for security and to keep the site running.</li>
            </ul>
            <p>
              We do not ask for sensitive data such as financial, health or government ID details, and we do not take
              payments on this website.
            </p>

            <h2 className={h2}>3. How we use it</h2>
            <ul className={list}>
              <li>To reply to your enquiry, run the free audit you asked for and follow up about it.</li>
              <li>To send our newsletter if you subscribed. Every email has an unsubscribe option.</li>
              <li>To deliver services to clients under our agreement.</li>
              <li>To understand how the site is used, fix problems and measure which ads and pages bring enquiries.</li>
              <li>To keep the site secure and meet legal obligations.</li>
            </ul>
            <p>
              We use your data because you gave it to us for these purposes (your consent), or where the DPDP Act allows
              it for a legitimate use such as complying with the law. When a form is sent, and only if you have
              allowed analytics or marketing cookies, our site tells Google Analytics and Meta that an enquiry happened; your name, phone number and message are not included in that
              event. We do not sell your personal data.
            </p>

            <h2 className={h2}>4. Who we share it with</h2>
            <p>We use the following service providers to run the site. They process data for us, under their own security and privacy terms:</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th scope="col" className="p-3 font-bold">Provider</th>
                    <th scope="col" className="p-3 font-bold">What for</th>
                    <th scope="col" className="p-3 font-bold">Data involved</th>
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p) => (
                    <tr key={p.name} className="border-t border-slate-100 align-top">
                      <td className="p-3 font-semibold text-slate-900">{p.name}</td>
                      <td className="p-3">{p.role}</td>
                      <td className="p-3">{p.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Some of these providers store or process data outside India. We may also disclose data if the law, a court
              or a government authority requires it.
            </p>

            <h2 className={h2}>5. Cookies and tracking</h2>
            <p>
              Cookies are small files stored in your browser. Analytics and marketing tools load only after you allow
              them in our cookie banner. If you click “Reject all”, or have not chosen yet, none of them run.
            </p>
            <ul className={list}>
              <li><strong>Essential (always on):</strong> remembers your cookie choice in your browser.</li>
              <li><strong>Analytics (only with your consent):</strong> Google Analytics and Google Tag Manager count visits and show which pages lead to enquiries; Microsoft Clarity records clicks, scrolling and mouse movement as heatmaps and session recordings, and by default masks what you type into form fields.</li>
              <li><strong>Marketing (only with your consent):</strong> Meta Pixel and Google ads measurement show which ads bring enquiries and let us show ads to people who visited the site.</li>
            </ul>
            <p>
              You can change or withdraw your choice at any time using <strong>Cookie settings</strong> at the bottom of
              every page. You can also block or delete cookies in your browser settings, or change your{' '}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className={link}>Meta ad preferences</a>.
            </p>

            <h2 className={h2}>6. How long we keep it</h2>
            <ul className={list}>
              <li><strong>Enquiries:</strong> for as long as we are discussing your project, then deleted within 24 months of our last contact unless you become a client.</li>
              <li><strong>Client records:</strong> for the length of our agreement and afterwards only as long as tax and legal rules require.</li>
              <li><strong>Newsletter:</strong> until you unsubscribe.</li>
              <li><strong>Analytics data:</strong> according to the retention settings of each tool listed above.</li>
            </ul>

            <h2 className={h2}>7. Your rights</h2>
            <p>Under the DPDP Act you can ask us to:</p>
            <ul className={list}>
              <li>tell you what personal data we hold about you and how it is used;</li>
              <li>correct, complete or update it;</li>
              <li>delete it, where we no longer need it for a legal reason;</li>
              <li>withdraw your consent, for example to stop newsletter emails (this does not affect anything done before);</li>
              <li>nominate someone to act for you in case of death or incapacity.</li>
            </ul>
            <p>
              Email <a href={`mailto:${PRIVACY_EMAIL}`} className={link}>{PRIVACY_EMAIL}</a> with your request. We may
              ask you to confirm your identity, and we aim to respond within 30 days. If you are not satisfied with our
              response, you can complain to the Data Protection Board of India.
            </p>

            <h2 className={h2}>8. Security</h2>
            <p>
              The site runs over HTTPS, form data is stored in a database that the public website can add to but not
              read, and only we have access to stored enquiries. No system is completely secure, so if a breach affects
              your data we will inform you and the Data Protection Board as the law requires.
            </p>

            <h2 className={h2}>9. Children</h2>
            <p>
              This site is meant for businesses and adults. We do not knowingly collect data from anyone under 18. If you
              think a child has sent us their details, email us and we will delete them.
            </p>

            <h2 className={h2}>10. Other websites</h2>
            <p>
              Links to WhatsApp, Calendly, Google, Meta and other sites are covered by those companies’ own privacy
              policies, not this one.
            </p>

            <h2 className={h2}>11. Changes to this policy</h2>
            <p>
              We will update this page when our tools or practices change, and change the “Last updated” date above.
            </p>

            <h2 className={h2}>12. Contact and grievance officer</h2>
            <p>
              For any privacy question, request or complaint, contact our grievance officer: Muddassir Ali, Founder,
              Veloxis Global — <a href={`mailto:${PRIVACY_EMAIL}`} className={link}>{PRIVACY_EMAIL}</a>,{' '}
              <a href={`tel:${siteData.phoneRaw}`} className={link}>{siteData.phone}</a>.
            </p>
          </div>
        </div>
      </section>

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
