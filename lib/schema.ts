// Typed schema generators for technical SEO
export const generateLocalBusinessSchema = (city?: string) => {
  const base = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": `https://veloxisglobal.com/${city ? `digital-marketing-agency-${city.toLowerCase()}/` : ''}#localbusiness`,
    "name": "Veloxis Global",
    "telephone": "+918887620727",
    "email": "muddassir@veloxisglobal.com",
    "url": "https://veloxisglobal.com",
    "priceRange": "$$",
    "image": "https://veloxisglobal.com/images/logos/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180"
    }
  };

  if (city && city.toLowerCase() === 'kanpur') {
    return {
      ...base,
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
        "latitude": "26.4607",
        "longitude": "80.3334"
      },
      "areaServed": ["Delhi", "Noida", "Lucknow", "Kanpur"]
    };
  } else if (city) {
    return {
      ...base,
      "areaServed": {
        "@type": "City",
        "name": city
      }
    };
  } else {
    // Default to Kanpur address
    return {
      ...base,
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
        "latitude": "26.4607",
        "longitude": "80.3334"
      },
      "areaServed": ["Delhi", "Noida", "Lucknow", "Kanpur"]
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
      "image": "https://veloxisglobal.com/images/logos/logo.png",
      "telephone": "+918887620727",
      "email": "muddassir@veloxisglobal.com",
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
    "@type": "NewsArticle",
    "headline": title,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": author || "Muddassir Ali",
      "url": "https://veloxisglobal.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Veloxis Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veloxisglobal.com/images/logos/logo.png"
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
    "logo": "https://veloxisglobal.com/images/logos/logo.png",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Muddassir Ali"
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
      "email": "muddassir@veloxisglobal.com",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
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
    "description": "North India's leading digital marketing agency.",
    "publisher": {
      "@id": "https://veloxisglobal.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://veloxisglobal.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
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
