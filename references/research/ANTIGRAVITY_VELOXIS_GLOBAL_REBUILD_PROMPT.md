# Antigravity Prompt: Veloxis Global Website Content Rebuild

Copy this full prompt into Google Antigravity after uploading the context files listed below.

---

## Files To Upload First

Upload these files into the `C:\Projects\veloxis-global` project folder before running the prompt:

1. `VELOXIS_GLOBAL_WEBSITE_COPY.md`
   - Purpose: Complete final website copy for every page and section.
   - Upload location: Project root.

2. `VELOXIS_GLOBAL_REACT_COPY_SNIPPETS.js`
   - Purpose: Paste-ready React copy objects for the current component structure.
   - Upload location: Project root, or `src/content/veloxisCopy.js` if Antigravity creates a content folder.

Optional but useful:

3. `C:\Projects\muddassirali.com\index.html`
   - Purpose: Source of truth for Muddassir Ali's personal brand, positioning, proof points, services, CTA tone, and growth-system language.

4. `C:\Projects\mentorship\MUDDASSIR_ALI_MENTORSHIP_MASTER_BIBLE.md`
   - Purpose: Source of truth for the mentorship ecosystem, founder story, Veloxis standard, audience segments, and AI digital stack.

5. `C:\Projects\mentorship\VELOXIS_GLOBAL_WEBSITE_COPY.md`
   - Same as file 1 if you are uploading from the mentorship project.

6. `C:\Projects\mentorship\VELOXIS_GLOBAL_REACT_COPY_SNIPPETS.js`
   - Same as file 2 if you are uploading from the mentorship project.

---

## Exact Prompt To Paste Into Antigravity

You are editing an existing React/Vite website project named `veloxis-global`.

Your task is to replace the current placeholder/demo website content with the real Veloxis Global business content. Do not rebuild the site from scratch. Preserve the current React/Vite structure, routes, styling system, layout components, animations, and overall visual direction unless a small content-related adjustment is required.

The current website has placeholder/demo copy such as:
- "Aisev"
- "AI Service & Digital Company"
- "Empowering Businesses with Smarter AI Solutions"
- generic AI consulting, generic SaaS pricing, generic project examples, and fake logo labels.

Replace that with the real positioning:

Veloxis Global is a systems-driven growth and automation agency founded by Muddassir Ali. It builds lead generation systems, CRM automation, n8n workflows, WhatsApp follow-up systems, AI-powered funnels, and conversion infrastructure for real estate, healthcare, B2B services, education, and high-ticket service businesses.

Important business positioning:
- Veloxis Global is not a generic AI product company.
- Veloxis Global is not a generic SaaS platform.
- It is a practical growth implementation agency.
- The promise is structured growth: lead flow, CRM routing, automation, reporting, and conversion.
- The tone should be premium, direct, execution-focused, and trustworthy.
- Use "systems-driven growth", "lead generation", "CRM routing", "n8n automation", "WhatsApp follow-up", "AI funnels", "conversion infrastructure", and "qualified sales opportunities" as core language.

Use the uploaded file `VELOXIS_GLOBAL_WEBSITE_COPY.md` as the master source of truth for all page and section copy.

Use the uploaded file `VELOXIS_GLOBAL_REACT_COPY_SNIPPETS.js` as a helpful source for React-ready content arrays and objects.

Apply the copy across these existing files/components:

- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/home/Hero.jsx`
- `src/components/home/Innovation.jsx`
- `src/components/home/Services.jsx`
- `src/components/home/Projects.jsx`
- `src/components/home/Pricing.jsx`
- `src/components/home/FAQ.jsx`
- `src/pages/About.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Projects.jsx`
- `src/pages/Services.jsx`
- Any metadata/title/description in `index.html` if present.

Implementation requirements:

1. Replace every mention of `Aisev` with `Veloxis Global`.

2. Replace generic AI company copy with agency-specific growth-system copy from `VELOXIS_GLOBAL_WEBSITE_COPY.md`.

3. Update the homepage hero:
   - Badge: `Lead Generation & AI Automation Agency`
   - Main message: `We Build Growth Systems That Turn Traffic Into Qualified Sales`
   - Subtitle should explain lead generation, CRM routing, AI, n8n, WhatsApp automation, and structured follow-up.
   - Primary CTA: `Book a Strategy Call`
   - Secondary CTA: `See Our Systems`
   - Trust labels: `Meta Ads`, `n8n`, `HubSpot`, `WhatsApp`, `Google Sheets`, `AI Funnels`

4. Update the services section to exactly these four services:
   - Lead Generation Systems
   - CRM & Pipeline Automation
   - n8n & WhatsApp Automation
   - AI Websites & Funnels

5. Update the projects section to use practical proof-of-work examples:
   - Veloxis Prime System
   - MediFlow Automations
   - GrowthEngine AI
   - Mentorship Hub V2

6. Update the pricing section so it does not look like generic SaaS pricing:
   - Use `Engagement Models`
   - Use `Growth Audit` as the free strategy-call entry point.
   - Use `Implementation Sprint` as the custom project scope.
   - Use `Scale Partnership` for ongoing work.
   - Remove SaaS-style monthly request limits and fake AI product access.

7. Update the FAQ section using the exact FAQ content from the copy file.

8. Update the About page:
   - Explain that Veloxis Global solves system problems, not just traffic problems.
   - Include Muddassir Ali as founder.
   - Include proof points:
     - `47+ inquiries generated in 27 days`
     - `17+ batches trained by the founder`
     - `Multi-industry execution`
     - `24/7 automation logic`

9. Update the Contact page:
   - Phone/WhatsApp: `+91 88876 20727`
   - Email: `support@veloxisglobal.com`
   - Location: `Jaipur, Rajasthan, India - serving clients globally`
   - CTA: `Book a Strategy Call`
   - Message placeholder: `Tell us about your business, current lead flow, and biggest growth challenge`

10. Update the Footer:
   - Brand: `VELOXIS GLOBAL`
   - Description: `Building lead generation, CRM automation, AI funnels, and conversion systems for businesses that want structured growth instead of random campaigns.`
   - Resource links should be:
     - Growth Audit
     - AI Automation
     - Lead Generation
     - Mentorship

11. Add a mentorship bridge CTA somewhere appropriate only if it fits naturally:
   - Title: `Want to Learn the Systems We Build?`
   - Body: `Muddassir Ali Mentorship is built for students, freelancers, job holders, and operators who want to master AI web development, Meta Ads, high-ticket sales, and automation.`
   - CTA: `Join the Mentorship`
   - URL: `https://mentorship.muddassirali.com`

12. Keep the current visual style, glass cards, dark premium look, responsive layout, and route structure.

13. Do not use weird encoding characters like `â€“`, `â€™`, `â€¢`, or `Â©`. Replace them with clean ASCII equivalents:
   - Use `-` instead of broken dashes.
   - Use `'` for apostrophes.
   - Use `/` or `-` for breadcrumbs.
   - Use `Copyright` instead of broken copyright symbols.

14. Keep image URLs working. You may change project images to relevant Unsplash business/real-estate/healthcare/education images if needed, but do not add broken assets.

15. Make the site fully responsive after copy changes. Long text must not overflow buttons, cards, tabs, or mobile layouts.

16. After changes, run:
   - `npm run build`

17. Fix any build errors.

18. Final output should include:
   - List of files changed.
   - Confirmation that all demo content was replaced.
   - Confirmation that build passed.

Do not ask me for more business information. Use the uploaded copy pack as the final source of truth.

