// Case studies shown on /case-studies (added 22 Nov 2026, owner decision).
// Rules for every entry:
//  - Every number comes from a real ad-account, Search Console or CRM screen, or from our own research
//    data. Screenshots show the numbers; client names, account IDs, login emails and creatives are covered.
//  - No client, brand, app or person is named. Clients are described by industry and city only.
//  - Work that has no result yet says so (status 'in-progress'); results are added when they are real.
// To add a case study: copy one entry, give it a new slug, put its screenshots in
// public/images/case-studies/<folder>/ and fill the fields. The hub page, the menu and the sitemap pick it up.

export type CaseCategory = 'app-marketing' | 'clinics' | 'local-business' | 'our-work';

export const caseCategories: { id: CaseCategory; label: string; blurb: string }[] = [
  { id: 'clinics', label: 'Clinics & wellness', blurb: 'Google Ads clean-ups and launches for healthcare and wellness centres.' },
  { id: 'app-marketing', label: 'App marketing', blurb: 'App-install campaigns, tracking and SEO for a consumer services app.' },
  { id: 'local-business', label: 'Local business', blurb: 'WhatsApp and automation systems for local businesses.' },
  { id: 'our-work', label: 'Our own work', blurb: 'Research, website and systems we built and run for Veloxis Global itself.' },
];

export interface CaseShot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  slug: string;
  category: CaseCategory;
  /** Hook headline shown on cards and as the H1 */
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** One-line who/what, never a name */
  client: string;
  industry: string;
  location: string;
  period: string;
  services: string[];
  /** Service page this links to */
  service: 'paid-ads' | 'seo' | 'ai-automation' | 'high-converting-landing-pages' | 'social-media-marketing';
  status: 'results' | 'in-progress';
  summary: string;
  results: { big: string; label: string }[];
  problem: string[];
  steps: { head: string; text: string }[];
  outcome: string[];
  lessons: string[];
  tools: string[];
  cover: CaseShot;
  shots: CaseShot[];
  updated: string;
}

const W_GADS = { width: 1536, height: 639 };
const W_META = { width: 1568, height: 710 };
const W_CLINIC = { width: 1800, height: 801 };

export const caseStudies: CaseStudy[] = [
  // ───────────────────────── Clinics & wellness ─────────────────────────
  {
    slug: 'clinic-google-ads-competitor-names-wasted-spend',
    category: 'clinics',
    title: 'Why an Ayurveda clinic’s Google Ads kept paying for other clinics’ names',
    seoTitle: 'Clinic Google Ads Case Study: Stop Paying for Competitor Searches',
    metaDescription:
      'An Ayurveda clinic in Delhi was paying for searches of other clinics and doctors. How a 133-word block list and keyword clean-up fixed it, with screenshots.',
    client: 'An Ayurveda hospital and wellness clinic',
    industry: 'Healthcare · Ayurveda',
    location: 'South Delhi, India',
    period: 'Nov 2026',
    services: ['Google Ads audit', 'Search terms clean-up', 'Negative keywords'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'In 30 days the account took 1,329 clicks from 23,479 impressions, and the top search terms were other clinics’ and doctors’ names. We built a shared block list (0 words on live campaigns at the start, 133 now) and paused the keywords that pulled those searches in.',
    results: [
      { big: '~55%', label: 'of the spend on top search terms went to other clinics’ and doctors’ names' },
      { big: '0 → 133', label: 'blocked words on the live campaigns' },
      { big: '26', label: 'keywords paused that brought 1 counted call between them' },
      { big: '19', label: 'ad phone calls in the first full week after the clean-up' },
    ],
    problem: [
      'The clinic runs Google Search ads to get phone calls from patients. Broad match keywords such as “ayurveda” and “ayurvedic doctor” let Google show the ads for any related search, including people looking for a different clinic or a named doctor.',
      'The search terms report for 14 Oct – 12 Nov 2026 showed it plainly: the most clicked terms were another Ayurveda brand’s name, spa and massage searches and “best body treatments”. The block list that should have stopped this was attached only to paused campaigns, so the live campaigns had none.',
    ],
    steps: [
      { head: 'Read the search terms, not the keywords', text: 'Keywords are what you bid on. Search terms are what people actually typed. We sorted 90 days of search terms by clicks and cost and marked every term that could never become a patient: other brands, doctors’ names, spa, massage, jobs, medicine and other cities.' },
      { head: 'One shared block list on every live campaign', text: 'A shared negative keyword list was created and attached to all live campaigns, so a word blocked once is blocked everywhere. It started at 59 words and grew to 133 as new junk searches appeared each week.' },
      { head: 'Pause the keywords that invite junk', text: '9 massage keywords and 17 “online”, “free”, “spa” and similar keywords were paused. Together they had brought 1 counted call; the 17 non-massage ones had brought none.' },
      { head: 'Check the clinic’s own call list', text: 'The clinic’s call notes named the clinics and doctors callers were really looking for. Those names went straight onto the block list.' },
      { head: 'Repeat every week', text: 'Google keeps finding new loosely related searches. Every review adds the newest junk terms to the list.' },
    ],
    outcome: [
      'After the clean-up the ads show for treatment searches such as panchakarma in Delhi and for the clinic’s own name, which had no keyword of its own before.',
      'In the first full week after the changes (14–20 Nov 2026) the ads produced 19 phone calls. Search terms keep being checked weekly because new junk keeps appearing.',
    ],
    lessons: [
      'A block list attached to a paused campaign protects nothing. Check which campaigns each list is attached to.',
      'For a clinic, other clinics’ names are the biggest leak. Their patients will not switch because of an ad.',
    ],
    tools: ['Google Ads', 'Search terms report', 'Shared negative keyword lists', 'Google Sheets'],
    cover: { src: '/images/case-studies/clinic/search-terms-competitor-names.jpg', alt: 'Google Ads search terms report with another clinic brand’s name among the top clicked terms', caption: 'Search terms, 14 Oct – 12 Nov: 1,329 clicks, top terms include another brand’s name', ...W_CLINIC },
    shots: [
      { src: '/images/case-studies/clinic/block-list.jpg', alt: 'Shared negative keyword list in Google Ads with other cities, hospitals and unrelated terms blocked', caption: 'The shared block list: other cities, hospitals and unrelated searches', ...W_CLINIC, height: 812 },
    ],
    updated: '2026-11-22',
  },
  {
    slug: 'google-ads-auto-apply-recommendations-clinic',
    category: 'clinics',
    title: 'Google’s auto-apply added 365 keywords to a clinic’s account without anyone noticing',
    seoTitle: 'Google Ads Auto-Apply Recommendations: Should You Turn Them Off?',
    metaDescription:
      'All 21 auto-apply recommendation types were on in a clinic’s Google Ads account and Google had added 365 keywords. What we turned off and why.',
    client: 'An Ayurveda hospital and wellness clinic',
    industry: 'Healthcare · Ayurveda',
    location: 'South Delhi, India',
    period: 'Nov 2026',
    services: ['Google Ads audit', 'Account settings'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'Every auto-apply option (7 of 7 “maintain” and 14 of 14 “grow” types) was switched on. The change history showed Google had added 365 keywords by itself. We switched auto-apply off on day one and kept the decisions with people.',
    results: [
      { big: '21 / 21', label: 'auto-apply recommendation types were switched on' },
      { big: '365', label: 'keywords added to the account by Google, not by a person' },
      { big: 'Day 1', label: 'auto-apply switched off, before any other change' },
    ],
    problem: [
      'Auto-apply lets Google make changes to an account on its own: add keywords, change bids, broaden match types, add assets. It is designed to grow spend and volume. For a clinic that only wants calls from patients nearby, broader is usually worse.',
      'The change history showed hundreds of keywords that nobody on the team had chosen, many of them loose matches that pull in unrelated searches.',
    ],
    steps: [
      { head: 'Open Recommendations → Auto-apply settings', text: 'Both groups, “Maintain your ads” and “Grow your business”, were fully selected. We deselected all 21 types.' },
      { head: 'Read the auto-apply history', text: 'The History tab and the change history list every change Google made. We exported them to see which keywords and settings came from auto-apply.' },
      { head: 'Review recommendations by hand instead', text: 'Recommendations are still read every week. The useful ones (for example a missing call asset) are applied by a person who can say why.' },
    ],
    outcome: [
      'No change has been made to the account by Google since. Every keyword now has a reason to be there, and the search terms report got easier to keep clean.',
    ],
    lessons: [
      'Check auto-apply in every account you take over. It is often switched on during setup and forgotten.',
      'A “Recommendations” score is not a performance score. A clinic can have a lower score and better calls.',
    ],
    tools: ['Google Ads', 'Recommendations', 'Change history'],
    cover: { src: '/images/case-studies/clinic/auto-apply-all-on.jpg', alt: 'Google Ads auto-apply settings showing 7 of 7 and 14 of 14 recommendation types selected', caption: 'Auto-apply before: 7 of 7 and 14 of 14 types selected', ...W_CLINIC },
    shots: [],
    updated: '2026-11-22',
  },
  {
    slug: 'clinic-google-ads-display-network-night-ads',
    category: 'clinics',
    title: '343 clicks, 0 patients: the Display Network and midnight ads draining a clinic’s budget',
    seoTitle: 'Clinic Google Ads: Display Network, Ad Schedule and Location Fixes',
    metaDescription:
      'A clinic’s Search campaigns were also running on Display sites, at night and outside the city. 343 Display clicks gave 0 conversions. The settings we changed.',
    client: 'An Ayurveda hospital and wellness clinic',
    industry: 'Healthcare · Ayurveda',
    location: 'South Delhi, India',
    period: 'Oct – Nov 2026',
    services: ['Google Ads audit', 'Campaign settings', 'Ad schedule'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'Three settings were quietly sending a clinic’s money to people who would never visit: the Display Network, ads running 24 hours a day, and “presence or interest” location targeting. In 30 days, Display sites alone took 343 clicks for ₹1,745 and gave 0 conversions.',
    results: [
      { big: '343', label: 'clicks from Display sites in 30 days, with 0 conversions' },
      { big: '₹7,160', label: 'spent at night with 0 calls, before the schedule fix' },
      { big: '3', label: 'live campaigns moved to Search only, with presence-only location' },
    ],
    problem: [
      'Search campaigns in Google Ads can include the Display Network and search partners. Google switches them on by default. For this clinic the Display placements were job sites, Hindi blog apps and news apps: people reading, not people looking for treatment.',
      'The ads also ran all night while the clinic is open in the day, and location targeting was set to “presence or interest”, so people outside Delhi who only searched about Delhi could see them.',
    ],
    steps: [
      { head: 'Search only', text: 'Display Network and search partners were switched off on all three live campaigns, so ads only show on Google search results.' },
      { head: 'Presence, not interest', text: 'Location option changed to “People in or regularly in” the target area, then read back from the settings to confirm it saved.' },
      { head: 'Ad schedule that matches the clinic', text: 'An ad schedule was added so ads run in the hours someone can answer the phone, instead of 24 hours a day.' },
      { head: 'Budget follows the calls', text: 'Daily budgets were moved toward the campaign that produced the cheapest calls, and away from the one that produced none.' },
    ],
    outcome: [
      'Display and night spend dropped to zero. The same daily budget now goes only to Google search, in clinic hours, for people in the area.',
    ],
    lessons: [
      'Open the “When and where ads showed” report in every account. It shows placements, hours and locations that the campaign screen hides.',
      'If nobody answers the phone at 2 AM, a call ad at 2 AM is wasted money.',
    ],
    tools: ['Google Ads', 'When and where ads showed report', 'Ad schedule', 'Location options'],
    cover: { src: '/images/case-studies/clinic/display-junk-placements.jpg', alt: 'Google Ads where ads showed report with 343 clicks on Display sites and 0 conversions', caption: 'Display placements, 14 Oct – 12 Nov: 343 clicks, 0.00 conversions', ...W_CLINIC },
    shots: [
      { src: '/images/case-studies/clinic/day-and-hour-night-clicks.jpg', alt: 'Google Ads day and hour report with clicks between midnight and 1 AM', caption: 'Day and hour: clicks at 00:00 – 01:00 with 0 conversions', ...W_CLINIC },
      { src: '/images/case-studies/clinic/ad-schedule-after.jpg', alt: 'Google Ads ad schedule set to clinic hours on every day of the week', caption: 'After: an ad schedule on every day of the week', ...W_CLINIC },
    ],
    updated: '2026-11-22',
  },
  {
    slug: 'clinic-call-tracking-fake-conversions',
    category: 'clinics',
    title: '105 ad calls, 2 bookings: what a clinic’s call list revealed about its Google Ads “conversions”',
    seoTitle: 'Google Ads Call Conversions for Clinics: Count Real Patients, Not Rings',
    metaDescription:
      'A clinic’s Google Ads showed dozens of call conversions, but the call list told another story. How we matched calls to real enquiries and fixed what counts.',
    client: 'An Ayurveda hospital and wellness clinic',
    industry: 'Healthcare · Ayurveda',
    location: 'South Delhi, India',
    period: 'Oct – Nov 2026',
    services: ['Conversion tracking', 'Call reporting', 'Keyword strategy'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'Google Ads counted any call over 30 seconds as a conversion. The clinic’s own list of 105 ad calls from 6–23 Oct showed 2 bookings and about 8 real enquiries. The rest were people wanting other clinics, massage, medicine, jobs, or dialled by mistake.',
    results: [
      { big: '105', label: 'ad calls in the clinic’s list, 6–23 Oct' },
      { big: '2', label: 'bookings among them (both later cancelled)' },
      { big: '~8', label: 'real treatment enquiries' },
      { big: '47', label: 'calls for other clinics, massage, medicine, jobs or wrong numbers' },
    ],
    problem: [
      'The monthly report looked healthy because every call that lasted 30 seconds counted as a conversion. Smart bidding then learned from those calls and bought more of the same.',
      'Matching the report to the reception desk’s notes showed what the calls really were: 12 for other clinics or doctors, 9 for massage or spa, 7 for medicine, 6 job seekers, 13 wrong numbers, about 24 unanswered and 22 with no note.',
    ],
    steps: [
      { head: 'Put the call list next to the report', text: 'Each call in the clinic’s list was grouped by what the caller wanted. That turned “56 conversions” into a list of reasons.' },
      { head: 'Block what the bad calls had in common', text: 'Massage, medicine, capsules, jobs and the other clinics’ names went onto the block list, so those searches stop seeing the ad.' },
      { head: 'Feed the bidding real winners', text: 'Treatment and brand searches that brought real enquiries (panchakarma in Delhi, the clinic’s own name) were added as exact and phrase keywords. New ad groups were built for joint and knee pain, panchakarma and postnatal care.' },
      { head: 'Report answered and missed calls', text: 'Weekly reports now show calls by day and hour, answered and missed, so the clinic can staff the phone when the ads ring.' },
    ],
    outcome: [
      '13–18 Nov: 143 clicks and 12 ad calls (5 answered, 7 missed, all inside clinic hours). 14–20 Nov: 19 ad phone calls. The missed calls became the next fix: someone to answer at the busy hours.',
    ],
    lessons: [
      'A conversion is only as good as its definition. Ask the front desk what the calls were before trusting the number.',
      'Missed calls are lost patients. Reporting them by hour is often the cheapest improvement available.',
    ],
    tools: ['Google Ads', 'Call details report', 'Clinic call list', 'Google Sheets'],
    cover: { src: '/images/case-studies/clinic/day-and-hour-night-clicks.jpg', alt: 'Google Ads day and hour report showing conversions are rare across hours', caption: '30 days: 1,329 clicks, 28 counted conversions', ...W_CLINIC },
    shots: [],
    updated: '2026-11-22',
  },
  {
    slug: 'google-ads-launch-new-wellness-centre',
    category: 'clinics',
    title: 'Launching Google Ads for a new wellness centre in Shillong: the full build',
    seoTitle: 'Google Ads Setup for a Wellness Centre: Keywords, Negatives, Assets',
    metaDescription:
      'A new Ayurveda wellness centre in Meghalaya: 24 keywords, 28 negatives, 15 headlines, 4 sitelinks and 6 callouts, rated Excellent ad strength on launch day.',
    client: 'A new Ayurveda and Siddha wellness centre',
    industry: 'Healthcare · Wellness',
    location: 'Upper Shillong, Meghalaya, India',
    period: 'Nov 2026',
    services: ['Google Ads setup', 'Keyword research', 'Ad copy'],
    service: 'paid-ads',
    status: 'in-progress',
    summary:
      'A call-focused Search campaign for a new centre in a small market, built with lessons from the clinic account: Search only, presence-only location, its own call number and its own negatives from day one.',
    results: [
      { big: 'Excellent', label: 'ad strength on launch day' },
      { big: '24', label: 'phrase keywords (Shillong, Meghalaya, treatments, near me)' },
      { big: '28', label: 'campaign negatives from day one' },
      { big: '15 + 4', label: 'headlines and descriptions in the responsive search ad' },
    ],
    problem: [
      'A new centre has no search history to learn from, and searches in Meghalaya for Ayurveda treatments are few. Every rupee has to reach someone nearby who wants a treatment.',
    ],
    steps: [
      { head: 'Keywords that name the place', text: 'Shillong and Meghalaya with Ayurveda, panchakarma, wellness centre, shirodhara, siddha and back or joint pain, plus “near me” searches.' },
      { head: 'Negatives before the first click', text: 'Free, jobs, courses, PDFs, tablets, capsules, marketplaces and other cities were blocked before launch, using what we learned from the Delhi clinic.' },
      { head: 'Its own assets', text: 'A separate call number, 4 sitelinks (facilities, appointments, treatments, doctors) and 6 callouts at campaign level, so another location’s details never show.' },
      { head: 'Safe copy', text: 'No cure claims and no phone number in the ad text, to stay inside Google’s healthcare policies.' },
    ],
    outcome: [
      'The campaign went live on 21 Nov 2026 with status Eligible. First calls and search terms are being collected; results will be added here once there is a full week of data.',
    ],
    lessons: [
      'Start a new location with the negatives the old one took months to learn.',
    ],
    tools: ['Google Ads', 'Keyword Planner', 'Responsive search ads', 'Call assets'],
    cover: { src: '/images/case-studies/clinic/ad-schedule-after.jpg', alt: 'Google Ads ad schedule screen', caption: 'Built on the same settings as the cleaned-up clinic account', ...W_CLINIC },
    shots: [],
    updated: '2026-11-22',
  },

  // ───────────────────────── App marketing ─────────────────────────
  {
    slug: 'google-app-campaign-cost-per-install-68-percent-lower',
    category: 'app-marketing',
    title: 'Google App campaigns: cost per install down 68%, from ₹32.97 to ₹10.50',
    seoTitle: 'Google Ads App Install Case Study: Cost per Install Down 68%',
    metaDescription:
      'A home-services app in Noida: 557 installs from 85,344 impressions, and cost per install cut from ₹32.97 to ₹10.50 across four App campaigns. What changed.',
    client: 'A home-services marketplace app',
    industry: 'Consumer app · Home services',
    location: 'Noida, India',
    period: 'Jun – Oct 2026',
    services: ['Google App campaigns', 'Location targeting', 'Creative assets'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'Four App campaigns over four months: the first paid ₹32.97 per install, the latest ₹10.50 and ₹10.61. In total 557 installs, 85,344 impressions, 5,233 clicks, a 6.13% click-through rate and an average of ₹15.54 per install.',
    results: [
      { big: '68%', label: 'lower cost per install: ₹32.97 → ₹10.50' },
      { big: '557', label: 'app installs from 4 campaigns' },
      { big: '18.39%', label: 'click-to-install rate on the best campaign' },
      { big: '6.13%', label: 'click-through rate on 85,344 impressions' },
    ],
    problem: [
      'The app needed installs from two audiences in a few Noida neighbourhoods: service providers and customers, on a very small budget. The first campaign paid ₹32.97 per install and converted 6.31% of clicks.',
      'Its location pin was about 22 km from the area the app could serve, and the location option reached people “in or interested in” the area, so many impressions landed where no service was available.',
    ],
    steps: [
      { head: 'Move the target to where the service runs', text: 'The pin was moved onto the service area. The next campaign reached ₹24.38 per install, 26% lower, and this was the most likely reason.' },
      { head: 'Presence only', text: 'The location option was changed to people in the area, and read back from the API to confirm it saved.' },
      { head: 'One campaign per audience', text: 'Providers and customers got their own campaigns, assets and language. Mixing them makes Google learn from the wrong installs.' },
      { head: 'Cut what does not install', text: 'A device type that spent and never installed was excluded. Hours, pincodes and assets were read weekly.' },
      { head: 'Wait out the learning period', text: 'Two day-3 conclusions reversed by day 7. Changes are made only after a full week of data.' },
    ],
    outcome: [
      'The two latest campaigns reached ₹10.50 and ₹10.61 per install with 18.39% and 15.14% of clicks becoming installs, against 6.31% on the first.',
    ],
    lessons: [
      'Check the location option on day one, not just the map pin. A wrong setting quietly spends a week’s budget outside the area.',
    ],
    tools: ['Google Ads', 'Google Ads API', 'Google Analytics 4', 'Python'],
    cover: { src: '/images/case-studies/app-installs/google-ads-cost-per-install.jpg', alt: 'Google Ads campaigns table with installs, conversion rate and cost per install for four app campaigns', caption: '16 Jun – 27 Oct 2026: 557 installs, ₹15.54 average cost per install', ...W_GADS },
    shots: [],
    updated: '2026-11-22',
  },
  {
    slug: 'meta-ads-app-installs-zero-results-missing-sdk',
    category: 'app-marketing',
    title: 'Meta Ads showed 0 app installs from 2.39 lakh impressions. The ads weren’t the problem.',
    seoTitle: 'Meta App Install Ads Showing 0 Results? Check the Meta SDK',
    metaDescription:
      'Two Meta app-install campaigns delivered 239,384 impressions and Meta recorded 0 installs. Why it happened (no Meta SDK) and how to set up app ads correctly.',
    client: 'A home-services marketplace app',
    industry: 'Consumer app · Home services',
    location: 'Noida, India',
    period: 'Oct 2026',
    services: ['Meta Ads', 'App event tracking', 'Hindi and English ad copy'],
    service: 'paid-ads',
    status: 'results',
    summary:
      'Two campaigns, one for service providers in Hindi and one for customers in English, ran 12–19 Oct 2026: 154,397 + 84,987 impressions. Meta showed “—” in the results column for every ad, because the app had no Meta SDK and Meta could not see a single install.',
    results: [
      { big: '2,39,384', label: 'impressions across 2 campaigns and 11 ads in 7 days' },
      { big: '0', label: 'installs Meta could record (no Meta SDK in the app)' },
      { big: '2', label: 'audiences, each with its own campaign, language and creatives' },
    ],
    problem: [
      'Both ad sets were set to optimise for app installs. Without the Meta SDK (or an attribution partner sending install events), Meta has no install signal: it cannot report installs and its delivery cannot learn which people install.',
      'The ads were still delivering cheap reach and clicks, which made the campaigns look busy while the main goal was invisible.',
    ],
    steps: [
      { head: 'Read installs where they can be counted', text: 'Installs were read from Google Analytics and Google Ads instead, and Meta was judged on reach, clicks and cost per click until tracking was fixed.' },
      { head: 'Ask for the SDK first', text: 'The fix is in the app, not in Ads Manager: add the Meta SDK (or connect an attribution partner) and send install and key in-app events.' },
      { head: 'Until then, optimise for what Meta can see', text: 'Link clicks or landing page views are honest goals when installs cannot be counted.' },
    ],
    outcome: [
      'The test gave a clear, cheap answer: Meta app-install ads for this app need the SDK before more money goes in. The audience and creative work is ready for when it is.',
    ],
    lessons: [
      'Before an app-install campaign: open Events Manager and confirm an install event has arrived in the last 7 days.',
    ],
    tools: ['Meta Ads Manager', 'Events Manager', 'Google Analytics 4'],
    cover: { src: '/images/case-studies/app-installs/meta-zero-installs-ads.jpg', alt: 'Meta Ads Manager ads table with impressions and spend but a dash in the mobile app install results column', caption: '12–19 Oct: impressions and spend, but “—” under Mobile App Install for every ad', ...W_META },
    shots: [
      { src: '/images/case-studies/app-installs/meta-zero-installs-campaign.jpg', alt: 'Meta Ads Manager campaign row with 154,397 impressions and no app install results', caption: 'Provider campaign: 154,397 impressions, no installs recorded', ...W_META },
    ],
    updated: '2026-11-22',
  },
  {
    slug: 'sitemap-fix-indexed-pages-search-console',
    category: 'app-marketing',
    title: 'From a 44-URL sitemap to 189 indexed pages: the fix for “Service Not Found”',
    seoTitle: 'Search Console Indexing Case Study: 189 Pages Indexed After a Sitemap Fix',
    metaDescription:
      'A services website listed 44 URLs in its sitemap and its service pages showed “Service Not Found”. After the fix Search Console reported 189 indexed pages.',
    client: 'A home-services marketplace app (its website)',
    industry: 'Consumer app · Home services',
    location: 'Noida, India',
    period: 'Aug – Oct 2026',
    services: ['Technical SEO', 'Sitemap and robots', 'Search Console'],
    service: 'seo',
    status: 'results',
    summary:
      'The sitemap had 44 URLs and sampled service pages answered with a soft “Service Not Found”. The fixed sitemap listed every real service page (186 URLs). Search Console then showed 189 pages indexed on 23 Oct 2026, up from a thin sliver before.',
    results: [
      { big: '189', label: 'pages indexed in Search Console (23 Oct 2026)' },
      { big: '44 → 186', label: 'URLs in the sitemap after the fix' },
      { big: '7.3', label: 'average position over 3 months, 4.2% click-through rate' },
    ],
    problem: [
      'Search Console showed very few indexed pages. The sitemap left out most service pages, and 8 of 8 sampled service URLs returned HTTP 200 with “Service Not Found” on the page: a soft 404 that tells Google there is nothing to index.',
    ],
    steps: [
      { head: 'List every real page', text: 'The sitemap was rebuilt from the service data: all real service URLs, stable last-modified dates, nothing that leads to an empty page.' },
      { head: 'Block what should never be indexed', text: 'Referral and verification paths were disallowed in robots.txt.' },
      { head: 'Link the pages', text: 'Service cards were linked so crawlers can reach every service page from the site itself, not only from the sitemap.' },
      { head: 'Confirm in Search Console, not by assumption', text: 'Submitted is not indexed. The Pages report was checked until the indexed count moved.' },
    ],
    outcome: [
      'Within days of the fix going live in mid-October, the indexed count jumped from a thin sliver to 189 pages.',
    ],
    lessons: [
      'A page that says “not found” with a 200 status is worse than a real 404: it wastes crawl budget and looks like thin content.',
    ],
    tools: ['Google Search Console', 'Next.js sitemap and robots', 'URL Inspection'],
    cover: { src: '/images/case-studies/app-installs/search-console-189-indexed.jpg', alt: 'Google Search Console page indexing report with 189 indexed pages and a jump in October', caption: 'Page indexing: 189 indexed on 23 Oct 2026', ...W_GADS },
    shots: [
      { src: '/images/case-studies/app-installs/search-console-performance.jpg', alt: 'Google Search Console performance report with 422 clicks and 10.1k impressions in 3 months', caption: '3 months: 422 clicks, 10.1k impressions, 4.2% CTR, position 7.3', ...W_GADS },
    ],
    updated: '2026-11-22',
  },
  {
    slug: 'automated-marketing-reporting-python-apis',
    category: 'app-marketing',
    title: 'Marketing reports without copy-paste: one command for Google Ads, GA4, Search Console and Meta',
    seoTitle: 'Automated Marketing Reporting With Python and Ad APIs',
    metaDescription:
      'One Python command pulls spend, installs, cost per install, sessions and organic clicks from 5 APIs into one tracker. How the reporting system was built.',
    client: 'A home-services marketplace app',
    industry: 'Consumer app · Home services',
    location: 'Noida, India',
    period: 'Aug – Oct 2026',
    services: ['Reporting automation', 'GA4 and Tag Manager', 'API integrations'],
    service: 'ai-automation',
    status: 'results',
    summary:
      'Reports used to mean opening five dashboards by hand. A set of Python scripts now reads each platform through its official API and writes one dated row per day into one tracker.',
    results: [
      { big: '5', label: 'APIs connected: Google Ads, GA4, Search Console, Meta, Sheets' },
      { big: '1', label: 'command replaces five manual dashboard checks' },
      { big: '0', label: 'numbers typed in by hand' },
    ],
    problem: [
      'With one marketer and many channels, reporting was the first thing to slip. Numbers copied by hand also drift: a typo in a weekly report becomes a wrong decision.',
    ],
    steps: [
      { head: 'Decide the headline number first', text: 'For an app it is installs and cost per install. Everything else is reported only if it explains installs.' },
      { head: 'Pull, never copy', text: 'Each script reads one platform through its official API. Where platforms disagree (Google Ads and GA4 count installs differently) the report shows both and says why.' },
      { head: 'Blank is not zero', text: 'A number that could not be collected stays blank and is marked, so formulas and decisions are not built on a false zero.' },
    ],
    outcome: [
      'Weekly and monthly reports are produced from the same daily rows, and every figure can be traced back to an API pull with a date.',
    ],
    lessons: [
      'Write down what each metric means before building the first script. It saves arguments later.',
    ],
    tools: ['Python', 'Google Ads API', 'GA4 Data API', 'Search Console API', 'Meta Marketing API', 'Google Sheets'],
    cover: { src: '/images/case-studies/app-installs/search-console-performance.jpg', alt: 'Search Console performance report, one of the data sources pulled by the reporting scripts', caption: 'Search Console: one of five sources pulled automatically', ...W_GADS },
    shots: [],
    updated: '2026-11-22',
  },

  // ───────────────────────── Local business ─────────────────────────
  {
    slug: 'gym-whatsapp-renewal-reminders-member-retention',
    category: 'local-business',
    title: 'Gym members were leaving after month one. A WhatsApp follow-up system to keep them.',
    seoTitle: 'Gym Member Retention With WhatsApp Reminders: Case Study',
    metaDescription:
      'A Faridabad gym with 250–300 members on monthly plans was losing members after the first month. The WhatsApp welcome, check-in and renewal system we designed.',
    client: 'An independent gym',
    industry: 'Fitness · Local business',
    location: 'Faridabad, India',
    period: 'Nov 2026 – ongoing',
    services: ['WhatsApp automation', 'AI replies', 'Member follow-up'],
    service: 'ai-automation',
    status: 'in-progress',
    summary:
      'A gym with 250–300 members, only a monthly plan, and renewals that expired without anyone noticing. Staff messaged members by hand when they had time. We designed an automatic WhatsApp system: welcome series, first-month check-ins, renewal reminders and AI answers.',
    results: [
      { big: '250–300', label: 'members on monthly plans when we started' },
      { big: '5', label: 'automatic welcome and check-in messages in the first month' },
      { big: '3', label: 'renewal reminders: 5 days before, 1 day before and on the day' },
    ],
    problem: [
      'Members joined, came for a few weeks, and quietly did not renew. Nobody had the time to message each one, and there was no list of who was due when.',
      'The gym had no website, no Google profile and no social pages, so WhatsApp was the one channel every member already used.',
    ],
    steps: [
      { head: 'A member list the staff already understand', text: 'A Google Sheet with name, phone, join date and plan end date, kept by the front desk.' },
      { head: 'WhatsApp Cloud API, owned by the gym', text: 'A free Meta Business account and the official WhatsApp Cloud API, set up in the gym’s name on a new number, with no paid middleman.' },
      { head: 'Welcome and first-month check-ins', text: 'Messages on days 1, 3, 7, 14 and 21, so new members feel noticed in the weeks they usually drop off.' },
      { head: 'Renewal reminders', text: 'Automatic reminders 5 days before, 1 day before and on the day the plan ends.' },
      { head: 'AI replies from the gym’s own facts', text: 'Common questions (timings, fees, trainers) answered instantly from information the owner approved.' },
    ],
    outcome: [
      'The system is being set up now. Renewal and retention numbers will be published here after the first 60 days, from the gym’s own member list.',
    ],
    lessons: [
      'For a local business, the cheapest growth is often keeping the customers you already have.',
    ],
    tools: ['WhatsApp Cloud API', 'Google Sheets', 'AI assistant', 'Meta Business Suite'],
    cover: { src: '/images/sections/service-ai-automation.jpg', alt: 'WhatsApp automation illustration', caption: 'WhatsApp follow-ups for gym members', width: 1000, height: 750 },
    shots: [],
    updated: '2026-11-22',
  },

  // ───────────────────────── Our own work ─────────────────────────
  {
    slug: 'real-estate-website-audit-749-sites',
    category: 'our-work',
    title: 'We checked 749 real estate websites. 56% had no ad or analytics tracking at all.',
    seoTitle: 'Real Estate Website Study: 749 Sites, 56% Without Tracking',
    metaDescription:
      'Our automated check of 749 real estate business websites in 26 cities: 56% had no tracking, 60% no WhatsApp link, 47% no form, 35% neither a form nor WhatsApp.',
    client: 'Veloxis Global (our own research)',
    industry: 'Real estate',
    location: '26 cities in UP, Delhi NCR and nearby states',
    period: '1–2 Oct 2026',
    services: ['Website audit', 'Research', 'Python automation'],
    service: 'high-converting-landing-pages',
    status: 'results',
    summary:
      'We found real estate agents, consultants, developers and builders on Google Maps in 26 cities and ran an automated check of each homepage for tracking, WhatsApp links, forms, speed and HTTPS.',
    results: [
      { big: '56%', label: 'had no ad or analytics tracking of any kind (417 of 749)' },
      { big: '60%', label: 'had no WhatsApp click-to-chat link (449)' },
      { big: '47%', label: 'had no form on the homepage (354)' },
      { big: '35%', label: 'had neither a WhatsApp link nor a form (262)' },
    ],
    problem: [
      'Real estate businesses spend on ads and portals, but if the website cannot record a visit or take an enquiry, that spend cannot be measured or improved.',
    ],
    steps: [
      { head: 'Build a real sample', text: '749 businesses from Google Maps across 26 cities, not a hand-picked list.' },
      { head: 'Check what a buyer and an ad platform see', text: 'A script read each homepage for a Meta pixel, Google Ads tag, Tag Manager or Analytics code, a WhatsApp link and any form.' },
      { head: 'Count conservatively', text: 'Any tracking code counts as tracking and any form counts as a form, so the real gaps are probably larger. Only the homepage was checked.' },
    ],
    outcome: [
      'The findings shaped our Real Estate Lead System offer (tracking, a project landing page and an instant WhatsApp reply) and our free audit.',
    ],
    lessons: [
      'Also found: 19% took more than 3 seconds to load on our check, and 9% were not on HTTPS.',
    ],
    tools: ['Python', 'Google Maps data', 'Google Sheets'],
    cover: { src: '/images/case-studies/veloxis/veloxisglobal-website-audit.jpg', alt: 'The Veloxis Global free website audit tool', caption: 'The same checks now run in our free website audit tool', width: 1280, height: 800 },
    shots: [],
    updated: '2026-11-22',
  },
  {
    slug: 'new-agency-website-seo-first-month',
    category: 'our-work',
    title: 'A brand-new agency website: 9,536 Google impressions in four weeks, with ₹0 on ads',
    seoTitle: 'New Website SEO Case Study: 9,536 Impressions in 4 Weeks',
    metaDescription:
      'veloxisglobal.com in its early weeks: 77 clicks and 9,536 Google impressions from 11 Oct to 8 Nov 2026 with no ad spend. The SEO and content setup behind it.',
    client: 'Veloxis Global (our own website)',
    industry: 'Marketing agency',
    location: 'India',
    period: '11 Oct – 8 Nov 2026',
    services: ['SEO', 'Content', 'Technical SEO', 'Website build'],
    service: 'seo',
    status: 'results',
    summary:
      'A new domain with no backlinks history, built on Next.js with clean technical SEO, a daily blog with one topic per post, original research and schema, reached 9,536 impressions and 77 clicks in four weeks without paid traffic.',
    results: [
      { big: '9,536', label: 'Google impressions in 4 weeks' },
      { big: '77', label: 'clicks from Google search' },
      { big: '₹0', label: 'spent on ads to get this traffic' },
    ],
    problem: [
      'A new agency has no reviews, no case studies and no domain history. Search is the cheapest way to be found, but a new site usually takes months to show up.',
    ],
    steps: [
      { head: 'Technical SEO from day one', text: 'Fast static pages, a sitemap, canonical URLs, structured data and Search Console set up before the first post.' },
      { head: 'One question per page', text: 'Every guide answers one search question fully, with sources, instead of many thin posts.' },
      { head: 'Original data', text: 'The 749-website study gave the site numbers nobody else had, which helps pages get cited.' },
      { head: 'Publish on a schedule', text: 'A daily writer routine and a 7 AM publishing job keep new pages arriving.' },
    ],
    outcome: [
      'The site is now tracked weekly against this baseline in Search Console. This page will be updated with the newer numbers.',
    ],
    lessons: [
      'Impressions come first, clicks follow as positions improve. Average position in this period was 18.',
    ],
    tools: ['Next.js', 'Vercel', 'Google Search Console', 'GA4', 'Schema.org'],
    cover: { src: '/images/case-studies/veloxis/veloxisglobal-home.jpg', alt: 'The veloxisglobal.com homepage', caption: 'veloxisglobal.com', width: 1280, height: 800 },
    shots: [],
    updated: '2026-11-22',
  },
  {
    slug: 'agency-crm-and-cold-email-system',
    category: 'our-work',
    title: 'We built our own CRM and cold-email engine instead of paying for five tools',
    seoTitle: 'Building a Custom CRM and Cold Email System for an Agency',
    metaDescription:
      'A phone-friendly CRM, a lead finder, an approval-first cold email system and website lead capture, built and run in the cloud by the Veloxis Global team.',
    client: 'Veloxis Global (our own systems)',
    industry: 'Marketing agency',
    location: 'India',
    period: 'Oct – Nov 2026',
    services: ['CRM build', 'Email automation', 'Lead capture'],
    service: 'ai-automation',
    status: 'results',
    summary:
      'A CRM the team can run from a phone, connected to a lead finder, a cold-email queue that sends nothing without approval, and the website forms. Everything runs in the cloud, so no office computer has to stay on.',
    results: [
      { big: '9', label: 'CRM pages: today, pipeline, leads, calls, emails, stats, playbook, learn, team' },
      { big: '3', label: 'emails maximum per business; a reply or “no” stops it at once' },
      { big: '100', label: 'emails per day cap, sent about 2 minutes apart' },
    ],
    problem: [
      'Spreadsheets lost track of who was called, emailed or due. Paid CRMs and email tools cost money before the first client, and most make it too easy to over-send.',
    ],
    steps: [
      { head: 'One database for everything', text: 'Leads, calls, emails, replies and notes live in one cloud database.' },
      { head: 'A CRM for phones', text: 'The pages show what is due today, so the team can work from a phone between meetings.' },
      { head: 'Approval before sending', text: 'Emails are prepared into a queue and nothing goes out until a person presses approve. Replies and bounces are read back automatically.' },
      { head: 'Website leads arrive by themselves', text: 'Every website enquiry becomes a CRM lead with its source.' },
    ],
    outcome: [
      'The same system is what we set up for clients who need lead capture and follow-up: forms, WhatsApp replies and a pipeline that shows what is due.',
    ],
    lessons: [
      'Rules in the software (a 3-email limit, approval first) protect a brand better than rules in a document.',
    ],
    tools: ['Next.js', 'Supabase', 'Python', 'Edge Functions', 'GitHub Actions'],
    cover: { src: '/images/case-studies/veloxis/crm-map.jpg', alt: 'Map of the nine pages of the Veloxis CRM', caption: 'The nine CRM pages', width: 1600, height: 1631 },
    shots: [],
    updated: '2026-11-22',
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
