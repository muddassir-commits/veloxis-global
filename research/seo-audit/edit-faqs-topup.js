const edit = require('./edit');

edit('data/audiences.ts', [
  // Developers: +2
  [`      { question: 'Which cities do you work in?', answer: 'We work with developers in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and can run campaigns for projects elsewhere in India.' },
    ],
    ctaTitle: 'Planning a launch or sitting on unsold inventory?',`,
   `      { question: 'Which cities do you work in?', answer: 'We work with developers in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and can run campaigns for projects elsewhere in India.' },
      { question: 'How do you report results to a developer?', answer: 'Weekly, in plain language: leads by campaign, how many were contacted, site visits booked and completed, and cost per site visit — taken from your CRM, not just the ad dashboards.' },
      { question: 'Can you help sell unsold or ready-to-move inventory?', answer: 'Yes. Ready-to-move inventory gets its own page and campaigns built around “ready to move” searches and retargeting of past enquiries, with a clear offer and site-visit booking.' },
    ],
    ctaTitle: 'Planning a launch or sitting on unsold inventory?',`],
  // Channel partners: +2
  [`      { question: 'Can you help independent brokers with resale inventory too?', answer: 'Yes. The same approach — a focused page, local ads and instant WhatsApp follow-up — works for resale and rental inventory.' },
    ],`,
   `      { question: 'Can you help independent brokers with resale inventory too?', answer: 'Yes. The same approach — a focused page, local ads and instant WhatsApp follow-up — works for resale and rental inventory.' },
      { question: 'Can I run campaigns for several projects at once?', answer: 'Yes. Each mandated project gets its own page and campaign, so leads, budgets and results stay separate and each developer’s rules are followed.' },
      { question: 'Will the leads and data belong to me?', answer: 'Yes. Ads run from your own Google and Meta accounts, and leads go to your CRM or Google Sheet.' },
    ],`],
]);

edit('data/pricing.ts', [
  [`  {
    question: 'Can we change or pause the package?',`, `  {
    question: 'Which package is right for a channel partner?',
    answer: 'Most CPs start with Starter for one or two mandates, then move to Growth when they run campaigns for several projects at once.',
  },
  {
    question: 'Do you charge for the free audit?',
    answer: 'No. The audit is free and there is no obligation to work with us afterwards.',
  },
  {
    question: 'Can we change or pause the package?',`],
]);

edit('data/services-data.ts', [
  // Landing pages: +1
  [`      {
        question: 'Do you write the content, or do we?',`, `      {
        question: 'Will the page load fast on mobile?',
        answer:
          'Yes. Pages are built in Next.js with compressed images and no page-builder bloat, and tested on a mid-range Android phone over 4G, aiming for Google’s “good” Core Web Vitals thresholds.',
      },
      {
        question: 'Do you write the content, or do we?',`],
  // Automation: +1
  [`      {
        question: 'Does this help with channel partner lead disputes?',`, `      {
        question: 'Who pays for WhatsApp messages?',
        answer:
          'WhatsApp message charges are set by Meta and billed through your WhatsApp Business Solution Provider, separately from our fee.',
      },
      {
        question: 'Does this help with channel partner lead disputes?',`],
]);
