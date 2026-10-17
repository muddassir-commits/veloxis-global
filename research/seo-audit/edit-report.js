const edit = require('./edit');

edit('research/seo-audit/seo-report.html', [
  [`<p class="lede">A full audit and rebuild of on-page, technical and content SEO for the real estate site. All changes are on the <code>feat/seo-overhaul</code> branch in pull request #4, not live until merged.</p>`,
   `<p class="lede">A full audit and rebuild of on-page, technical and content SEO for the real estate site. <b>Live since 23 September 2026</b> (pull request #4 merged), and verified on the live site.</p>`],
  [`        <tr><td>Conversion SEO</td>`, `        <tr><td>FAQs</td><td><span class="pill warn">1–3 per page, some hidden</span></td><td><span class="pill good">7–8 visible on all 25 pages</span></td><td>Every answer in the HTML and open; FAQ schema matches the page exactly</td></tr>
        <tr><td>Conversion SEO</td>`],
  [`      <div class="card"><span class="k">Build</span>`, `      <div class="card"><span class="k">Live site (after merge)</span><span class="v">25 URLs, 0 problems</span><span class="muted">All pages 7–8 visible FAQs; 46 redirects pass; apex → www 308</span></div>
      <div class="card"><span class="k">Search Console</span><span class="v">Landing pages URL indexed</span><span class="muted">Sitemap resubmitted; new pages pending discovery</span></div>
      <div class="card"><span class="k">Build</span>`],
  [`        <tr><td><span class="pill bad">Now</span></td><td>Review the Vercel preview, then merge PR #4</td><td>Nothing is live until merged</td></tr>
        <tr><td><span class="pill bad">Now</span></td><td>After merge: request indexing in Search Console for the 3 service pages, /channel-partners, /playbooks and the 3 new guides</td><td>Speeds up discovery of new pages</td></tr>`,
   `        <tr><td><span class="pill bad">Now</span></td><td>Request indexing in Search Console for the homepage, /services/paid-ads, /services/ai-automation, /channel-partners, /playbooks and the 3 new guides</td><td>Speeds up discovery; Google allows about 10 requests a day</td></tr>
        <tr><td><span class="pill bad">Now</span></td><td>Update the Privacy Policy (ideally with a lawyer) to cover Meta Pixel, Microsoft Clarity, Supabase lead storage, email notifications and the current service cities</td><td>The policy doesn’t describe all the data processing the site does</td></tr>`],
]);
