const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://veloxisglobal.com';
const WORKSPACE_DIR = path.resolve(__dirname, '..');
const APP_DIR = path.join(WORKSPACE_DIR, 'app');

console.log(`Starting Improved SEO Audit of Next.js workspace: ${APP_DIR}\n`);

// Helper to recursively get all files in a directory matching an extension
function getFilesRecursive(dir, extension, filesList = []) {
  if (!fs.existsSync(dir)) return filesList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getFilesRecursive(filePath, extension, filesList);
      }
    } else if (file.endsWith(extension)) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

// Helper to extract string values from code (handles double, single and template quotes)
function extractStringValue(propertyName, content) {
  const regexDouble = new RegExp(`${propertyName}:\\s*"([^"]*)"`, 'i');
  const regexSingle = new RegExp(`${propertyName}:\\s*'([^']*)'`, 'i');
  const regexTemplate = new RegExp(`${propertyName}:\\s*\`([^\`]*)\``, 'i');
  
  const matchDouble = content.match(regexDouble);
  if (matchDouble) return matchDouble[1];
  
  const matchSingle = content.match(regexSingle);
  if (matchSingle) return matchSingle[1];
  
  const matchTemplate = content.match(regexTemplate);
  if (matchTemplate) return matchTemplate[1];
  
  return null;
}

// Parse pageMeta from lib/seo-config.ts to get actual string values for variables
const pageMetaMap = {};
try {
  const seoConfigPath = path.join(WORKSPACE_DIR, 'lib', 'seo-config.ts');
  if (fs.existsSync(seoConfigPath)) {
    const seoConfigContent = fs.readFileSync(seoConfigPath, 'utf8');
    const pageMetaMatch = seoConfigContent.match(/export const pageMeta = \{([\s\S]+?)\};/);
    if (pageMetaMatch) {
      const pageMetaBody = pageMetaMatch[1];
      const keys = pageMetaBody.match(/(\w+):\s*\{[\s\S]+?\}/g);
      if (keys) {
        keys.forEach(keyBlock => {
          const keyNameMatch = keyBlock.match(/^(\w+):\s*\{/);
          if (keyNameMatch) {
            const keyName = keyNameMatch[1];
            const title = extractStringValue('title', keyBlock);
            const description = extractStringValue('description', keyBlock);
            const pathVal = extractStringValue('path', keyBlock);
            pageMetaMap[keyName] = { title, description, path: pathVal };
          }
        });
      }
    }
  }
} catch (e) {
  console.warn('Could not parse lib/seo-config.ts for pageMeta maps:', e.message);
}

// Find all Next.js page.tsx files
const pageFiles = getFilesRecursive(APP_DIR, 'page.tsx');
console.log(`Found ${pageFiles.length} page.tsx files to audit.\n`);

const report = {
  summary: {
    totalChecked: 0,
    passed: 0,
    warnings: 0,
    errors: 0
  },
  pages: []
};

// Main auditing logic for a page
function auditPage(pageFilePath) {
  const relativePath = path.relative(WORKSPACE_DIR, pageFilePath).replace(/\\/g, '/');
  const pageContent = fs.readFileSync(pageFilePath, 'utf8');

  // Let's resolve component imports to scan the full page content recursively
  let fullContentToScan = pageContent;
  const pageDir = path.dirname(pageFilePath);
  const scannedFiles = new Set([pageFilePath]);
  
  function resolveAndAppend(filePath, fileContent) {
    const importRegex = /import\s+[\s\S]*?from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(fileContent)) !== null) {
      let importPath = match[1];
      let resolvedPath = null;
      
      if (importPath.startsWith('@/')) {
        resolvedPath = path.join(WORKSPACE_DIR, importPath.substring(2));
      } else if (importPath.startsWith('.')) {
        resolvedPath = path.resolve(path.dirname(filePath), importPath);
      }
      
      if (resolvedPath) {
        const extensions = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];
        let foundFile = null;
        for (const ext of extensions) {
          const checkPath = resolvedPath.endsWith(ext) ? resolvedPath : (resolvedPath + ext);
          if (fs.existsSync(checkPath) && fs.statSync(checkPath).isFile()) {
            foundFile = checkPath;
            break;
          }
        }
        
        if (foundFile && !scannedFiles.has(foundFile)) {
          scannedFiles.add(foundFile);
          const importedContent = fs.readFileSync(foundFile, 'utf8');
          fullContentToScan += '\n\n' + importedContent;
          resolveAndAppend(foundFile, importedContent);
        }
      }
    }
  }
  
  resolveAndAppend(pageFilePath, pageContent);

  const pageResults = {
    file: relativePath,
    title: null,
    description: null,
    canonical: false,
    schema: [],
    h1Count: 0,
    headings: [],
    images: [],
    geoSignals: {
      hasLists: false,
      hasFAQs: false,
      hasSummaryBox: false
    },
    eeatSignals: {
      hasAuthorReference: false,
      hasExpertCitations: false
    },
    accessibility: {
      missingIdsOnInteractive: []
    },
    errors: [],
    warnings: [],
    successes: []
  };

  // 1. Audit Title & Description
  // Find metadata block in page.tsx (either metadata export or generateMetadata function)
  let metadataBlock = '';
  const metadataBlockMatch = pageContent.match(/export\s+(const\s+metadata|function\s+generateMetadata)[\s\S]+?\{([\s\S]+?)\}/i);
  if (metadataBlockMatch) {
    metadataBlock = metadataBlockMatch[0];
  }

  let title = extractStringValue('title', metadataBlock);
  let description = extractStringValue('description', metadataBlock);
  
  // If not found in metadata block, check if metadata block references a pageMeta key (e.g. pageMeta.home.title)
  const pageMetaRefRegex = /pageMeta\.(\w+)/i;
  const pageMetaRefMatch = metadataBlock.match(pageMetaRefRegex);
  if (pageMetaRefMatch) {
    const metaKey = pageMetaRefMatch[1];
    if (pageMetaMap[metaKey]) {
      if (!title) title = pageMetaMap[metaKey].title;
      if (!description) description = pageMetaMap[metaKey].description;
    }
  }

  // Fallback to searching the full concatenated code in case metadata is declared dynamically in helper exports
  if (!title) title = extractStringValue('title', fullContentToScan);
  if (!description) description = extractStringValue('description', fullContentToScan);

  if (title) {
    pageResults.title = title;
    const len = title.length;
    if (len < 40 || len > 70) {
      pageResults.warnings.push(`Title length (${len} chars) is outside optimal 40-70 range: "${title}"`);
    } else {
      pageResults.successes.push(`Optimal title length (${len} chars): "${title}"`);
    }
  } else {
    pageResults.errors.push('Missing explicit SEO Title Metadata.');
  }

  if (description) {
    pageResults.description = description;
    const len = description.length;
    if (len < 100 || len > 170) {
      pageResults.warnings.push(`Description length (${len} chars) is outside optimal 100-170 range: "${description.substring(0, 40)}..."`);
    } else {
      pageResults.successes.push(`Optimal description length (${len} chars)`);
    }
  } else {
    pageResults.errors.push('Missing explicit SEO Description Metadata.');
  }

  // 2. Audit Canonical URL
  if (fullContentToScan.includes('constructMetadata') || fullContentToScan.includes('alternates') || fullContentToScan.includes('canonical:')) {
    pageResults.canonical = true;
    pageResults.successes.push('Canonical URL alternate tag configured.');
  } else {
    pageResults.errors.push('Missing explicit Canonical URL tag.');
  }

  // 3. Audit Schema.org JSON-LD Presence
  const schemaMarkupRegex = /<SchemaMarkup\s+schema=\{([^}]+)\}/g;
  let schemaMatch;
  while ((schemaMatch = schemaMarkupRegex.exec(fullContentToScan)) !== null) {
    pageResults.schema.push(schemaMatch[1]);
  }
  
  if (fullContentToScan.includes('ld+json') || fullContentToScan.includes('generateBreadcrumbSchema') || fullContentToScan.includes('generateServiceSchema') || fullContentToScan.includes('generateFAQSchema') || fullContentToScan.includes('generateOrganizationSchema')) {
    if (pageResults.schema.length === 0) {
      pageResults.schema.push('detected-inline-schema');
    }
  }

  if (pageResults.schema.length > 0) {
    pageResults.successes.push(`Found JSON-LD schema integration.`);
  } else {
    pageResults.warnings.push('No JSON-LD schemas found directly on this page.');
  }

  // 4. Audit Headings (H1 count & nesting)
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1Matches = [...fullContentToScan.matchAll(h1Regex)];
  pageResults.h1Count = h1Matches.length;
  if (pageResults.h1Count === 1) {
    pageResults.successes.push('Exactly one H1 element present.');
  } else if (pageResults.h1Count === 0) {
    pageResults.errors.push('No H1 heading found on page. Every page must have exactly one H1.');
  } else {
    pageResults.errors.push(`Multiple H1 headings found (${pageResults.h1Count}). Pages must only contain one H1.`);
  }

  const generalHeadingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let headMatch;
  while ((headMatch = generalHeadingRegex.exec(fullContentToScan)) !== null) {
    const level = headMatch[1].toLowerCase();
    const text = headMatch[2].replace(/<\/?[^>]+(>|$)/g, '').trim().substring(0, 50);
    pageResults.headings.push({ level, text });
  }

  // 5. Audit Images and Alt texts
  const hasNextImage = fullContentToScan.includes("from 'next/image'") || fullContentToScan.includes('from "next/image"');
  
  const imageTagRegex = /<(Image|img)\s+([^>]+)>/gi;
  let imgMatch;
  while ((imgMatch = imageTagRegex.exec(fullContentToScan)) !== null) {
    const type = imgMatch[1];
    const attributes = imgMatch[2];
    
    if (type === 'Image' && !hasNextImage) {
      continue;
    }
    
    const altRegex = /alt=(?:{([^}]+)}|['"]([^'"]*)['"])/i;
    const altMatch = attributes.match(altRegex);
    const srcRegex = /src=(?:{([^}]+)}|['"]([^'"]*)['"])/i;
    const srcMatch = attributes.match(srcRegex);

    const srcVal = srcMatch ? (srcMatch[1] || srcMatch[2]) : 'unknown-src';
    
    if (!altMatch) {
      pageResults.errors.push(`Missing 'alt' attribute on image: source "${srcVal}"`);
    } else {
      const altValue = (altMatch[1] || altMatch[2] || '').trim();
      if (altValue === '') {
        pageResults.warnings.push(`Empty 'alt' attribute on image: source "${srcVal}"`);
      } else {
        pageResults.images.push({ src: srcVal, alt: altValue });
      }
    }
  }

  // 6. Check for GEO (Generative Engine Optimization) Indicators
  if (fullContentToScan.includes('<ul') || fullContentToScan.includes('<ol') || fullContentToScan.includes('.map(')) {
    pageResults.geoSignals.hasLists = true;
  }
  if (fullContentToScan.includes('FAQ') || fullContentToScan.includes('faqSchema') || fullContentToScan.includes('generateFAQSchema') || fullContentToScan.includes('FaqAccordion')) {
    pageResults.geoSignals.hasFAQs = true;
  }
  if (fullContentToScan.includes('AEO') || fullContentToScan.includes('definition') || fullContentToScan.includes('summary-box') || fullContentToScan.includes('quick-facts')) {
    pageResults.geoSignals.hasSummaryBox = true;
  }

  if (pageResults.geoSignals.hasLists && pageResults.geoSignals.hasFAQs) {
    pageResults.successes.push('Highly GEO-friendly structure (uses bulleted lists and FAQ sections).');
  } else {
    pageResults.warnings.push('Enhance GEO: Add lists and FAQ schema to improve readability for AI Search.');
  }

  // 7. E-E-A-T Signals (Expertise/Authoritativeness)
  if (fullContentToScan.includes('Muddassir') || fullContentToScan.includes('author') || fullContentToScan.includes('publisher')) {
    pageResults.eeatSignals.hasAuthorReference = true;
  }
  if (fullContentToScan.includes('certif') || fullContentToScan.includes('Google-certified') || fullContentToScan.includes('award') || fullContentToScan.includes('trust')) {
    pageResults.eeatSignals.hasExpertCitations = true;
  }

  if (pageResults.eeatSignals.hasAuthorReference && pageResults.eeatSignals.hasExpertCitations) {
    pageResults.successes.push('Strong E-E-A-T Signals (references verified author and certs/citations).');
  } else {
    pageResults.warnings.push('Enhance E-E-A-T: Add details about author qualifications, certifications, or expert links.');
  }

  // 8. Accessibility & Unique IDs on Interactive elements (Button, Link, Input)
  const interactiveRegex = /<(button|input|textarea|select)\s+([^>]+)>/gi;
  let interMatch;
  while ((interMatch = interactiveRegex.exec(fullContentToScan)) !== null) {
    const type = interMatch[1];
    const attrs = interMatch[2];
    if (attrs.includes('type="hidden"') || attrs.includes("type='hidden'")) continue;
    
    const idRegex = /id=(?:{([^}]+)}|['"]([^'"]*)['"])/i;
    const idMatch = attrs.match(idRegex);
    if (!idMatch) {
      const placeholderRegex = /placeholder=['"]([^'"]+)['"]/i;
      const placeholderMatch = attrs.match(placeholderRegex);
      const label = placeholderMatch ? placeholderMatch[1] : (attrs.match(/name=['"]([^'"]+)['"]/i)?.[1] || 'unlabeled');
      pageResults.accessibility.missingIdsOnInteractive.push(`${type} (${label})`);
    }
  }

  if (pageResults.accessibility.missingIdsOnInteractive.length > 0) {
    pageResults.warnings.push(`Missing unique IDs on interactive elements: ${pageResults.accessibility.missingIdsOnInteractive.join(', ')}`);
  } else {
    pageResults.successes.push('All parsed interactive elements have unique IDs.');
  }

  return pageResults;
}

// Audit all discovered pages
pageFiles.forEach(file => {
  report.summary.totalChecked++;
  const result = auditPage(file);
  if (result.errors.length > 0) report.summary.errors++;
  else if (result.warnings.length > 0) report.summary.warnings++;
  else report.summary.passed++;
  report.pages.push(result);
});

// Compile Markdown Report
let mdReport = `# SEO Audit and Analysis Report

Generated on: ${new Date().toISOString().substring(0, 10)}
Workspace: Veloxis Global

## Executive Summary

| Metrics | Value |
| :--- | :--- |
| **Total Checked Pages** | ${report.summary.totalChecked} |
| **Fully Passed Pages** | ${report.summary.passed} |
| **Pages with Warnings** | ${report.summary.warnings} |
| **Pages with Errors** | ${report.summary.errors} |

---

## Detailed Audit Results

`;

report.pages.forEach(p => {
  const statusIcon = p.errors.length > 0 ? '❌ ERROR' : (p.warnings.length > 0 ? '⚠️ WARNING' : '✅ PASSED');
  mdReport += `### ${p.file} (${statusIcon})\n\n`;
  
  if (p.title) {
    mdReport += `- **Meta Title**: \`${p.title}\` (${p.title.length} characters)\n`;
  } else {
    mdReport += `- **Meta Title**: ❌ MISSING\n`;
  }

  if (p.description) {
    mdReport += `- **Meta Description**: \`${p.description.substring(0, 80)}...\` (${p.description.length} characters)\n`;
  } else {
    mdReport += `- **Meta Description**: ❌ MISSING\n`;
  }

  mdReport += `- **Canonical Link**: ${p.canonical ? '✅ Configured' : '❌ MISSING'}\n`;
  mdReport += `- **JSON-LD Schema**: ${p.schema.length > 0 ? `✅ Configured` : '⚠️ None detected'}\n`;
  mdReport += `- **Heading H1 Count**: ${p.h1Count} heading(s)\n`;
  mdReport += `- **Total Images Audited**: ${p.images.length} image(s)\n`;
  
  if (p.errors.length > 0) {
    mdReport += `\n#### ❌ Critical Fixes Required (${p.errors.length})\n`;
    p.errors.forEach(err => {
      mdReport += `- ${err}\n`;
    });
  }

  if (p.warnings.length > 0) {
    mdReport += `\n#### ⚠️ SEO Warnings & Improvements (${p.warnings.length})\n`;
    p.warnings.forEach(warn => {
      mdReport += `- ${warn}\n`;
    });
  }

  if (p.successes.length > 0) {
    mdReport += `\n#### ✅ Passed Checks\n`;
    p.successes.forEach(succ => {
      mdReport += `- ${succ}\n`;
    });
  }

  mdReport += `\n---\n\n`;
});

// Save markdown report to workspace
const reportPath = path.join(WORKSPACE_DIR, 'seo_audit_report.md');
fs.writeFileSync(reportPath, mdReport, 'utf8');

console.log(`SEO Audit completed successfully!`);
console.log(`Markdown report saved to: ${reportPath}`);
console.log(`Summary: Checked ${report.summary.totalChecked} pages. Errors: ${report.summary.errors}, Warnings: ${report.summary.warnings}, Passed: ${report.summary.passed}`);
