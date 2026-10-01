# 60-day blog plan — 30 posts, one every 2 days

Plan created on 2026-10-01. It runs from **28 Sep to 25 Nov 2026**. Posts 1–2 are backdated and live first.

**Where the numbers come from:**
- Search volumes are monthly Google Ads averages for India in English, pulled from DataForSEO on 2026-10-01 (`research/kw-2026-10-content/volumes.json`).
- The 1,000 candidate keywords came from 5,023 Google autocomplete suggestions for 64 seed phrases.
- Questions come from Google's "People also ask" boxes, collected through Chrome on 2026-10-01 (India, English).
- Volumes from the September run are marked "(Sep)".

Topics already covered by a live page are **not** repeated; see the keyword map in `docs/SEO.md`. Every primary keyword below is used by exactly one URL.

## Rules for every post

| Rule | Detail |
|---|---|
| Length | 1,500–2,000 words in `content.html` |
| Images | 6: one 1600×1000 cover + 5 inline 1600×1000 photos (`inlineImages`, each before a different `<h2>`). Pexels photos saved under `public/images/people/blog/<prefix>-*.jpg`, never reused on another page |
| FAQs | 7–9, answers taken only from the article |
| SEO title | under 60 characters, primary keyword near the start |
| Excerpt | 140–160 characters |
| Proof | No invented statistics, clients or results (docs/SEO.md rule 3). Laws are cited by section; legal posts end with "not legal advice" |
| Prices | Never quote Veloxis prices. Market figures only when a public source states them |
| Links out | See "Internal linking" below |

## Internal linking

Each post has one **service page** it sells, and belongs to one **cluster**. Each cluster has a pillar page.

| Cluster | Pillar (already live) | Service page |
|---|---|---|
| A — Leads & ads | `/blog/how-to-generate-real-estate-leads` | `/services/paid-ads` |
| B — Landing pages, creatives & brand | `/blog/real-estate-landing-page-conversion-hacks` | `/services/high-converting-landing-pages` |
| C — WhatsApp, AI & sales follow-up | `/blog/whatsapp-automation-for-real-estate-leads` | `/services/ai-automation` |
| D — RERA, CPs & brokers | `/blog/channel-partner-in-real-estate` | `/channel-partners` |

**Links out of every new post (6–9 in the body):**
1. Its service page, once, using that service's commercial keyword as the anchor ("real estate lead generation", "real estate landing page", "real estate chatbot"). Cluster D posts link to `/channel-partners`.
2. Its cluster pillar.
3. 2–4 **live** sibling posts, with the sibling's primary keyword as the anchor.
4. 1 post from another cluster, where the topic really connects.
5. `/free-audit` in the closing paragraph.
6. A playbook when one fits (`/playbooks/new-launch-meta-google-ads-plan`, `project-landing-page-blueprint`, `whatsapp-lead-response-flow`, `channel-partner-lead-registration`).

**Links into every new post (backfill):**
- On publish day, edit the 2–3 older posts listed in the "Backfill" column. Add one contextual sentence with a link to the new post.
- This way no post is ever an orphan, and nothing links to a page before it exists. `scripts/seo/crawl.js` fails on broken links and orphans.

**Anchor rule:** the same anchor text never points to two different URLs, and a page never links to itself.

## The calendar

The "Links to" column lists sibling posts and uses the numbers from this table. `EOI`, `CP`, `Leads`, `LP hacks`, `WA auto`, `AI`, `Meta`, `Google`, `Ad ex`, `G vs M` and `Local SEO` are the posts that are already live.

| # | Date | Slug | Primary keyword (vol) | Secondary keywords (vol) | Google questions to answer | Cl. | Links to | Backfill (older posts that link in) |
|---|---|---|---|---|---|---|---|---|
| 1 | 28 Sep ✅ | `rera-number-check` | rera number check (3,600) | rera number (2,900), check rera number (720), rera number format (170), rera number means (140), is rera mandatory (70) | What is a RERA number? How do I check it? Where must it appear in ads? | D | EOI, CP, LP hacks, Ad ex, #2 | EOI, CP, Ad ex |
| 2 | 30 Sep ✅ | `real-estate-brochure` | real estate brochure (1,000) | real estate brochure design, what to include in a real estate brochure, digital brochure on WhatsApp | How can I design a real estate brochure? What should it include? Can ChatGPT design one? | B | LP hacks, WA auto, Ad ex, Meta, #1 | LP hacks, WA auto, Ad ex |
| 3 | 2 Oct ✅ | `real-estate-social-media-marketing` | real estate social media (260) | real estate social media post (390), real estate on social media (260), real estate facebook page (40), real estate post ideas (50), real estate content ideas (40) | How to do social media marketing for real estate? What is the 5-3-1 rule? | A | Leads, Meta, Ad ex, #2 | Meta, Leads, #2 |
| 4 | 4 Oct | `rera-registration-for-agents` | rera registration for agents (480) | how to become real estate agent in india (320), rera agent registration fee (210), online rera registration for agents (140), how to become rera registered agent (50), how to get real estate license in india (30) | How to become a real estate agent in India? How much do agents earn? | D | CP, #1, EOI, Leads | CP, #1 |
| 5 | 6 Oct | `real-estate-hoarding-design` | real estate hoarding (390) | real estate hoarding design (320), hoarding ideas (40), hoarding ads (30), wall branding (30) | — | B | Ad ex, LP hacks, #1 (RERA on hoardings), #2 | Ad ex, #2 |
| 6 | 8 Oct | `real-estate-seo-india` | real estate seo (480) | real estate seo agency (90), seo india (50), real estate agent seo (50), real estate local seo (70 — keep with Local SEO) | Is SEO replaced by AI? What are the four types of SEO? | B | Local SEO, AI, LP hacks, #3 | Local SEO, #3 |
| 7 | 10 Oct | `real-estate-slogans-taglines` | real estate slogans (390) | real estate taglines (210), company slogans (90), slogan ideas (70), catchy slogans (70), agent tagline (70) | — | B | Ad ex, #2, #5, #3 | Ad ex, #5 |
| 8 | 12 Oct | `instagram-reels-for-real-estate` | instagram for real estate (170) | real estate reels (140), instagram real estate posts (90), real estate reel ideas (30) | What are popular Reels for real estate? How to promote real estate on Instagram? | A | #3, Meta, Ad ex, #7 | #3, Meta |
| 9 | 14 Oct | `99acres-vs-magicbricks-property-portals` | property portals (390) | 99acres vs magicbricks (70), what is 99acres (90), does 99acres charge money (40), is 99acres reliable (30) | What are the top 5 property websites in India? Is a 99acres subscription worth it? | A | Leads, G vs M, #4, #3 | Leads, #4 |
| 10 | 16 Oct | `real-estate-broker-commission-india` | real estate broker commission (390) | how much do brokers charge in india, CP commission models, 70/30 split | How much commission does a broker take? How much do brokers charge in India? | D | CP, #4, #9, EOI | CP, #4 |
| 11 | 18 Oct | `real-estate-whatsapp-message-templates` | real estate whatsapp message template (40) | real estate follow up messages, site visit reminder message, launch message | What is a good follow-up message? What messages can I send to clients? | C | WA auto, Leads, #2, #8 | WA auto, #2 |
| 12 | 20 Oct | `real-estate-branding` | real estate branding (320) | real estate brand names (50), luxury real estate brands (70) | What is branding in real estate? What is the 3-7-27 rule? | B | #7, #5, LP hacks, #2 | #7, #5 |
| 13 | 22 Oct | `real-estate-lead-management` | real estate lead management (40) | lead management software (90), what is a crm in real estate (140), lead management system (40) | What is a real estate lead? What are the 7 types of leads? | C | Leads, WA auto, #11, #9 | Leads, #11 |
| 14 | 24 Oct | `rera-advertisement-rules` | rera advertisement rules | what is rera and how it works (40), rera guidelines (30), can builder sell parking under rera (30) | What is the 70/30 rule in RERA? Does RERA apply to commercial projects? | D | #1, EOI, Ad ex, #5, #4 | #1, #5, Ad ex |
| 15 | 26 Oct | `real-estate-site-visit` | real estate site visit form (110) | site visit report example (30), site visit conversion, how to book site visits | What is a site visit in real estate? What is a good conversion rate? | C | Leads, WA auto, #11, #13 | #13, Leads |
| 16 | 28 Oct | `real-estate-marketing-plan` | real estate marketing plan (90) | marketing plan for real estate (90), agent marketing plan (90), marketing planner (90), business plan template (50) | How to write a real estate marketing plan? What are the 7 steps? | A | Leads, #3, #9, G vs M | Leads, #3 |
| 17 | 30 Oct | `pre-launch-real-estate-marketing` | pre launch real estate marketing | what is pre launch in real estate (30), pre launch real estate projects | What is pre-launch in real estate? What is pre-launch marketing? | A | EOI, #16, Meta, Google, #14 | EOI, #16 |
| 18 | 1 Nov | `real-estate-newspaper-ads` | real estate newspaper ads (210) | real estate ad in newspaper (210), newspaper advertisement (210) | — | A | Ad ex, #5, #14, #17 | Ad ex, #5 |
| 19 | 3 Nov | `whatsapp-business-api-for-real-estate` | whatsapp business api for real estate (30) | whatsapp chatbot for real estate, send bulk whatsapp messages | Is WhatsApp Business API free? Can WhatsApp chatbots be used for real estate? | C | WA auto, #11, AI, #15 | WA auto, #11 |
| 20 | 5 Nov | `real-estate-sales-scripts` | real estate sales pitch examples (90) | real estate sales pitch (40), cold calling script (30), site visit script | What is a script in real estate? How to write a sales script? | C | #11, #15, Leads, #13 | #15, #11 |
| 21 | 7 Nov | `ai-tools-for-real-estate` | ai tools for real estate (70) | chatgpt for real estate (40), chatgpt for real estate agents (40), ai tools for real estate agents (30) | What's the best AI for real estate? Best ChatGPT prompts for agents? | C | AI, #19, #2, #20 | AI, #20 |
| 22 | 9 Nov | `real-estate-video-marketing` | real estate video marketing (50) | virtual tour real estate (110), youtube for real estate (50), property photography (70) | — | B | #8, #3, LP hacks, #2 | #8, #3 |
| 23 | 11 Nov | `real-estate-marketing-budget` | real estate marketing budget | cost per lead real estate india, how to calculate cost per lead | What is a recommended marketing budget? What is a reasonable cost per lead? | A | Leads, #16, G vs M, #9 | #16, Leads |
| 24 | 13 Nov | `real-estate-lead-qualification-questions` | real estate lead qualification questions | how to get qualified leads for real estate | How to get qualified leads? Most asked questions in real estate? | C | #13, #20, WA auto, Meta | #13, #20 |
| 25 | 15 Nov | `real-estate-retargeting-ads` | real estate retargeting ads | retargeting ads examples, cost of retargeting | What are retargeting ads used for? How much do they cost? | A | Meta, Google, #23, LP hacks | Meta, #23 |
| 26 | 17 Nov | `real-estate-referral-program` | real estate referral agent (140) | real estate referral agency (140), real estate referrals (40), referral cards (30) | — | D | Leads, #10, CP, #11 | #10, Leads |
| 27 | 19 Nov | `how-to-sell-plots-online` | how to sell plots online (90) (Sep) | how to sell plots (70) (Sep), plot marketing ideas | How do I sell my plot faster? How do I promote my property? | A | #9, Meta, #17, #3 | #9, #17 |
| 28 | 21 Nov | `real-estate-website-examples` | real estate website examples (70) | real estate website design ideas (30) (Sep), real estate landing pages examples (20) (Sep) | What is the best real estate website in India? | B | LP hacks, #6, #22, #2 | LP hacks, #6 |
| 29 | 23 Nov | `nri-real-estate-marketing` | how to get nri clients for real estate | nri real estate marketing | How to get NRI clients for real estate? | A | Meta, #19, #22, #28 | #19, Meta |
| 30 | 25 Nov | `luxury-real-estate-marketing` | luxury real estate marketing | luxury real estate brands (70, shared with #12 as a secondary only) | What are the 7 Ps of luxury marketing? What is luxury in real estate? | B | #12, #22, #28, #29 | #12, #22 |

## Deliberately left out

- **real estate agent license (720):** mostly US searches. The India version is covered by post 4.
- **real estate crm (2,400) and follow up boss (210):** CRM vendor searches (docs/SEO.md). Post 13 answers "what is a crm in real estate" instead.
- **villa vs mansion (260), propertyme portal (390), real estate seoul, real estate cpa:** people searching for these aren't our buyers.
- **real estate marketing strategy (320 ×4):** already targeted by `/playbooks`, so post 16 targets "marketing plan" instead.

## Publishing checklist (each post)

1. Write `content/blog/<slug>/post.json` + `content.html` (1,500–2,000 words, 6 images, 7–9 FAQs).
2. Fetch photos: `node scripts/images/fetch-pexels.mjs <id> public/images/people/blog/<file>.jpg 1600 1000`. Record the Pexels IDs in the log below.
3. Add backfill links to the older posts listed in the table.
4. Add the post's row to the keyword map in `docs/SEO.md`.
5. `npm run blog:check`, `npm run build`, then `node scripts/seo/crawl.js http://localhost:3000`.
6. Open a PR. After it merges, ask GSC to index the new URL.

## Photo log (Pexels IDs in use on blog posts)

| Post | Pexels IDs |
|---|---|
| 1 `rera-number-check` | 8303380, 24525165, 4308016, 14043284, 8655746, 18854010 |
| 2 `real-estate-brochure` | 4623113, 7180485, 5582595, 9052461, 190168, 7964170 |
| 3 `real-estate-social-media-marketing` | 29813939, 7415021, 8360497, 15505438, 5902272, 6592690 |
