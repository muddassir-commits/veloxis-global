export interface CaseStudySection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface CaseStudyMetricTable {
  metricName: string;
  beforeValue: string;
  afterValue: string;
  improvementPercentage: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  location: string;
  duration: string;
  challenge: string;
  strategy: string;
  metrics: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
  sections: CaseStudySection[];
  dataComparison: CaseStudyMetricTable[];
  serviceCategory: 'Landing Pages' | 'Paid Ads' | 'AI Automation';
}

export const caseStudies: CaseStudy[] = [
  {
    id: "delhi-real-estate",
    slug: "delhi-real-estate-developer",
    title: "How We Built a Site-Visit Pipeline for a Delhi Real Estate Developer",
    industry: "Real Estate",
    location: "Delhi",
    duration: "6 Months",
    challenge: "Zero online presence, relying completely on traditional print media and local agents, losing leads to digital-first competitors.",
    strategy: "Built a dedicated, fast-loading landing page for the project, launched targeted Google Search and Meta lead-gen campaigns aimed at the project's core buyer segments, and layered in WhatsApp automation so every enquiry got an instant reply and e-brochure.",
    metrics: [
      "Predictable Monthly Site-Visit Pipeline",
      "Positive Return on Ad Spend (ROAS)",
      "Under 5-Minute Lead Response Time"
    ],
    image: "/images/sections/case-study-cover.jpg",
    metaTitle: "Delhi Real Estate Developer Case Study | Veloxis Global",
    metaDescription: "See how we built a predictable site-visit pipeline for a Delhi real estate developer using landing pages, paid ads, and WhatsApp automation.",
    serviceCategory: "Paid Ads",
    dataComparison: [
      { metricName: "Monthly Site Visits Booked", beforeValue: "Minimal", afterValue: "Consistent, weekly bookings", improvementPercentage: "High" },
      { metricName: "Average Lead Response Time", beforeValue: "Hours (manual)", afterValue: "Under 5 minutes (automated)", improvementPercentage: "Automated" },
      { metricName: "Cost Per Qualified Site Visit", beforeValue: "High", afterValue: "Reduced significantly", improvementPercentage: "Improved" },
      { metricName: "Enquiry Response Rate", beforeValue: "Manual, inconsistent", afterValue: "100% instant WhatsApp reply", improvementPercentage: "High" }
    ],
    sections: [
      {
        heading: "1. Project Overview & Executive Summary",
        subheading: "Moving a traditional property builder onto a digital lead engine",
        paragraphs: [
          "Our client, an established luxury residential real estate builder in South Delhi, was launching a premium apartment complex in Dwarka. Historically, their sales pipeline relied entirely on channel partners, brokers, and print advertisements. With buyers increasingly researching projects and checking floor plans online first, the client was losing site-visit bookings to digital-first competitors.",
          "Veloxis Global was brought on to build an independent lead-generation engine covering the three things that actually move real estate: a dedicated landing page, targeted paid campaigns, and instant lead response. Over six months, this combination took the project from an inconsistent, broker-dependent trickle of enquiries to a predictable weekly flow of booked site visits."
        ]
      },
      {
        heading: "2. Landing Page Build & Site-Speed Optimization",
        subheading: "A dedicated project page built to convert, not just inform",
        paragraphs: [
          "The developer's legacy corporate site was slow, generic, and not built to send paid traffic to. We built a standalone landing page for the Dwarka project on Next.js, optimized for sub-2-second mobile load times, with the project's actual USPs — floor plans, possession timeline, Metro connectivity — front and center instead of buried in a template.",
          "Every interactive element on the page was assigned a unique tracking ID so every click, scroll, and form submission could be attributed back to the specific ad campaign that drove it."
        ],
        bulletPoints: [
          "Sub-2-second load time on 4G mobile networks",
          "Sticky WhatsApp CTA replacing the old multi-field contact form",
          "Location-first layout highlighting Metro distance, expressway access, and nearby schools"
        ]
      },
      {
        heading: "3. Google & Meta Ads Launch",
        subheading: "Paid campaigns built around buyer intent, not broad reach",
        paragraphs: [
          "We launched Google Search campaigns targeting high-intent, project- and locality-specific keywords, paired with Meta Lead Ads carrying video walkthroughs targeted at lookalike audiences of past buyers. The two channels served different jobs: Google captured buyers actively searching, Meta built volume for the top of the funnel.",
          "Budgets were reallocated weekly based on cost per qualified site visit rather than raw click volume — the metric that actually matters for a developer's sales team."
        ],
        bulletPoints: [
          "Locality- and project-specific Google Search campaigns",
          "Meta Lead Ads with video walkthroughs and lookalike targeting",
          "Weekly budget reallocation based on cost per qualified site visit"
        ]
      },
      {
        heading: "4. WhatsApp Automation & Lead Routing",
        subheading: "Closing the gap between enquiry and first contact",
        paragraphs: [
          "Every lead captured through the landing page or a Meta Lead Ad was pushed instantly into a WhatsApp automation flow — an immediate template message with the project's e-brochure, followed by routing into the sales team's CRM for a human follow-up call. No lead sat unanswered waiting for someone to check a spreadsheet.",
          "This closed the single biggest leak in the old process: leads that went cold because nobody called back within the first hour."
        ],
        bulletPoints: [
          "Instant WhatsApp template reply with e-brochure on every new lead",
          "Automatic CRM routing to the sales desk for follow-up calls",
          "Zero-leakage lead capture across landing page and ad form submissions"
        ]
      },
      {
        heading: "5. Campaign Results & Long-Term Value",
        subheading: "A repeatable system, not a one-time traffic spike",
        paragraphs: [
          "Within six months of launching the integrated landing page, paid ads, and WhatsApp automation system, the developer moved from an inconsistent, broker-dependent trickle of enquiries to a predictable weekly flow of booked site visits.",
          "More importantly, the system is repeatable — the same landing page and automation setup have since been reused for later phases of the same project, cutting the setup cost of each new launch."
        ]
      }
    ]
  }
];
