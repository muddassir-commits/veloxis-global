import fs from 'fs';
import path from 'path';
import { ALLOWED_PROGRAMMATIC_COMBINATIONS } from '../src/data/programmatic/combinations.js';
import { ENTITY_GRAPH } from '../src/data/programmatic/entities.js';

function parseFrontmatter(rawContent) {
  if (!rawContent) return { data: {}, content: '' };
  const lines = rawContent.split(/\r?\n/);
  if (lines.length === 0 || lines[0].trim() !== '---') {
    return { data: {}, content: rawContent };
  }

  const data = {};
  let contentLines = [];
  let inFrontmatter = true;
  let currentKey = null;
  let currentObject = null;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (inFrontmatter) {
      const trimmed = line.trim();
      if (trimmed === '---') {
        inFrontmatter = false;
        continue;
      }
      if (line.startsWith(' ') || line.startsWith('\t')) {
        if (currentKey && currentObject) {
          const colonIdx = line.indexOf(':');
          if (colonIdx !== -1) {
            const subKey = line.substring(0, colonIdx).trim();
            let subVal = line.substring(colonIdx + 1).trim();
            if (subVal.startsWith('"') && subVal.endsWith('"')) {
              subVal = subVal.substring(1, subVal.length - 1);
            } else if (subVal.startsWith("'") && subVal.endsWith("'")) {
              subVal = subVal.substring(1, subVal.length - 1);
            }
            currentObject[subKey] = subVal;
          }
        }
      } else {
        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
          const key = line.substring(0, colonIdx).trim();
          let val = line.substring(colonIdx + 1).trim();
          if (val === '') {
            currentKey = key;
            currentObject = {};
            data[key] = currentObject;
          } else {
            currentKey = key;
            currentObject = null;
            if (val.startsWith('[') && val.endsWith(']')) {
              data[key] = val.substring(1, val.length - 1).split(',').map(s => {
                const clean = s.trim();
                return (clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))
                  ? clean.substring(1, clean.length - 1)
                  : clean;
              });
            } else {
              if (val.startsWith('"') && val.endsWith('"')) {
                val = val.substring(1, val.length - 1);
              } else if (val.startsWith("'") && val.endsWith("'")) {
                val = val.substring(1, val.length - 1);
              }
              data[key] = val;
            }
          }
        }
      }
    } else {
      contentLines.push(line);
    }
  }
  return { data, content: contentLines.join('\n') };
}

/**
 * Automated Sitemap Generation Script
 * 
 * Runs pre-build to recursively scan the /content/ directory, parse YAML frontmatter,
 * and dynamically construct a public sitemap.xml.
 */

const BASE_URL = 'https://veloxisglobal.com';
const CONTENT_DIR = path.resolve('./content');
const PUBLIC_DIR = path.resolve('./public');

// Explicit static foundation routes to always include
const STATIC_ROUTES = [
  '',
  '/about',
  '/services',
  '/projects',
  '/contact'
];

function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith('.md')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function generateSitemap() {
  console.log('[SEO Builder] Scanning content for sitemap generation...');
  
  const markdownFiles = getAllMarkdownFiles(CONTENT_DIR);
  const dynamicRoutes = [];

  markdownFiles.forEach(filePath => {
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontmatter(rawMarkdown);

    // Enforce publication state (strictly published only)
    const status = data.status || 'published';
    if (status !== 'published') return;

    // Determine the route
    const relativePath = filePath.replace(CONTENT_DIR, '').replace(/\\/g, '/');
    const pathParts = relativePath.split('/');
    // e.g. ["", "services", "ai-automation.en.md"]
    const collection = pathParts[1];
    const fileName = pathParts[pathParts.length - 1];
    const nameParts = fileName.replace('.md', '').split('.');
    
    // Frontmatter overrides filename slug
    const slug = data.slug || nameParts[0];

    // For legacy root-level slugs (e.g. ai-automation-services), we map directly to root.
    // For other collections (e.g. blog), we map to /collection/slug
    // In our architecture, the service routes are legacy root level.
    let route = `/${collection}/${slug}`;
    if (collection === 'services' && data.slug) {
       // If a service has an explicit slug override, we mapped it to root in App.jsx.
       route = `/${data.slug}`;
    }

    dynamicRoutes.push({
      url: route,
      lastmod: data.date ? new Date(data.date).toISOString() : new Date().toISOString()
    });
  });

  // Construct XML
  const programmaticRoutes = ALLOWED_PROGRAMMATIC_COMBINATIONS.map(combo => ({
    url: `/${combo.slug}`,
    lastmod: new Date().toISOString()
  }));

  const allRoutes = [
    ...STATIC_ROUTES.map(route => ({ url: route, lastmod: new Date().toISOString() })),
    ...dynamicRoutes,
    ...programmaticRoutes
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`).join('\n')}
</urlset>`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
  console.log(`[SEO Builder] sitemap.xml generated successfully with ${allRoutes.length} URLs.`);
}

generateSitemap();

function generateStableEmbedding(text) {
  const dims = 384;
  const embedding = new Array(dims).fill(0);
  const words = text.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  if (words.length === 0) return embedding;

  words.forEach(word => {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      hash = word.charCodeAt(i) + ((hash << 5) - hash);
    }
    for (let i = 0; i < 3; i++) {
      const idx = Math.abs((hash + i * 101) % dims);
      embedding[idx] += 1.0;
    }
  });

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
}

function generateKnowledgeGraph() {
  console.log('[Knowledge Builder] Generating pre-compiled semantic chunks index...');
  
  const markdownFiles = getAllMarkdownFiles(CONTENT_DIR);
  const chunks = [];

  // 1. Chunk Markdown
  markdownFiles.forEach(filePath => {
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = parseFrontmatter(rawMarkdown);

    const status = data.status || 'published';
    if (status !== 'published') return;

    const relativePath = filePath.replace(CONTENT_DIR, '').replace(/\\/g, '/');
    const pathParts = relativePath.split('/');
    const collection = pathParts[1];
    const fileName = pathParts[pathParts.length - 1];
    const nameParts = fileName.replace('.md', '').split('.');
    const slug = data.slug || nameParts[0];

    const title = data.title || 'Untitled';
    const lines = content.split('\n');
    let currentHeader = '';
    let currentLines = [];
    let sectionIdx = 0;

    const sourceUrl = collection === 'services' && data.slug ? `/${data.slug}` : `/${collection}/${slug}`;

    const saveChunk = (header, linesBlock) => {
      const body = linesBlock.join('\n').trim();
      if (body.length < 50) return;

      const chunkId = `markdown-${collection}-${slug}-sec-${sectionIdx++}`;
      const chunkText = `# ${title} - ${header || 'Overview'}\n${body}`;

      let intent = 'informational';
      if (collection === 'services' || body.toLowerCase().includes('consultation') || body.toLowerCase().includes('lead')) {
        intent = 'commercial';
      }

      let type = 'implementation';
      const lowerHeader = header.toLowerCase();
      if (lowerHeader.includes('faq') || lowerHeader.includes('question')) {
        type = 'faq';
      } else if (lowerHeader.includes('workflow') || lowerHeader.includes('capabilities') || lowerHeader.includes('how')) {
        type = 'workflow';
      } else if (lowerHeader.includes('metric') || lowerHeader.includes('impact') || lowerHeader.includes('case')) {
        type = 'proof';
      }

      chunks.push({
        id: chunkId,
        type,
        content: chunkText,
        sourceUrl,
        metadata: {
          intent,
          confidence: 0.90,
          tags: data.tags || [],
          authority: collection === 'services' ? 1.0 : 0.7,
          canonicalOwner: title,
          embeddingMock: generateStableEmbedding(chunkText),
          lastUpdated: data.date || new Date().toISOString().split('T')[0]
        }
      });
    };

    lines.forEach(line => {
      if (line.startsWith('## ') || line.startsWith('### ')) {
        if (currentLines.length > 0 || currentHeader) {
          saveChunk(currentHeader, currentLines);
        }
        currentHeader = line.replace(/^###?\s+/, '').trim();
        currentLines = [];
      } else {
        currentLines.push(line);
      }
    });

    if (currentLines.length > 0 || currentHeader) {
      saveChunk(currentHeader, currentLines);
    }
  });

  // 2. Chunk Entity Graph
  if (ENTITY_GRAPH) {
    // 2.1 Services Chunks
    Object.keys(ENTITY_GRAPH.services).forEach(sId => {
      const service = ENTITY_GRAPH.services[sId];
      const canonicalName = service.name;
      const baseSlug = sId === 'ai-automation' ? 'ai-automation-services' : sId;

      const summaryText = `Service Profile: ${service.name}\nDescription: ${service.shortDesc}\nTechnologies Used: ${service.relatedTechnologies.join(', ')}`;
      chunks.push({
        id: `entity-service-${sId}-summary`,
        type: 'summary',
        content: summaryText,
        sourceUrl: `/${baseSlug}`,
        metadata: {
          intent: 'commercial',
          confidence: 0.95,
          tags: service.relatedTechnologies,
          authority: 1.0,
          canonicalOwner: canonicalName,
          embeddingMock: generateStableEmbedding(summaryText),
          lastUpdated: '2026-05-17'
        }
      });

      if (service.faqs) {
        service.faqs.forEach((faq, idx) => {
          const faqText = `Question: ${faq.q}\nAnswer: ${faq.a}`;
          chunks.push({
            id: `entity-service-${sId}-faq-${idx}`,
            type: 'faq',
            content: faqText,
            sourceUrl: `/${baseSlug}`,
            metadata: {
              intent: 'informational',
              confidence: 0.98,
              tags: service.relatedTechnologies.concat(['faq']),
              authority: 0.9,
              canonicalOwner: canonicalName,
              embeddingMock: generateStableEmbedding(faqText),
              lastUpdated: '2026-05-17'
            }
          });
        });
      }

      if (service.proof) {
        const proofText = `Performance Metric: ${service.proof.metric}\nResult Label: ${service.proof.label}\nReal Case Example: ${service.proof.caseStudy}`;
        chunks.push({
          id: `entity-service-${sId}-proof`,
          type: 'proof',
          content: proofText,
          sourceUrl: `/${baseSlug}`,
          metadata: {
            intent: 'commercial',
            confidence: 0.96,
            tags: ['metrics', 'analytics', 'success'],
            authority: 0.95,
            canonicalOwner: canonicalName,
            embeddingMock: generateStableEmbedding(proofText),
            lastUpdated: '2026-05-17'
          }
        });
      }
    });

    // 2.2 Industry & Location Chunks
    Object.keys(ENTITY_GRAPH.industries).forEach(indId => {
      const industry = ENTITY_GRAPH.industries[indId];
      if (industry.useCaseExamples) {
        industry.useCaseExamples.forEach((uc, idx) => {
          const ucText = `Industry: ${industry.name}\nTarget Audience: ${industry.targetAudience}\nUse Case Blueprint: ${uc.title}\nDescription: ${uc.desc}`;
          chunks.push({
            id: `entity-industry-${indId}-uc-${idx}`,
            type: 'workflow',
            content: ucText,
            sourceUrl: `/ai-automation-for-${indId}`,
            metadata: {
              intent: 'commercial',
              confidence: 0.94,
              tags: [indId, 'use-case', 'blueprint'],
              authority: 0.85,
              canonicalOwner: industry.name,
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
            type: 'workflow',
            content: locText,
            sourceUrl,
            metadata: {
              intent: 'local',
              confidence: 0.92,
              tags: [locId, 'local-study'],
              authority: 0.6,
              canonicalOwner: location.name,
              embeddingMock: generateStableEmbedding(locText),
              lastUpdated: '2026-05-17'
            }
          });
        });
      }
    });
  }

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'knowledge-graph.json'), JSON.stringify(chunks, null, 2));
  console.log(`[Knowledge Builder] knowledge-graph.json generated successfully with ${chunks.length} chunks.`);
}

generateKnowledgeGraph();
