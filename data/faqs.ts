// Homepage FAQs — answer the questions a builder, broker or CP asks before the first call.
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What does Veloxis Global do?',
    answer:
      'We are a real estate marketing agency. We build project landing pages, run Meta and Google ads for property leads, and set up WhatsApp chatbots and CRM automation so every enquiry gets a reply within seconds. We work only with real estate developers, builders, brokers and channel partners.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Residential developers and builders, channel partners mandated on projects, and brokers or property consultants. Most clients are in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and we can run campaigns for projects elsewhere in India.',
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
    question: 'Is there a contract or lock-in?',
    answer:
      'No. We work month-to-month with 30 days’ notice. Ad spend is paid directly to Google and Meta from your own ad accounts, so you keep control of the budget and the data.',
  },
  {
    question: 'Do you offer a free audit?',
    answer:
      'Yes. We review your current project pages, ads and lead follow-up and share what we would change first. There is no obligation to work with us afterwards.',
  },
];
