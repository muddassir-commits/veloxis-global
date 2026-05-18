/**
 * Centralized Semantic Entity Relationship Graph
 * 
 * Defines highly connected entities (Services, Industries, Locations, Workflows, Competitors)
 * with structured contextual pools (FAQs, pain points, examples, proof points)
 * to guarantee 100% unique page compositions and support semantic graph search.
 */

export const ENTITY_GRAPH = {
  services: {
    'ai-automation': {
      id: 'ai-automation',
      name: 'AI Automation Systems',
      type: 'service',
      shortDesc: 'End-to-end intelligent operational workflows powered by LLMs and autonomous agents.',
      relatedTechnologies: ['n8n', 'claude-ai', 'gpt-4'],
      relatedPainPoints: ['lost-leads', 'manual-entry', 'data-silos'],
      relatedUseCases: ['lead-qualification', 'auto-invoicing'],
      parent: null,
      children: ['n8n-workflows'],
      proof: {
        metric: '92%',
        label: 'Reduction in manual data entry time',
        caseStudy: 'Automated 14 sales touchpoints for an enterprise SaaS client.'
      },
      faqs: [
        { q: 'What is an AI Automation System?', a: 'It is a connected software layer that leverages artificial intelligence to run business operations without human intervention.' },
        { q: 'How does it integrate with existing CRMs?', a: 'Using native API integrations or custom webhook routing, bridging tools like Salesforce, HubSpot, or Airtable.' }
      ]
    },
    'n8n-workflows': {
      id: 'n8n-workflows',
      name: 'n8n Workflow Automation',
      type: 'service',
      shortDesc: 'Scalable, complex API connections and event-driven automation pipelines.',
      relatedTechnologies: ['n8n'],
      relatedPainPoints: ['high-zapier-bills', 'data-silos'],
      relatedUseCases: ['lead-routing', 'data-sync'],
      parent: 'ai-automation',
      children: [],
      proof: {
        metric: '75%',
        label: 'Savings in subscription costs compared to Zapier',
        caseStudy: 'Migrated 40 enterprise workflows from Zapier to self-hosted n8n.'
      },
      faqs: [
        { q: 'Why choose n8n over Zapier?', a: 'n8n offers advanced multi-step logical looping, direct JavaScript injection, and self-hosting options with zero per-task fees.' }
      ]
    },
    'ai-lead-generation': {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation & Outbound',
      type: 'service',
      shortDesc: 'Automated prospect sourcing, enrichment, personalization, and cold outreach pipelines.',
      relatedTechnologies: ['apollo-io', 'clay', 'linkedin-sales-navigator'],
      relatedPainPoints: ['slow-outreach', 'dirty-data'],
      relatedUseCases: ['prospect-sourcing', 'personalized-email'],
      parent: null,
      children: [],
      proof: {
        metric: '4.8x',
        label: 'Increase in positive response rate',
        caseStudy: 'Built a multi-channel cold campaign scaling to 5,000 weekly high-intent emails.'
      },
      faqs: [
        { q: 'How do you ensure cold emails do not go to spam?', a: 'We set up strict domain warming, SPF, DKIM, and DMARC configurations combined with Claude-based dynamic personalization.' }
      ]
    }
  },

  industries: {
    'real-estate': {
      id: 'real-estate',
      name: 'Real Estate & Property Tech',
      type: 'industry',
      targetAudience: 'Agency founders, property developers, and broker networks.',
      specificPainPoints: {
        'lost-leads': 'Brokers taking over 4 hours to follow up on Portal leads, causing buyers to lose interest.',
        'manual-entry': 'Manually copy-pasting lead details from property listings platforms into spreadsheet trackers.'
      },
      useCaseExamples: [
        { title: 'Immediate Portal Sourcing', desc: 'n8n captures leads from real estate portals, qualifies them using Claude based on budget, and logs them in Airtable within 90 seconds.' }
      ],
      faqs: [
        { q: 'Can this integrate with property portals like Zillow or MagicBricks?', a: 'Yes, we capture leads in real-time using webhook listeners or parsed email notifications.' }
      ]
    },
    'saas': {
      id: 'saas',
      name: 'B2B Software & SaaS',
      type: 'industry',
      targetAudience: 'SaaS founders, VP of Sales, and growth marketers.',
      specificPainPoints: {
        'lost-leads': 'Trial signups failing to convert due to absent automated nurturing sequences.',
        'data-silos': 'Product usage metrics completely disconnected from CRM sales pipelines.'
      },
      useCaseExamples: [
        { title: 'Product-Led Onboarding', desc: 'Syncing mixpanel event triggers with n8n to send personalized email tips from Claude when a user gets stuck in the app.' }
      ],
      faqs: [
        { q: 'How do you connect product database events to email campaigns?', a: 'We hook directly into your backend event brokers or platforms like Segment/Stripe using custom n8n webhooks.' }
      ]
    }
  },

  locations: {
    'mumbai': {
      id: 'mumbai',
      name: 'Mumbai',
      type: 'location',
      marketContext: 'The primary financial hub of India, home to rapid real estate growth and corporate SaaS headquarters.',
      localExamples: [
        { title: 'Automating Commercial Brokerage in BKC', desc: 'Built intelligent Lead Routing systems for a premium office space brokerage in Bandra-Kurla Complex.' }
      ]
    },
    'bangalore': {
      id: 'bangalore',
      name: 'Bangalore',
      type: 'location',
      marketContext: 'The Silicon Valley of India, saturated with high-growth SaaS, deep-tech startups, and VC networks.',
      localExamples: [
        { title: 'Outbound Scale for Indiranagar SaaS', desc: 'Designed high-velocity Apollo + Claude pipeline for an automated developer-tool SaaS startup.' }
      ]
    }
  },

  competitors: {
    'zapier': {
      id: 'zapier',
      name: 'Zapier',
      type: 'competitor',
      pros: ['Huge app library', 'Very easy for simple 2-step automations'],
      cons: ['Prohibitively expensive task pricing', 'Limited logic looping', 'No self-hosting options'],
      alternativePitch: 'Veloxis engineers n8n-based systems that eliminate task quotas entirely, saving you up to 90% in software fees.'
    }
  }
};
