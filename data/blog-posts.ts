// Blog articles. One search intent per post; each links to the service it supports.
// Only cite figures we can source. Dates: isoDate = first published, modifiedIso = last substantive update.

export interface Post {
  slug: string;
  title: string;
  /** <title> tag — rendered as written, keep under ~60 characters. */
  seoTitle: string;
  excerpt: string;
  category: 'Landing Pages' | 'Paid Ads' | 'AI Automation' | 'Growth Tips' | 'Guides';
  badgeColor: 'teal' | 'orange' | 'indigo' | 'blue';
  author: string;
  authorPhoto: string;
  date: string;
  isoDate: string;
  modifiedIso: string;
  readTime: string;
  service?: string;
  headings: { id: string; text: string }[];
  htmlContent: string;
  image: string;
  imageAlt: string;
  about?: { name: string; sameAs: string }[];
}

const AUTHOR = { author: 'Muddassir Ali', authorPhoto: '/images/profiles/muddassir.jpg' };

export const blogPosts: Post[] = [
  {
    slug: 'what-is-eoi-in-real-estate',
    title: 'What Is EOI in Real Estate? Meaning, Amount, Refunds and Risks',
    seoTitle: 'What Is EOI in Real Estate? Meaning, Refunds & RERA Rules',
    excerpt:
      'EOI (Expression of Interest) buys priority in a new project. How it works, how it differs from token and booking amounts, refunds, and what RERA says.',
    category: 'Guides',
    badgeColor: 'indigo',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '7 min read',
    service: 'high-converting-landing-pages',
    headings: [
      { id: 'meaning', text: 'EOI meaning in real estate' },
      { id: 'how-it-works', text: 'How the EOI process works' },
      { id: 'eoi-token-booking', text: 'EOI vs token amount vs booking amount' },
      { id: 'refunds', text: 'Is EOI refundable?' },
      { id: 'rera', text: 'EOI and RERA: what the law says' },
      { id: 'buyer-checklist', text: 'Checklist before paying an EOI' },
      { id: 'developers', text: 'For developers: running an EOI campaign properly' },
    ],
    htmlContent: `
<p>If you are looking at a new launch, the sales team will often ask for an <strong>EOI</strong> before prices and inventory are fully released. This guide explains what an EOI is, what you are actually paying for, and the questions to ask before you pay.</p>

<h2 id="meaning">EOI meaning in real estate</h2>
<p><strong>EOI stands for Expression of Interest.</strong> It is a written request, usually with a payment, that tells the developer you want to buy in a project that is about to launch. In return you get priority: an earlier slot to choose a unit, and sometimes a launch price or offer that later buyers don’t get.</p>
<p>An EOI is not a purchase. You haven’t been allotted a specific flat, and there is no agreement for sale yet. It is a place in the queue.</p>

<h2 id="how-it-works">How the EOI process works</h2>
<ol>
  <li><strong>Pre-launch or launch announcement.</strong> The developer or its channel partners start collecting interest, usually through site offices, CPs, ads and a project landing page.</li>
  <li><strong>EOI form and payment.</strong> You fill a form with your preferred configuration (for example 2 or 3 BHK), budget and floor preference, and pay the EOI amount by cheque or bank transfer.</li>
  <li><strong>Allotment.</strong> On launch day, EOI holders are called in order — first-come or by draw — to select a unit from the released inventory.</li>
  <li><strong>Booking or refund.</strong> If you choose a unit, the EOI is usually adjusted against the booking amount. If you don’t find a suitable unit, the EOI terms decide whether and when you get a refund.</li>
</ol>
<p>EOI amounts vary widely by project and city. There is no standard figure — always check the amount against the project’s pricing and the written terms.</p>

<h2 id="eoi-token-booking">EOI vs token amount vs booking amount</h2>
<table>
  <thead><tr><th>Term</th><th>When it is paid</th><th>What you get</th></tr></thead>
  <tbody>
    <tr><td>EOI</td><td>Before or at launch</td><td>Priority to choose a unit; no specific unit yet</td></tr>
    <tr><td>Token amount</td><td>After selecting a unit</td><td>That unit held for you for a short time while paperwork is done</td></tr>
    <tr><td>Booking amount</td><td>When you confirm the purchase</td><td>Allotment of the unit, followed by the agreement for sale</td></tr>
  </tbody>
</table>
<p>Developers use these terms slightly differently, so read the receipt and application form rather than relying on the name.</p>

<h2 id="refunds">Is EOI refundable?</h2>
<p>Often yes, but only on the conditions written in the EOI terms. Common patterns are a full refund if you don’t get a unit you want at allotment, and a deduction or forfeiture if you withdraw after selecting a unit. What matters is what is in writing:</p>
<ul>
  <li>Is the EOI fully refundable if you don’t choose a unit?</li>
  <li>How many days does the refund take, and is there any deduction?</li>
  <li>Is the EOI adjusted against the booking amount if you go ahead?</li>
</ul>
<p>If the answers are only verbal, ask for them in writing before paying.</p>

<h2 id="rera">EOI and RERA: what the law says</h2>
<p>Two parts of the Real Estate (Regulation and Development) Act, 2016 matter here:</p>
<ul>
  <li><strong>Section 3</strong> says a promoter cannot advertise, market, book, sell or offer for sale any unit in a project that has to be registered, without first registering it with the state RERA authority. Collecting money for an unregistered project is therefore risky for both sides.</li>
  <li><strong>Section 13</strong> says a promoter cannot take more than 10% of the cost of the unit as an advance or application fee without first entering into a written agreement for sale and registering it.</li>
</ul>
<p>So before paying an EOI, check that the project has a RERA registration number and look it up on the state RERA website. For projects in Uttar Pradesh, that is UP RERA.</p>

<h2 id="buyer-checklist">Checklist before paying an EOI</h2>
<ul>
  <li>The project’s RERA registration number, checked on the RERA website.</li>
  <li>Written EOI terms: refund conditions, timelines and deductions.</li>
  <li>Payment by cheque or bank transfer to the developer’s account, never in cash.</li>
  <li>A receipt that names the project, the amount and your preferred configuration.</li>
  <li>Clarity on how allotment will work: first-come, draw, or floor-wise release.</li>
</ul>

<h2 id="developers">For developers: running an EOI campaign properly</h2>
<p>A good EOI campaign is a lead-generation campaign with clear rules. Buyers trust it more when the project page shows the RERA number, the EOI amount and refund terms up front, and when every enquiry gets a quick, specific reply instead of a generic callback.</p>
<p>We build <a href="/services/high-converting-landing-pages">project landing pages</a> that explain the EOI process clearly, run <a href="/services/paid-ads">Meta and Google campaigns</a> to fill the priority list, and set up <a href="/services/ai-automation">WhatsApp automation</a> that sends the EOI form and terms the moment someone enquires. See our <a href="/playbooks/new-launch-meta-google-ads-plan">example launch plan</a> for how the campaigns are structured.</p>
<p><em>This article explains general practice and is not legal advice. Check the current RERA rules in your state and the terms of the specific project.</em></p>
`,
    image: '/images/sections/hero-skyline-night.jpg',
    imageAlt: 'Residential towers at dusk',
    about: [{ name: 'Real Estate (Regulation and Development) Act, 2016', sameAs: 'https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016' }],
  },
  {
    slug: 'channel-partner-in-real-estate',
    title: 'Channel Partner in Real Estate: Meaning, Commission, RERA and Leads',
    seoTitle: 'Channel Partner in Real Estate: Meaning, Commission & RERA',
    excerpt:
      'What a channel partner (CP) does, how commission and lead registration work, what RERA requires, and how CPs get leads not shared with other brokers.',
    category: 'Guides',
    badgeColor: 'indigo',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '8 min read',
    service: 'paid-ads',
    headings: [
      { id: 'meaning', text: 'What is a channel partner in real estate?' },
      { id: 'cp-vs-broker', text: 'Channel partner vs broker' },
      { id: 'how-cps-work', text: 'How a CP works with a developer' },
      { id: 'commission', text: 'How CP commission works' },
      { id: 'rera', text: 'RERA registration for channel partners' },
      { id: 'lead-registration', text: 'Lead registration and ownership disputes' },
      { id: 'getting-leads', text: 'How channel partners get leads' },
    ],
    htmlContent: `
<p>Channel partners sell a large share of new residential inventory in India, yet the role is rarely explained clearly. This guide covers what a CP is, how the money and lead registration work, and how CPs can build a lead flow of their own.</p>

<h2 id="meaning">What is a channel partner in real estate?</h2>
<p>A <strong>channel partner (CP)</strong> is a real estate agent or agency that is formally empanelled by a developer to sell its projects. The CP brings buyers, arranges site visits and helps close bookings. In return, the developer — not the buyer — pays the CP a commission on each booking.</p>
<p>A CP can be a one-person broker, a firm with a sales team, or a large national advisory. Most CPs work with several developers at the same time.</p>

<h2 id="cp-vs-broker">Channel partner vs broker</h2>
<table>
  <thead><tr><th></th><th>Channel partner</th><th>Broker (resale/rental)</th></tr></thead>
  <tbody>
    <tr><td>Works for</td><td>The developer, on specific projects</td><td>Usually the buyer, seller or both</td></tr>
    <tr><td>Paid by</td><td>The developer, as commission on booking</td><td>Buyer and/or seller brokerage</td></tr>
    <tr><td>Inventory</td><td>New launches and under-construction units</td><td>Resale and rental properties</td></tr>
    <tr><td>Formal agreement</td><td>CP empanelment with the developer</td><td>Varies; often informal</td></tr>
  </tbody>
</table>
<p>Many firms do both: CP work on new projects and brokerage on resale.</p>

<h2 id="how-cps-work">How a CP works with a developer</h2>
<ol>
  <li><strong>Empanelment.</strong> The CP signs the developer’s CP agreement and shares documents, usually including their RERA agent registration.</li>
  <li><strong>Mandate and material.</strong> The developer shares pricing, brochures, inventory and the rules for marketing the project.</li>
  <li><strong>Lead registration.</strong> Before or at the first site visit, the CP registers the buyer with the developer, often through a CP portal or app.</li>
  <li><strong>Site visit and booking.</strong> The CP accompanies the buyer; if the buyer books within the validity period, the booking is credited to the CP.</li>
  <li><strong>Payout.</strong> Commission is paid once the conditions in the agreement are met — for example, after a set percentage of the payment is received.</li>
</ol>

<h2 id="commission">How CP commission works</h2>
<p>Commission is set by each developer and project. It is usually a percentage of the agreement value, sometimes with slab-based incentives for volume or for selling during a launch window. There is no fixed industry rate, so compare the percentage together with:</p>
<ul>
  <li>When the commission becomes payable (at booking, agreement or a payment milestone).</li>
  <li>How long payouts take in practice.</li>
  <li>What happens if the buyer cancels.</li>
  <li>TDS: commission payments are subject to tax deduction at source under Section 194H of the Income Tax Act — check the current rate with your accountant.</li>
</ul>

<h2 id="rera">RERA registration for channel partners</h2>
<p>Under Section 9 of the Real Estate (Regulation and Development) Act, 2016, real estate agents who facilitate the sale of units in registered projects must register with the state RERA authority. Section 10 requires agents to quote their registration number in their dealings. In practice, most developers ask for the CP’s RERA number during empanelment, and it should appear on the CP’s ads and project pages.</p>

<h2 id="lead-registration">Lead registration and ownership disputes</h2>
<p>The most common CP dispute is simple: the same buyer reaches the developer through a CP, a Meta form and the site office in the same week, and more than one party claims the booking. Developers usually settle it using registration time and whether the CP accompanied the site visit.</p>
<p>Protect yourself by:</p>
<ul>
  <li>Registering every lead with the developer the same day, and keeping the confirmation.</li>
  <li>Logging the date and time of first contact and every site visit.</li>
  <li>Knowing the validity window in your agreement — how long a registration stays yours after a visit.</li>
</ul>
<p>Our <a href="/playbooks/channel-partner-lead-registration">channel partner lead registration playbook</a> shows a simple setup for this.</p>

<h2 id="getting-leads">How channel partners get leads</h2>
<p>Most CPs rely on three sources: developer-shared leads, property portals and referrals. Portal enquiries are usually sent to several brokers at once, so the first to reply often wins. That is why more CPs now run their own campaigns:</p>
<ul>
  <li><strong>Their own project pages</strong> under their brand, within the developer’s rules — see <a href="/services/high-converting-landing-pages">project landing pages</a>.</li>
  <li><strong>Meta and Google ads</strong> for the projects they are mandated on, producing leads no other CP receives — see <a href="/services/paid-ads">real estate lead generation</a>.</li>
  <li><strong>Instant WhatsApp replies</strong> so a small team responds as fast as a large one — see <a href="/services/ai-automation">WhatsApp automation</a>.</li>
  <li><strong>A Google Business Profile</strong> for local searches — see our <a href="/blog/real-estate-local-seo-ncr">guide for agents and CPs</a>.</li>
</ul>
<p>If you are a CP or broker, our <a href="/channel-partners">marketing for channel partners</a> page explains how we set this up.</p>
<p><em>This article explains general practice and is not legal or tax advice.</em></p>
`,
    image: '/images/sections/industries-hero.jpg',
    imageAlt: 'Real estate advisor meeting a client',
    about: [{ name: 'Real Estate (Regulation and Development) Act, 2016', sameAs: 'https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016' }],
  },
  {
    slug: 'real-estate-ad-examples',
    title: 'Real Estate Ad Examples: 12 Ideas for Indian Projects',
    seoTitle: 'Real Estate Ad Examples: 12 Creative Ideas for India',
    excerpt:
      '12 real estate ad ideas for Meta, Instagram and Google — walkthrough reels, location maps, price-band creatives and search ads — plus RERA rules to follow.',
    category: 'Paid Ads',
    badgeColor: 'orange',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '8 min read',
    service: 'paid-ads',
    headings: [
      { id: 'before-you-start', text: 'Before you design: three rules' },
      { id: 'video', text: 'Video ads (1–4)' },
      { id: 'static', text: 'Static and carousel ads (5–9)' },
      { id: 'search', text: 'Google search ads (10–12)' },
      { id: 'copy', text: 'Copy formulas that work for property' },
      { id: 'mistakes', text: 'Common mistakes' },
    ],
    htmlContent: `
<p>Most real estate ads look the same: a render, “luxury living”, and a phone number. The ads that get enquiries answer a buyer’s real questions — where, how much, how far, and can I trust this builder. Here are twelve ideas we use for Indian projects, and the rules that apply to all of them.</p>

<h2 id="before-you-start">Before you design: three rules</h2>
<ul>
  <li><strong>RERA number on every creative.</strong> Ads for registered projects should carry the project’s RERA registration number, and the QR code where the state requires it. CPs should add their RERA agent number.</li>
  <li><strong>No claims you can’t back up.</strong> Possession dates, amenities and “assured returns” get projects into trouble with RERA and the Advertising Standards Council of India.</li>
  <li><strong>Check Meta’s housing ad rules.</strong> If Meta’s Special Ad Category for housing applies, targeting by age, gender and precise location is limited, so the creative has to do more of the work.</li>
</ul>

<h2 id="video">Video ads (1–4)</h2>
<ol>
  <li><strong>The 30-second walkthrough.</strong> Entrance, living room, balcony view, kitchen — filmed in the sample flat on a phone gimbal. End on the price band and “Get the price sheet on WhatsApp”.</li>
  <li><strong>The commute video.</strong> Drive or walk from the nearest metro station or expressway exit to the site, with a timer on screen. It answers “how far is it really?” better than any map.</li>
  <li><strong>Construction progress.</strong> Monthly site footage with the date on screen. For under-construction projects, it is one of the strongest trust signals you can show.</li>
  <li><strong>The site-visit invitation.</strong> A salesperson on camera inviting viewers for a weekend visit, naming the pickup point and the offer. Personal and simple, and good for retargeting.</li>
</ol>

<h2 id="static">Static and carousel ads (5–9)</h2>
<ol start="5">
  <li><strong>Price-band static.</strong> “2 & 3 BHK in [locality] from ₹X lakh*” with the RERA number. Showing the price filters out buyers outside your budget before they enquire.</li>
  <li><strong>Location map with drive times.</strong> Your project in the middle, and five nearby places with minutes by car. Buyers compare localities this way.</li>
  <li><strong>Floor plan carousel.</strong> One card per unit type with carpet area and a simple layout. Useful for configuration-focused audiences.</li>
  <li><strong>Payment plan explainer.</strong> How much at booking, during construction and at possession, in plain numbers. Works well for first-time buyers.</li>
  <li><strong>Festive offer creative.</strong> Navratri, Dussehra and Diwali are traditional buying periods. Keep the offer specific and put the terms on the landing page.</li>
</ol>

<h2 id="search">Google search ads (10–12)</h2>
<p>Search ads don’t need design, but the wording matters. Three patterns:</p>
<ol start="10">
  <li><strong>Project-name ad:</strong> “[Project] – Official Site | 2 & 3 BHK from ₹X Lakh | RERA Registered”. Protects your name from competitors bidding on it.</li>
  <li><strong>Locality ad:</strong> “3 BHK in [Locality] | Near [Metro] | Possession [Year]”. Matches how buyers search.</li>
  <li><strong>Ready-to-move ad:</strong> “Ready to Move 2 BHK in [Locality] | Visit This Weekend”. For inventory with OC, this intent converts quickly.</li>
</ol>
<p>Always send these to a <a href="/services/high-converting-landing-pages">project landing page</a> that repeats the ad’s promise, not the homepage.</p>

<h2 id="copy">Copy formulas that work for property</h2>
<ul>
  <li><strong>Where + what + how much:</strong> “3 BHK near Sector 51 Metro from ₹X Cr”.</li>
  <li><strong>Problem + answer:</strong> “Tired of a 90-minute commute? 12 minutes to the expressway.”</li>
  <li><strong>Proof:</strong> “Tower B – 18 floors complete. See this month’s site video.”</li>
  <li><strong>One clear action:</strong> “Get the price sheet on WhatsApp” beats “Enquire now”.</li>
</ul>

<h2 id="mistakes">Common mistakes</h2>
<ul>
  <li>Renders only, with no real photos or video of the site.</li>
  <li>“Price on request”, which attracts curiosity instead of buyers.</li>
  <li>Ten amenities on one creative, and nothing about location.</li>
  <li>Sending every ad to the same generic page.</li>
  <li>Measuring ads on clicks or cost per lead instead of site visits.</li>
</ul>
<p>Creative is one part of a campaign. For how we structure the rest — keywords, bidding and tracking — see the <a href="/playbooks/new-launch-meta-google-ads-plan">example launch ads plan</a> or our <a href="/services/paid-ads">Meta and Google ads service</a>.</p>
`,
    image: '/images/blog/blog-google-meta-ads.jpg',
    imageAlt: 'Real estate ad creatives on a phone screen',
  },
  {
    slug: 'google-ads-vs-meta-ads-real-estate-india',
    title: 'Google Ads vs Meta Ads for Real Estate Leads in India',
    seoTitle: 'Google Ads vs Meta Ads for Real Estate: Which Is Better?',
    excerpt:
      'Google Search catches buyers already looking; Meta creates demand for new launches. How each works for Indian real estate, and how to split budget between them.',
    category: 'Paid Ads',
    badgeColor: 'orange',
    ...AUTHOR,
    date: 'May 15, 2026',
    isoDate: '2026-05-15T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '7 min read',
    service: 'paid-ads',
    headings: [
      { id: 'short-answer', text: 'The short answer' },
      { id: 'google-ads', text: 'Google Ads: capturing buyers who are already searching' },
      { id: 'meta-ads', text: 'Meta ads: reaching buyers before they search' },
      { id: 'comparison', text: 'Side-by-side comparison' },
      { id: 'which-when', text: 'Which to use when' },
      { id: 'measure', text: 'Measure both on site visits' },
    ],
    htmlContent: `
<p>“Google or Meta?” is the question builders, brokers and channel partners ask us most. The honest answer is that they do different jobs, and most projects need both in different proportions.</p>

<h2 id="short-answer">The short answer</h2>
<ul>
  <li><strong>Google Search</strong> reaches people already searching for a project, locality or configuration. Fewer leads, usually closer to buying.</li>
  <li><strong>Meta (Facebook and Instagram)</strong> reaches people who aren’t searching yet. More leads, more filtering needed, and essential for launches and retargeting.</li>
</ul>

<h2 id="google-ads">Google Ads: capturing buyers who are already searching</h2>
<p>When someone types “3 BHK in Sector 150 Noida” or your project’s name, they have already decided what they want. Search ads let you appear at that moment with the right price and location.</p>
<p>Google works best when there is existing search demand — an established locality, a known project name, or ready-to-move inventory. For a brand-new project, project-name searches are near zero at first, so early Google volume comes from locality and configuration keywords. Negative keywords (rent, PG, jobs, resale if it’s a new launch) matter a lot, because property searches attract many irrelevant clicks.</p>

<h2 id="meta-ads">Meta ads: reaching buyers before they search</h2>
<p>Most people who could buy your flat aren’t searching today. Meta lets you put a walkthrough video or a price-band creative in front of them while they scroll. That makes it the main channel for launches, EOI drives and building a retargeting audience.</p>
<p>The trade-off is intent. Instant forms make enquiring very easy, so you also get curious scrollers. Qualifying questions, faster follow-up, and sending site-visit data back to Meta are what turn Meta leads into visits. If Meta’s Special Ad Category for housing applies to your ads, targeting options are limited, so the creative does more of the work.</p>

<h2 id="comparison">Side-by-side comparison</h2>
<table>
  <thead><tr><th></th><th>Google Search</th><th>Meta (Facebook & Instagram)</th></tr></thead>
  <tbody>
    <tr><td>Buyer intent</td><td>High — they searched</td><td>Lower — they were shown an ad</td></tr>
    <tr><td>Lead volume</td><td>Limited by search demand</td><td>Can scale quickly</td></tr>
    <tr><td>Best for</td><td>Known localities, project names, ready inventory</td><td>Launches, EOI, awareness, retargeting</td></tr>
    <tr><td>Main risk</td><td>Irrelevant searches without negative keywords</td><td>Unqualified leads without filtering and follow-up</td></tr>
    <tr><td>Creative</td><td>Text ads, sitelinks</td><td>Video, images, carousels</td></tr>
  </tbody>
</table>

<h2 id="which-when">Which to use when</h2>
<ul>
  <li><strong>New launch with little awareness:</strong> lead with Meta for volume and retargeting; run Google on locality and configuration searches.</li>
  <li><strong>Established project or known brand:</strong> Google on project-name and locality searches first; Meta for retargeting and offers.</li>
  <li><strong>Ready-to-move inventory:</strong> Google “ready to move” searches convert well; Meta retargeting to past enquiries.</li>
  <li><strong>Channel partners with small budgets:</strong> Google on the specific projects you are mandated on, plus Meta retargeting of your page visitors.</li>
</ul>
<p>Our <a href="/playbooks/new-launch-meta-google-ads-plan">example launch plan</a> shows a full campaign structure and a starting budget split.</p>

<h2 id="measure">Measure both on site visits</h2>
<p>Comparing channels on cost per lead is misleading: Meta leads look cheaper, but fewer of them visit. Compare Google and Meta on <strong>cost per site visit</strong>, using your CRM rather than the ad dashboards, and move budget weekly towards whichever produces visits more cheaply.</p>
<p>We run both channels this way as part of our <a href="/services/paid-ads">real estate lead generation service</a>, with every lead answered on WhatsApp in seconds through <a href="/services/ai-automation">lead automation</a>.</p>
`,
    image: '/images/blog/blog-google-meta-ads.jpg',
    imageAlt: 'Google and Meta ad dashboards side by side',
    about: [
      { name: 'Google Ads', sameAs: 'https://en.wikipedia.org/wiki/Google_Ads' },
      { name: 'Meta Platforms', sameAs: 'https://en.wikipedia.org/wiki/Meta_Platforms' },
    ],
  },
  {
    slug: 'real-estate-landing-page-conversion-hacks',
    title: 'Real Estate Landing Page Best Practices: 9 Fixes for More Enquiries',
    seoTitle: 'Real Estate Landing Page Best Practices: 9 Fixes',
    excerpt:
      'Nine practical fixes for real estate landing pages: what to show above the fold, how to handle price and RERA details, form design, speed and tracking.',
    category: 'Landing Pages',
    badgeColor: 'teal',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '7 min read',
    service: 'high-converting-landing-pages',
    headings: [
      { id: 'dedicated-page', text: '1. Send ads to a dedicated project page' },
      { id: 'above-fold', text: '2. Answer the first five questions above the fold' },
      { id: 'price', text: '3. Show a price, not “price on request”' },
      { id: 'rera', text: '4. Make the RERA details easy to find' },
      { id: 'location', text: '5. Sell the location' },
      { id: 'forms', text: '6. Shorten the form and add WhatsApp' },
      { id: 'speed', text: '7. Make it fast on a phone' },
      { id: 'proof', text: '8. Show real progress, not just renders' },
      { id: 'tracking', text: '9. Track leads back to the ad' },
    ],
    htmlContent: `
<p>If your ads get clicks but few enquiries, the page is usually the problem. These are the nine fixes we make most often on real estate landing pages for developers, brokers and channel partners.</p>

<h2 id="dedicated-page">1. Send ads to a dedicated project page</h2>
<p>A corporate website has menus, other projects and an “About us” page — all distractions for someone who clicked on one project. Give each project, tower or phase its own page, and send each ad to the page that matches it.</p>

<h2 id="above-fold">2. Answer the first five questions above the fold</h2>
<p>On a phone, the first screen should say where the project is, what configurations are available, the starting price, whether it is RERA registered, and how to ask for more. Put the “Get price sheet on WhatsApp” button there too.</p>

<h2 id="price">3. Show a price, not “price on request”</h2>
<p>Buyers use price to decide whether a project is worth their time. Hiding it brings in people who can’t afford the project and puts off those who can. A starting price or price band works; the full cost sheet can still be sent after they share their number.</p>

<h2 id="rera">4. Make the RERA details easy to find</h2>
<p>Show the project’s RERA registration number and the RERA website, and the QR code if your state requires it. For a buyer who doesn’t know the developer, it is the quickest proof that the project is legitimate.</p>

<h2 id="location">5. Sell the location</h2>
<p>Buyers shortlist localities before projects. Show drive or walk times to the nearest metro, expressway, schools, hospitals and office hubs. A simple map with minutes beats a paragraph of adjectives.</p>

<h2 id="forms">6. Shorten the form and add WhatsApp</h2>
<p>Ask only what your sales team needs: name, mobile number, configuration and budget. Add a sticky WhatsApp button on mobile — many buyers would rather chat than wait for a call. Then make sure every enquiry gets an instant reply; see <a href="/blog/whatsapp-automation-for-real-estate-leads">how to automate lead follow-up</a>.</p>

<h2 id="speed">7. Make it fast on a phone</h2>
<p>Most property traffic from ads is mobile. Compress images, avoid sliders and auto-playing video above the fold, and load chat widgets and trackers after the page is usable. Test on a mid-range Android phone over 4G, and aim for Google’s “good” Core Web Vitals: the main content visible within 2.5 seconds, and no layout jumping as the page loads.</p>

<h2 id="proof">8. Show real progress, not just renders</h2>
<p>Renders show what the project will be; dated construction photos show that it is happening. Add a construction-progress section, the developer’s past projects and bank approvals.</p>

<h2 id="tracking">9. Track leads back to the ad</h2>
<p>Set up conversion tracking for form submits, WhatsApp clicks and calls, and use a tagged link for each campaign and channel partner. Then feed site-visit outcomes from your CRM back to Google and Meta so they optimise for visits, not form fills.</p>
<p>Want to see the full structure? Our <a href="/playbooks/project-landing-page-blueprint">landing page blueprint</a> shows the section order and tracking events we use, and our <a href="/services/high-converting-landing-pages">landing page service</a> builds it for your project.</p>
`,
    image: '/images/blog/blog-landing-pages.jpg',
    imageAlt: 'Real estate landing page on a mobile phone',
    about: [{ name: 'Landing page', sameAs: 'https://en.wikipedia.org/wiki/Landing_page' }],
  },
  {
    slug: 'whatsapp-automation-for-real-estate-leads',
    title: 'How to Automate Real Estate Lead Follow-Up on WhatsApp',
    seoTitle: 'WhatsApp Automation for Real Estate Leads: How to Set Up',
    excerpt:
      'Why property leads go cold, and how to set up WhatsApp automation that replies instantly, qualifies buyers, books site visits and routes every lead.',
    category: 'AI Automation',
    badgeColor: 'blue',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '7 min read',
    service: 'ai-automation',
    headings: [
      { id: 'why-cold', text: 'Why real estate leads go cold' },
      { id: 'what-you-need', text: 'What you need to automate WhatsApp' },
      { id: 'flow', text: 'A simple lead-response flow' },
      { id: 'routing', text: 'Routing leads to sales and CPs' },
      { id: 'mistakes', text: 'Mistakes to avoid' },
      { id: 'measure', text: 'What to measure' },
    ],
    htmlContent: `
<p>Property buyers enquire with several projects at once, often in the evening. The project that replies first — with something useful — usually gets the conversation. WhatsApp automation makes sure that is you.</p>

<h2 id="why-cold">Why real estate leads go cold</h2>
<ul>
  <li><strong>Late replies.</strong> Leads that arrive after office hours wait until the next day.</li>
  <li><strong>One attempt.</strong> A salesperson calls once, gets no answer, and moves on.</li>
  <li><strong>Scattered sources.</strong> Portal emails, Meta forms, website forms and personal WhatsApp chats, with no single list of who was contacted.</li>
  <li><strong>Unknown numbers.</strong> Buyers screen calls from numbers they don’t recognise; a WhatsApp message from a named business is easier to answer.</li>
</ul>

<h2 id="what-you-need">What you need to automate WhatsApp</h2>
<ul>
  <li><strong>The WhatsApp Business API</strong>, set up through an official Business Solution Provider. The free WhatsApp Business app can’t connect to automation or a CRM.</li>
  <li><strong>Approved message templates</strong> for the first message, reminders and follow-ups. WhatsApp requires templates for messages sent outside a 24-hour conversation window.</li>
  <li><strong>A connection to your lead sources</strong> — Meta lead forms, your landing page, Google Ads lead forms and portal lead emails or APIs.</li>
  <li><strong>A CRM or a Google Sheet</strong> where every lead and conversation is recorded.</li>
</ul>

<h2 id="flow">A simple lead-response flow</h2>
<ol>
  <li><strong>Instant reply:</strong> “Hi [Name], thanks for your interest in [Project]. Here is the brochure. Are you looking for 2 BHK or 3 BHK?”</li>
  <li><strong>Qualify:</strong> budget band and buying timeline, with quick-reply buttons.</li>
  <li><strong>Hand over:</strong> qualified buyers are assigned to a salesperson, who is notified immediately.</li>
  <li><strong>Book the visit:</strong> the buyer picks a slot on WhatsApp.</li>
  <li><strong>Remind:</strong> the day before and a couple of hours before the visit.</li>
  <li><strong>Follow up:</strong> leads who go quiet get a short sequence — walkthrough video, construction update, visit invitation.</li>
</ol>
<p>Our <a href="/playbooks/whatsapp-lead-response-flow">WhatsApp lead-response playbook</a> shows this flow in detail with routing rules.</p>

<h2 id="routing">Routing leads to sales and CPs</h2>
<p>Decide the rules before you automate: by project, by location, or in rotation. Record the time each lead arrived and was assigned — for developers working with channel partners, that timestamp is what settles most “whose lead is this?” disputes.</p>

<h2 id="mistakes">Mistakes to avoid</h2>
<ul>
  <li>Messaging people who didn’t ask to be contacted. Only message leads who shared their number with you, and let them opt out.</li>
  <li>Bots that trap buyers. Always offer “Talk to someone”.</li>
  <li>Long first messages. Send one useful thing and one question.</li>
  <li>Automating without a human owner. Someone must still call qualified leads quickly.</li>
</ul>

<h2 id="measure">What to measure</h2>
<ul>
  <li>Time from enquiry to first reply.</li>
  <li>Share of leads who answer the first question.</li>
  <li>Site visits booked and completed.</li>
  <li>Leads with no human contact after 24 hours — aim for zero.</li>
</ul>
<p>We set this up for developers, brokers and CPs as part of our <a href="/services/ai-automation">real estate chatbot and WhatsApp automation service</a>, usually alongside <a href="/services/paid-ads">Meta and Google ads</a>.</p>
`,
    image: '/images/blog/blog-whatsapp-automation.jpg',
    imageAlt: 'WhatsApp conversation with a property buyer',
    about: [
      { name: 'Marketing automation', sameAs: 'https://en.wikipedia.org/wiki/Marketing_automation' },
      { name: 'WhatsApp', sameAs: 'https://en.wikipedia.org/wiki/WhatsApp' },
    ],
  },
  {
    slug: 'real-estate-local-seo-ncr',
    title: 'Google Business Profile for Real Estate Agents and Channel Partners',
    seoTitle: 'Google Business Profile for Real Estate Agents & CPs',
    excerpt:
      'How brokers and channel partners can set up and grow a Google Business Profile: categories, service areas, photos, posts and asking for reviews the right way.',
    category: 'Growth Tips',
    badgeColor: 'indigo',
    ...AUTHOR,
    date: 'September 23, 2026',
    isoDate: '2026-09-23T00:00:00+05:30',
    modifiedIso: '2026-09-23T00:00:00+05:30',
    readTime: '6 min read',
    headings: [
      { id: 'why', text: 'Why a Google Business Profile matters' },
      { id: 'setup', text: 'Setting it up correctly' },
      { id: 'service-area', text: 'Office address or service area?' },
      { id: 'content', text: 'Photos, posts and updates' },
      { id: 'reviews', text: 'Getting reviews the right way' },
      { id: 'website', text: 'Connect it to a page that converts' },
    ],
    htmlContent: `
<p>When someone searches “property dealer near me” or “real estate agent in [locality]”, the map results appear first. For brokers and channel partners, a well-kept Google Business Profile is the cheapest source of local enquiries.</p>

<h2 id="why">Why a Google Business Profile matters</h2>
<p>Google ranks local results mainly on three things: relevance (does your profile match the search), distance, and prominence (how well known and reviewed you are). You can’t change distance, but you can improve relevance and prominence.</p>

<h2 id="setup">Setting it up correctly</h2>
<ul>
  <li><strong>Name:</strong> your real business name, exactly as on your signboard and documents. Adding keywords to the name breaks Google’s guidelines and can get the profile suspended.</li>
  <li><strong>Category:</strong> “Real estate agency” or “Real estate agent” as the primary category; add “Real estate consultant” if it fits.</li>
  <li><strong>Phone and website:</strong> the same number and website you use everywhere else.</li>
  <li><strong>Verification:</strong> complete it — an unverified profile doesn’t show properly in search.</li>
</ul>

<h2 id="service-area">Office address or service area?</h2>
<p>If clients visit your office, show the address. If you meet clients at sites and don’t receive visitors, set it up as a service-area business: hide the address and list the areas you cover (for example, specific sectors or localities). Don’t use a virtual office or a site office you don’t staff.</p>

<h2 id="content">Photos, posts and updates</h2>
<ul>
  <li>Real photos of your office, team and projects you are mandated on — not stock images.</li>
  <li>Regular posts for new launches, site-visit weekends and offers, with a link to the project page.</li>
  <li>Accurate opening hours, including holidays.</li>
  <li>Answers to common questions in the Q&amp;A section.</li>
</ul>

<h2 id="reviews">Getting reviews the right way</h2>
<p>Ask every client — after a site visit, booking or registration — for an honest review, and make it easy with a direct review link sent on WhatsApp. Don’t offer incentives, don’t write reviews yourself, and don’t ask only happy clients: Google’s policies prohibit fake and selectively solicited reviews, and profiles that break them can lose reviews or be suspended. Reply to every review, including negative ones, calmly and specifically.</p>

<h2 id="website">Connect it to a page that converts</h2>
<p>Link the profile to a page that explains what you do and the projects you handle, with WhatsApp and call buttons. For project-specific posts, link to the <a href="/services/high-converting-landing-pages">project landing page</a> rather than your homepage. If you are a CP, our guide to <a href="/blog/channel-partner-in-real-estate">channel partners in real estate</a> and our <a href="/channel-partners">marketing for channel partners</a> page cover the rest of the lead engine.</p>
`,
    image: '/images/blog/blog-local-seo.jpg',
    imageAlt: 'Local map search results on a phone',
    about: [{ name: 'Google Business Profile', sameAs: 'https://en.wikipedia.org/wiki/Google_Business_Profile' }],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
