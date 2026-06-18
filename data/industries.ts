export interface Industry {
  id: string;
  title: string;
  slug: string;
  icon: string;
  desc: string;
  emoji: string;
  badge: 'teal' | 'indigo' | 'orange';
}

export const industries: Industry[] = [
  {
    id: "real-estate",
    title: "Real Estate Developer Marketing",
    slug: "real-estate",
    icon: "Home",
    desc: "Local search domination, virtual tour landing pages, and geo-targeted Google/Facebook campaigns generating qualified property buyers in Delhi NCR.",
    emoji: "🏠",
    badge: "teal"
  },
  {
    id: "healthcare",
    title: "Healthcare & Patient Bookings",
    slug: "healthcare",
    icon: "HeartPulse",
    desc: "Google map pack visibility, local citations audit, and lead nurturing flows that fill pediatric, IVF, and multi-specialty clinical schedules in Lucknow.",
    emoji: "🏥",
    badge: "indigo"
  },
  {
    id: "education",
    title: "Higher Education & Enrollments",
    slug: "education",
    icon: "GraduationCap",
    desc: "Search campaigns targeting course queries, student journey tracking, and automated CRM WhatsApp flows that double applications for Noida academies.",
    emoji: "📚",
    badge: "orange"
  },
  {
    id: "ecommerce",
    title: "E-commerce & Shopify Growth",
    slug: "ecommerce",
    icon: "ShoppingBag",
    desc: "PMax campaign setups, negative keyword filters, and dynamic Instagram reels advertising delivering 5x+ ROAS for Indian retail brands.",
    emoji: "🛒",
    badge: "teal"
  },
  {
    id: "msme-small-business",
    title: "MSME & B2B Manufacturing",
    slug: "msme-small-business",
    icon: "Landmark",
    desc: "B2B export SEO campaigns, technical catalog speed optimizations, and global search targeting that connect Kanpur mills with international buyers.",
    emoji: "🏢",
    badge: "indigo"
  },
  {
    id: "saas",
    title: "SaaS & Software Marketing",
    slug: "saas",
    icon: "Cloud",
    desc: "Product-led growth, organic search loops, performance advertising, and full-funnel attribution tracking to drive MRR scaling.",
    emoji: "💻",
    badge: "orange"
  },
  {
    id: "coaching-consulting",
    title: "Coaching, Consulting & Experts",
    slug: "coaching-consulting",
    icon: "Users",
    desc: "Personal brand positioning, automated high-ticket webinar funnels, paid advertising, and client onboarding automation.",
    emoji: "🎓",
    badge: "teal"
  },
  {
    id: "restaurant-food",
    title: "Restaurant & Food Brands",
    slug: "restaurant-food",
    icon: "Utensils",
    desc: "Hyper-local map optimization, Instagram reels production, seasonal offer setups, and direct delivery channel marketing.",
    emoji: "🍕",
    badge: "indigo"
  },
  {
    id: "fitness-wellness",
    title: "Fitness Centers & Wellness",
    slug: "fitness-wellness",
    icon: "Dumbbell",
    desc: "Lead-to-member conversion systems, local gym brand visibility, social media stories, and retention automation programs.",
    emoji: "💪",
    badge: "orange"
  },
  {
    id: "non-profit",
    title: "Non-Profit & NGO Advocacy",
    slug: "non-profit",
    icon: "Heart",
    desc: "Google Ad Grants setup, storytelling strategies, donor acquisition workflows, and event-based engagement systems.",
    emoji: "🤝",
    badge: "teal"
  }
];
