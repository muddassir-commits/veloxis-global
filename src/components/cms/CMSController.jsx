import React from 'react';
import { useParams } from 'react-router-dom';
import { getContentBySlug, getContentBySlugAnyCollection, isValidCollection } from '../../lib/content';
import { composeProgrammaticPage } from '../../lib/programmatic';
import ServiceDetail from '../templates/ServiceDetail';
import BlogDetail from '../templates/BlogDetail';
import NotFound from '../templates/NotFound';
import ServiceIndustryDetail from '../templates/ServiceIndustryDetail';
import ServiceLocationDetail from '../templates/ServiceLocationDetail';
import ComparisonPageDetail from '../templates/ComparisonPageDetail';
import IndustryAutomationDetail from '../templates/IndustryAutomationDetail';
import RetrievalSandbox from '../templates/RetrievalSandbox';

/**
 * CMS Controller
 * 
 * Acts as the bridge between explicit routes (and future dynamic routes)
 * and the markdown content registry. It fetches the parsed markdown data
 * and dynamically mounts the correct React template.
 */
const CMSController = ({ collection: propCollection, slug: propSlug }) => {
  const params = useParams();
  
  // Use explicit props if provided (legacy explicit routes), otherwise fall back to wildcard params
  const collection = propCollection || params.collection;
  const slug = propSlug || params.slug;

  // Intercept virtual developer RAG sandbox
  if (slug === 'knowledge-lab') {
    return <RetrievalSandbox />;
  }

  let contentItem = null;

  // 1. Safe Route Validation Layer: Collection & Slug Check
  if (collection) {
    if (!isValidCollection(collection)) {
      return <NotFound message={`The collection "${collection}" does not exist in our system.`} />;
    }
    contentItem = getContentBySlug(collection, slug);
  } else if (slug) {
    // If no collection is defined but a slug exists (e.g., root level wildcard /:slug)
    contentItem = getContentBySlugAnyCollection(slug);
  } else {
    // If neither exists, this shouldn't render via CMS Controller.
    return <NotFound message={`Invalid CMS route request.`} />;
  }

  // 2. Safe Fallback if content doesn't exist
  if (!contentItem) {
    // Intercept as a virtual programmatic SEO landing page
    const progData = composeProgrammaticPage(slug);
    if (progData) {
      if (progData.intent === 'commercial') {
        return <ServiceIndustryDetail pageData={progData} />;
      }
      if (progData.intent === 'local') {
        return <ServiceLocationDetail pageData={progData} />;
      }
      if (progData.intent === 'comparison') {
        return <ComparisonPageDetail pageData={progData} />;
      }
      return <IndustryAutomationDetail pageData={progData} />;
    }

    const errorCollection = collection ? ` in the ${collection} registry` : '';
    return <NotFound message={`The requested content "${slug}" could not be located${errorCollection}.`} />;
  }

  // 3. Publishing Lifecycle Guard: Block draft content
  if (contentItem.status === 'draft') {
    return <NotFound message={`The requested document "${slug}" is currently in draft mode and is not public.`} />;
  }

  const { data, content } = contentItem;

  // 3. Safe Template Mapping
  // In a fully dynamic setup, we would map data.template to a dynamic import.
  // For safety in this controlled phase, we explicitly check and mount templates.
  
  if (data.template === 'ServiceDetail') {
    return (
      <ServiceDetail 
        serviceId={data.id} 
        markdownContent={content} 
        cmsData={data} 
      />
    );
  }
  
  if (data.template === 'BlogDetail') {
    return (
      <BlogDetail 
        cmsData={data}
        markdownContent={content}
      />
    );
  }

  // Fallback if frontmatter specifies an unknown template
  return (
    <div style={{ paddingTop: '150px', textAlign: 'center', color: '#fff' }}>
      <h1>Template Error</h1>
      <p>The template "{data.template}" is not recognized by the CMS Controller.</p>
    </div>
  );
};

export default CMSController;



