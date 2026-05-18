/**
 * Structured Data (JSON-LD) Validation Layer
 * 
 * Verifies completeness of schema markers, required property bindings,
 * and detects malformed structured blocks prior to search console index submission.
 */

import { contentRegistry } from '../content.js';

export const validatePageSchemas = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  const schemaReports = [];

  publishedItems.forEach(item => {
    const rawSchema = item.data.schema;
    const faqs = item.data.faqs || [];

    let score = 100;
    const errors = [];
    const warnings = [];
    const schemasFound = [];

    // Check FAQ structured data availability
    if (faqs.length > 0) {
      schemasFound.push('FAQPage');
    }

    if (rawSchema) {
      try {
        // Attempt parsing if string, or audit directly if object
        const schemaObj = typeof rawSchema === 'string' ? JSON.parse(rawSchema) : rawSchema;
        const type = schemaObj['@type'] || 'Unknown';
        schemasFound.push(type);

        // Standard JSON-LD validation checks
        if (!schemaObj['@context']) {
          score -= 20;
          errors.push('Missing "@context" declaration (usually "https://schema.org").');
        }

        // Contextual validation rules based on schema types
        if (type === 'LocalBusiness' || type === 'Organization') {
          const required = ['name', 'address', 'telephone'];
          required.forEach(field => {
            if (!schemaObj[field]) {
              score -= 15;
              errors.push(`Missing required LocalBusiness property: "${field}".`);
            }
          });
          if (!schemaObj.priceRange) {
            score -= 5;
            warnings.push('LocalBusiness schemas should declare a "priceRange" parameter.');
          }
        } else if (type === 'Service') {
          const required = ['name', 'description'];
          required.forEach(field => {
            if (!schemaObj[field]) {
              score -= 15;
              errors.push(`Missing required Service property: "${field}".`);
            }
          });
          if (!schemaObj.provider && !schemaObj.areaServed) {
            score -= 10;
            warnings.push('Service schemas should declare a "provider" or "areaServed" mapping.');
          }
        } else if (type === 'Article' || type === 'BlogPosting') {
          const required = ['headline', 'author', 'publisher', 'datePublished'];
          required.forEach(field => {
            if (!schemaObj[field]) {
              score -= 15;
              errors.push(`Missing required Article property: "${field}".`);
            }
          });
        }
      } catch (err) {
        score = 0;
        errors.push(`Malformed JSON syntax: ${err.message}`);
      }
    } else {
      // Missing main schema representation
      score -= 30;
      warnings.push('No primary service, article, or business schema declared.');
    }

    schemaReports.push({
      slug: item.slug,
      title: item.data.title || item.slug,
      score: Math.max(0, score),
      schemas: schemasFound,
      errors,
      warnings
    });
  });

  const averageSchemaScore = schemaReports.length > 0
    ? Math.round(schemaReports.reduce((sum, r) => sum + r.score, 0) / schemaReports.length)
    : 100;

  return {
    averageSchemaScore,
    reports: schemaReports
  };
};
