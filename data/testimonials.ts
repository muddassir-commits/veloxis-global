export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  role: string;
  company: string;
  location: string;
  website?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "real-estate-dev",
    rating: 5,
    text: "Honestly, they completely turned things around for our new luxury project launch. Our phones haven't stopped ringing since they took over our Google Ads! The lead quality is crazy good. Best decision we made.",
    author: "Rohit S.",
    role: "Director of Sales",
    company: "Premium Real Estate Developers",
    location: "Delhi",
  },
  {
    id: "real-estate-broker",
    rating: 5,
    text: "Their WhatsApp automation is a game changer. The moment a lead comes from Facebook, my sales team gets notified and the buyer gets our brochure instantly. We've doubled our site visits.",
    author: "Amit K.",
    role: "Managing Director",
    company: "NCR Property Consultants",
    location: "Noida",
  },
  {
    id: "real-estate-channel",
    rating: 5,
    text: "We were struggling to get quality leads before Veloxis. They built a hyper-fast landing page and ran targeted Meta ads. Our CPL dropped by 40% and conversion doubled. Highly recommended!",
    author: "Priya M.",
    role: "Founder",
    company: "Metro Channel Partners",
    location: "Greater Noida",
  }
];
