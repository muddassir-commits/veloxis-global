// Content for /services/[slug]. Every slug must match an entry here (see generateStaticParams).
// Keyword targets: docs/SEO.md. Do not add results or numbers we can't verify.

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBlock {
  title: string;
  desc: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  /** Short name used in cards, navigation and breadcrumbs. */
  title: string;
  emoji: string;
  icon: string;
  accentColor: 'teal' | 'indigo' | 'orange';
  seoTitle: string;
  metaDescription: string;
  /** schema.org serviceType */
  serviceType: string;
  eyebrow: string;
  h1: string;
  shortDesc: string;
  intro: string[];
  problemsHeading: string;
  problems: ServiceBlock[];
  deliverablesHeading: string;
  deliverables: ServiceBlock[];
  process: ServiceBlock[];
  whoFor: ServiceBlock[];
  toolsNote?: string;
  pricingRange: string;
  benefits: string[];
  relatedServices: string[];
  relatedPlaybook: string;
  relatedPosts: string[];
  cta: string;
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'landing-pages',
    slug: 'high-converting-landing-pages',
    title: 'Landing Pages & Project Microsites',
    emoji: '⚡',
    icon: 'Code',
    accentColor: 'teal',
    seoTitle: 'Real Estate Landing Page & Microsite Design | Veloxis',
    metaDescription:
      'Real estate landing pages and project microsites with RERA details, price sheet capture, WhatsApp enquiry and fast mobile load. Built for builders and CPs.',
    serviceType: 'Real estate landing page design',
    eyebrow: 'Landing pages & microsites',
    h1: 'Real estate landing pages that turn ad clicks into site visits',
    shortDesc:
      'One focused page per project: location, starting price, RERA details and a WhatsApp enquiry button above the fold, built to load fast on a phone and track every lead back to its ad.',
    intro: [
      'Most property ads send buyers to one of two places: a builder’s corporate website where the project is three clicks deep, or a portal listing that shows five competing projects next to yours. Neither is built to turn a paid click into an enquiry.',
      'A real estate landing page does one job. It answers the questions a buyer has in the first ten seconds — where is it, what does it cost, is it RERA registered, when is possession — and makes it easy to ask for the price sheet or book a site visit on WhatsApp. We build these pages for new launches, individual towers and phases, and ready-to-move inventory, and connect them to your ads and CRM from day one.',
    ],
    problemsHeading: 'Why property ad traffic doesn’t turn into enquiries',
    problems: [
      {
        title: 'Traffic goes to the wrong page',
        desc: 'Ads land on a slow corporate site or a portal listing. The buyer has to hunt for the project, and many leave before they find the enquiry form.',
      },
      {
        title: 'Price and RERA details are hidden',
        desc: '“Price on request” and a missing RERA number make an unknown project look risky. Buyers who can’t judge the budget fit don’t leave their number.',
      },
      {
        title: 'The form asks for too much',
        desc: 'Long forms and no WhatsApp option put off buyers who expect to be flooded with calls from telecallers the moment they submit.',
      },
      {
        title: 'Nobody knows which ad produced the site visit',
        desc: 'Without proper tracking, spend decisions are made on clicks and form fills instead of the leads that actually visited and booked.',
      },
    ],
    deliverablesHeading: 'What your project landing page includes',
    deliverables: [
      {
        title: 'A page per project, tower or phase',
        desc: 'Written around one launch or inventory set, with its own URL you can use in Google Ads, Meta ads, WhatsApp broadcasts and CP campaigns.',
      },
      {
        title: 'Decision details above the fold',
        desc: 'Project name, locality, configuration (2/3/4 BHK), starting price, possession timeline and the RERA registration number with QR code where your state requires it.',
      },
      {
        title: 'Price sheet and brochure capture',
        desc: 'The cost sheet, floor plans and e-brochure are sent on WhatsApp after a buyer shares their number — so every download becomes a lead you can follow up.',
      },
      {
        title: 'Location, connectivity and amenities',
        desc: 'Metro, expressway, schools and offices nearby, shown the way buyers compare localities, plus amenity and construction-progress sections.',
      },
      {
        title: 'WhatsApp and call buttons that stay visible',
        desc: 'Sticky “Chat on WhatsApp” and “Call” buttons on mobile, and a short form with only the questions your sales team needs.',
      },
      {
        title: 'Tracking that ties leads to ads',
        desc: 'Google Analytics 4, Meta Pixel with Conversions API and Google Ads conversion tags, with UTM-tagged links for each campaign and channel partner.',
      },
      {
        title: 'Fast on a mid-range phone',
        desc: 'Built in Next.js with compressed images and no page-builder bloat, and tested on a mid-range Android phone over 4G before launch.',
      },
      {
        title: 'CP-ready versions',
        desc: 'Tagged links or separate copies of the page for channel partners, so their leads are attributed to them and not lost in a shared inbox.',
      },
    ],
    process: [
      { title: 'Collect project inputs', desc: 'Price sheet, RERA details, brochure, renders, floor plans, location pins and your sales team’s most common buyer questions.' },
      { title: 'Structure and copy', desc: 'We write the page from those inputs and share a wireframe so you can check facts and priorities before design.' },
      { title: 'Design and build', desc: 'The page is built, speed-tested on mobile and connected to WhatsApp, your CRM or a Google Sheet.' },
      { title: 'Tracking and test leads', desc: 'We fire test enquiries through every form and button and confirm they reach your team and show up as conversions.' },
      { title: 'Launch and improve', desc: 'The page goes live with your ads. We review form completion and drop-off weekly and adjust sections, offers and forms.' },
    ],
    whoFor: [
      { title: 'Developers and builders', desc: 'Launching a project or phase, or clearing ready-to-move inventory, and tired of sending ad budgets to the corporate site.' },
      { title: 'Channel partners', desc: 'Mandated on a project and needing a page of their own, instead of sharing the builder’s link with every other CP.' },
      { title: 'Brokers and property consultants', desc: 'Promoting resale or rental inventory and wanting enquiries to come to them, not to a portal.' },
    ],
    pricingRange: 'Starts from ₹15,000 / month',
    benefits: ['RERA details above the fold', 'WhatsApp price-sheet capture', 'Built to load fast on mobile'],
    relatedServices: ['paid-ads', 'ai-automation'],
    relatedPlaybook: 'project-landing-page-blueprint',
    relatedPosts: ['real-estate-landing-page-conversion-hacks', 'real-estate-ad-examples'],
    cta: 'Get a free landing page review',
    faqs: [
      {
        question: 'What is the difference between a landing page and a real estate website?',
        answer:
          'A website covers the whole company — all projects, history, careers. A landing page is built for one project or offer and one action: an enquiry or site-visit booking. Paid ads convert better on a landing page because the buyer sees exactly the project they clicked on, with nothing else competing for attention.',
      },
      {
        question: 'How long does it take to build a project landing page?',
        answer:
          'Most pages go live in 3 to 7 working days once we have the price sheet, RERA details, brochure, renders and floor plans. Pages with several towers or configurations can take longer.',
      },
      {
        question: 'Do you show the RERA number on the page?',
        answer:
          'Yes. Every page for a registered project shows the RERA registration number and the RERA website address, and the QR code where the state authority requires it. We don’t build pages that sell a project before it is registered.',
      },
      {
        question: 'Should the page show the price or say “price on request”?',
        answer:
          'We recommend showing at least a starting price or price band. Buyers use it to decide whether the project fits their budget, and a clear price usually brings fewer but more serious enquiries. The detailed cost sheet can still be sent on WhatsApp after the buyer shares their number.',
      },
      {
        question: 'Can the page send leads to our CRM?',
        answer:
          'Yes. Form and WhatsApp leads can be pushed to the CRMs commonly used in Indian real estate — such as Sell.Do, LeadSquared or Zoho — through their API or webhooks, or to a Google Sheet if you don’t use a CRM yet.',
      },
      {
        question: 'Can channel partners get their own version of the page?',
        answer:
          'Yes. We can give each CP a tagged link that records them as the lead source, or a separate copy of the page under their brand, depending on how your CP programme is set up.',
      },
      {
        question: 'Will the page load fast on mobile?',
        answer:
          'Yes. Pages are built in Next.js with compressed images and no page-builder bloat, and tested on a mid-range Android phone over 4G, aiming for Google’s “good” Core Web Vitals thresholds.',
      },
      {
        question: 'Do you write the content, or do we?',
        answer:
          'We write it, using your brochure, price sheet and sales team’s input, and send it to you for fact-checking before launch. You approve every price, date and claim on the page.',
      },
    ],
  },
  {
    id: 'paid-ads',
    slug: 'paid-ads',
    title: 'Meta & Google Ads',
    emoji: '🎯',
    icon: 'Target',
    accentColor: 'indigo',
    seoTitle: 'Real Estate Lead Generation (Meta & Google Ads) | Veloxis',
    metaDescription:
      'Real estate lead generation with Meta and Google ads: project and locality keywords, Lead Ads with qualifying questions, and reporting on cost per site visit.',
    serviceType: 'Real estate lead generation',
    eyebrow: 'Meta & Google ads',
    h1: 'Real estate lead generation with Meta and Google ads',
    shortDesc:
      'Google Search for buyers already looking, Meta for new launches and retargeting, and reporting on the number that matters to your sales team: cost per site visit.',
    intro: [
      'Most builders and brokers we speak to already get leads. The complaint is what happens next: numbers that don’t pick up, enquiries that were never serious, and portal leads shared with five other brokers before the first call.',
      'We run Meta and Google ads so that the leads you get are exclusive to you and easier to qualify. Google Search catches buyers searching for your project, locality or configuration. Meta builds volume around a launch and retargets people who already saw the project. Both are judged on site visits, not clicks.',
    ],
    problemsHeading: 'Where real estate ad budgets usually leak',
    problems: [
      {
        title: '“Fake leads” that are really unqualified leads',
        desc: 'Broad Meta forms collect curious scrollers. Without qualifying questions and quick follow-up, they look like fake numbers to the sales team.',
      },
      {
        title: 'Platforms optimising for form fills',
        desc: 'If Meta and Google are only told about form submissions, they find more people who fill forms — not people who visit and book.',
      },
      {
        title: 'Shared portal leads',
        desc: 'Portal enquiries go to several brokers at once. Your own campaigns produce leads that nobody else gets an hour later.',
      },
      {
        title: 'Reports built on clicks',
        desc: 'Impressions and cost per click say little about sales. Budget should move towards the campaigns that produce site visits.',
      },
    ],
    deliverablesHeading: 'What we set up and run',
    deliverables: [
      {
        title: 'Google Search campaigns',
        desc: 'Ad groups for project-name, locality (“3 BHK in Sector 150 Noida”) and property-type searches, with negative keywords that filter out rentals, jobs and portal browsing.',
      },
      {
        title: 'Meta lead campaigns',
        desc: 'Instant forms and click-to-WhatsApp ads on Facebook and Instagram, set up under Meta’s rules for housing ads where they apply.',
      },
      {
        title: 'Qualifying questions',
        desc: 'Budget band, configuration, preferred location and buying timeline on every form, so your team can prioritise calls.',
      },
      {
        title: 'Creatives buyers stop for',
        desc: 'Walkthrough videos, real site photos and location-led statics, with the RERA number on every creative.',
      },
      {
        title: 'Retargeting',
        desc: 'Follow-up ads to people who visited the project page, watched a video or opened a form without submitting.',
      },
      {
        title: 'Feeding results back to the platforms',
        desc: 'Offline conversions and the Meta Conversions API report qualified leads and site visits back, so bidding learns from outcomes, not form fills.',
      },
      {
        title: 'Weekly reporting on site visits',
        desc: 'Leads, contact rate, site visits and cost per site visit by campaign — in plain language, every week.',
      },
    ],
    process: [
      { title: 'Audit', desc: 'We review your current accounts, landing pages, lead handling and the competing projects buyers see for the same searches.' },
      { title: 'Plan', desc: 'Channel split, campaign structure, keyword groups, audiences, creatives and a budget recommendation for your location and ticket size.' },
      { title: 'Set up tracking', desc: 'Conversion tags, CRM or sheet connection and offline conversion upload, so leads and site visits are measured before launch.' },
      { title: 'Launch', desc: 'Campaigns go live with a landing page and instant WhatsApp reply in place.' },
      { title: 'Optimise weekly', desc: 'Search terms, audiences, creatives and budgets are adjusted every week towards the campaigns producing site visits.' },
    ],
    whoFor: [
      { title: 'Developers with a launch or unsold inventory', desc: 'Who need a steady flow of site visits without depending only on portals and brokers.' },
      { title: 'Channel partners and brokers', desc: 'Who want exclusive leads for the projects they are mandated on, instead of shared portal enquiries.' },
      { title: 'Teams with a follow-up process', desc: 'Ads work best when someone — or a WhatsApp automation — responds within minutes. We help set that up too.' },
    ],
    toolsNote: 'Ad spend is paid directly to Google and Meta from your own ad accounts. Our fee covers strategy, setup, creatives and weekly optimisation.',
    pricingRange: 'Starts from ₹25,000 / month',
    benefits: ['Project & locality keywords', 'Qualifying lead forms', 'Cost-per-site-visit reporting'],
    relatedServices: ['high-converting-landing-pages', 'ai-automation'],
    relatedPlaybook: 'new-launch-meta-google-ads-plan',
    relatedPosts: ['google-ads-vs-meta-ads-real-estate-india', 'real-estate-ad-examples'],
    cta: 'Get a free ads audit',
    faqs: [
      {
        question: 'Is ad spend included in your fee?',
        answer:
          'No. Ad spend is paid directly to Google and Meta from your own ad accounts, so you keep full control and visibility. Our monthly fee covers strategy, setup, creatives and optimisation.',
      },
      {
        question: 'Which is better for real estate: Google Ads or Meta ads?',
        answer:
          'They do different jobs. Google Search reaches buyers who are already searching for a project, locality or configuration, so leads tend to be more ready. Meta reaches people who aren’t searching yet, which suits launches, awareness and retargeting. Most projects use both, with the split decided by stage and budget.',
      },
      {
        question: 'How do you reduce fake or junk leads?',
        answer:
          'Qualifying questions on every form, higher-intent form settings, negative keywords on Google, excluding audiences like renters and job-seekers, and sending qualified-lead and site-visit data back to the platforms so they learn what a good lead looks like. Fast follow-up matters just as much: many “fake” leads are real people who were called too late.',
      },
      {
        question: 'What budget do we need?',
        answer:
          'It depends on the location, ticket size and how many site visits you need. We recommend a budget after the audit. We won’t start campaigns on a budget too small for the platforms to learn from, because that wastes your money.',
      },
      {
        question: 'Do real estate ads need the RERA number?',
        answer:
          'Yes. Ads for RERA-registered projects should carry the registration number, and some states also require the QR code. We add it to every creative, including social posts and videos.',
      },
      {
        question: 'How soon will we get leads?',
        answer:
          'Campaigns usually start producing enquiries within the first week of going live. Cost per lead and lead quality typically improve over the following weeks as campaigns are optimised on real results.',
      },
      {
        question: 'What will you report on?',
        answer:
          'Every week: leads by campaign, how many were contacted, site visits booked and done, and cost per site visit. Clicks and impressions are there if you want them, but they are not the headline.',
      },
      {
        question: 'Can you run ads for channel partners, not just developers?',
        answer:
          'Yes, as long as the CP is authorised to market the project and the ads follow the developer’s and RERA’s rules on project names, pricing and claims.',
      },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'WhatsApp Chatbot & Automation',
    emoji: '🤖',
    icon: 'Zap',
    accentColor: 'orange',
    seoTitle: 'Real Estate Chatbot & WhatsApp Automation | Veloxis',
    metaDescription:
      'WhatsApp chatbots and CRM automation for real estate: instant replies to every enquiry, lead qualification, site-visit booking, reminders and CP lead tagging.',
    serviceType: 'Real estate chatbot and WhatsApp automation',
    eyebrow: 'WhatsApp chatbot & automation',
    h1: 'A real estate chatbot that answers every enquiry on WhatsApp in seconds',
    shortDesc:
      'Every lead — from ads, your website or portals — gets an instant WhatsApp reply with the brochure, a few qualifying questions and a site-visit slot, then lands with the right salesperson or CP.',
    intro: [
      'Property buyers enquire with several projects at once, often late in the evening after the sales team has gone home. The first reply usually wins the conversation — and the site visit.',
      'We set up WhatsApp chatbots and follow-up automation that reply the moment an enquiry comes in, ask the questions your sales team would ask, book site visits and remind buyers before they come. Leads are routed to the right person and recorded in your CRM, so nothing sits in someone’s personal phone.',
    ],
    problemsHeading: 'Where real estate leads go cold',
    problems: [
      {
        title: 'Enquiries arrive after office hours',
        desc: 'Buyers browse in the evening. A lead that waits until the next morning has usually spoken to other projects by then.',
      },
      {
        title: 'One call, then silence',
        desc: 'Salespeople often try once or twice and move on, while most buyers need several touches before they agree to a visit.',
      },
      {
        title: 'Leads scattered everywhere',
        desc: 'Portal emails, Meta forms, WhatsApp chats and Excel sheets — nobody can see which leads were contacted and which were missed.',
      },
      {
        title: 'Site-visit no-shows and CP disputes',
        desc: 'Booked visits that never happen, and arguments over which channel partner brought a buyer first.',
      },
    ],
    deliverablesHeading: 'What we build',
    deliverables: [
      {
        title: 'Official WhatsApp Business API number',
        desc: 'Set up through an official WhatsApp Business Solution Provider, with approved message templates and your brand name.',
      },
      {
        title: 'Instant reply with the brochure',
        desc: 'Every new lead gets a WhatsApp message within seconds with the e-brochure, price sheet or location, depending on what they asked for.',
      },
      {
        title: 'Qualifying chatbot',
        desc: 'Budget, configuration, preferred location and timeline asked conversationally, in English or Hinglish, with a handover to a person whenever the buyer wants one.',
      },
      {
        title: 'Site-visit booking and reminders',
        desc: 'Buyers pick a slot on WhatsApp and get reminders before the visit, with directions and the name of the person meeting them.',
      },
      {
        title: 'Lead routing',
        desc: 'Leads assigned to salespeople or channel partners by project, location or rotation, with a timestamp recorded at the moment of assignment.',
      },
      {
        title: 'CRM connection',
        desc: 'Leads, conversations and visit status pushed to your CRM — Sell.Do, LeadSquared, Zoho and others — or to a Google Sheet.',
      },
      {
        title: 'Follow-up sequences',
        desc: 'Scheduled messages for leads who went quiet: construction updates, offers, new inventory — sent only to people who opted in.',
      },
    ],
    process: [
      { title: 'Map your lead flow', desc: 'Where leads come from today, who calls them, what they’re asked and where things get dropped.' },
      { title: 'Design the conversations', desc: 'Messages, questions and handover rules written with your sales team and checked against WhatsApp’s template rules.' },
      { title: 'Build and connect', desc: 'WhatsApp number, chatbot flows, routing and CRM connection built and tested with dummy leads from every source.' },
      { title: 'Go live alongside ads', desc: 'The automation starts with your campaigns so every lead gets a response from the first day.' },
      { title: 'Review and refine', desc: 'Response times, drop-off points and visit bookings reviewed regularly, and flows adjusted.' },
    ],
    whoFor: [
      { title: 'Developers with a sales team', desc: 'Who get more enquiries than the team can call quickly, especially from ads and portals.' },
      { title: 'Channel partners', desc: 'Who need to reply as fast as a large team and prove when each lead was registered.' },
      { title: 'Brokers and consultants', desc: 'Working alone or in small teams, who can’t answer every enquiry personally at 10 pm.' },
    ],
    toolsNote:
      'We build on the official WhatsApp Business API and work with the CRM you already use. WhatsApp message charges are billed by Meta through your provider and are separate from our fee.',
    pricingRange: 'Starts from ₹30,000 / month',
    benefits: ['Instant WhatsApp replies', 'Site-visit booking & reminders', 'CRM & CP lead routing'],
    relatedServices: ['paid-ads', 'high-converting-landing-pages'],
    relatedPlaybook: 'whatsapp-lead-response-flow',
    relatedPosts: ['whatsapp-automation-for-real-estate-leads', 'channel-partner-in-real-estate'],
    cta: 'Get a free lead-flow audit',
    faqs: [
      {
        question: 'Do we need the WhatsApp Business API, or is the WhatsApp Business app enough?',
        answer:
          'The free WhatsApp Business app works on one phone and can’t be connected to a chatbot, CRM or routing rules. Automation needs the WhatsApp Business API, which we set up through an official Business Solution Provider.',
      },
      {
        question: 'Can the chatbot understand Hinglish?',
        answer:
          'Yes. Buyers can tap quick-reply buttons or type freely in English or Hinglish. Anything the bot isn’t sure about is handed to a salesperson instead of guessed.',
      },
      {
        question: 'Will a chatbot replace our sales team?',
        answer:
          'No. It handles the first reply, the basic questions and the reminders, so your salespeople spend their time on buyers who are qualified and ready to visit.',
      },
      {
        question: 'Can portal leads from 99acres, MagicBricks or Housing.com be included?',
        answer:
          'In most cases, yes — through the portal’s lead API or its lead notification emails, depending on what your portal plan provides. Those leads then get the same instant WhatsApp reply as your ad leads.',
      },
      {
        question: 'Which CRMs do you work with?',
        answer:
          'We connect to the CRM you already use through its API or webhooks, including real estate CRMs like Sell.Do and LeadSquared and general CRMs like Zoho. If you don’t have a CRM, we can start with a Google Sheet.',
      },
      {
        question: 'How do you handle consent?',
        answer:
          'Automated WhatsApp messages only go to people who shared their number with you and agreed to be contacted, and every message template is approved by WhatsApp before use. Buyers can opt out at any time.',
      },
      {
        question: 'Who pays for WhatsApp messages?',
        answer:
          'WhatsApp message charges are set by Meta and billed through your WhatsApp Business Solution Provider, separately from our fee.',
      },
      {
        question: 'Does this help with channel partner lead disputes?',
        answer:
          'It helps. Every lead is logged with its source and the time it was registered and assigned, which gives you a clear record when two parties claim the same buyer.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
