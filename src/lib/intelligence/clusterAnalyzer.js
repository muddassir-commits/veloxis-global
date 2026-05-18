/**
 * Topical Cluster & Semantic Overlap Analyzer
 * 
 * Aggregates taxonomy tags, maps supporting page counts per cluster,
 * and calculates total crawl weight distributions across the site.
 */

import { contentRegistry } from '../content.js';

export const analyzeTopicalClusters = () => {
  const publishedItems = contentRegistry.filter(item => item.status === 'published');
  
  const clusters = {};
  
  publishedItems.forEach(item => {
    const tags = item.data.tags || ['general'];
    const authority = item.collection === 'services' ? 1.0 : 0.7;

    tags.forEach(tag => {
      const cleanTag = tag.toLowerCase().trim();
      
      if (!clusters[cleanTag]) {
        clusters[cleanTag] = {
          name: tag,
          count: 0,
          totalAuthority: 0,
          pages: []
        };
      }
      
      clusters[cleanTag].count++;
      clusters[cleanTag].totalAuthority += authority;
      clusters[cleanTag].pages.push(item.slug);
    });
  });

  // Calculate average authority and structure reports
  const clusterReports = Object.keys(clusters).map(tagKey => {
    const c = clusters[tagKey];
    return {
      tag: c.name,
      count: c.count,
      totalAuthority: parseFloat(c.totalAuthority.toFixed(2)),
      averageAuthority: parseFloat((c.totalAuthority / c.count).toFixed(2)),
      pages: c.pages
    };
  });

  // Sort by total authority descending
  clusterReports.sort((a, b) => b.totalAuthority - a.totalAuthority);

  return {
    totalClusters: clusterReports.length,
    clusters: clusterReports
  };
};
