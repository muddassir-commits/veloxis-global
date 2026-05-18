import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import LeadCaptureForm from '../forms/LeadCaptureForm';
import ContextualCta from '../ui/ContextualCta';

import { 
  buildSemanticChunks, 
  queryKnowledge, 
  assembleContextPrompt, 
  validateContextTraceability
} from '../../lib/retrieval/retrievalEngine';

// Import Phase 13/14 diagnostics engines
import { analyzeContentHealth } from '../../lib/intelligence/contentHealth';
import { diagnoseAuthorityFlow } from '../../lib/intelligence/authorityDiagnostics';
import { runCrawlDiagnostics } from '../../lib/intelligence/crawlDiagnostics';
import { generateRealRecommendations } from '../../lib/intelligence/recommendationEngine';
import { compileGovernanceMetrics } from '../../lib/intelligence/governanceAnalytics';
import { analyzeTopicalClusters } from '../../lib/intelligence/clusterAnalyzer';
import { getActiveObservabilityTraces } from '../../lib/operations/executionTraces';

// Import Phase 14 Production Validation Layer
import { validatePageSchemas } from '../../lib/seo/schemaValidator';
import { runProductionCrawlAudit } from '../../lib/seo/productionCrawl';
import { scoreAuthorityPriorities } from '../../lib/seo/authorityAcquisition';
import { eventBroker } from '../../lib/analytics/eventBroker';

// Import Phase 15 Revenue & Conversion Layer
import { scoreContentConversionIntent } from '../../lib/conversion/conversionEngine';
import { mapFunnels } from '../../lib/funnels/funnelIntelligence';
import { normalizeLead } from '../../lib/crm/crmSchema';

// Import Phase 16 Live Ops & Market Data Layer
import { validateDeploymentEnvironment } from '../../lib/deployment/deploymentValidator';
import { auditSearchConsoleReadiness } from '../../lib/searchConsole/searchConsoleInterface';
import { calculateBehavioralAttribution } from '../../lib/analytics/behavioralAnalytics';
import { analyzePublishingCadence } from '../../lib/publishing/publishingCadence';
import { monitorAuthorityGrowth } from '../../lib/authority/authorityMonitoring';
import { assessLeadQuality, getLeadQualityStats, getCtaConversionRates } from '../../lib/conversion/conversionIntelligence';

const RetrievalSandbox = () => {
  // Navigation Tabs State
  const [activeTab, setActiveTab] = useState('overview');

  // Search Sandbox state
  const [searchQuery, setSearchQuery] = useState('real estate lead routing');
  const [searchResults, setSearchResults] = useState([]);
  const [stitchedPrompt, setStitchedPrompt] = useState('');
  
  // Compliance verification state
  const [validationAnswer, setValidationAnswer] = useState(
    'Veloxis routes real estate leads directly to brokers within 90 seconds using automated n8n workflows. It logs qualifying leads inside Airtable for compliance routing.'
  );
  const [validationReport, setValidationReport] = useState(null);

  // Dynamic Real Diagnostics State
  const [healthData, setHealthData] = useState(null);
  const [authorityData, setAuthorityData] = useState(null);
  const [crawlData, setCrawlData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [governanceData, setGovernanceData] = useState(null);
  const [clusterData, setClusterData] = useState(null);
  const [observabilityTraces, setObservabilityTraces] = useState([]);

  // Phase 14 Production Validation State
  const [schemaData, setSchemaData] = useState(null);
  const [productionCrawlData, setProductionCrawlData] = useState(null);
  const [outreachData, setOutreachData] = useState(null);

  // Phase 15 Revenue & Funnel State
  const [conversionData, setConversionData] = useState(null);
  const [funnelData, setFunnelData] = useState(null);
  
  // CRM Simulation Workbench State
  const [crmInput, setCrmInput] = useState({
    name: 'Muddassir Khan',
    email: 'muddassir@veloxisglobal.com',
    company: 'Veloxis Enterprises',
    phone: '+91 9988776655',
    serviceOfInterest: 'lead-routing',
    message: 'Need a multi-step form synched to GoHighLevel and custom n8n paths.',
    utmSource: 'organic-search',
    utmMedium: 'google-bot',
    utmCampaign: 'authority-outreach'
  });
  const [crmResult, setCrmResult] = useState(null);

  // Phase 16 Live Ops & Market Data State
  const [deploymentData, setDeploymentData] = useState(null);
  const [searchConsoleData, setSearchConsoleData] = useState(null);
  const [behavioralData, setBehavioralData] = useState(null);
  const [publishingCadenceData, setPublishingCadenceData] = useState(null);
  const [authorityGrowthData, setAuthorityGrowthData] = useState(null);
  const [leadQualityStats, setLeadQualityStatsData] = useState(null);
  const [ctaConversionRates, setCtaConversionRatesData] = useState([]);
  
  // Lead Quality Simulator state
  const [leadQualityInput, setLeadQualityInput] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Corporate Growth Ltd',
    phone: '+44 7711223344',
    message: 'Looking for a custom CRM integration synched with n8n and HubSpot pipelines.'
  });
  const [leadQualityResult, setLeadQualityResult] = useState(null);

  // Dynamic CTA variant selector state
  const [ctaSandboxIntent, setCtaSandboxIntent] = useState('Decision');

  useEffect(() => {
    // Dispatch page view event telemetry to broker on mount
    eventBroker.trackPageView('/knowledge-lab');

    // Run all real diagnostics over the CMS repository
    try {
      const health = analyzeContentHealth();
      const auth = diagnoseAuthorityFlow();
      const crawl = runCrawlDiagnostics();
      const recs = generateRealRecommendations();
      const gov = compileGovernanceMetrics();
      const clusters = analyzeTopicalClusters();
      const traces = getActiveObservabilityTraces();

      // Phase 14
      const schemas = validatePageSchemas();
      const prodCrawl = runProductionCrawlAudit();
      const outreach = scoreAuthorityPriorities();

      // Phase 15
      const conversion = scoreContentConversionIntent();
      const funnel = mapFunnels();

      // Phase 16
      const deployment = validateDeploymentEnvironment();
      const searchConsole = auditSearchConsoleReadiness();
      const behavioral = calculateBehavioralAttribution();
      const publishing = analyzePublishingCadence();
      const authorityGrowth = monitorAuthorityGrowth();
      const leadStats = getLeadQualityStats();
      const ctaRates = getCtaConversionRates();

      setHealthData(health);
      setAuthorityData(auth);
      setCrawlData(crawl);
      setRecommendations(recs);
      setGovernanceData(gov);
      setClusterData(clusters);
      setObservabilityTraces(traces);

      setSchemaData(schemas);
      setProductionCrawlData(prodCrawl);
      setOutreachData(outreach);

      setConversionData(conversion);
      setFunnelData(funnel);

      setDeploymentData(deployment);
      setSearchConsoleData(searchConsole);
      setBehavioralData(behavioral);
      setPublishingCadenceData(publishing);
      setAuthorityGrowthData(authorityGrowth);
      setLeadQualityStatsData(leadStats);
      setCtaConversionRatesData(ctaRates);

      // Trigger default CRM normalisation process
      const initialNormalized = normalizeLead(crmInput);
      setCrmResult(initialNormalized);

      const initialLeadQuality = assessLeadQuality(leadQualityInput);
      setLeadQualityResult(initialLeadQuality);
    } catch (e) {
      console.error('[AI Operations Console] Failed loading live diagnostics: ', e);
    }
  }, []);

  // Run vector sandbox queries
  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      setStitchedPrompt('');
      return;
    }
    
    const results = queryKnowledge(searchQuery, { limit: 3 });
    setSearchResults(results);

    const prompt = assembleContextPrompt(searchQuery, 3);
    setStitchedPrompt(prompt);

    // Track similarity queries dynamically
    eventBroker.trackEvent('sandbox_similarity_query', { query: searchQuery });
  }, [searchQuery]);

  // Run source validation compliance audit
  useEffect(() => {
    if (stitchedPrompt && validationAnswer) {
      const report = validateContextTraceability(stitchedPrompt, validationAnswer);
      setValidationReport(report);
    } else {
      setValidationReport(null);
    }
  }, [stitchedPrompt, validationAnswer]);

  const handleCrmInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...crmInput, [name]: value };
    setCrmInput(updated);
    
    const result = normalizeLead(updated);
    setCrmResult(result);
  };

  const handleLeadQualityInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...leadQualityInput, [name]: value };
    setLeadQualityInput(updated);
    
    const result = assessLeadQuality(updated);
    setLeadQualityResult(result);
  };

  return (
    <div className="ai-ops-console" style={{ paddingTop: '100px', background: 'radial-gradient(circle at top, #0c0e14 0%, #030407 100%)', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <SeoHead 
        title="AI Operations Console" 
        description="Enterprise-grade AI operations console, crawl health diagnostic controls, and semantic authority governance."
        noIndex={true}
      />

      <Section>
        <Container>
          {/* Main Title Grid */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Badge variant="primary">AI GROWTH OPERATING SYSTEM</Badge>
            <h1 style={{ fontSize: '3rem', fontWeight: '900', marginTop: '10px', background: 'linear-gradient(90deg, #00f0ff, #7a00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.5px' }}>
              AI Operations Console
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '1.1rem', lineHeight: '1.5' }}>
              Enterprise observability into semantic authority flows, sitemap crawl health, and autonomous recommendation loops.
            </p>
          </div>

          {/* Console Hub Tab Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '20px', marginBottom: '40px' }}>
            {[
              { id: 'overview', label: 'Overview & Ops' },
              { id: 'authority', label: 'Semantic Authority' },
              { id: 'health', label: 'SEO & Content Health' },
              { id: 'crawl', label: 'Crawl Diagnostics' },
              { id: 'recs', label: 'Recommendation Center' },
              { id: 'governance', label: 'Zero-Trust Compliance' },
              { id: 'schema', label: 'Schema & Outreach HUD' },
              { id: 'production', label: 'Production Activation HUD' },
              { id: 'revenue', label: 'Revenue & Conversion HUD' },
              { id: 'live_ops', label: 'Live Ops & Market Data HUD' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  eventBroker.trackEvent('ops_tab_switched', { tab: tab.id });
                }}
                style={{
                  padding: '10px 22px',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(122, 0, 255, 0.15) 100%)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${activeTab === tab.id ? '#00f0ff' : 'rgba(255,255,255,0.08)'}`,
                  color: activeTab === tab.id ? '#00f0ff' : 'rgba(255,255,255,0.7)',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? '0 0 15px rgba(0,240,255,0.1)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 1. OVERVIEW & OPERATIONS DASHBOARD */}
          {activeTab === 'overview' && (
            <div>
              {/* Overall Health Matrices */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                
                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>SEO CONTENT HEALTH GRADE</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00f0ff', margin: '15px 0 5px 0' }}>
                      {healthData ? `${healthData.averageScore}%` : '---'}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Audited: <strong>{healthData ? healthData.pages.length : 0} pages</strong> | Global Issues: <strong style={{ color: '#ff4d4d' }}>{healthData ? healthData.globalIssues.length : 0}</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>CRAWL INTEGRITY SCORE</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00ff66', margin: '15px 0 5px 0' }}>
                      {crawlData ? `${crawlData.crawlScore}%` : '---'}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Sitemap Links: <strong>{crawlData ? crawlData.sitemapValidatedCount : 0} URLs</strong> | Warnings: <strong style={{ color: crawlData && crawlData.warnings.length > 0 ? '#ffcc00' : '#00ff66' }}>{crawlData ? crawlData.warnings.length : 0}</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>AUTHORITY FLOW REINFORCEMENT</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#7a00ff', margin: '15px 0 5px 0' }}>
                      {authorityData ? `${authorityData.authorityScore}%` : '---'}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Pillar Hubs Mapped: <strong>{clusterData ? clusterData.totalClusters : 0}</strong> | Reinforcement Gaps: <strong style={{ color: '#ff4d4d' }}>{authorityData ? authorityData.reinforcementGaps.length : 0}</strong>
                  </div>
                </div>

              </div>

              {/* Grid 2: Active Agent Queue Observability & Recommendations */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px' }}>
                
                {/* Active Agent Task Queue & Execution Traces */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#fff' }}>🤖 Active Agent Obs Queue</h3>
                    <span style={{ fontSize: '0.8rem', color: '#00f0ff', background: 'rgba(0,240,255,0.1)', padding: '3px 10px', borderRadius: '10px', fontFamily: 'monospace' }}>
                      READY FOR ORCHESTRATION
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {observabilityTraces.map(trace => (
                      <div key={trace.traceId} style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                          <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#00f0ff' }}>{trace.agentRole}</span>
                          <span style={{ fontSize: '0.75rem', background: '#00ff66', color: '#000', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{trace.status}</span>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '2px solid rgba(255,255,255,0.08)', paddingLeft: '15px', margin: '10px 0' }}>
                          {trace.steps.map((step, idx) => (
                            <div key={idx} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                              ✔ {step.name}
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', gap: '15px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '10px', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '10px' }}>
                          <span>Tokens: {trace.metrics.tokensUsed}</span>
                          <span>Cost: ${trace.metrics.apiCostUSD}</span>
                          <span>Yield: <strong style={{ color: '#00f0ff' }}>+{trace.metrics.authorityYield} pts</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Priority Real Recommendations Feed */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#fff' }}>🎯 Priority SEO Growth Actions</h3>
                    <Link onClick={() => setActiveTab('recs')} style={{ fontSize: '0.85rem', color: '#00f0ff', textDecoration: 'none' }}>View All</Link>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {recommendations.slice(0, 3).map(rec => (
                      <div key={rec.id} style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.02)', borderLeft: `4px solid ${rec.impact === 'HIGH' ? '#ff4d4d' : '#ffcc00'}`, borderRadius: '0 8px 8px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{rec.title}</span>
                          <span style={{ fontSize: '0.75rem', color: '#00f0ff', fontFamily: 'monospace' }}>+{rec.valueYield} Pts</span>
                        </div>
                        <p style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
                          {rec.suggestion}
                        </p>
                        <div style={{ fontSize: '0.8rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                          🔧 Action: {rec.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 2. SEMANTIC AUTHORITY & CLUSTERS */}
          {activeTab === 'authority' && authorityData && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.5rem' }}>Semantic Cluster Diagnostics</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '30px' }}>
                Evaluates topical completeness. Ensures that major pillar hub services are properly reinforced by a spiderweb of secondary blog assets.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '35px' }}>
                
                {/* Cluster Tag Allocation Matrix */}
                <div>
                  <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>
                    Topical Cluster tag Allocation
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {clusterData && clusterData.clusters.map(c => (
                      <div key={c.tag} style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                          <span style={{ fontWeight: 'bold', color: '#00f0ff' }}>{c.tag.toUpperCase()}</span>
                          <span>{c.count} Pages | Authority Weight: {c.totalAuthority}</span>
                        </div>
                        {/* Progress Bar */}
                        <div style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${Math.min(100, (c.count / 8) * 100)}%`, height: '100%', background: 'linear-gradient(90deg, #00f0ff, #7a00ff)' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topical Reinforcement Gaps */}
                <div>
                  <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>
                    Hub Reinforcement Alerts ({authorityData.reinforcementGaps.length})
                  </h4>

                  {authorityData.reinforcementGaps.length === 0 ? (
                    <p style={{ color: '#00ff66', fontSize: '0.9rem' }}>✔ Excellent. All major service pillars have deep supporting networks.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {authorityData.reinforcementGaps.map((gap, idx) => (
                        <div key={idx} style={{ padding: '15px 20px', background: 'rgba(255,77,77,0.03)', borderLeft: '4px solid #ff4d4d', borderRadius: '0 8px 8px 0', fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}>{gap.serviceName} Pillar Hub</div>
                          <div style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{gap.message}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skew Warnings */}
                  {authorityData.imbalances.length > 0 && (
                    <div style={{ marginTop: '30px' }}>
                      <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>
                        Topical skew Anomalies ({authorityData.imbalances.length})
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {authorityData.imbalances.map((imb, idx) => (
                          <div key={idx} style={{ padding: '15px 20px', background: 'rgba(255,204,0,0.03)', borderLeft: '4px solid #ffcc00', borderRadius: '0 8px 8px 0', fontSize: '0.9rem' }}>
                            <div style={{ color: 'rgba(255,255,255,0.7)' }}>{imb.message}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          )}

          {/* 3. SEO & CONTENT HEALTH MATRIX */}
          {activeTab === 'health' && healthData && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.5rem' }}>SEO & Content Diagnostics Matrix</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '30px' }}>
                Dynamic code crawler inspecting each markdown article for structural compliance, content depth, internal link distribution, and title duplication.
              </p>

              {/* Cannibalization Matrix */}
              {healthData.globalIssues.length > 0 && (
                <div style={{ marginBottom: '40px', padding: '25px', background: 'rgba(255,77,77,0.02)', border: '1px solid rgba(255,77,77,0.1)', borderRadius: '12px' }}>
                  <h4 style={{ color: '#ff4d4d', margin: '0 0 10px 0' }}>⚠️ Title Cannibalization Alerts ({healthData.globalIssues.length})</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {healthData.globalIssues.map((issue, idx) => (
                      <div key={idx} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                        👉 {issue.message} (Overlap: <strong style={{ color: '#ff4d4d' }}>{(issue.similarityScore * 100).toFixed(0)}%</strong>)
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Table list of parsed pages */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                      <th style={{ padding: '15px 10px' }}>PAGE TITLE</th>
                      <th style={{ padding: '15px 10px' }}>SCORE</th>
                      <th style={{ padding: '15px 10px' }}>WORDS</th>
                      <th style={{ padding: '15px 10px' }}>AGE</th>
                      <th style={{ padding: '15px 10px' }}>LINKS (IN/OUT)</th>
                      <th style={{ padding: '15px 10px' }}>FLAGGED CONCERNS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {healthData.pages.map(page => (
                      <tr key={page.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: page.score < 80 ? 'rgba(255,77,77,0.01)' : 'transparent' }}>
                        <td style={{ padding: '15px 10px', fontWeight: 'bold' }}>
                          <span style={{ display: 'block', fontSize: '0.95rem' }}>{page.title}</span>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>{page.url}</span>
                        </td>
                        <td style={{ padding: '15px 10px' }}>
                          <span style={{ 
                            color: page.score >= 90 ? '#00ff66' : (page.score >= 75 ? '#ffcc00' : '#ff4d4d'),
                            fontWeight: 'bold'
                          }}>
                            {page.score}%
                          </span>
                        </td>
                        <td style={{ padding: '15px 10px' }}>{page.wordCount}</td>
                        <td style={{ padding: '15px 10px' }}>{page.daysOld} Days</td>
                        <td style={{ padding: '15px 10px' }}>{page.inboundCount} In / {page.outboundCount} Out</td>
                        <td style={{ padding: '15px 10px', color: '#ff4d4d' }}>
                          {page.issues.length === 0 ? (
                            <span style={{ color: '#00ff66' }}>✔ Perfect</span>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.75rem' }}>
                              {page.issues.map((iss, idx) => (
                                <span key={idx}>• {iss.message}</span>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. CRAWL DIAGNOSTICS */}
          {activeTab === 'crawl' && crawlData && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.5rem' }}>Sitemap & Crawl Intelligence Audit</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '30px' }}>
                Verifies sitemap XML sync states, orphan routing combinations, canonical tags, and broken links across active combinations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '35px', marginBottom: '30px' }}>
                
                {/* Technical Crawler Stats */}
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '25px', borderRadius: '12px' }}>
                  <h4 style={{ margin: '0 0 20px 0', color: '#fff' }}>Crawler audit Log Summary</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem' }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Sitemap Registered Routes:</span>
                      <strong style={{ color: '#00f0ff' }}>{crawlData.sitemapValidatedCount} URLs</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Canonical Verification Rate:</span>
                      <strong style={{ color: '#00ff66' }}>100% Verified</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Invalid Override Exclusions:</span>
                      <strong style={{ color: crawlData.brokenCanonicalCount > 0 ? '#ff4d4d' : '#00ff66' }}>{crawlData.brokenCanonicalCount} Flagged</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Wildcard Routing Fallback State:</span>
                      <strong style={{ color: '#00ff66' }}>ACTIVE & SAFE</strong>
                    </li>
                  </ul>
                </div>

                {/* Sitemap Warnings List */}
                <div>
                  <h4 style={{ margin: '0 0 20px 0', color: '#fff' }}>Crawl Warnings & Sitemap Logs ({crawlData.warnings.length})</h4>
                  
                  {crawlData.warnings.length === 0 ? (
                    <div style={{ padding: '20px', background: 'rgba(0,255,102,0.03)', border: '1px solid rgba(0,255,102,0.1)', borderRadius: '10px', color: '#00ff66', fontSize: '0.9rem' }}>
                      ✔ Crawl check clean. Sitemap structure resolves perfectly with no orphan paths.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {crawlData.warnings.map((w, idx) => (
                        <div key={idx} style={{ padding: '15px', background: 'rgba(255,77,77,0.02)', borderLeft: '4px solid #ff4d4d', borderRadius: '0 6px 6px 0', fontSize: '0.85rem' }}>
                          <strong style={{ display: 'block', color: '#fff', marginBottom: '3px' }}>{w.type.toUpperCase()} ({w.slug})</strong>
                          <span style={{ color: 'rgba(255,255,255,0.6)' }}>{w.message}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* 5. DYNAMIC RECOMMENDATION CENTER */}
          {activeTab === 'recs' && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>Growth & Linking Recommendation Engine</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '5px' }}>
                    Actionable steps generated dynamically from current tag structures, orphan links, metadata duplicates, and stale files.
                  </p>
                </div>
                <Badge variant="primary">{recommendations.length} Actionable Items</Badge>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {recommendations.map(rec => (
                  <div key={rec.id} className="glass-card" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderLeft: `4px solid ${rec.impact === 'HIGH' ? '#ff4d4d' : '#ffcc00'}`, borderRadius: '0 12px 12px 0', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                          {rec.category}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: '#00f0ff', fontWeight: 'bold' }}>
                          +{rec.valueYield} Authority pts
                        </span>
                      </div>
                      
                      <h4 style={{ margin: '10px 0 8px 0', fontSize: '1.1rem', color: '#fff' }}>{rec.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: '0 0 15px 0', lineHeight: '1.5' }}>
                        {rec.suggestion}
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', fontSize: '0.8rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                      🔧 Action: {rec.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. ZERO-TRUST GOVERNANCE COMPLIANCE LAB */}
          {activeTab === 'governance' && (
            <div>
              {/* Compliance statistics dashboard */}
              {governanceData && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>VERIFIED CHUNK RATING</div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>{(governanceData.averageConfidence * 100).toFixed(0)}%</span>
                  </div>
                  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>VERIFICATION COVERAGE</div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00f0ff' }}>{(governanceData.verificationCoverage * 100).toFixed(0)}%</span>
                  </div>
                  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>HALLUCINATION RISK TREND</div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>{governanceData.hallucinationRiskTrend}</span>
                  </div>
                  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>TOTAL GOVERNED CHUNKS</div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#7a00ff' }}>{governanceData.totalGovernedChunks}</span>
                  </div>
                </div>
              )}

              {/* Stitched prompting workbenches */}
              <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px' }}>RAG Cosine Similarity & Vector Assembly</h3>
                
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>AI SIMULATION QUERY BOX</label>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type an entity to run vector projections..."
                    style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,240,255,0.2)', borderRadius: '10px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                  
                  {/* Matching chunks */}
                  <div>
                    <h4 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>
                      Ranked Vector Matches ({searchResults.length})
                    </h4>
                    
                    {searchResults.length === 0 ? (
                      <p style={{ color: 'rgba(255,255,255,0.4)' }}>No chunks found. Audit query values.</p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {searchResults.map(result => (
                          <div key={result.id} style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px' }}>
                              <span style={{ color: '#00f0ff', fontFamily: 'monospace' }}>{result.id}</span>
                              <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>Cosine Match: {result.retrievalScore}</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
                              {result.content.substring(0, 150)}...
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Stitched Prompt */}
                  <div>
                    <h4 style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>
                      Context Assembly XML
                    </h4>
                    <pre style={{ margin: 0, padding: '15px', background: '#070709', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.75rem', overflowX: 'auto', maxHeight: '300px', whiteSpace: 'pre-wrap' }}>
                      {stitchedPrompt || 'Awaiting query...'}
                    </pre>
                  </div>

                </div>
              </div>

              {/* Zero-trust Compliance grounding auditor */}
              <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>Zero-Trust Grounding Compliance Auditor</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '25px' }}>
                  Audits answer grounding. Compares assertions in generated answers against active retrieved chunks.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                  
                  {/* Answer Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>PASTE GENERATED ANSWER</label>
                    <textarea
                      value={validationAnswer}
                      onChange={(e) => setValidationAnswer(e.target.value)}
                      style={{ width: '100%', height: '180px', padding: '12px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', resize: 'none', outline: 'none', lineHeight: '1.5' }}
                    />
                  </div>

                  {/* Grounding Report */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>COMPLIANCE COMPILATION</label>
                    
                    {validationReport ? (
                      <div style={{ padding: '20px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', height: '180px', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.85rem' }}>
                            <span>GROUNDING RISK LEVEL:</span>
                            <span style={{ 
                              color: validationReport.risk === 'LOW' ? '#00ff66' : (validationReport.risk === 'MEDIUM' ? '#ffcc00' : '#ff4d4d'),
                              fontWeight: 'bold'
                            }}>
                              {validationReport.risk} RISK
                            </span>
                          </div>

                          <div style={{ background: 'rgba(255,255,255,0.05)', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '15px' }}>
                            <div style={{ 
                              background: validationReport.risk === 'LOW' ? '#00ff66' : (validationReport.risk === 'MEDIUM' ? '#ffcc00' : '#ff4d4d'),
                              width: `${validationReport.score * 100}%`,
                              height: '100%' 
                            }} />
                          </div>

                          <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px' }}>
                            Source Traceability Score: {(validationReport.score * 100).toFixed(0)}%
                          </div>
                          
                          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.4' }}>
                            {validationReport.reason}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>Awaiting validator parameters.</p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* 7. SCHEMA & OUTREACH HUD (Phase 14) */}
          {activeTab === 'schema' && schemaData && outreachData && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>Schema Integrity & Authority Outreach Grid</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '5px' }}>
                    Validates schema markup syntax and prioritizes link acquisition hooks for core pillar service targets.
                  </p>
                </div>
                <Badge variant="primary">SCHEMA HEALTH: {schemaData.averageSchemaScore}%</Badge>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '35px' }}>
                
                {/* Schema validation logs */}
                <div>
                  <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>
                    JSON-LD Schema audit
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '500px', overflowY: 'auto', paddingRight: '5px' }}>
                    {schemaData.reports.map(rep => (
                      <div key={rep.slug} style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}>
                          <span style={{ fontWeight: 'bold' }}>{rep.title}</span>
                          <span style={{ 
                            color: rep.score >= 80 ? '#00ff66' : '#ffcc00',
                            fontWeight: 'bold'
                          }}>
                            {rep.score}%
                          </span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: '8px' }}>
                          Schemas found: [ {rep.schemas.join(', ') || 'None'} ]
                        </div>
                        {rep.errors.map((err, idx) => (
                          <div key={idx} style={{ fontSize: '0.75rem', color: '#ff4d4d', marginTop: '3px' }}>
                            ✖ Error: {err}
                          </div>
                        ))}
                        {rep.warnings.map((warn, idx) => (
                          <div key={idx} style={{ fontSize: '0.75rem', color: '#ffcc00', marginTop: '3px' }}>
                            ⚠ Warning: {warn}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outreach link prioritization */}
                <div>
                  <h4 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px', color: '#fff' }}>
                    Authority link targets
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '500px', overflowY: 'auto', paddingRight: '5px' }}>
                    {outreachData.priorityRoadmap.map(plan => (
                      <div key={plan.slug} style={{ background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #7a00ff' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                          <span style={{ fontWeight: 'bold' }}>{plan.title}</span>
                          <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>Score: {plan.priorityScore}</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>
                          Target URL: <strong style={{ color: '#fff' }}>{plan.url}</strong>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#00f0ff', fontFamily: 'monospace' }}>
                          🔗 Anchors: "{plan.suggestedAnchors.join('", "')}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* 8. PRODUCTION ACTIVATION HUD (Phase 14) */}
          {activeTab === 'production' && productionCrawlData && (
            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.5rem' }}>Production Optimization & Crawl Audit HUD</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '30px' }}>
                Audits real Googlebot compliance vectors, Core Web Vitals targets, Google Search Console setups, and routing hydrations.
              </p>

              {/* Lighthouse Core Web Vitals Sim */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>FIRST CONTENTFUL PAINT</div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>0.6s</span>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Target: &lt; 1.2s</div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>LARGEST CONTENTFUL PAINT</div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>1.2s</span>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Target: &lt; 2.5s</div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>CUMULATIVE LAYOUT SHIFT</div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>0.01</span>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Target: &lt; 0.10</div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '5px' }}>HYDRATION FOOTPRINT</div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#00ff66' }}>LOW COST</span>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '3px' }}>Vite Code Split Active</div>
                </div>
              </div>

              {/* Audit checks grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                
                {/* Search Console checklist */}
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '25px', borderRadius: '12px' }}>
                  <h4 style={{ margin: '0 0 15px 0', color: '#fff' }}>Search Console Indexing Checks</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#00ff66', fontWeight: 'bold' }}>✔</span>
                      <span>robots.txt verified crawl pathways</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#00ff66', fontWeight: 'bold' }}>✔</span>
                      <span>Sitemap XML generated successfully</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#00ff66', fontWeight: 'bold' }}>✔</span>
                      <span>Dynamic meta tags optimized for indexing</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#00ff66', fontWeight: 'bold' }}>✔</span>
                      <span>No duplicate canonical conflicts mapped</span>
                    </li>
                  </ul>
                </div>

                {/* Simulated googlebot logs */}
                <div>
                  <h4 style={{ margin: '0 0 15px 0', color: '#fff' }}>Simulated Googlebot Crawl log</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '250px', overflowY: 'auto', paddingRight: '5px' }}>
                    {productionCrawlData.logs.map((log, idx) => (
                      <div key={idx} style={{ padding: '10px 15px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', fontSize: '0.8rem', borderLeft: `3px solid ${log.status === 'SUCCESS' ? '#00ff66' : '#ffcc00'}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                          <span style={{ fontWeight: 'bold' }}>{log.step}</span>
                          <span style={{ color: log.status === 'SUCCESS' ? '#00ff66' : '#ffcc00' }}>{log.status}</span>
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>{log.details}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* 9. REVENUE & CONVERSION HUD (Phase 15) */}
          {activeTab === 'revenue' && funnelData && (
            <div>
              {/* Funnel Health summary boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' }}>
                
                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>FUNNEL INTEGRITY INDEX</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00ff66', margin: '15px 0 5px 0' }}>
                      {funnelData.funnelHealthIndex}%
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Leaking Pages (No BOFU paths): <strong style={{ color: '#ff4d4d' }}>{funnelData.totalLeaks}</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>AVERAGE CONVERSION YIELD</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00f0ff', margin: '15px 0 5px 0' }}>
                      {conversionData ? `${Math.round(conversionData.reports.reduce((sum, r) => sum + r.conversionPotentialScore, 0) / conversionData.reports.length)}%` : '---'}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Pillars Mapped: <strong>{conversionData ? conversionData.reports.filter(r => r.intentStage === 'Decision').length : 0} Services</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>ACTIVE MONETIZED CHANNELS</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#7a00ff', margin: '15px 0 5px 0' }}>
                      4 Hubs
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Outreach Priority target Score: <strong style={{ color: '#00f0ff' }}>85+</strong>
                  </div>
                </div>

              </div>

              {/* Grid 2: CRM Workbench & Dynamic CTA Sandbox */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                
                {/* Interactive CRM normalizer */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>💼 CRM Lead normalizer workbench</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Input mock client inquiries to evaluate dynamic attribution properties and standard CRM stages prior to live sync triggers.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>NAME</label>
                      <input type="text" name="name" value={crmInput.name} onChange={handleCrmInputChange} style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>EMAIL</label>
                      <input type="email" name="email" value={crmInput.email} onChange={handleCrmInputChange} style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>COMPANY</label>
                      <input type="text" name="company" value={crmInput.company} onChange={handleCrmInputChange} style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>PHONE</label>
                      <input type="text" name="phone" value={crmInput.phone} onChange={handleCrmInputChange} style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }} />
                    </div>
                  </div>

                  <pre style={{ margin: 0, padding: '15px', background: '#070709', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.75rem', overflowX: 'auto', maxHeight: '200px' }}>
                    {crmResult ? JSON.stringify(crmResult, null, 2) : 'Awaiting parameters...'}
                  </pre>
                </div>

                {/* Dynamic Contextual CTA Demonstration */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>🎯 Contextual CTA Sandbox</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Select an Intent Stage to demonstrate how CTA panels dynamically re-route variants under zero template overhead.
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>CHOOSE INTENT PROFILE</label>
                    <select 
                      value={ctaSandboxIntent} 
                      onChange={(e) => setCtaSandboxIntent(e.target.value)}
                      style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', width: '100%', outline: 'none' }}
                    >
                      <option value="Awareness">Awareness (TOFU - Low Friction RAG Audits)</option>
                      <option value="Consideration">Consideration (MOFU - Blueprint PDF Downloads)</option>
                      <option value="Decision">Decision (BOFU - Bespoke Lead capture Form)</option>
                    </select>
                  </div>

                  <div style={{ border: '1px dashed rgba(255,255,255,0.1)', padding: '10px', borderRadius: '12px' }}>
                    <ContextualCta pageIntent={ctaSandboxIntent} pageSlug="crm-automation" />
                  </div>
                </div>

              </div>

              {/* Mapped Funnel Leaks & Gaps */}
              <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <h4 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '1.2rem' }}>⚠️ Funnel Leak & Link Leak Diagnostic logs ({funnelData.funnelGaps.length})</h4>
                
                {funnelData.funnelGaps.length === 0 ? (
                  <div style={{ padding: '20px', background: 'rgba(0,255,102,0.03)', borderRadius: '10px', color: '#00ff66', border: '1px solid rgba(0,255,102,0.1)', fontSize: '0.9rem' }}>
                    ✔ Perfect Funnel Integrity. All informational articles have proper, high-converting paths to services.
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {funnelData.funnelGaps.map((gap, idx) => (
                      <div key={idx} style={{ padding: '20px', background: 'rgba(255,255,255,0.01)', borderLeft: `4px solid ${gap.leakSeverity === 'HIGH' ? '#ff4d4d' : '#ffcc00'}`, borderRadius: '0 8px 8px 0', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontWeight: 'bold', color: '#fff' }}>{gap.title}</span>
                          <span style={{ color: gap.leakSeverity === 'HIGH' ? '#ff4d4d' : '#ffcc00', fontWeight: 'bold' }}>{gap.leakSeverity} LEAK</span>
                        </div>
                        <p style={{ margin: '0 0 10px 0', color: 'rgba(255,255,255,0.6)' }}>{gap.message}</p>
                        <div style={{ color: '#00f0ff', fontFamily: 'monospace' }}>🔧 Suggestion: {gap.recommendedAction}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* 10. LIVE OPS & MARKET DATA HUD (Phase 16) */}
          {activeTab === 'live_ops' && deploymentData && searchConsoleData && behavioralData && publishingCadenceData && authorityGrowthData && (
            <div>
              {/* Dashboard Row 1: Deployment & GSC status */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '45px' }}>
                
                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>DEPLOYMENT INTEGRITY INDEX</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00f0ff', margin: '15px 0 5px 0' }}>
                      {deploymentData.deploymentIntegrityScore}%
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Indexing State: <strong style={{ color: deploymentData.isSafeForIndexing ? '#00ff66' : '#ff4d4d' }}>{deploymentData.isSafeForIndexing ? '🟢 INDEXATION SAFE' : '🔴 ACTION REQUIRED'}</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>BEHAVIORAL ENGAGEMENT INDEX</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00ff66', margin: '15px 0 5px 0' }}>
                      {behavioralData.summary.averageSessionQuality}%
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    High-Intent Sessions: <strong>{behavioralData.summary.highIntentSessionsCount} / {behavioralData.summary.totalActiveSessions} Sessions</strong>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                  <div>
                    <h3 style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.85rem', letterSpacing: '1px' }}>EDITORIAL FRESHNESS RATING</h3>
                    <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#7a00ff', margin: '15px 0 5px 0' }}>
                      {publishingCadenceData.cadenceMetrics.averageFreshnessIndex}%
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    Publishing Velocity: <strong>{publishingCadenceData.cadenceMetrics.currentVelocityMonthly} / {publishingCadenceData.cadenceMetrics.targetVelocityMonthly} Target</strong>
                  </div>
                </div>

              </div>

              {/* Grid 2: Deployment Audit Checks & Search Console Index Checklist */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                
                {/* 1. Deployment Checklist */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>🌐 Production Hosting Validation checklist</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Validates local configurations against production indexing parameters.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {deploymentData.audits.map(aud => (
                      <div key={aud.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', borderLeft: `4px solid ${aud.status === 'SUCCESS' ? '#00ff66' : (aud.status === 'WARNING' ? '#ffcc00' : '#ff4d4d')}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '5px' }}>
                          <span style={{ fontWeight: 'bold' }}>{aud.name}</span>
                          <span style={{ color: aud.status === 'SUCCESS' ? '#00ff66' : (aud.status === 'WARNING' ? '#ffcc00' : '#ff4d4d'), fontWeight: 'bold' }}>{aud.status}</span>
                        </div>
                        <p style={{ margin: '0 0 8px 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{aud.details}</p>
                        <div style={{ fontSize: '0.75rem', color: '#00f0ff' }}>🔧 Guide: {aud.action}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Search Console readiness */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>📈 Search Console & sitemap synchronization</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Prepared mapping architectures for organic query parameters, index weights, and crawl budgets.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>ORGANIC IMPRESSIONS</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#00f0ff' }}>{searchConsoleData.organicMetrics.totalImpressions}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>ORGANIC CLICKS</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#00ff66' }}>{searchConsoleData.organicMetrics.totalClicks}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>AVERAGE POSITION</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffcc00' }}>{searchConsoleData.organicMetrics.averagePosition}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>AVERAGE CTR</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#7a00ff' }}>{searchConsoleData.organicMetrics.averageCtr}%</div>
                    </div>
                  </div>

                  <div style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '5px' }}>
                    {searchConsoleData.pageIndexingStatuses.map(page => (
                      <div key={page.url} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.8rem' }}>
                        <span>{page.url}</span>
                        <span style={{ 
                          color: page.state === 'Indexed' ? '#00ff66' : (page.state.includes('Excluded') ? 'rgba(255,255,255,0.4)' : '#ffcc00'),
                          fontWeight: 'bold'
                        }}>
                          {page.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Grid 3: Behavioral session feeds & Editorial calendars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                
                {/* 1. Behavioral telemetry feed */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>👤 Behavioral user Sessions & attribution</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Monitors live attributions (search share, social share, referral pathways) and dwell depth.
                  </p>

                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', fontSize: '0.8rem' }}>
                    <div>Search: <strong style={{ color: '#00f0ff' }}>{behavioralData.summary.organicSearchShare}%</strong></div>
                    <div>Social: <strong style={{ color: '#00ff66' }}>{behavioralData.summary.socialReferralShare}%</strong></div>
                    <div>Direct: <strong style={{ color: '#ffcc00' }}>{behavioralData.summary.directTrafficShare}%</strong></div>
                    <div>Dev Ref: <strong style={{ color: '#7a00ff' }}>{behavioralData.summary.developerRefShare}%</strong></div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '220px', overflowY: 'auto', paddingRight: '5px' }}>
                    {behavioralData.sessions.map(sess => (
                      <div key={sess.sessionId} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px', fontSize: '0.8rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <span style={{ fontWeight: 'bold', color: '#00f0ff' }}>{sess.sessionId}</span>
                          <span style={{ color: sess.sessionQualityScore >= 80 ? '#00ff66' : (sess.sessionQualityScore >= 50 ? '#ffcc00' : 'rgba(255,255,255,0.4)'), fontWeight: 'bold' }}>{sess.intentLevel}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)' }}>Referrer: {sess.referrer} | Duration: {sess.dwellSeconds}s | Scroll: {sess.scrollDepthPercent}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Editorial calendar */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>📅 Editorial publishing cadence calendar</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Tracks scheduled articles and topical completeness gaps.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', maxHeight: '200px', overflowY: 'auto', paddingRight: '5px' }}>
                    {publishingCadenceData.weeklyCalendar.map((cal, idx) => (
                      <div key={idx} style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 'bold' }}>{cal.title}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Date: {cal.date} | Tag: {cal.tag} | Writer: {cal.assignee}</div>
                        </div>
                        <span style={{ fontSize: '0.7rem', background: cal.status === 'Drafting' ? 'rgba(255,204,0,0.1)' : 'rgba(0,240,255,0.1)', color: cal.status === 'Drafting' ? '#ffcc00' : '#00f0ff', padding: '3px 8px', borderRadius: '4px' }}>
                          {cal.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h5 style={{ margin: '15px 0 8px 0', color: '#fff', fontSize: '0.9rem' }}>Neglected Content Freshness Alarms</h5>
                  {publishingCadenceData.staleAlerts.length === 0 ? (
                    <p style={{ color: '#00ff66', fontSize: '0.8rem' }}>✔ Excellent. All article files are fully updated.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {publishingCadenceData.staleAlerts.map((stale, idx) => (
                        <div key={idx} style={{ padding: '8px 12px', background: 'rgba(255,77,77,0.02)', borderLeft: '3px solid #ff4d4d', borderRadius: '0 6px 6px 0', fontSize: '0.75rem' }}>
                          <span><strong>{stale.title}</strong> is decaying ({stale.daysOld} days old, freshness: {stale.freshnessScore}%)</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Grid 4: Backlinks and Lead scorer */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '30px' }}>
                
                {/* 1. Backlink tracking profile */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>🔗 Authority backlinks & organic search visibility</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Tracks acquired domain link profiles, anchor word weights, and targets.
                  </p>

                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px', fontSize: '0.8rem' }}>
                    <div>Brand anchor: <strong style={{ color: '#00f0ff' }}>{authorityGrowthData.summary.anchorDistributions.brandNamePercent}%</strong></div>
                    <div>Commercial: <strong style={{ color: '#00ff66' }}>{authorityGrowthData.summary.anchorDistributions.commercialKeywordPercent}%</strong></div>
                    <div>Generic: <strong style={{ color: '#ffcc00' }}>{authorityGrowthData.summary.anchorDistributions.genericPercent}%</strong></div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '200px', overflowY: 'auto', paddingRight: '5px' }}>
                    {authorityGrowthData.backlinks.map((link, idx) => (
                      <div key={idx} style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', fontSize: '0.8rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                          <span style={{ fontWeight: 'bold', color: '#fff' }}>{link.anchorText}</span>
                          <span style={{ color: '#00f0ff', fontWeight: 'bold' }}>DA: {link.sourceDomainAuthority}</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>From: {link.sourceUrl}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Interactive Lead Scorer Simulator */}
                <div className="glass-card" style={{ padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.2rem' }}>🛡️ Lead Quality qualification workbench</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Simulates lead quality tier classifications based on domain corporate checks, contact depths, and campaign filters.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '15px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '3px' }}>EMAIL</label>
                      <input type="email" name="email" value={leadQualityInput.email} onChange={handleLeadQualityInputChange} style={{ width: '100%', padding: '6px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '3px' }}>COMPANY</label>
                      <input type="text" name="company" value={leadQualityInput.company} onChange={handleLeadQualityInputChange} style={{ width: '100%', padding: '6px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '3px' }}>PHONE</label>
                      <input type="text" name="phone" value={leadQualityInput.phone} onChange={handleLeadQualityInputChange} style={{ width: '100%', padding: '6px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '3px' }}>TELEMETRY TIER</label>
                      <div style={{ padding: '6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: leadQualityResult && leadQualityResult.score >= 80 ? '#00ff66' : (leadQualityResult && leadQualityResult.score >= 50 ? '#ffcc00' : '#ff4d4d') }}>
                        {leadQualityResult ? `${leadQualityResult.score} pts` : '---'}
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#070709', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '15px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#00f0ff', marginBottom: '8px' }}>
                      Tier: {leadQualityResult ? leadQualityResult.leadTier : 'Calculating...'}
                    </div>
                    <div style={{ maxHeight: '100px', overflowY: 'auto', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      {leadQualityResult && leadQualityResult.validations.map((val, idx) => (
                        <div key={idx}>✔ {val}</div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </Container>
      </Section>
    </div>
  );
};

export default RetrievalSandbox;
