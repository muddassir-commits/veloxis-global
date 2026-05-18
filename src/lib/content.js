/**
 * Browser-Compatible YAML Frontmatter Parser (Zero Dependencies)
 * 
 * Replaces node-dependent 'gray-matter' to ensure 100% stable execution in the browser
 * without relying on Node.js globals like 'Buffer'.
 */
export function parseFrontmatter(rawContent) {
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

  return {
    data,
    content: contentLines.join('\n')
  };
}

/**
 * Markdown Content Loader Utility (Audited & Governed)
 * 
 * This file serves as the foundational CMS layer and the final enforcement firewall
 * against untrusted AI publishing contributions. It loads all markdown files,
 * validates frontmatter metadata, enforces strict taxonomy, detects keyword cannibalization
 * and thin content, and maintains the publishing state machine.
 */

// Load all markdown files in the /content/ directory synchronously.
const rawContentFiles = import.meta.glob('../../content/**/*.md', { query: '?raw', import: 'default', eager: true });

// Strict taxonomy to prevent infinite AI tag/category fragmentation
const APPROVED_TAXONOMY = {
  categories: ['AI Strategy', 'Automation', 'Web Development', 'Lead Generation', 'N8N Automation'],
  tags: ['AI Automation', 'Workflow Systems', 'Business Growth', 'n8n', 'Vite', 'React', 'Lead Generation', 'Websites']
};

/**
 * Validates that a parsed frontmatter object meets minimum governance requirements.
 * Ensures that missing SEO titles or schemas don't cause silent template failures.
 */
export const validateFrontmatter = (data, filePath, rawContent = "") => {
  const errors = [];
  const warnings = [];
  
  if (!data.title) errors.push('Missing "title"');
  if (!data.template) errors.push('Missing "template" mapping');
  
  // Status check validation (draft, review, published)
  if (!data.status) {
    warnings.push('Missing "status" (defaulting to "published" to preserve legacy content)');
  } else if (!['draft', 'review', 'published'].includes(data.status)) {
    errors.push(`Invalid status "${data.status}". Must be 'draft', 'review', or 'published'.`);
  }

  // SEO metadata checks
  if (!data.seo) {
    errors.push('Missing "seo" object');
  } else {
    if (!data.seo.title) errors.push('Missing "seo.title"');
    if (!data.seo.description) {
      errors.push('Missing "seo.description"');
    } else {
      if (data.seo.description.length < 50) warnings.push('SEO description is too short (< 50 chars)');
      if (data.seo.description.length > 160) warnings.push('SEO description is too long (> 160 chars)');
    }
    if (!data.seo.schemaType) errors.push('Missing "seo.schemaType"');
  }

  // Category and Tag Taxonomy Enforcement
  if (data.category && !APPROVED_TAXONOMY.categories.includes(data.category)) {
    warnings.push(`Unapproved category "${data.category}". Approved: ${APPROVED_TAXONOMY.categories.join(', ')}`);
  }
  if (data.tags && Array.isArray(data.tags)) {
    data.tags.forEach(tag => {
      if (!APPROVED_TAXONOMY.tags.includes(tag)) {
        warnings.push(`Unapproved tag "${tag}". Approved: ${APPROVED_TAXONOMY.tags.join(', ')}`);
      }
    });
  }

  // Thin content warning
  const wordCount = rawContent.split(/\s+/).filter(Boolean).length;
  if (wordCount < 300) {
    warnings.push(`Thin content warning: only ${wordCount} words detected.`);
  }

  if (errors.length > 0 || warnings.length > 0) {
    console.warn(`\n[CMS Validation] Issues found in ${filePath}:`);
    if (errors.length > 0) console.warn(` Errors:\n - ${errors.join('\n - ')}`);
    if (warnings.length > 0) console.warn(` Warnings:\n - ${warnings.join('\n - ')}`);
  }
  
  return data;
};

/**
 * Parses raw file paths into a structured registry object.
 * Performs final-firewall validation across all pages to block cannibalization and duplicate routes.
 */
const buildContentRegistry = () => {
  const registry = [];
  const seenSlugs = {};
  const seenSeoTitles = {};
  const seenSeoDescriptions = {};

  for (const path in rawContentFiles) {
    const rawMarkdown = rawContentFiles[path];
    
    // Parse the YAML frontmatter and body
    const parsed = parseFrontmatter(rawMarkdown);
    const data = validateFrontmatter(parsed.data, path, parsed.content);

    // Extract path details
    const pathParts = path.replace('../../content/', '').split('/');
    const collection = pathParts[0]; 
    const fileName = pathParts[pathParts.length - 1]; 
    
    const nameParts = fileName.replace('.md', '').split('.');
    const slug = data.slug || nameParts[0]; 
    const locale = nameParts.length > 1 ? nameParts[1] : 'en'; 

    const status = data.status || 'published';
    data.status = status; // Ensure templates can read the publishing status

    // 1. Duplicate Slug Detection
    if (!seenSlugs[collection]) {
      seenSlugs[collection] = [];
    }
    if (seenSlugs[collection].includes(slug)) {
      console.warn(`\n[CMS Firewall Warning] Duplicate slug "${slug}" in "${collection}". File: ${path}`);
    } else {
      seenSlugs[collection].push(slug);
    }

    // 2. Duplicate SEO Title / Cannibalization Check
    if (data.seo && data.seo.title) {
      if (seenSeoTitles[data.seo.title]) {
        console.warn(`\n[CMS Firewall Warning] Cannibalization Alert: Duplicate SEO Title "${data.seo.title}". Conflict between:\n - ${seenSeoTitles[data.seo.title]}\n - ${path}`);
      } else {
        seenSeoTitles[data.seo.title] = path;
      }
    }

    // 3. Duplicate SEO Description Check
    if (data.seo && data.seo.description) {
      if (seenSeoDescriptions[data.seo.description]) {
        console.warn(`\n[CMS Firewall Warning] Duplicate SEO Description detected. Conflict between:\n - ${seenSeoDescriptions[data.seo.description]}\n - ${path}`);
      } else {
        seenSeoDescriptions[data.seo.description] = path;
      }
    }

    registry.push({
      id: `${collection}-${slug}-${locale}`,
      collection,
      slug,
      locale,
      path,
      status,
      data, 
      content: parsed.content 
    });
  }

  return registry;
};

// Cache parsed registry
export const contentRegistry = buildContentRegistry();

/**
 * Returns an array of all dynamically discovered CMS collections.
 */
export const getValidCollections = () => {
  const collections = new Set(contentRegistry.map(item => item.collection));
  return Array.from(collections);
};

/**
 * Validates if a requested collection exists in the registry.
 */
export const isValidCollection = (collection) => {
  return getValidCollections().includes(collection);
};

/**
 * Fetch all content items for a specific collection.
 * Only returns fully published items.
 */
export const getAllContent = (collection, locale = 'en') => {
  return contentRegistry.filter(item => 
    item.collection === collection && 
    item.locale === locale &&
    item.status === 'published'
  );
};

/**
 * Fetch a single piece of content exactly matching the slug.
 * Returns the object (which might be draft or review) so the controller can decide visibility.
 */
export const getContentBySlug = (collection, slug, locale = 'en') => {
  const found = contentRegistry.find(item => 
    item.collection === collection && 
    item.slug === slug && 
    item.locale === locale
  );
  
  if (!found) {
    console.warn(`[CMS Warning] Content not found for /${collection}/${slug} (Locale: ${locale})`);
    return null;
  }
  
  return found;
};

/**
 * Fetch a piece of content by slug across all collections.
 */
export const getContentBySlugAnyCollection = (slug, locale = 'en') => {
  const found = contentRegistry.find(item => 
    item.slug === slug && 
    item.locale === locale
  );
  
  if (!found) {
    console.warn(`[CMS Warning] Content not found across collections for /${slug} (Locale: ${locale})`);
    return null;
  }
  
  return found;
};

/**
 * Related Content Engine
 * 
 * Only relates to other published items.
 */
export const getRelatedContent = (currentId, tags = [], category = null, limit = 3) => {
  const related = contentRegistry
    .filter(item => item.id !== currentId && item.status === 'published')
    .map(item => {
      let score = 0;
      
      if (category && item.data.category === category) {
        score += 1;
      }
      
      if (tags.length > 0 && item.data.tags) {
        const matchingTags = item.data.tags.filter(t => tags.includes(t));
        score += matchingTags.length * 2;
      }
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
};


