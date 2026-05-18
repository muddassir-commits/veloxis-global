# Veloxis Global - AI Agent Rules

Version: 1.0
Status: Active
Governance Type: AI Collaboration and Safety Rules

---

# 1. PURPOSE

This document defines how AI agents may safely interact with the Veloxis Global ecosystem.

The purpose is to:
- preserve architecture integrity
- prevent uncontrolled AI modifications
- define AI permissions and limits
- protect routing, deployment, configuration, and data systems
- prevent duplicate logic and folder chaos
- keep documentation current
- support safe automation
- maintain long-term reusable framework quality

AI is treated as an engineering collaborator, not an uncontrolled generator.

---

# 2. CORE AI PHILOSOPHY

Veloxis Global is an AI-native business operating ecosystem.

AI agents are allowed to assist with:
- architecture planning
- documentation
- content systems
- SEO systems
- reusable frontend systems
- automation planning
- refactoring
- code quality improvements
- workflow design
- implementation support

However, AI must always operate under governance.

AI autonomy is permitted only when:
- system integrity is preserved
- modularity improves or remains stable
- deployment safety is protected
- documentation remains aligned
- existing patterns are understood first
- critical zones are handled carefully

---

# 3. REQUIRED AI WORKFLOW BEFORE CHANGES

Before making any meaningful change, AI agents must:

1. Read relevant governance files in `/docs/`.
2. Read relevant continuity files in `/docs/PROJECT_CONTEXT/`.
3. Inspect the current project structure.
4. Identify existing implementations before creating new ones.
5. Determine whether the work affects a safe zone or critical zone.
6. Preserve routing, deployment, SEO, and architecture integrity.
7. Avoid duplicate logic.
8. Update documentation when a structural or workflow change occurs.

AI must not modify blindly.

---

# 4. AI PERMISSION LEVELS

## 4.1 Low-Risk Autonomous Work

AI may usually perform these actions after reading context:
- create or update governance documentation
- create or update planning documents
- organize non-production documentation
- draft content systems
- propose architecture changes
- analyze code structure
- identify duplication
- recommend refactors
- improve comments and documentation

Even low-risk work must follow naming and structure rules.

---

## 4.2 Controlled Implementation Work

AI may perform these actions after inspecting current code and dependencies:
- add reusable frontend components
- refactor duplicated UI patterns
- improve page structure
- add non-critical utilities
- add SEO helper components
- create content loaders
- add tests
- improve accessibility
- improve performance
- add safe static content

These changes must remain scoped and reversible.

---

## 4.3 High-Risk Work Requiring Extra Review

AI must use extra caution and should seek approval when scope is unclear for:
- routing changes
- deployment configuration changes
- environment variable changes
- authentication changes
- payment-related changes
- database migrations
- production infrastructure changes
- dependency installation
- build pipeline changes
- large file moves
- broad refactors across many files
- automation that writes to production systems
- Git operations that rewrite history

High-risk work must be explained before execution unless explicitly requested.

---

# 5. SAFE ZONES

AI may work more freely in safe zones, while still respecting governance.

Safe zones include:
- `/docs/`
- `/docs/PROJECT_CONTEXT/`
- future `/content/`
- future `/seo/metadata/`
- future `/seo/schemas/`
- future `/seo/programmatic/`
- future `/automation/` documentation
- future generated SEO output folders
- future `/references/`
- future `/archive/`

Safe-zone rules:
- preserve factual accuracy
- do not fabricate testimonials, statistics, or case studies
- do not introduce unclear folder structures
- keep naming consistent
- document important decisions

---

# 6. CRITICAL ZONES

Critical zones require careful analysis before modification.

Critical zones include:
- `src/App.jsx`
- route definitions
- deployment configuration
- environment configuration
- package management files
- authentication systems
- payment systems
- database migrations
- production infrastructure
- future `/server/`
- future `/database/migrations/`
- future secrets or credentials handling
- CI/CD workflows

AI must not casually modify critical zones.

Before modifying a critical zone, AI must:
1. explain the reason for the change
2. inspect dependencies and references
3. identify deployment risk
4. avoid unrelated edits
5. verify behavior after the change when possible
6. update documentation if the change affects architecture

---

# 7. ARCHITECTURE PROTECTION RULES

AI must always protect:
- modularity
- maintainability
- routing integrity
- deployment compatibility
- reusable component boundaries
- content/application separation
- Markdown/GitHub content strategy
- PostgreSQL application data strategy
- SEO automation readiness
- future multi-client framework reuse

AI must never:
- create duplicate systems unnecessarily
- create uncontrolled folder nesting
- mix content, frontend, automation, and backend concerns
- convert temporary work into permanent architecture without review
- add vague folders such as `misc/`, `new/`, `final/`, or `stuff/`
- create page-specific copies when a reusable system is appropriate
- silently delete or replace important behavior

---

# 8. MODIFICATION APPROVAL BEHAVIOR

AI may proceed without additional approval when:
- the user clearly requested the change
- the change is docs-only or low risk
- the affected area is a safe zone
- the scope is narrow and aligned with governance

AI should ask for approval before:
- deleting files or folders
- moving many files
- restructuring core application folders
- installing dependencies
- changing deployment or environment config
- modifying database migrations
- changing authentication or payment systems
- pushing to remote repositories
- opening pull requests
- running destructive commands
- performing broad automated rewrites

If the user asks for a plan only, AI must not implement.

If the user asks for implementation, AI should execute carefully within the requested scope.

---

# 9. DEPLOYMENT AND CONFIGURATION SAFETY

Deployment and configuration files are critical infrastructure.

AI must protect:
- `package.json`
- `package-lock.json`
- `vite.config.js`
- hosting configuration
- future Vercel configuration
- future CI/CD files
- environment variable files
- analytics configuration
- production build behavior

Rules:
- do not change deployment configuration unless necessary
- do not add hidden deployment dependencies
- do not commit secrets
- do not expose API keys
- do not assume local-only behavior is production-safe
- run build or relevant validation when deployment behavior changes
- document deployment-impacting changes

---

# 10. DOCUMENTATION MAINTENANCE RESPONSIBILITIES

Documentation is part of the system architecture.

AI must update documentation when:
- folder structure changes
- architecture boundaries change
- workflows are added or changed
- SEO infrastructure changes
- automation behavior changes
- deployment strategy changes
- database strategy changes
- AI governance changes

Documentation updates should be placed in the correct location:
- global governance files live in `/docs/`
- project memory and continuity files live in `/docs/PROJECT_CONTEXT/`
- workflow-specific docs may live in future `/automation/`
- SEO-specific plans may live in future `/seo/` or `/docs/`

AI must not leave major architectural changes undocumented.

---

# 11. AI RESTRUCTURING LIMITATIONS

AI must not perform broad restructuring unless:
- the user explicitly requests it
- governance files support the direction
- current imports and routes are inspected
- the refactor can be verified
- changes are staged in clear steps

AI must avoid:
- moving files for aesthetic reasons only
- renaming many folders at once without a migration plan
- changing route paths without approval
- mixing cleanup with feature implementation
- changing public URLs casually
- restructuring generated build output
- reorganizing reference material before checking active usage

Large structural changes should be proposed first, then implemented in controlled phases.

---

# 12. GIT AND GITHUB SAFETY PRACTICES

AI must treat Git history carefully.

Allowed with normal caution:
- inspect status
- inspect diffs
- inspect logs
- create branches when requested
- stage files when requested
- create commits when requested

Requires explicit user approval:
- pushing to remote
- opening pull requests
- deleting branches
- force pushing
- rebasing shared branches
- resetting history
- reverting user changes
- rewriting commits

AI must never:
- run destructive Git commands casually
- discard user changes without explicit instruction
- assume uncommitted changes are safe to overwrite
- stage unrelated files
- commit secrets
- commit generated clutter unless intentionally required

Before committing, AI should summarize:
- files changed
- reason for change
- validation performed
- any remaining risks

---

# 13. AUTOMATION SAFETY PRINCIPLES

Automation exists to improve consistency and reduce repetitive work.

Automation must never:
- bypass governance
- write uncontrolled output into source folders
- publish unreviewed authority claims
- expose secrets
- mutate production data without approval
- silently change routes or metadata at scale
- create hidden dependencies
- destabilize deployment

AI-assisted automation should be:
- observable
- documented
- reversible where possible
- scoped to defined inputs and outputs
- reviewable by humans
- separated from application code

n8n workflow exports and automation plans should eventually live in `/automation/`.

SEO automation systems should eventually follow the SEO master plan and live in approved SEO folders.

---

# 14. CONTENT SAFETY RULES

AI must never generate or publish:
- fake testimonials
- fabricated case studies
- invented client logos
- unsupported statistics
- false revenue claims
- fake guarantees
- misleading authority claims

Programmatic content is allowed for scalable SEO only when:
- factual claims are controlled
- templates are reviewable
- metadata is accurate
- internal links are intentional
- location and service pages avoid false local presence claims

Authority content should be AI-assisted but human-reviewed.

---

# 15. REUSABILITY RULES

AI should prefer reusable systems when patterns repeat.

Reusable candidates include:
- service page layouts
- SEO metadata builders
- schema templates
- section components
- cards
- CTAs
- FAQ systems
- content loaders
- automation workflow templates
- integration adapters

AI must avoid premature abstraction.

Create abstractions only when:
- duplication is real
- the boundary is clear
- reuse is likely
- the abstraction improves readability
- the abstraction supports future client replication

---

# 16. TESTING AND VERIFICATION RESPONSIBILITIES

AI should verify changes according to risk.

For docs-only changes:
- confirm file location
- confirm content exists
- inspect status

For frontend changes:
- run lint/build when practical
- inspect affected pages
- verify routing
- check responsive behavior when UI is affected

For SEO changes:
- validate metadata shape
- validate schema syntax when possible
- check sitemap/internal linking effects

For automation changes:
- document inputs and outputs
- test in a non-production context when possible
- avoid live production mutations without approval

For database changes:
- review migrations carefully
- avoid destructive migration behavior
- validate rollback or recovery strategy when possible

---

# 17. AI HANDOFF RULES

When finishing work, AI should report:
- what changed
- where it changed
- what was not changed
- validation performed
- remaining risks or next steps

If context files need updating for continuity, AI should update the correct file.

`/docs/PROJECT_CONTEXT/AI_HANDOFF_CONTEXT.md` should eventually summarize active system state for future AI sessions.

---

# 18. CONFLICT RESOLUTION PRIORITY

If conflict occurs between speed, convenience, automation, architecture, and safety, priority order is:

1. System Integrity
2. Deployment Safety
3. Maintainability
4. Modularity
5. Documentation Consistency
6. Automation Safety
7. Development Speed

AI must not choose speed over system integrity.

---

# 19. FINAL AI GOVERNANCE PRINCIPLE

AI may help build Veloxis Global quickly, but it must help build it cleanly.

The goal is not uncontrolled AI output.

The goal is:

"Controlled AI-native engineering for a reusable business operating ecosystem."

Every AI action should preserve:
- architecture integrity
- modularity
- maintainability
- SEO readiness
- automation safety
- deployment stability
- long-term framework reuse

End of File
