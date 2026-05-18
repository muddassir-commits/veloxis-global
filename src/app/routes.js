/**
 * Centralized Route Configuration
 *
 * This file acts as the single source of truth for all application routes.
 * It maps route IDs to their actual paths, enabling a safe getRoute() utility
 * and preparing the app for programmatic SEO and CMS integration.
 */

export const routesConfig = {
  home: { path: '/', schemaType: 'WebSite' },
  about: { path: '/about', schemaType: 'AboutPage' },
  services: { path: '/services', schemaType: 'CollectionPage' },
  projects: { path: '/projects', schemaType: 'CollectionPage' },
  projectDetail: { path: '/projects/:slug', schemaType: 'Article' },
  contact: { path: '/contact', schemaType: 'ContactPage' },
  
  // Explicitly mapping legacy service routes to preserve SEO
  // These will eventually be replaced by a dynamic /services/:slug catch-all
  // but for Phase 2D, they map 1-to-1 with currently indexed URLs.
  serviceAIAutomation: { path: '/ai-automation-services', schemaType: 'Service' },
  serviceN8nWorkflows: { path: '/n8n-workflow-automation', schemaType: 'Service' },
  serviceAILeadGen: { path: '/ai-lead-generation-services', schemaType: 'Service' },
  serviceAIWebsites: { path: '/ai-website-development', schemaType: 'Service' },

  // Sample blog route mapped explicitly to validate blog CMS rendering safely
  blogSample: { path: '/blog/future-of-ai-automation', schemaType: 'Article' }
};

/**
 * Utility function to dynamically generate internal links.
 * Usage: getRoute('about') // Returns '/about'
 */
export const getRoute = (routeId, params = {}) => {
  const route = routesConfig[routeId];
  if (!route) {
    console.warn(`Route ID "${routeId}" not found in routesConfig.`);
    return '/';
  }

  let path = route.path;
  
  // Replace params like :slug with actual values
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });

  return path;
};
