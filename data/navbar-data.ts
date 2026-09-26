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
