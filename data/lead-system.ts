// Real Estate Lead System offer page — shared by the visible page and its FAQPage schema.
// The brochure (01_foundation/offer) mirrors this content section for section, so change both together.
// Facts only: no fees on the site (quoted after the audit call), month-to-month after setup,
// ad spend paid by the client straight to Meta, no lead-count guarantees.

export const MIN_AD_BUDGET = '₹15,000';

// Short, quotable answer shown under the hero (for buyers skimming and for AI answers).
export const leadSystemDefinition = {
  question: 'What is the Real Estate Lead System?',
  answer:
    'It is a done-for-you lead generation setup for real estate agents, brokers and builders: Meta ads aimed at real buyers, a landing page for each project, and an instant WhatsApp reply to every enquiry. Veloxis Global sets it up in two weeks, runs it month to month and reports site visits every week.',
};

export const leadSystemProblems = [
  {
    title: 'Portal leads are shared',
    desc: 'The same buyer enquiry goes to you and ten other brokers. Whoever calls first wins, and the rest pay for nothing.',
  },
  {
    title: 'Ads bring junk numbers',
    desc: 'Boosted posts and instant forms collect wrong numbers and “just checking” clicks. The budget goes, the site visits don’t come.',
  },
  {
    title: 'Enquiries go cold overnight',
    desc: 'A buyer enquires at 10 PM. Nobody replies till the next afternoon. By then they have spoken to someone else.',
  },
];

export const leadSystemSteps = [
  {
    step: 'Ad',
    title: 'Meta ads aimed at real buyers',
    desc: 'Facebook and Instagram ads for your project, targeted by location, budget and buyer intent, with questions that filter out time-wasters.',
  },
  {
    step: 'Page',
    title: 'A landing page for your project',
    desc: 'One fast, mobile-first page per project: location, price band, RERA number, floor plans and photos, with a short enquiry form and a WhatsApp button.',
  },
  {
    step: 'WhatsApp',
    title: 'An instant WhatsApp reply',
    desc: 'Every enquiry gets a WhatsApp message within seconds, day or night, with project details and a few questions. A wrong number can’t reply, so fake enquiries show up straight away. Then follow-ups until the buyer replies.',
  },
];

export const leadSystemIncluded = [
  {
    group: 'Landing page',
    items: [
      'One landing page per project, built and hosted for you',
      'Mobile-first, loads fast on a 4G phone',
      'Location, price band, RERA number, plans and photos above the fold',
      'Short enquiry form and click-to-WhatsApp button',
    ],
  },
  {
    group: 'Meta ads',
    items: [
      'Campaign setup on Facebook and Instagram',
      'Ad creatives and copy for your project',
      'Meta Pixel and Conversions API set up for tracking',
      'Weekly optimisation of audiences, creatives and budget',
    ],
  },
  {
    group: 'WhatsApp flow',
    items: [
      'WhatsApp Business API on your own number',
      'Instant auto-reply with brochure, location and price band',
      'Qualifying questions: budget, configuration, timeline',
      'Automatic follow-ups for buyers who go quiet',
    ],
  },
  {
    group: 'Tracking & reporting',
    items: [
      'Every lead in one Google Sheet, with its source',
      'Instant lead alert to you or your sales team',
      'Weekly report with the numbers below',
      'Monthly review call with Muddassir',
    ],
  },
];

export const leadSystemTimeline = [
  { when: 'Week 1', title: 'Setup', desc: 'Onboarding call, account access, landing page built, WhatsApp flow written and tested.' },
  { when: 'Week 2', title: 'Launch', desc: 'Ads go live. The first enquiries reach your WhatsApp and your lead sheet.' },
  { when: 'Weeks 3–4', title: 'Optimise', desc: 'Cut weak audiences and creatives, sharpen the qualifying questions, move budget to what brings site visits.' },
  { when: 'Month 2 onwards', title: 'Scale', desc: 'More budget behind what works, new projects added, monthly review of every number.' },
];

export const leadSystemMetrics = [
  { label: 'Leads', desc: 'How many enquiries came in, from which ad' },
  { label: 'Cost per lead', desc: 'What each enquiry cost you' },
  { label: 'Qualified leads', desc: 'Buyers who answered the budget and timeline questions' },
  { label: 'Site visits booked', desc: 'The number that actually matters' },
  { label: 'Cost per site visit', desc: 'Total spend divided by visits booked' },
];

export const leadSystemReasons = [
  {
    title: 'Real estate only',
    desc: 'We don’t do restaurants one day and real estate the next. Every page, ad and message is written for property buyers.',
  },
  {
    title: 'One team for all three',
    desc: 'Ads, landing page and WhatsApp are run together, so leads don’t fall through the gap between three vendors.',
  },
  {
    title: 'Everything stays in your name',
    desc: 'Your ad account, your WhatsApp number, your landing page and your lead data. If you leave, it all stays with you.',
  },
  {
    title: 'Founder-led',
    desc: 'Muddassir runs your account personally. You talk to the person doing the work, not an account manager.',
  },
  {
    title: 'Judged on site visits',
    desc: 'We report site visits and cost per site visit, not likes, reach or clicks.',
  },
  {
    title: 'Month-to-month',
    desc: 'After setup there’s no lock-in. Stay because it works, not because of a contract.',
  },
];

export const leadSystemNri = {
  title: 'Selling to NRI buyers too?',
  desc: 'The same system can run a separate track for Indians living abroad: ads in the UAE, UK or US, an NRI version of your project page, and WhatsApp replies and video site visits timed to the buyer’s evening.',
  linkLabel: 'See how NRI buyer campaigns work',
  href: '/industries/real-estate/nri-buyers',
};

export const leadSystemPricing = [
  { title: 'One-time setup fee', desc: 'Landing page, ad account setup, tracking and the WhatsApp flow, built in week 1.' },
  { title: 'Monthly management fee', desc: 'Running and optimising the ads, WhatsApp flow updates, weekly reports and the monthly review.' },
  {
    title: 'Your ad budget, paid to Meta',
    desc: `Paid by you directly to Meta, never through us. We recommend at least ${MIN_AD_BUDGET} a month per project.`,
  },
];

export const leadSystemNeeds = [
  'Project details: location, price band, configurations, RERA number',
  'Photos, floor plans and your brochure',
  'Admin access to your Facebook page and Meta Business account',
  'A phone number for WhatsApp Business',
  'Someone on your side who calls new leads the same day',
];

export const leadSystemFaqs = [
  {
    question: 'What is real estate lead generation?',
    answer:
      'It is the work of finding people who want to buy property and getting their name and number to your sales team while they are still interested. In India that usually means ads on Facebook, Instagram and Google, a page that collects the enquiry, and a fast reply. The Lead System does all three.',
  },
  {
    question: 'How many leads will I get?',
    answer:
      'It depends on your budget, city, project and price band, so we don’t promise a number before seeing them. On the free audit call we look at your project and give you a realistic range.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'There is a one-time setup fee and a monthly management fee, quoted after the free audit call once we know how many projects and cities are involved. Your ad budget is separate and paid directly to Meta.',
  },
  {
    question: 'How soon will enquiries start coming in?',
    answer:
      'Setup takes the first week. The ads go live in week 2, and enquiries reach your WhatsApp and lead sheet from then on. Weeks 3 and 4 are for cutting what doesn’t work and putting more budget behind what does.',
  },
  {
    question: 'Do you call the leads for us?',
    answer:
      'No. The WhatsApp flow replies instantly and asks the qualifying questions, and your team calls the buyers who answer. Buyers trust the person who will actually show them the property, so the call should come from you, ideally the same day.',
  },
  {
    question: 'How much does a real estate lead cost?',
    answer:
      'It depends on the city, the price band, how narrow the targeting is and how many questions the form asks. A cheap lead that never picks up costs more in the end, so we judge campaigns on cost per site visit, not cost per lead. We give you a realistic range for your project on the free audit call.',
  },
  {
    question: 'Is the ad spend included in your fee?',
    answer: `No. You pay Meta directly from your own ad account, so you see every rupee spent. We recommend at least ${MIN_AD_BUDGET} a month per project.`,
  },
  {
    question: 'Is there a lock-in contract?',
    answer: 'No. After the setup fee, the system runs month-to-month. You can stop with 30 days’ notice.',
  },
  {
    question: 'Who owns the landing page, ad account and leads?',
    answer:
      'You do. The ad account, Facebook page, WhatsApp number and lead sheet are all in your name. If you stop working with us, everything stays with you.',
  },
  {
    question: 'Are there any other costs?',
    answer:
      'WhatsApp Business API messages are charged by Meta per conversation, usually a small amount each month. We tell you the expected cost before setup.',
  },
  {
    question: 'I already have a website. Do I still need a landing page?',
    answer:
      'Yes. A website tells buyers about your business. A landing page is built for one project and one action, the enquiry, so ads convert better when they send buyers there.',
  },
  {
    question: 'Can this target NRI buyers abroad?',
    answer:
      'Yes. NRI campaigns run as a separate track with their own ads, page, budget and report, starting with the UAE and the Gulf. Leads abroad usually cost more than in India, so the NRI track needs its own ad budget.',
  },
  {
    question: 'Which cities do you work in?',
    answer: 'Kanpur, Lucknow, Noida, Greater Noida and Delhi NCR. The setup is done remotely, so other cities are possible too.',
  },
];
