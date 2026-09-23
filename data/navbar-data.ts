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
        title: "Landing Pages",
        href: "/services/high-converting-landing-pages",
        emoji: "⚡",
        description: "High-converting single & multi-property pages"
      },
      {
        title: "Meta & Google Ads",
        href: "/services/paid-ads",
        emoji: "🎯",
        description: "Laser-targeted local real estate leads"
      },
      {
        title: "AI & WhatsApp Automation",
        href: "/services/ai-automation",
        emoji: "🤖",
        description: "Instant lead routing and auto-followups"
      }
    ] 
  }
];
