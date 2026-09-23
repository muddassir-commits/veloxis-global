import { companyStats } from './stats';

export interface IndustryChallenge {
  title: string;
  desc: string;
}

export interface IndustryStrategy {
  title: string;
  desc: string;
}

export interface RecommendedService {
  title: string;
  slug: string;
  emoji: string;
}

export interface IndustryStat {
  label: string;
  value: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryCaseSummary {
  clientArea: string;
  timeframe: string;
  outcome: string;
  roas: string;
  caseStudyLink?: string;
  caseStudyTitle?: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  emoji: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  caseSummary: IndustryCaseSummary;
  challenges: IndustryChallenge[];
  strategies: IndustryStrategy[];
  recommendedServices: RecommendedService[];
  stats: IndustryStat[];
  faqs: IndustryFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const industriesData: IndustryData[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    emoji: "🏠",
    heroBadge: "REAL ESTATE ACCELERATION",
    heroTitle: "Marketing Built for Premium Real Estate Developers",
    heroDescription: "Stop paying for shared, low-intent portals. Veloxis Global designs dedicated lead capture landing pages, conversion-optimized Google & Meta Ads, and WhatsApp automation that drive direct inquiries and scheduled site visits.",
    caseSummary: {
      clientArea: "Delhi NCR Developer",
      timeframe: "6 Months Campaign",
      outcome: "Consistent weekly site-visit bookings, replacing a broker-only pipeline",
      roas: "Positive return on ad spend across Google & Meta campaigns",
      caseStudyLink: "/case-studies/delhi-real-estate-developer",
      caseStudyTitle: "Read Detailed Delhi Case Study"
    },
    challenges: [
      {
        title: "High Cost Per Lead (CPL) on Portals",
        desc: "Listing portals resell the same leads to 5-10 developers, sparking price wars and decreasing conversion quality."
      },
      {
        title: "Low Intent / Broker Spam",
        desc: "Many online lead forms collect invalid phone numbers or requests from brokers instead of genuine, qualified buyers."
      },
      {
        title: "Long Sales Cycles & No Nurturing",
        desc: "Property purchases require multiple touchpoints, but developers often lack automated email or WhatsApp follow-up sequences."
      }
    ],
    strategies: [
      {
        title: "Conversion-Optimized Landing Pages",
        desc: "Fast-loading mobile landing pages designed to capture broker and direct buyer details through secure React validations."
      },
      {
        title: "Google & Meta Search Intent Targeting",
        desc: "Filter out competitors and window-shoppers. We manage exact-match search and lead-gen ad budgets to capture high-net-worth buyers actively searching."
      },
      {
        title: "Instant WhatsApp Lead Response",
        desc: "Every enquiry triggers an automated WhatsApp reply and CRM routing within minutes, so no lead sits unanswered waiting for a callback."
      }
    ],
    recommendedServices: [
      { title: "Landing Pages", slug: "high-converting-landing-pages", emoji: "⚡" },
      { title: "Paid Ads", slug: "paid-ads", emoji: "🎯" },
      { title: "AI & WhatsApp Automation", slug: "ai-automation", emoji: "🤖" }
    ],
    stats: [
      { label: "Years of Experience", value: companyStats.yearsExperience },
      { label: "Projects Delivered", value: companyStats.projectsDelivered },
      { label: "Average Client Rating", value: companyStats.clientRating }
    ],
    faqs: [
      {
        question: "How do you filter out brokers from lead campaigns?",
        answer: "We employ negative-audience targeting to exclude competitor real estate brokers, add mandatory specific dropdowns in our forms (e.g., budget range, timing to buy), and run SMS/WhatsApp verification blocks."
      },
      {
        question: "What is your setup timeline for real estate ads?",
        answer: "Typically, it takes 10 to 14 working days. This includes building custom landing pages, setting up tracking pixels, conducting search keyword research, and acquiring approval on campaign copy."
      }
    ],
    metaTitle: "Real Estate Developer Marketing Agency | Veloxis Global",
    metaDescription: "Scale qualified property leads and direct broker site visits in Delhi NCR, Noida, and Greater Noida. View our real estate marketing framework online today."
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(industry => industry.slug === slug);
}
