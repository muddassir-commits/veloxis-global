/**
 * Retrieval & Knowledge Intelligence Engine (RAG Core)
 * 
 * Dynamically converts the physical CMS and entity graphs into an AI-readable semantic 
 * knowledge index. Implements browser-safe, zero-dependency cosine similarity search 
 * and source-stitched prompt assembly.
 */

import { contentRegistry } from '../content.js';
import { ENTITY_GRAPH } from '../../data/programmatic/entities.js';
import { ALLOWED_PROGRAMMATIC_COMBINATIONS } from '../../data/programmatic/combinations.js';
import { TYPE_RETRIEVAL_WEIGHTS, RETRIEVABLE_TYPES, INTENT_CLASSIFICATIONS } from '../../data/knowledge/knowledgeRegistry.js';

// Cache for built chunks to avoid redundant parsing in production
let memoizedChunks = null;

/**
 * Generates a stable, deterministic 384-dimension mock vector embedding for text.
 * Uses a mathematical word-hashing distribution to ensure query words directly align 
 * with content dimensions, yielding genuine non-zero cosine similarity.
 */
export const generateStableEmbedding = (text) => {
  const dims = 384;
  const embedding = new Array(dims).fill(0);
  const words = text.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  
  if (words.length === 0) return embedding;

  words.forEach(word => {
    // Generate simple deterministic hash for the word
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      hash = word.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Distribute the word weight across 3 distinct pseudo-random dimensions
    for (let i = 0; i < 3; i++) {
      const idx = Math.abs((hash + i * 101) % dims);
      embedding[idx] += 1.0;
    }
  });

  // Perform L2 Normalization
  let sumSq = 0;
  for (let i = 0; i < dims; i++) {
    sumSq += embedding[i] * embedding[i];
  }
  const norm = Math.sqrt(sumSq);
  if (norm > 0) {
    for (let i = 0; i < dims; i++) {
      embedding[i] /= norm;
    }
  }
  return embedding;
};

/**
 * Calculates standard cosine similarity between two vectors.
 */
export const cosineSimilarity = (vecA, vecB) => {
  if (vecA.length !== vecB.length) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return normA === 0 || normB === 0 ? 0 : dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
};

/**
 * Ingests Markdown files and the central Entity Relationship Graph,
 * segmenting them into discrete, retrieval-safe knowledge blocks.
 */
export const buildSemanticChunks = () => {
  if (memoizedChunks) return memoizedChunks;

  const chunks = [];

  // ==========================================
  // Part 1: Chunking the Markdown CMS Articles
  // ==========================================
  contentRegistry.forEach(item => {
    if (item.status !== 'published') return;

    const content = item.content || '';
    const title = item.data.title || 'Untitled';
    const slug = item.slug;
    const collection = item.collection;

    // Segment markdown into sections based on H2/H3 headers
    const lines = content.split('\n');
    let currentHeader = '';
    let currentLines = [];
    let sectionIdx = 0;

    const saveMarkdownChunk = (header, linesBlock) => {
      const body = linesBlock.join('\n').trim();
      if (body.length < 50) return; // Skip thin noise

      const chunkId = `markdown-${collection}-${slug}-sec-${sectionIdx++}`;
      const chunkText = `# ${title} - ${header || 'Overview'}\n${body}`;

      // Dynamically classify intent
      let intent = INTENT_CLASSIFICATIONS.INFORMATIONAL;
      if (collection === 'services' || body.toLowerCase().includes('consultation') || body.toLowerCase().includes('lead')) {
        intent = INTENT_CLASSIFICATIONS.COMMERCIAL;
      }

      // Map chunk types
      let type = RETRIEVABLE_TYPES.IMPLEMENTATION;
      const lowerHeader = header.toLowerCase();
      if (lowerHeader.includes('faq') || lowerHeader.includes('question')) {
        type = RETRIEVABLE_TYPES.FAQ;
      } else if (lowerHeader.includes('workflow') || lowerHeader.includes('capabilities') || lowerHeader.includes('how')) {
        type = RETRIEVABLE_TYPES.WORKFLOW;
      } else if (lowerHeader.includes('metric') || lowerHeader.includes('impact') || lowerHeader.includes('case')) {
        type = RETRIEVABLE_TYPES.PROOF;
      }

      chunks.push({
        id: chunkId,
        type,
        content: chunkText,
        sourceUrl: collection === 'services' && item.data.slug ? `/${item.data.slug}` : `/${collection}/${slug}`,
        metadata: {
          intent,
          confidence: 0.90,
          tags: item.data.tags || [],
          authority: TYPE_RETRIEVAL_WEIGHTS[collection] || 0.7,
          canonicalOwner: title,
          embeddingMock: generateStableEmbedding(chunkText),
          lastUpdated: item.data.date || new Date().toISOString().split('T')[0]
        }
      });
    };

    lines.forEach(line => {
      if (line.startsWith('## ') || line.startsWith('### ')) {
        if (currentLines.length > 0 || currentHeader) {
          saveMarkdownChunk(currentHeader, currentLines);
        }
        currentHeader = line.replace(/^###?\s+/, '').trim();
        currentLines = [];
      } else {
        currentLines.push(line);
      }
    });

    if (currentLines.length > 0 || currentHeader) {
      saveMarkdownChunk(currentHeader, currentLines);
    }
  });

  // ==========================================
  // Part 2: Chunking the Semantic Entity Graph
  // ==========================================
  
  // 2.1 Chunking Services
  Object.keys(ENTITY_GRAPH.services).forEach(sId => {
    const service = ENTITY_GRAPH.services[sId];
    const canonicalName = service.name;
    const baseSlug = sId === 'ai-automation' ? 'ai-automation-services' : sId;

    // Service Summary Chunk
    const summaryText = `Service Profile: ${service.name}\nDescription: ${service.shortDesc}\nTechnologies Used: ${service.relatedTechnologies.join(', ')}`;
    chunks.push({
      id: `entity-service-${sId}-summary`,
      type: RETRIEVABLE_TYPES.SUMMARY,
      content: summaryText,
      sourceUrl: `/${baseSlug}`,
      metadata: {
        intent: INTENT_CLASSIFICATIONS.COMMERCIAL,
        confidence: 0.95,
        tags: service.relatedTechnologies,
        authority: TYPE_RETRIEVAL_WEIGHTS.service,
        canonicalOwner: canonicalName,
        embeddingMock: generateStableEmbedding(summaryText),
        lastUpdated: '2026-05-17'
      }
    });

    // FAQs Chunks
    if (service.faqs) {
      service.faqs.forEach((faq, idx) => {
        const faqText = `Question: ${faq.q}\nAnswer: ${faq.a}`;
        chunks.push({
          id: `entity-service-${sId}-faq-${idx}`,
          type: RETRIEVABLE_TYPES.FAQ,
          content: faqText,
          sourceUrl: `/${baseSlug}`,
          metadata: {
            intent: INTENT_CLASSIFICATIONS.INFORMATIONAL,
            confidence: 0.98,
            tags: service.relatedTechnologies.concat(['faq']),
            authority: TYPE_RETRIEVAL_WEIGHTS.faq,
            canonicalOwner: canonicalName,
            embeddingMock: generateStableEmbedding(faqText),
            lastUpdated: '2026-05-17'
          }
        });
      });
    }

    // Proof Metrics Chunk
    if (service.proof) {
      const proofText = `Performance Metric: ${service.proof.metric}\nResult Label: ${service.proof.label}\nReal Case Example: ${service.proof.caseStudy}`;
      chunks.push({
        id: `entity-service-${sId}-proof`,
        type: RETRIEVABLE_TYPES.PROOF,
        content: proofText,
        sourceUrl: `/${baseSlug}`,
        metadata: {
          intent: INTENT_CLASSIFICATIONS.COMMERCIAL,
          confidence: 0.96,
          tags: ['metrics', 'analytics', 'success'],
          authority: TYPE_RETRIEVAL_WEIGHTS.proof,
          canonicalOwner: canonicalName,
          embeddingMock: generateStableEmbedding(proofText),
          lastUpdated: '2026-05-17'
        }
      });
    }
  });

  // 2.2 Chunking Industries & Geolocations
  Object.keys(ENTITY_GRAPH.industries).forEach(indId => {
    const industry = ENTITY_GRAPH.industries[indId];
    const indName = industry.name;

    // Use-case example chunk
    if (industry.useCaseExamples) {
      industry.useCaseExamples.forEach((uc, idx) => {
        const ucText = `Industry: ${indName}\nTarget Audience: ${industry.targetAudience}\nUse Case Blueprint: ${uc.title}\nDescription: ${uc.desc}`;
        chunks.push({
          id: `entity-industry-${indId}-uc-${idx}`,
          type: RETRIEVABLE_TYPES.WORKFLOW,
          content: ucText,
          sourceUrl: `/ai-automation-for-${indId}`,
          metadata: {
            intent: INTENT_CLASSIFICATIONS.COMMERCIAL,
            confidence: 0.94,
            tags: [indId, 'use-case', 'blueprint'],
            authority: TYPE_RETRIEVAL_WEIGHTS.workflow,
            canonicalOwner: indName,
            embeddingMock: generateStableEmbedding(ucText),
            lastUpdated: '2026-05-17'
          }
        });
      });
    }
  });

  Object.keys(ENTITY_GRAPH.locations).forEach(locId => {
    const location = ENTITY_GRAPH.locations[locId];
    if (location.localExamples) {
      location.localExamples.forEach((ex, idx) => {
        const locText = `Location: ${location.name}\nMarket Context: ${location.marketContext}\nRegional Implementation: ${ex.title}\nDescription: ${ex.desc}`;
        const targetCombo = ALLOWED_PROGRAMMATIC_COMBINATIONS.find(c => c.location === locId);
        const sourceUrl = targetCombo ? `/${targetCombo.slug}` : '/';

        chunks.push({
          id: `entity-location-${locId}-ex-${idx}`,
          type: RETRIEVABLE_TYPES.LOCAL,
          content: locText,
          sourceUrl,
          metadata: {
            intent: INTENT_CLASSIFICATIONS.LOCAL,
            confidence: 0.92,
            tags: [locId, 'local-study'],
            authority: TYPE_RETRIEVAL_WEIGHTS.programmatic,
            canonicalOwner: location.name,
            embeddingMock: generateStableEmbedding(locText),
            lastUpdated: '2026-05-17'
          }
        });
      });
    }
  });

  memoizedChunks = chunks;
  return chunks;
};

/**
 * Searches the dynamic semantic chunk registry using a unified 
 * keyword token overlap and deterministic vector cosine similarity index.
 */
export const queryKnowledge = (queryText, options = {}) => {
  const allChunks = buildSemanticChunks();
  const queryWords = queryText.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const queryVec = generateStableEmbedding(queryText);

  const results = allChunks.map(chunk => {
    // 1. Vector similarity
    const semanticSim = cosineSimilarity(queryVec, chunk.metadata.embeddingMock);

    // 2. Keyword lexical overlap score
    const contentLower = chunk.content.toLowerCase();
    let keywordOverlap = 0;
    queryWords.forEach(word => {
      if (contentLower.includes(word)) {
        keywordOverlap += 1.0;
      }
    });
    const lexicalSim = queryWords.length > 0 ? (keywordOverlap / queryWords.length) : 0;

    // 3. Combined retrieval score (weighted semantic + lexical + authority modifier)
    const rawScore = (semanticSim * 0.7) + (lexicalSim * 0.3);
    const finalScore = rawScore * chunk.metadata.authority;

    return {
      ...chunk,
      retrievalScore: parseFloat(finalScore.toFixed(4)),
      matchMetrics: {
        semantic: parseFloat(semanticSim.toFixed(4)),
        lexical: parseFloat(lexicalSim.toFixed(4))
      }
    };
  });

  // Filter out zero matching scores and sort descending
  let filtered = results.filter(r => r.retrievalScore > 0.05);

  if (options.intent) {
    filtered = filtered.filter(r => r.metadata.intent === options.intent);
  }
  if (options.type) {
    filtered = filtered.filter(r => r.type === options.type);
  }

  filtered.sort((a, b) => b.retrievalScore - a.retrievalScore);

  const limit = options.limit || 5;
  return filtered.slice(0, limit);
};

/**
 * Assembles and stitches retrieved semantic chunks into a highly clear, 
 * XML-encapsulated context block optimized for downstream AI retrieval or RAG queries.
 */
export const assembleContextPrompt = (queryText, limit = 5) => {
  const topMatches = queryKnowledge(queryText, { limit });
  if (topMatches.length === 0) {
    return `<KnowledgeContext query="${queryText}" status="NO_RELEVANT_CHUNKS" />`;
  }

  let prompt = `<KnowledgeContext query="${queryText}" totalChunks="${topMatches.length}">\n`;
  topMatches.forEach((chunk, index) => {
    prompt += `  <SourceChunk id="${chunk.id}" type="${chunk.type}" source="${chunk.sourceUrl}" authority="${chunk.metadata.authority}" confidence="${chunk.metadata.confidence}">\n`;
    prompt += `    <![CDATA[\n`;
    prompt += `    ${chunk.content.trim().replace(/\n/g, '\n    ')}\n`;
    prompt += `    ]]>\n`;
    prompt += `  </SourceChunk>\n`;
  });
  prompt += `</KnowledgeContext>`;

  return prompt;
};

/**
 * Governance Safeguard: Verifies that assertions within generated answers 
 * are traceable back to verified chunks in the assembled context to prevent hallucinations.
 */
export const validateContextTraceability = (assembledContextText, generatedAnswerText) => {
  if (!assembledContextText || !generatedAnswerText) {
    return { risk: 'HIGH', score: 0.0, reason: 'Missing input verification arguments.' };
  }

  // Tokenize generated answer words to inspect presence in source
  const cleanSourceText = assembledContextText.toLowerCase().replace(/<[^>]*>/g, ' ');
  const answerWords = generatedAnswerText.toLowerCase().split(/\W+/).filter(w => w.length > 4);

  if (answerWords.length === 0) {
    return { risk: 'LOW', score: 1.0, reason: 'Answer is too short or lacks major noun assertions.' };
  }

  let matches = 0;
  const untraceableWords = [];
  
  answerWords.forEach(word => {
    if (cleanSourceText.includes(word)) {
      matches++;
    } else {
      untraceableWords.push(word);
    }
  });

  const traceabilityScore = matches / answerWords.length;
  let risk = 'LOW';
  
  if (traceabilityScore < 0.6) {
    risk = 'HIGH';
  } else if (traceabilityScore < 0.85) {
    risk = 'MEDIUM';
  }

  return {
    risk,
    score: parseFloat(traceabilityScore.toFixed(3)),
    untraceableNouns: [...new Set(untraceableWords)].slice(0, 8),
    reason: risk === 'LOW' 
      ? 'Outstanding source alignment. All key entities mapped.' 
      : `Medium/High risk of hallucination. Untraceable terms: ${untraceableWords.join(', ')}`
  };
};

/**
 * Topic Decay & Drift Audit
 * Calculates content stale factors based on age of last update.
 */
export const auditChunkTopicDecay = (chunk) => {
  const lastUpdatedStr = chunk.metadata.lastUpdated || '2026-01-01';
  const lastUpdated = new Date(lastUpdatedStr);
  const now = new Date();
  
  // Calculate difference in days
  const diffTime = Math.abs(now - lastUpdated);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  let decayFactor = 0.0;
  if (diffDays > 180) { // Older than 6 months
    decayFactor = Math.min(0.5, ((diffDays - 180) / 30) * 0.05);
  }
  
  return {
    chunkId: chunk.id,
    daysSinceUpdate: diffDays,
    decayFactor: parseFloat(decayFactor.toFixed(3)),
    needsReview: decayFactor > 0.15
  };
};
