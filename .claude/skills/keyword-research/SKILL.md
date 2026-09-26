---
name: keyword-research
description: Run Veloxis Global keyword research with free sources (Google autocomplete, Search Console, GA4, competitor sitemaps, Google "People also ask" and related searches, Google Trends, Reddit/Quora titles) plus one cheap DataForSEO volume call. Use when the owner asks for keyword research, new blog/page topics, or to refresh the keyword map in docs/SEO.md.
---

# Veloxis keyword research (free-first)

Veloxis Global is a real-estate-only marketing agency (landing pages, paid ads, WhatsApp/AI automation) for builders, developers and channel partners in Kanpur, Lucknow, Noida and Delhi NCR. Keywords must fit one of those services and a buyer who could pay for them. Students, template hunters, job seekers and home buyers are noise.

Work in `research/kw-<yyyy-mm>/` (untracked). Scripts from the last run live in `research/kw-free-2026-09/` — copy and reuse them.

## Steps

1. **Autocomplete** (`autocomplete.py`): seeds × a–z plus question prefixes, `gl=in`, with a 0.35 s delay (~7 min for 1,100 queries). Also YouTube (`ds=yt`). Free and never blocked so far.
2. **Search Console + GA4** (`gsc_ga4.py`): service account at `C:\Users\mudda\.gsc\service_account.json`, site `sc-domain:veloxisglobal.com`, GA4 property 538243832. Look for pages at position 8–30 (quick wins) and real-estate queries.
3. **Competitors** (`competitors.py`): read robots.txt/sitemaps of the agencies that rank (find them via WebSearch) and count 2–3-word phrases shared by 3+ sites.
4. **Google SERPs via Chrome**: open google.com in the Claude-in-Chrome tab, then `fetch('/search?hl=en&gl=in&q=…')` inside the page and parse with DOMParser. Run it async and store the result on `window` (evaluate calls time out at 45 s), keep a 2.5 s delay, and read the result back in ~900-character slices (tool output truncates at ~1,000 characters). Result hostnames come back redacted, so use DataForSEO SERP if you need the top-10 domains.
5. **Google Trends via Chrome**: on trends.google.com, call `/trends/api/explore` and then `/trends/api/widgetdata/multiline` or `/relatedsearches` with the widget token (strip the `)]}'` prefix). The normal Trends page renders empty for automation.
6. **Reddit/Quora**: reddit.com is blocked in Chrome, WebSearch and plain requests. Use Google `site:reddit.com …` / `site:quora.com …` searches through step 4 and collect the result titles. They show the pain language.
7. **Merge + filter** (`build_candidates.py`), then **one** DataForSEO call to `/v3/keywords_data/google_ads/search_volume/live` (location 2356 India, English, up to 1,000 keywords for $0.09). Check the balance first at `/v3/appendix/user_data` (`noAiMode` output is huge, so grep it for `"balance"`).
8. **Intent check**: for the top candidates, look at who ranks. If the top 10 is software vendors, directories or US sites, mark it "don't target" (as with real estate crm).
9. **Output**: a keyword map (keyword, volume, CPC, competition, trend, intent, target page, new vs existing) and updates proposed for `docs/SEO.md`. Show it to the owner before changing pages.

## Rules
- Never invent volumes. Label every number with its source and date.
- One primary keyword per page, as the keyword map in `docs/SEO.md` requires.
- Say "Meta ads" as well as "Facebook ads": Trends shows "meta ads" overtook "facebook ads" in India in 2025–26.
- City + real estate terms have almost no volume. Don't build city pages unless the data changes.
- Ask the owner before spending more than about $0.20 of DataForSEO credit in one run.
