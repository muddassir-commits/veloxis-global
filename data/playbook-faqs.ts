// FAQs shown (answers visible) at the end of each playbook, keyed by playbook slug.
import type { PageFaq } from './page-faqs';

export const playbookFaqs: Record<string, PageFaq[]> = {
  'new-launch-meta-google-ads-plan': [
    { question: 'Should a new launch use Meta ads or Google Ads first?', answer: 'Both, with more weight on Meta at first. A new project name has almost no searches, so Meta builds awareness and volume while Google captures the smaller pool of people searching the locality and configuration.' },
    { question: 'Why does the plan start with a 60/40 Meta–Google split?', answer: 'It is a planning assumption for a launch with little brand awareness. The split moves every week towards whichever channel produces site visits at the lower cost.' },
    { question: 'Which keywords should a real estate launch target on Google?', answer: 'Three groups: project-name searches (which grow after launch), locality searches such as “2 bhk flat in noida extension”, and configuration or budget searches such as “ready to move 3 bhk”. Competitor project names are an optional test with a separate budget.' },
    { question: 'What negative keywords matter most for property ads?', answer: 'Rent, rental, PG, resale (for a new launch), jobs, salary, 1 RK, plot or commercial if not relevant, “for sale by owner”, PDF, and portal names for navigational searches.' },
    { question: 'When should bidding move to Target CPA?', answer: 'After campaigns have enough conversions to learn from — Google commonly suggests around 30 in 30 days — and once qualified-lead and site-visit data is being uploaded from the CRM.' },
    { question: 'Does Meta’s Special Ad Category for housing affect targeting?', answer: 'If it applies to your ads, age, gender and detailed location targeting are restricted, so the plan relies on strong creative and retargeting rather than narrow audiences.' },
    { question: 'What should be reported every week?', answer: 'Leads by campaign, contact rate, qualified leads, site visits done, and cost per site visit — the number budgets are moved on.' },
    { question: 'Is this a real client campaign?', answer: 'No. It is an example plan for a hypothetical project. Search volumes are real Google Ads data; budgets and timelines are planning assumptions.' },
  ],
  'project-landing-page-blueprint': [
    { question: 'What should be above the fold on a real estate landing page?', answer: 'Project name and locality, configurations and starting price, the RERA registration number, possession timeline, and two actions: get the price sheet on WhatsApp and book a site visit.' },
    { question: 'In what order should the sections appear?', answer: 'Location and connectivity, configurations and floor plans, price and payment plan, amenities, construction progress, developer and RERA details, FAQs, and a final call to action.' },
    { question: 'Should the brochure be a free download?', answer: 'We recommend sending the brochure, price sheet and floor plans on WhatsApp after the buyer shares their number, so every download becomes a lead you can follow up.' },
    { question: 'How many fields should the enquiry form have?', answer: 'Four: name, mobile number, configuration and budget band. Everything else can be asked on WhatsApp or the first call.' },
    { question: 'How fast should the page load?', answer: 'Aim for Google’s “good” Core Web Vitals: the main content visible within 2.5 seconds and no layout jumping. Test on a mid-range Android phone over 4G.' },
    { question: 'What should be tracked on the page?', answer: 'Form submits, WhatsApp clicks and call clicks as conversions in GA4, Meta and Google Ads; price-sheet requests and scroll depth in GA4; and UTM-tagged links per campaign and channel partner.' },
    { question: 'Can one page serve several projects?', answer: 'It can, but conversion is usually better with one page per project, tower or phase, so the ad and the page talk about the same thing.' },
  ],
  'whatsapp-lead-response-flow': [
    { question: 'How fast should a real estate lead get a reply?', answer: 'Within seconds, automatically. Buyers enquire with several projects at once, and the first useful reply usually wins the conversation.' },
    { question: 'What should the first WhatsApp message say?', answer: 'Thanks, the project name, the brochure, and one simple question — for example, whether they want 2 BHK or 3 BHK. Keep it short.' },
    { question: 'How are leads scored in this flow?', answer: 'Hot if the budget fits and they plan to buy within three months, warm if the budget fits with a longer timeline, and cold if they don’t reply. CP-sourced leads stay tagged to the channel partner.' },
    { question: 'How does the flow reduce site-visit no-shows?', answer: 'Buyers book a slot on WhatsApp, get a confirmation with the location pin and the person meeting them, and reminders the day before and two hours before. No-shows get a reschedule message the same evening.' },
    { question: 'What happens when a buyer stops replying?', answer: 'Leads who opted in get a short sequence — walkthrough video, construction update, payment-plan explainer, visit invitation — and can reply “stop” at any time.' },
    { question: 'What do I need to set this up?', answer: 'A WhatsApp Business API number through an official provider, approved message templates, connections to your lead sources and CRM or Google Sheet, and routing rules agreed with your sales team.' },
    { question: 'Can a buyer talk to a person instead of the bot?', answer: 'Yes. “Talk to someone” hands the chat to a salesperson immediately.' },
  ],
  'channel-partner-lead-registration': [
    { question: 'Why do channel partners need timestamped lead registration?', answer: 'Because the same buyer often reaches a developer through a CP, a Meta form and the site office in the same week. A timestamped record of first contact and registration is the strongest evidence in a dispute.' },
    { question: 'What should a CP record for every lead?', answer: 'Buyer name and number, project, time of first contact, the developer’s registration confirmation, and site-visit date and status.' },
    { question: 'Can a CP have their own project landing page?', answer: 'Yes, within the developer’s rules on project names, pricing and RERA details. Each page and campaign gets tagged links so every lead shows its source.' },
    { question: 'How quickly should a CP register a lead with the developer?', answer: 'The same day, through the developer’s CP portal or by email, and the confirmation should be saved.' },
    { question: 'How can a small CP firm reply as fast as a large team?', answer: 'Instant WhatsApp replies and a short qualifying chat answer every enquiry immediately, and keep every conversation in one place instead of on personal phones.' },
    { question: 'What report should a CP share with the developer?', answer: 'One row per lead with buyer details, project, first-contact timestamp, registration confirmation, and visit date and status.' },
    { question: 'Is this based on a real CP?', answer: 'No. It is an example setup for a hypothetical channel partner with three mandates.' },
  ],
};
