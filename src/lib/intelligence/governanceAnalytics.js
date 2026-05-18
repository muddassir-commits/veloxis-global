/**
 * Governance Intelligence & Compliance Analytics Engine
 * 
 * Aggregates chunk confidence distributions, calculates overall trust scores,
 * tracks verification coverage, and audits brand compliance metrics.
 */

import { buildSemanticChunks } from '../retrieval/retrievalEngine.js';

export const compileGovernanceMetrics = () => {
  const chunks = buildSemanticChunks();
  
  if (chunks.length === 0) {
    return {
      averageConfidence: 0.95,
      verificationCoverage: 1.0,
      hallucinationRiskTrend: 'LOW',
      totalGovernedChunks: 0,
      confidenceDistribution: { high: 0, medium: 0, low: 0 }
    };
  }

  let totalConfidence = 0;
  let highConf = 0;
  let medConf = 0;
  let lowConf = 0;
  
  let totalAuthority = 0;
  let verifiedCount = 0;

  chunks.forEach(chunk => {
    const conf = chunk.metadata.confidence || 0.9;
    const auth = chunk.metadata.authority || 0.7;
    
    totalConfidence += conf;
    totalAuthority += auth;

    // Track verified sources (chunks with authority score > 0.8)
    if (auth >= 0.8) {
      verifiedCount++;
    }

    if (conf >= 0.95) {
      highConf++;
    } else if (conf >= 0.85) {
      medConf++;
    } else {
      lowConf++;
    }
  });

  const averageConfidence = totalConfidence / chunks.length;
  const averageAuthority = totalAuthority / chunks.length;
  const verificationCoverage = verifiedCount / chunks.length;

  // Determine global hallucination trend risk
  let riskTrend = 'LOW';
  if (averageConfidence < 0.88 || lowConf > chunks.length * 0.15) {
    riskTrend = 'HIGH';
  } else if (averageConfidence < 0.93) {
    riskTrend = 'MEDIUM';
  }

  return {
    averageConfidence: parseFloat(averageConfidence.toFixed(3)),
    averageAuthority: parseFloat(averageAuthority.toFixed(3)),
    verificationCoverage: parseFloat(verificationCoverage.toFixed(3)),
    hallucinationRiskTrend: riskTrend,
    totalGovernedChunks: chunks.length,
    confidenceDistribution: {
      high: highConf,
      medium: medConf,
      low: lowConf
    }
  };
};
