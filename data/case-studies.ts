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
}

export const caseStudies: CaseStudy[] = [
  {
    id: "delhi-real-estate",
    slug: "delhi-real-estate-developer",
    title: "How We Took a Delhi Real Estate Developer from 0 to 35,000 Monthly Visitors",
    industry: "Real Estate",
    location: "Delhi",
    duration: "6 Months",
    challenge: "Zero online presence, relying completely on traditional print media and local agents, losing leads to digital-first competitors.",
    strategy: "Implemented geo-targeted Local SEO campaigns, set up and optimized Google Business Profiles for high-priority projects, designed high-performance landing pages, and ran targeted Google Search campaigns.",
    metrics: [
      "+340% Organic Traffic",
      "5.2x Return on Ad Spend (ROAS)",
      "#1 on Google for 18 High-Intent Keywords"
    ],
    image: "/images/case-studies/real-estate-delhi.jpg",
    metaTitle: "Delhi Real Estate Developer SEO Case Study | Veloxis Global",
    metaDescription: "Discover how we generated +340% organic traffic for a Delhi real estate developer. Read the full case study to scale your online property sales today."
  },
  {
    id: "noida-ecommerce",
    slug: "noida-ecommerce-skincare",
    title: "How Noida SkillEdge Academy Cut PPC Cost-Per-Lead by 42%",
    industry: "EdTech",
    location: "Noida",
    duration: "2 Months",
    challenge: "High cost-per-lead (CPL) on Meta Ads, flatlining organic reach, and unoptimized landing pages that bounced traffic.",
    strategy: "Restructured Google Search Campaigns, built negative keyword lists, implemented A/B testing on landing page headlines and forms, and set up clear CRM conversion tracking pipelines.",
    metrics: [
      "42% Reduction in Cost-Per-Lead",
      "2x Lead Volume in 60 Days",
      "5.2x ROAS on Course Registrations"
    ],
    image: "/images/case-studies/edtech-noida.jpg",
    metaTitle: "Noida EdTech PPC Lead Generation Case Study | Veloxis",
    metaDescription: "How we cut EdTech cost-per-lead by 42% for a Noida academy. Explore our paid ads strategy and landing page A/B testing to scale your conversions."
  },
  {
    id: "lucknow-healthcare",
    slug: "lucknow-healthcare-leads",
    title: "Generating 500 Qualified Patient Leads in 90 Days for a Lucknow Healthcare Brand",
    industry: "Healthcare",
    location: "Lucknow",
    duration: "3 Months",
    challenge: "Low patient walk-ins across multiple local multi-specialty clinics. Low local maps visibility.",
    strategy: "Optimized Google Business Profiles for local search packs, ran targeted hyper-local Facebook Ads, and set up a streamlined booking funnel on a mobile-responsive landing page.",
    metrics: [
      "500+ Qualified Patient Leads",
      "60% Increase in Patient Footfall",
      "100% Correct Map Rankings for 3 Locations"
    ],
    image: "/images/case-studies/healthcare-lucknow.jpg",
    metaTitle: "Lucknow Healthcare Lead Generation | Veloxis Global",
    metaDescription: "Learn how we generated 500 patient leads in 90 days for a Lucknow clinic. Read our local SEO map pack blueprint to drive your clinic bookings now."
  },
  {
    id: "kanpur-fabrics",
    slug: "kanpur-fabrics-b2b",
    title: "Scaling Kanpur Fabrics' B2B Leads to Account for 40% of All New Business",
    industry: "Manufacturing & Textile",
    location: "Kanpur",
    duration: "4 Months",
    challenge: "Relying on physical expos and trade fairs for wholesale B2B client acquisition, resulting in slow off-season sales.",
    strategy: "Developed an SEO-optimized B2B wholesale landing page, targeted long-tail B2B search terms on Google Ads, and executed automated email sequences for trade leads.",
    metrics: [
      "40% New Business Generated Online",
      "220% Growth in B2B Enquiries",
      "#1 Google Rank for 'Textile Manufacturer Kanpur'"
    ],
    image: "/images/case-studies/manufacturing-kanpur.jpg",
    metaTitle: "Kanpur B2B Manufacturing SEO Case Study | Veloxis Global",
    metaDescription: "Discover how we scaled B2B lead generation by 220% for a Kanpur fabric manufacturer. Read the strategy guide to grow your wholesale sales online."
  }
];
