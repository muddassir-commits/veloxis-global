/**
 * Real Authority Acquisition & Backlink Prioritization Planner
 * 
 * Scores pages based on convertibility metrics and reinforcement weights
 * to generate optimized link outreach roadmaps and cluster expansion plans.
 */

import { contentRegistry } from '../content.js';
import { diagnoseAuthorityFlow } from '../intelligence/authorityDiagnostics.js';

export const scoreAuthorityPriorities = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  const diagnostics = diagnoseAuthorityFlow();

  const acquisitionPlans = [];
  
  // 1. Score published pages based on their converted SEO landing capabilities
  publishedItems.forEach(item => {
    let priorityScore = 50; // base priority
    
    // Services get a baseline multiplier since they are transactional
    if (item.collection === 'services') {
      priorityScore += 35;
    }
    
    // Pages with low inbound count get priority boost to distribute authority
    const pageUrl = item.collection === 'services' && item.data.slug ? `/${item.data.slug}` : `/${item.collection}/${item.slug}`;
    const inbound = item.inboundCount || 0;
    if (inbound === 0) {
      priorityScore += 10;
    }

    // Set keyword hook anchors based on tag structures
    const tags = item.data.tags || ['ai automation'];
    const primaryTag = tags[0] || 'ai automation';
    
    let suggestedAnchors = [];
    if (primaryTag.includes('n8n')) {
      suggestedAnchors = ['n8n workflow services', 'n8n automation consultant', 'custom n8n agency'];
    } else if (primaryTag.includes('automation')) {
      suggestedAnchors = ['ai lead routing systems', 'automated workflow agency', 'business process automation'];
    } else {
      suggestedAnchors = ['veloxis global services', 'ai growth consultation', 'semantic seo audits'];
    }

    acquisitionPlans.push({
      slug: item.slug,
      title: item.data.title || item.slug,
      url: pageUrl,
      collection: item.collection,
      priorityScore,
      suggestedAnchors,
      targetOutreachHubs: ['Tech Blogs', 'SaaS Business Directories', 'Fintech Review Platforms']
    });
  });

  // Sort by highest outreach priority first
  acquisitionPlans.sort((a, b) => b.priorityScore - a.priorityScore);

  // 2. Identify top Cluster Expansion Targets (clusters with high skews or weak reinforcements)
  const expansionTargets = [];
  const reinforcementGaps = diagnostics.reinforcementGaps;
  
  reinforcementGaps.forEach(gap => {
    expansionTargets.push({
      cluster: gap.serviceName,
      reason: gap.message,
      valueYield: gap.severity === 'HIGH' ? 95 : 75,
      suggestedTitle: `How to implement ${gap.serviceName} workflows`
    });
  });

  // Default targets if everything is pristine
  if (expansionTargets.length === 0) {
    expansionTargets.push({
      cluster: 'n8n-workflows',
      reason: 'Perfect supporting network. Expand topical dominance with comparison guides.',
      valueYield: 60,
      suggestedTitle: 'Why n8n dominates enterprise workflow scheduling'
    });
  }

  return {
    priorityRoadmap: acquisitionPlans,
    clusterExpansionTargets: expansionTargets
  };
};
