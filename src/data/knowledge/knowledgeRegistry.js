/**
 * Centralized Knowledge Registry
 * 
 * Defines metadata schemas, intent classifications, type weights, and retrieval confidence rules
 * to govern semantic chunking and AI retrieval indexing.
 */

export const RETRIEVABLE_TYPES = {
  FAQ: 'faq',
  WORKFLOW: 'workflow',
  PROOF: 'proof',
  COMPARISON: 'comparison',
  CTA: 'cta',
  IMPLEMENTATION: 'implementation',
  SUMMARY: 'summary'
};

export const INTENT_CLASSIFICATIONS = {
  COMMERCIAL: 'commercial',
  INFORMATIONAL: 'informational',
  LOCAL: 'local',
  COMPARISON: 'comparison'
};

export const TYPE_RETRIEVAL_WEIGHTS = {
  service: 1.0,      // Primary service pages (highly authoritative)
  blog: 0.7,         // Informational blog posts
  programmatic: 0.6, // Whitelisted programmatic landers
  faq: 0.9,          // Specific Q&A blocks (high precision)
  workflow: 0.85,    // Process flows and operational blueprints
  proof: 0.95,       // Case studies and metrics (highly trustable)
  comparison: 0.8    // Competitive breakdown structures
};

/**
 * Validates a chunk against the required metadata structure.
 */
export const validateChunkMetadata = (chunk) => {
  const required = ['id', 'type', 'content', 'sourceUrl', 'metadata'];
  const missing = required.filter(field => !chunk[field]);
  
  if (missing.length > 0) {
    console.warn(`[Knowledge Registry] Chunk ${chunk.id || 'unknown'} is missing required fields: ${missing.join(', ')}`);
    return false;
  }
  
  const metaRequired = ['intent', 'confidence', 'tags', 'authority', 'canonicalOwner'];
  const metaMissing = metaRequired.filter(field => !chunk.metadata || chunk.metadata[field] === undefined);
  
  if (metaMissing.length > 0) {
    console.warn(`[Knowledge Registry] Chunk ${chunk.id} is missing metadata fields: ${metaMissing.join(', ')}`);
    return false;
  }
  
  return true;
};
