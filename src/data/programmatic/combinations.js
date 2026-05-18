/**
 * Whitelisted Programmatic Combinations & Intent Classification Registry
 * 
 * Acting as our Dynamic SEO Firewall, this registry whitelists exact entity pairings.
 * Any request attempting to render an un-approved programmatic combination is instantly blocked.
 */

export const ALLOWED_PROGRAMMATIC_COMBINATIONS = [
  // 1. Service + Industry (Commercial intent)
  {
    slug: 'ai-automation-for-real-estate',
    intent: 'commercial',
    service: 'ai-automation',
    industry: 'real-estate',
    schemaType: 'Service',
    titlePattern: 'AI Automation Systems for Real Estate Brokerages',
    descPattern: 'Streamline portal leads, automate property buyer qualifications, and scale sales pipeline for real estate agencies.'
  },
  {
    slug: 'ai-automation-for-saas',
    intent: 'commercial',
    service: 'ai-automation',
    industry: 'saas',
    schemaType: 'Service',
    titlePattern: 'Enterprise AI Automation Workflows for SaaS Companies',
    descPattern: 'Bridge product usage metrics with CRM sales pipelines, automate customer onboarding, and reduce operational drag.'
  },

  // 2. Service + Location (Local / Commercial intent)
  {
    slug: 'ai-automation-services-in-mumbai',
    intent: 'local',
    service: 'ai-automation',
    location: 'mumbai',
    schemaType: 'LocalBusiness',
    titlePattern: 'Premium AI Automation Consulting & Systems in Mumbai',
    descPattern: 'Top-tier AI automation consulting, CRM routing, and custom n8n workflows for businesses and enterprises in Mumbai, India.'
  },
  {
    slug: 'ai-lead-generation-in-bangalore',
    intent: 'local',
    service: 'ai-lead-generation',
    location: 'bangalore',
    schemaType: 'LocalBusiness',
    titlePattern: 'AI Lead Generation & Outbound Outreach Agency in Bangalore',
    descPattern: 'Build custom prospecting databases, automate email/LinkedIn outreach, and book more qualified sales calls in Bangalore.'
  },

  // 3. Service Comparison (Comparison / Informational intent)
  {
    slug: 'zapier-vs-n8n-for-enterprise',
    intent: 'comparison',
    service: 'n8n-workflows',
    competitor: 'zapier',
    schemaType: 'Article',
    titlePattern: 'Zapier vs n8n: Detailed Enterprise Workflow Comparison',
    descPattern: 'Unbiased performance, loop capability, self-hosting cost, and reliability comparison between Zapier and n8n.'
  }
];

/**
 * Validates if a dynamic request slug exists in the whitelisted combos.
 */
export const getCombinationBySlug = (slug) => {
  return ALLOWED_PROGRAMMATIC_COMBINATIONS.find(combo => combo.slug === slug) || null;
};
