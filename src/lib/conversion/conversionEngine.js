/**
 * Conversion Intent & CTA Selection Engine
 * 
 * Analyzes page attributes, classifies conversion intent stages, 
 * and recommends optimal CTA placements based on topical and transactional context.
 */

import { contentRegistry } from '../content.js';

export const scoreContentConversionIntent = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  const conversionReports = [];

  publishedItems.forEach(item => {
    let score = 30; // baseline score
    let intentStage = 'Awareness'; // Default TOFU
    let recommendedCtaType = 'InteractiveRAGAudit';

    const tags = item.data.tags || [];
    const isService = item.collection === 'services';
    const isBlog = item.collection === 'blog';

    // 1. Classify intent stages based on taxonomies and folder groupings
    if (isService) {
      intentStage = 'Decision'; // BOFU
      score += 55;
      recommendedCtaType = 'ConsultationPrompt';
    } else if (isBlog) {
      if (tags.some(t => t.includes('guide') || t.includes('tutorial') || t.includes('workflow'))) {
        intentStage = 'Consideration'; // MOFU
        score += 30;
        recommendedCtaType = 'CaseStudyDownload';
      } else {
        intentStage = 'Awareness'; // TOFU
        score += 10;
        recommendedCtaType = 'InteractiveRAGAudit';
      }
    } else if (item.collection === 'projects') {
      intentStage = 'Consideration';
      score += 40;
      recommendedCtaType = 'CaseStudyDownload';
    }

    // Boost scores based on link distribution density and semantic features
    const wordCount = item.data.content ? item.data.content.split(/\s+/).length : 200;
    if (wordCount > 800) {
      score += 10; // high quality content has higher engagement opportunity
    }
    
    // Cap score at 100
    const finalScore = Math.min(100, score);

    conversionReports.push({
      slug: item.slug,
      title: item.data.title || item.slug,
      url: isService && item.data.slug ? `/${item.data.slug}` : `/${item.collection}/${item.slug}`,
      collection: item.collection,
      intentStage,
      conversionPotentialScore: finalScore,
      recommendedCta: recommendedCtaType
    });
  });

  // Sort by highest conversion capability
  conversionReports.sort((a, b) => b.conversionPotentialScore - a.conversionPotentialScore);

  return {
    reports: conversionReports
  };
};
