// FAQs for pages that don't have their own data file. Every page shows 7–9 FAQs with
// answers visible (see components/sections/FaqAccordion.tsx). Answers must only state
// facts the site already stands behind.
import { siteData } from './site';

export interface PageFaq {
  question: string;
  answer: string;
}

export const servicesHubFaqs: PageFaq[] = [
  { question: 'What real estate marketing services does Veloxis Global offer?', answer: 'Three: project landing pages and microsites, Meta and Google ads for property lead generation, and WhatsApp chatbot and CRM automation that replies to every enquiry. We don’t offer SEO retainers, social media management or branding.' },
  { question: 'Do I have to take all three services?', answer: 'No. You can start with one — for example, WhatsApp automation for leads you already get from portals. Most clients combine all three because each makes the others work better, but it isn’t required.' },
  { question: 'Which service should I start with?', answer: 'If you get leads but struggle to reach them, start with automation. If you run ads but get few enquiries, start with a landing page. If you have no direct lead source at all, start with ads and a landing page together. The free audit tells you which gap is biggest.' },
  { question: 'Do you work with builders, brokers or channel partners?', answer: 'All three. Developers and builders use us for launches and inventory; channel partners and brokers use us to get leads of their own for the projects they are mandated on.' },
  { question: 'How much do the services cost?', answer: 'Landing pages start from ₹15,000 a month, Meta and Google ads management from ₹25,000 a month, and WhatsApp automation from ₹20,000 a month. Ad spend is paid directly to Google and Meta. Final fees are fixed after a free audit.' },
  { question: 'How do you measure results?', answer: 'On leads, how many were contacted, site visits booked and completed, and cost per site visit — reported weekly. Clicks and impressions are available but aren’t the headline.' },
  { question: 'Is there a minimum contract?', answer: 'No. We work month-to-month with 30 days’ notice.' },
  { question: 'Which cities do you cover?', answer: 'We work with clients in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and can run campaigns for projects elsewhere in India.' },
];

export const contactFaqs: PageFaq[] = [
  { question: 'What happens after I send the form?', answer: 'Muddassir reads it personally and replies by phone, WhatsApp or email to understand your project and current lead flow, then shares what he would change first.' },
  { question: 'What is included in the free marketing audit?', answer: 'A review of your project landing page or website, your Google and Meta ad accounts if you run ads, and how quickly enquiries are answered today — with the changes we would make first.' },
  { question: 'Is the audit really free, with no obligation?', answer: 'Yes. You can use the recommendations yourself or with another agency. There is no obligation to work with us.' },
  { question: 'What should I prepare before we talk?', answer: 'The project details (location, configurations, price band, RERA number), your current lead sources, rough monthly ad spend if any, and who follows up leads today.' },
  { question: 'Can I just message on WhatsApp instead of filling the form?', answer: `Yes. WhatsApp or call ${siteData.phone}, or email ${siteData.email}.` },
  { question: 'Can I book a video call?', answer: 'Yes. Use the “Book a call” button to pick a 30-minute slot.' },
  { question: 'Do you have an office I can visit?', answer: 'No. Veloxis Global works remotely with clients across Kanpur, Lucknow, Noida and Delhi NCR, so there is no walk-in office.' },
  { question: 'What are your working hours?', answer: 'Monday to Saturday, 9:00 AM to 7:00 PM IST.' },
];

export const playbooksHubFaqs: PageFaq[] = [
  { question: 'What is a playbook?', answer: 'A written example of how we would plan one part of a real estate campaign — the research, structure, settings and measurement — for a hypothetical project, so you can see our approach before speaking to us.' },
  { question: 'Are these client case studies?', answer: 'No. Each playbook is an example plan for a hypothetical project and is labelled that way. They are not client results.' },
  { question: 'Where do the numbers come from?', answer: 'Search volumes come from Google Ads data for India via DataForSEO (September 2026). Budget splits and timelines are planning assumptions and are marked as such.' },
  { question: 'Can I use a playbook for my own project?', answer: 'Yes. They are written to be useful on their own. If you want it adapted to your project, locality and budget, that is what the free audit is for.' },
  { question: 'Which playbook should I read first?', answer: 'Developers planning a launch should start with the Meta and Google ads plan. If your problem is slow follow-up, read the WhatsApp lead-response flow. Channel partners should start with the lead registration playbook.' },
  { question: 'Do you publish real results?', answer: 'We will publish real case studies only with client permission and verifiable numbers. Until then, playbooks show how we work.' },
  { question: 'How is a playbook different from a blog post?', answer: 'Blog posts explain a topic, like what an EOI is. Playbooks are working plans with structures, tables and settings you could hand to a team.' },
];

export const blogIndexFaqs: PageFaq[] = [
  { question: 'Who is this blog for?', answer: 'Real estate developers, builders, brokers and channel partners in India who run or plan marketing for property projects.' },
  { question: 'Who writes the articles?', answer: 'Muddassir Ali, founder of Veloxis Global, who has worked in digital marketing for over four years with a focus on lead generation, landing pages, Meta and Google Ads, and sales automation.' },
  { question: 'What topics does the blog cover?', answer: 'Meta and Google ads for property, project landing pages, WhatsApp follow-up and automation, channel partner programmes, EOI and launch marketing, and local search for agents.' },
  { question: 'Are the statistics in the articles verified?', answer: 'We only cite figures with a source, and we explain general practice where no reliable data exists. Legal and tax topics include a note that they are not professional advice.' },
  { question: 'How often are articles updated?', answer: 'When rules or platforms change. Each article shows the date it was last updated.' },
  { question: 'Can I suggest a topic?', answer: `Yes — email ${siteData.email} or message us on WhatsApp with the question you want answered.` },
  { question: 'Where can I see how you would apply this to my project?', answer: 'Read the playbooks for example plans, or ask for a free marketing audit of your current pages, ads and lead follow-up.' },
];

export const aboutFaqs = (years: number): PageFaq[] => [
  { question: 'Who founded Veloxis Global?', answer: `Veloxis Global was founded by Muddassir Ali, who has over ${years} years of experience in lead generation, landing page design, Meta and Google Ads, and sales automation.` },
  { question: 'What does Veloxis Global do?', answer: 'We build project landing pages, run Meta and Google ads for property leads, and set up WhatsApp chatbots and CRM automation for real estate developers, brokers and channel partners.' },
  { question: 'Where does Veloxis Global work?', answer: 'With clients in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and on campaigns for projects elsewhere in India. We work remotely and do not have a walk-in office.' },
  { question: 'Why only real estate?', answer: 'Focusing on one industry means every campaign, page and automation is built around how property is actually sold — launches, RERA rules, site visits and channel partners — instead of generic lead generation.' },
  { question: 'Who will work on my account?', answer: 'Muddassir plans and oversees every account personally, working with a small network of landing page developers, ad specialists and automation engineers chosen for each project.' },
  { question: 'What makes you different from a general digital marketing agency?', answer: 'We work only in real estate, offer three connected services rather than everything, and report on site visits and cost per site visit instead of clicks and impressions.' },
  { question: 'What certifications does the founder hold?', answer: 'Google certifications in Google Ads and Analytics, and a HubSpot certification.' },
];

export const privacyFaqs: PageFaq[] = [
  { question: 'What information does Veloxis Global collect?', answer: 'What you enter in our forms (name, phone, the service you want, an optional message, or your email for the newsletter), plus device, browser and page-visit data collected by cookies and analytics tools.' },
  { question: 'Why do you collect this information?', answer: 'To reply to your enquiry, run the audit you asked for, send the newsletter if you subscribed, and see which pages and ads bring enquiries.' },
  { question: 'Which tracking tools does this site use?', answer: 'Google Analytics and Google Tag Manager, Meta Pixel and Microsoft Clarity. None of them load unless you allow them in the cookie banner, and you can change that any time under Cookie settings in the footer.' },
  { question: 'Do you share my name or phone number with Google or Meta?', answer: 'No. When you send a form, Google Analytics and Meta are told that an enquiry happened, but your name, phone number and message are not included.' },
  { question: 'Where is my form data stored?', answer: 'In a Supabase database on servers in Mumbai, India, and in our email inbox. We do not sell it.' },
  { question: 'How long do you keep my details?', answer: 'Enquiries are deleted within 24 months of our last contact unless you become a client. Newsletter emails are kept until you unsubscribe.' },
  { question: 'How can I see, correct or delete my data?', answer: `Email support@veloxisglobal.com. We aim to respond within 30 days, and you can complain to the Data Protection Board of India if you are not satisfied.` },
  { question: 'Who do I contact about privacy questions?', answer: `Our grievance officer, Muddassir Ali, at support@veloxisglobal.com or ${siteData.phone}.` },
];

export const termsFaqs: PageFaq[] = [
  { question: 'Do you require long-term contract lock-ins?', answer: 'No. Marketing packages run month-to-month. You can pause or cancel with 30 days’ notice.' },
  { question: 'Are there cancellation penalties?', answer: 'No. There are no lock-in contracts or hidden cancellation penalties.' },
  { question: 'What does the free audit cover?', answer: 'It is a manual assessment of your landing page, ad accounts and lead response setup.' },
  { question: 'Is the free audit a contract?', answer: 'No. Audit recommendations are action roadmaps, not contracts.' },
  { question: 'Do you guarantee results from audit recommendations?', answer: 'No. Audits are delivered in good faith, and we make no guarantees about results from implementing the recommendations.' },
  { question: 'What if I don’t agree with these terms?', answer: 'Please don’t use the site or request an audit.' },
  { question: 'What jurisdiction governs these terms?', answer: `The laws of India, subject to courts in ${siteData.jurisdiction}.` },
];
