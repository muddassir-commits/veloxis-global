/**
 * Content Health Diagnostics Engine
 * 
 * Audits markdown articles dynamically for stale updates, thin word counts,
 * duplicate metadata, missing schemas, and semantic cannibalization.
 */

import { contentRegistry } from '../content.js';

/**
 * Extracts all internal markdown URLs referenced in a page body.
 */
const extractOutgoingLinks = (markdownText) => {
  const links = [];
  if (!markdownText) return links;
  
  // Matches markdown links [AnchorText](/url-slug)
  const linkRegex = /\[.*?\]\(((?:\/|\.\/|\.\.\/)[^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(markdownText)) !== null) {
    links.push(match[1]);
  }
  return links;
};

/**
 * Calculates Jaccard token similarity between two strings to detect semantic cannibalization.
 */
const calculateTokenSimilarity = (strA, strB) => {
  const tokensA = new Set(strA.toLowerCase().split(/\W+/).filter(w => w.length > 2));
  const tokensB = new Set(strB.toLowerCase().split(/\W+/).filter(w => w.length > 2));
  
  if (tokensA.size === 0 || tokensB.size === 0) return 0;
  
  const intersection = new Set([...tokensA].filter(x => tokensB.has(x)));
  const union = new Set([...tokensA, ...tokensB]);
  
  return intersection.size / union.size;
};

export const analyzeContentHealth = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  // 1. Pre-scan all outgoing links to calculate incoming link coverage (detect orphans)
  const incomingLinkCounts = {};
  publishedItems.forEach(item => {
    const slugKey = `/${item.collection}/${item.slug}`;
    incomingLinkCounts[slugKey] = 0;
    incomingLinkCounts[`/${item.slug}`] = 0; // Legacy overrides
  });

  publishedItems.forEach(item => {
    const outgoingLinks = extractOutgoingLinks(item.content);
    outgoingLinks.forEach(link => {
      // Standardize relative links
      const cleanLink = link.split('#')[0].trim();
      if (incomingLinkCounts[cleanLink] !== undefined) {
        incomingLinkCounts[cleanLink]++;
      }
    });
  });

  // 2. Track metadata descriptions to detect duplicates
  const metaDescriptions = {};
  publishedItems.forEach(item => {
    const desc = item.data.description || '';
    if (desc.trim()) {
      if (!metaDescriptions[desc]) {
        metaDescriptions[desc] = [];
      }
      metaDescriptions[desc].push(item.slug);
    }
  });

  const healthScores = [];
  const globalIssues = [];

  // 3. Process each page's specific health indicators
  publishedItems.forEach(item => {
    const content = item.content || '';
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const dateStr = item.data.date || new Date().toISOString().split('T')[0];
    const daysOld = Math.ceil(Math.abs(new Date() - new Date(dateStr)) / (1000 * 60 * 60 * 24));
    
    const pageUrl = item.collection === 'services' && item.data.slug ? `/${item.data.slug}` : `/${item.collection}/${item.slug}`;
    const inboundCount = incomingLinkCounts[pageUrl] || 0;

    let pageScore = 100;
    const issues = [];

    // Check 1: Thin Content
    if (wordCount < 250) {
      pageScore -= 30;
      issues.push({
        type: 'thin_content',
        severity: 'HIGH',
        message: `Thin content detected (${wordCount} words). Add depth to improve crawl value.`
      });
    } else if (wordCount < 500) {
      pageScore -= 10;
      issues.push({
        type: 'thin_content',
        severity: 'LOW',
        message: `Short body length (${wordCount} words). Expand with local proof cases.`
      });
    }

    // Check 2: Stale Content
    if (daysOld > 180) {
      pageScore -= 20;
      issues.push({
        type: 'stale_content',
        severity: 'MEDIUM',
        message: `Content last updated ${daysOld} days ago. Refresh core tech recommendations.`
      });
    }

    // Check 3: Orphan Page Detection
    if (inboundCount === 0) {
      pageScore -= 25;
      issues.push({
        type: 'orphan_content',
        severity: 'HIGH',
        message: `Orphan page detected. No inbound internal link binding discovered from other pages.`
      });
    }

    // Check 4: Duplicate Metadata
    const desc = item.data.description || '';
    if (desc && metaDescriptions[desc] && metaDescriptions[desc].length > 1) {
      pageScore -= 15;
      issues.push({
        type: 'duplicate_meta',
        severity: 'MEDIUM',
        message: `Duplicate meta description shared with: ${metaDescriptions[desc].filter(s => s !== item.slug).join(', ')}.`
      });
    }

    // Check 5: Weak Schema Coverage
    if (!item.data.schema && !item.data.faqs) {
      pageScore -= 15;
      issues.push({
        type: 'weak_schema',
        severity: 'MEDIUM',
        message: 'No structured FAQ frontmatter or schema metadata declared.'
      });
    }

    // Check 6: Weak Internal Outgoing Links
    const outgoing = extractOutgoingLinks(content);
    if (outgoing.length < 2) {
      pageScore -= 10;
      issues.push({
        type: 'weak_outbound',
        severity: 'LOW',
        message: `Only ${outgoing.length} outbound link(s) found. Increase semantic cross-linking.`
      });
    }

    healthScores.push({
      slug: item.slug,
      title: item.data.title || item.slug,
      collection: item.collection,
      score: Math.max(0, pageScore),
      url: pageUrl,
      wordCount,
      daysOld,
      inboundCount,
      outboundCount: outgoing.length,
      issues
    });
  });

  // 4. Cross-page Semantic Cannibalization Audit (Token overlap similarity > 75%)
  for (let i = 0; i < publishedItems.length; i++) {
    for (let j = i + 1; j < publishedItems.length; j++) {
      const itemA = publishedItems[i];
      const itemB = publishedItems[j];
      
      const similarity = calculateTokenSimilarity(itemA.data.title || '', itemB.data.title || '');
      if (similarity > 0.70) {
        const severity = similarity > 0.85 ? 'HIGH' : 'MEDIUM';
        globalIssues.push({
          type: 'semantic_cannibalization',
          severity,
          similarityScore: parseFloat(similarity.toFixed(2)),
          pages: [itemA.slug, itemB.slug],
          message: `Semantic title overlap of ${(similarity * 100).toFixed(0)}% between '${itemA.slug}' and '${itemB.slug}'. Merge or link them using weighted anchors.`
        });
      }
    }
  }

  const averageScore = healthScores.length > 0 
    ? Math.round(healthScores.reduce((sum, current) => sum + current.score, 0) / healthScores.length)
    : 100;

  return {
    averageScore,
    pages: healthScores,
    globalIssues
  };
};
