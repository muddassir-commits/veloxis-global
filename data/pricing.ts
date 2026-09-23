// Pricing page content — shared by the visible page and its FAQPage schema.
export const plans = [
  {
    title: 'Starter',
    desc: 'For a single project, an individual broker or a channel partner with one or two mandates.',
    features: [
      'One project landing page',
      'Google Ads or Meta ads (one channel)',
      'Instant WhatsApp reply to every lead',
      'Leads sent to your CRM or a Google Sheet',
      'Weekly lead and site-visit report',
    ],
  },
  {
    title: 'Growth',
    desc: 'For developers and CP firms running launches or several projects at once.',
    features: [
      'Landing pages for multiple projects or phases',
      'Google Ads and Meta ads together',
      'WhatsApp chatbot with qualification and visit booking',
      'Offline conversion tracking from your CRM',
      'Fortnightly review call with the founder',
    ],
    popular: true,
  },
  {
    title: 'Custom',
    desc: 'For multi-project developers or campaigns across several cities.',
    features: [
      'Everything in Growth, scoped per project',
      'Channel partner lead registration and routing',
      'Custom reporting dashboard (Looker Studio)',
      'Launch and EOI campaign planning',
      'Weekly review call with the founder',
    ],
  },
];

export const pricingFaqs = [
  {
    question: 'Do you lock clients into long-term contracts?',
    answer: 'No. We work month-to-month with 30 days’ notice. You stay because the campaigns are producing site visits, not because of a contract.',
  },
  {
    question: 'What is the minimum budget to work with you?',
    answer: 'It depends on your location, ticket size and how many site visits you need. We start with a free audit and recommend a fee and an ad budget that make sense for your project.',
  },
  {
    question: 'How do you set the final price?',
    answer: 'After the audit we scope the work: number of projects and pages, channels, automation and reporting. The monthly fee is fixed for that scope and written into the proposal.',
  },
  {
    question: 'Is ad spend included in your monthly fee?',
    answer: 'No. Ad spend is paid directly to Google and Meta from your own ad accounts. Our fee covers strategy, setup, creatives, landing pages, automation and optimisation.',
  },
  {
    question: 'How soon will we see results?',
    answer: 'Landing pages usually go live in 3 to 7 working days. Meta and Google campaigns typically start producing enquiries in their first week, and WhatsApp automation goes live alongside them.',
  },
  {
    question: 'Can we change or pause the package?',
    answer: 'Yes. With 30 days’ notice you can change your package or pause services, and we hand over your pages, audiences and automation settings.',
  },
];
