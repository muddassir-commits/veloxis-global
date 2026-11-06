export interface NavbarMenuItem {
  title: string;
  href: string;
  emoji: string;
  description?: string;
}

export interface NavbarGroup {
  title: string;
  items: NavbarMenuItem[];
}

export const servicesGroups: NavbarGroup[] = [
  { 
    title: "Real Estate Growth", 
    items: [
      {
        title: "Landing Pages & Microsites",
        href: "/services/high-converting-landing-pages",
        emoji: "⚡",
        description: "Project pages with RERA details and WhatsApp capture"
      },
      {
        title: "Meta & Google Ads",
        href: "/services/paid-ads",
        emoji: "🎯",
        description: "Exclusive property leads, measured on site visits"
      },
      {
        title: "AI Chatbot & WhatsApp Automation",
        href: "/services/ai-automation",
        emoji: "🤖",
        description: "Instant replies, qualification and visit booking"
      }
    ] 
  }
];

/**
 * Top-level links after the Services menu, in order. `desktop` is the Tailwind display class for the
 * desktop bar (the bar only has room for all of them on very wide screens); the mobile drawer shows
 * every link with its `mobileTitle`. `activeAlso` lists extra paths that light the link up.
 */
export interface NavbarLink {
  title: string;
  mobileTitle: string;
  href: string;
  desktop: string;
  activeAlso?: string[];
  /** Paths under href that belong to another link (the NRI page sits under /industries/real-estate). */
  exclude?: string[];
}

export const primaryLinks: NavbarLink[] = [
  { title: 'Developers', mobileTitle: 'For Developers', href: '/industries/real-estate', desktop: 'inline-block', exclude: ['/industries/real-estate/nri-buyers'] },
  { title: 'Channel Partners', mobileTitle: 'For Channel Partners', href: '/channel-partners', desktop: 'hidden 2xl:inline-block' },
  { title: 'NRI Buyers', mobileTitle: 'For NRI Buyer Campaigns', href: '/industries/real-estate/nri-buyers', desktop: 'hidden 2xl:inline-block' },
  { title: 'D2C', mobileTitle: 'For D2C Brands', href: '/d2c', desktop: 'inline-block' },
  { title: 'Local Business', mobileTitle: 'For Local Businesses', href: '/local-business', desktop: 'inline-block' },
  { title: 'About', mobileTitle: 'About', href: '/about', desktop: 'inline-block' },
  { title: 'Blog', mobileTitle: 'Blog', href: '/blog', desktop: 'inline-block', activeAlso: ['/playbooks'] },
  { title: 'Guides', mobileTitle: 'Guides', href: '/guides', desktop: 'hidden xl:inline-block' },
];
