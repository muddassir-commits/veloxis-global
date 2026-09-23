// Typed schema generators for technical SEO
export const generateLocalBusinessSchema = (city?: string) => {
  const base = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://veloxisglobal.com/#localbusiness",
    "name": "Veloxis Global",
    "telephone": "+918887620727",
    "email": "info@veloxisglobal.com",
    "url": "https://veloxisglobal.com/",
    "priceRange": "₹₹",
    "image": "https://veloxisglobal.com/images/logos/logo.webp",
    "description": "Delhi NCR's results-driven real estate marketing agency. Expert landing pages, Google Ads and Meta Ads for property developers.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const cLower = city ? city.toLowerCase() : '';

  if (cLower === 'kanpur') {
    return {
      ...base,
      "hasMap": "https://maps.google.com/?q=Veloxis+Global+Kanpur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Faithful Ganj, Cantt",
        "addressLocality": "Kanpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "208004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.4499",
        "longitude": "80.3319"
      },
      "areaServed": "Kanpur"
    };
  } else if (cLower === 'lucknow') {
    return {
      ...base,
      "hasMap": "https://maps.google.com/?q=Veloxis+Global+Lucknow",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rohtas Summit, Vibhuti Khand, Gomti Nagar",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226010",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8467",
        "longitude": "80.9984"
      },
      "areaServed": "Lucknow"
    };
  } else if (cLower === 'noida') {
    return {
      ...base,
      "hasMap": "https://maps.google.com/?q=Veloxis+Global+Noida",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Logix Techno Park, Sector 127",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5355",
        "longitude": "77.3910"
      },
      "areaServed": "Noida"
    };
  } else if (cLower === 'delhi') {
    return {
      ...base,
      "hasMap": "https://maps.google.com/?q=Veloxis+Global+Delhi",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd Floor, Outer Circle, Connaught Place",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6304",
        "longitude": "77.2177"
      },
      "areaServed": "Delhi NCR"
    };
  } else {
    // Default to Noida address
    return {
      ...base,
      "hasMap": "https://maps.google.com/?q=Veloxis+Global+Noida",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Logix Techno Park, Sector 127",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5355",
        "longitude": "77.3910"
      },
      "areaServed": "Delhi NCR"
    };
  }
};

export const generateServiceSchema = (name: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Veloxis Global",
      "image": "https://veloxisglobal.com/images/logos/logo.webp",
      "telephone": "+918887620727",
      "email": "info@veloxisglobal.com",
      "url": "https://veloxisglobal.com"
    }
  };
};

export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};

export const generateArticleSchema = (title: string, author: string = "Muddassir Ali", datePublished: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": author || "Muddassir Ali",
      "url": "https://veloxisglobal.com/about",
      "sameAs": [
        "https://www.linkedin.com/in/muddassir-alii/",
        "https://x.com/muddassir_alii"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veloxisglobal.com/images/logos/logo.webp"
      }
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://veloxisglobal.com/#organization",
    "name": "Veloxis Global",
    "url": "https://veloxisglobal.com",
    "logo": "https://veloxisglobal.com/images/logos/logo.webp",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Muddassir Ali",
        "url": "https://veloxisglobal.com/about",
        "sameAs": [
          "https://www.linkedin.com/in/muddassir-alii/",
          "https://x.com/muddassir_alii"
        ]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/veloxisglobal/",
      "https://www.linkedin.com/company/111872222/",
      "https://www.facebook.com/veloxisglobal/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918887620727",
      "email": "info@veloxisglobal.com",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5"
    }
  };
};

// Legacy Compatibility Wrappers
export const getOrganizationSchema = () => generateOrganizationSchema();

export const getWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://veloxisglobal.com/#website",
    "url": "https://veloxisglobal.com",
    "name": "Veloxis Global",
    "description": "Delhi NCR's results-driven real estate marketing agency.",
    "publisher": {
      "@id": "https://veloxisglobal.com/#organization"
    }
  };
};

export const getLocalBusinessSchema = ({ city }: { city: string }) => {
  return generateLocalBusinessSchema(city);
};

export const getFAQPageSchema = (faqs: { question: string; answer: string }[]) => {
  return generateFAQSchema(faqs.map(f => ({ q: f.question, a: f.answer })));
};

export const getBreadcrumbListSchema = (items: { name: string; item: string }[]) => {
  return generateBreadcrumbSchema(items.map(i => ({ name: i.name, url: i.item })));
};

export const getArticleSchema = (props: {
  title: string;
  description?: string;
  image?: string;
  datePublished: string;
  authorName?: string;
  url?: string;
}) => {
  return generateArticleSchema(props.title, props.authorName || "Muddassir Ali", props.datePublished);
};

export const generateHowToSchema = (name: string, description: string, steps: { name: string; text: string; image?: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.name,
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": step.text
        }
      ],
      "image": step.image || "https://veloxisglobal.com/images/logos/logo.webp"
    }))
  };
};

export const generateTestimonialsSchema = (testimonials: { author: string; text: string; rating: number }[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": testimonials.map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(t.rating),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.author
      },
      "reviewBody": t.text,
      "itemReviewed": {
        "@type": "Organization",
        "name": "Veloxis Global",
        "image": "https://veloxisglobal.com/images/logos/logo.webp",
        "url": "https://veloxisglobal.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Veloxis Global"
      }
    }))
  };
};

export const getContactPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Veloxis Global",
      "telephone": "+91-8887620727",
      "email": "info@veloxisglobal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Logix Techno Park, Sector 127",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "url": "https://veloxisglobal.com/contact"
    }
  };
};
