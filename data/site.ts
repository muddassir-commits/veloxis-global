// Single source of truth for business facts used in copy, footer, schema and llms.txt.
// Veloxis Global is a service-area business: no public street address is published.
export const siteData = {
  name: "Veloxis Global",
  url: "https://www.veloxisglobal.com",
  phone: "+91-91940 20727",
  phoneRaw: "+919194020727",
  whatsapp: "+919194020727",
  email: "info@veloxisglobal.com",
  // Shown wherever an address used to appear.
  address: "Based in Noida · Serving India, the UK & the US",
  // City we are based in (no street address: service-area business).
  baseCity: "Noida",
  areaServed: ["Noida", "Greater Noida", "Delhi NCR", "Lucknow", "Kanpur"],
  // Countries we take work from (schema areaServed). Local businesses and online brands in the UK and US are served remotely.
  countriesServed: ["India", "United States", "United Kingdom"],
  // Legal venue referenced in the Terms of Service.
  jurisdiction: "Kanpur, Uttar Pradesh",
  // One definition used everywhere AI tools and search engines read about us (schema, llms.txt, About).
  definition:
    "Veloxis Global is a Noida-based performance marketing agency for e-commerce and D2C brands, local businesses and clinics, and real estate. It runs Meta and Google ads, builds websites, landing pages and Shopify stores, improves SEO and Google Business Profiles, and sets up WhatsApp and AI automation, measured on leads and sales rather than clicks.",
  // Kept apart from any similarly named company in search results.
  disambiguation: "Indian performance marketing agency (e-commerce, local businesses, real estate). Not related to Veloxis Pharmaceuticals or VXI Global.",
  booking: "https://calendly.com/veloxis-global/30min",
  // Generic link only. On-page WhatsApp buttons use components/ui/WhatsAppLink (page-specific message, data/whatsapp-messages.ts).
  whatsappLink: "https://wa.me/919194020727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit",
  logo: "https://www.veloxisglobal.com/images/logos/logo.png",
  // Square version for Google's logo and knowledge panel (wide logos get cropped or skipped).
  logoSquare: "https://www.veloxisglobal.com/images/logos/logo-square.png",
  socials: [
    "https://www.instagram.com/veloxisglobal/",
    "https://www.linkedin.com/company/111872222/",
    "https://www.facebook.com/veloxisglobal/",
    "https://x.com/veloxisglobal",
    "https://www.youtube.com/@veloxisglobal",
    "https://www.pinterest.com/veloxisglobal/",
  ],
  // Third-party listings that describe the agency. Joined to the socials in sameAs and listed in llms.txt
  // so search engines and AI tools can match every profile to one entity.
  profiles: [
    "https://clutch.co/profile/veloxis-global",
    "https://www.goodfirms.co/company/veloxis-global",
  ],
};
