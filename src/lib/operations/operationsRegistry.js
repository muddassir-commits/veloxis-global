/**
 * Future Multi-Agent Operations Registry
 * 
 * Defines standard capability schemas and execution parameters 
 * for future autonomous content, linking, and optimization agents.
 */

export const FUTURE_AGENT_ROLES = {
  LINKING_OPTIMIZER: 'LinkingOptimizerAgent',
  CONTENT_REFRESHER: 'ContentRefresherAgent',
  SCHEMA_GENERATOR: 'SchemaGeneratorAgent',
  COMPETITOR_MONITOR: 'CompetitorMonitorAgent'
};

export const FUTURE_AGENT_REGISTRY = [
  {
    role: FUTURE_AGENT_ROLES.LINKING_OPTIMIZER,
    description: 'Scans the semantic chunk database and automatically embeds inbound links inside orphan articles.',
    parameters: {
      minSimilarityThreshold: 'number (default 0.70)',
      dryRun: 'boolean (default true)'
    },
    capabilities: [
      'readContent',
      'extractEmbeddings',
      'injectMarkdownLinks'
    ]
  },
  {
    role: FUTURE_AGENT_ROLES.CONTENT_REFRESHER,
    description: 'Monitors content decay metrics and draft updates to obsolete technologies.',
    parameters: {
      decayThreshold: 'number (default 0.15)',
      modelPreference: 'string (default "claude-3-5-sonnet")'
    },
    capabilities: [
      'readContent',
      'generateDraft',
      'updateFrontmatterDate'
    ]
  },
  {
    role: FUTURE_AGENT_ROLES.SCHEMA_GENERATOR,
    description: 'Crawls pages lacking schemas and compiles FAQ and product schemas.',
    parameters: {
      injectJSONLD: 'boolean (default true)'
    },
    capabilities: [
      'analyzeFaqs',
      'generateJSONLD',
      'writeFrontmatter'
    ]
  }
];

/**
 * Interface validation helper for registering future dynamic agents.
 */
export const registerFutureAgent = (agentProfile) => {
  const required = ['role', 'description', 'capabilities'];
  const missing = required.filter(k => !agentProfile[k]);
  
  if (missing.length > 0) {
    throw new Error(`[Operations Agent Registry] Malformed registration. Missing: ${missing.join(', ')}`);
  }
  
  console.log(`[Operations Registry] Registered future agent interface: ${agentProfile.role}`);
  return true;
};
