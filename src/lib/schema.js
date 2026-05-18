/**
 * Centralized Schema Generation Engine
 * 
 * Generates automated JSON-LD structured data for the application.
 * By keeping this logic centralized, we can easily update schema shapes globally
 * to comply with changing Google rich-result requirements.
 */

const BASE_URL = 'https://veloxisglobal.com';

export const generateSchema = (schemaType, pageData) => {
  const commonOrganization = {
    "@type": "Organization",
    "name": "Veloxis Global",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`, // Placeholder for future logo
  };

  switch (schemaType) {
    case 'Article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageData.title,
        "description": pageData.description,
        "image": pageData.image ? `${BASE_URL}${pageData.image}` : `${BASE_URL}/default-og-image.jpg`,
        "author": {
          "@type": "Person",
          "name": pageData.author || "Veloxis Global Team"
        },
        "publisher": commonOrganization,
        "datePublished": pageData.date ? new Date(pageData.date).toISOString() : new Date().toISOString(),
      };

    case 'Service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageData.title,
        "description": pageData.description,
        "provider": commonOrganization,
        "url": pageData.canonicalUrl
      };

    case 'WebSite':
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Veloxis Global",
        "url": BASE_URL,
        "description": pageData.description
      };
      
    case 'ContactPage':
    case 'AboutPage':
    case 'CollectionPage':
    default:
      // Fallback to basic WebPage schema if no specific type is matched
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageData.title,
        "description": pageData.description,
        "url": pageData.canonicalUrl
      };
  }
};
