/**
 * Semantic Recommendation & Growth Engine
 * 
 * Analyzes content diagnostics, crawl logs, and topical gaps
 * to dynamically compile real, highly actionable growth recommendations.
 */

import { analyzeContentHealth } from './contentHealth.js';
import { diagnoseAuthorityFlow } from './authorityDiagnostics.js';
import { runCrawlDiagnostics } from './crawlDiagnostics.js';

export const generateRealRecommendations = () => {
  const healthResults = analyzeContentHealth();
  const authorityResults = diagnoseAuthorityFlow();
  const crawlResults = runCrawlDiagnostics();

  const recommendations = [];

  // 1. Map Orphan Chunks & Link Gaps
  healthResults.pages.forEach(page => {
    if (page.score < 80) {
      // Find specific issue triggers
      page.issues.forEach(issue => {
        if (issue.type === 'orphan_content') {
          recommendations.push({
            id: `rec-orphan-${page.slug}`,
            category: 'INTERNAL_LINKING',
            title: `Link to orphan page: '${page.title}'`,
            impact: 'HIGH',
            valueYield: 90,
            suggestion: `The page '${page.url}' has zero incoming links. Link to it from related articles sharing tags like: [${page.issues.find(i=>i.type==='weak_schema') ? 'ai-automation' : 'saas'}] using exact anchor contexts.`,
            action: `Edit an authoritative sibling block to insert an outbound link pointing to '${page.url}'.`
          });
        }
        
        if (issue.type === 'stale_content') {
          recommendations.push({
            id: `rec-stale-${page.slug}`,
            category: 'CONTENT_FRESHNESS',
            title: `Refresh stale page: '${page.title}'`,
            impact: 'MEDIUM',
            valueYield: 75,
            suggestion: `Last updated ${page.daysOld} days ago. Modern LLMs and search crawls prioritize fresh datasets.`,
            action: `Audit current technical processes on '/${page.collection}/${page.slug}', update tags, and update frontmatter date to today.`
          });
        }

        if (issue.type === 'weak_schema') {
          recommendations.push({
            id: `rec-schema-${page.slug}`,
            category: 'METADATA_SCHEMA',
            title: `Inject FAQ schemas to: '${page.title}'`,
            impact: 'MEDIUM',
            valueYield: 65,
            suggestion: `This page is missing structured FAQ arrays. Adding FAQs boosts semantic retrieval confidence and unlocks google Rich snippets.`,
            action: `Add a 'faqs' schema block to frontmatter with 3 key transactional questions.`
          });
        }

        if (issue.type === 'thin_content') {
          recommendations.push({
            id: `rec-thin-${page.slug}`,
            category: 'CONTENT_CREATION',
            title: `Expand thin content: '${page.title}'`,
            impact: 'HIGH',
            valueYield: 80,
            suggestion: `This page contains only ${page.wordCount} words. Content under 250 words offers low search and RAG value.`,
            action: `Expand the body with n8n workflow blueprints, step-by-step guides, or industry case integrations.`
          });
        }
      });
    }
  });

  // 2. Map Topical Reinforcement Gaps
  authorityResults.reinforcementGaps.forEach(gap => {
    recommendations.push({
      id: `rec-reinforcement-${gap.serviceId}`,
      category: 'CONTENT_CREATION',
      title: `Build supporting articles for '${gap.serviceName}'`,
      impact: gap.severity === 'HIGH' ? 'HIGH' : 'MEDIUM',
      valueYield: gap.severity === 'HIGH' ? 85 : 60,
      suggestion: gap.message,
      action: `Publish comparison or guide blogs targeting tags associated with ${gap.serviceId} (e.g. n8n, airtable, lead routing).`
    });
  });

  // 3. Map Semantic Cannibalization Issues
  healthResults.globalIssues.forEach((issue, idx) => {
    if (issue.type === 'semantic_cannibalization') {
      recommendations.push({
        id: `rec-cannibalization-${idx}`,
        category: 'CONTENT_OPTIMIZATION',
        title: `Resolve title overlap: '${issue.pages[0]}' vs '${issue.pages[1]}'`,
        impact: 'MEDIUM',
        valueYield: 70,
        suggestion: issue.message,
        action: `Audit both slugs. Consider merging them into a unified guide or diversifying title tags to capture different user intents.`
      });
    }
  });

  // 4. Map Crawl Crawl Warnings
  crawlResults.warnings.forEach(warning => {
    recommendations.push({
      id: `rec-crawl-${warning.type}-${warning.slug}`,
      category: 'CRAWL_DIAGNOSTICS',
      title: `Fix sitemap duplicate: '${warning.slug}'`,
      impact: 'HIGH',
      valueYield: 95,
      suggestion: warning.message,
      action: `Ensure slug configurations inside markdown frontmatters are completely unique.`
    });
  });

  // Default fallback recommendations if everything is perfect
  if (recommendations.length === 0) {
    recommendations.push({
      id: 'rec-default-perfect',
      category: 'CONTENT_CREATION',
      title: 'Maintain topical expansion strategy',
      impact: 'LOW',
      valueYield: 50,
      suggestion: 'All pages are highly structured, fully linked, fresh, and correctly mapped in the sitemap. Expand topical authority by drafting comparison articles.',
      action: 'Draft comparison-n8n-vs-zapier or comparison-make-vs-zapier.'
    });
  }

  // Sort by Value Yield descending (prioritize highest impact actions)
  return recommendations.sort((a, b) => b.valueYield - a.valueYield);
};
export const getActionableRecommendationSummary = () => {
  const all = generateRealRecommendations();
  return {
    totalCount: all.length,
    highImpactCount: all.filter(r => r.impact === 'HIGH').length,
    recommendations: all
  };
};
