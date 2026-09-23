// Example plans that show how Veloxis Global works. These are NOT client case studies:
// every playbook is labelled as an example, and figures are either sourced research
// (search volumes from Google Ads data via DataForSEO, India, September 2026) or clearly
// marked planning assumptions.

export interface PlaybookTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

// Stock photo (Pexels) shown beside a section. Photos are illustrative only:
// the people in them are not Veloxis Global clients or staff.
export interface PlaybookImage {
  src: string;
  alt: string;
  /** CSS object-position, e.g. 'center top' */
  position?: string;
}

export interface PlaybookSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: PlaybookTable;
  image?: PlaybookImage;
}

export interface Playbook {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  service: string;
  audience: string;
  scenario: string;
  image: string;
  imageAlt: string;
  updated: string;
  sections: PlaybookSection[];
}

export const playbooks: Playbook[] = [
  {
    slug: 'new-launch-meta-google-ads-plan',
    title: 'Meta and Google ads plan for a new 2/3 BHK launch in Noida Extension',
    seoTitle: 'Real Estate Ads Plan: New Launch in Noida Extension',
    metaDescription:
      'An example Meta and Google ads plan for a 2/3 BHK launch: keyword groups, negative keywords, bidding stages, Meta campaigns, creatives and weekly KPIs.',
    excerpt:
      'Keyword groups, negative keywords, bidding stages, Meta campaign structure and the weekly numbers we would track for a mid-segment launch.',
    service: 'paid-ads',
    audience: 'Developers and mandated channel partners',
    scenario:
      'A hypothetical RERA-registered, mid-segment project with 2 and 3 BHK apartments in Greater Noida West (Noida Extension). The goal for the first 90 days is a steady flow of qualified site visits. The project, budget and all planning figures are illustrative.',
    image: '/images/people/playbooks/ads-team-reviewing-campaign-cover.jpg',
    imageAlt: 'Four colleagues reviewing bar charts on a laptop and printed marketing reports at a table',
    updated: '2026-09-23',
    sections: [
      {
        id: 'research',
        heading: 'Research: what buyers actually search',
        image: {
          src: '/images/people/playbooks/ads-presenting-chart.jpg',
          alt: 'Woman presenting a chart on a flipchart to colleagues',
        },
        paragraphs: [
          'Before building campaigns we pull search data for the locality, configuration and project themes. For this area, Google Ads data for India (September 2026) shows about 320 searches a month for “2 bhk flat in noida extension” — a small but very specific audience that is close to buying.',
          'A brand-new project name has almost no searches at launch, so early Google volume comes from locality and configuration searches. Project-name searches grow once Meta ads, hoardings and CPs start spreading the name — which is why the two channels are planned together.',
        ],
        list: [
          'Locality searches: “flats in noida extension”, “3 bhk greater noida west”, “flats near [metro station or landmark]”.',
          'Configuration and budget searches: “2 bhk under [budget] greater noida west”, “ready to move 3 bhk noida extension”.',
          'Project searches (grow after launch): “[project name]”, “[project name] price”, “[project name] floor plan”.',
          'Competing projects buyers compare against, found by checking who advertises on the same searches.',
        ],
      },
      {
        id: 'google-structure',
        heading: 'Google Search campaign structure',
        table: {
          caption: 'Example campaign and ad-group structure',
          headers: ['Campaign', 'Ad groups', 'Match types', 'Why'],
          rows: [
            ['Project name', 'Name · Name + price · Name + floor plan · Name + location', 'Exact, phrase', 'Cheapest, highest-intent clicks once the name is known; stops competitors taking your buyers'],
            ['Locality', '2 BHK Noida Extension · 3 BHK Greater Noida West · Near [landmark]', 'Phrase, exact', 'Buyers who have chosen the area but not the project'],
            ['Configuration & budget', 'Under-budget searches · Ready to move · New launch', 'Phrase', 'Buyers filtering by price and possession'],
            ['Competitor projects (test)', 'Nearby project names', 'Exact', 'Only with separate budget and no competitor names in ad text'],
          ],
        },
        list: [
          'Negative keywords from day one: rent, rental, PG, resale, jobs, salary, 1 RK, plot, commercial, “for sale by owner”, PDF, and portal names for navigational searches.',
          'Separate ads for each ad group, with the locality, configuration and starting price in the headline and the RERA number in the ad or on the landing page.',
          'Location targeting on people in or regularly in Delhi NCR, not people merely “interested in” the area, to cut out-of-region clicks.',
        ],
      },
      {
        id: 'bidding',
        heading: 'Bidding: three stages',
        table: {
          headers: ['Stage', 'Bid strategy', 'Move on when'],
          rows: [
            ['1. Learning (weeks 1–3)', 'Maximise conversions on the enquiry form and WhatsApp click', 'Enough conversions for the platform to learn — Google commonly suggests around 30 in 30 days'],
            ['2. Quality (weeks 3–8)', 'Import offline conversions from the CRM: qualified lead and site visit done', 'Site-visit conversions are being uploaded every week'],
            ['3. Efficiency (week 8+)', 'Target CPA on qualified leads or site visits; test Performance Max only with brand exclusions and offline data', 'Cost per site visit is stable for several weeks'],
          ],
        },
        paragraphs: [
          'The key move is stage 2. Until Google and Meta are told which leads became site visits, they optimise for anyone who fills a form. Uploading outcomes from the CRM every week is what shifts spend towards real buyers.',
        ],
      },
      {
        id: 'meta-structure',
        heading: 'Meta campaign structure',
        table: {
          headers: ['Campaign', 'Setup', 'Purpose'],
          rows: [
            ['Launch leads', 'Instant form with “higher intent” review step and 3 qualifying questions', 'Volume of named, qualified enquiries'],
            ['Click-to-WhatsApp', 'Ads open a WhatsApp chat that the chatbot answers instantly', 'Buyers who won’t fill a form but will chat'],
            ['Retargeting', 'Landing page visitors (30 days), video viewers (50%+), form openers who didn’t submit', 'Bring back people who already know the project'],
          ],
        },
        list: [
          'Qualifying questions: budget band, 2 or 3 BHK, and when they plan to buy.',
          'If Meta’s Special Ad Category for housing applies, age, gender and detailed location targeting are restricted — the plan relies on creative and retargeting rather than narrow targeting.',
          'Creatives: a 30–45 second walkthrough reel, real construction-site photos, a location map with drive times, and a price-band static. RERA number on every creative.',
        ],
      },
      {
        id: 'budget',
        heading: 'Starting budget split (planning assumption)',
        image: {
          src: '/images/people/playbooks/ads-team-budget-review-meeting.jpg',
          alt: 'Four colleagues in a meeting at a conference table, one taking notes',
        },
        paragraphs: [
          'For a launch with little brand awareness, a starting split of roughly 60% Meta and 40% Google makes sense: Meta builds awareness and volume while Google captures the smaller pool of active searchers. The split moves weekly towards whichever channel produces site visits at the lower cost.',
        ],
      },
      {
        id: 'tracking',
        heading: 'Tracking and lead handling',
        list: [
          'GA4 events for form submit, WhatsApp click and call click, marked as key events.',
          'Meta Pixel with Conversions API, and Google Ads conversion tags, deduplicated.',
          'Every lead gets an instant WhatsApp reply with the brochure (see the WhatsApp lead-response playbook).',
          'CRM statuses — contacted, qualified, visit booked, visit done, booked — uploaded to both platforms weekly.',
        ],
      },
      {
        id: 'kpis',
        heading: 'What we report every week',
        table: {
          headers: ['Metric', 'Why it matters'],
          rows: [
            ['Leads by campaign', 'Volume, split by channel and ad group'],
            ['Contact rate', 'Share of leads reached — shows follow-up problems, not ad problems'],
            ['Qualified leads', 'Budget and configuration fit, from the form and first call'],
            ['Site visits done', 'The outcome the sales team cares about'],
            ['Cost per site visit', 'The number budgets are moved on'],
          ],
        },
      },
      {
        id: 'timeline',
        heading: '90-day timeline',
        list: [
          'Week 0: research, landing page, tracking, WhatsApp automation and creatives ready.',
          'Weeks 1–3: all campaigns live; daily checks on search terms and lead quality.',
          'Weeks 3–8: offline conversions flowing; weak ad groups and audiences cut; creatives refreshed.',
          'Weeks 8–12: budget concentrated on the campaigns with the lowest cost per site visit; retargeting scaled.',
        ],
      },
    ],
  },
  {
    slug: 'project-landing-page-blueprint',
    title: 'Blueprint of a real estate project landing page',
    seoTitle: 'Real Estate Landing Page Blueprint: Section by Section',
    metaDescription:
      'An example real estate project landing page blueprint: section order, RERA details, price sheet capture, WhatsApp buttons, speed budget and tracking events.',
    excerpt:
      'Section order, what goes above the fold, how the price sheet is captured, the speed budget and the tracking events we set up on every project page.',
    service: 'high-converting-landing-pages',
    audience: 'Developers, channel partners and brokers',
    scenario:
      'A single project landing page for paid traffic from Google, Meta and CP campaigns. The structure below is the starting point we adapt for each project; content shown is illustrative.',
    image: '/images/people/playbooks/landing-designer-reviewing-page-cover.jpg',
    imageAlt: 'Man working at a desk with a large desktop monitor and a laptop',
    updated: '2026-09-23',
    sections: [
      {
        id: 'above-fold',
        heading: 'Above the fold: answer the first five questions',
        image: {
          src: '/images/people/playbooks/landing-couple-looking-phone.jpg',
          alt: 'Couple looking at a phone together at a kitchen counter',
        },
        paragraphs: [
          'A buyer arriving from an ad decides in seconds whether to stay. The first screen on a phone should answer where, what, how much, whether it is legitimate and how to ask.',
        ],
        list: [
          'Project name and locality, with one line on the key location advantage.',
          'Configurations and starting price (for example “2 & 3 BHK from ₹X lakh”).',
          'RERA registration number and the RERA website; QR code where the state requires it.',
          'Possession timeline or “ready to move”.',
          'Two actions: “Get price sheet on WhatsApp” and “Book a site visit”.',
        ],
      },
      {
        id: 'section-order',
        heading: 'Section order below the fold',
        table: {
          headers: ['#', 'Section', 'What it does'],
          rows: [
            ['1', 'Location & connectivity', 'Drive times to metro, expressway, schools and offices — the main reason buyers shortlist a project'],
            ['2', 'Configurations & floor plans', 'Carpet area by unit type; floor plans sent on WhatsApp after sharing a number'],
            ['3', 'Price & payment plan', 'Starting price, payment plan type (CLP, down payment) and what is included'],
            ['4', 'Amenities', 'Short list with photos, not a list of 40 icons'],
            ['5', 'Construction progress', 'Dated site photos — builds trust for under-construction projects'],
            ['6', 'Developer & RERA details', 'Past projects, registration, bank approvals'],
            ['7', 'FAQs', 'Possession, loans, parking, maintenance — the questions the sales team hears daily'],
            ['8', 'Final call to action', 'Site visit booking form and WhatsApp button'],
          ],
        },
      },
      {
        id: 'capture',
        heading: 'How enquiries are captured',
        list: [
          'Short form: name, mobile number, configuration, budget band. Nothing else.',
          'Price sheet, brochure and floor plans are delivered on WhatsApp after the buyer shares their number, not as open PDF downloads.',
          'Sticky WhatsApp and call buttons on mobile.',
          'Every enquiry triggers an instant WhatsApp reply so the buyer knows it was received.',
        ],
      },
      {
        id: 'speed',
        heading: 'Speed budget',
        image: {
          src: '/images/people/playbooks/landing-buyer-scrolling-phone.jpg',
          alt: 'Close-up of a man scrolling on his smartphone',
        },
        paragraphs: [
          'Most visitors arrive on a phone, often on a patchy mobile connection. We set a budget before building and test on a mid-range Android phone over 4G.',
        ],
        list: [
          'Hero image compressed to modern formats (AVIF/WebP) and sized for mobile.',
          'No image sliders or auto-playing video above the fold.',
          'Third-party scripts (chat widgets, heatmaps) loaded after the page is usable.',
          'Target: Largest Contentful Paint under 2.5 seconds and no layout shift when the page loads — Google’s “good” Core Web Vitals thresholds.',
        ],
      },
      {
        id: 'tracking',
        heading: 'Tracking events',
        table: {
          headers: ['Event', 'Sent to', 'Used for'],
          rows: [
            ['Form submit', 'GA4, Meta (Pixel + CAPI), Google Ads', 'Primary conversion'],
            ['WhatsApp click', 'GA4, Meta, Google Ads', 'Secondary conversion'],
            ['Call click', 'GA4, Google Ads', 'Secondary conversion'],
            ['Price sheet request', 'GA4', 'Intent signal for retargeting'],
            ['Scroll depth / section views', 'GA4', 'Finding where buyers drop off'],
          ],
        },
        paragraphs: [
          'Each ad campaign and each channel partner gets its own UTM-tagged link, so every lead in the CRM shows where it came from.',
        ],
      },
    ],
  },
  {
    slug: 'whatsapp-lead-response-flow',
    title: 'WhatsApp lead-response flow for property enquiries',
    seoTitle: 'Real Estate WhatsApp Chatbot Flow: Example Setup',
    metaDescription:
      'An example WhatsApp chatbot flow for real estate: instant reply, qualifying questions, lead routing, site-visit booking, reminders and follow-up.',
    excerpt:
      'Message by message: what happens in the first minute, how leads are qualified and routed, how site visits are booked and what happens when a buyer goes quiet.',
    service: 'ai-automation',
    audience: 'Developers, channel partners and brokers',
    scenario:
      'A lead-response setup for a project receiving enquiries from Meta forms, Google, the landing page and property portals. Message wording and timings are illustrative and adjusted for each client.',
    image: '/images/people/playbooks/whatsapp-exec-call-on-the-move.jpg',
    imageAlt: 'Man in a suit taking a phone call while travelling',
    updated: '2026-09-23',
    sections: [
      {
        id: 'first-minute',
        heading: 'The first minute',
        table: {
          headers: ['When', 'What happens'],
          rows: [
            ['0 seconds', 'Lead arrives from a form, ad, portal or website and is written to the CRM with its source and a timestamp'],
            ['Within seconds', 'Approved WhatsApp template: thanks, project name, brochure and one question — “Which would you like: 2 BHK or 3 BHK?”'],
            ['Buyer replies', 'Chatbot asks budget band and when they plan to buy, using quick-reply buttons'],
            ['Any time', '“Talk to someone” hands the chat to a salesperson immediately'],
          ],
        },
      },
      {
        id: 'routing',
        heading: 'Scoring and routing',
        table: {
          headers: ['Lead type', 'Rule', 'Action'],
          rows: [
            ['Hot', 'Budget fits and buying within 3 months', 'Assigned to a salesperson for a call, visit slots offered on WhatsApp'],
            ['Warm', 'Budget fits, timeline 3–12 months', 'Assigned, plus a follow-up sequence'],
            ['Cold / no reply', 'No answer to the first message', 'Reminder later the same day, then the nurture sequence'],
            ['CP-sourced', 'Came through a channel partner’s tagged link', 'Stays tagged to that CP; CP notified instantly'],
          ],
        },
      },
      {
        id: 'site-visits',
        heading: 'Booking site visits and cutting no-shows',
        image: {
          src: '/images/people/playbooks/whatsapp-keys-handover.jpg',
          alt: 'Keys being handed over beside moving boxes in a new home',
        },
        list: [
          'Buyer picks a date and time slot on WhatsApp.',
          'Confirmation with location pin and the name of the person meeting them.',
          'Reminders the day before and two hours before the visit.',
          'If the buyer doesn’t turn up, a reschedule message goes out the same evening.',
          'After the visit, the salesperson updates the CRM status, which also feeds ad optimisation.',
        ],
      },
      {
        id: 'nurture',
        heading: 'When a buyer goes quiet',
        paragraphs: [
          'Most buyers need several touches. Instead of relying on a salesperson to remember, a short sequence goes out to leads who opted in: a walkthrough video, a construction update, a payment-plan explainer and an invitation to visit. Anyone can reply “stop” to opt out.',
        ],
      },
      {
        id: 'setup',
        heading: 'What the setup needs',
        image: {
          src: '/images/people/playbooks/whatsapp-team-agreeing-routing.jpg',
          alt: 'Colleagues discussing printed documents around a meeting table',
        },
        list: [
          'An official WhatsApp Business API number through a Business Solution Provider.',
          'Approved message templates for the first reply, reminders and follow-ups.',
          'A connection to the CRM (or a Google Sheet) and to each lead source.',
          'Clear routing rules agreed with the sales team and channel partners.',
        ],
      },
      {
        id: 'metrics',
        heading: 'What we measure',
        list: [
          'Time from enquiry to first reply.',
          'Share of leads who answer the qualifying questions.',
          'Site visits booked and completed, and no-show rate.',
          'Leads with no human contact after 24 hours — the number that should be zero.',
        ],
      },
    ],
  },
  {
    slug: 'channel-partner-lead-registration',
    title: 'Lead registration and marketing setup for a channel partner',
    seoTitle: 'Channel Partner Lead Registration & Marketing Setup',
    metaDescription:
      'An example setup for a real estate channel partner: tagged project pages, timestamped lead registration, instant WhatsApp replies and a visit report for builders.',
    excerpt:
      'Tagged project pages, timestamped lead registration, instant replies and a simple report that helps a CP prove which buyers they brought.',
    service: 'ai-automation',
    audience: 'Channel partners and brokers',
    scenario:
      'A channel partner mandated on three projects by different developers, running their own ads and wanting clean proof of the leads and site visits they bring. The setup is illustrative.',
    image: '/images/people/playbooks/cp-broker-phone-laptop-cover.jpg',
    imageAlt: 'Young man talking on his phone while working on a laptop outdoors',
    updated: '2026-09-23',
    sections: [
      {
        id: 'problem',
        heading: 'The problem this solves',
        image: {
          src: '/images/people/playbooks/cp-agent-reviewing-papers-with-buyers.jpg',
          alt: 'Woman showing a document to a couple in a living room',
        },
        paragraphs: [
          'The same buyer can reach a developer through a CP, a Meta form and the builder’s own phone line in the same week. Without a timestamped record of who registered the buyer first, commission disputes come down to whose word is trusted.',
        ],
      },
      {
        id: 'pages',
        heading: 'A project page per mandate',
        list: [
          'One landing page per project under the CP’s brand, following the developer’s rules on names, prices and RERA details.',
          'UTM-tagged links for each ad campaign, WhatsApp broadcast and sub-broker.',
          'Price sheet and brochure delivered on WhatsApp after the buyer shares their number.',
        ],
      },
      {
        id: 'registration',
        heading: 'Timestamped lead registration',
        image: {
          src: '/images/people/playbooks/cp-broker-call-at-laptop.jpg',
          alt: 'Man on a phone call while working on his laptop at an office desk',
        },
        list: [
          'Every lead is logged with source, project and the exact time it arrived.',
          'The lead is registered with the developer (through their CP portal or by email) the same day, and the confirmation is saved.',
          'Site visits are logged with date, time and who accompanied the buyer.',
        ],
      },
      {
        id: 'response',
        heading: 'Replying as fast as a large team',
        paragraphs: [
          'Instant WhatsApp replies and a short qualifying chat mean a two-person CP firm responds as fast as a developer’s call centre, and every conversation is kept in one place instead of on personal phones.',
        ],
      },
      {
        id: 'reporting',
        heading: 'A report the developer accepts',
        table: {
          headers: ['Column', 'Purpose'],
          rows: [
            ['Buyer name & number', 'Identifies the lead'],
            ['Project', 'Which mandate it belongs to'],
            ['First contact timestamp', 'Proof of who registered first'],
            ['Registration confirmation', 'Developer’s acknowledgement'],
            ['Visit date & status', 'Links the lead to the site visit'],
          ],
        },
      },
    ],
  },
];

export function getPlaybookBySlug(slug: string) {
  return playbooks.find((p) => p.slug === slug);
}
