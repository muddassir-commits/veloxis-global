// The /guides hub: every guide grouped by topic. Guides are normal blog posts (content/blog/<slug>);
// a slug listed here that isn't published yet is simply left out, so the hub can list planned guides
// without linking to a page that doesn't exist. Topics are broad (AI search, ads, SEO, WhatsApp);
// examples inside each guide stay real-estate first.

export interface GuideTopic {
  id: string;
  title: string;
  /** One-paragraph answer to "what is this topic", written so AI answers can quote it. */
  intro: string;
  slugs: string[];
}

export const guideTopics: GuideTopic[] = [
  {
    id: 'ai-search',
    title: 'AI search, GEO and AEO',
    intro:
      'AI search is when people get an answer from ChatGPT, Gemini, Perplexity or Google’s AI Overviews instead of a list of links. Generative engine optimization (GEO) and answer engine optimization (AEO) are the work of making your business one of the sources those answers quote.',
    slugs: ['generative-engine-optimization-guide', 'ai-for-real-estate-india'],
  },
  {
    id: 'ads',
    title: 'Meta and Google ads',
    intro:
      'Paid ads buy attention on Facebook, Instagram, Google Search and YouTube. The guides cover campaign setup, targeting, lead forms, budgets and how to judge ads on qualified leads instead of clicks.',
    slugs: [
      'how-to-generate-real-estate-leads',
      'meta-ads-for-real-estate-india',
      'google-ads-for-real-estate-india',
      'google-ads-vs-meta-ads-real-estate-india',
      'real-estate-ad-examples',
    ],
  },
  {
    id: 'seo',
    title: 'SEO and Google Business Profile',
    intro:
      'Search engine optimization (SEO) gets your pages found on Google without paying per click. Local SEO and a verified Google Business Profile decide whether you appear in the map results for searches in your city.',
    slugs: ['real-estate-seo-india', 'real-estate-local-seo-ncr'],
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp and AI automation',
    intro:
      'Automation answers every enquiry in seconds, asks the qualifying questions and follows up until the lead replies, so no lead goes cold while your team is busy.',
    slugs: ['whatsapp-automation-for-real-estate-leads'],
  },
  {
    id: 'social-media',
    title: 'Social media and Reels',
    intro:
      'Organic social media builds trust before a buyer ever fills a form. Short video (Instagram Reels, YouTube Shorts) is now the format that reaches the most people for free.',
    slugs: ['instagram-reels-marketing', 'real-estate-social-media-marketing'],
  },
  {
    id: 'landing-pages-creative',
    title: 'Landing pages, brochures and creative',
    intro:
      'A landing page is the single page an ad sends people to. Its only job is to turn a visitor into an enquiry. Brochures, hoardings and slogans support the same message offline.',
    slugs: [
      'real-estate-landing-page-conversion-hacks',
      'real-estate-brochure',
      'real-estate-hoarding-design',
      'real-estate-slogans-taglines',
    ],
  },
  {
    id: 'rera-channel-partners',
    title: 'RERA, brokers and channel partners',
    intro:
      'Rules and roles specific to Indian real estate: how RERA registration works, what must appear in ads, and how channel partners and expressions of interest fit into a launch.',
    slugs: ['rera-number-check', 'rera-registration-for-agents', 'channel-partner-in-real-estate', 'what-is-eoi-in-real-estate'],
  },
];

/** Short, quotable definitions shown on /guides and marked up as a DefinedTermSet. */
export const glossary: { term: string; definition: string }[] = [
  {
    term: 'Generative engine optimization (GEO)',
    definition:
      'Making your content easy for AI tools such as ChatGPT, Gemini and Perplexity to find, trust and quote when they write an answer.',
  },
  {
    term: 'Answer engine optimization (AEO)',
    definition:
      'Writing pages that answer one clear question directly, so search features and AI assistants can lift the answer as it is.',
  },
  {
    term: 'AI Overviews',
    definition: 'The AI-written summary Google shows above the normal results for some searches, with links to the pages it used.',
  },
  {
    term: 'llms.txt',
    definition:
      'A plain-text file at the root of a website that summarises the site for AI tools. It is a proposed convention; Google has said it does not use it.',
  },
  {
    term: 'Structured data (schema)',
    definition:
      'Code on a page that tells search engines what the page is about: an organisation, an article, an FAQ, a product. It helps machines read the page correctly.',
  },
  {
    term: 'Cost per lead (CPL)',
    definition: 'Total ad spend divided by the number of enquiries the ads produced.',
  },
  {
    term: 'Landing page',
    definition: 'A single web page built for one campaign, with one goal: getting the visitor to send an enquiry.',
  },
  {
    term: 'WhatsApp Business API',
    definition:
      'Meta’s official way for businesses to send and receive WhatsApp messages through software, which allows instant automatic replies and follow-ups.',
  },
  {
    term: 'Google Business Profile',
    definition: 'The free listing that shows a business on Google Maps and in local search results.',
  },
  {
    term: 'Speed to lead',
    definition: 'How quickly a new enquiry gets its first reply. The faster the reply, the more likely the conversation continues.',
  },
];

export const guidesHubFaqs = [
  {
    question: 'Are these guides only for real estate?',
    answer:
      'No. Each guide explains the topic in general terms first, then uses real estate examples because that is the industry we specialise in. The steps work for most businesses that sell through enquiries.',
  },
  {
    question: 'What is the difference between GEO, AEO and SEO?',
    answer:
      'SEO gets your pages into search results. AEO (answer engine optimization) makes each answer on a page easy for search features and assistants to lift. GEO (generative engine optimization) makes AI tools trust your business enough to name it in their answers.',
  },
  {
    question: 'Where should a small business start?',
    answer:
      'Start with the basics that every channel depends on: a fast page with a clear enquiry form and WhatsApp link, tracking installed, and the same business details on every profile. Then pick one channel (ads, SEO or Reels) and do it properly before adding the next.',
  },
  {
    question: 'Who writes the guides?',
    answer: 'Muddassir Ali, founder of Veloxis Global, writes and updates every guide.',
  },
  {
    question: 'How often are new guides added?',
    answer: 'A new guide is published roughly every two days, and older guides are updated when platforms change.',
  },
  {
    question: 'Can I check my own website for these issues?',
    answer:
      'Yes. The free Website Audit tool checks a page for the basics covered in these guides, including AI search readiness, and lists what to fix first.',
  },
  {
    question: 'Do you offer help putting a guide into practice?',
    answer:
      'Yes. Ask for a free marketing audit and Muddassir will review your pages, ads and lead follow-up personally and tell you what to fix first.',
  },
];
