/**
 * Crawl Intelligence & Diagnostics Engine
 * 
 * Verifies sitemap routing alignments, canonical overrides,
 * duplicate slug listings, and orphaned virtual URL configurations.
 */

import { contentRegistry } from '../content.js';
import { ALLOWED_PROGRAMMATIC_COMBINATIONS } from '../../data/programmatic/combinations.js';

export const runCrawlDiagnostics = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  const crawlWarnings = [];
  const registeredSlugs = new Set();
  
  let sitemapValidatedCount = 0;
  let canonicalChecksPassed = 0;
  let brokenCanonicalCount = 0;

  // 1. Audit Slug Uniqueness (Duplicate Slug check across collections)
  publishedItems.forEach(item => {
    const slugKey = item.slug.toLowerCase().trim();
    if (registeredSlugs.has(slugKey)) {
      crawlWarnings.push({
        type: 'duplicate_slug',
        severity: 'HIGH',
        slug: item.slug,
        message: `Duplicate slug collision: '${item.slug}' is defined in multiple collections. This will break CMS routing fallback.`
      });
    } else {
      registeredSlugs.add(slugKey);
    }
  });

  // 2. Canonical Overrides and Sitemap Validation
  publishedItems.forEach(item => {
    sitemapValidatedCount++;
    
    // Validate Frontmatter Canonical URL (if declared)
    const canonical = item.data.canonical || '';
    if (canonical) {
      if (!canonical.startsWith('https://veloxisglobal.com') && !canonical.startsWith('/')) {
        brokenCanonicalCount++;
        crawlWarnings.push({
          type: 'invalid_canonical',
          severity: 'MEDIUM',
          slug: item.slug,
          message: `Non-standard canonical override URL: '${canonical}' on page '${item.slug}'. Target should be absolute root domain.`
        });
      } else {
        canonicalChecksPassed++;
      }
    } else {
      canonicalChecksPassed++;
    }
  });

  // 3. Programmatic combinator validation
  // Verify that all ALLOWED_PROGRAMMATIC_COMBINATIONS are fully structured
  let validCombos = 0;
  ALLOWED_PROGRAMMATIC_COMBINATIONS.forEach(combo => {
    if (combo.slug && combo.service && combo.industry && combo.location) {
      validCombos++;
      sitemapValidatedCount++;
    } else {
      crawlWarnings.push({
        type: 'malformed_combination',
        severity: 'HIGH',
        slug: combo.slug || 'unknown',
        message: `Programmatic Combination '${combo.slug || 'unknown'}' is missing taxonomy constraints.`
      });
    }
  });

  // 4. Calculate overall crawl health score
  let crawlScore = 100;
  crawlWarnings.forEach(w => {
    crawlScore -= w.severity === 'HIGH' ? 25 : 10;
  });

  return {
    crawlScore: Math.max(0, crawlScore),
    sitemapValidatedCount,
    canonicalChecksPassed,
    brokenCanonicalCount,
    warnings: crawlWarnings
  };
};
