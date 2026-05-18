/**
 * Funnel Intelligence & Leak Analyzer
 * 
 * Maps transitions between Awareness, Consideration, and Decision pages,
 * detecting "funnel gaps" where informational assets fail to route users to conversion pages.
 */

import { scoreContentConversionIntent } from '../conversion/conversionEngine.js';
import { contentRegistry } from '../content.js';

export const mapFunnels = () => {
  const { reports } = scoreContentConversionIntent();
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  const funnelGaps = [];
  let conversionLeakCount = 0;
  
  reports.forEach(report => {
    // If it's an Awareness (TOFU) or Consideration (MOFU) article, check if it points to any Decision (BOFU) service page
    if (report.intentStage === 'Awareness' || report.intentStage === 'Consideration') {
      const registryItem = publishedItems.find(item => item.slug === report.slug);
      
      if (registryItem) {
        const bodyContent = registryItem.data.content || '';
        
        // Scan for links pointing to service landing pages (e.g. '/services/', '/ai-automation-services', etc.)
        const hasServiceLink = bodyContent.includes('/services') || 
                               bodyContent.includes('-services') || 
                               bodyContent.includes('/automation/') ||
                               bodyContent.includes('/lead-generation');

        if (!hasServiceLink) {
          conversionLeakCount++;
          funnelGaps.push({
            slug: report.slug,
            title: report.title,
            currentStage: report.intentStage,
            leakSeverity: report.intentStage === 'Consideration' ? 'HIGH' : 'MEDIUM',
            message: `Funnel Gap: High engagement page lacks outbound pathways to conversion pages.`,
            recommendedAction: `Insert a contextual CTA or linking block pointing to '/services' or a related combinator route.`
          });
        }
      }
    }
  });

  // Calculate Funnel Health Index
  const totalInformational = reports.filter(r => r.intentStage !== 'Decision').length;
  const healthIndex = totalInformational > 0 
    ? Math.round(((totalInformational - conversionLeakCount) / totalInformational) * 100)
    : 100;

  return {
    funnelHealthIndex: Math.max(0, healthIndex),
    totalLeaks: conversionLeakCount,
    funnelGaps
  };
};
