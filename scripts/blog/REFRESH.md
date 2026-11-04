# Weekly "1% better" refresh (for a scheduled Claude cloud agent)

Once a week, improve the 2 existing posts with the most to gain in Google, then open ONE pull request.
Same hard rules as `scripts/blog/WRITER.md` (no invented numbers, never name the founder, no prices of
ours, never push to main, never merge).

## Steps
1. `git checkout main && git pull`; `npm ci` if needed.
2. `node scripts/seo/gsc-refresh.mjs 5` (needs env `GOOGLE_SA_JSON`). It lists posts with many impressions
   but a low click rate, or a position of 8–20, with their real search queries. Skip any post refreshed in
   the last 21 days (its `updated` date). Pick the top 2.
3. For each post, WebSearch its main query and open the top 3 results: what do they answer that we don't?
   What do AI answers (ChatGPT/Perplexity style) say and cite for the question?
4. Improve, in this order, only what helps:
   - `seoTitle` (≤ 60 chars) and `excerpt` (120–155 chars): lead with the words people actually search (from
     the query list), promise the answer. This is the biggest lever for click rate.
   - First paragraph: a 40–60 word direct answer to the main query, starting with `<p><strong>`.
   - Add a missing section or H2 for a real query the post doesn't answer; make H2s match the question.
   - FAQs: 7–9, replace weak ones with real queries from step 2; answers 40–60 words.
   - Internal links: add links to newer related posts and the matching money page.
   - Remove or source any unsourced number. Fix dead external links.
5. Set `"updated"` to today ONLY if the article body really changed (not for title/meta/link-only edits).
6. Checks: `npm run blog:check`, `npx tsc --noEmit`, `npm run lint`, `npm run build`.
7. Branch `seo/refresh-<YYYY-MM-DD>`, commit "SEO refresh: <slugs>", push, open a PR titled
   "SEO refresh: <post titles>" with a before/after table (title, excerpt, queries targeted, impressions,
   CTR and position at the start, so next week's run can compare). End the body with the Claude Code line.
8. Report: PR link, the 2 posts, what changed, numbers at the start.
