export interface NavbarMenuItem {
  title: string;
  href: string;
  emoji: string;
  description?: string;
}

export interface NavbarGroup {
  title: string;
  items: NavbarMenuItem[];
}

export const servicesGroups: NavbarGroup[] = [
  {
    title: "Paid Advertising & Leads",
    items: [
      {
        title: "Paid Ads & Perf Marketing",
        href: "/services/paid-advertising-performance-marketing",
        emoji: "🎯",
        description: "Meta, LinkedIn & multi-channel campaigns"
      },
      {
        title: "Google Ads & PPC",
        href: "/services/google-ads-ppc",
        emoji: "🚀",
        description: "Search, Display & PMax optimization"
      },
      {
        title: "B2B Lead Gen & Sales",
        href: "/services/b2b-lead-generation-sales",
        emoji: "💼",
        description: "Cold outreach & LinkedIn prospect list"
      }
    ]
  },
  {
    title: "Organic Growth",
    items: [
      {
        title: "SEO Services",
        href: "/services/seo",
        emoji: "🔍",
        description: "Top Google ranks & local maps SEO"
      },
      {
        title: "Content Marketing",
        href: "/services/content-marketing",
        emoji: "✍️",
        description: "Topical blogs & high-intent copywriting"
      },
      {
        title: "Social Media Marketing",
        href: "/services/social-media-marketing",
        emoji: "📱",
        description: "Organic channel growth & community build"
      },
      {
        title: "Web Design & Dev",
        href: "/services/web-design-development",
        emoji: "💻",
        description: "Fast, CRO-optimized responsive sites"
      }
    ]
  },
  {
    title: "Conversion & Automation",
    items: [
      {
        title: "Email & WhatsApp Mktg",
        href: "/services/email-marketing",
        emoji: "✉️",
        description: "Flows, newsletters & customer retention"
      },
      {
        title: "AI & Marketing Auto",
        href: "/services/ai-automation-systems",
        emoji: "🤖",
        description: "Custom chatbots & workflow automation"
      }
    ]
  },
  {
    title: "Strategy & Audits",
    items: [
      {
        title: "Brand Strategy & Funnels",
        href: "/services/brand-strategy-positioning",
        emoji: "🏆",
        description: "Visual identity, positioning & CRO funnels"
      },
      {
        title: "Analytics & Tracking",
        href: "/services/analytics-tracking-attribution",
        emoji: "📊",
        description: "GA4, GTM, server-side CAPI setups"
      },
      {
        title: "Audits & Consulting",
        href: "/services/audits-consulting-strategy",
        emoji: "🔎",
        description: "Gap analysis, technical SEO & ad audits"
      }
    ]
  },
  {
    title: "Technology & Training",
    items: [
      {
        title: "E-commerce Services",
        href: "/services/ecommerce-catalog-services",
        emoji: "🛒",
        description: "Shopify design & catalog listing feeds"
      },
      {
        title: "Training & Education",
        href: "/services/training-education",
        emoji: "📚",
        description: "Corporate marketing training workshops"
      },
      {
        title: "Industry Specific Mktg",
        href: "/services/industry-specific-marketing",
        emoji: "🏬",
        description: "Custom packages tailored for your niche"
      }
    ]
  }
];

export const industryMenuItems: NavbarMenuItem[] = [
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    emoji: "🏠",
    description: "Property buyers & sellers leads"
  },
  {
    title: "SaaS Marketing",
    href: "/industries/saas",
    emoji: "💻",
    description: "CAC reduction & demo bookings"
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    emoji: "🏥",
    description: "Patient acquisition for clinics"
  },
  {
    title: "Coaching & Consulting",
    href: "/industries/coaching-consulting",
    emoji: "🎯",
    description: "High-ticket client enrollment"
  },
  {
    title: "Education & EdTech",
    href: "/industries/education",
    emoji: "📚",
    description: "Student enrollments & lead gen"
  },
  {
    title: "Restaurant & Food",
    href: "/industries/restaurant-food",
    emoji: "🍔",
    description: "Direct orders & foot-traffic"
  },
  {
    title: "E-commerce",
    href: "/industries/ecommerce",
    emoji: "🛒",
    description: "ROAS scaling & cart recovery"
  },
  {
    title: "Fitness & Wellness",
    href: "/industries/fitness-wellness",
    emoji: "💪",
    description: "Gym members & health clients"
  },
  {
    title: "MSME & Small Business",
    href: "/industries/msme-small-business",
    emoji: "🏢",
    description: "Local visibility & inbound leads"
  },
  {
    title: "Non-Profit / NGO",
    href: "/industries/non-profit",
    emoji: "🤝",
    description: "Donor acquisition & awareness"
  },
  {
    title: "Travel & Tourism",
    href: "/industries/travel-tourism",
    emoji: "✈️",
    description: "Booking volume & holiday packages"
  },
  {
    title: "Legal & Professional",
    href: "/industries/legal-professional",
    emoji: "⚖️",
    description: "High-intent client cases"
  }
];
