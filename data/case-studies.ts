export interface CaseStudySection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface CaseStudyMetricTable {
  metricName: string;
  beforeValue: string;
  afterValue: string;
  improvementPercentage: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  location: string;
  duration: string;
  challenge: string;
  strategy: string;
  metrics: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
  sections: CaseStudySection[];
  dataComparison: CaseStudyMetricTable[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "delhi-real-estate",
    slug: "delhi-real-estate-developer",
    title: "How We Took a Delhi Real Estate Developer from 0 to 35,000 Monthly Visitors",
    industry: "Real Estate",
    location: "Delhi",
    duration: "6 Months",
    challenge: "Zero online presence, relying completely on traditional print media and local agents, losing leads to digital-first competitors.",
    strategy: "Implemented geo-targeted Local SEO campaigns, set up and optimized Google Business Profiles for high-priority projects, designed high-performance landing pages, and ran targeted Google Search campaigns.",
    metrics: [
      "+340% Organic Traffic",
      "5.2x Return on Ad Spend (ROAS)",
      "#1 on Google for 18 High-Intent Keywords"
    ],
    image: "/images/case-studies/real-estate-delhi.jpg",
    metaTitle: "Delhi Real Estate Developer SEO Case Study | Veloxis Global",
    metaDescription: "Discover how we generated +340% organic traffic for a Delhi real estate developer. Read the full case study to scale your online property sales today.",
    dataComparison: [
      { metricName: "Monthly Organic Visitors", beforeValue: "150", afterValue: "35,200", improvementPercentage: "+23,366%" },
      { metricName: "Google Map Citations / Month", beforeValue: "12", afterValue: "420", improvementPercentage: "+3,400%" },
      { metricName: "Cost Per Qualified Property Lead", beforeValue: "₹3,400", afterValue: "₹650", improvementPercentage: "-80%" },
      { metricName: "Keywords in Google Top 3", beforeValue: "0", afterValue: "18", improvementPercentage: "+1,800%" }
    ],
    sections: [
      {
        heading: "1. Project Overview & Executive Summary",
        subheading: "Transitioning a traditional property builder to a digital powerhouse",
        paragraphs: [
          "Our client, an established luxury residential real estate builder in South Delhi, was launching a premium apartment complex in Dwarka. Historically, their sales pipeline relied entirely on channel partners, brokers, and print advertisements. However, with buyers increasingly turning online to research projects, check maps, and inspect floor plans, the client found themselves losing valuable sales leads to digital-first competitors.",
          "Veloxis Global was onboarded to construct an independent lead generation engine. Over six months, we built a comprehensive search marketing system. By combining technical site speed optimization, local map clustering, and target search ads, we took their organic site traffic from virtually zero to 35,000 monthly visitors. This resulted in an immediate 5.2x return on ad spend (ROAS) and established their brand as a dominant player in Delhi NCR local search queries."
        ]
      },
      {
        heading: "2. Technical SEO Audit & Crawl Budget Analysis",
        subheading: "Fixing layout shift parameters and code-to-text ratios",
        paragraphs: [
          "We began the campaign with a comprehensive technical SEO audit of the developer's legacy site. The initial diagnostics revealed severe crawl budget limitations and indexing errors. The website was built on an unoptimized framework with large, render-blocking scripts, uncompressed image assets, and no semantic outline hierarchy. The site speed test showed a Mobile Google PageSpeed score of just 32/100, which actively penalized their mobile search rankings.",
          "Our developers systematically restructured the site code to resolve these performance bottlenecks. We implemented next/image component parameters for responsive image sizing, deferred non-critical JavaScript files, and cleaned up unused CSS styles. To optimize crawl budget allocation, we eliminated internal redirect loops and set up strict rules inside the robots.txt file, preventing search bots from crawling administrative files. These optimizations brought the Mobile PageSpeed score to 94/100, resulting in immediate indexing updates by Google crawlers."
        ],
        bulletPoints: [
          "Optimized Cumulative Layout Shift (CLS) from 0.42 to 0.05",
          "Cleaned up 12 crawl index loop errors and duplicate canonical headers",
          "Implemented dynamic XML sitemaps updated hourly to index new property towers"
        ]
      },
      {
        heading: "3. Local SEO and Google Business Profile (GBP) Optimizations",
        subheading: "Map pack dominance for high-intent property queries in Delhi NCR",
        paragraphs: [
          "Real estate buying is highly regional. Therefore, the core of our organic strategy was optimizing their Google Business Profiles (GBP) for project sites in South Delhi, Dwarka, and Gurgaon. Many developers make the mistake of using standard corporate profiles. We set up city-specific service area boundaries (SAB) and project-specific map listings linked with structured LocalBusiness JSON-LD schema markup.",
          "We executed a local citation building campaign, syndicating their correct Name, Address, and Phone (NAP) details to high-authority Indian business directories like IndiaMART, Justdial, and Clutch. Furthermore, we implemented a geotagged media process, uploading high-resolution project site photographs containing exact coordinates matching the construction sites. Finally, we launched a review acceleration system for the sales team, prompting satisfied buyers to post verified reviews, which pushed the project listings into the Google Map Pack Top 3 for high-intent keywords."
        ]
      },
      {
        heading: "4. Web Design Conversion Rate Optimization (CRO) & Content Funnel",
        subheading: "Mapping search intent to drive direct sales queries",
        paragraphs: [
          "Traffic is useless without conversion. The developer's legacy site had vague calls-to-action (CTAs) and long, multi-step contact forms that caused 84% of mobile visitors to bounce. We redesigned the landing pages, implementing sticky navigation headers, visual progress indicators, and simple, single-field lead forms. Every interactive button was assigned a unique ID for precise analytics tracking.",
          "Concurrently, we built a comprehensive content funnel targeting commercial and informational search intent. We authored depth-first pages comparing Dwarka property pricing trends, legal checklists for Delhi NCR property registration, and metro connectivity reviews. These articles established the brand's E-E-A-T credentials and targeted long-tail keywords that competitors ignored. The conversion rate increased from a low 0.4% to a sustained 3.8% across all pages."
        ],
        bulletPoints: [
          "Added clear WhatsApp chat integrations directly routing to regional sales desk",
          "Created localized content hubs targeting queries like 'upcoming projects in Dwarka Sector 19'",
          "Structured H1 and H2 heading hierarchies mapping exact buyer intents"
        ]
      },
      {
        heading: "5. Campaign Results, Organic Traffic Impact, and Long-Term Value",
        subheading: "Establishing a permanent, broker-free client pipeline",
        paragraphs: [
          "Within six months of launching the integrated SEO and PPC campaign, Veloxis Global transformed the client's business model. The developer is no longer solely dependent on third-party real estate brokers to fill their visitor books. They now own a proprietary search channel that generates highly motivated, organic inquiries day after day.",
          "Our work positioned them as the authority for luxury housing in Delhi NCR. With 18 critical keywords ranking in Google's Top 3 positions and monthly organic traffic hitting a peak of 35,200 visitors, the client has reduced their average cost-per-lead by 80% compared to legacy print campaigns. They have successfully booked out two phases of their Dwarka complex using organic search and high-ROAS paid media."
        ]
      }
    ]
  },
  {
    id: "noida-ecommerce",
    slug: "noida-edtech-lead-generation",
    title: "How Noida SkillEdge Academy Cut PPC Cost-Per-Lead by 42%",
    industry: "EdTech",
    location: "Noida",
    duration: "2 Months",
    challenge: "High cost-per-lead (CPL) on Meta Ads, flatlining organic reach, and unoptimized landing pages that bounced traffic.",
    strategy: "Restructured Google Search Campaigns, built negative keyword lists, implemented A/B testing on landing page headlines and forms, and set up clear CRM conversion tracking pipelines.",
    metrics: [
      "42% Reduction in Cost-Per-Lead",
      "2x Lead Volume in 60 Days",
      "5.2x ROAS on Course Registrations"
    ],
    image: "/images/case-studies/edtech-noida.jpg",
    metaTitle: "Noida EdTech PPC Lead Generation Case Study | Veloxis",
    metaDescription: "How we cut EdTech cost-per-lead by 42% for a Noida academy. Explore our paid ads strategy and landing page A/B testing to scale your conversions.",
    dataComparison: [
      { metricName: "Average Cost-Per-Lead (CPL)", beforeValue: "₹450", afterValue: "₹260", improvementPercentage: "-42.2%" },
      { metricName: "Monthly Course Enquiries", beforeValue: "180", afterValue: "390", improvementPercentage: "+116%" },
      { metricName: "Landing Page Speed Score", beforeValue: "41/100", afterValue: "95/100", improvementPercentage: "+131%" },
      { metricName: "Lead-to-Enrollment Rate", beforeValue: "1.8%", afterValue: "4.2%", improvementPercentage: "+133%" }
    ],
    sections: [
      {
        heading: "1. Overview & Client Background",
        subheading: "Optimizing digital course registration pipelines in Noida's IT hub",
        paragraphs: [
          "Our client, Noida SkillEdge Academy, provides professional certification programs in software development, data analytics, and digital marketing in Sector 62, Noida. Despite operating in a thriving student and IT corridor, their digital advertising campaigns were suffering from rising ad costs. They were paying unsustainable fees for leads on Facebook and Instagram, while their landing pages failed to convert.",
          "Veloxis Global was commissioned to perform a comprehensive PPC audit and restructuring. Within 60 days, we successfully cut their cost-per-lead (CPL) by 42% while doubling their weekly inquiry volume. By setting up exact target keyword matches, cleaning negative keyword lists, optimizing landing page hydration speeds, and establishing CRM webhook notifications, we turned their flatlining marketing budget into a high-performance customer pipeline."
        ]
      },
      {
        heading: "2. The PPC Deficit & Conversion Funnel Audit",
        subheading: "Identifying wasted budgets and keyword overlap conflicts",
        paragraphs: [
          "When we audited the academy's Google Ads account, we discovered major budget inefficiencies. The legacy campaigns relied heavily on broad-match keywords (e.g., 'free coding courses' or 'learn online'). This drew massive amounts of unqualified traffic—including middle school students looking for free materials rather than professionals looking for certified training programs.",
          "Additionally, their campaigns lacked geographic exclusion boundaries, causing ads to display to searchers outside of their NCR target zones. We also identified severe keyword cannibalization across their different ad groups. Different campaigns were bidding against each other for the exact same search terms, driving up costs. The landing pages were slow, cluttered, and did not utilize URL parameter tracking, making it impossible to attribute enrollments to specific ad creatives."
        ]
      },
      {
        heading: "3. Landing Page Speed, Core Web Vitals, and UX Optimization",
        subheading: "Ensuring near-instant load times for mobile visitors",
        paragraphs: [
          "A major reason for Noida SkillEdge Academy's high CPL was their landing page bounce rate. Over 75% of click-throughs from mobile ads were bouncing before the page fully rendered. The pages contained uncompressed stock photography, complex fonts, and heavy external analytics scripts that blocked parsing. The mobile loading speed was clocked at 6.4 seconds.",
          "Our design team rebuilt the landing page using a lightweight Next.js layout, compressing images to webp format, and optimizing Core Web Vitals parameters (specifically Largest Contentful Paint). We minimized script execution and designed a clean, distraction-free layout highlighting student testimonials and course outcomes. By adding unique HTML IDs to every CTA, we established precise event tracking. These updates reduced the page load time to under 1.2 seconds, causing the conversion rate to climb from 1.5% to 4.2%."
        ],
        bulletPoints: [
          "Reduced Largest Contentful Paint (LCP) from 4.8s to 1.1s",
          "Fixed layout shift parameters (CLS) to zero on mobile viewports",
          "Implemented dynamic, auto-focus form fields to reduce friction"
        ]
      },
      {
        heading: "4. Search Campaign Restructuring & Negative Keyword Filtering",
        subheading: "Bidding on commercial search intent, excluding the rest",
        paragraphs: [
          "We completely restructured the Google Search campaign. We transitioned all key ad groups to exact-match and phrase-match keywords, bidding exclusively on search terms with commercial intent (e.g. 'data analytics course noida' or 'best coding bootcamp NCR'). This immediately filtered out non-buyers and lowered search bidding costs.",
          "We built a comprehensive master list of over 450 negative keywords to prevent their ads from showing on queries containing terms like 'free', 'pdf', 'jobs', 'cheapest', and 'syllabus download'. We also set up custom location targeting parameters, focusing ad spend on high-priority areas in Noida, Greater Noida, and East Delhi where their target demographic of young graduates resided."
        ]
      },
      {
        heading: "5. n8n WhatsApp CRM Automation & Lead Close Rates",
        subheading: "Bridging the gap between lead collection and sales response",
        paragraphs: [
          "In B2B and educational lead generation, response speed is everything. Previously, Noida SkillEdge Academy's sales team would retrieve leads manually from Facebook CSV files once a day, resulting in average response times of 12 to 24 hours. By then, the prospective student had already contacted another training institute.",
          "Veloxis Global built a custom automation pipeline using n8n. Now, the instant a lead is submitted on the website or via ads, a webhook routes the data to their CRM, alerts the sales team on a WhatsApp group, and sends an automated WhatsApp message to the student containing a link to download the course brochure. This instant response pipeline reduced their sales touch-time from hours to under 30 seconds, doubling their final course enrollment rate."
        ],
        bulletPoints: [
          "Integrated n8n workflow automating CRM entries and WhatsApp alerts",
          "Created personalized WhatsApp sequences tailored to the chosen course path",
          "Sustained a 5.2x return on ad spend (ROAS) on certification registrations"
        ]
      }
    ]
  },
  {
    id: "lucknow-healthcare",
    slug: "lucknow-healthcare-leads",
    title: "Generating 500 Qualified Patient Leads in 90 Days for a Lucknow Healthcare Brand",
    industry: "Healthcare",
    location: "Lucknow",
    duration: "3 Months",
    challenge: "Low patient walk-ins across multiple local multi-specialty clinics. Low local maps visibility.",
    strategy: "Optimized Google Business Profiles for local search packs, ran targeted hyper-local Facebook Ads, and set up a streamlined booking funnel on a mobile-responsive landing page.",
    metrics: [
      "500+ Qualified Patient Leads",
      "60% Increase in Patient Footfall",
      "100% Correct Map Rankings for 3 Locations"
    ],
    image: "/images/case-studies/healthcare-lucknow.jpg",
    metaTitle: "Lucknow Healthcare Lead Generation | Veloxis Global",
    metaDescription: "Learn how we generated 500 patient leads in 90 days for a Lucknow clinic. Read our local SEO map pack blueprint to drive your clinic bookings now.",
    dataComparison: [
      { metricName: "Monthly Patient Inquiries", beforeValue: "45", afterValue: "185", improvementPercentage: "+311%" },
      { metricName: "Hazratganj Map Pack Position", beforeValue: "#14", afterValue: "#2", improvementPercentage: "+85%" },
      { metricName: "Average Cost Per Booking", beforeValue: "₹1,200", afterValue: "₹420", improvementPercentage: "-65%" },
      { metricName: "Mobile Booking Completion", beforeValue: "1.1%", afterValue: "3.9%", improvementPercentage: "+254%" }
    ],
    sections: [
      {
        heading: "1. Executive Summary & Clinical Background",
        subheading: "Filling multi-specialty schedules in Hazratganj, Lucknow",
        paragraphs: [
          "Our client, a multi-specialty healthcare group with clinics in Lucknow (Hazratganj, Gomti Nagar, and Aliganj), was struggling to generate consistent appointment bookings. Despite having experienced doctors, their online footprint was practically invisible. Patients looking for clinics near them were only seeing competitors who ranked in Google's Local Map Pack.",
          "Veloxis Global was hired to execute an integrated local SEO and patient acquisition funnel. Over 90 days, we successfully generated 500+ qualified patient inquiries and increased walk-in footfall by 60%. By optimizing local business listings, cleaning map pins, setting up structured Doctor Schema markup, and launching hyper-local ads, we placed their clinics at the top of Lucknow search results."
        ]
      },
      {
        heading: "2. The Local Search Deficit & Map Pack Audits",
        subheading: "Identifying map pin location conflicts and duplicate listings",
        paragraphs: [
          "We began the campaign with a local search audit of all three Lucknow clinics. The diagnostics showed severe inconsistencies in their Name, Address, and Phone (NAP) details. Their Hazratganj clinic had duplicate listings on Google Maps, which split their authority and confused Google's local ranking algorithms. Their Aliganj listing was using an incorrect phone number, resulting in lost bookings.",
          "Furthermore, the clinic website lacked dedicated landing pages for their specific locations. Everything pointed to a single, generic homepage that had no geographic schema metadata or city-centric keywords. As a result, Google could not establish their relevance for local queries like 'best dental clinic in Hazratganj' or 'IVF specialist in Gomti Nagar', ranking them on page 2 or 3 of local search results."
        ]
      },
      {
        heading: "3. Technical SEO: Next.js Performance & Core Web Vitals Fixes",
        subheading: "Building a lightweight, high-security medical funnel",
        paragraphs: [
          "Medical patients want speed and security when booking clinical appointments. The client's legacy WordPress website was slow, loading in 5.8 seconds, and triggered SSL certificate warnings on modern mobile browsers. We migrated their core appointment booking pipeline to a secure, fast Next.js static site generated layout.",
          "We integrated next/font to host typography locally, eliminated heavy animations, and optimized their mobile form interfaces. Every button and input was mapped with unique IDs for exact tracking. These optimizations reduced their page load times to 900 milliseconds on mobile devices. The ssl credentials were fixed, providing a secure, trust-building booking experience that reduced drop-off rates by 65%."
        ],
        bulletPoints: [
          "Optimized Largest Contentful Paint (LCP) from 4.2s to 0.8s",
          "Integrated secure SSL headers and HTTPS redirections",
          "Reduced mobile form layout complexity from 8 input fields to 3 simple choices"
        ]
      },
      {
        heading: "4. Structured Doctor & Clinic Schemas Injection",
        subheading: "Leveraging schema markup to satisfy Google's E-E-A-T trust signals",
        paragraphs: [
          "Google's search algorithm places extreme importance on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) for medical websites (Your Money or Your Life - YMYL pages). To prove the authority of the client's doctors, we designed and injected detailed Physician and MedicalBusiness schemas using JSON-LD metadata.",
          "These schemas dynamically linked the doctors' profile pages with their official GMC registration numbers, university qualifications, publishing history, and active clinical locations. We also synced these profiles with verified external citation directories. This technical schema data allowed Google's crawlers to verify the expertise of the medical staff, resulting in immediate organic ranking gains."
        ],
        bulletPoints: [
          "Injected dynamic Physician JSON-LD schemas linking qualifications and GMC data",
          "Created LocalBusiness schema with Kanpur, Lucknow and Delhi geographic parameters",
          "Built a citation network of 120+ verified Indian local directories"
        ]
      },
      {
        heading: "5. Local Campaign Results & Booking Funnel Performance",
        subheading: "Dominating Lucknow healthcare search queries",
        paragraphs: [
          "The combination of local map pack dominance and mobile conversion optimizations transformed the healthcare brand's client flow. Within three months, their Hazratganj map listing climbed from position 14 to position 2, and their other locations achieved similar Top-3 local map rankings.",
          "In 90 days, we generated over 500 verified patient leads at a 65% lower cost-per-booking compared to their historical marketing spend. Walk-in clinic appointments increased by 60%, and their sales teams are now using a streamlined booking dashboard to manage clinic queues and appointment calendars efficiently."
        ]
      }
    ]
  },
  {
    id: "kanpur-fabrics",
    slug: "kanpur-fabrics-b2b",
    title: "Scaling Kanpur Fabrics' B2B Leads to Account for 40% of All New Business",
    industry: "Manufacturing & Textile",
    location: "Kanpur",
    duration: "4 Months",
    challenge: "Relying on physical expos and trade fairs for wholesale B2B client acquisition, resulting in slow off-season sales.",
    strategy: "Developed an SEO-optimized B2B wholesale landing page, targeted long-tail B2B search terms on Google Ads, and executed automated email sequences for trade leads.",
    metrics: [
      "40% New Business Generated Online",
      "220% Growth in B2B Enquiries",
      "#1 Google Rank for 'Textile Manufacturer Kanpur'"
    ],
    image: "/images/case-studies/manufacturing-kanpur.jpg",
    metaTitle: "Kanpur B2B Manufacturing SEO Case Study | Veloxis Global",
    metaDescription: "Discover how we scaled B2B lead generation by 220% for a Kanpur fabric manufacturer. Read the strategy guide to grow your wholesale sales online.",
    dataComparison: [
      { metricName: "Monthly B2B Wholesale Leads", beforeValue: "18", afterValue: "58", improvementPercentage: "+222%" },
      { metricName: "Average Organic Rankings (B2B terms)", beforeValue: "Page 4", afterValue: "#3 on Page 1", improvementPercentage: "+91%" },
      { metricName: "International Lead Inquiries", beforeValue: "0", afterValue: "14", improvementPercentage: "+1,400%" },
      { metricName: "Online Share of Company Revenue", beforeValue: "4%", afterValue: "40%", improvementPercentage: "+900%" }
    ],
    sections: [
      {
        heading: "1. B2B Project Overview & Market Context",
        subheading: "Transitioning a Kanpur manufacturing mill to a global B2B supplier",
        paragraphs: [
          "Our client, Kanpur Fabrics, is a premier wholesale textile and leather goods manufacturer based in Cantt, Kanpur. For decades, their business model relied on physical trade expos, local agents, and word-of-mouth recommendations to acquire bulk wholesale orders. This made their revenue highly seasonal and vulnerable to off-season sales dips.",
          "Veloxis Global was onboarded to build a permanent, digital B2B lead generation engine. Over four months, we designed a technical SEO and link-building campaign targeting global bulk buyers. This digital transition successfully drove a 220% increase in bulk wholesale inquiries, with online leads accounting for 40% of all new business revenue within 120 days."
        ]
      },
      {
        heading: "2. The Export SEO Gap & Competitor Analysis",
        subheading: "Auditing missing catalog structures and search index gaps",
        paragraphs: [
          "Our initial audit showed that while the client had a massive physical inventory of fabric rolls and leather products, their website was a simple, single-page brochure. It lacked an online product catalog, search functionality, or technical details (like GSM count, fabric compositions, or export certification codes).",
          "Furthermore, their competitors in Surat, Mumbai, and China were ranking for high-value wholesale search queries. The client's site was completely unindexed for key B2B keywords like 'wholesale linen manufacturer Kanpur' or 'leather exporter India'. The website speed was slow, and there was no search intent mapping to capture bulk purchasing agents looking for textile mills."
        ]
      },
      {
        heading: "3. International Long-Tail Keyword Mapping & Intent Funnels",
        subheading: "Targeting wholesale purchasing agents and commercial intents",
        paragraphs: [
          "We executed a comprehensive keyword mapping project. Instead of trying to rank for broad, highly competitive terms like 'fabric' or 'leather', we targeted highly specific, long-tail commercial and transactional queries (e.g., 'bulk cotton canvas manufacturer Kanpur', 'leather goods wholesale exporter India').",
          "We created dedicated landing pages for each fabric category, optimizing page content for technical details. We structured our headings (H1, H2) to include exact LSI keywords and search intent variants. This targeted strategy immediately attracted high-value international purchasing agents from Europe, North America, and the Middle East looking for direct Indian suppliers."
        ]
      },
      {
        heading: "4. Catalog Optimization, Speed Indexes, and Schema Markup",
        subheading: "Creating a high-performance, crawl-friendly digital showroom",
        paragraphs: [
          "To display their catalog without slowing down the site, we built a static product repository using a Next.js App Router structure. We compressed all high-definition fabric images to WebP format, implemented lazy loading, and optimized their mobile layout grid. All buttons and CTA elements were mapped with unique IDs.",
          "We injected custom Product and LocalBusiness schemas. This allowed Google's crawlers to index their product dimensions, composition specs, and MOQ (Minimum Order Quantity) parameters directly. To build authority, we executed a technical link-building campaign, earning high-quality backlinks from established industrial and textile export portals, which pushed their domain authority higher."
        ],
        bulletPoints: [
          "Optimized Page Speed Index from 4.9s to 1.1s on mobile viewports",
          "Structured schema metadata indexing MOQ, price points, and specifications",
          "Acquired 18 high-authority backlinks from verified B2B export portals"
        ]
      },
      {
        heading: "5. Outcomes: Global Wholesale Leads and Backlink Velocity",
        subheading: "Owning a self-sustaining international export pipeline",
        paragraphs: [
          "Within four months, Kanpur Fabrics' online lead generation pipeline went from an experiment to a primary driver of new business. We successfully ranked the client at #1 on Google for 'Textile Manufacturer Kanpur' and established Page 1 rankings for 12 other global wholesale terms.",
          "Monthly B2B bulk inquiries grew by 220%, including 14 qualified international export orders in the first 120 days. Online channels now account for 40% of their total business revenue, ensuring a steady stream of wholesale orders even during the traditional physical expo off-season."
        ]
      }
    ]
  }
];
