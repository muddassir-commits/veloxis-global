// Audience pages: who we help. One primary intent each —
// developers: "marketing for real estate developers"; channel partners: "channel partner marketing".

export interface AudienceBlock {
  title: string;
  desc: string;
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
  key: 'developers' | 'channel-partners';
  path: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  painsHeading: string;
  pains: AudienceBlock[];
  helpHeading: string;
  help: AudienceHelp[];
  extraHeading: string;
  extra: AudienceBlock[];
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
};
