import { ENTITY_GRAPH } from '../data/programmatic/entities.js';
import { getCombinationBySlug } from '../data/programmatic/combinations.js';

/**
 * Programmatic SEO Composition Engine & Breadcrumb Hierarchy Engine
 * 
 * Dynamically resolves, validates, and composes virtual programmatic landing pages
 * based on whitelisted entity pairings, making pages completely unique and rich
 * in semantic entity relationship connections.
 */

export const composeProgrammaticPage = (slug) => {
  // 1. Resolve and Validate via SEO Combination Firewall
  const combo = getCombinationBySlug(slug);
  if (!combo) return null;

  // 2. Resolve Graph Nodes & Relationships
  const serviceNode = ENTITY_GRAPH.services[combo.service] || null;
  const industryNode = combo.industry ? (ENTITY_GRAPH.industries[combo.industry] || null) : null;
  const locationNode = combo.location ? (ENTITY_GRAPH.locations[combo.location] || null) : null;
  const competitorNode = combo.competitor ? (ENTITY_GRAPH.competitors[combo.competitor] || null) : null;

  // Enforce Quality Threshold: Minimum richness validation (must have at least service + another entity)
  if (!serviceNode || (!industryNode && !locationNode && !competitorNode)) {
    console.warn(`[SEO Quality Gate] Entity richness below threshold for slug: ${slug}`);
    return null;
  }

  // 3. Build Breadcrumb Hierarchy
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' }
  ];

  if (serviceNode.parent) {
    const parentService = ENTITY_GRAPH.services[serviceNode.parent];
    if (parentService) {
      breadcrumbs.push({ label: parentService.name, path: `/${parentService.id}` });
    }
  }
  breadcrumbs.push({ label: serviceNode.name, path: `/${serviceNode.id}` });

  if (industryNode) {
    breadcrumbs.push({ label: industryNode.name, path: `/${combo.slug}` });
  } else if (locationNode) {
    breadcrumbs.push({ label: locationNode.name, path: `/${combo.slug}` });
  } else if (competitorNode) {
    breadcrumbs.push({ label: `vs ${competitorNode.name}`, path: `/${combo.slug}` });
  }

  // 4. Intent-Aware Layout Composition & CTA Logic
  let ctaTitle = 'Book a Free Workflow Audit';
  let ctaSubtitle = 'See how we can design custom AI automation tailored for your growth.';
  let ctaAction = 'Get Strategy Call';

  if (combo.intent === 'local') {
    ctaTitle = `Scale Your ${locationNode.name} Business Today`;
    ctaSubtitle = `Talk to our local consultants in ${locationNode.name} to optimize your CRM and outreach.`;
    ctaAction = `Book ${locationNode.name} Consultation`;
  } else if (combo.intent === 'comparison') {
    ctaTitle = 'Tired of High Automation Fees?';
    ctaSubtitle = `Migrate from Zapier to custom self-hosted n8n workflows with zero task quotas.`;
    ctaAction = 'Migrate to n8n';
  } else if (combo.intent === 'commercial' && industryNode) {
    ctaTitle = `Automate Your ${industryNode.name} Pipeline`;
    ctaSubtitle = `Stop copy-pasting data. Book a custom process map audit for your ${industryNode.name} agency.`;
    ctaAction = `Audit My ${industryNode.name} Agency`;
  }

  // 5. Unique Semantic Content Blocks Composition
  const composedData = {
    slug: combo.slug,
    intent: combo.intent,
    schemaType: combo.schemaType,
    title: combo.titlePattern,
    shortDesc: combo.descPattern,
    breadcrumbs,
    seo: {
      title: `${combo.titlePattern} | Veloxis Global`,
      description: combo.descPattern,
      schemaType: combo.schemaType
    },
    hero: {
      badge: combo.intent.toUpperCase() + ' ARCHITECTURE',
      title: combo.titlePattern,
      subtitle: combo.descPattern
    },
    cta: {
      title: ctaTitle,
      subtitle: ctaSubtitle,
      action: ctaAction
    },
    
    // Dynamic Pain Points & Examples (Ensures Contextual Uniqueness)
    painPoints: industryNode ? Object.keys(industryNode.specificPainPoints).map(key => ({
      id: key,
      title: key.replace('-', ' ').toUpperCase(),
      desc: industryNode.specificPainPoints[key]
    })) : [],
    
    examples: industryNode ? industryNode.useCaseExamples : (locationNode ? locationNode.localExamples : []),

    faqs: [
      ...(serviceNode.faqs || []),
      ...(industryNode ? (industryNode.faqs || []) : [])
    ],

    proof: serviceNode.proof,

    // Dynamic Graph Relationships for internal linking blocks
    relationships: {
      parentService: serviceNode.parent ? ENTITY_GRAPH.services[serviceNode.parent] : null,
      childServices: serviceNode.children.map(cId => ENTITY_GRAPH.services[cId]).filter(Boolean),
      technologies: serviceNode.relatedTechnologies,
      competitor: competitorNode
    }
  };

  return composedData;
};
