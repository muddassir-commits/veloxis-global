// Audience pages: who we help. One primary intent each —
// developers: "marketing for real estate developers"; channel partners: "channel partner marketing";
// nri: "NRI real estate marketing" (developers and CPs selling to Indians abroad; our clients stay in India).

export interface AudienceBlock {
  title: string;
  desc: string;
  /** Optional link under the block (used for city pages) */
  href?: string;
}

export interface AudienceHelp extends AudienceBlock {
  service: string;
}

/** Stock photo (Pexels licence). People shown are models, not clients or staff. */
export interface AudienceImage {
  src: string;
  alt: string;
  /** CSS object-position, to keep faces in frame when cropped */
  position?: string;
}

export interface AudienceImages {
  hero: AudienceImage;
  /** beside the intro paragraphs (4:3) */
  intro: AudienceImage;
  /** beside the pain cards (4:5) */
  pains: AudienceImage;
  /** beside the help cards (4:5) */
  help: AudienceImage;
  /** beside the "extra" list (4:3) */
  extra: AudienceImage;
  /** beside the example plans and guides (4:3) */
  resources: AudienceImage;
}

export interface AudienceData {
  key: 'developers' | 'channel-partners' | 'nri' | 'lucknow' | 'kanpur' | 'noida';
  path: string;
  breadcrumb: string;
  /** Parent page in the breadcrumb trail, for pages nested under another audience */
  parent?: { name: string; href: string };
  /** Hero button; defaults to the free marketing review on /contact */
  heroCta?: { label: string; href: string };
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  /** One-line cross-link shown under the intro */
  introLink?: { text: string; label: string; href: string };
  painsHeading: string;
  pains: AudienceBlock[];
  helpHeading: string;
  help: AudienceHelp[];
  extraHeading: string;
  extra: AudienceBlock[];
  /** Optional city section (old city URLs redirect to the developers page) */
  local?: { heading: string; intro: string; areas: AudienceBlock[] };
  relatedPlaybooks: string[];
  relatedPosts: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  images: AudienceImages;
}

export const audiences: Record<AudienceData['key'], AudienceData> = {
  developers: {
    key: 'developers',
    path: '/industries/real-estate',
    breadcrumb: 'Real Estate Developers',
    eyebrow: 'For developers & builders',
    h1: 'Marketing for real estate developers and builders',
    lead:
      'Launch marketing, inventory sales and lead follow-up for residential developers — built around site visits and bookings, not impressions.',
    intro: [
      'Most small and mid-size developers sell through a mix of channel partners, property portals and hoardings, with a corporate website that was never built to convert ad traffic. When a launch slows down, it is hard to tell whether the problem is the market, the price, the leads or the follow-up.',
      'We give developers a lead engine they own: a landing page for each project, Meta and Google campaigns that produce exclusive enquiries, and WhatsApp automation that replies to every lead in seconds and books site visits. Everything is measured on cost per site visit, so you know what each rupee of marketing does.',
    ],
    introLink: { text: 'Selling to buyers who live abroad?', label: 'See how NRI buyer campaigns work', href: '/industries/real-estate/nri-buyers' },
    painsHeading: 'What developers tell us is going wrong',
    pains: [
      { title: 'Launch absorption is slower than planned', desc: 'The first months of a launch set the tone with lenders and CPs, and a slow start makes every later phase harder to sell.' },
      { title: '“The agency sent fake leads”', desc: 'Often the leads were real but unqualified, or called too late. Without shared definitions and tracking, it becomes an argument.' },
      { title: 'Dependence on CPs and portals', desc: 'Commission and portal subscriptions are unavoidable, but having no direct lead source leaves you with no leverage.' },
      { title: 'RERA and advertising compliance', desc: 'Every ad and page needs the registration number and accurate claims about possession, amenities and price.' },
    ],
    helpHeading: 'How we help developers',
    help: [
      { service: 'high-converting-landing-pages', title: 'A landing page for each project or phase', desc: 'Location, price band, RERA details and site-visit booking on the first screen, with the price sheet delivered on WhatsApp.' },
      { service: 'paid-ads', title: 'Exclusive leads from Meta and Google', desc: 'Project-name, locality and configuration searches on Google; launch and retargeting campaigns on Meta; reported on cost per site visit.' },
      { service: 'ai-automation', title: 'Instant reply, qualification and visit booking', desc: 'Every enquiry gets a WhatsApp reply within seconds, is qualified and routed to your sales team or CP, and reminded before the visit.' },
    ],
    extraHeading: 'Built for how developers actually sell',
    extra: [
      { title: 'Your CP network included', desc: 'Tagged links and page copies for channel partners, with timestamped lead registration to reduce ownership disputes.' },
      { title: 'Launch-to-possession planning', desc: 'Pre-launch EOI capture, launch campaigns, and a “ready to move” push once OC is received — each with its own page and message.' },
      { title: 'Numbers your sales head trusts', desc: 'Weekly reporting on leads, contact rate, site visits and cost per site visit, taken from your CRM rather than ad dashboards.' },
    ],
    local: {
      heading: 'Real estate marketing in Kanpur, Lucknow, Noida and Delhi NCR',
      intro:
        'We work with developers and channel partners across Uttar Pradesh and Delhi NCR. Campaigns are planned locality by locality, because buyers search and compare by area, not by city.',
      areas: [
        { title: 'Kanpur', href: '/digital-marketing-agency-kanpur', desc: 'A close-knit market where many buyers already know a broker. Fast WhatsApp follow-up and clear price and RERA details on the page decide who gets the site visit.' },
        { title: 'Lucknow', href: '/digital-marketing-agency-lucknow', desc: 'Buyers compare projects locality by locality, so each project gets its own page and ads aimed at the areas buyers actually search for.' },
        { title: 'Noida and Greater Noida', href: '/digital-marketing-agency-noida', desc: 'Many projects compete for the same buyers in the same sectors, so exclusive leads, speed of reply and cost per site visit matter more than reach.' },
        { title: 'Delhi NCR', desc: 'A large, crowded ad market where narrow targeting, retargeting and well-qualified enquiries keep the cost per site visit under control.' },
      ],
    },
    relatedPlaybooks: ['new-launch-meta-google-ads-plan', 'project-landing-page-blueprint'],
    relatedPosts: ['what-is-eoi-in-real-estate', 'meta-ads-for-real-estate-india', 'ai-for-real-estate-india', 'google-ads-vs-meta-ads-real-estate-india'],
    faqs: [
      { question: 'Do you work with small and mid-size developers?', answer: 'Yes. Most of our work is with developers running one to a few projects at a time, where the founder or sales head wants direct control over lead generation instead of depending only on portals and CPs.' },
      { question: 'Will this replace our channel partners?', answer: 'No. CPs remain an important sales channel. Our work gives you a direct lead source alongside them, and we can give your CPs tagged pages and links so their leads are tracked fairly.' },
      { question: 'Can you market a project before RERA registration?', answer: 'No. We only run ads and publish pages for projects that are RERA-registered, and every creative carries the registration number. For pre-launch interest we can collect expressions of interest in line with your legal advice.' },
      { question: 'How quickly can a launch campaign go live?', answer: 'Usually within one to two weeks: landing page, tracking, WhatsApp automation and campaigns built together. The timeline depends on how quickly price sheets, renders and approvals are ready.' },
      { question: 'Do you handle hoardings, print or events?', answer: 'No. We focus on digital lead generation — landing pages, Meta and Google ads, and WhatsApp automation — and make sure offline campaigns send people to a page and number we can track.' },
      { question: 'Which cities do you work in?', answer: 'We work with developers in Kanpur, Lucknow, Noida, Greater Noida and the wider Delhi NCR, and can run campaigns for projects elsewhere in India.' },
      { question: 'How do you report results to a developer?', answer: 'Weekly, in plain language: leads by campaign, how many were contacted, site visits booked and completed, and cost per site visit — taken from your CRM, not just the ad dashboards.' },
      { question: 'Can you help sell unsold or ready-to-move inventory?', answer: 'Yes. Ready-to-move inventory gets its own page and campaigns built around “ready to move” searches and retargeting of past enquiries, with a clear offer and site-visit booking.' },
    ],
    ctaTitle: 'Planning a launch or sitting on unsold inventory?',
    ctaDescription: 'Get a free review of your project pages, ads and lead follow-up, with a plan for your next 90 days.',
    images: {
      hero: { src: '/images/people/developers/hero-site-engineers-plans.jpg', alt: '' },
      intro: { src: '/images/people/developers/team-planning-meeting.jpg', alt: 'Team discussing plans around a laptop at a meeting table' },
      pains: { src: '/images/people/developers/builder-reviewing-plans.jpg', alt: 'Man reading building plans inside a flat that is still under construction', position: 'center 30%' },
      help: { src: '/images/people/developers/site-visit-buyers.jpg', alt: 'Sales executive with a clipboard showing a young couple around an unfinished apartment', position: '35% center' },
      extra: { src: '/images/people/developers/sales-office-handshake.jpg', alt: 'Sales executive shaking hands with an older couple across a desk in a sales office' },
      resources: { src: '/images/people/developers/handover-keys.jpg', alt: 'Smiling man in a suit holding out a set of house keys', position: 'center 30%' },
    },
  },
  'channel-partners': {
    key: 'channel-partners',
    path: '/channel-partners',
    breadcrumb: 'Channel Partners',
    eyebrow: 'For channel partners & brokers',
    h1: 'Marketing for real estate channel partners and brokers',
    lead:
      'Your own leads for the projects you’re mandated on — from Meta and Google, on pages under your brand, answered on WhatsApp the moment they arrive.',
    intro: [
      'Channel partners bring a large share of residential bookings in India, yet most run on WhatsApp groups, shared portal leads and the builder’s marketing material. The same buyer is often called by several brokers within an hour, and when two parties claim a booking, the CP without records usually loses.',
      'Digital marketing for real estate agents doesn’t have to mean posting on Instagram every day. We set up a simple lead engine for CPs and brokers: project pages you control, ads that produce leads only you receive, instant WhatsApp replies, and a timestamped record of every lead and site visit you can show the developer.',
    ],
    introLink: { text: 'Some of your buyers live in Dubai or London?', label: 'See how NRI buyer campaigns work', href: '/industries/real-estate/nri-buyers' },
    painsHeading: 'What channel partners tell us',
    pains: [
      { title: 'Shared portal leads', desc: 'A portal enquiry reaches several brokers at once. By the time you call, the buyer has already heard the pitch.' },
      { title: 'Lead ownership disputes', desc: 'The buyer you brought fills a builder form or calls the site office, and the commission becomes an argument.' },
      { title: 'No time to market yourself', desc: 'Site visits, negotiations and paperwork leave no time to build pages, run ads or reply to every enquiry quickly.' },
      { title: 'Using only the builder’s material', desc: 'Every CP on the project shares the same brochure and link, so buyers see no reason to choose you.' },
    ],
    helpHeading: 'How we help channel partners',
    help: [
      { service: 'high-converting-landing-pages', title: 'A page per mandate, under your brand', desc: 'Project pages that follow the developer’s rules, with tagged links so every lead shows where it came from.' },
      { service: 'paid-ads', title: 'Leads nobody else gets', desc: 'Meta and Google campaigns for your mandated projects, with your RERA agent number and the project’s registration on every ad.' },
      { service: 'ai-automation', title: 'Reply first, and keep the proof', desc: 'Instant WhatsApp replies, visit booking and a timestamped log of every lead and visit, ready to share with the developer.' },
    ],
    extraHeading: 'What’s different about marketing for CPs',
    extra: [
      { title: 'Developer rules come first', desc: 'We follow each developer’s guidelines on project names, pricing and offers, so your ads don’t put the mandate at risk.' },
      { title: 'Small budgets, careful targeting', desc: 'Most CP budgets are smaller than a developer’s, so campaigns focus on locality and project searches and on retargeting.' },
      { title: 'Registration records that hold up', desc: 'Every lead is logged with the time it arrived and when it was registered with the developer.' },
    ],
    relatedPlaybooks: ['channel-partner-lead-registration', 'whatsapp-lead-response-flow'],
    relatedPosts: ['channel-partner-in-real-estate', 'how-to-generate-real-estate-leads', 'real-estate-local-seo-ncr', 'whatsapp-automation-for-real-estate-leads'],
    faqs: [
      { question: 'Can a channel partner run ads for a developer’s project?', answer: 'Usually yes, if the developer allows it. Many developers set rules on project names, pricing and offers in CP ads. The ads should carry the project’s RERA number and your RERA agent registration number.' },
      { question: 'Do I need to be RERA-registered as an agent?', answer: 'Real estate agents who market or sell RERA-registered projects are generally required to register with the state RERA authority. Most developers also ask for it before onboarding a CP.' },
      { question: 'How is this different from buying portal leads?', answer: 'Portal leads are usually shared with several brokers. Leads from your own ads and pages come only to you, and you control how fast they are answered.' },
      { question: 'What if a buyer I brought books directly with the builder?', answer: 'We can’t control the developer’s policy, but a timestamped record of first contact, registration and site visit gives you much stronger evidence in any dispute.' },
      { question: 'Is this affordable for a small CP firm?', answer: 'We scope the work to your budget and number of mandates. Many CPs start with one project page, a small campaign and the WhatsApp automation, and expand once they see site visits coming in.' },
      { question: 'Can you help independent brokers with resale inventory too?', answer: 'Yes. The same approach — a focused page, local ads and instant WhatsApp follow-up — works for resale and rental inventory.' },
      { question: 'Can I run campaigns for several projects at once?', answer: 'Yes. Each mandated project gets its own page and campaign, so leads, budgets and results stay separate and each developer’s rules are followed.' },
      { question: 'Will the leads and data belong to me?', answer: 'Yes. Ads run from your own Google and Meta accounts, and leads go to your CRM or Google Sheet.' },
      { question: 'What does digital marketing for real estate agents include?', answer: 'For most agents and CPs it comes down to four things: a page for each project or listing you can send buyers to, Meta (Facebook and Instagram) and Google ads that bring enquiries only you receive, an instant WhatsApp reply to every lead, and a Google Business Profile so local searches find you. Posting on social media helps, but it rarely brings leads on its own.' },
    ],
    ctaTitle: 'Want leads that come only to you?',
    ctaDescription: 'Tell us which projects you’re mandated on. We’ll review your current lead sources and show you what a setup for your firm would look like.',
    images: {
      hero: { src: '/images/people/channel-partners/hero-broker-showing-apartment.jpg', alt: '' },
      intro: { src: '/images/people/channel-partners/broker-meeting-couple.jpg', alt: 'Young couple going through property papers with an advisor at a desk' },
      pains: { src: '/images/people/channel-partners/busy-broker-desk.jpg', alt: 'Man on a desk phone looking stressed, with files piled on his desk', position: 'center 30%' },
      help: { src: '/images/people/channel-partners/agent-on-phone.jpg', alt: 'Smiling man taking a call at his office desk', position: '70% center' },
      extra: { src: '/images/people/channel-partners/sales-team-discussion.jpg', alt: 'Four colleagues standing in an office discussing papers in a folder' },
      resources: { src: '/images/people/channel-partners/client-signing-papers.jpg', alt: 'Close-up of a person signing a document on a desk while another person points to the page' },
    },
  },
  nri: {
    key: 'nri',
    path: '/industries/real-estate/nri-buyers',
    breadcrumb: 'NRI Buyers',
    parent: { name: 'Real Estate Developers', href: '/industries/real-estate' },
    heroCta: { label: 'Book a free NRI campaign audit →', href: '/contact?service=NRI%20buyer%20campaigns' },
    eyebrow: 'NRI buyers',
    h1: 'Reach NRI buyers in Dubai, London and New York, and reply in their time zone',
    lead:
      'For developers and channel partners in India: exclusive enquiries from Indians living abroad, answered on WhatsApp in seconds, qualified and booked for a video site visit.',
    intro: [
      'NRI real estate marketing means reaching Indians who live in the UAE, the UK, the US and other countries with Meta ads, an NRI-ready project page and WhatsApp replies in their time zone, then booking them for a video site visit. Veloxis Global runs it for developers and channel partners in India.',
      'Many buyers for projects in Noida, Lucknow and Kanpur don’t live in India. They work in Dubai, London or New Jersey and want a flat in their home city, for their parents, for later, or as an investment. They are serious buyers, but they enquire at odd hours, can’t walk into a site office, and ask about payment and paperwork before they ask about the floor plan.',
      'We run your NRI campaigns as a separate track of the same lead system: Meta ads shown to Indians in the countries you choose, an NRI version of your project page, and a WhatsApp flow that replies instantly, sends the documents buyers abroad ask for, and books the sales call in the buyer’s own evening. You stay the seller. We bring the enquiries and make sure none of them go cold.',
    ],
    painsHeading: 'Why NRI enquiries are hard to convert',
    pains: [
      { title: 'They arrive while your team is asleep', desc: 'Evening in New York is early morning in India. An enquiry that waits until office hours has usually gone cold, or gone to someone else.' },
      { title: 'Portal NRI leads are shared and generic', desc: 'The same overseas buyer is sold to several brokers, often with no project, budget or city attached.' },
      { title: 'Buyers can’t visit the site', desc: 'Someone in Dubai needs a video walkthrough, the RERA certificate and a cost sheet before they will even book a call.' },
      { title: 'Payment and paperwork questions stall the deal', desc: '“Can I buy as an NRI?”, “Which account do I pay from?”, “Can I get a home loan?” Without quick, clear answers, the buyer puts it off.' },
    ],
    helpHeading: 'How we run NRI campaigns',
    help: [
      { service: 'high-converting-landing-pages', title: 'An NRI version of your project page', desc: 'Price in INR with an approximate AED, USD or GBP guide, the RERA number, a video walkthrough, a “Book a video site visit” button and a short NRI FAQ block.' },
      { service: 'paid-ads', title: 'Meta ads shown to Indians abroad', desc: 'Separate campaigns for the Gulf, the UK and North America, aimed at cities with large Indian communities and delivered in the buyer’s evening hours.' },
      { service: 'ai-automation', title: 'WhatsApp that works in their time zone', desc: 'An instant reply in English or Hindi, day or night. The brochure, cost sheet and RERA certificate go out automatically, video visits are booked on WhatsApp, and follow-ups are timed to the buyer’s clock.' },
    ],
    extraHeading: 'Built for buyers who live abroad',
    extra: [
      { title: 'Video site visits and recorded walkthroughs', desc: 'A live video call from the site or show flat, plus a recorded walkthrough buyers can share with family.' },
      { title: 'Family-in-India handoff', desc: 'If the buyer’s parent or sibling in India wants to see the site, they book a physical visit, and the lead stays logged to the same buyer.' },
      { title: 'Time-zone coverage', desc: 'The auto-reply goes out instantly. The sales callback is scheduled in the buyer’s local evening, not at 3 AM their time.' },
      { title: 'Reporting split by country', desc: 'Leads, cost per lead and video visits for each market, so budget moves to the countries that actually produce buyers.' },
    ],
    relatedPlaybooks: ['nri-buyer-campaign-plan', 'whatsapp-lead-response-flow'],
    relatedPosts: ['meta-ads-for-real-estate-india', 'whatsapp-automation-for-real-estate-leads', 'real-estate-landing-page-conversion-hacks', 'rera-number-check'],
    faqs: [
      { question: 'Can NRIs buy property in India?', answer: 'Yes. Under FEMA, NRIs and OCI cardholders can buy residential and commercial property in India. They cannot buy agricultural land, plantation property or a farmhouse without RBI approval (inheritance is treated differently). We recommend buyers confirm their own case with their CA or lawyer.' },
      { question: 'How do NRIs pay for property in India?', answer: 'Through normal banking channels: money sent from abroad, or funds in their NRE, NRO or FCNR account, as FEMA requires. Cash in foreign currency and traveller’s cheques are not allowed. Indian banks offer home loans to NRIs. We recommend buyers confirm the details with their bank and CA.' },
      { question: 'Which countries do you target?', answer: 'The UAE and the rest of the Gulf first, as they are closest in time and home to a large Indian community. Then the UK, the US, Canada, Singapore and Australia, depending on your project and early results.' },
      { question: 'Can NRI buyers book without visiting India?', answer: 'Many start with a video site visit, the RERA certificate and the cost sheet, and some book that way. Others ask a parent or sibling in India to visit first. The flow supports both, and the lead stays tied to the same buyer.' },
      { question: 'Do ads in the US and Canada work differently?', answer: 'Yes. Meta may require property ads shown in the US, Canada and parts of Europe to run under its Housing special ad category, which removes age and gender targeting and limits location targeting. We plan those campaigns around it, using creative, page content and retargeting rather than narrow audiences.' },
      { question: 'What ad budget is needed for NRI campaigns?', answer: 'Leads in the Gulf, UK and US usually cost more than leads in India, so we recommend a separate NRI budget on top of your India budget (we suggest at least ₹15,000 a month for India). We give you a realistic range for your project on the free audit call.' },
      { question: 'How do video site visits work?', answer: 'The buyer picks a slot on WhatsApp in their own time zone. Your salesperson calls from the site or show flat on WhatsApp video, and the recorded walkthrough and documents are sent afterwards so the buyer can share them with family.' },
      { question: 'Can you run this for just one project or tower?', answer: 'Yes. NRI campaigns can run for a single project, phase or tower, with its own page, budget and report.' },
    ],
    ctaTitle: 'Want NRI enquiries for your project?',
    ctaDescription: 'Tell us your project and which countries your buyers come from. We’ll review your current NRI leads and follow-up, and show you how an NRI campaign would run.',
    images: {
      hero: { src: '/images/people/nri-buyers/hero-dubai-skyline-dusk.jpg', alt: '' },
      intro: { src: '/images/people/nri-buyers/video-call-laptop.jpg', alt: 'Person on a video call with two people on a laptop screen' },
      pains: { src: '/images/people/nri-buyers/man-working-remotely-laptop.jpg', alt: 'Man in a turban working on a laptop at a small table at home', position: '30% center' },
      help: { src: '/images/people/nri-buyers/young-man-laptop-lounge.jpg', alt: 'Young man smiling while working on a laptop in a lounge', position: '75% center' },
      extra: { src: '/images/people/nri-buyers/family-looking-at-phone.jpg', alt: 'Two women and a small child on a sofa looking at a phone together' },
      resources: { src: '/images/people/nri-buyers/dubai-aerial-skyline.jpg', alt: 'Aerial view of the Dubai skyline with the Burj Khalifa and highway interchanges' },
    },
  },
  // City pages live on the old city URLs, which already had search history. Real estate only;
  // no office is claimed (service-area business, founder based in Kanpur).
  lucknow: {
    key: 'lucknow',
    path: '/digital-marketing-agency-lucknow',
    breadcrumb: 'Lucknow',
    eyebrow: 'Lucknow · real estate only',
    h1: 'Digital marketing agency in Lucknow for real estate',
    lead:
      'For builders, developers, brokers and channel partners in Lucknow: project landing pages, Meta and Google ads for property leads, and WhatsApp replies that reach every enquiry in seconds.',
    intro: [
      'Veloxis Global is a digital marketing agency for real estate only. We work with developers, builders, brokers and channel partners selling projects in Lucknow, and we don’t take clients from other industries. If you sell flats, villas, plots or commercial space in Lucknow, everything we build is aimed at one number: site visits.',
      'Lucknow buyers rarely search for “property in Lucknow”. They search by corridor and locality: Gomti Nagar Extension, Sushant Golf City, Shaheed Path, Sultanpur Road, Raebareli Road, Faizabad Road, IIM Road or Jankipuram. So we plan each project locality by locality: a landing page for the project, ads shown to people searching for and living near that area, and an instant WhatsApp reply with the price sheet and a site-visit slot.',
      'We are a founder-led team based in Kanpur, close enough to know the Lucknow market and its buyers. Every project we promote must be UP RERA registered, and the registration number goes on every ad and page.',
    ],
    introLink: { text: 'Want to see the full setup?', label: 'See the Real Estate Lead System', href: '/real-estate-lead-system' },
    painsHeading: 'What slows real estate sales in Lucknow',
    pains: [
      { title: 'Portal leads shared with other brokers', desc: 'A buyer who enquires on a portal gets several calls within the hour. Whoever replies first and clearest usually gets the site visit.' },
      { title: 'Ads aimed at “all of Lucknow”', desc: 'A Sultanpur Road plotted project and a Gomti Nagar apartment have different buyers. City-wide targeting spends money on people who will never visit.' },
      { title: 'Enquiries answered the next day', desc: 'Evening and Sunday enquiries wait until the office opens, and by then the buyer has spoken to someone else.' },
      { title: 'A website that doesn’t sell the project', desc: 'Buyers want price, size, location, RERA number and possession date on the first screen. A slow corporate site with a contact form loses them.' },
    ],
    helpHeading: 'What we do for Lucknow builders and brokers',
    help: [
      { service: 'high-converting-landing-pages', title: 'A landing page for each Lucknow project', desc: 'Locality, price band, configurations, UP RERA number and a site-visit button on the first screen, built to load fast on mobile data.' },
      { service: 'paid-ads', title: 'Meta and Google ads by locality', desc: 'Google ads on project, locality and “flats in …” searches, and Meta ads for people living or working near the project, measured on cost per site visit.' },
      { service: 'ai-automation', title: 'WhatsApp reply in seconds, day or night', desc: 'Every enquiry gets the brochure, price sheet and location pin on WhatsApp instantly, is asked a few qualifying questions and is booked for a visit.' },
    ],
    extraHeading: 'Why work with a real estate-only agency in Lucknow',
    extra: [
      { title: 'One industry, one goal', desc: 'We don’t run campaigns for restaurants or coaching centres. Our pages, ads and WhatsApp flows are built only for property sales.' },
      { title: 'UP RERA compliance built in', desc: 'Project and agent registration numbers on every ad and page, and no claims about price, possession or returns that the project can’t back up.' },
      { title: 'You own everything', desc: 'Ads run from your own Meta and Google accounts, leads go to your sheet or CRM, and you pay the ad spend directly to Meta and Google.' },
      { title: 'Plain weekly reporting', desc: 'Leads, how many were contacted, site visits booked and cost per site visit. No vanity numbers.' },
    ],
    local: {
      heading: 'Lucknow localities we plan campaigns around',
      intro:
        'Each project gets ads and messaging for the buyers who actually search for its area. These are the corridors Lucknow buyers ask about most.',
      areas: [
        { title: 'Gomti Nagar and Gomti Nagar Extension', desc: 'Established and premium apartments and villas. Buyers compare builders and amenities, so a clear project page and a fast reply matter most.' },
        { title: 'Sushant Golf City and Shaheed Path', desc: 'Townships and new launches on the edge of the city. Good for launch campaigns and EOI capture before prices move.' },
        { title: 'Sultanpur Road and Raebareli Road', desc: 'Plotted developments and affordable to mid-range projects, where investors and first-time buyers both search.' },
        { title: 'Faizabad Road, IIM Road and Jankipuram', desc: 'Apartments for families and working buyers who already live in north and east Lucknow and want to stay close.' },
      ],
    },
    relatedPlaybooks: ['new-launch-meta-google-ads-plan', 'project-landing-page-blueprint'],
    relatedPosts: ['real-estate-local-seo-ncr', 'meta-ads-for-real-estate-india', 'rera-number-check', 'how-to-generate-real-estate-leads'],
    faqs: [
      { question: 'Do you work only with real estate businesses in Lucknow?', answer: 'Yes. We are a real estate-only digital marketing agency. In Lucknow we work with developers, builders, brokers and channel partners, and we don’t take clients from other industries.' },
      { question: 'Do you have an office in Lucknow?', answer: 'No. We are a founder-led team based in Kanpur and work with Lucknow clients on WhatsApp, phone and video calls. Your ads, pages and leads are all set up in accounts you own.' },
      { question: 'Which digital marketing services do you offer in Lucknow?', answer: 'Three things that work together: a landing page for each project, Meta (Facebook and Instagram) and Google ads for property leads, and WhatsApp automation that replies to every enquiry in seconds and books site visits.' },
      { question: 'How much ad budget does a Lucknow project need?', answer: 'You pay the ad spend directly to Meta and Google. We recommend at least ₹15,000 a month per project to get enough enquiries to learn from, and more for a launch. Our own fee is separate and quoted after a free audit.' },
      { question: 'Can you promote a project that is not UP RERA registered?', answer: 'No. We only advertise projects that are registered with UP RERA, and the registration number appears on every ad and landing page.' },
      { question: 'Do you also do SEO and social media posting?', answer: 'Our focus is lead generation: pages, paid ads and WhatsApp follow-up. We build landing pages so they can rank and advise on your Google Business Profile, but we don’t sell monthly posting packages.' },
      { question: 'How soon can a Lucknow campaign go live?', answer: 'Usually within one to two weeks, once we have the price sheet, brochure, photos or renders and RERA details. The landing page, tracking, WhatsApp flow and ads are built together.' },
      { question: 'Do you work with individual brokers and channel partners in Lucknow?', answer: 'Yes. Brokers and CPs get a page for each mandated project under their own brand, ads that bring leads only they receive, and a timestamped record of every lead to show the developer.' },
    ],
    ctaTitle: 'Selling a project in Lucknow?',
    ctaDescription: 'Get a free review of your project page, ads and lead follow-up, with the first three fixes we would make.',
    images: {
      hero: { src: '/images/people/lucknow/hero-lucknow-skyline-garden.jpg', alt: '' },
      intro: { src: '/images/people/lucknow/towers-under-construction.jpg', alt: 'Row of new residential towers, some still under construction with cranes on top' },
      pains: { src: '/images/people/lucknow/heritage-facade-evening.jpg', alt: 'Ornate heritage building with arched windows in warm evening light' },
      help: { src: '/images/people/lucknow/clock-tower-blue-sky.jpg', alt: 'Red-brick clock tower against a clear blue sky' },
      extra: { src: '/images/people/lucknow/city-view-through-arch.jpg', alt: 'A minaret, gardens and a domed building seen through a carved stone arch' },
      resources: { src: '/images/people/lucknow/apartments-city-view.jpg', alt: 'White apartment building with balconies, with the city skyline behind it' },
    },
  },
  kanpur: {
    key: 'kanpur',
    path: '/digital-marketing-agency-kanpur',
    breadcrumb: 'Kanpur',
    eyebrow: 'Kanpur · real estate only',
    h1: 'Digital marketing agency in Kanpur for real estate',
    lead:
      'For builders, developers, brokers and channel partners in Kanpur: project landing pages, Meta and Google ads for property leads, and WhatsApp replies that reach every enquiry in seconds.',
    intro: [
      'Veloxis Global is a founder-led digital marketing agency based in Kanpur, and we work only in real estate. Our clients are developers, builders, brokers and channel partners selling flats, plots, villas and commercial space. We don’t take clients from other industries.',
      'Kanpur is a word-of-mouth market. Many buyers already know a broker or a relative in property, and they ask on WhatsApp before they ever fill a form. Speed and trust decide who gets the site visit. We give each project a clear landing page with price, size, location and UP RERA details, ads aimed at the localities buyers actually live in and search for, and an instant WhatsApp reply with the price sheet and a visit slot.',
      'Because we are in Kanpur, we know a buyer in Swaroop Nagar looks for something different from a buyer in Naubasta. Every project we promote must be UP RERA registered, and the registration number goes on every ad and page.',
    ],
    introLink: { text: 'Want to see the full setup?', label: 'See the Real Estate Lead System', href: '/real-estate-lead-system' },
    painsHeading: 'What slows real estate sales in Kanpur',
    pains: [
      { title: 'Everything depends on referrals', desc: 'Referrals are great until they slow down. Without a direct lead source, a new project or phase has no way to fill its site-visit calendar.' },
      { title: 'Ads that reach all of Kanpur and beyond', desc: 'Boosted posts with city-wide targeting bring likes from people who will never buy. Locality and intent matter more than reach.' },
      { title: 'Late replies to WhatsApp enquiries', desc: 'A buyer messages in the evening, hears back the next afternoon, and has already visited another project.' },
      { title: 'No proof of what marketing works', desc: 'Without tracking, nobody knows which hoarding, post or ad brought the buyer who booked, so budgets are set by guesswork.' },
    ],
    helpHeading: 'What we do for Kanpur builders and brokers',
    help: [
      { service: 'high-converting-landing-pages', title: 'A landing page for each Kanpur project', desc: 'Locality, price band, configurations, UP RERA number and a site-visit button on the first screen, built for mobile.' },
      { service: 'paid-ads', title: 'Meta and Google ads by locality', desc: 'Google ads on project and “flats in …” or “plots in …” searches, and Meta ads for people living near the project, measured on cost per site visit.' },
      { service: 'ai-automation', title: 'WhatsApp reply in seconds, day or night', desc: 'Every enquiry gets the brochure, price sheet and location pin instantly, is asked a few qualifying questions and is booked for a visit.' },
    ],
    extraHeading: 'Why a Kanpur-based, real estate-only agency',
    extra: [
      { title: 'Local and founder-led', desc: 'You work directly with the founder, who lives in Kanpur, not with an account manager in another city.' },
      { title: 'One industry, one goal', desc: 'Our pages, ads and WhatsApp flows are built only for property sales and measured on site visits.' },
      { title: 'UP RERA compliance built in', desc: 'Registration numbers on every ad and page, and no promises about price, possession or returns the project can’t back up.' },
      { title: 'You own everything', desc: 'Ads run from your own Meta and Google accounts, leads go to your sheet or CRM, and you pay the ad spend directly.' },
    ],
    local: {
      heading: 'Kanpur localities we plan campaigns around',
      intro:
        'Kanpur buyers search and compare by area. Each project gets ads and messaging for the people who live near it or want to move there.',
      areas: [
        { title: 'Swaroop Nagar, Civil Lines and Tilak Nagar', desc: 'Central, established areas with premium apartments, where buyers expect detail, privacy and a quick, polite reply.' },
        { title: 'Kalyanpur, Kakadeo and Rawatpur', desc: 'Family and student-belt localities with steady demand for apartments and rental-friendly units.' },
        { title: 'Kidwai Nagar, Barra and Naubasta', desc: 'Large South Kanpur neighbourhoods where affordable flats and plots sell on price, payment plans and location.' },
        { title: 'Panki, Shyam Nagar and the outskirts', desc: 'Plotted developments and new projects on the edges of the city, where investors and first-time buyers compare price per square foot.' },
      ],
    },
    relatedPlaybooks: ['project-landing-page-blueprint', 'whatsapp-lead-response-flow'],
    relatedPosts: ['whatsapp-automation-for-real-estate-leads', 'google-ads-for-real-estate-india', 'real-estate-brochure', 'how-to-generate-real-estate-leads'],
    faqs: [
      { question: 'Are you based in Kanpur?', answer: 'Yes. Veloxis Global is a founder-led agency run by Muddassir Ali from Kanpur. We work with clients on WhatsApp, phone and video calls, and don’t have a public walk-in office.' },
      { question: 'Do you work only with real estate businesses?', answer: 'Yes. We are a real estate-only digital marketing agency. In Kanpur we work with developers, builders, brokers and channel partners, and we don’t take clients from other industries.' },
      { question: 'Which digital marketing services do you offer in Kanpur?', answer: 'Three things that work together: a landing page for each project, Meta (Facebook and Instagram) and Google ads for property leads, and WhatsApp automation that replies to every enquiry in seconds and books site visits.' },
      { question: 'How much ad budget does a Kanpur project need?', answer: 'You pay the ad spend directly to Meta and Google. We recommend at least ₹15,000 a month per project to start, and more for a launch. Our own fee is separate and quoted after a free audit.' },
      { question: 'Can online ads work in a referral-driven market like Kanpur?', answer: 'Yes, when they are narrow. Ads aimed at the right localities, a page that answers price and RERA questions, and an instant WhatsApp reply add a steady source of new buyers alongside your referrals.' },
      { question: 'Can you promote plots and plotted developments?', answer: 'Yes, if the project is registered with UP RERA where registration is required. Plot campaigns focus on location, price per square yard, approvals and site-visit booking.' },
      { question: 'How soon can a Kanpur campaign go live?', answer: 'Usually within one to two weeks, once we have the price sheet, brochure, photos and RERA details. The page, tracking, WhatsApp flow and ads are built together.' },
      { question: 'Do you work with individual brokers in Kanpur?', answer: 'Yes. Brokers and channel partners get a page for each project they sell, ads that bring leads only they receive, and instant WhatsApp follow-up.' },
    ],
    ctaTitle: 'Selling a project in Kanpur?',
    ctaDescription: 'Get a free review of your project page, ads and lead follow-up from a Kanpur-based, real estate-only team.',
    images: {
      hero: { src: '/images/people/kanpur/hero-temple-spires.jpg', alt: '' },
      intro: { src: '/images/people/kanpur/residential-towers-lake.jpg', alt: 'Tall residential towers beside a lake, with green trees in the foreground' },
      pains: { src: '/images/people/kanpur/clock-tower-market-street.jpg', alt: 'Red-brick clock tower above a busy market street with shop signs' },
      help: { src: '/images/people/kanpur/apartment-block-construction.jpg', alt: 'Apartment block under construction, with finished floors next to bare concrete ones' },
      extra: { src: '/images/people/kanpur/riverside-boats-morning.jpg', alt: 'Boats moored along a river bank on a hazy morning, with buildings behind' },
      resources: { src: '/images/people/kanpur/apartment-towers-from-below.jpg', alt: 'Apartment towers seen from below against a blue sky' },
    },
  },
  noida: {
    key: 'noida',
    path: '/digital-marketing-agency-noida',
    breadcrumb: 'Noida & Greater Noida',
    eyebrow: 'Noida & Greater Noida · real estate only',
    h1: 'Digital marketing agency in Noida for real estate',
    lead:
      'For builders, developers, brokers and channel partners in Noida, Greater Noida and Greater Noida West: project landing pages, Meta and Google ads for property leads, and WhatsApp replies in seconds.',
    intro: [
      'Veloxis Global is a digital marketing agency for real estate only. We work with developers, builders, brokers and channel partners selling projects in Noida, Greater Noida, Greater Noida West (Noida Extension) and along the Yamuna Expressway, and we don’t take clients from other industries.',
      'Noida is one of the most crowded property ad markets in North India. Many projects compete for the same buyers in the same sectors, portals sell the same enquiry to several brokers, and buyers compare three or four projects before they book a visit. In a market like this, reach matters less than three things: exclusive leads, how fast you reply, and the cost of each site visit.',
      'So we plan by sector and corridor, not by city: a landing page for each project, Google ads on project-name and sector searches, Meta ads for people living and working nearby, and an instant WhatsApp reply with the price sheet and a visit slot. Every project we promote must be UP RERA registered, and the registration number goes on every ad and page.',
    ],
    introLink: { text: 'Want to see the full setup?', label: 'See the Real Estate Lead System', href: '/real-estate-lead-system' },
    painsHeading: 'What slows real estate sales in Noida',
    pains: [
      { title: 'The same buyer, called by five brokers', desc: 'Portal and aggregator leads in Noida are shared widely. Whoever answers first, with the right price and floor plan, usually gets the visit.' },
      { title: 'High cost per lead in a crowded market', desc: 'Many developers bid on the same searches and audiences, so broad campaigns get expensive fast. Narrow targeting and good pages bring the cost down.' },
      { title: 'Buyers comparing sector by sector', desc: 'A buyer in Sector 150 is not looking at Greater Noida West, and an investor on the Yamuna Expressway thinks differently from a family moving from Delhi.' },
      { title: 'Leads that never get a proper reply', desc: 'Evening and weekend enquiries wait for office hours, and in Noida a few hours is long enough to lose the buyer.' },
    ],
    helpHeading: 'What we do for Noida builders and brokers',
    help: [
      { service: 'high-converting-landing-pages', title: 'A landing page for each Noida project', desc: 'Sector, price band, configurations, UP RERA number, possession date and a site-visit button on the first screen, built for mobile.' },
      { service: 'paid-ads', title: 'Meta and Google ads by sector', desc: 'Google ads on project and “flats in sector …” searches, and Meta ads for people living or working nearby, measured on cost per site visit.' },
      { service: 'ai-automation', title: 'WhatsApp reply in seconds, day or night', desc: 'Every enquiry gets the brochure, price sheet and location pin instantly, is asked a few qualifying questions and is booked for a visit.' },
    ],
    extraHeading: 'Why a real estate-only agency for Noida',
    extra: [
      { title: 'Exclusive leads, not shared ones', desc: 'Leads from your own ads and pages come only to you, so you are not racing other brokers for the same buyer.' },
      { title: 'Judged on cost per site visit', desc: 'Cheap leads that never visit are not a win. Campaigns are cut or scaled on visits, not clicks.' },
      { title: 'UP RERA compliance built in', desc: 'Project and agent registration numbers on every ad and page, and no claims about price, possession or returns that the project can’t back up.' },
      { title: 'You own everything', desc: 'Ads run from your own Meta and Google accounts, leads go to your sheet or CRM, and you pay the ad spend directly.' },
    ],
    local: {
      heading: 'Noida corridors we plan campaigns around',
      intro:
        'Each project gets ads and messaging for the buyers who search for its sector or corridor. These are the areas Noida buyers ask about most.',
      areas: [
        { title: 'Noida Expressway', desc: 'High-rise and premium projects in the sectors along the expressway, where buyers compare builders, amenities and connectivity.' },
        { title: 'Greater Noida West (Noida Extension)', desc: 'Large, value-focused projects with many launches side by side. Price, possession and a fast reply decide who gets the visit.' },
        { title: 'Central Noida', desc: 'Established sectors with resale, ready-to-move and a few new launches, popular with families already living in Noida.' },
        { title: 'Greater Noida and the Yamuna Expressway', desc: 'Plots and new projects towards Jewar, where investors and end users both search and compare price per square foot.' },
      ],
    },
    relatedPlaybooks: ['new-launch-meta-google-ads-plan', 'channel-partner-lead-registration'],
    relatedPosts: ['google-ads-vs-meta-ads-real-estate-india', 'channel-partner-in-real-estate', 'what-is-eoi-in-real-estate', 'real-estate-local-seo-ncr'],
    faqs: [
      { question: 'Do you work only with real estate businesses in Noida?', answer: 'Yes. We are a real estate-only digital marketing agency. In Noida and Greater Noida we work with developers, builders, brokers and channel partners, and we don’t take clients from other industries.' },
      { question: 'Do you have an office in Noida?', answer: 'No. We are a founder-led team based in Kanpur and work with Noida clients on WhatsApp, phone and video calls. Your ads, pages and leads are all set up in accounts you own.' },
      { question: 'Which digital marketing services do you offer in Noida?', answer: 'Three things that work together: a landing page for each project, Meta (Facebook and Instagram) and Google ads for property leads, and WhatsApp automation that replies to every enquiry in seconds and books site visits.' },
      { question: 'How much ad budget does a Noida project need?', answer: 'You pay the ad spend directly to Meta and Google. We recommend at least ₹15,000 a month per project to start; Noida is a competitive market, so launches usually need more. Our own fee is separate and quoted after a free audit.' },
      { question: 'Do you cover Greater Noida West and the Yamuna Expressway?', answer: 'Yes. We plan campaigns for projects across Noida, Greater Noida, Greater Noida West (Noida Extension) and the Yamuna Expressway corridor, sector by sector.' },
      { question: 'Can you promote a project that is not UP RERA registered?', answer: 'No. We only advertise projects that are registered with UP RERA, and the registration number appears on every ad and landing page.' },
      { question: 'How soon can a Noida campaign go live?', answer: 'Usually within one to two weeks, once we have the price sheet, brochure, renders and RERA details. The landing page, tracking, WhatsApp flow and ads are built together.' },
      { question: 'Do you work with channel partners selling Noida projects?', answer: 'Yes. CPs get a page for each mandated project under their own brand, ads that bring leads only they receive, and a timestamped record of every lead to show the developer.' },
    ],
    ctaTitle: 'Selling a project in Noida or Greater Noida?',
    ctaDescription: 'Get a free review of your project page, ads and lead follow-up, with the first three fixes we would make.',
    images: {
      hero: { src: '/images/people/noida/hero-skyline-cranes-night.jpg', alt: '' },
      intro: { src: '/images/people/noida/apartment-blocks-sunset.jpg', alt: 'Rows of apartment blocks stretching to the horizon under a golden evening sky' },
      pains: { src: '/images/people/noida/metro-platform-electronic-city.jpg', alt: 'Passengers on an elevated metro platform as a train arrives, with a sign towards Noida Electronic City' },
      help: { src: '/images/people/noida/apartment-balconies-evening.jpg', alt: 'Tall apartment buildings with rows of balconies lit by the evening sun' },
      extra: { src: '/images/people/noida/expressway-through-fields.jpg', alt: 'A wide expressway running through green fields towards the horizon' },
      resources: { src: '/images/people/noida/metro-viaduct-towers.jpg', alt: 'An elevated metro viaduct curving past tall residential towers on a hazy day' },
    },
  },
};
