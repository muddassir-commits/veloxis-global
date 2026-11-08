// Homepage and general FAQs (also the "General FAQ" in llms.txt). Real estate FAQs live in realEstateFaqs
// and are shown on /industries/real-estate.
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What does Veloxis Global do?',
    answer:
      'Veloxis Global is a performance marketing agency. We run Meta (Facebook and Instagram) and Google ads, build websites, landing pages and Shopify store pages, improve SEO and Google Business Profiles, and set up WhatsApp and AI automation so every enquiry gets a fast reply. The work is judged on leads, orders and bookings, not clicks.',
  },
  {
    question: 'Which industries do you work with?',
    answer:
      'Three: e-commerce and D2C brands, local businesses and clinics (dentists, clinics, salons, home services and similar), and real estate (developers, builders, brokers and channel partners). Each gets a plan built around how its customers actually buy.',
  },
  {
    question: 'What is performance marketing?',
    answer:
      'Marketing that is planned and paid for around a measurable result, such as a lead, an order or a booking, instead of reach or clicks. In practice it means proper conversion tracking, ads pointed at pages built to convert, and budget moved every week towards what produces results.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We are based in Noida and work remotely with businesses across India, and with local businesses and online brands in the UK and the US, over WhatsApp, email and video calls.',
  },
  {
    question: 'Is there a contract or lock-in?',
    answer:
      'No. We work month-to-month. Ad spend is paid directly to Google and Meta from your own ad accounts, and your website, ad accounts and data stay in your name.',
  },
  {
    question: 'Who will work on my account?',
    answer:
      'A small, hands-on team that plans and reviews every account directly, with Google certifications in Google Ads Search, Google Ads Apps and Google Analytics. No hand-off to junior account managers.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on the services and the size of the account, so we do not publish fixed prices. After a free audit we send a written plan with one clear monthly fee. Ad spend is separate and paid by you to Meta or Google.',
  },
  {
    question: 'Do you offer a free audit?',
    answer:
      'Yes. We review your website or store, ads and lead follow-up and tell you what we would fix first, with no obligation. You can also check any page yourself with our free website audit tool.',
  },
];

export const realEstateFaqs: FAQItem[] = [
  {
    question: 'What does Veloxis Global do for real estate businesses?',
    answer:
      'For real estate, we build project landing pages, run Meta (Facebook and Instagram) and Google ads for property leads, and set up AI WhatsApp chatbots and CRM automation so every enquiry gets a reply within seconds. We work with developers, builders, brokers and channel partners.',
  },
  {
    question: 'How is a real estate digital marketing agency different from a general one?',
    answer:
      'A general digital marketing agency sells the same services to every industry and usually reports on clicks, followers and cost per lead. A real estate digital marketing agency builds around how property is actually sold — RERA details on every ad, project and locality keywords, channel partner lead tagging and fast WhatsApp follow-up — and judges the work on site visits and bookings.',
  },
  {
    question: 'Which real estate businesses do you work with?',
    answer:
      'Residential developers and builders, channel partners mandated on projects, and brokers or property consultants. We focus on Noida, Greater Noida, the wider Delhi NCR, Lucknow and Kanpur, and we can run campaigns for projects elsewhere in India.',
  },
  {
    question: 'How soon can campaigns start producing leads?',
    answer:
      'A project landing page usually goes live in 3 to 7 working days once we have the price sheet, RERA details and creatives. Meta and Google campaigns typically start producing enquiries in their first week, and WhatsApp automation goes live with them.',
  },
  {
    question: 'Which is better for real estate: Google Ads or Meta ads?',
    answer:
      'Google Search reaches buyers already searching for a project, locality or configuration. Meta reaches people before they search, which suits launches and retargeting. Most projects use both, with the split decided by stage and budget, and both are measured on cost per site visit.',
  },
  {
    question: 'How do you deal with fake or low-quality leads?',
    answer:
      'Qualifying questions on every form, negative keywords and audience exclusions, sending site-visit outcomes back to Google and Meta so they learn what a good lead looks like, and replying to every lead instantly — many “fake” leads are real buyers who were called too late.',
  },
  {
    question: 'Is there a contract or lock-in for real estate campaigns?',
    answer:
      'No. We work month-to-month with 30 days’ notice. Ad spend is paid directly to Google and Meta from your own ad accounts, so you keep control of the budget and the data.',
  },
  {
    question: 'Which cities do you run real estate campaigns in?',
    answer:
      'Noida, Greater Noida, the wider Delhi NCR, Lucknow and Kanpur. Most of the work is done remotely, so we can also run campaigns for projects elsewhere in India.',
  },
  {
    question: 'Do you offer a free real estate marketing audit?',
    answer:
      'Yes. We review your current project pages, ads and lead follow-up and share what we would change first. There is no obligation to work with us afterwards.',
  },
];
