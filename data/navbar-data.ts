// Header menus (components/layout/Navbar.tsx). Kept deliberately small (owner, 8 Nov 2026):
// Logo · Services ▾ · Industries ▾ · Blog · About · [Free Audit]. Real estate sub-pages (Lead System,
// Channel Partners, NRI, Playbooks, city pages) are linked from /industries/real-estate and the footer.

export type NavIcon = 'ads' | 'web' | 'seo' | 'automation' | 'ecommerce' | 'local' | 'realestate' | 'shopify' | 'cro' | 'retention';

export interface NavbarMenuItem {
  title: string;
  href: string;
  icon: NavIcon;
  description: string;
}

export interface NavbarMenu {
  /** Button label in the header */
  title: string;
  /** Section the button lights up for (pathname starts with it) */
  activePrefix: string;
  items: NavbarMenuItem[];
  /** "All services" / "All industries" link at the bottom of the panel */
  all: { title: string; href: string };
}

export const servicesMenu: NavbarMenu = {
  title: 'Services',
  activePrefix: '/services',
  items: [
    { title: 'E-commerce Marketing', href: '/services/ecommerce-marketing', icon: 'ecommerce', description: 'Your outsourced growth team for online stores' },
    { title: 'Meta & Google Ads', href: '/services/paid-ads', icon: 'ads', description: 'Campaigns judged on orders, not clicks' },
    { title: 'Shopify Development', href: '/services/shopify-development', icon: 'shopify', description: 'Stores built for phones and Indian buyers' },
    { title: 'Conversion Optimisation', href: '/services/conversion-rate-optimization', icon: 'cro', description: 'More orders from the traffic you already pay for' },
    { title: 'Email & WhatsApp Marketing', href: '/services/email-whatsapp-marketing', icon: 'retention', description: 'Cart recovery and repeat orders' },
    { title: 'Websites & Landing Pages', href: '/services/high-converting-landing-pages', icon: 'web', description: 'Fast pages that turn visits into enquiries' },
    { title: 'SEO & Local SEO', href: '/services/seo', icon: 'seo', description: 'Search, Google Business Profile and Maps visibility' },
    { title: 'WhatsApp & AI Automation', href: '/services/ai-automation', icon: 'automation', description: 'Instant replies and follow-ups for every enquiry' },
  ],
  all: { title: 'All services', href: '/services' },
};

export const industriesMenu: NavbarMenu = {
  title: 'Industries',
  activePrefix: '/industries',
  items: [
    { title: 'E-commerce & D2C', href: '/industries/ecommerce', icon: 'ecommerce', description: 'More orders from your own online store' },
    { title: 'Local Businesses', href: '/industries/local-business', icon: 'local', description: 'Clinics, dentists, salons and home services' },
    { title: 'Real Estate', href: '/industries/real-estate', icon: 'realestate', description: 'Builders, brokers and channel partners' },
  ],
  all: { title: 'All industries', href: '/industries' },
};

export const navMenus: NavbarMenu[] = [servicesMenu, industriesMenu];

/** Plain links after the two menus, in order. */
export const primaryLinks: { title: string; href: string; activeAlso?: string[] }[] = [
  { title: 'Blog', href: '/blog', activeAlso: ['/guides'] },
  { title: 'About', href: '/about' },
];

/** The header's main button. /free-audit is the personal review page; the self-serve tool is /tools/website-audit. */
export const freeAuditLink = { title: 'Free Audit', href: '/free-audit' };
