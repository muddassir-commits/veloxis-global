export interface Subservice {
  name: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  accentColor: 'teal' | 'indigo' | 'orange' | 'purple' | 'cyan' | 'gold' | 'green' | 'navy' | 'red' | 'gray';
  gradientClass: string;
  pricing: {
    starter: string;
    growth: string;
    enterprise: string;
  };
  pricingRange: string;
  benefits: string[];
  subservices: Subservice[];
  bestFor: string[];
  cta: string;
  achievements: string[];
  relatedServices: string[];
  faqs: ServiceFAQ[];
}

export interface PremiumPackage {
  name: string;
  scope: string;
  price: string;
  bestFor: string;
}

export interface ClientTier {
  tier: number;
  name: string;
  price: string;
  includes: string[];
  bestFor: string;
}

export const servicesData: ServiceData[] = [
  {
    "id": "paid-advertising",
    "slug": "paid-advertising-performance-marketing",
    "title": "Paid Advertising & Performance Marketing",
    "emoji": "🎯",
    "subtitle": "Expert paid campaign management across all platforms — Google, Meta, LinkedIn, YouTube",
    "shortDesc": "Maximize your ad spend with certified, data-driven paid advertising campaigns across Meta, Google, LinkedIn, and YouTube.",
    "longDesc": "Maximize your ad spend with certified, data-driven paid advertising campaigns across Meta, Google, LinkedIn, and YouTube.",
    "icon": "Target",
    "accentColor": "teal",
    "gradientClass": "from-teal-500/20 via-blue-500/10 to-transparent",
    "pricing": {
      "starter": "₹22,000/month",
      "growth": "₹22,000–₹150,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹22,000–₹150,000/month",
    "benefits": [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & Search Marketing",
      "LinkedIn Ads & B2B Marketing",
      "Advanced Targeting & Audience Building",
      "Ad Account Health & Audits"
    ],
    "subservices": [
      {
        "name": "Meta Ads (Facebook & Instagram)",
        "items": [
          "Full-funnel campaign architecture",
          "Lead Ads setup & optimization",
          "Advantage+ Campaigns",
          "Dynamic Creative Optimization (DCO)",
          "Retargeting & lookalike audiences",
          "A/B & multivariate testing",
          "ROAS optimization & scaling",
          "Creative strategy & copywriting",
          "Budget allocation & cost cap strategies"
        ]
      },
      {
        "name": "Google Ads & Search Marketing",
        "items": [
          "Google Search Ads (keyword targeting)",
          "Google Display Network (brand awareness)",
          "Shopping Ads & Product Feed Management",
          "YouTube Ads (In-stream & Discovery)",
          "Performance Max Campaigns",
          "Conversion tracking & CAPI setup",
          "Bid strategy optimization",
          "Landing page A/B testing",
          "Google-certified campaign management"
        ]
      },
      {
        "name": "LinkedIn Ads & B2B Marketing",
        "items": [
          "Account-based marketing (ABM)",
          "Lead generation campaigns",
          "Sponsored content & InMail",
          "Retargeting decision makers",
          "B2B audience targeting",
          "LinkedIn conversion tracking"
        ]
      },
      {
        "name": "Advanced Targeting & Audience Building",
        "items": [
          "Custom audience creation",
          "Lookalike audience modeling",
          "Behavioral targeting",
          "Intent-based segmentation",
          "First-party data strategy"
        ]
      },
      {
        "name": "Ad Account Health & Audits",
        "items": [
          "Account structure review",
          "Pixel diagnostics",
          "Conversion event validation",
          "Budget waste elimination",
          "Campaign performance audit"
        ]
      }
    ],
    "bestFor": [
      "E-commerce",
      "Lead Generation",
      "Brand Awareness",
      "Conversion Scaling"
    ],
    "cta": "Get Your Free Ad Audit",
    "achievements": [],
    "relatedServices": [
      "analytics-tracking-attribution",
      "brand-strategy-positioning",
      "web-development-technology"
    ],
    "faqs": [
      {
        "question": "What platforms do you manage for paid advertising?",
        "answer": "We manage advertising campaigns across all major digital platforms including Meta (Facebook & Instagram), Google (Search, Display, YouTube, and Performance Max), LinkedIn, and programmatic ad networks."
      },
      {
        "question": "How do you optimize ad budgets to avoid waste?",
        "answer": "We perform daily optimization sweeps, setup negative keyword lists, use dynamic creative optimization (DCO) to test multiple combinations, and allocate budgets toward high-converting audience segments."
      },
      {
        "question": "Is there a minimum ad spend requirement?",
        "answer": "While we don't have a rigid minimum, we recommend a minimum ad budget of ₹25,000/month per platform to ensure we have enough data volume to test, learn, and optimize for positive ROAS."
      },
      {
        "question": "How do you track conversions and attribution?",
        "answer": "We set up Google Analytics 4 (GA4), Meta Pixel, Conversions API (CAPI), and custom event tracking. This ensures we track leads and sales back to the specific ad creative and campaign that generated them."
      },
      {
        "question": "What is a typical ROAS (Return on Ad Spend) we can expect?",
        "answer": "Typical ROAS varies by industry and offer strength. E-commerce brands usually see between 3x to 6x ROAS, while lead generation campaigns focus on reducing Cost-Per-Lead (CPL) by 30-50%."
      }
    ]
  },
  {
    "id": "seo-organic-growth",
    "slug": "organic-growth-seo-mastery",
    "title": "Organic Growth & SEO Mastery",
    "emoji": "🔍",
    "subtitle": "Rank #1 on Google with white-hat, sustainable SEO strategies",
    "shortDesc": "Dominate Google search results with comprehensive technical SEO, content optimization, and local SEO strategies.",
    "longDesc": "Dominate Google search results with comprehensive technical SEO, content optimization, and local SEO strategies.",
    "icon": "Search",
    "accentColor": "green",
    "gradientClass": "from-green-500/20 via-emerald-500/10 to-transparent",
    "pricing": {
      "starter": "₹18,000/month",
      "growth": "₹18,000–₹120,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹18,000–₹120,000/month",
    "benefits": [
      "Technical SEO",
      "On-Page SEO & Keyword Strategy",
      "Local SEO & Google Business Profile",
      "Content SEO & Topical Authority",
      "Backlink & Authority Building",
      "SEO Audits & Analysis"
    ],
    "subservices": [
      {
        "name": "Technical SEO",
        "items": [
          "Core Web Vitals optimization",
          "Site crawl analysis & error fixes",
          "XML sitemap & robots.txt setup",
          "Internal linking architecture",
          "Page speed optimization",
          "Mobile-first indexing",
          "Schema markup implementation",
          "Structured data validation"
        ]
      },
      {
        "name": "On-Page SEO & Keyword Strategy",
        "items": [
          "Comprehensive keyword research (100+ keywords)",
          "Keyword mapping & intent analysis",
          "Title tags & meta description optimization",
          "Header tag structure (H1-H3)",
          "Content optimization for search intent",
          "Image alt text & optimization",
          "Entity optimization & knowledge graph"
        ]
      },
      {
        "name": "Local SEO & Google Business Profile",
        "items": [
          "Google Business Profile optimization",
          "Local citation building (420+ citations)",
          "Review management & response",
          "Local keyword targeting",
          "Service area setup & mapping",
          "Google Maps pack positioning",
          "Location-specific landing pages"
        ]
      },
      {
        "name": "Content SEO & Topical Authority",
        "items": [
          "Topic cluster architecture",
          "Pillar page creation",
          "Topic cluster content mapping",
          "Keyword gap analysis",
          "Content gap identification",
          "Internal cross-linking strategy"
        ]
      },
      {
        "name": "Backlink & Authority Building",
        "items": [
          "Competitor backlink analysis",
          "High-authority link prospecting",
          "Guest posting outreach",
          "Broken link building",
          "Resource page link acquisition",
          "HARO (Help A Reporter Out) outreach",
          "Authority & topical relevance"
        ]
      },
      {
        "name": "SEO Audits & Analysis",
        "items": [
          "Full-site technical audit",
          "Competitor analysis (top 10 rankings)",
          "Ranking opportunity identification",
          "Content performance analysis",
          "Search visibility tracking"
        ]
      }
    ],
    "bestFor": [
      "Local Businesses",
      "B2B SaaS",
      "Content-Heavy Sites",
      "Long-term Growth"
    ],
    "cta": "Get Your Free SEO Audit",
    "achievements": [
      "340% traffic increase",
      "20+ keywords ranked top 20",
      "₹650 cost-per-lead"
    ],
    "relatedServices": [
      "content-creative-services",
      "analytics-tracking-attribution",
      "brand-strategy-positioning"
    ],
    "faqs": [
      {
        "question": "How long does it take to see results from SEO?",
        "answer": "SEO is a long-term investment. Most clients begin seeing rank improvements and traffic increases in 60-90 days, while highly competitive keywords may take 4-6 months to reach top search positions."
      },
      {
        "question": "Do you offer local SEO for multiple office locations?",
        "answer": "Yes, local SEO is one of our key strengths. We optimize Google Business Profiles, build local citations, and deploy geo-targeted location pages to ensure your brand ranks in the Google Map Pack."
      },
      {
        "question": "Do you use white-hat search-engine compliant methods?",
        "answer": "Absolutely. We follow 100% white-hat SEO practices and strictly align with Google's Search Quality Evaluator Guidelines. We prioritize user experience, page speed, and helpful, high-E-E-A-T content."
      },
      {
        "question": "What does a technical SEO audit cover?",
        "answer": "Our audits analyze Core Web Vitals (site speed), crawlability, indexation issues, XML sitemaps, robots.txt files, redirect loops, SSL security parameters, and schema markup integration."
      },
      {
        "question": "How do you measure SEO success?",
        "answer": "We track organic search impressions, clicks, click-through rates (CTR), keyword rankings, organic lead conversions, and overall organic traffic growth using Google Search Console and GA4."
      }
    ]
  },
  {
    "id": "content-creative",
    "slug": "content-creative-services",
    "title": "️ Content & Creative Services",
    "emoji": "✍️",
    "subtitle": "SEO-optimized content that ranks, educates, and converts",
    "shortDesc": "Create compelling, SEO-friendly content that attracts organic traffic and converts readers into customers.",
    "longDesc": "Create compelling, SEO-friendly content that attracts organic traffic and converts readers into customers.",
    "icon": "PenTool",
    "accentColor": "orange",
    "gradientClass": "from-amber-500/20 via-orange-500/10 to-transparent",
    "pricing": {
      "starter": "₹15,000/month",
      "growth": "₹15,000–₹80,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹15,000–₹80,000/month",
    "benefits": [
      "Blog Writing & Content Strategy",
      "Landing Page & Sales Copy",
      "Video Content Production",
      "Graphic Design & Creative Assets",
      "User-Generated Content (UGC) Direction"
    ],
    "subservices": [
      {
        "name": "Blog Writing & Content Strategy",
        "items": [
          "Content strategy & calendar planning",
          "SEO-optimized blog writing (500–3,000 words)",
          "Topic research & briefing",
          "Internal linking recommendations",
          "Content clusters & pillar pages",
          "500+ blog articles managed"
        ]
      },
      {
        "name": "Landing Page & Sales Copy",
        "items": [
          "High-converting landing pages",
          "Sales funnel copy",
          "Email sequences & follow-ups",
          "Lead magnet copy",
          "Product page descriptions",
          "Case study writing"
        ]
      },
      {
        "name": "Video Content Production",
        "items": [
          "YouTube video scripting",
          "Short-form video (Reels, Shorts, TikTok)",
          "Voiceover & audio production (ElevenLabs)",
          "Video editing (Adobe Premiere, DaVinci Resolve)",
          "Thumbnail design",
          "Video SEO optimization"
        ]
      },
      {
        "name": "Graphic Design & Creative Assets",
        "items": [
          "Social media graphics (Canva)",
          "Brand collateral design",
          "Ad creative design",
          "Infographic creation",
          "Cover images & thumbnails",
          "Banner design"
        ]
      },
      {
        "name": "User-Generated Content (UGC) Direction",
        "items": [
          "UGC strategy & briefing",
          "Creator collaboration",
          "UGC video direction",
          "Content repurposing guidance"
        ]
      }
    ],
    "bestFor": [
      "Authority Building",
      "Thought Leadership",
      "Educational Content",
      "Conversion Optimization"
    ],
    "cta": "Let's Plan Your Content Strategy",
    "achievements": [],
    "relatedServices": [
      "organic-growth-seo-mastery",
      "email-marketing-automation",
      "social-media-community-building"
    ],
    "faqs": [
      {
        "question": "What types of content do you write?",
        "answer": "We produce SEO-optimized blog posts, high-converting landing page copy, sales funnel copy, email newsletters, YouTube video scripts, and social media captions."
      },
      {
        "question": "How do you ensure content quality and SEO optimization?",
        "answer": "Our content is crafted by professional copywriters, reviewed by SEO specialists for keyword mapping and search intent, and optimized for readability, structure, and E-E-A-T principles."
      },
      {
        "question": "Do you write content for complex or niche industries?",
        "answer": "Yes, we have experience writing for diverse sectors including Real Estate, Healthcare, B2B SaaS, Finance, and E-learning. We research thoroughly and collaborate with you to capture your brand's voice."
      },
      {
        "question": "What is a content pillar and topic cluster strategy?",
        "answer": "It's an SEO content strategy where we create a comprehensive 'pillar page' about a core topic and support it with 'cluster pages' linking back, demonstrating depth of expertise to Google."
      },
      {
        "question": "Do you provide graphics and video assets?",
        "answer": "Yes, our creative services include graphic design for social media, ad banners, and short-form video editing (Reels, Shorts, and TikTok) including voiceovers and scripting."
      }
    ]
  },
  {
    "id": "social-media",
    "slug": "social-media-community-building",
    "title": "Social Media & Community Building",
    "emoji": "📱",
    "subtitle": "Build engaged communities and scale your brand organically",
    "shortDesc": "Grow your social presence with strategic content, community engagement, and data-driven optimization.",
    "longDesc": "Grow your social presence with strategic content, community engagement, and data-driven optimization.",
    "icon": "Share2",
    "accentColor": "purple",
    "gradientClass": "from-purple-500/20 via-pink-500/10 to-transparent",
    "pricing": {
      "starter": "₹20,000/month",
      "growth": "₹20,000–₹100,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹20,000–₹100,000/month",
    "benefits": [
      "Instagram Management & Growth",
      "Facebook Page Management",
      "LinkedIn B2B Strategy",
      "TikTok & Short-Form Video",
      "YouTube Channel Management",
      "Community Management"
    ],
    "subservices": [
      {
        "name": "Instagram Management & Growth",
        "items": [
          "Content calendar & ideation",
          "Daily post scheduling & optimization",
          "Reels creation & strategy",
          "Hashtag research & strategy",
          "Story & highlight management",
          "Community engagement & DM management",
          "Follower growth & analytics tracking",
          "27,700+ monthly views managed"
        ]
      },
      {
        "name": "Facebook Page Management",
        "items": [
          "Community building & moderation",
          "Content strategy & posting",
          "Group management (private communities)",
          "Event promotion & management",
          "Audience insights & reporting"
        ]
      },
      {
        "name": "LinkedIn B2B Strategy",
        "items": [
          "LinkedIn company page optimization",
          "Content strategy & posting",
          "Employee advocacy program",
          "LinkedIn Ads integration",
          "B2B community building",
          "Thought leadership positioning"
        ]
      },
      {
        "name": "TikTok & Short-Form Video",
        "items": [
          "TikTok account setup & strategy",
          "Trending audio & hashtag research",
          "Short-form video production",
          "Creator collaboration",
          "Viral content strategy"
        ]
      },
      {
        "name": "YouTube Channel Management",
        "items": [
          "Channel branding & optimization",
          "Playlist creation & organization",
          "Video description optimization",
          "Subscriber growth strategy",
          "YouTube SEO"
        ]
      },
      {
        "name": "Community Management",
        "items": [
          "Daily comment & message responses",
          "Crisis management & reputation monitoring",
          "Influencer outreach & partnership",
          "Community member engagement",
          "Retention & churn prevention"
        ]
      }
    ],
    "bestFor": [
      "Brand Building",
      "Community Growth",
      "Lead Generation",
      "Engagement"
    ],
    "cta": "Let's Grow Your Social Presence",
    "achievements": [
      "27,700+ monthly views",
      "1,933 Instagram followers",
      "8,000+ monthly views (secondary account)"
    ],
    "relatedServices": [
      "content-creative-services",
      "email-marketing-automation",
      "paid-advertising-performance-marketing"
    ],
    "faqs": [
      {
        "question": "Which social media platforms do you manage?",
        "answer": "We manage Instagram, Facebook, LinkedIn, YouTube, and TikTok. We tailor our strategy to where your specific target audience is most active."
      },
      {
        "question": "Do you create reels and short-form videos?",
        "answer": "Yes, we write scripts, direct, edit, add music/voiceovers, and optimize captions for Instagram Reels, YouTube Shorts, and TikTok videos."
      },
      {
        "question": "Do you handle community response and comments?",
        "answer": "Yes, we monitor comments and direct messages (DMs) to answer questions, route sales inquiries, and maintain high community engagement rates."
      },
      {
        "question": "How often do you post on our social channels?",
        "answer": "Posting frequency depends on your package. Typically, we post 3-5 times a week, combined with daily stories, to maintain active engagement without overwhelming your feed."
      },
      {
        "question": "Can you help with influencer outreach?",
        "answer": "Yes, we can identify relevant micro and macro-influencers, handle outreach and negotiations, and structure campaign parameters for maximum ROI."
      }
    ]
  },
  {
    "id": "web-development",
    "slug": "web-development-technology",
    "title": "Web Development & Technology",
    "emoji": "💻",
    "subtitle": "Fast, modern, high-converting websites built for growth",
    "shortDesc": "Custom-built websites optimized for performance, conversions, and user experience.",
    "longDesc": "Custom-built websites optimized for performance, conversions, and user experience.",
    "icon": "Code",
    "accentColor": "navy",
    "gradientClass": "from-blue-600/20 via-indigo-600/10 to-transparent",
    "pricing": {
      "starter": "₹45,000",
      "growth": "₹45,000–₹500,000 (project-based)",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹45,000–₹500,000 (project-based)",
    "benefits": [
      "Website Design & Development",
      "E-commerce Development",
      "Custom Web Applications",
      "CRM & Business Tools Development",
      "API Integration & Webhooks",
      "Database Design & Optimization"
    ],
    "subservices": [
      {
        "name": "Website Design & Development",
        "items": [
          "Custom UI/UX design (Figma)",
          "Responsive mobile-first design",
          "Next.js 15 development",
          "Tailwind CSS styling",
          "Animation & micro-interactions",
          "Core Web Vitals optimization",
          "8 live client websites delivered"
        ]
      },
      {
        "name": "E-commerce Development",
        "items": [
          "Shopify store setup & customization",
          "WooCommerce development",
          "Product catalog setup",
          "Payment gateway integration (Razorpay, Stripe)",
          "Inventory management system",
          "Cart optimization & checkout flow"
        ]
      },
      {
        "name": "Custom Web Applications",
        "items": [
          "SaaS platform development",
          "Membership & subscription sites",
          "Multi-tenant applications",
          "Progressive Web Apps (PWA)",
          "Real-time data dashboards"
        ]
      },
      {
        "name": "CRM & Business Tools Development",
        "items": [
          "Custom CRM systems (30+ table databases)",
          "Client portal development",
          "Employee task management portal",
          "Automated invoice generation",
          "Project management tools"
        ]
      },
      {
        "name": "API Integration & Webhooks",
        "items": [
          "REST API integration",
          "GraphQL implementation",
          "Webhook architecture",
          "Third-party tool integration",
          "Meta Marketing API integration",
          "Google Analytics API setup",
          "Google Search Console API connection"
        ]
      },
      {
        "name": "Database Design & Optimization",
        "items": [
          "PostgreSQL database design",
          "Data modeling & relationships",
          "Query optimization",
          "Backup & disaster recovery"
        ]
      }
    ],
    "bestFor": [
      "Startups",
      "SaaS",
      "E-commerce",
      "Enterprise"
    ],
    "cta": "Discuss Your Project Requirements",
    "achievements": [],
    "relatedServices": [
      "organic-growth-seo-mastery",
      "analytics-tracking-attribution",
      "ecommerce-catalog-services"
    ],
    "faqs": [
      {
        "question": "What tech stack do you use for website development?",
        "answer": "We specialize in modern web technologies including Next.js, React, Tailwind CSS, Node.js, and headless CMS systems. We also build on WordPress and Shopify depending on project requirements."
      },
      {
        "question": "Are your websites optimized for speed and SEO?",
        "answer": "Yes, speed and SEO are at the core of our development. We build with semantic HTML, integrate schema markups, and optimize for Core Web Vitals to achieve high mobile Google PageSpeed scores."
      },
      {
        "question": "Do you provide website maintenance and hosting support?",
        "answer": "Yes, we offer ongoing maintenance, security updates, server backups, hosting configuration, and prompt bug fixes to ensure your website runs smoothly."
      },
      {
        "question": "Can you develop custom web applications and tools?",
        "answer": "Absolutely. We build custom dashboards, CRM integrations, client portals, internal databases, and API webhooks tailored to automate your business processes."
      },
      {
        "question": "How long does it take to design and launch a website?",
        "answer": "A standard business website takes 3-5 weeks. Complex e-commerce stores or custom web applications can take 6-12 weeks from wireframes to launch."
      }
    ]
  },
  {
    "id": "email-marketing",
    "slug": "email-marketing-automation",
    "title": "Email & Marketing Automation",
    "emoji": "📧",
    "subtitle": "Nurture leads and re-engage customers with automated sequences",
    "shortDesc": "Build automated email and WhatsApp sequences that convert leads into paying customers.",
    "longDesc": "Build automated email and WhatsApp sequences that convert leads into paying customers.",
    "icon": "Mail",
    "accentColor": "red",
    "gradientClass": "from-red-500/20 via-orange-500/10 to-transparent",
    "pricing": {
      "starter": "₹12,000/month",
      "growth": "₹12,000–₹60,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹12,000–₹60,000/month",
    "benefits": [
      "Email Marketing Setup",
      "Email Sequence Automation",
      "WhatsApp Business Automation",
      "Email Design & Copywriting",
      "Integration & CRM Connectivity"
    ],
    "subservices": [
      {
        "name": "Email Marketing Setup",
        "items": [
          "Email list segmentation",
          "Subscriber management",
          "Double opt-in setup",
          "List cleaning & validation",
          "Compliance (CAN-SPAM, GDPR)"
        ]
      },
      {
        "name": "Email Sequence Automation",
        "items": [
          "Welcome sequences (5-7 emails)",
          "Lead nurture workflows",
          "Re-engagement campaigns",
          "Win-back sequences",
          "Post-purchase follow-up",
          "Sales enablement sequences"
        ]
      },
      {
        "name": "WhatsApp Business Automation",
        "items": [
          "WhatsApp Business API setup",
          "Template message creation",
          "Automated broadcasts",
          "Group messaging",
          "WhatsApp chatbot integration",
          "Meta Lead Ads → WhatsApp → CRM integration"
        ]
      },
      {
        "name": "Email Design & Copywriting",
        "items": [
          "Responsive email templates",
          "Email copy optimization",
          "CTA button optimization",
          "A/B testing (subject lines, content)",
          "Personalization & dynamic content"
        ]
      },
      {
        "name": "Integration & CRM Connectivity",
        "items": [
          "HubSpot integration",
          "Zapier automation",
          "Make.com workflows",
          "Custom webhook connections",
          "Lead scoring automation"
        ]
      }
    ],
    "bestFor": [
      "Lead Nurturing",
      "Customer Retention",
      "Upselling",
      "Conversion"
    ],
    "cta": "Start Your Automation Journey",
    "achievements": [],
    "relatedServices": [
      "ai-automation-systems",
      "analytics-tracking-attribution",
      "b2b-lead-generation-sales"
    ],
    "faqs": [
      {
        "question": "Do you set up automated email sequences?",
        "answer": "Yes, we design and implement complete automated flows including Welcome series, Lead Nurturing sequences, Cart Abandonment flows, and Re-engagement campaigns."
      },
      {
        "question": "Which email marketing platforms do you support?",
        "answer": "We support major ESPs (Email Service Providers) including Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Resend, and Brevo (Sendinblue)."
      },
      {
        "question": "How do you ensure emails land in the primary inbox, not spam?",
        "answer": "We manage sender reputation, verify domain configurations (SPF, DKIM, DMARC), perform list cleaning, write spam-free copy, and monitor blacklists daily."
      },
      {
        "question": "Do you do WhatsApp marketing automation as well?",
        "answer": "Yes, we build automated WhatsApp broadcast sequences, customer support flows, and lead notifications using APIs like Twilio, Interakt, or Wati."
      },
      {
        "question": "What is email list segmentation and why is it important?",
        "answer": "List segmentation splits your subscriber list into target groups based on behavior, purchase history, or demographics. This ensures highly relevant messaging and increases open/click rates."
      }
    ]
  },
  {
    "id": "ai-automation",
    "slug": "ai-automation-systems",
    "title": "AI & Marketing Automation Systems",
    "emoji": "🤖",
    "subtitle": "Build intelligent systems that work while you sleep",
    "shortDesc": "Custom n8n automation workflows that capture leads, sync data, and handle repetitive tasks automatically.",
    "longDesc": "Custom n8n automation workflows that capture leads, sync data, and handle repetitive tasks automatically.",
    "icon": "Cpu",
    "accentColor": "cyan",
    "gradientClass": "from-cyan-500/20 via-blue-500/10 to-transparent",
    "pricing": {
      "starter": "₹15,000/month",
      "growth": "₹15,000–₹100,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹15,000–₹100,000/month",
    "benefits": [
      "n8n Automation Workflows",
      "Lead Capture & Routing",
      "AI-Powered Content Generation",
      "Chatbot & Voicebot Development",
      "Data Integration & API Automation"
    ],
    "subservices": [
      {
        "name": "n8n Automation Workflows",
        "items": [
          "Lead capture automation (Meta Ads → CRM)",
          "Daily data sync (GSC + GA4 + Meta)",
          "Monthly invoice generation (auto)",
          "Overdue invoice detection alerts",
          "Weekly digest reports",
          "WhatsApp broadcast automation",
          "18+ production workflows built"
        ]
      },
      {
        "name": "Lead Capture & Routing",
        "items": [
          "Meta Lead Ads form setup",
          "Website form optimization",
          "Lead qualification automation",
          "Automatic lead assignment (to sales team)",
          "Lead scoring & prioritization",
          "CRM auto-population"
        ]
      },
      {
        "name": "AI-Powered Content Generation",
        "items": [
          "Claude AI prompt engineering",
          "ChatGPT integration for content",
          "Email subject line generation",
          "Ad copy suggestions",
          "Blog outline generation",
          "Content repurposing automation"
        ]
      },
      {
        "name": "Chatbot & Voicebot Development",
        "items": [
          "Voiceflow chatbot builder",
          "Landbot integration",
          "Vapi voice bot development",
          "Customer support automation",
          "Lead qualification bots",
          "FAQ bots & knowledge base"
        ]
      },
      {
        "name": "Data Integration & API Automation",
        "items": [
          "Google Search Console data sync",
          "Google Analytics data integration",
          "Meta API data pulling",
          "Scheduled API calls",
          "Data transformation & cleaning",
          "Database synchronization"
        ]
      }
    ],
    "bestFor": [
      "Scale Operations",
      "Data-Driven Teams",
      "Lead Generation",
      "Efficiency"
    ],
    "cta": "Automate Your Workflows",
    "achievements": [
      "Meta Lead Ads → n8n → WhatsApp pipeline",
      "80% manual work reduction",
      "18+ production workflows"
    ],
    "relatedServices": [
      "email-marketing-automation",
      "web-development-technology",
      "analytics-tracking-attribution"
    ],
    "faqs": [
      {
        "question": "What business workflows can you automate?",
        "answer": "We automate lead routing, CRM synchronization, customer support replies, auto-generated documents/invoices, database logging, and multi-platform social media posting."
      },
      {
        "question": "What is n8n and why do you use it?",
        "answer": "n8n is a powerful workflow automation tool that allows us to build complex, multi-step integrations with granular control, cost-effectively connecting all your APIs without expensive software licenses."
      },
      {
        "question": "Do you build custom chatbots and voice assistants?",
        "answer": "Yes, we develop intelligent AI chatbots for websites/WhatsApp and voicebots utilizing LLMs (like OpenAI GPT or Anthropic Claude) trained on your proprietary data."
      },
      {
        "question": "Can AI automation handle CRM and customer data securely?",
        "answer": "Yes, we construct integrations following strict security compliance, ensuring all API key transmissions are encrypted and data retention rules are observed."
      },
      {
        "question": "How much time can AI automation save my team?",
        "answer": "Most clients save between 10-30 hours per week per employee by automating data entry, copy-pasting, routing, and administrative tasks."
      }
    ]
  },
  {
    "id": "brand-strategy",
    "slug": "brand-strategy-positioning",
    "title": "Brand Strategy & Positioning",
    "emoji": "🎨",
    "subtitle": "Build a memorable brand that stands out in crowded markets",
    "shortDesc": "Develop a clear brand identity and strategy that resonates with your target audience.",
    "longDesc": "Develop a clear brand identity and strategy that resonates with your target audience.",
    "icon": "Palette",
    "accentColor": "gold",
    "gradientClass": "from-amber-400/20 via-yellow-500/10 to-transparent",
    "pricing": {
      "starter": "₹25,000",
      "growth": "₹25,000–₹150,000 (project-based)",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹25,000–₹150,000 (project-based)",
    "benefits": [
      "Brand Positioning & Identity",
      "Buyer Persona Development",
      "Customer Journey Mapping",
      "Sales Funnel Architecture",
      "Competitive Analysis"
    ],
    "subservices": [
      {
        "name": "Brand Positioning & Identity",
        "items": [
          "Brand positioning statement",
          "Unique value proposition (UVP)",
          "Brand messaging framework",
          "Brand voice & tone guidelines",
          "Logo design & refinement",
          "Color palette & typography",
          "Brand guidelines document"
        ]
      },
      {
        "name": "Buyer Persona Development",
        "items": [
          "Audience research & interviews",
          "Persona creation (3-5 personas)",
          "Pain point identification",
          "Buying journey mapping",
          "Objection handling strategy"
        ]
      },
      {
        "name": "Customer Journey Mapping",
        "items": [
          "Awareness stage content",
          "Consideration stage touchpoints",
          "Decision stage optimization",
          "Retention & advocacy strategies",
          "Churn prediction & prevention"
        ]
      },
      {
        "name": "Sales Funnel Architecture",
        "items": [
          "Lead magnet creation",
          "Landing page optimization",
          "Sales email sequences",
          "Upsell & cross-sell strategies",
          "Funnel metric tracking"
        ]
      },
      {
        "name": "Competitive Analysis",
        "items": [
          "Competitor positioning",
          "Feature comparison analysis",
          "Pricing strategy research",
          "Marketing message benchmarking",
          "SWOT analysis"
        ]
      }
    ],
    "bestFor": [
      "Startups",
      "Rebranding",
      "Market Entry",
      "Positioning"
    ],
    "cta": "Build Your Brand Strategy",
    "achievements": [],
    "relatedServices": [
      "organic-growth-seo-mastery",
      "paid-advertising-performance-marketing",
      "content-creative-services"
    ],
    "faqs": [
      {
        "question": "What is covered in a Brand Strategy package?",
        "answer": "We cover brand positioning, competitor research, target audience buyer personas, customer journey mapping, brand voice guidelines, and sales funnel architectures."
      },
      {
        "question": "How do you develop buyer personas?",
        "answer": "We analyze database demographics, interview front-line sales teams, research competitor client reviews, and perform market segmentation to identify your exact buyers."
      },
      {
        "question": "How does brand strategy impact my advertising campaigns?",
        "answer": "Brand strategy lays the foundation. It defines the unique selling points (USPs) and core hooks we use in ad creatives, which directly increases conversion rates."
      },
      {
        "question": "How long does a brand strategy project take?",
        "answer": "A brand strategy project typically takes 3-6 weeks to complete, involving multiple strategy workshops, market research, and delivery of documentation."
      },
      {
        "question": "What document formats do you deliver?",
        "answer": "We deliver a comprehensive Brand Identity & Strategy Guideline PDF, along with visual assets, messaging playbooks, and funnel architecture maps."
      }
    ]
  },
  {
    "id": "analytics-tracking",
    "slug": "analytics-tracking-attribution",
    "title": "Analytics, Tracking & Attribution",
    "emoji": "📊",
    "subtitle": "Know exactly where your revenue comes from",
    "shortDesc": "Implement comprehensive tracking and analytics to measure what matters.",
    "longDesc": "Implement comprehensive tracking and analytics to measure what matters.",
    "icon": "LineChart",
    "accentColor": "purple",
    "gradientClass": "from-indigo-500/20 via-purple-500/10 to-transparent",
    "pricing": {
      "starter": "₹8,000/month",
      "growth": "₹8,000–₹50,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹8,000–₹50,000/month",
    "benefits": [
      "Google Analytics 4 Setup",
      "Conversion Tracking & Measurement",
      "Attribution Modeling",
      "Custom Dashboards & Reporting",
      "Cross-Platform Analytics"
    ],
    "subservices": [
      {
        "name": "Google Analytics 4 Setup",
        "items": [
          "GA4 account creation & setup",
          "Property configuration",
          "Data stream configuration",
          "GTM (Google Tag Manager) implementation",
          "Event tracking setup",
          "Conversion goals definition",
          "Custom reports & dashboards"
        ]
      },
      {
        "name": "Conversion Tracking & Measurement",
        "items": [
          "Purchase event tracking",
          "Lead tracking & attribution",
          "Form submission tracking",
          "Phone call tracking (CallRail, Twilio)",
          "Offline conversion import",
          "Cross-domain tracking"
        ]
      },
      {
        "name": "Attribution Modeling",
        "items": [
          "First-click attribution analysis",
          "Last-click attribution comparison",
          "Multi-touch attribution",
          "Data-driven attribution (DDA)",
          "Revenue attribution by channel"
        ]
      },
      {
        "name": "Custom Dashboards & Reporting",
        "items": [
          "Looker Studio setup & design",
          "Real-time performance dashboards",
          "Automated report generation",
          "KPI tracking & monitoring",
          "Executive summary reports",
          "Monthly performance reviews"
        ]
      },
      {
        "name": "Cross-Platform Analytics",
        "items": [
          "Multi-channel data integration",
          "Data reconciliation",
          "Channel performance comparison",
          "ROI by channel calculation"
        ]
      }
    ],
    "bestFor": [
      "Data-Driven Teams",
      "Growth Tracking",
      "Decision Making",
      "Optimization"
    ],
    "cta": "Set Up Your Analytics Dashboard",
    "achievements": [],
    "relatedServices": [
      "paid-advertising-performance-marketing",
      "organic-growth-seo-mastery",
      "ai-automation-systems"
    ],
    "faqs": [
      {
        "question": "Do you set up Google Analytics 4 (GA4)?",
        "answer": "Yes, we handle complete GA4 configuration, custom event mapping, key event settings, user journey tracking, and integration with search consoles."
      },
      {
        "question": "What is conversion tracking validation?",
        "answer": "It is a process where we test and audit your tracking setup to ensure actions (like form submissions, calls, or purchases) are measured accurately and not double-counted."
      },
      {
        "question": "What is cross-platform attribution modeling?",
        "answer": "It analyzes which touchpoints (SEO, Social, Email, Paid Ads) contribute to a conversion, helping you understand the true ROI of each marketing channel."
      },
      {
        "question": "Do you build custom client reporting dashboards?",
        "answer": "Yes, we design real-time interactive dashboards in Looker Studio, bringing together data from Google Ads, Meta Ads, SEO, and CRMs in one place."
      },
      {
        "question": "What is server-side tracking and why is it needed?",
        "answer": "Server-side tracking bypasses browser-based ad blockers and cookie restrictions, sending event data directly from your server to platforms like Facebook, restoring lost conversion data."
      }
    ]
  },
  {
    "id": "training-education",
    "slug": "training-education",
    "title": "Training & Education",
    "emoji": "🎓",
    "subtitle": "Train your team or build a digital marketing business",
    "shortDesc": "Get hands-on training from experts or scale your team's marketing skills.",
    "longDesc": "Get hands-on training from experts or scale your team's marketing skills.",
    "icon": "GraduationCap",
    "accentColor": "navy",
    "gradientClass": "from-blue-500/20 via-sky-500/10 to-transparent",
    "pricing": {
      "starter": "₹499",
      "growth": "₹499–₹100,000 (varies by format)",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹499–₹100,000 (varies by format)",
    "benefits": [
      "Group Training & Courses",
      "1-on-1 Coaching & Mentorship",
      "Team Training Programs",
      "Corporate Training",
      "Workshops & Webinars",
      "Online Courses (Self-Paced)"
    ],
    "subservices": [
      {
        "name": "Group Training & Courses",
        "items": [
          "3-month digital marketing certification",
          "17+ batches trained (300+ learners)",
          "Live project-based curriculum",
          "SEO, Meta Ads, Google Ads, SMM modules",
          "AI tools & automation training",
          "Freelancing & agency setup training"
        ]
      },
      {
        "name": "1-on-1 Coaching & Mentorship",
        "items": [
          "Personal branding strategy",
          "LinkedIn optimization coaching",
          "Career guidance (freelance → agency)",
          "Business scaling strategy",
          "Weekly calls & action planning",
          "42-day outcome-based framework"
        ]
      },
      {
        "name": "Team Training Programs",
        "items": [
          "Internal agency team training",
          "Client team upskilling",
          "Tool-specific training (n8n, Meta Ads, GA4)",
          "Best practices workshops",
          "Knowledge transfer sessions"
        ]
      },
      {
        "name": "Corporate Training",
        "items": [
          "B2B company digital marketing training",
          "Sales team enablement",
          "Marketing team upskilling",
          "₹50,000–₹100,000 per company"
        ]
      },
      {
        "name": "Workshops & Webinars",
        "items": [
          "Free webinars (lead generation)",
          "Paid workshops (2-4 hours)",
          "Interactive training sessions",
          "Certification programs",
          "Live Q&A sessions"
        ]
      },
      {
        "name": "Online Courses (Self-Paced)",
        "items": [
          "YouTube course creation (Gemini, AI tools)",
          "Teachable/Udemy course hosting",
          "Digital product creation",
          "Lead magnet courses (free + upsell)",
          "Gumroad course creation"
        ]
      }
    ],
    "bestFor": [
      "Team Development",
      "Skill Building",
      "Career Growth",
      "Knowledge Transfer"
    ],
    "cta": "Enroll in a Training Program",
    "achievements": [
      "300+ marketers trained",
      "17+ batches delivered",
      "300+ learners impacted"
    ],
    "relatedServices": [
      "brand-strategy-positioning",
      "ai-automation-systems",
      "audits-consulting-strategy"
    ],
    "faqs": [
      {
        "question": "Who is your digital marketing training designed for?",
        "answer": "We offer training for corporate marketing teams looking to upskill, business founders seeking to manage their own channels, and aspiring marketers wanting practical experience."
      },
      {
        "question": "Do you offer 1-on-1 coaching and mentorship?",
        "answer": "Yes, we run intensive 1-on-1 mentorship programs for business owners and executive staff to map and execute custom marketing plans."
      },
      {
        "question": "Can you train our in-house team on automation and AI?",
        "answer": "Yes, we design bespoke corporate workshops to train teams on using AI tools (ChatGPT, Claude), n8n workflow automations, and digital marketing setups."
      },
      {
        "question": "What is the duration of your training batches?",
        "answer": "Durations range from 1-day intensive masterclasses to comprehensive 8-week corporate training cohorts with weekly live sessions and practical assignments."
      },
      {
        "question": "Do participants get hands-on project experience?",
        "answer": "Yes. All training is project-based. Participants work on live ad budgets, build active workflows, or optimize real web pages during the course."
      }
    ]
  },
  {
    "id": "ecommerce-catalog",
    "slug": "ecommerce-catalog-services",
    "title": "️ E-Commerce & Catalog Services",
    "emoji": "🛍️",
    "subtitle": "Scale online product sales with optimized stores and ads",
    "shortDesc": "Complete e-commerce solutions from store setup to automated sales optimization.",
    "longDesc": "Complete e-commerce solutions from store setup to automated sales optimization.",
    "icon": "ShoppingBag",
    "accentColor": "green",
    "gradientClass": "from-green-500/20 via-teal-500/10 to-transparent",
    "pricing": {
      "starter": "₹30,000/month",
      "growth": "₹30,000–₹200,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹30,000–₹200,000/month",
    "benefits": [
      "E-commerce Store Setup",
      "Product Feed Management",
      "Shopping Ads Management",
      "E-commerce Analytics",
      "E-commerce Optimization"
    ],
    "subservices": [
      {
        "name": "E-commerce Store Setup",
        "items": [
          "Shopify store setup & customization",
          "Product listing & descriptions",
          "Category architecture",
          "Payment gateway setup (Razorpay, Stripe)",
          "Shipping & tax configuration",
          "Cart optimization"
        ]
      },
      {
        "name": "Product Feed Management",
        "items": [
          "Google Merchant Center setup",
          "Product feed creation & optimization",
          "Inventory sync automation",
          "Price & availability updates",
          "Product data quality enhancement"
        ]
      },
      {
        "name": "Shopping Ads Management",
        "items": [
          "Google Shopping Ads setup",
          "Bid strategy optimization",
          "Product-level bidding",
          "Negative keyword management",
          "ROAS optimization"
        ]
      },
      {
        "name": "E-commerce Analytics",
        "items": [
          "Revenue by product tracking",
          "Cart abandonment analysis",
          "Customer lifetime value (CLV)",
          "Repeat purchase tracking",
          "Inventory performance"
        ]
      },
      {
        "name": "E-commerce Optimization",
        "items": [
          "Landing page A/B testing",
          "Checkout flow optimization",
          "Product page conversion optimization",
          "Cross-sell & upsell strategy",
          "Post-purchase email sequences"
        ]
      }
    ],
    "bestFor": [
      "E-commerce Businesses",
      "Product Sales",
      "Inventory Management",
      "Growth Scaling"
    ],
    "cta": "Optimize Your E-commerce Store",
    "achievements": [],
    "relatedServices": [
      "paid-advertising-performance-marketing",
      "analytics-tracking-attribution",
      "web-development-technology"
    ],
    "faqs": [
      {
        "question": "Which e-commerce platforms do you support?",
        "answer": "We specialize in Shopify, WooCommerce, and custom Next.js e-commerce storefronts, managing the store setup, design, and integration."
      },
      {
        "question": "What is product feed management?",
        "answer": "We construct, optimize, and synchronize your product catalog data feed with Google Merchant Center and Meta Commerce Manager, preventing sync and policy rejection errors."
      },
      {
        "question": "What are catalog ads and dynamic retargeting?",
        "answer": "These are ads that display specific products to users based on their browsing behavior on your store (e.g., showing the exact shoe they added to their cart but didn't buy)."
      },
      {
        "question": "Can you optimize my existing store's conversion rate (CRO)?",
        "answer": "Yes, we perform checkout flow audits, page speed optimization, A/B product page testing, and user behavior analysis to maximize conversion rate."
      },
      {
        "question": "How do you track Shopify/WooCommerce revenue in GA4?",
        "answer": "We implement advanced e-commerce tracking (dataLayer events) to capture purchase amounts, item lists, tax, and currency, feeding accurate ROI metrics to your analytics."
      }
    ]
  },
  {
    "id": "audits-consulting",
    "slug": "audits-consulting-strategy",
    "title": "Audits, Consulting & Strategy",
    "emoji": "🔍",
    "subtitle": "Expert analysis and strategic recommendations",
    "shortDesc": "Get comprehensive audits and strategic guidance to identify growth opportunities.",
    "longDesc": "Get comprehensive audits and strategic guidance to identify growth opportunities.",
    "icon": "ClipboardCheck",
    "accentColor": "navy",
    "gradientClass": "from-blue-600/20 via-cyan-600/10 to-transparent",
    "pricing": {
      "starter": "₹5,000/consultation)",
      "growth": "₹5,000–₹50,000 (per audit/consultation)",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹5,000–₹50,000 (per audit/consultation)",
    "benefits": [
      "Digital Marketing Audits",
      "Website Performance Audit",
      "Ad Account Audits",
      "Strategy Consultation",
      "Competitor Analysis"
    ],
    "subservices": [
      {
        "name": "Digital Marketing Audits",
        "items": [
          "Full funnel audit (Meta + Google + Email)",
          "Website performance audit",
          "Competitor benchmarking",
          "SEO audit & opportunity identification",
          "Ad account health check",
          "48-hour delivery guarantee"
        ]
      },
      {
        "name": "Website Performance Audit",
        "items": [
          "Core Web Vitals analysis",
          "Page speed optimization",
          "Mobile usability check",
          "Accessibility audit",
          "Security scan"
        ]
      },
      {
        "name": "Ad Account Audits",
        "items": [
          "Campaign structure review",
          "Conversion tracking validation",
          "Audience segmentation analysis",
          "Creative performance review",
          "Budget allocation optimization"
        ]
      },
      {
        "name": "Strategy Consultation",
        "items": [
          "90-day marketing roadmap",
          "Channel selection strategy",
          "Budget allocation planning",
          "Competitive positioning",
          "Growth opportunity identification",
          "Free 20-minute consultation"
        ]
      },
      {
        "name": "Competitor Analysis",
        "items": [
          "Top 10 competitor analysis",
          "Ad creative benchmarking",
          "Keyword strategy comparison",
          "Pricing & positioning analysis",
          "Market opportunity gap"
        ]
      }
    ],
    "bestFor": [
      "Strategic Planning",
      "Audit & Assessment",
      "Growth Identification",
      "Optimization"
    ],
    "cta": "Get Your Free Audit",
    "achievements": [],
    "relatedServices": [
      "brand-strategy-positioning",
      "organic-growth-seo-mastery",
      "paid-advertising-performance-marketing"
    ],
    "faqs": [
      {
        "question": "What is included in a digital marketing audit?",
        "answer": "We analyze technical SEO parameters, Google/Meta ad account setups, conversion rate friction, website loading speed, and competitor digital strategies."
      },
      {
        "question": "How fast do you deliver your audit report?",
        "answer": "Our standard marketing audits are delivered within 48 business hours, complete with a video breakdown and a prioritized PDF checklist."
      },
      {
        "question": "What do you look for in an ad account audit?",
        "answer": "We analyze keyword bid wastes, audience overlap conflicts, campaign structures, conversion tracking accuracy, and creative performance."
      },
      {
        "question": "Is the initial 20-minute consultation free?",
        "answer": "Yes, we provide a free initial consultation call to discuss your business pain points and outline how our services can address them."
      },
      {
        "question": "Do you help execute the audit suggestions?",
        "answer": "Yes, we provide the audit as an independent document, but we also offer retainer packages to execute the recommended fixes for you."
      }
    ]
  },
  {
    "id": "b2b-lead-generation",
    "slug": "b2b-lead-generation-sales",
    "title": "B2B Lead Generation & Sales",
    "emoji": "🎯",
    "subtitle": "Generate high-quality B2B leads at scale",
    "shortDesc": "Build and manage B2B lead generation systems that deliver qualified prospects.",
    "longDesc": "Build and manage B2B lead generation systems that deliver qualified prospects.",
    "icon": "Briefcase",
    "accentColor": "indigo",
    "gradientClass": "from-indigo-500/20 via-blue-500/10 to-transparent",
    "pricing": {
      "starter": "₹20,000/month",
      "growth": "₹20,000–₹150,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹20,000–₹150,000/month",
    "benefits": [
      "Cold Outreach Automation",
      "Sales Pipeline Management",
      "LinkedIn Lead Generation",
      "Account-Based Marketing (ABM)",
      "Lead Scoring & Qualification"
    ],
    "subservices": [
      {
        "name": "Cold Outreach Automation",
        "items": [
          "Apollo.io lead sourcing",
          "Personalized WhatsApp sequences",
          "Email cold outreach",
          "LinkedIn connection strategy",
          "47 B2B leads in 27 days (proven)"
        ]
      },
      {
        "name": "Sales Pipeline Management",
        "items": [
          "Pipeline setup in Airtable/HubSpot",
          "Lead tracking & follow-up",
          "Deal stage management",
          "Sales forecasting",
          "Win/loss analysis"
        ]
      },
      {
        "name": "LinkedIn Lead Generation",
        "items": [
          "LinkedIn Ads for B2B",
          "Connection outreach strategy",
          "LinkedIn Sales Navigator strategy",
          "Account-based marketing (ABM)",
          "LinkedIn content strategy for leads"
        ]
      },
      {
        "name": "Account-Based Marketing (ABM)",
        "items": [
          "Target account identification",
          "Personalized campaign creation",
          "Multi-touch attribution",
          "Account engagement tracking",
          "Decision-maker targeting"
        ]
      },
      {
        "name": "Lead Scoring & Qualification",
        "items": [
          "Automated lead scoring",
          "Lead qualification criteria",
          "Sales-ready lead identification",
          "Nurture vs. disqualified segmentation",
          "Lead handoff to sales"
        ]
      }
    ],
    "bestFor": [
      "B2B SaaS",
      "Enterprise Sales",
      "Service Companies",
      "Scaling Sales"
    ],
    "cta": "Build Your Lead Generation System",
    "achievements": [
      "47 B2B leads in 27 days",
      "Automated lead pipelines",
      "Sales-ready qualification"
    ],
    "relatedServices": [
      "paid-advertising-performance-marketing",
      "email-marketing-automation",
      "ai-automation-systems"
    ],
    "faqs": [
      {
        "question": "What is B2B cold outreach automation?",
        "answer": "It is the setup of automated, highly-personalized email sequences sent to targeted business prospects, scaling outreach without manual sending."
      },
      {
        "question": "How do you build list databases of B2B leads?",
        "answer": "We use premium sales intelligence databases (like Apollo, LinkedIn Sales Navigator) and custom scrapers to source clean data based on industry, role, and company size."
      },
      {
        "question": "Do you manage LinkedIn lead generation campaigns?",
        "answer": "Yes, we run both automated organic LinkedIn networking playbooks and paid LinkedIn Lead Gen forms targeting verified decision-makers."
      },
      {
        "question": "What is Account-Based Marketing (ABM)?",
        "answer": "ABM is a targeting strategy where we identify high-value target companies and deploy custom marketing content and outreach specifically tailored to stakeholders in those companies."
      },
      {
        "question": "How do you ensure outreach emails don't hit spam?",
        "answer": "We configure secondary domains, set up SPF/DKIM/DMARC records, warm up inboxes gradually, limit daily volumes per address, and write non-spam copy."
      }
    ]
  },
  {
    "id": "industry-specific",
    "slug": "industry-specific-marketing",
    "title": "Industry-Specific Marketing Services",
    "emoji": "🏢",
    "subtitle": "Specialized strategies for unique business verticals",
    "shortDesc": "Vertical-specific marketing expertise built from real client experience.",
    "longDesc": "Vertical-specific marketing expertise built from real client experience.",
    "icon": "Building2",
    "accentColor": "gray",
    "gradientClass": "from-slate-500/20 via-zinc-500/10 to-transparent",
    "pricing": {
      "starter": "₹25,000/month",
      "growth": "₹25,000–₹200,000/month",
      "enterprise": "Custom Pricing"
    },
    "pricingRange": "₹25,000–₹200,000/month",
    "benefits": [
      "Real Estate Marketing",
      "Healthcare & Medical Practice Marketing",
      "E-Learning & EdTech Marketing",
      "SaaS Product Marketing",
      "Coaching & Consulting",
      "Restaurant & Food Business",
      "B2B Manufacturing & Industrial",
      "Fitness & Wellness",
      "Non-Profit & NGO Marketing",
      "Travel & Tourism"
    ],
    "subservices": [
      {
        "name": "Real Estate Marketing",
        "items": [
          "Property listing optimization",
          "Virtual tour video creation",
          "Locality-specific SEO",
          "Real estate-specific ad templates",
          "Lead management for agents",
          "Open house promotion"
        ]
      },
      {
        "name": "Healthcare & Medical Practice Marketing",
        "items": [
          "HIPAA-compliant landing pages",
          "Patient review management",
          "Local SEO for clinics/hospitals",
          "Medical content writing (E-E-A-T)",
          "Appointment booking optimization",
          "Patient education content"
        ]
      },
      {
        "name": "E-Learning & EdTech Marketing",
        "items": [
          "Course landing pages",
          "Student testimonial videos",
          "Enrollment funnel optimization",
          "Parent-focused ad targeting",
          "University partnership outreach",
          "Student review management"
        ]
      },
      {
        "name": "SaaS Product Marketing",
        "items": [
          "Product-market fit validation",
          "Free trial optimization",
          "Freemium funnel design",
          "API documentation",
          "Integration marketplace listings",
          "Enterprise sales enablement"
        ]
      },
      {
        "name": "Coaching & Consulting",
        "items": [
          "Personal brand building",
          "High-ticket offer creation",
          "Application funnel setup",
          "Webinar marketing",
          "Client case study production",
          "Membership site creation"
        ]
      },
      {
        "name": "Restaurant & Food Business",
        "items": [
          "Google Business Profile optimization",
          "Food photography & reels",
          "Online ordering integration (Swiggy, Zomato)",
          "Local influencer partnerships",
          "Customer review management",
          "Loyalty program setup"
        ]
      },
      {
        "name": "B2B Manufacturing & Industrial",
        "items": [
          "Industry publication outreach",
          "Trade show marketing",
          "Technical content creation",
          "Supplier relationship marketing",
          "B2B directory listings",
          "Government bid marketing"
        ]
      },
      {
        "name": "Fitness & Wellness",
        "items": [
          "Membership funnel optimization",
          "Trainer profile optimization",
          "Before/after transformation content",
          "Class scheduling marketing",
          "Customer retention automation",
          "Community building (Facebook Group)"
        ]
      },
      {
        "name": "Non-Profit & NGO Marketing",
        "items": [
          "Donor engagement campaigns",
          "Fundraising funnel optimization",
          "Impact story creation",
          "Volunteer recruitment",
          "Grant opportunity research",
          "Monthly donor automation"
        ]
      },
      {
        "name": "Travel & Tourism",
        "items": [
          "Destination SEO & content",
          "User-generated travel content",
          "Seasonal campaign planning",
          "Booking funnel optimization",
          "Travel influencer partnerships",
          "Review management (TripAdvisor, Google)"
        ]
      }
    ],
    "bestFor": [
      "Niche Markets",
      "Vertical Expertise",
      "Industry-Specific Challenges"
    ],
    "cta": "Discuss Your Industry",
    "achievements": [],
    "relatedServices": [
      "organic-growth-seo-mastery",
      "paid-advertising-performance-marketing",
      "brand-strategy-positioning"
    ],
    "faqs": [
      {
        "question": "What industries do you specialize in?",
        "answer": "We have specialized experience in Real Estate, Healthcare/Clinics, EdTech/Coaching, B2B SaaS, Manufacturing, and Professional Services."
      },
      {
        "question": "How do you customize campaigns for real estate?",
        "answer": "For real estate, we focus on hyper-local SEO, Google Business listings for construction sites, Meta Lead Ads for property catalogs, and WhatsApp integrations."
      },
      {
        "question": "How do you market healthcare clinics while complying with policies?",
        "answer": "We set up Doctor Schema markup, focus on local map presence, run HIPAA-compliant lead funnels, and manage doctor review strategies to satisfy Google's E-E-A-T guidelines."
      },
      {
        "question": "What is your approach to SaaS marketing?",
        "answer": "For SaaS, we focus on technical content marketing (SEO blogs, comparison pages), high-intent Google Search campaigns, retargeting funnels, and product usage analytics tracking."
      },
      {
        "question": "Can you design marketing campaigns for manufacturing companies?",
        "answer": "Yes, we build digital showrooms, optimize for industrial queries (e.g. bulk supplier/manufacturer), and run LinkedIn ABM outreach campaigns to capture wholesale buyers."
      }
    ]
  }
];

export const premiumPackages: PremiumPackage[] = [
  {
    "name": "90-Day Growth Sprint",
    "scope": "Full audit + strategy + implementation + optimization",
    "price": "₹150,000–₹300,000",
    "bestFor": "Businesses ready to scale"
  },
  {
    "name": "Agency Scaling Package",
    "scope": "Systems + hiring + training + process documentation",
    "price": "₹200,000–₹500,000",
    "bestFor": "Growing agencies"
  },
  {
    "name": "Brand Launch (Full Stack)",
    "scope": "Brand positioning + website + ads + automation + launch",
    "price": "₹200,000–₹400,000",
    "bestFor": "New business launches"
  },
  {
    "name": "E-commerce Growth Program",
    "scope": "Store setup + product feed + ads + optimization + support",
    "price": "₹150,000–₹250,000",
    "bestFor": "E-commerce scaling"
  },
  {
    "name": "Group Coaching (4 weeks)",
    "scope": "Daily accountability + group calls + custom strategy",
    "price": "₹25,000–₹50,000 per person",
    "bestFor": "Team skill building"
  },
  {
    "name": "Done-With-You Program",
    "scope": "12-week intensive with weekly 1-on-1s + implementation",
    "price": "₹200,000–₹500,000",
    "bestFor": "High-commitment growth"
  }
];

export const clientTiers: ClientTier[] = [
  {
    "tier": 1,
    "name": "Self-Service / DIY",
    "price": "₹0–₹5,000",
    "includes": [
      "Free audit + consultation",
      "DIY templates & guides",
      "YouTube tutorials",
      "Free webinars",
      "Email courses"
    ],
    "bestFor": "Bootstrapped startups"
  },
  {
    "tier": 2,
    "name": "Light Support",
    "price": "₹5,000–₹20,000/month",
    "includes": [
      "Monthly strategy calls",
      "Email & WhatsApp support",
      "Template-based work",
      "Limited revisions"
    ],
    "bestFor": "Small businesses"
  },
  {
    "tier": 3,
    "name": "Standard Retainer",
    "price": "₹20,000–₹50,000/month",
    "includes": [
      "Full-service management",
      "Weekly check-ins",
      "Dedicated account manager",
      "Unlimited revisions",
      "Reporting & optimization"
    ],
    "bestFor": "Small to mid-size businesses"
  },
  {
    "tier": 4,
    "name": "Premium Retainer",
    "price": "₹50,000–₹150,000/month",
    "includes": [
      "Dedicated team",
      "24-hour turnaround",
      "Weekly strategy calls",
      "Custom integrations",
      "Full automation setup"
    ],
    "bestFor": "Growing companies & agencies"
  },
  {
    "tier": 5,
    "name": "Enterprise",
    "price": "₹150,000+/month",
    "includes": [
      "Dedicated account team",
      "Real-time support (Slack)",
      "Custom development",
      "API integrations",
      "Monthly reviews"
    ],
    "bestFor": "Scaling enterprises"
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug);
}

export function getServiceById(id: string): ServiceData | undefined {
  return servicesData.find(s => s.id === id);
}

export function getRelatedServices(service: ServiceData): ServiceData[] {
  return service.relatedServices
    .map(slug => servicesData.find(s => s.slug === slug || s.id === slug))
    .filter((s): s is ServiceData => s !== undefined);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(s => s.slug);
}
