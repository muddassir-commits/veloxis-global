// Pre-filled WhatsApp messages, one per page, in one place.
//
// Every WhatsApp button on the site opens wa.me/919194020727 with a message that matches the page the
// visitor is on, followed by a short reference code, for example:
//   "Hi Veloxis Global, I read your guide on EOI in real estate. ... (ref: blog-eoi/sticky)"
// The part before "/" says which page (ref below), the part after it says which button (placement).
// That code lets a WhatsApp chat be traced back to the page and button it came from.
//
// How to change a message: edit the text below (no "Hi Veloxis Global," and no ref: both are added
// automatically by lib/whatsapp.ts). Keep messages 1-2 short lines, first person from the visitor,
// no prices, no claims about results, no names.
// New blog post: add an entry to BLOG_MESSAGES (npm run blog:check lists posts that have none; until
// then the post gets a message built from its title).
//
// This file has no runtime imports, so scripts/blog/check.mjs can read it with plain Node.

/** The only WhatsApp number used on the site (+91 91940 20727). Never the old 88876 number. */
export const WHATSAPP_NUMBER = '919194020727';

/** Where on the page a WhatsApp button sits. Also used in the ref code and the data-cta-location attribute. */
export type WaPlacement =
  | 'nav' // header icon (desktop)
  | 'menu' // mobile menu, bottom
  | 'float' // floating "Chat with us" bubble (desktop)
  | 'bar' // sticky bottom bar (mobile)
  | 'footer' // footer contact link
  | 'footer-btn' // footer green button
  | 'banner' // blue CTA banner near the end of most pages
  | 'sticky' // blog sticky card (desktop)
  | 'inline' // in-article lead magnet box on blog posts
  | 'hero' // first screen of a page
  | 'steps' // "start with a free audit" box lower on D2C / local business pages
  | 'form' // next to the enquiry form (Lead System page)
  | 'card' // contact page WhatsApp card
  | 'result' // website audit tool, after a result
  | 'help' // 404 page
  | 'legal' // privacy policy, "who we are"
  | 'grievance'; // privacy policy, grievance officer

/** GA4 `cta` names already in use before this change; kept so old and new reports line up. */
export const LEGACY_CTA_NAMES: Partial<Record<WaPlacement, string>> = {
  sticky: 'blog_sticky_whatsapp',
  inline: 'blog_inline_whatsapp',
};

export type WaPageType =
  | 'home'
  | 'services'
  | 'service'
  | 'lead_system'
  | 'industry'
  | 'audience'
  | 'city'
  | 'blog_index'
  | 'blog_post'
  | 'guides'
  | 'playbooks'
  | 'playbook'
  | 'tool'
  | 'free_audit'
  | 'contact'
  | 'about'
  | 'legal'
  | 'not_found'
  | 'other';

export interface WaPage {
  type: WaPageType;
  /** Short page code shown in the message, e.g. "blog-eoi". Keep it unique and never reuse an old one. */
  ref: string;
  /** What the visitor says, without the greeting and without the ref. */
  message: string;
}

/** Hand-written messages for every main page, keyed by exact path. */
export const PAGE_MESSAGES: Record<string, WaPage> = {
  '/': { type: 'home', ref: 'home', message: "I'm on your website and would like a free marketing audit for my business." },
  '/about': { type: 'about', ref: 'about', message: 'I read about Veloxis Global and would like to discuss marketing for my business.' },
  '/contact': { type: 'contact', ref: 'contact', message: "I'd like to talk to you about marketing for my business." },
  '/free-audit': { type: 'free_audit', ref: 'free-audit', message: "I'd like to request the free marketing audit for my business." },

  // Services
  '/services': { type: 'services', ref: 'services', message: "I'm looking at your services. Can you suggest which one fits my business?" },
  '/services/high-converting-landing-pages': {
    type: 'service',
    ref: 'svc-landing',
    message: 'I need a better website or landing page for my business. Can you look at what I have now and suggest a plan?',
  },
  '/services/paid-ads': {
    type: 'service',
    ref: 'svc-ads',
    message: 'I want to run Meta and Google ads for my business. Can you check my current setup and suggest a plan?',
  },
  '/services/seo': {
    type: 'service',
    ref: 'svc-seo',
    message: 'I want to show up better on Google and Maps. Can you check my website and suggest an SEO plan?',
  },
  '/services/ai-automation': {
    type: 'service',
    ref: 'svc-automation',
    message: 'I want instant WhatsApp replies and follow-ups for my enquiries. Can you explain how the setup works?',
  },
  '/real-estate-lead-system': {
    type: 'lead_system',
    ref: 'lead-system',
    message: "I'm interested in the Real Estate Lead System for my project. Can we discuss how it would work for us?",
  },

  // Industries and audiences
  '/industries': {
    type: 'industry',
    ref: 'industries',
    message: "I'm looking at the industries you work with and would like a free marketing audit for my business.",
  },
  '/industries/real-estate': {
    type: 'industry',
    ref: 'ind-realestate',
    message: 'I market real estate projects and would like a free audit of my ads, landing page and lead follow-up.',
  },
  '/industries/real-estate/nri-buyers': {
    type: 'industry',
    ref: 'ind-nri',
    message: 'I want to reach NRI buyers for my project. Can you suggest how to run a campaign for them?',
  },
  '/channel-partners': {
    type: 'audience',
    ref: 'cp',
    message: "I'm a channel partner and want more genuine buyer leads for the projects I sell. Can you help?",
  },
  // Niche pages moved from /d2c and /local-business on 8 Nov 2026; refs kept so reports line up.
  '/industries/ecommerce': {
    type: 'industry',
    ref: 'd2c',
    message: 'I run an online store / D2C brand and would like a free store audit of my ads, store pages and follow-ups.',
  },
  '/industries/local-business': {
    type: 'industry',
    ref: 'local',
    message: 'I run a local business and would like a free audit of my website, Google Maps listing and local SEO.',
  },
  '/digital-marketing-agency-noida': {
    type: 'city',
    ref: 'city-noida',
    message: "My business is in Noida and I'd like a free marketing audit.",
  },
  '/digital-marketing-agency-lucknow': {
    type: 'city',
    ref: 'city-lucknow',
    message: "My business is in Lucknow and I'd like a free marketing audit.",
  },
  '/digital-marketing-agency-kanpur': {
    type: 'city',
    ref: 'city-kanpur',
    message: "My business is in Kanpur and I'd like a free marketing audit.",
  },

  // Learning pages
  '/blog': { type: 'blog_index', ref: 'blog', message: "I was reading your blog and would like a free marketing audit for my business." },
  '/guides': { type: 'guides', ref: 'guides', message: 'I was going through your guides and want help applying them to my business.' },
  '/playbooks': { type: 'playbooks', ref: 'playbooks', message: 'I was looking at your playbooks and want a plan like this for my project.' },
  '/playbooks/new-launch-meta-google-ads-plan': {
    type: 'playbook',
    ref: 'pb-launch-ads',
    message: 'I saw your Meta and Google ads plan for a new launch. I have a launch coming up. Can we discuss a plan?',
  },
  '/playbooks/project-landing-page-blueprint': {
    type: 'playbook',
    ref: 'pb-landing',
    message: 'I saw your project landing page blueprint and want a page like this for my project.',
  },
  '/playbooks/whatsapp-lead-response-flow': {
    type: 'playbook',
    ref: 'pb-whatsapp',
    message: 'I saw your WhatsApp lead-response flow and want this set up for my enquiries.',
  },
  '/playbooks/channel-partner-lead-registration': {
    type: 'playbook',
    ref: 'pb-cp',
    message: "I'm a channel partner and saw your lead registration playbook. Can you set this up for me?",
  },
  '/playbooks/nri-buyer-campaign-plan': {
    type: 'playbook',
    ref: 'pb-nri',
    message: 'I saw your NRI buyer campaign plan and want to run one for my project.',
  },

  // Tools
  '/tools/website-audit': {
    type: 'tool',
    ref: 'tool-audit',
    message: "I'm using your website audit tool and would like a person to check my website too.",
  },

  // Legal
  '/privacy-policy': { type: 'legal', ref: 'privacy', message: 'I have a question about my personal data and your privacy policy.' },
  '/terms': { type: 'legal', ref: 'terms', message: 'I have a question about your terms of service.' },
};

/** Pages that are not a fixed path (picked by an explicit `page` key, not by the URL). */
export const SPECIAL_MESSAGES = {
  notFound: { type: 'not_found', ref: '404', message: "I tried to open a page on your website and it didn't load. Can you help?" },
} satisfies Record<string, WaPage>;

/** Any page not listed above. */
export const DEFAULT_MESSAGE: WaPage = { type: 'other', ref: 'site', message: "I'd like a free marketing audit for my business." };

/** One message per blog post, keyed by the post folder name (content/blog/<slug>). */
export const BLOG_MESSAGES: Record<string, { ref: string; message: string }> = {
  '99acres-vs-magicbricks-property-portals': {
    ref: 'blog-portals',
    message: 'I read your post on 99acres vs MagicBricks. I want more direct enquiries, not only portal leads. Can you help?',
  },
  'ai-for-real-estate-india': {
    ref: 'blog-ai-re',
    message: 'I read your post on AI in real estate. I want to use AI in my property marketing and follow-ups. Where should I start?',
  },
  'ai-tools-for-real-estate-agents': {
    ref: 'blog-ai-tools',
    message: 'I read your post on AI tools for real estate agents. Can you help me set up AI for my daily lead work?',
  },
  'channel-partner-in-real-estate': {
    ref: 'blog-cp',
    message: 'I read your post on channel partners in real estate. I want more genuine buyer leads as a CP. Can you help?',
  },
  'generative-engine-optimization-guide': {
    ref: 'blog-geo',
    message: 'I read your guide on GEO. I want my business to show up in AI search answers. Can you check my website?',
  },
  'google-ads-for-real-estate-india': {
    ref: 'blog-google-ads',
    message: 'I read your guide on Google Ads for real estate. Can you review my campaign or help me set one up?',
  },
  'google-ads-vs-meta-ads-real-estate-india': {
    ref: 'blog-google-vs-meta',
    message: 'I read your post on Google Ads vs Meta Ads. Can you suggest which one suits my project?',
  },
  'google-business-profile-checklist': {
    ref: 'blog-gbp',
    message: 'I read your Google Business Profile checklist. Can you check my profile and tell me what to fix?',
  },
  'how-to-book-real-estate-site-visits': {
    ref: 'blog-site-visits',
    message: 'I read your post on booking site visits. I get enquiries but few visits. Can you check my follow-up?',
  },
  'how-to-generate-real-estate-leads': {
    ref: 'blog-leads',
    message: 'I read your guide on generating real estate leads. Can you suggest a lead plan for my project?',
  },
  'how-to-sell-plots-online': {
    ref: 'blog-plots',
    message: 'I read your guide on selling plots online. I have a plot project and want more enquiries. Can you help?',
  },
  'instagram-reels-marketing': {
    ref: 'blog-reels',
    message: 'I read your post on Instagram Reels marketing. Can you help me plan reels and reel ads for my business?',
  },
  'luxury-real-estate-marketing': {
    ref: 'blog-luxury',
    message: 'I read your post on luxury real estate marketing. I have a premium project and want the right buyers. Can we talk?',
  },
  'meta-ads-for-real-estate-india': {
    ref: 'blog-meta-ads',
    message: 'I read your guide on Meta ads for real estate. Can you review my ads or help me set them up?',
  },
  'nri-real-estate-marketing': {
    ref: 'blog-nri',
    message: 'I read your post on NRI real estate marketing. I want to reach NRI buyers for my project. Can you help?',
  },
  'pre-launch-real-estate-marketing': {
    ref: 'blog-prelaunch',
    message: 'I read your post on pre-launch marketing. I have a launch coming up and want a plan. Can we discuss?',
  },
  'real-estate-ad-examples': {
    ref: 'blog-ad-examples',
    message: 'I read your real estate ad examples. Can you help me make better ads for my project?',
  },
  'real-estate-branding': {
    ref: 'blog-branding',
    message: 'I read your post on real estate branding. Can you help me build a stronger brand for my business?',
  },
  'real-estate-brochure': {
    ref: 'blog-brochure',
    message: 'I read your post on real estate brochures. Can you check how my brochure and project page bring enquiries?',
  },
  'real-estate-broker-commission-india': {
    ref: 'blog-commission',
    message: "I read your post on broker commission in India. I'm a broker and want more genuine leads. Can you help?",
  },
  'real-estate-chatbot': {
    ref: 'blog-chatbot',
    message: 'I read your post on real estate chatbots. I want a WhatsApp chatbot for my enquiries. How would it work?',
  },
  'real-estate-landing-page': {
    ref: 'blog-re-landing',
    message: 'I read your post on real estate landing pages. Can you build a project page that turns my ad clicks into site visits?',
  },
  'real-estate-content-ideas': {
    ref: 'blog-content-ideas',
    message: 'I read your post on real estate content ideas. Can you help me plan and make content for my project?',
  },
  'real-estate-crm-india': {
    ref: 'blog-crm',
    message: 'I read your post on real estate CRMs. Can you help me set up a CRM and lead follow-up?',
  },
  'real-estate-email-marketing': {
    ref: 'blog-email',
    message: 'I read your post on real estate email marketing. Can you help me set up email follow-ups for my leads?',
  },
  'real-estate-hoarding-design': {
    ref: 'blog-hoarding',
    message: 'I read your post on hoarding design. I want my hoardings and online ads to bring trackable enquiries. Can you help?',
  },
  'real-estate-landing-page-conversion-hacks': {
    ref: 'blog-landing',
    message: 'I read your post on landing page fixes. Can you check my project page and tell me what to fix?',
  },
  'real-estate-lead-management': {
    ref: 'blog-lead-mgmt',
    message: "I read your post on lead management. My leads aren't followed up well. Can you help me set up a process?",
  },
  'real-estate-lead-qualification-questions': {
    ref: 'blog-qualify',
    message: 'I read your post on lead qualification questions. Can you help me qualify my leads faster?',
  },
  'real-estate-local-seo-ncr': {
    ref: 'blog-local-seo',
    message: 'I read your post on local SEO for real estate agents. Can you check my Google Business Profile?',
  },
  'real-estate-marketing-budget': {
    ref: 'blog-budget',
    message: 'I read your post on real estate marketing budgets. Can you help me plan a budget for my project?',
  },
  'real-estate-marketing-plan': {
    ref: 'blog-plan',
    message: 'I read your guide on making a real estate marketing plan. Can you help me make one for my project?',
  },
  'real-estate-newspaper-ads-vs-digital-ads': {
    ref: 'blog-newspaper',
    message: 'I read your post on newspaper ads vs digital ads. Can you suggest the right mix for my project?',
  },
  'real-estate-referral-program': {
    ref: 'blog-referral',
    message: 'I read your post on referral programs. Can you help me set one up for my buyers?',
  },
  'real-estate-retargeting-ads': {
    ref: 'blog-retargeting',
    message: "I read your post on retargeting ads. Can you help me win back visitors who didn't enquire?",
  },
  'real-estate-sales-scripts-india': {
    ref: 'blog-scripts',
    message: 'I read your post on real estate sales scripts. Can you help my team follow up with leads better?',
  },
  'real-estate-seo-india': {
    ref: 'blog-seo',
    message: 'I read your guide on real estate SEO. Can you check my website and project pages?',
  },
  'real-estate-slogans-taglines': {
    ref: 'blog-slogans',
    message: 'I read your post on real estate slogans. Can you help with the ads and landing page for my project?',
  },
  'real-estate-social-media-marketing': {
    ref: 'blog-social',
    message: 'I read your post on real estate social media marketing. Can you help me get leads from social media?',
  },
  'real-estate-video-marketing': {
    ref: 'blog-video',
    message: 'I read your post on real estate video marketing. Can you help me use video in my ads?',
  },
  'real-estate-website-examples': {
    ref: 'blog-website',
    message: 'I read your post on real estate website examples. Can you check my website?',
  },
  'real-estate-whatsapp-message-templates': {
    ref: 'blog-wa-templates',
    message: 'I read your post on WhatsApp message templates. Can you help me set up replies and follow-ups for my leads?',
  },
  'rera-advertisement-rules': {
    ref: 'blog-rera-ads',
    message: 'I read your post on RERA advertisement rules. Can you check that my ads and project page show the right details?',
  },
  'rera-number-check': {
    ref: 'blog-rera-check',
    message: 'I read your post on RERA number checks. Can you help me show RERA details properly on my project page?',
  },
  'rera-registration-for-agents': {
    ref: 'blog-rera-agent',
    message: "I read your post on RERA agent registration. I'm an agent. Can you also help me get more genuine leads?",
  },
  'what-is-eoi-in-real-estate': {
    ref: 'blog-eoi',
    message: 'I read your guide on EOI in real estate. I want to collect EOIs for my project online. Can you help?',
  },
  'whatsapp-automation-for-real-estate-leads': {
    ref: 'blog-wa-automation',
    message: 'I read your post on WhatsApp automation. Can you set up instant replies and follow-ups for my leads?',
  },
  'whatsapp-business-api-for-real-estate': {
    ref: 'blog-wa-api',
    message: 'I read your post on the WhatsApp Business API. Can you help me set it up for my enquiries?',
  },
};
