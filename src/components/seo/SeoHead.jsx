import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSchema } from '../../lib/schema';
import { useLocation } from 'react-router-dom';

/**
 * SeoHead centrally manages all metadata, Open Graph tags, and JSON-LD schema generation.
 * This ensures consistency across the application and prepares for programmatic SEO.
 */
const SeoHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  schemaType,
  image = '/default-og-image.jpg',
  noIndex = false,
  cmsData = {} // Pass raw CMS frontmatter for deep schema extraction
}) => {
  const siteName = 'Veloxis Global';
  const safeTitle = title || '';
  const fullTitle = safeTitle.includes(siteName) ? safeTitle : `${safeTitle} | ${siteName}`.trim().replace(/^\| /, '');
  
  // Calculate automated canonical URL to prevent parameter duplicate content issues
  const location = useLocation();
  const BASE_URL = 'https://veloxisglobal.com';
  const automatedCanonical = canonicalUrl || `${BASE_URL}${location.pathname}`;

  // Generate automated JSON-LD schema
  const schemaData = {
    title: fullTitle,
    description,
    canonicalUrl: automatedCanonical,
    image,
    ...cmsData
  };
  
  const jsonLd = generateSchema(schemaType, schemaData);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Google Search Console Ownership Verification */}
      <meta name="google-site-verification" content="CVRVYJuDB29ung6LskjcSWvfZwi1q4L4b21cJxpbcX8" />
      
      {/* Canonical */}
      <link rel="canonical" href={automatedCanonical} />
      
      {/* Indexing Rules */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={automatedCanonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Automated JSON-LD Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SeoHead;

