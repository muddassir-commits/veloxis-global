export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  role: string;
  company: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "malhotra",
    rating: 5,
    text: "Veloxis Global completely transformed our digital presence. In 6 months, we went from invisible online to ranking #1 in Delhi for our main search terms. Our enquiry volume tripled. Best investment we've made.",
    author: "Rohit Malhotra",
    role: "Director",
    company: "Malhotra Properties",
    location: "Delhi"
  },
  {
    id: "skilledge",
    rating: 5,
    text: "Their Google Ads team cut our cost-per-lead by 42% in the first 60 days while doubling our lead volume. The weekly reports are genuinely insightful — not just numbers, but clear next steps.",
    author: "Priya Agarwal",
    role: "Founder",
    company: "SkillEdge Academy",
    location: "Noida"
  },
  {
    id: "verma",
    rating: 5,
    text: "As a multi-specialty clinic, we needed patients to find us locally. Veloxis set up our Google Business Profiles for all 3 locations and built our local SEO. Footfall increased 60% in 4 months.",
    author: "Dr. Ashish Verma",
    role: "Director",
    company: "Verma Health Group",
    location: "Lucknow"
  },
  {
    id: "gupta",
    rating: 5,
    text: "We were sceptical about digital marketing for our textile business, but Veloxis proved us wrong. Our B2B leads from Google now account for 40% of new business. Exceptional team.",
    author: "Suresh Gupta",
    role: "MD",
    company: "Gupta Fabrics Ltd.",
    location: "Kanpur"
  },
  {
    id: "bloom",
    rating: 5,
    text: "Our Instagram following grew from 2,000 to 58,000 in 8 months. More importantly, our Shopify revenue from social traffic increased 220%. These people know what they are doing.",
    author: "Neha Singh",
    role: "Founder",
    company: "Bloom Skincare",
    location: "Delhi"
  }
];
