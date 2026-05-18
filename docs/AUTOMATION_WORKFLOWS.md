# Veloxis Global - Automation Workflows

Version: 1.0
Status: Active
Governance Type: Automation Architecture and Workflow Blueprint

---

# 1. PURPOSE

This document defines the automation workflow architecture for Veloxis Global.

The purpose is to create a controlled, reusable, observable automation layer for:
- SEO publishing
- Markdown content workflows
- GitHub-based content operations
- metadata generation
- schema automation
- sitemap updates
- indexing workflows
- AI-assisted publishing
- n8n workflow orchestration
- future API integrations
- future CRM integrations
- future client cloning

This is a governance and architecture blueprint only. It does not implement workflows yet.

---

# 2. GOVERNING CONTEXT

This document aligns with:
- `/docs/# MASTER_SYSTEM_ARCHITECTURE.md`
- `/docs/PROJECT_STRUCTURE_RULES.md`
- `/docs/AI_AGENT_RULES.md`
- `/docs/SEO_AUTOMATION_MASTER_PLAN.md`
- `/docs/PROJECT_CONTEXT/PROJECT_OVERVIEW.md`
- `/docs/PROJECT_CONTEXT/SYSTEM_GOALS.md`
- `/docs/PROJECT_CONTEXT/CURRENT_STATUS.md`
- `/docs/PROJECT_CONTEXT/NEXT_STEPS.md`
- `/docs/PROJECT_CONTEXT/DEVELOPMENT_RULES.md`

Automation exists to scale consistency and reduce repetitive work.

Automation must never bypass:
- governance
- human approval boundaries
- deployment safety
- factual content review
- Git history
- secrets management
- architecture integrity

---

# 3. AUTOMATION SYSTEM OBJECTIVE

The automation system should become:

"A reusable workflow operating layer for AI-native business growth infrastructure."

The system must support:
- SEO automation
- content publishing automation
- GitHub workflow automation
- metadata and schema generation
- sitemap and indexing automation
- lead generation workflows
- CRM and operational automation
- analytics feedback loops
- future client deployment workflows
- future SaaS and portal operations

Primary automation goals:
1. Preserve system integrity.
2. Improve operational efficiency.
3. Maintain SEO consistency.
4. Reduce repetitive manual work.
5. Keep automation observable and recoverable.
6. Support future client cloning.

---

# 4. AUTOMATION ARCHITECTURE OVERVIEW

The automation architecture is divided into layers.

## 4.1 Content Automation Layer

Purpose:
- draft generation
- Markdown content validation
- content status checks
- frontmatter validation
- publishing preparation

Primary systems:
- GitHub
- Markdown
- AI-assisted workflows
- future validation scripts

---

## 4.2 SEO Automation Layer

Purpose:
- metadata generation
- schema generation
- sitemap updates
- internal link suggestions
- indexing queues
- SEO reports

Primary systems:
- SEO infrastructure
- GitHub publishing workflow
- future Search Console integrations
- future analytics integrations

---

## 4.3 Workflow Orchestration Layer

Purpose:
- n8n workflows
- webhook routing
- workflow scheduling
- notifications
- approvals
- retries
- logging

Primary system:
- n8n

---

## 4.4 Integration Layer

Purpose:
- connect external systems safely
- CRM integrations
- email systems
- WhatsApp systems
- analytics APIs
- Search Console APIs
- future client tools

Primary future folders:
- `/integrations/`
- `/automation/`
- `/seo/`

---

## 4.5 Deployment Coordination Layer

Purpose:
- connect approved content changes to deployment events
- wait for successful builds before indexing
- prevent indexing of broken or draft content

Primary systems:
- GitHub
- future Vercel deployment
- current hosting/deployment process
- sitemap/indexing workflows

---

# 5. N8N WORKFLOW PHILOSOPHY

n8n is the preferred automation orchestration layer.

n8n should be used for:
- workflow orchestration
- scheduled jobs
- webhook intake
- approval routing
- notifications
- API integrations
- content pipeline coordination
- CRM automation
- lead routing
- indexing workflow coordination

n8n should not be used to hide critical business logic that belongs in version-controlled code.

Rules:
- workflows must be documented
- workflow exports must be versioned when implementation begins
- credentials must never be committed
- workflows must have clear triggers and outputs
- workflows must include failure paths
- workflows must be observable
- production-impacting workflows require approval before activation

---

# 6. AUTOMATION FOLDER ARCHITECTURE

Future automation folder:

```txt
automation/
  n8n/
    workflows/
    webhook-specs/
    credential-notes/
    runbooks/
  publishing/
    markdown/
    github/
    approvals/
  seo/
    metadata/
    schemas/
    sitemaps/
    indexing/
  integrations/
    crm/
    analytics/
    search-console/
    notifications/
  logs/
  reports/
  templates/
```

Rules:
- create this folder only when implementation begins
- keep workflow definitions separate from generated outputs
- keep secrets out of the repository
- keep runbooks close to workflow definitions
- store reusable templates separately from client-specific workflows

---

# 7. WORKFLOW NAMING CONVENTIONS

Workflow names should be clear, stable, and action-oriented.

Recommended format:

```txt
area-trigger-action-target
```

Examples:

```txt
content-pr-validate-frontmatter
content-approved-publish-markdown
seo-content-generate-metadata
seo-content-generate-schema
seo-deploy-update-sitemap
seo-deploy-submit-indexing
crm-lead-route-whatsapp
analytics-weekly-generate-report
```

n8n workflow export filenames should use kebab-case:

```txt
content-pr-validate-frontmatter.json
seo-deploy-submit-indexing.json
crm-lead-route-whatsapp.json
```

Avoid:
- vague workflow names
- names with spaces
- version names such as `final`, `new`, `test2`
- hidden client-specific assumptions in generic workflow names

---

# 8. TRIGGER AND ACTION STANDARDS

Every workflow must define:
- trigger
- input
- validation
- action
- output
- logging
- failure path
- retry behavior
- owner or review responsibility

Allowed trigger types:
- manual trigger
- scheduled trigger
- GitHub event
- webhook event
- deployment event
- content status change
- analytics threshold
- CRM event
- form submission

Action standards:
- actions must be scoped
- actions must be traceable
- actions must not mutate production systems silently
- actions must avoid duplicate records or duplicate publishing
- actions must protect secrets and private data

---

# 9. GITHUB AUTOMATION WORKFLOWS

GitHub is the source of truth for Markdown content and versioned automation assets.

GitHub automation may support:
- content pull request creation
- frontmatter validation
- metadata validation
- schema validation
- internal link checks
- sitemap preview
- approval routing
- deployment triggering
- publishing status updates

Rules:
- automation must not bypass pull request review for authority content
- automation must not commit secrets
- automation must not force push
- automation must not overwrite human edits without detection
- automation should leave traceable commits or pull requests
- generated changes should be easy to review

Human approval required for:
- publishing authority content
- publishing case studies
- changing core service pages
- mass programmatic publishing
- changing robots or canonical behavior
- publishing content with business proof claims

---

# 10. MARKDOWN PUBLISHING WORKFLOW

Markdown publishing should follow a controlled status model.

Content statuses:

```txt
draft
review
approved
published
refresh-needed
archived
```

Recommended Markdown publishing flow:
1. Create Markdown draft.
2. Add required frontmatter.
3. Run frontmatter validation.
4. Generate or review metadata.
5. Generate or review schema.
6. Suggest internal links.
7. Check content quality rules.
8. Move status to review.
9. Human approval when required.
10. Move status to approved.
11. Merge through GitHub.
12. Deploy.
13. Update sitemap.
14. Queue indexing after successful deployment.

Rules:
- draft content must not publish
- archived content must not appear in sitemap
- approved content should be version-controlled
- publishing must be traceable through Git history
- validation failures should block publishing

---

# 11. SEO PUBLISHING PIPELINES

SEO publishing must connect content, metadata, schema, sitemap, deployment, and indexing.

Recommended pipeline:

```txt
content change
  -> validation
  -> approval
  -> merge
  -> deployment
  -> sitemap update
  -> indexing queue
  -> analytics monitoring
```

Pipeline checks:
- content status
- required frontmatter
- unique slug
- unique title
- meta description exists
- canonical URL valid
- schema eligibility
- internal links valid
- no broken links
- no fake claims
- image alt text present when image exists

SEO automation must not submit unapproved or broken pages for indexing.

---

# 12. METADATA GENERATION FLOW

Metadata generation should be AI-assisted and template-driven.

Recommended flow:
1. Read content frontmatter and body.
2. Identify page type.
3. Identify primary keyword and conversion goal.
4. Generate SEO title draft.
5. Generate meta description draft.
6. Generate Open Graph fields.
7. Validate length and uniqueness.
8. Flag conflicts or missing fields.
9. Require human review when rules demand it.
10. Save approved metadata through version-controlled content or SEO definitions.

Automation allowed:
- metadata drafts
- missing metadata reports
- length checks
- duplicate title detection
- programmatic metadata from approved templates

Human review required:
- homepage metadata
- core service page metadata
- authority content metadata
- case study metadata
- large metadata rewrites

---

# 13. SCHEMA AUTOMATION FLOW

Schema automation should use approved templates and visible page content.

Recommended flow:
1. Determine content type.
2. Select eligible schema template.
3. Extract required fields from approved content.
4. Generate schema draft.
5. Validate required fields.
6. Confirm schema matches visible content.
7. Flag risky schema types.
8. Save approved schema through version-controlled SEO infrastructure.

Automation allowed:
- Article schema
- BlogPosting schema
- BreadcrumbList schema
- FAQPage schema from approved FAQs
- Service schema drafts from approved service data

Human approval required:
- Organization schema
- LocalBusiness schema
- Review/rating schema
- Offer schema
- case study schema
- schema involving claims, proof, or business identity

Rules:
- no fake reviews
- no fake ratings
- no unsupported business locations
- no schema that contradicts page content

---

# 14. SITEMAP UPDATE AUTOMATION

Sitemap automation must be source-aware.

Recommended flow:
1. Detect approved content changes.
2. Collect indexable routes.
3. Exclude drafts, archived pages, private pages, and blocked URLs.
4. Generate sitemap.
5. Validate URL format.
6. Validate canonical alignment.
7. Validate last modified values where available.
8. Publish sitemap after deployment readiness.
9. Log sitemap changes.

Rules:
- sitemap updates should be deterministic
- sitemap output should be reviewable
- large sitemap changes should trigger review
- sitemap submission should wait for successful deployment

---

# 15. INDEXING WORKFLOWS

Indexing workflows must be cautious and observable.

Recommended flow:
1. Deployment succeeds.
2. Sitemap is available.
3. Changed URLs are detected.
4. URLs pass indexability checks.
5. Important URLs are queued.
6. Human review occurs when required.
7. Sitemap or URL submission occurs through approved channels.
8. Results are logged.
9. Issues are reported for review.

Indexing workflows must not:
- submit drafts
- submit broken pages
- submit blocked pages
- submit pages before deployment
- submit unreviewed programmatic batches
- hide indexing failures

Human approval required for:
- large page batches
- new programmatic page groups
- location page expansion
- canonical/robots changes
- first-time indexing workflow activation

---

# 16. WEBHOOK ARCHITECTURE

Webhooks should connect systems without creating hidden behavior.

Webhook use cases:
- GitHub content events
- deployment events
- form submissions
- CRM events
- content approval events
- indexing queue events
- notification events
- analytics alerts

Webhook standards:
- each webhook must have a documented purpose
- each webhook must validate payloads
- each webhook must authenticate requests when possible
- webhook URLs must not expose secrets
- payload schemas should be documented
- retries must be controlled
- duplicate events must be handled safely

Future webhook docs should live in:

```txt
automation/
  n8n/
    webhook-specs/
```

---

# 17. AI-ASSISTED PUBLISHING FLOW

AI may assist publishing, but it must not bypass review.

Recommended AI-assisted flow:
1. AI creates content brief.
2. AI drafts Markdown content.
3. AI suggests metadata.
4. AI suggests schema.
5. AI suggests internal links.
6. AI checks against content quality rules.
7. Human reviews when required.
8. Approved content enters GitHub publishing flow.
9. Automation handles validation and deployment coordination.
10. Indexing occurs only after deployment success.

AI must not:
- invent proof
- invent statistics
- publish case studies without verification
- change critical SEO rules without approval
- submit unapproved pages for indexing
- overwrite human edits without review

---

# 18. CONTENT APPROVAL FLOW

Approval requirements depend on content type.

## 18.1 Auto-Eligible After Validation

May be eligible for automated approval after templates are approved:
- low-risk programmatic pages
- glossary pages
- structured template pages
- technical documentation updates
- metadata for non-critical pages

---

## 18.2 Human Review Required

Human review is required for:
- authority blogs
- core service pages
- homepage content
- case studies
- pricing or offer pages
- local market pages
- claims involving results
- large programmatic batches
- content involving client proof

---

## 18.3 Approval Log

Approval workflows should eventually record:
- content title
- content type
- reviewer
- approval date
- source branch or PR
- risk level
- publishing status

---

# 19. IMAGE AND MANUAL ASSET WORKFLOW

Images and high-trust visual assets are manually controlled.

Automation may assist with:
- filename suggestions
- alt text drafts
- compression reminders
- missing image reports
- image metadata checks

Automation must not:
- invent client screenshots
- generate fake proof visuals
- publish copyrighted images without rights
- select misleading images for authority content
- claim an image shows a real client result unless verified

Recommended flow:
1. Image need identified.
2. Image is manually selected or generated.
3. Usage rights are checked.
4. Filename and alt text are defined.
5. Image is optimized.
6. Image is linked to content.
7. Human review occurs for authority pages.

---

# 20. DEPLOYMENT WORKFLOW PHILOSOPHY

Deployment automation must preserve production stability.

Deployment should be:
- validation-driven
- observable
- reversible where possible
- separated from content drafting
- connected to indexing only after success

Rules:
- deployment config is a critical zone
- deployment changes require careful review
- indexing must wait for successful deployment
- failed deployments must block downstream publishing actions
- automation must not hide build failures
- environment-specific behavior must be documented

Future preferred direction:
- Vercel-first frontend deployment
- GitHub-triggered deployments
- n8n coordination for post-deployment workflows

---

# 21. LOGGING AND OBSERVABILITY STRATEGY

Automation must be observable.

Logs should capture:
- workflow name
- trigger source
- run timestamp
- input summary
- output summary
- success/failure status
- error message
- retry count
- affected URLs or content files
- reviewer or approval state when applicable

Reports should eventually include:
- content pipeline status
- failed workflow runs
- indexing queue status
- sitemap changes
- metadata issues
- schema validation issues
- internal link issues
- CRM automation failures

Observability locations may include:
- n8n execution logs
- GitHub checks
- workflow reports
- future `/automation/logs/`
- future `/automation/reports/`

Logs must not contain secrets or private user data.

---

# 22. AUTOMATION SAFETY RULES

Automation must always:
- respect governance files
- preserve Git history
- validate inputs
- protect secrets
- log failures
- avoid silent production changes
- keep generated output reviewable
- separate templates from outputs
- use approval gates for risky operations

Automation must never:
- publish unapproved authority content
- modify critical config silently
- mutate production data without approval
- expose credentials
- force push
- delete content without approval
- mass-generate pages without approved templates
- submit broken URLs for indexing
- bypass deployment checks

---

# 23. FAILURE HANDLING PHILOSOPHY

Failures should be visible, recoverable, and safe.

Failure handling rules:
- fail closed for publishing and indexing
- do not continue downstream after critical validation failure
- log clear error messages
- notify the responsible human or system
- preserve inputs for investigation
- avoid partial production updates
- avoid repeated uncontrolled retries

Critical failures include:
- deployment failure
- invalid schema
- broken sitemap
- missing required metadata
- failed approval check
- failed authentication
- indexing submission failure
- CRM lead routing failure

---

# 24. RETRY AND RECOVERY PHILOSOPHY

Retries should be controlled and idempotent.

Retry rules:
- retry only when the operation is safe to repeat
- use retry limits
- use delay or backoff for external APIs
- avoid duplicate publishing
- avoid duplicate CRM records
- avoid duplicate indexing submissions where possible
- record retry attempts
- escalate repeated failures

Recovery should include:
- manual rerun option
- error report
- affected file or URL list
- last successful checkpoint
- rollback or correction path when practical

---

# 25. FUTURE API INTEGRATION STRATEGY

Future API integrations may include:
- Google Search Console
- Google Analytics
- PostHog
- Microsoft Clarity
- CRM platforms
- email tools
- WhatsApp providers
- form systems
- content APIs
- AI model APIs

Integration rules:
- each integration must have a clear purpose
- credentials must be stored securely
- API rate limits must be respected
- failures must be logged
- payloads must be validated
- integration-specific logic should not be scattered across UI components
- reusable adapters should live in future `/integrations/`

---

# 26. FUTURE CRM INTEGRATION STRATEGY

CRM automation is central to the long-term business operating system.

Future CRM workflows may include:
- lead capture
- lead routing
- lead qualification
- WhatsApp notifications
- follow-up reminders
- pipeline updates
- reporting dashboards
- client handoff workflows

CRM automation rules:
- no duplicate lead creation without deduplication logic
- lead source must be preserved
- timestamps must be reliable
- failed lead routing must alert humans
- private user data must be protected
- CRM workflow changes require testing
- production CRM mutations require approval during setup

Future CRM integration files should live under:

```txt
integrations/
  crm/
automation/
  integrations/
    crm/
```

Exact placement should be finalized during implementation.

---

# 27. FUTURE CLIENT CLONING WORKFLOW STRATEGY

Veloxis Global is the first implementation of a reusable framework.

Future client cloning should preserve:
- governance structure
- automation folder structure
- workflow naming conventions
- publishing pipeline model
- SEO workflow model
- logging and approval standards
- integration boundaries
- secrets management rules

Client-specific workflow configuration should include:
- client name
- domain
- services
- locations
- CRM provider
- analytics properties
- Search Console property
- content approval owners
- notification channels
- deployment target
- language and region settings

Reusable workflow templates should be separated from client-specific settings.

Possible future structure:

```txt
automation/
  templates/
  clients/
    veloxis-global/
```

or:

```txt
automation/
  config/
    site.config.json
    workflows.config.json
    integrations.config.json
```

The final implementation structure should be decided during automation implementation planning.

---

# 28. SECRETS AND ENVIRONMENT MANAGEMENT PHILOSOPHY

Secrets are critical infrastructure.

Secrets include:
- API keys
- OAuth tokens
- webhook secrets
- database credentials
- CRM credentials
- analytics credentials
- Search Console credentials
- AI model API keys

Rules:
- never commit secrets
- never store secrets in Markdown docs
- use environment variables or approved secret stores
- document required environment variable names without values
- rotate credentials if exposure is suspected
- restrict workflow permissions to the minimum needed
- separate development, staging, and production credentials

Docs may include:
- credential purpose
- environment variable name
- setup instructions
- permission scope

Docs must not include:
- actual secret values
- private tokens
- passwords
- recovery codes

---

# 29. IMPLEMENTATION SEQUENCE

Recommended future automation implementation order:

1. Complete governance documents.
2. Define content status and Markdown frontmatter validation.
3. Define GitHub publishing checks.
4. Define metadata and schema automation.
5. Define sitemap generation workflow.
6. Define indexing queue workflow.
7. Define webhook specs.
8. Define n8n workflow exports and runbooks.
9. Define logging and reporting.
10. Add deployment coordination.
11. Add analytics feedback loops.
12. Add CRM and lead routing workflows.
13. Package reusable workflow templates for future client cloning.

Do not implement all workflows at once.

---

# 30. AI AGENT RULES FOR AUTOMATION WORK

AI agents working on automation must:
- read governance files first
- preserve architecture boundaries
- document workflow purpose
- avoid hidden production mutations
- protect secrets
- define failure paths
- define retry behavior
- keep workflows reviewable
- avoid creating duplicate automation systems
- update documentation when workflows change

AI agents must not:
- activate production workflows without approval
- commit credentials
- bypass content approval
- bypass Git history
- mutate CRM or production data casually
- change deployment config without review
- create undocumented webhook behavior

---

# 31. FINAL AUTOMATION GOVERNANCE PRINCIPLE

Automation should make the system faster, clearer, and more reliable.

It must not make the system mysterious.

The Veloxis Global automation layer must remain:
- governed
- observable
- modular
- recoverable
- reusable
- secure
- approval-aware
- safe for future client cloning

The goal is:

"A controlled automation operating layer that scales SEO, publishing, operations, and client systems without sacrificing architecture integrity."

End of File
