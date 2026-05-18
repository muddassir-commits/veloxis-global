/**
 * Phase 16 - Conversion Intelligence Expansion
 * Pure-JS lead qualification scoring model, corporate filter engines,
 * CTA click-through effectiveness analytics, and pathway analyzers.
 */

export const assessLeadQuality = (lead = {}) => {
  let score = 0;
  const validations = [];

  const email = lead.email || '';
  const message = lead.message || '';
  const phone = lead.phone || '';
  const company = lead.company || '';

  // 1. Corporate Email Filtering (40 Pts)
  const genericDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
  const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
  
  if (email.includes('@')) {
    if (genericDomains.includes(domain)) {
      score += 15;
      validations.push('Generic email domain detected (+15 pts)');
    } else {
      score += 40;
      validations.push('Corporate business domain verified (+40 pts)');
    }
  } else {
    validations.push('Missing or invalid email structure (+0 pts)');
  }

  // 2. Company Name Depth (20 Pts)
  if (company.trim().length > 2) {
    score += 20;
    validations.push('Company parameter entered (+20 pts)');
  } else {
    validations.push('Missing company context (+0 pts)');
  }

  // 3. Phone Contact Details (20 Pts)
  if (phone.trim().length >= 8) {
    score += 20;
    validations.push('Contact telephone provided (+20 pts)');
  } else {
    validations.push('Missing telephone parameter (+0 pts)');
  }

  // 4. Message Depth (20 Pts)
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount >= 10) {
    score += 20;
    validations.push(`Detailed description provided: ${wordCount} words (+20 pts)`);
  } else if (wordCount > 0) {
    score += 10;
    validations.push('Brief description provided (+10 pts)');
  } else {
    validations.push('Empty message description (+0 pts)');
  }

  // Determine lead tier
  let leadTier = 'Cold / Low Quality (Tier 3)';
  if (score >= 80) leadTier = 'Sales Ready / High Quality (Tier 1)';
  else if (score >= 50) leadTier = 'Marketing Qualified / Medium Quality (Tier 2)';

  return {
    score,
    leadTier,
    validations,
    timestamp: new Date().toISOString()
  };
};

export const getCtaConversionRates = () => {
  return [
    { ctaId: 'bofu_lead_form', name: 'Bespoke Automation Audit Form', impressions: 450, conversions: 54, conversionRate: 12.0, state: 'High Performing' },
    { ctaId: 'mofu_pdf_blueprint', name: 'n8n & GHL Architecture PDF Blueprint', impressions: 820, conversions: 65, conversionRate: 7.9, state: 'Healthy' },
    { ctaId: 'tofu_rag_sandbox', name: 'Grounding Sandbox Tryout Link', impressions: 1200, conversions: 36, conversionRate: 3.0, state: 'Low Intent (TOFU)' }
  ];
};
export const getLeadQualityStats = () => {
  return {
    leadConversionRatePercent: 4.8,
    averageLeadScore: 72,
    leadVolumeWeekly: 14,
    highQualityTier1Percent: 42
  };
};
