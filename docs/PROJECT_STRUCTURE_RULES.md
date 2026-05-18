# Veloxis Global - Project Structure Rules

Version: 1.0
Status: Active
Phase: Governance + Architecture Stabilization

---

# 1. PURPOSE

This document defines the folder structure, naming standards, modular boundaries, and separation-of-concerns rules for Veloxis Global.

The purpose is to prevent:
- architecture drift
- random folder growth
- duplicate systems
- page-specific implementation sprawl
- unclear ownership between content, frontend, SEO, automation, and future application systems
- AI-generated structure chaos

Veloxis Global must remain a reusable AI-native business operating ecosystem, not a one-off website codebase.

---

# 2. CURRENT STRUCTURE ANALYSIS

Current project structure includes:

```txt
/
  docs/
    PROJECT_CONTEXT/
  src/
    components/
      home/
      layout/
      shared/
    constants/
    pages/
      services/
    styles/
  public/
  dist/
  node_modules/
  pages references/
  seo_fixes/
  root-level project copy and reference files
```

Current technology shape:
- React
- Vite
- React Router
- react-helmet-async
- Markdown documentation
- planned Markdown/GitHub content layer
- planned n8n automation layer
- planned PostgreSQL application layer

---

# 3. CURRENT ARCHITECTURAL OBSERVATIONS

## 3.1 What Is Already Good

The current project already has useful foundations:
- `src/` is the primary frontend application boundary.
- `src/components/layout/` separates global layout components.
- `src/components/home/` separates homepage sections.
- `src/pages/` separates route-level pages.
- `src/constants/content.js` centralizes a meaningful amount of content.
- `docs/` now exists as the governance and architecture source of truth.
- service pages share a common CSS file through `src/pages/services/ServicePage.css`.

These patterns should be preserved and improved rather than discarded.

---

## 3.2 Current Structural Problems

The current structure also contains issues that may conflict with the governance-first philosophy:

- Root-level content/reference files are mixed with application config files.
- `pages references/` uses a space in the folder name.
- `seo_fixes/` uses snake_case while most future folders should use kebab-case.
- SEO documents, website copy, and implementation prompts are not clearly separated by purpose.
- Page-specific CSS files may grow into duplicated styling systems.
- Some route pages contain inline styling and repeated section patterns.
- SEO metadata and schema are currently embedded directly inside pages.
- Service pages have repeated page structure that should eventually become data-driven or component-driven.
- No formal `content/` layer exists yet for Markdown SEO content.
- No formal `seo/` infrastructure folder exists yet.
- No formal `automation/` folder exists yet for n8n workflow definitions and automation documentation.
- No formal future backend/database boundary exists yet.

---

## 3.3 Scalability Concerns

If the current structure grows without rules, the project may develop:
- route duplication
- scattered metadata
- duplicated service page templates
- inconsistent naming
- unclear boundaries between content and application code
- uncontrolled root-level files
- automation outputs mixed with source code
- future PostgreSQL logic mixed into frontend components
- difficult multi-client replication

This would violate the long-term goal of building a reusable multi-client AI-native framework.

---

# 4. GOVERNING STRUCTURE PRINCIPLES

All future structure decisions must follow these principles:

1. System integrity comes before speed.
2. Folder purpose must be obvious from the folder name.
3. Reusable logic must live outside page-specific folders.
4. Content must be separated from application logic.
5. SEO infrastructure must be modular and automation-ready.
6. Automation workflows must be observable and documented.
7. Future backend and database systems must remain separate from frontend presentation.
8. Root-level files must be limited to project configuration and top-level documentation.
9. AI-generated files must go into approved safe zones.
10. No major new folder should be created without a clear architectural reason.

---

# 5. IDEAL FUTURE ROOT STRUCTURE

The recommended long-term root structure is:

```txt
/
  docs/
  src/
  content/
  public/
  automation/
  seo/
  integrations/
  server/
  database/
  scripts/
  tests/
  references/
  archive/
```

Not all folders need to exist immediately. They should be created only when the relevant system is being implemented.

---

# 6. ROOT FOLDER RESPONSIBILITIES

## 6.1 `docs/`

Purpose:
- governance
- architecture
- planning
- AI handoff context
- development rules
- operating documentation

Allowed content:
- architecture documentation
- governance rules
- workflow documentation
- project status files
- implementation plans
- decision records

Not allowed:
- source code
- generated build files
- raw SEO exports
- temporary notes without clear ownership

---

## 6.2 `src/`

Purpose:
- frontend application source code
- React components
- route definitions
- UI logic
- frontend utilities
- client-side SEO rendering helpers

Allowed content:
- React components
- pages/routes
- layouts
- hooks
- frontend utilities
- styles
- frontend constants
- UI assets imported by React

Not allowed:
- raw content libraries that belong in `content/`
- n8n workflow exports
- database migrations
- backend service logic
- unreviewed generated SEO outputs

---

## 6.3 `content/`

Purpose:
- Markdown and structured content managed through GitHub
- SEO pages
- blog posts
- tutorials
- case studies
- service page source content
- programmatic SEO source data
- lead magnet content

Recommended future structure:

```txt
content/
  blog/
  case-studies/
  services/
  industries/
  locations/
  tutorials/
  templates/
  lead-magnets/
  legal/
```

Rules:
- Markdown content belongs here, not in `src/`.
- Content files should use kebab-case.
- Content should include structured frontmatter when used for SEO or publishing.
- AI-generated content drafts must be reviewed before being treated as authority content.
- Programmatic content must avoid fabricated claims, statistics, testimonials, or case studies.

---

## 6.4 `public/`

Purpose:
- static public assets served directly
- favicon
- robots.txt
- static images that do not require bundling
- public metadata assets

Rules:
- Only place assets here when they must be publicly addressable by URL.
- Do not use `public/` as a dumping ground for design references or drafts.
- Production public assets must have stable, descriptive names.

---

## 6.5 `automation/`

Purpose:
- n8n workflows
- automation pipeline documentation
- webhook specifications
- publishing workflow definitions
- operational automation plans

Recommended future structure:

```txt
automation/
  n8n/
    workflows/
    credentials-notes/
    webhook-specs/
  publishing/
  seo/
  operations/
```

Rules:
- Workflow exports must be versioned and named clearly.
- Secrets and credentials must never be committed.
- Automation must not bypass governance.
- Automation outputs must be separated from automation definitions.

---

## 6.6 `seo/`

Purpose:
- SEO infrastructure logic and generated SEO artifacts
- metadata systems
- schema systems
- sitemap systems
- internal linking systems
- indexing systems
- localization SEO infrastructure

Recommended future structure:

```txt
seo/
  metadata/
  schemas/
  sitemaps/
  internal-linking/
  indexing/
  localization/
  programmatic/
```

Rules:
- SEO systems should be reusable and data-driven.
- Avoid hardcoded metadata directly inside route components once SEO infrastructure exists.
- Schema templates should be centralized.
- Sitemap and internal linking logic should be automated but reviewable.

---

## 6.7 `integrations/`

Purpose:
- external service integration adapters and documentation
- CRM integrations
- email integrations
- analytics integrations
- WhatsApp integrations
- third-party API integration boundaries

Rules:
- Integration-specific code should not be scattered across UI components.
- Each integration should have a clear owner folder.
- Credentials must remain outside version control.
- Integration behavior should be documented.

---

## 6.8 `server/`

Purpose:
- future backend services
- API routes
- authentication logic
- application business logic
- SaaS/backend systems

Rules:
- This folder should be created only when backend implementation begins.
- Backend logic must not be mixed into frontend route components.
- Authentication and authorization are critical zones and require careful review.

---

## 6.9 `database/`

Purpose:
- PostgreSQL schema documentation
- migrations
- seed scripts
- data model documentation

Recommended future structure:

```txt
database/
  migrations/
  seeds/
  schema/
  docs/
```

Rules:
- PostgreSQL is for application data, users, dashboards, CRM systems, portals, and SaaS features.
- Markdown/GitHub remains the content database.
- Database migrations are critical zones and require careful review.

---

## 6.10 `scripts/`

Purpose:
- project maintenance scripts
- build helpers
- SEO generation scripts
- validation scripts
- migration helpers

Rules:
- Scripts must be documented.
- Scripts that modify files must describe their input and output.
- Avoid one-off scripts at the root.
- Destructive scripts require explicit approval.

---

## 6.11 `tests/`

Purpose:
- unit tests
- integration tests
- frontend behavior tests
- SEO validation tests
- automation validation tests

Recommended future structure:

```txt
tests/
  unit/
  integration/
  e2e/
  seo/
  automation/
```

Rules:
- Tests should match the risk level of the feature.
- Shared systems require stronger test coverage than isolated pages.
- SEO and routing changes should have validation coverage when practical.

---

## 6.12 `references/`

Purpose:
- design references
- screenshots
- research files
- external audit documents
- historical SEO reports

Current folders such as `pages references/` and `seo_fixes/` should eventually be normalized into this area.

Recommended future structure:

```txt
references/
  design/
  seo-audits/
  copy/
  research/
```

Rules:
- Reference material must not be mixed with production source code.
- Folder names must not contain spaces.
- References are not source-of-truth application systems unless explicitly promoted.

---

## 6.13 `archive/`

Purpose:
- retired files
- superseded prompts
- old reports
- deprecated planning files

Rules:
- Archive is for preservation, not active development.
- Archived files should not be imported by the application.
- Moving files into archive should be intentional and documented when significant.

---

# 7. RECOMMENDED FUTURE `src/` STRUCTURE

The frontend should evolve toward:

```txt
src/
  app/
    App.jsx
    routes.jsx
    providers.jsx
  components/
    ui/
    layout/
    sections/
    seo/
  features/
    home/
    services/
    projects/
    contact/
    about/
  pages/
  content/
  data/
  hooks/
  lib/
  styles/
  assets/
```

This structure should be adopted gradually. Do not restructure all files at once unless there is a planned refactor.

---

# 8. FRONTEND MODULE BOUNDARIES

## 8.1 `src/app/`

Purpose:
- application shell
- providers
- router composition
- global app configuration

Rules:
- Routing should eventually be centralized.
- Global providers should live here.
- Page components should not define app-level providers.

---

## 8.2 `src/components/`

Purpose:
- reusable UI components used across multiple features or pages

Recommended subfolders:

```txt
components/
  ui/
  layout/
  sections/
  seo/
```

Rules:
- Components used by only one feature should not automatically become shared components.
- Components used by multiple features should be moved into reusable component folders.
- Shared components must avoid business-specific hidden assumptions.

---

## 8.3 `src/features/`

Purpose:
- feature-specific components, data, and logic

Recommended examples:

```txt
features/
  home/
  services/
  projects/
  contact/
  about/
```

Rules:
- A feature folder may contain its own components, data, styles, and helpers.
- Feature code should not import from another feature unless the shared logic is promoted to `components/`, `lib/`, or `data/`.
- Feature folders should map to business domains, not random UI fragments.

---

## 8.4 `src/pages/`

Purpose:
- route-level page entry components

Rules:
- Pages should compose features and shared components.
- Pages should stay thin where possible.
- Pages should not become large containers of repeated business logic.
- Route-specific SEO may live here temporarily, but long-term SEO should move into reusable SEO systems.

---

## 8.5 `src/data/`

Purpose:
- structured frontend data used by components
- navigation data
- service data
- project data
- static business data

Rules:
- Use data files when repeated UI can be generated from structured data.
- Avoid hardcoding repeated cards and repeated page sections directly inside components.
- Data must not contain secrets.

---

## 8.6 `src/content/`

Purpose:
- frontend adapters that consume content from the root `content/` layer

Rules:
- Do not duplicate large Markdown content here.
- Use this folder for loaders, mappers, and content transformation utilities.
- Keep content source files in root `content/`.

---

## 8.7 `src/lib/`

Purpose:
- reusable pure utilities
- formatting helpers
- URL helpers
- SEO helpers
- validation helpers

Rules:
- Utilities must be framework-appropriate and reusable.
- Do not place page components here.
- Avoid vague files such as `helpers.js` when a specific name is possible.

---

## 8.8 `src/hooks/`

Purpose:
- reusable React hooks

Rules:
- Hooks must start with `use`.
- Hooks should be reusable or feature-scoped.
- Feature-only hooks may live inside the relevant feature folder.

---

## 8.9 `src/styles/`

Purpose:
- global styles
- design tokens
- variables
- reset/base styles
- shared style utilities

Rules:
- Global styles must remain intentional and minimal.
- Design tokens should be centralized.
- Avoid uncontrolled page-specific global selectors.

---

## 8.10 `src/assets/`

Purpose:
- frontend-bundled assets imported by React

Rules:
- Use for assets that benefit from bundler processing.
- Public URL assets belong in `public/`.
- Design references do not belong here.

---

# 9. NAMING CONVENTIONS

## 9.1 Folders

Use kebab-case for folders outside `src`:

```txt
seo-audits/
internal-linking/
case-studies/
lead-magnets/
```

Inside `src`, use established React conventions:
- PascalCase for component files
- kebab-case or lowercase for non-component folders
- clear domain names for feature folders

Avoid:
- spaces in folder names
- mixed naming styles
- vague names such as `stuff`, `misc`, `new`, `final`, `test2`
- inconsistent names such as mixing `seo_fixes` and `pages references`

---

## 9.2 Files

React components:

```txt
Navbar.jsx
ServiceCard.jsx
ProjectDetail.jsx
```

Styles:

```txt
Navbar.css
ServicePage.css
variables.css
```

Markdown/content files:

```txt
ai-automation-services.md
n8n-workflow-automation.md
jaipur-ai-automation-agency.md
```

Documentation:

```txt
PROJECT_STRUCTURE_RULES.md
SEO_AUTOMATION_MASTER_PLAN.md
AUTOMATION_WORKFLOWS.md
```

Automation workflows:

```txt
publish-blog-to-github.json
generate-service-schema.json
submit-sitemap-to-indexing-api.json
```

---

# 10. SEPARATION OF CONCERNS

## 10.1 Content vs Code

Content source belongs in:
- `content/`
- `docs/`
- selected structured data files when appropriate

Application code belongs in:
- `src/`
- future `server/`
- future `integrations/`

Do not bury long-form content directly inside React components when it is intended to scale.

---

## 10.2 SEO vs Pages

Pages may temporarily include metadata and schema while the project is small.

Long term:
- metadata templates belong in SEO infrastructure
- schema templates belong in SEO infrastructure
- route metadata should be data-driven
- sitemap generation should be automated
- internal linking should be managed by a reusable system

---

## 10.3 Automation vs Application Logic

Automation workflows belong in:
- `automation/`
- `seo/` when SEO-specific
- `scripts/` when script-based

Automation should not be hidden inside UI components.

---

## 10.4 Frontend vs Backend

Frontend:
- UI
- routing
- client interaction
- SEO rendering
- content presentation

Backend:
- authentication
- user data
- CRM data
- portals
- dashboards
- SaaS logic
- payment systems
- server-side business logic

Do not mix future backend concerns into React components.

---

# 11. REUSABLE ARCHITECTURE ORGANIZATION

Reusable systems should be organized as follows:

## UI Reuse

Location:
- `src/components/ui/`
- `src/components/layout/`
- `src/components/sections/`

Examples:
- buttons
- cards
- forms
- section headers
- page shells
- layout wrappers

---

## Content Reuse

Location:
- `content/`
- `src/data/`
- `src/content/`

Examples:
- service definitions
- project definitions
- FAQs
- case study data
- SEO page source content

---

## SEO Reuse

Location:
- `seo/`
- `src/components/seo/`
- `src/lib/seo/`

Examples:
- metadata builders
- schema generators
- sitemap logic
- internal linking maps
- route SEO definitions

---

## Automation Reuse

Location:
- `automation/`
- `scripts/`
- `integrations/`

Examples:
- n8n workflow templates
- publishing pipelines
- indexing workflows
- content generation workflows
- CRM automation blueprints

---

# 12. SAFE ZONES AND CRITICAL ZONES

## 12.1 Safe Zones

AI systems may work more freely in:
- `docs/`
- future `content/`
- future `seo/metadata/`
- future `seo/schemas/`
- future `automation/` documentation
- future generated SEO output folders
- `references/`

Even in safe zones, AI must preserve factual accuracy and documentation consistency.

---

## 12.2 Critical Zones

AI systems must use extra caution in:
- `src/App.jsx`
- routing files
- deployment config
- environment config
- authentication systems
- payment systems
- database migrations
- production infrastructure
- future `server/`
- future `database/migrations/`

Critical zones require structure analysis before modification.

---

# 13. RULES FOR ADDING NEW FOLDERS

Before creating a new folder, confirm:

1. The folder has a clear purpose.
2. The folder does not duplicate an existing responsibility.
3. The folder fits the long-term architecture.
4. The name follows naming conventions.
5. The folder can scale without becoming a dumping ground.
6. The folder does not mix content, code, automation, and references.

Do not create a folder only because it is convenient for one temporary file.

---

# 14. RULES FOR MOVING EXISTING FILES

Moving files should be done carefully.

Before moving files:
- check imports
- check routes
- check deployment behavior
- check asset references
- check SEO implications
- update documentation when the move is architectural

Do not move many files at once unless there is a documented refactor plan.

---

# 15. CURRENT CLEANUP RECOMMENDATIONS

These are recommendations, not immediate required changes.

## 15.1 Normalize Reference Material

Eventually move:

```txt
pages references/
seo_fixes/
VELOXIS_GLOBAL_WEBSITE_COPY.md
VELOXIS_GLOBAL_REACT_COPY_SNIPPETS.js
ANTIGRAVITY_VELOXIS_GLOBAL_REBUILD_PROMPT.md
veloxis_offers.md
veloxis_services.md
```

into a cleaner reference/content/archive structure, such as:

```txt
references/
  design/
  seo-audits/
  copy/
archive/
```

Do not perform this move without checking whether any files are actively used.

---

## 15.2 Convert Repeated Service Pages

Current service pages share similar layout patterns.

Future direction:
- create reusable service page sections
- store service content as structured data or Markdown
- use shared SEO definitions
- reduce duplicated page markup

---

## 15.3 Centralize SEO Infrastructure

Current SEO metadata and schema are embedded in page components.

Future direction:
- create reusable SEO components
- create metadata helpers
- create schema generators
- define route-level SEO data centrally

---

## 15.4 Reduce Inline Styling

Some pages contain inline styles.

Future direction:
- move repeatable styles into reusable components or CSS modules/files
- preserve global tokens in `src/styles/`
- avoid creating one-off visual patterns per page

---

# 16. AI STRUCTURE RULES

AI agents must:
- read `/docs/` before structural changes
- check current folders before adding new ones
- reuse existing systems where possible
- avoid duplicate page/component patterns
- avoid uncontrolled nesting
- preserve routing integrity
- preserve deployment stability
- document major architectural changes
- keep root-level files limited and intentional

AI agents must never:
- randomly restructure folders
- create vague folders such as `misc/` or `new/`
- mix generated content with source code
- place secrets in the repository
- move critical files without checking references
- create parallel systems when an existing system can be extended

---

# 17. IMPLEMENTATION ORDER FOR STRUCTURE EVOLUTION

Recommended order:

1. Finish governance files.
2. Define content architecture.
3. Define SEO automation architecture.
4. Define automation workflow architecture.
5. Introduce `content/` when Markdown content implementation begins.
6. Introduce `seo/` when SEO infrastructure implementation begins.
7. Refactor frontend page duplication gradually.
8. Introduce backend/database folders only when application systems begin.
9. Normalize reference/archive material after active dependencies are checked.

---

# 18. FINAL STRUCTURE PRINCIPLE

Every folder should answer three questions:

1. What system owns this?
2. What type of files belong here?
3. How does this support future reuse?

If those answers are unclear, the folder should not be created yet.

Veloxis Global must remain:
- modular
- maintainable
- AI-readable
- SEO-ready
- automation-ready
- reusable across future client deployments

End of File
