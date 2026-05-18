/**
 * Hierarchical Service Data Architecture
 * 
 * This structure supports future nested routing (e.g. /services/ai-automation/chatbot),
 * automated submenu generation, and programmatic SEO schema ingestion.
 */

export const serviceData = {
  seo: {
    title: 'Our Services | AI Automation & Web Development | Veloxis Global',
    description: 'Explore our core services including AI automation, n8n workflows, CRM implementation, AI lead generation, and custom web development designed for growth.'
  },
  hero: {
    badge: 'Core Services',
    title: 'AI Automation Services for Modern Businesses',
    subtitle: 'At Veloxis Global, we deliver AI automation services designed to help modern businesses reduce manual work, improve productivity, and scale efficiently. Our automation solutions combine AI systems, workflow automation, and smart integrations to create streamlined business operations.'
  },
  
  // Hierarchical service registry
  registry: {
    'ai-automation': {
      id: 'ai-automation',
      slug: '/ai-automation-services',
      title: 'AI Automation Systems',
      shortDesc: 'We create intelligent AI automation systems that streamline repetitive tasks, automate operations, and improve workflow efficiency.',
      seo: {
        title: 'AI Automation Systems | Veloxis Global',
        description: 'Intelligent AI automation systems to streamline repetitive tasks and improve workflow efficiency.'
      },
      points: [
        'Reduce repetitive manual work',
        'Improve operational efficiency',
        'Automate customer workflows',
        'Scale business operations faster'
      ],
      ctaText: 'Explore AI Automation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      parent: null,
      children: [] // Future nested services
    },
    'n8n-workflows': {
      id: 'n8n-workflows',
      slug: '/n8n-workflow-automation',
      title: 'n8n Workflow Automation',
      shortDesc: 'Connect applications, automate data flow, and eliminate repetitive processes with scalable n8n workflows.',
      seo: {
        title: 'n8n Workflow Automation | Veloxis Global',
        description: 'Scalable n8n workflows that integrate CRMs, websites, APIs, and marketing platforms into one efficient ecosystem.'
      },
      points: [
        'CRM automation & Lead routing',
        'API integrations',
        'Email and notification systems',
        'Data synchronization'
      ],
      ctaText: 'Explore n8n Workflows',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      parent: null,
      children: []
    },
    'ai-lead-generation': {
      id: 'ai-lead-generation',
      slug: '/ai-lead-generation-services',
      title: 'AI Lead Generation',
      shortDesc: 'Build AI systems that automate prospecting, qualification, follow-ups, and outreach to generate more leads efficiently.',
      seo: {
        title: 'AI Lead Generation | Veloxis Global',
        description: 'AI lead generation systems that automate prospecting, qualification, and follow-ups.'
      },
      points: [
        'Automated lead capture',
        'AI-powered qualification systems',
        'Smart follow-up automation',
        'Sales pipeline automation'
      ],
      ctaText: 'Explore Lead Generation',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      parent: null,
      children: []
    },
    'ai-websites': {
      id: 'ai-websites',
      slug: '/ai-website-development',
      title: 'AI Website Development',
      shortDesc: 'AI-powered websites optimized for lead generation, automation, and business growth.',
      seo: {
        title: 'AI Website Development | Veloxis Global',
        description: 'AI-powered websites optimized for lead generation, automation, and business growth.'
      },
      points: [
        'Lead generation optimization',
        'Workflow automation integrations',
        'AI chatbot integration',
        'CRM connectivity'
      ],
      ctaText: 'Explore AI Websites',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      parent: null,
      children: []
    }
  }
};

// Helper function to return array of top-level services for grid rendering
export const getTopLevelServices = () => {
  return Object.values(serviceData.registry).filter(service => service.parent === null);
};
