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
  address: "Based in Noida · Serving Delhi NCR, Lucknow & Kanpur",
  // City we are based in (no street address: service-area business).
  baseCity: "Noida",
  areaServed: ["Noida", "Greater Noida", "Delhi NCR", "Lucknow", "Kanpur"],
  // Legal venue referenced in the Terms of Service.
  jurisdiction: "Kanpur, Uttar Pradesh",
  // One definition used everywhere AI tools and search engines read about us (schema, llms.txt, About).
  definition:
    "Veloxis Global is a Noida-based digital marketing agency for real estate, D2C brands and local businesses. It builds landing pages and websites, runs Meta and Google ads, and sets up WhatsApp and email follow-ups, with real estate work for developers, brokers and channel partners in Noida, Greater Noida, Delhi NCR, Lucknow and Kanpur.",
  // Kept apart from any similarly named company in search results.
  disambiguation: "Indian digital marketing agency (real estate, D2C brands, local businesses). Not related to Veloxis Pharmaceuticals or VXI Global.",
  booking: "https://calendly.com/veloxis-global/30min",
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
