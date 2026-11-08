// Content for /services/[slug]. Every slug must match an entry here (see generateStaticParams).
// Multi-niche since 8 Nov 2026: E-commerce & D2C, local businesses & clinics, real estate.
// Keyword targets: docs/SEO.md. Do not add results or numbers we can't verify.

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBlock {
  title: string;
  desc: string;
}

export interface ServiceIndustryBlock {
  title: string;
  desc: string;
  href: string;
  linkLabel: string;
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
  /** schema.org audience */
  audience: string;
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
  benefits: string[];
  /** One block per niche, shown under "By industry" */
  byIndustry: ServiceIndustryBlock[];
  relatedServices: string[];
  /** Real estate example plan (optional) */
  relatedPlaybook?: string;
  relatedPosts: string[];
  cta: string;
  faqs: ServiceFAQ[];
}

const ECOM = '/industries/ecommerce';
const LOCAL = '/industries/local-business';
const RE = '/industries/real-estate';

export const servicesData: ServiceData[] = [
  {
    id: 'paid-ads',
    slug: 'paid-ads',
    title: 'Meta & Google Ads',
    emoji: '🎯',
    icon: 'Target',
    accentColor: 'indigo',
    seoTitle: 'Meta & Google Ads Management for Leads and Sales',
    metaDescription:
      'Meta and Google ads management for e-commerce brands, local businesses and real estate, tracked on orders and enquiries, not clicks. Free audit.',
    serviceType: 'Meta and Google Ads management',
    audience: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers',
    eyebrow: 'Meta (Facebook) & Google ads',
    h1: 'Meta & Google Ads Management for Leads and Sales',
    shortDesc:
      'Google Search for people already looking, Meta for new customers and retargeting, and reporting on the number that matters to your business: orders, bookings or qualified enquiries.',
    intro: [
      'Most businesses that advertise already get clicks. The complaint is what happens next: leads that don’t pick up, visitors who never buy, and reports full of impressions with no link to revenue.',
      'We run Meta ads (Facebook and Instagram) and Google ads so that spend is judged on outcomes. Google Search catches people who are searching for what you sell right now. Meta builds demand, reaches new audiences and retargets people who already visited. Both are set up with proper conversion tracking, so the platforms learn from real orders and enquiries, not just form fills and clicks.',
      'The ad accounts stay in your name and ad spend is paid directly to Google and Meta. Our fee covers strategy, setup, creatives and weekly optimisation.',
    ],
    problemsHeading: 'Where ad budgets usually leak',
    problems: [
      {
        title: 'Optimising for clicks, not outcomes',
        desc: 'If the platforms are only told about clicks or form fills, they find more people who click and fill forms, not people who buy or book.',
      },
      {
        title: 'Weak or missing tracking',
        desc: 'No Conversions API, no offline conversions and untagged links mean decisions are made on guesses about which campaign actually produced the sale.',
      },
      {
        title: 'Ads sending traffic to the wrong page',
        desc: 'A homepage, a slow page or a cluttered product listing loses people who were ready to act. The page matters as much as the ad.',
      },
      {
        title: 'Slow follow-up on leads',
        desc: 'Enquiries that wait hours for a reply go cold. Many “fake leads” are real people who were called too late.',
      },
    ],
    deliverablesHeading: 'What we set up and run',
    deliverables: [
      {
        title: 'Google Ads campaigns',
        desc: 'Search, Shopping and Performance Max where they fit, with keyword groups built around what your customers actually type and negative keywords that cut wasted clicks.',
      },
      {
        title: 'Meta (Facebook & Instagram) campaigns',
        desc: 'Prospecting, retargeting, catalogue ads for stores and lead or click-to-WhatsApp ads for service businesses, set up under Meta’s ad policies.',
      },
      {
        title: 'Conversion tracking that works',
        desc: 'GA4, Google Ads conversions, Meta Pixel and Conversions API, plus offline conversions where leads close by phone or WhatsApp.',
      },
      {
        title: 'Creatives that stop the scroll',
        desc: 'Static ads, short videos and carousels built from your real products, premises and offers, written to be clear rather than clever.',
      },
      {
        title: 'Qualifying questions on lead forms',
        desc: 'The right questions on every form so your team knows who to call first and junk enquiries are filtered out early.',
      },
      {
        title: 'Retargeting',
        desc: 'Follow-up ads to people who viewed a product, started checkout, opened a form or watched a video without taking the next step.',
      },
      {
        title: 'Weekly reporting in plain language',
        desc: 'Spend, leads or orders, cost per result and what we are changing next, every week. Clicks and impressions are there if you want them, but they are not the headline.',
      },
    ],
    process: [
      { title: 'Audit', desc: 'We review your current ad accounts, tracking, landing pages and how enquiries are handled, and look at what competitors show for the same searches.' },
      { title: 'Plan', desc: 'Channel split, campaign structure, audiences, creatives and a budget recommendation for your market and average order or customer value.' },
      { title: 'Set up tracking', desc: 'Conversion tags, Conversions API and CRM or sheet connection, so results are measured before launch.' },
      { title: 'Launch', desc: 'Campaigns go live with a landing page and a fast reply in place, so the first clicks are not wasted.' },
      { title: 'Optimise weekly', desc: 'Search terms, audiences, creatives and budgets are adjusted every week towards the campaigns producing orders and qualified enquiries.' },
    ],
    whoFor: [
      { title: 'E-commerce and D2C brands', desc: 'Who want more orders from their own store and a clear view of cost per order.' },
      { title: 'Local businesses and clinics', desc: 'Who need a steady flow of calls, bookings and WhatsApp enquiries from nearby customers.' },
      { title: 'Real estate developers, brokers and CPs', desc: 'Who want exclusive leads and site visits instead of shared portal enquiries.' },
    ],
    toolsNote: 'Ad spend is paid directly to Google and Meta from your own ad accounts. Our fee covers strategy, setup, creatives and weekly optimisation.',
    benefits: ['Judged on orders and enquiries', 'Tracking built before launch', 'You own the ad accounts'],
    byIndustry: [
      {
        title: 'E-commerce & D2C',
        desc: 'Catalogue and prospecting ads on Meta, Search and Shopping on Google, retargeting for abandoned carts, all reported on orders and cost per order.',
        href: ECOM,
        linkLabel: 'E-commerce marketing',
      },
      {
        title: 'Local businesses & clinics',
        desc: 'Google Search and Maps-led campaigns for people nearby, plus Meta lead and click-to-WhatsApp ads, measured on calls and booked appointments.',
        href: LOCAL,
        linkLabel: 'Local business marketing',
      },
      {
        title: 'Real estate',
        desc: 'Project and locality keywords on Google, Meta launch and retargeting campaigns, qualifying forms, with the RERA number on every creative. Reported on site visits.',
        href: RE,
        linkLabel: 'Real estate marketing',
      },
    ],
    relatedServices: ['high-converting-landing-pages', 'ai-automation', 'seo'],
    relatedPlaybook: 'new-launch-meta-google-ads-plan',
    relatedPosts: [
      'meta-ads-for-d2c-brands',
      'google-ads-vs-meta-ads-real-estate-india',
      'meta-ads-for-real-estate-india',
      'google-ads-for-real-estate-india',
    ],
    cta: 'Get a free ads audit',
    faqs: [
      {
        question: 'Is ad spend included in your fee?',
        answer:
          'No. Ad spend is paid directly to Google and Meta from your own ad accounts, so you keep full control and visibility. Our monthly fee covers strategy, setup, creatives and optimisation.',
      },
      {
        question: 'Which is better for my business: Google Ads or Meta ads?',
        answer:
          'They do different jobs. Google Search reaches people who are already searching, so it suits businesses where customers look for a product or service when they need it. Meta reaches people who are not searching yet, which suits new products, launches, offers and retargeting. Most businesses use both, with the split decided by your goal and budget.',
      },
      {
        question: 'What budget do we need to start?',
        answer:
          'It depends on your market, average order value and how many orders or enquiries you need. We recommend a budget after the audit. We won’t start campaigns on a budget too small for the platforms to learn from, because that wastes your money.',
      },
      {
        question: 'How do you reduce fake or junk leads?',
        answer:
          'Qualifying questions on every form, higher-intent form settings, negative keywords on Google, audience exclusions, and sending qualified-lead and sale data back to the platforms so they learn what a good customer looks like. Fast follow-up matters just as much: many “fake” leads are real people who were called too late.',
      },
      {
        question: 'Do you run ads for e-commerce stores, clinics and real estate?',
        answer:
          'Yes, those are the three kinds of business we work with: e-commerce and D2C brands, local businesses and clinics, and real estate developers, brokers and channel partners. Each has its own campaign structure and its own success measure.',
      },
      {
        question: 'How soon will we see results?',
        answer:
          'Campaigns usually start producing clicks and enquiries within the first week of going live. The platforms need some time to learn, so cost per result and quality typically improve over the following weeks as campaigns are optimised on real outcomes. We don’t promise a specific number.',
      },
      {
        question: 'What will you report on?',
        answer:
          'Every week: spend, leads or orders, cost per result and what we are changing next. For stores that means orders and cost per order; for local businesses, calls and bookings; for real estate, leads, site visits and cost per site visit.',
      },
      {
        question: 'Do we own the ad accounts?',
        answer:
          'Yes. Ads run from accounts in your name, and you can see everything. If you stop working with us, the accounts, audiences and data stay with you. We work month-to-month with 30 days’ notice.',
      },
    ],
  },
  {
    id: 'landing-pages',
    slug: 'high-converting-landing-pages',
    title: 'Websites & Landing Pages',
    emoji: '⚡',
    icon: 'Code',
    accentColor: 'teal',
    seoTitle: 'Websites & Landing Pages That Turn Visits into Sales',
    metaDescription:
      'Fast, mobile-first websites, store fixes and landing pages for e-commerce, local businesses and real estate, with tracking and WhatsApp enquiry built in.',
    serviceType: 'Website and landing page design',
    audience: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers',
    eyebrow: 'Websites & landing pages',
    h1: 'Websites and Landing Pages That Turn Visits into Sales',
    shortDesc:
      'One focused page per offer: what you sell, why it is worth it, proof, a clear price or next step and a WhatsApp or booking button above the fold, built to load fast on a phone and track every lead back to its ad.',
    intro: [
      'Most paid traffic lands on a page that was not built for it: a homepage where the offer is three clicks deep, a slow site, or a product page with no reason to buy now. The ad did its job; the page lost the visitor.',
      'A landing page does one job. It answers the questions a visitor has in the first ten seconds, shows the proof and makes the next step easy: add to cart, book an appointment, or ask for the price on WhatsApp. We build landing pages, small business websites and improvements to existing Shopify and WooCommerce stores, and connect them to your ads and tracking from day one.',
    ],
    problemsHeading: 'Why website traffic doesn’t turn into customers',
    problems: [
      {
        title: 'Traffic goes to the wrong page',
        desc: 'Ads land on a homepage or a slow site. The visitor has to hunt for the offer, and many leave before they find the button.',
      },
      {
        title: 'The offer and next step are unclear',
        desc: 'No clear price band, offer or call to action means visitors can’t judge whether it is for them, so they don’t leave a number or buy.',
      },
      {
        title: 'Slow and awkward on a phone',
        desc: 'Most visitors arrive on mobile. Heavy images, pop-ups and long forms lose them quickly.',
      },
      {
        title: 'Nobody knows which ad produced the sale',
        desc: 'Without proper tracking, spend decisions are made on clicks instead of the enquiries and orders that actually happened.',
      },
    ],
    deliverablesHeading: 'What your page or website includes',
    deliverables: [
      {
        title: 'A page per offer, product line or project',
        desc: 'Written around one offer, with its own URL you can use in Google Ads, Meta ads and WhatsApp broadcasts.',
      },
      {
        title: 'Decision details above the fold',
        desc: 'What it is, who it is for, the price or starting price, the main proof and one clear button, visible without scrolling on a phone.',
      },
      {
        title: 'Proof you can stand behind',
        desc: 'Real photos, real policies (delivery, returns, credentials) and only genuine reviews, so the page earns trust without made-up claims.',
      },
      {
        title: 'WhatsApp, call and booking buttons',
        desc: 'Sticky “Chat on WhatsApp”, “Call” or “Book” buttons on mobile, and a short form with only the questions your team needs.',
      },
      {
        title: 'Store and checkout improvements',
        desc: 'For e-commerce: product page layout, collection pages, cart and checkout friction, and mobile speed on Shopify or WooCommerce.',
      },
      {
        title: 'Tracking that ties results to ads',
        desc: 'Google Analytics 4, Meta Pixel with Conversions API and Google Ads conversion tags, with UTM-tagged links for each campaign.',
      },
      {
        title: 'Fast on a mid-range phone',
        desc: 'Built with compressed images and no page-builder bloat, and tested on a mid-range Android phone over 4G before launch.',
      },
      {
        title: 'Search-friendly structure',
        desc: 'Clean headings, titles, schema and internal links, so pages can also be found in search and read by AI tools.',
      },
    ],
    process: [
      { title: 'Collect inputs', desc: 'Offer details, price list, photos, policies, existing site access and the questions your customers ask most.' },
      { title: 'Structure and copy', desc: 'We write the page from those inputs and share a wireframe so you can check facts and priorities before design.' },
      { title: 'Design and build', desc: 'The page is built, speed-tested on mobile and connected to WhatsApp, your CRM or a Google Sheet.' },
      { title: 'Tracking and test enquiries', desc: 'We fire test enquiries and orders through every form and button and confirm they reach your team and show up as conversions.' },
      { title: 'Launch and improve', desc: 'The page goes live with your ads. We review conversion rate and drop-off regularly and adjust sections, offers and forms.' },
    ],
    whoFor: [
      { title: 'E-commerce and D2C brands', desc: 'With traffic but a weak add-to-cart or checkout rate, or a store that is slow on mobile.' },
      { title: 'Local businesses and clinics', desc: 'That need a clear website with services, locations, reviews and a booking or WhatsApp button.' },
      { title: 'Real estate developers and brokers', desc: 'Launching a project and tired of sending ad budgets to the corporate site.' },
    ],
    benefits: ['Mobile-first and fast', 'WhatsApp and booking buttons', 'Tracking built in'],
    byIndustry: [
      {
        title: 'E-commerce & D2C',
        desc: 'Product and collection page improvements, faster mobile experience, checkout fixes and landing pages for each campaign or offer.',
        href: ECOM,
        linkLabel: 'E-commerce marketing',
      },
      {
        title: 'Local businesses & clinics',
        desc: 'A clear website for each location or service, with opening details, reviews, map and a booking or WhatsApp button, built to be found on Google.',
        href: LOCAL,
        linkLabel: 'Local business marketing',
      },
      {
        title: 'Real estate',
        desc: 'A page per project, tower or phase, with the RERA number above the fold, price sheet capture on WhatsApp and tagged versions for channel partners.',
        href: RE,
        linkLabel: 'Real estate marketing',
      },
    ],
    relatedServices: ['paid-ads', 'seo', 'ai-automation'],
    relatedPlaybook: 'project-landing-page-blueprint',
    relatedPosts: ['real-estate-landing-page', 'real-estate-landing-page-conversion-hacks', 'meta-ads-for-d2c-brands'],
    cta: 'Get a free website review',
    faqs: [
      {
        question: 'What is the difference between a landing page and a website?',
        answer:
          'A website covers the whole business: all products or services, about, contact. A landing page is built for one offer and one action, such as an order, a booking or an enquiry. Paid ads convert better on a landing page because the visitor sees exactly what they clicked on, with nothing else competing for attention.',
      },
      {
        question: 'Do you work on Shopify and WooCommerce stores?',
        answer:
          'Yes. For existing stores we improve product pages, collection pages, speed and checkout friction, and connect tracking. For new offers we can build a separate landing page that sends buyers into your store.',
      },
      {
        question: 'How long does it take to build a landing page?',
        answer:
          'It depends mostly on how quickly we receive the inputs: offer details, photos, policies and access. We confirm a timeline once we have seen what exists, and share a wireframe before design so nothing is a surprise.',
      },
      {
        question: 'Will the page load fast on mobile?',
        answer:
          'That is the aim. Pages are built with compressed images and no page-builder bloat, tested on a mid-range Android phone over 4G, and aimed at Google’s “good” Core Web Vitals thresholds.',
      },
      {
        question: 'Can the page send leads to our CRM or WhatsApp?',
        answer:
          'Yes. Form and WhatsApp leads can be pushed to the CRM you already use through its API or webhooks, to a Google Sheet if you don’t use a CRM yet, or straight to a WhatsApp conversation.',
      },
      {
        question: 'Do you write the content, or do we?',
        answer:
          'We write it, using your inputs and your team’s knowledge, and send it to you for fact-checking before launch. You approve every price, policy and claim on the page.',
      },
      {
        question: 'Do you show real estate details like RERA numbers on property pages?',
        answer:
          'Yes. Every page for a registered project shows the RERA registration number and website address, and the QR code where the state authority requires it. We don’t build pages that sell a project before it is registered.',
      },
    ],
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO & Local SEO',
    emoji: '🔎',
    icon: 'Search',
    accentColor: 'teal',
    seoTitle: 'SEO & Local SEO Services for Growing Businesses',
    metaDescription:
      'On-page, technical and local SEO, Google Business Profile and AI search (GEO) for e-commerce, local businesses and real estate. Start with a free audit.',
    serviceType: 'Search engine optimisation and local SEO',
    audience: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers',
    eyebrow: 'SEO, local SEO & AI search',
    h1: 'SEO & Local SEO Services for Businesses That Want to Be Found',
    shortDesc:
      'On-page and technical SEO, helpful content, Google Business Profile and local search, plus making your pages easy for AI tools like ChatGPT and Google’s AI Overviews to read and quote.',
    intro: [
      'Search is where many customers start: “dentist near me”, “best running shoes for flat feet”, “flats in Sector 150”. If your pages don’t show up, or show up with a weak title and no reason to click, the visit goes to someone else.',
      'We improve the things that decide whether a page can be found, read and acted on: titles and headings, page structure, speed, crawlability, schema, helpful content and, for businesses that serve a local area, your Google Business Profile and local listings. We also make pages easy for AI search tools to read and quote, which is often called GEO (generative engine optimisation).',
      'SEO is slow and honest work: it takes weeks to months, and nobody can promise a ranking. What we promise is a clear audit, a prioritised fix list and steady work on the biggest gaps first.',
    ],
    problemsHeading: 'Why good businesses stay invisible in search',
    problems: [
      {
        title: 'Technical problems hide the pages',
        desc: 'Slow pages, broken links, duplicate titles, blocked pages and missing sitemaps stop search engines from indexing and trusting your site.',
      },
      {
        title: 'Pages that don’t match what people search',
        desc: 'Titles and headings written for the owner, not the customer, mean the page doesn’t match the words people type.',
      },
      {
        title: 'Weak or unclaimed Google Business Profile',
        desc: 'For local businesses, an incomplete profile, few photos and no review replies lose calls and direction requests to nearby competitors.',
      },
      {
        title: 'Invisible to AI search',
        desc: 'If your page is hard for AI tools to read, with text locked in scripts and no business schema, they are less likely to quote or recommend you.',
      },
    ],
    deliverablesHeading: 'What SEO work includes',
    deliverables: [
      {
        title: 'SEO audit and fix list',
        desc: 'A review of indexing, titles, headings, speed, mobile usability, schema and internal links, ranked by what will help most. You can start with our free website audit tool.',
      },
      {
        title: 'On-page SEO',
        desc: 'Keyword research, page titles, meta descriptions, headings and copy rewritten to match what your customers search and to earn the click.',
      },
      {
        title: 'Technical SEO',
        desc: 'Crawlability, sitemaps, redirects, canonical tags, page speed, structured data and mobile fixes.',
      },
      {
        title: 'Content that answers real questions',
        desc: 'Service, product and guide pages built around the questions customers ask, written by people who know the subject.',
      },
      {
        title: 'Local SEO',
        desc: 'Location and service pages, consistent business name, address and phone details across directories, and review requests that follow each platform’s rules.',
      },
      {
        title: 'Google Business Profile',
        desc: 'Profile setup and optimisation: categories, services, photos, posts, Q&A and review replies, for businesses that serve customers in a local area.',
      },
      {
        title: 'AI search visibility (GEO)',
        desc: 'Crawler access, readable HTML, business schema, question-style headings and clear answers, so tools like ChatGPT, Perplexity and Google’s AI Overviews can read and quote your pages.',
      },
      {
        title: 'Tracking and monthly reporting',
        desc: 'Google Search Console and GA4 set up, with a monthly report on impressions, clicks, enquiries and what we are fixing next.',
      },
    ],
    process: [
      { title: 'Audit', desc: 'We check your site, Search Console data, competitors and local profile, and list the biggest gaps first.' },
      { title: 'Plan', desc: 'A prioritised plan of fixes, pages to improve or create and profiles to claim, matched to your goals and effort.' },
      { title: 'Fix the foundations', desc: 'Technical and on-page issues are fixed first, because they hold everything else back.' },
      { title: 'Publish and build', desc: 'New and improved pages, Google Business Profile updates and local listings go live in a steady rhythm.' },
      { title: 'Measure and repeat', desc: 'Monthly review of search impressions, clicks and enquiries, then the next set of fixes.' },
    ],
    whoFor: [
      { title: 'Local businesses and clinics', desc: 'That depend on “near me” searches, Google Maps and reviews.' },
      { title: 'E-commerce and D2C brands', desc: 'That want category, product and guide pages to bring in orders without paying for every click.' },
      { title: 'Real estate developers and brokers', desc: 'That want project, locality and guide pages found by buyers researching before they enquire.' },
    ],
    benefits: ['Free audit to start', 'Google Business Profile & local SEO', 'AI search (GEO) ready pages'],
    byIndustry: [
      {
        title: 'E-commerce & D2C',
        desc: 'Collection and product page SEO, product schema, buying guides and comparison content, plus fixes for duplicate and thin pages that stores often generate.',
        href: ECOM,
        linkLabel: 'E-commerce marketing',
      },
      {
        title: 'Local businesses & clinics',
        desc: 'Google Business Profile, service-by-location pages, reviews, directory consistency and local schema, so nearby customers find you on Google Search and Maps.',
        href: LOCAL,
        linkLabel: 'Local business marketing',
      },
      {
        title: 'Real estate',
        desc: 'Project and locality pages, local SEO for brokers and channel partners, and guides on topics buyers research, such as RERA, EOI and price per square foot.',
        href: RE,
        linkLabel: 'Real estate marketing',
      },
    ],
    relatedServices: ['high-converting-landing-pages', 'paid-ads', 'ai-automation'],
    relatedPosts: ['generative-engine-optimization-guide', 'google-business-profile-checklist', 'local-seo-for-dentists', 'real-estate-seo-india'],
    cta: 'Get a free SEO audit',
    faqs: [
      {
        question: 'What is the difference between SEO and local SEO?',
        answer:
          'SEO is the work that helps your pages appear in search results for what people look for. Local SEO is the part aimed at nearby customers: your Google Business Profile, Google Maps ranking, reviews, location pages and consistent business details across directories. A shop, clinic or service business usually needs both.',
      },
      {
        question: 'How long does SEO take to work?',
        answer:
          'Usually weeks to months, depending on your site, competition and how much needs fixing. Technical fixes can show up sooner; new content takes longer. Anyone who promises a first-page ranking by a fixed date is guessing.',
      },
      {
        question: 'Do you guarantee rankings?',
        answer:
          'No. Nobody outside Google can. We commit to the work: a clear audit, a prioritised plan, fixes made properly and a monthly report on impressions, clicks and enquiries.',
      },
      {
        question: 'What is GEO or AI search optimisation?',
        answer:
          'GEO (generative engine optimisation) means making your pages easy for AI search tools such as ChatGPT, Perplexity and Google’s AI Overviews to read and quote: letting their crawlers in, keeping text in plain HTML, adding business schema and writing clear answers under question-style headings. It builds on good SEO rather than replacing it.',
      },
      {
        question: 'Do you set up and manage Google Business Profile?',
        answer:
          'Yes, for businesses that serve customers in a local area. We set up or claim the profile, choose categories and services, add photos and posts, and help you respond to reviews. We don’t buy reviews or post fake ones, because that breaks Google’s rules.',
      },
      {
        question: 'Can I check my website myself first?',
        answer:
          'Yes. Our free website audit tool checks any page for SEO basics, speed, tracking, lead capture and AI search readiness in under a minute, with no sign-up.',
      },
      {
        question: 'Is SEO better than paid ads?',
        answer:
          'They work on different timelines. Ads can bring visitors within days but stop when the budget stops. SEO takes longer to build but keeps working. Most businesses benefit from ads now and SEO alongside, and we can advise on the balance after an audit.',
      },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'WhatsApp & AI Automation',
    emoji: '🤖',
    icon: 'Zap',
    accentColor: 'orange',
    seoTitle: 'WhatsApp & AI Automation: Instant Replies for Every Lead',
    metaDescription:
      'WhatsApp Business API, AI chatbots and follow-ups for e-commerce, clinics, local businesses and real estate: reply in seconds, qualify, book and route to CRM.',
    serviceType: 'WhatsApp Business API and AI chatbot automation',
    audience: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers',
    eyebrow: 'WhatsApp & AI automation',
    h1: 'WhatsApp and AI Automation That Replies to Every Enquiry in Seconds',
    shortDesc:
      'Every lead, from ads, your website or marketplaces, gets an instant WhatsApp reply, a few qualifying questions and a next step, then lands with the right person and in your CRM.',
    intro: [
      'Customers enquire with several businesses at once, often late in the evening after your team has gone home. The first useful reply usually wins the order, the appointment or the site visit.',
      'We set up WhatsApp chatbots and follow-up automation that reply the moment an enquiry comes in, ask the questions your team would ask, book appointments or visits, send reminders and recover abandoned carts. Leads are routed to the right person and recorded in your CRM, so nothing sits in someone’s personal phone.',
      'The AI part is practical, not magic. The chatbot understands questions typed in English or Hinglish, answers only from details you approve, such as prices, timings, policies and availability, and hands the chat to a person whenever it isn’t sure. It never invents a price, an offer or a promise.',
    ],
    problemsHeading: 'Where leads and orders go cold',
    problems: [
      {
        title: 'Enquiries arrive after office hours',
        desc: 'People browse in the evening. A lead that waits until the next morning has usually spoken to someone else by then.',
      },
      {
        title: 'One call, then silence',
        desc: 'Teams often try once or twice and move on, while most customers need several touches before they decide.',
      },
      {
        title: 'Leads scattered everywhere',
        desc: 'Ad forms, website forms, marketplace messages, WhatsApp chats and Excel sheets. Nobody can see which leads were contacted and which were missed.',
      },
      {
        title: 'No-shows and abandoned carts',
        desc: 'Booked appointments that never happen, and carts left behind with no polite reminder.',
      },
    ],
    deliverablesHeading: 'What we build',
    deliverables: [
      {
        title: 'Official WhatsApp Business API number',
        desc: 'Set up through an official WhatsApp Business Solution Provider, with approved message templates and your brand name.',
      },
      {
        title: 'Instant reply with the right information',
        desc: 'Every new lead gets a message within seconds with the catalogue, price list, brochure, location or booking link, depending on what they asked for.',
      },
      {
        title: 'Qualifying chatbot',
        desc: 'Needs, budget, location and timeline asked conversationally, in English or Hinglish, with a handover to a person whenever the customer wants one.',
      },
      {
        title: 'Booking and reminders',
        desc: 'Customers pick a slot on WhatsApp and get reminders before the appointment or visit, with directions and the name of the person they will meet.',
      },
      {
        title: 'Order and cart messages',
        desc: 'For stores: order confirmations, shipping updates and polite abandoned-cart reminders, sent only to people who opted in.',
      },
      {
        title: 'Lead routing and CRM connection',
        desc: 'Leads assigned to team members by product, location or rotation, with conversations and status pushed to your CRM or a Google Sheet.',
      },
      {
        title: 'Follow-up sequences',
        desc: 'Scheduled messages for leads who went quiet, such as offers, new arrivals or updates, sent only to people who agreed to receive them.',
      },
    ],
    process: [
      { title: 'Map your lead flow', desc: 'Where leads come from today, who replies, what they are asked and where things get dropped.' },
      { title: 'Design the conversations', desc: 'Messages, questions and handover rules written with your team and checked against WhatsApp’s template rules.' },
      { title: 'Build and connect', desc: 'WhatsApp number, chatbot flows, routing and CRM connection built and tested with dummy leads from every source.' },
      { title: 'Go live alongside ads', desc: 'The automation starts with your campaigns so every lead gets a response from the first day.' },
      { title: 'Review and refine', desc: 'Response times, drop-off points and bookings reviewed regularly, and flows adjusted.' },
    ],
    whoFor: [
      { title: 'E-commerce and D2C brands', desc: 'Who answer many pre-purchase questions and want to recover abandoned carts.' },
      { title: 'Clinics and local businesses', desc: 'Who lose enquiries and bookings to missed calls and late replies.' },
      { title: 'Real estate teams and brokers', desc: 'Who get more enquiries than the team can call quickly, especially from ads and portals.' },
    ],
    toolsNote:
      'We build on the official WhatsApp Business API and work with the CRM you already use. WhatsApp message charges are billed by Meta through your provider and are separate from our fee.',
    benefits: ['Instant WhatsApp replies', 'Booking & reminders', 'CRM and lead routing'],
    byIndustry: [
      {
        title: 'E-commerce & D2C',
        desc: 'Product questions answered instantly, order and shipping updates, abandoned-cart reminders and re-order nudges to customers who opted in.',
        href: ECOM,
        linkLabel: 'E-commerce marketing',
      },
      {
        title: 'Local businesses & clinics',
        desc: 'Appointment booking, reminders, directions and review requests on WhatsApp, so fewer slots go empty and fewer calls are missed.',
        href: LOCAL,
        linkLabel: 'Local business marketing',
      },
      {
        title: 'Real estate',
        desc: 'Instant brochure and price-sheet reply, budget and configuration questions, site-visit booking, and lead routing to salespeople or channel partners.',
        href: RE,
        linkLabel: 'Real estate marketing',
      },
    ],
    relatedServices: ['paid-ads', 'high-converting-landing-pages', 'seo'],
    relatedPlaybook: 'whatsapp-lead-response-flow',
    relatedPosts: ['whatsapp-automation-for-real-estate-leads', 'whatsapp-business-api-for-real-estate', 'real-estate-chatbot', 'ai-for-real-estate-india'],
    cta: 'Get a free lead-flow audit',
    faqs: [
      {
        question: 'What is a WhatsApp chatbot?',
        answer:
          'A chatbot is software that replies to enquiries automatically on WhatsApp: it shares the catalogue or brochure, asks qualifying questions, books appointments and passes the customer to a person when needed. An AI chatbot also understands free-typed questions instead of only button taps.',
      },
      {
        question: 'Do we need the WhatsApp Business API, or is the WhatsApp Business app enough?',
        answer:
          'The free WhatsApp Business app works on one phone and can’t be connected to a chatbot, CRM or routing rules. Automation needs the WhatsApp Business API, which we set up through an official Business Solution Provider.',
      },
      {
        question: 'Can the chatbot understand Hinglish?',
        answer:
          'Yes. Customers can tap quick-reply buttons or type freely in English or Hinglish. Anything the bot isn’t sure about is handed to a person instead of guessed.',
      },
      {
        question: 'Will a chatbot replace our team?',
        answer:
          'No. It handles the first reply, the basic questions and the reminders, so your people spend their time on customers who are ready to buy, book or visit.',
      },
      {
        question: 'Which CRMs do you work with?',
        answer:
          'We connect to the CRM you already use through its API or webhooks, including general CRMs like Zoho and HubSpot and real estate CRMs like Sell.Do and LeadSquared. If you don’t have a CRM, we can start with a Google Sheet.',
      },
      {
        question: 'How do you handle consent?',
        answer:
          'Automated WhatsApp messages only go to people who shared their number with you and agreed to be contacted, and every message template is approved by WhatsApp before use. Customers can opt out at any time.',
      },
      {
        question: 'Who pays for WhatsApp messages?',
        answer:
          'WhatsApp message charges are set by Meta and billed through your WhatsApp Business Solution Provider, separately from our fee.',
      },
      {
        question: 'Can portal and ad leads get the same instant reply?',
        answer:
          'In most cases, yes. Leads from Meta and Google forms, your website and, where the portal provides a lead API or notification emails, marketplaces and property portals can all trigger the same instant WhatsApp reply.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}
