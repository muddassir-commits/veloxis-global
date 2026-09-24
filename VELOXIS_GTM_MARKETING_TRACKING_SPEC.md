# Veloxis Global --- Tracking, GTM & Marketing Measurement Specification

**Project:** Veloxis Global\
**Website:** https://www.veloxisglobal.com/ (canonical host is `www`; the apex redirects to it)\
**Stack:** Next.js 14 (App Router), hosted on Vercel\
**Repository:** `muddassir-commits/veloxis-global`\
**Primary Google account:** `muddassir@veloxisglobal.com`\
**Last updated:** 24 September 2026, after a full repository audit\
**Document purpose:** Single source of truth for Claude Code /
Antigravity implementation of GTM, marketing pixels, conversion
tracking, consent, and related measurement.

> Status (24 Sep 2026): the website is finished and live. GA4, Meta Pixel
> and Clarity load directly from code, gated by cookie consent. Events are
> de-duplicated and also pushed to the GTM dataLayer. GA4 is configured
> (key events, custom dimensions, 14-month retention) and linked to Google
> Ads 687-474-7833. GTM is installed and intentionally empty. Section 21
> lists what is left.

------------------------------------------------------------------------

## 1. IMPORTANT OPERATING RULES

This document is for **Claude Code / Antigravity implementation work**.

### Do not change these without explicit approval

-   Existing GA4 implementation and Measurement ID `G-LC9XWNSGCF`.
-   Existing custom analytics events (section 4).
-   Existing cookie/consent implementation (section 5).
-   Existing SEO implementation (see `docs/SEO.md`).
-   Existing website UI/branding/content unless the task specifically
    requires it.
-   Do not create duplicate Google Analytics tracking.
-   Do not add a second GA4/GTM installation.
-   Do not create a new Meta Pixel. One already exists (section 8).
-   Do not add Meta Pixel or Clarity tags in GTM while they are still
    installed directly in code (section 12A).
-   Every marketing/advertising tag in GTM must require `ad_storage`
    consent (section 5).
-   Do not publish GTM changes without testing first.

### Core principle

GTM is being added as a **marketing-tag management layer**, not as a
reason to rebuild working analytics.

The website already has a working direct GA4 implementation. Keep it
intact unless a deliberate future migration is approved.

------------------------------------------------------------------------

# 2. CURRENT GTM STATUS

## GTM Account

-   Account: `Veloxis Global`

## GTM Container

-   Container: `www.veloxisglobal.com`
-   Container ID: `GTM-5LS7XH76`
-   Platform: Web
-   Published version: **1, with 0 tags** (verified 24 Sep 2026 by
    reading the public `gtm.js` file: no GA4, Google Ads, Custom HTML,
    Meta, Clarity or LinkedIn tags)
-   Workspace: empty

## Installation (current)

GTM is loaded from:

`components/analytics/ConsentScripts.tsx`

``` tsx
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
...
<GoogleTagManager gtmId="GTM-5LS7XH76" />
```

`ConsentScripts` is rendered from `app/layout.tsx`.

**GTM loads only after the visitor allows analytics OR marketing
cookies.** If a visitor rejects everything or has not chosen yet, GTM does
not load at all (section 5).

> History: GTM was first added directly in `app/layout.tsx` (always
> loaded). On 23 Sep 2026 (PR #7) it moved into `ConsentScripts` so that
> nothing loads before consent. The ID did not change.

### Production verification

-   Google Tag Assistant detected `GTM-5LS7XH76` and `G-LC9XWNSGCF` on
    the live site. Since PR #7 both appear only after accepting cookies.
-   Verified 23 Sep 2026 in a browser: before consent there are no
    requests to googletagmanager.com, google-analytics.com,
    facebook.net or clarity.ms.

------------------------------------------------------------------------

# 3. CURRENT GA4 ARCHITECTURE --- DO NOT DUPLICATE

## GA4 Account

-   Account: `Veloxis Global`
-   Account ID: `409090619`

## GA4 Property

-   Property: `Veloxis Global`
-   Property ID: `538243832`

## Web stream

-   Stream name: `veloxis-global website`
-   Stream ID: `14902766412`
-   Measurement ID: `G-LC9XWNSGCF`
-   Website: `https://veloxisglobal.com`\
    (The live site uses `https://www.veloxisglobal.com`. Data collection
    is not affected; updating the stream URL to `www` is optional
    housekeeping.)

## Existing implementation

``` tsx
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-LC9XWNSGCF'} />
```

Location: `components/analytics/ConsentScripts.tsx`\
Loads only with **analytics** consent.

Do not replace this implementation merely because GTM has been
installed. Do not add a GA4 Configuration / Google tag for
`G-LC9XWNSGCF` inside GTM: every GA4 hit would be counted twice.

Google's documentation states that when Google Ads and Google Analytics
are both used, the Google tag should only be set up in one place; the
other product can be added as a destination. Avoid duplicate Google tags
without a deliberate migration plan (section 10).

------------------------------------------------------------------------

# 4. EXISTING CUSTOM ANALYTICS EVENTS

All events go through `trackEvent()` in `lib/analytics.ts`. Each call:

1.  sends a GA4 event: `window.gtag('event', name, params)`
2.  pushes the same event for GTM: `dataLayer.push({ event: name, ...params })`
    (no GA4 hit is created by this push)
3.  sends a Meta Pixel event, but only for the mapped events below and
    only if the pixel is loaded (marketing consent)

| GA4 / dataLayer event | Parameters | Fired from | When | Meta Pixel |
|---|---|---|---|---|
| `form_submit` | `form_name`, `source_page` | `ContactForm.tsx` via `events.leadSubmit` | Contact form API returns success | --- |
| `generate_lead` | `form_name`, `source_page` | same call as `form_submit` | Contact form success only | `Lead` |
| `newsletter_signup` | `source_page` | `NewsletterForm.tsx` | Newsletter API returns success | `NewsletterSignup` (custom) |
| `phone_click` | `source_page` | `AnalyticsTracker.tsx` | Click on a `tel:` link | `Contact` (`contact_method: phone`) |
| `whatsapp_click` | `source_page` | `AnalyticsTracker.tsx` | Click on a `wa.me` / `api.whatsapp.com` link | `Contact` (`contact_method: whatsapp`) |
| `booking_click` | `source_page` | `AnalyticsTracker.tsx` | Click on a `calendly.com` link | `BookingClick` (custom) |
| `cta_click` | `location`, `cta` | `AnalyticsTracker.tsx` | Click on any `<Button>` (marked `data-cta`) or any link to `/contact` | --- |
| `scroll_depth` | `percent` (25/50/75/100) | `lib/useScrollDepth.ts` | Once per threshold per page | --- |
| Meta `PageView` | --- | Pixel base code + `AnalyticsTracker.tsx` | Page load, then each client-side route change | `PageView` |

**One click = one event.** A single site-wide click listener
(`AnalyticsTracker.tsx`, capture phase) picks the event in this order:
phone, then WhatsApp, then Calendly, then CTA. `Button.tsx` no longer
tracks by itself; it only adds `data-cta`. Buttons that are not marketing
CTAs pass `track={false}` (the cookie banner buttons do).

No personal data (name, phone, email, message) is sent in any event.

## GA4 configuration (applied 24 Sep 2026 via Admin API)

-   Key events: `generate_lead` (primary lead), `whatsapp_click`,
    `phone_click`, `booking_click`. (GA4 defaults `purchase`,
    `qualify_lead`, `close_convert_lead` also exist; unused.)
-   Event-scoped custom dimensions: `source_page`, `form_name`, `cta`,
    `location`, `percent`.
-   Enhanced Measurement: **form interactions turned off** (it sent its own
    `form_start` / `form_submit` and mixed the counts). Scrolls, outbound
    clicks, site search, video, file downloads and page changes stay on.
-   Event data retention: 14 months (was 2 months).
-   Stream URL: `https://www.veloxisglobal.com`.
-   Google Signals: off.
-   Linked to Google Ads `687-474-7833` (section 9).

## Resolved issues (branch `fix/tracking-events`, 24 Sep 2026)

1.  `cta_click` fired twice for `<Button href="/contact">`. Fixed with a
    single listener.
2.  Buttons with their own `onClick` (for example the mobile menu CTA) lost
    tracking because `{...props}` overrode the handler. Fixed: tracking no
    longer depends on `onClick`.
3.  Newsletter signups counted as leads (`generate_lead` + Meta `Lead`).
    Fixed: they now send `newsletter_signup`.
4.  `form_submit` clashed with GA4 Enhanced Measurement. Fixed: form
    interactions turned off.
5.  GTM could not see the events. Fixed: dataLayer bridge.

## Remaining notes

-   Events fired before the visitor chooses are queued. If the visitor
    then accepts on the same page, GA4 sends them. If they reject, nothing
    is sent.
-   GA4 data before 24 Sep 2026 still contains the old double `cta_click`
    counts and newsletter "leads".

## Existing analytics files

-   `app/layout.tsx` --- Consent Mode default script, renders
    `ConsentScripts`, `AnalyticsTracker`, `CookieBanner`
-   `components/analytics/ConsentScripts.tsx` --- loads GTM, GA4,
    Clarity, Meta Pixel according to consent
-   `components/analytics/AnalyticsTracker.tsx` --- global click
    listener, Meta route-change `PageView`, scroll depth
-   `lib/analytics.ts` --- `trackEvent()` and the `events` helpers
-   `lib/useScrollDepth.ts`
-   `lib/consent.ts` --- consent read/save, Google consent mapping,
    events
-   `components/layout/CookieBanner.tsx` --- banner UI
-   `components/layout/Footer.tsx` --- "Cookie settings" link
-   `components/ui/Button.tsx` --- adds `data-cta` (clicks tracked by AnalyticsTracker)
-   `components/forms/ContactForm.tsx`, `components/forms/NewsletterForm.tsx`

Do not recreate these events in GTM unless there is a specific approved
migration/integration requirement.

------------------------------------------------------------------------

# 5. EXISTING CONSENT IMPLEMENTATION

Implemented 23 Sep 2026 (PR #7). It follows India's DPDP Act approach:
nothing non-essential runs before the visitor chooses.

## How it works

1.  **Consent Mode v2 defaults** --- an inline `beforeInteractive` script
    in `app/layout.tsx` sets everything to denied:

    ``` js
    gtag('consent', 'default', {
      ad_storage: 'denied', ad_user_data: 'denied',
      ad_personalization: 'denied', analytics_storage: 'denied'
    });
    ```

    If a choice is already stored, it immediately sends
    `gtag('consent', 'update', …)` with the stored values.

2.  **Banner** (`components/layout/CookieBanner.tsx`) --- buttons:
    **Reject all**, **Manage preferences**, **Accept all**. Manage
    preferences shows two switches:

    | Category | Tools | Google consent keys |
    |---|---|---|
    | Essential (always on) | Stores the cookie choice | --- |
    | `analytics` | GA4, Microsoft Clarity | `analytics_storage` |
    | `marketing` | Meta Pixel, Google ads measurement | `ad_storage`, `ad_user_data`, `ad_personalization` |

3.  **Storage** --- `localStorage['cookie-consent-v2'] =
    {analytics, marketing, at}`. The old key `cookie-consent =
    'accepted'` is migrated as "all granted".

4.  **Loading** (`ConsentScripts.tsx`):

    | Consent | What loads |
    |---|---|
    | None / Reject all | Nothing |
    | analytics only | GTM, GA4, Clarity |
    | marketing only | GTM, Meta Pixel |
    | both | GTM, GA4, Clarity, Meta Pixel |

5.  **Withdrawal** --- the footer "Cookie settings" link reopens the
    banner. Widening consent applies immediately. Withdrawing applies from
    the next page load.

6.  **Privacy policy** (`/privacy-policy`) lists every tool and describes
    this behaviour. Grievance officer: Muddassir Ali,
    `info@veloxisglobal.com`. If a new tool is added, the policy's
    provider table must be updated too.

## Rules for GTM tags

-   GTM loads with **analytics-only** consent. Any marketing/advertising
    tag in GTM (Meta, Google Ads, LinkedIn, remarketing) **must** use
    GTM's consent settings: *Require additional consent for tag to
    fire* → `ad_storage`. Otherwise it would fire for visitors who
    refused marketing.
-   Analytics-type tags (for example Hotjar) must require
    `analytics_storage`.
-   Do not replace the existing cookie banner or add a second consent
    mechanism.

------------------------------------------------------------------------

# 6. GTM'S ROLE FOR VELOXIS

## Current architecture (as built)

``` text
VELOXIS WEBSITE  (everything below loads only after consent)
       |
       +---- GA4 (direct, @next/third-parties)      [analytics]
       |       +---- Custom events via gtag() (section 4)
       |
       +---- Microsoft Clarity (direct)             [analytics]
       |
       +---- Meta Pixel (direct): PageView + Lead   [marketing]
       |
       +---- Google Tag Manager (empty, v1)         [analytics OR marketing]
```

## Target architecture (decided 24 Sep 2026)

``` text
VELOXIS WEBSITE
       |
       +---- Direct GA4 + existing events (unchanged)
       |       +---- Key events imported into Google Ads (section 9)
       |
       +---- Meta Pixel + Clarity stay in code (section 12A)
       |
       +---- dataLayer bridge: every event is pushed as {event: ...}
       |
       +---- Google Tag Manager (empty until a tag is really needed)
               +---- Google Ads conversion tags (only if GA4 import is not enough)
               +---- LinkedIn Insight Tag if required
               +---- Other approved marketing tags
```

GTM is the controlled layer for **future** marketing tags. Nothing is
added to it just because it exists.

------------------------------------------------------------------------

# 7. BUSINESS TRACKING MODEL

Veloxis is a real estate marketing agency serving builders, developers
and channel partners in Kanpur, Lucknow, Noida and Delhi NCR.

Core website funnel:

``` text
Traffic
   ↓
Landing page / website
   ↓
CTA interaction
   ↓
Lead form / contact (or WhatsApp / phone / Calendly)
   ↓
Qualified lead
   ↓
WhatsApp / phone follow-up
   ↓
Discovery call / audit
   ↓
Client
```

Tracking should eventually help answer:

-   Where did the visitor come from?
-   Which campaign generated the visitor?
-   Which landing page generated the lead?
-   Which CTA was used?
-   Did the user submit the lead form?
-   Did the user click WhatsApp?
-   Did the user click the phone number?
-   Did the user book a call on Calendly?
-   Which advertising platform generated the lead?
-   Which conversions should be sent back to Google Ads?
-   Which conversions should be sent to Meta?
-   Which traffic sources produce qualified business outcomes?

## Lead touchpoints on the site

| Touchpoint | Where | Current event |
|---|---|---|
| Contact form (name, phone, service, optional message) | `/contact` and other pages using `ContactForm` | `form_submit` + `generate_lead` + Meta `Lead` |
| Newsletter (email) | Footer | `newsletter_signup` (not a lead) |
| WhatsApp | Floating widget, CTAs, footer, navbar | `whatsapp_click` |
| Phone | Sticky mobile bar, footer, navbar, contact page | `phone_click` |
| Calendly (`calendly.com/veloxis-global/30min`) | `/contact`, `/about` | `booking_click` |

------------------------------------------------------------------------

# 8. PRIORITY MARKETING INTEGRATIONS

## A. Meta Pixel

### Current status

-   **A Veloxis Meta Pixel already exists and is installed in code.**
-   Pixel ID: `1484475786790290` (default in `ConsentScripts.tsx`;
    `NEXT_PUBLIC_META_PIXEL_ID` can override it in Vercel).
-   Fires `PageView`, `Lead`, `Contact`, `BookingClick` and
    `NewsletterSignup` (section 4).
-   Loads only with **marketing** consent.

### Verified via Marketing API (24 Sep 2026)

-   Name: **Veloxis Global Website** (pixel and dataset share ID
    `1484475786790290`)
-   Owner: Business portfolio **Veloxis Global** (`901276766034554`)
-   Connected ad account: **Veloxis AD/AC** (`act_1613619313181364`,
    INR, Asia/Calcutta, active)
-   Receiving events: last 30 days **PageView 362, Lead 4**; last fired
    23 Sep 2026
-   A second dataset exists, **WhatsApp Marketing Message Event Sharing**
    (`1170653814984015`), created by Meta for WhatsApp. Not used by the
    website.
-   A "Conversions API System User" (`61590283863137`) exists with
    partial access to the pixel. No server-side CAPI code exists in this
    repository. Keep this user; check before deleting.
-   Still open: whether any other system (partner integration) sends CAPI
    events to this dataset.

### Rules

-   **Do not create a second pixel.** Use `1484475786790290`.
-   Do not add a GTM Meta base tag while the pixel is installed in
    code (section 12A).

### Event mapping (live after branch `fix/tracking-events` is merged)

| Website action | Meta event |
|---|---|
| Contact form success | `Lead` |
| Newsletter signup | `NewsletterSignup` (custom) |
| WhatsApp click | `Contact` (`contact_method: whatsapp`) |
| Phone click | `Contact` (`contact_method: phone`) |
| Calendly click | `BookingClick` (custom; a click is not a confirmed booking) |

In Meta, use `Lead` as the optimisation event for lead campaigns.
`Contact` can be a secondary custom conversion.

------------------------------------------------------------------------

# 9. GOOGLE ADS TRACKING

**Current status (24 Sep 2026):**

-   Account: **687-474-7833** ("Google Ads account"), owned by the login
    `theofficialmuddassir@gmail.com`. It is the only Google Ads account on
    that login. Not a manager account. No spend yet.
-   Linked to GA4 property `538243832` (link created 24 Sep 2026;
    personalised advertising on, auto-tagging on, Ads users can access GA4
    features). Google says the link takes up to 24 hours to activate.
-   Conversion actions: **none yet**. Next step: import the GA4 key events
    (Goals, then Conversions, then + New conversion action, then Import,
    then Google Analytics 4 properties, then Web). Planned:
    `generate_lead` = **Primary**; `whatsapp_click`, `phone_click`,
    `booking_click` = **Secondary**.
-   No `AW-` ID, conversion tag, Conversion Linker or remarketing tag in the
    code or in GTM. None is needed with the GA4-import approach.
-   Google Ads API: enabled in Cloud project `claude-code-gws-505106`. API
    access still needs a **developer token**, which only a manager (MCC)
    account can request (API Center), plus Google's Basic Access approval.

Google Ads tracking should only be implemented once the Google Ads
conversion actions are actually created.

## Required information

For each Google Ads conversion action:

-   Conversion ID
-   Conversion Label
-   Optional conversion value
-   Optional currency (INR)
-   Optional transaction ID if applicable

## Likely conversion actions for Veloxis

1.  Lead form submission (contact form only, not newsletter) ---
    likely **primary**
2.  WhatsApp click --- likely secondary
3.  Phone click --- likely secondary
4.  Calendly booking click --- likely secondary
5.  Other qualified lead action

Do not assume all of these should be primary conversions. The business
owner decides which actions represent real business value.

------------------------------------------------------------------------

# 10. GOOGLE ADS GOOGLE TAG / CONVERSION LINKER

Before Google Ads conversion tracking is deployed through GTM, inspect
the current Google setup. Google's setup expects:

-   Google tag
-   Conversion Linker
-   Google Ads conversion action

GA4 already provides a Google tag (`G-LC9XWNSGCF`) directly from code.
Do not add a second Google tag for the same ID.

### Decision required before implementation

Check:

1.  Google Ads account (does one exist, which login owns it).
2.  Existing Google tag and whether Google Ads is a destination on it.
3.  Whether Google Ads is linked to GA4 property `538243832`.
4.  Existing conversion actions.
5.  Existing remarketing configuration.

**Decision (24 Sep 2026): Option B.** Google Ads imports GA4 key events.
Reasons: no extra tags, no second Google tag, consent handled by the
existing Consent Mode setup, no duplicate risk. Revisit Option A only if
enhanced conversions or faster, more precise attribution are needed.

Options considered:

-   **Option A:** Google Ads conversion + Conversion Linker tags in GTM
    (both require `ad_storage` consent).
-   **Option B:** Import GA4 key events (`generate_lead`) into Google
    Ads. No extra tags, but less precise.

------------------------------------------------------------------------

# 11. ENHANCED CONVERSIONS

Enhanced Conversions may be considered once lead conversion tracking is
operational.

## Facts for Veloxis

-   The contact form collects **name, phone, service and an optional
    message**. It does **not** collect email. Phone would be the main
    matching field.
-   The newsletter form collects **email only**.
-   Form data is stored in Supabase (Mumbai region) and emailed to the
    owner. It is not currently exposed to the browser after submit.

## Do not implement automatically

Before enabling:

1.  Confirm which fields to use.
2.  Confirm where the data is available at conversion time.
3.  Confirm consent handling (requires `ad_user_data` granted).
4.  Confirm Google Ads customer-data policy requirements.
5.  Update the privacy policy.
6.  Confirm the implementation with the business owner.

Do not expose or log customer data unnecessarily.

------------------------------------------------------------------------

# 12. EXISTING WEBSITE EVENTS → GTM

Do not duplicate existing events simply because GTM exists.

## Bridge (implemented 24 Sep 2026)

`trackEvent()` in `lib/analytics.ts` pushes every event as:

``` ts
window.dataLayer?.push({ event: name, ...params });
```

GTM Custom Event triggers can use the exact names in section 4
(`generate_lead`, `whatsapp_click`, `phone_click`, `booking_click`,
`newsletter_signup`, `cta_click`, `scroll_depth`). Parameters are
available as Data Layer Variables (`source_page`, `form_name`, `cta`,
`location`, `percent`). The push does not create a GA4 hit.

Flow:

``` text
Website action
        ↓
trackEvent() → gtag (GA4)  +  dataLayer.push (GTM)  +  fbq (Meta, mapped events)
        ↓
GTM trigger (future)
        ↓
Marketing tag (with ad_storage consent check)
```

Avoid:

``` text
Existing website event
        ↓
New duplicate GTM event
        ↓
Duplicate GA4 event
```

## 12A. Direct installs vs GTM --- decided

**Decision (24 Sep 2026): Meta Pixel and Clarity stay in code.** They are
already consent-gated and working, and moving them would risk double
counting during the switch. Do not add Meta or Clarity tags in GTM.

If this is ever reversed, remove them from `ConsentScripts.tsx` and
`lib/analytics.ts` in the same release that publishes the GTM tags.

------------------------------------------------------------------------

# 13. RECOMMENDED GTM NAMING CONVENTION

### Tags

``` text
META - Base Pixel
META - Lead
META - Contact
GOOGLE ADS - Conversion Linker
GOOGLE ADS - Conversion - Lead
GOOGLE ADS - Conversion - WhatsApp
GOOGLE ADS - Conversion - Phone
GOOGLE ADS - Conversion - Booking
GOOGLE ADS - Remarketing
LINKEDIN - Insight Tag
CLARITY - Base
```

### Triggers

``` text
TRG - All Pages
TRG - Event - Generate Lead
TRG - Event - WhatsApp Click
TRG - Event - Phone Click
TRG - Event - Booking Click
TRG - Event - Form Submit
```

Custom Event trigger names must exactly match the event names in
section 4 (for example `generate_lead`, `whatsapp_click`).

### Variables

``` text
VAR - GA4 Measurement ID
VAR - Meta Pixel ID            (1484475786790290)
VAR - Google Ads Conversion ID
VAR - Google Ads Conversion Label
VAR - Event Name
VAR - Source Page              (Data Layer Variable: source_page)
VAR - Form Name                (Data Layer Variable: form_name)
```

Use a consistent naming system instead of generic names such as `Tag 1`,
`Trigger 1`, etc.

------------------------------------------------------------------------

# 14. GTM WORKFLOW FOR EVERY NEW TAG

``` text
1. Define business purpose
        ↓
2. Identify platform
        ↓
3. Confirm existing implementation (code AND GTM)
        ↓
4. Confirm ID / account / conversion action
        ↓
5. Create tag
        ↓
6. Create/select trigger
        ↓
7. Configure consent (ad_storage for marketing, analytics_storage for analytics)
        ↓
8. Save
        ↓
9. Preview (accept cookies on the site first, or GTM will not load)
        ↓
10. Test real website action
        ↓
11. Confirm tag fired
        ↓
12. Confirm event/hit
        ↓
13. Check destination platform
        ↓
14. Test again with marketing cookies rejected: marketing tags must NOT fire
        ↓
15. Fix issues
        ↓
16. Publish
        ↓
17. Record version (section 17)
```

------------------------------------------------------------------------

# 15. PREVIEW / DEBUG

GTM Preview mode tests the current workspace before publishing.

Important:

-   **GTM loads only after cookie consent.** In Preview, click "Accept
    all" (or the relevant category) on the site banner first. To reset,
    clear `localStorage` key `cookie-consent-v2` or use "Cookie settings"
    in the footer.
-   If the container has no tags, Preview shows no tag activity.

Test:

-   Page load
-   Contact form submission (success)
-   Newsletter signup
-   WhatsApp click
-   Phone click
-   Calendly click
-   Relevant CTA clicks
-   Each of the above with marketing consent **rejected**

For every event, check:

-   Event
-   Tags fired
-   Tags not fired
-   Consent state
-   Variables
-   Data Layer
-   API calls / hits where applicable

------------------------------------------------------------------------

# 16. PUBLISHING

Never publish without testing.

``` text
Submit
→ Publish and Create Version
→ Version Name
→ Version Description
→ Review changes
→ Publish
```

Suggested version naming (v1 is the current empty container):

``` text
v2 - Meta Pixel Base (only if migrated from code)
v3 - Meta Contact / Schedule Events
v4 - Google Ads Conversion Linker + Lead Conversion
v5 - Google Ads Secondary Conversions
v6 - Google Ads Remarketing
```

Descriptions should explain what was added and why.

------------------------------------------------------------------------

# 17. VERSION / CHANGE CONTROL

Before every publish:

-   Check Workspace Changes.
-   Confirm only intended tags/triggers/variables changed.
-   Ensure GA4 was not unintentionally modified.
-   Ensure no duplicate tag exists (in GTM or in code).
-   Ensure consent behaviour is correct.
-   Preview.
-   Test.
-   Publish.

After publishing, add a row here:

| Version | Date | What changed | Platform IDs |
|---|---|---|---|
| 1 | before 24 Sep 2026 | Empty container published | GTM-5LS7XH76 |

------------------------------------------------------------------------

# 18. DO NOT CREATE THESE YET

Until the required accounts/IDs and decisions are confirmed:

-   Do not create a new Meta Pixel (one exists: `1484475786790290`).
-   Do not add a Meta or Clarity tag in GTM while they run from code.
-   Do not create a GA4 tag in GTM.
-   Do not create Google Ads conversion tags without an actual
    Conversion ID + Label.
-   Do not create random Custom HTML tracking scripts.
-   Do not add third-party scripts just because they are available.
-   Do not replace the current consent banner.
-   Do not move existing GA4 events into GTM without a migration plan.

------------------------------------------------------------------------

# 19. CURRENT TECHNICAL CHECKLIST

## Completed

-   [x] GTM account and web container created
-   [x] GTM container installed in Next.js
-   [x] Production website detects GTM (after consent)
-   [x] Existing GA4 retained, Measurement ID confirmed
-   [x] Existing analytics events documented (section 4)
-   [x] GTM Preview connection tested
-   [x] Empty GTM container confirmed (published v1, 0 tags, 24 Sep 2026)
-   [x] Consent Mode v2 defaults (denied) implemented
-   [x] Consent-gated loading of GTM, GA4, Clarity, Meta Pixel (PR #7)
-   [x] Cookie banner with Reject / Manage / Accept + footer Cookie settings
-   [x] Privacy policy lists all tools (DPDP-oriented)
-   [x] Existing Meta Pixel found in code (`1484475786790290`)
-   [x] Repository audit against this spec (24 Sep 2026)
-   [x] API access for Claude: GTM (Admin), GA4 (Editor) via service
    account `claude-gws@claude-code-gws-505106.iam.gserviceaccount.com`
    (Cloud project `claude-code-gws-505106`, owned by
    theofficialmuddassir@gmail.com); Meta via system user
    `claude-tracking` (Admin; pixel, dataset, ad account, app assigned)

## Completed 24 Sep 2026

-   [x] Duplicate `cta_click` fixed; one click = one event
-   [x] Newsletter has its own `newsletter_signup` event (no longer a lead)
-   [x] `form_submit` collision fixed (GA4 form interactions off)
-   [x] dataLayer bridge in `trackEvent()`
-   [x] Meta `Contact` / `BookingClick` / `NewsletterSignup` events
-   [x] Decision: Meta Pixel and Clarity stay in code (12A)
-   [x] GA4 key events, custom dimensions, 14-month retention, www stream URL
-   [x] Google Ads account identified (687-474-7833) and linked to GA4
-   [x] Google tag architecture decided: Option B (GA4 import)

## Pending --- owner (manual)

-   [ ] Google Ads: import GA4 key events as conversions (after the link
    activates, within 24 h); `generate_lead` Primary, others Secondary
-   [ ] Google Ads: billing / payment method before running any campaign
-   [ ] Google Ads API (optional): create a manager account, link
    687-474-7833, request a developer token
-   [ ] Meta Events Manager: check the new events arrive; use `Lead` for
    lead campaigns; optionally a custom conversion for `Contact`
-   [ ] Meta: verify domain `veloxisglobal.com` if not already verified
-   [ ] Decide whether a completed Calendly booking should become a real
    conversion (needs a Calendly redirect or webhook)

## Pending --- later

-   [ ] Remarketing audiences (GA4 audiences shared to Google Ads)
-   [ ] Enhanced conversions (section 11)
-   [ ] LinkedIn Insight Tag if LinkedIn ads are planned
-   [ ] Record every GTM publish in section 17

------------------------------------------------------------------------

# 20. CLAUDE CODE / ANTIGRAVITY INSTRUCTIONS

When asked to implement a GTM/marketing tracking task:

### First inspect

-   `app/layout.tsx` (Consent Mode default script)
-   `components/analytics/ConsentScripts.tsx` (GTM, GA4, Clarity, Meta)
-   `lib/consent.ts`
-   `lib/analytics.ts`
-   `lib/useScrollDepth.ts`
-   `components/analytics/AnalyticsTracker.tsx`
-   `components/layout/CookieBanner.tsx`
-   `components/ui/Button.tsx`
-   `components/forms/ContactForm.tsx`, `NewsletterForm.tsx`
-   WhatsApp links (`data/site.ts` `whatsappLink`, `WhatsAppWidget.tsx`)
-   Phone links (`tel:` in Navbar, Footer, StickyMobileBar, contact page)
-   Booking flow (`data/site.ts` `booking` → Calendly)
-   `dataLayer` usage
-   Environment variables: `NEXT_PUBLIC_GA_MEASUREMENT_ID`,
    `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_CLARITY_ID`
    (GTM ID is hard-coded in `ConsentScripts.tsx`)
-   The published GTM container (`https://www.googletagmanager.com/gtm.js?id=GTM-5LS7XH76`)

### Before modifying code

Report:

1.  What already exists.
2.  What needs to be added.
3.  Whether the change can cause duplicate tracking.
4.  Which files will change.
5.  Whether a GTM configuration change is also required.
6.  Whether the privacy policy needs updating.

### After modifying code

Verify:

-   Build passes.
-   No existing GA4 code was removed.
-   No duplicate GA4 implementation was introduced.
-   GTM ID remains `GTM-5LS7XH76`.
-   GA4 ID remains `G-LC9XWNSGCF`.
-   Consent behaviour remains intact: nothing loads before consent;
    marketing tools do not load with analytics-only consent.
-   Relevant events still fire.
-   No secret/API key was exposed.

Work on a branch, open a PR with a Vercel preview, and merge only with
the owner's explicit approval.

------------------------------------------------------------------------

# 21. CURRENT NEXT ACTIONS (in order)

**GTM stays empty for now. No tag is needed yet.**

1.  **After 24 h, import conversions in Google Ads** (owner, or Claude via
    browser): `generate_lead` Primary; `whatsapp_click`, `phone_click`,
    `booking_click` Secondary.
2.  **Meta Events Manager:** confirm `Lead`, `Contact`, `BookingClick` and
    `NewsletterSignup` arrive (Test events tab); use `Lead` for lead
    campaigns.
3.  **Before the first campaign:** Google Ads billing, Meta domain
    verification, choose campaign landing pages.
4.  **One week after launch:** compare GA4 key events, Google Ads
    conversions and Meta events (Claude can report this via API).
5.  **Later:** remarketing, enhanced conversions, LinkedIn --- each with
    owner approval.

------------------------------------------------------------------------

# 22. SEPARATION OF RESPONSIBILITIES

This project uses two workflows:

## Claude Code / Antigravity

Use for:

-   Website code
-   GTM installation code
-   DataLayer implementation
-   Custom events
-   Consent implementation
-   Technical integrations
-   Code verification
-   Build/deployment
-   Technical tracking fixes

## ChatGPT --- Social / Marketing Management

Use this chat for:

-   Social media strategy
-   Content strategy
-   Social media calendars
-   LinkedIn
-   Instagram
-   Facebook
-   Creative direction
-   Social post copy
-   Campaign messaging
-   Brand communication
-   Marketing positioning
-   Lead-generation strategy
-   Marketing analysis
-   Business development planning
-   Social media reporting
-   Client-facing marketing material

If a task requires changing the website code or implementing a technical
tracking integration, create a clear technical task for Claude Code /
Antigravity using this document as the source of truth.

------------------------------------------------------------------------

# 23. SOURCE-OF-TRUTH PRINCIPLE

The current production website and current repository are the source of
truth for implementation. When this document and the code disagree,
check the code, then update this document.

Do not infer that an integration exists merely because a platform
account exists.

Verify:

``` text
Account exists
+
ID confirmed
+
Website implementation confirmed
+
Events confirmed
+
Consent confirmed
+
Preview tested
+
Destination platform receives data
=
Implementation verified
```

------------------------------------------------------------------------

# 24. EXTERNAL REFERENCES

Official documentation:

-   Google Ads conversions in GTM
-   GTM Preview and Debug
-   GTM Verify and Publish
-   GTM consent settings (additional consent checks)
-   Google Consent Mode v2
-   Google tag setup
-   Google Ads click conversions
-   Enhanced Conversions
-   Meta Pixel and Conversions API

Use current official documentation when implementation details change.
