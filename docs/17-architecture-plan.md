# Architecture Plan (Milestone 0: Inspection Only)

Produced per `docs/14-claude-code-build-sequence.md` Milestone 0 and `docs/15-first-claude-prompt.txt`.
Amended per the Pre-Milestone 1 approval on 2026-08-28. No code has been implemented. This document is
the deliverable for review before Milestone 1 begins.

**Status: architecture approved with amendments below. Milestone 1 not yet started.**

## Synthesis

NUVAIX GROUP is a diversified holding brand (legal entity NUVAIX SOLUTIONS LTD, RC 9597904) spanning 10
business divisions defined by the Memorandum of Association, plus two strategic initiatives that need
first-class treatment: a **technology/training division** (real, deliverable curriculum) and **NUVAIX
Paint** (real proposal, but largely _future-tense_: factory, nationwide delivery, and online ordering
are **planned**, not live). The content-authority docs (`11`, `13`) are strict: no fabricated clients,
stats, testimonials, certifications, leadership bios, or completed projects. That constraint drives the
data architecture below: speculative content gets a `status` field instead of being hard-coded as fact,
and `/projects`, `/insights`, `/careers` must work correctly with **zero seed entries**.

## Information Architecture Clarification

This is a website navigation/IA decision only. It does **not** alter NUVAIX's legal or organizational
structure, which remains exactly as defined by the Memorandum of Association and `docs/11`.

1. **The 10 core business divisions** (`/businesses/*`) represent the formal MOA-scoped operating
   divisions: construction & engineering, real estate, technology/IT solutions, automobile, logistics,
   manufacturing, healthcare, retail & agriculture, consultancy, investments. Each gets a summary
   entry in the `/businesses` grid and a detail page via the shared `[slug]` template.
2. **Technology / IT Solutions** is one of those 10 divisions (`/businesses/technology-it-solutions`)
   _and_, because its offering is deep enough to need its own solutions overview and a full course
   catalogue, it is additionally surfaced as a dedicated top-level section (`/technology`). This is a
   navigation-depth decision, not a claim that Technology is a separate legal entity.
3. **Training / education** is a service offering delivered under the Technology division, surfaced at
   `/technology/training`. It is not a separate business division.
4. **NUVAIX Paint** is a specific strategic initiative described in the supplied proposal, most closely
   aligned with the manufacturing scope in the MOA. It is elevated to its own top-level section
   (`/paint`) because of its distinct product catalogue, e-commerce-shaped content, and strategic
   priority, not because it is a separate legal entity from NUVAIX SOLUTIONS LTD. Its planned/live
   status must stay clearly labeled at every touchpoint (see Paint Governance).

## 1. Recommended Technical Architecture

- **Next.js (App Router) + TypeScript (strict) + Tailwind CSS**, per `07-technical-architecture.md`.
- **Rendering**: Server Components by default. Client Components only for `MobileNavigation`,
  `MegaMenu`, `Modal`, `Accordion`, `Tabs`, `Toast`, `PaintColorSwatch` (interactive), and all forms.
- **Motion**: the `motion` package, used sparingly (section reveals and hero parallax only), all gated
  behind `prefers-reduced-motion`.
- **Forms**: React Hook Form + Zod, with schemas shared between client and server validation.
- **Submission handling**: **Server Actions are the sole mechanism for V1 enquiry forms.** No
  `/api/enquiry` route handler; see Architecture Correction below.
- **Data layer (V1)**: typed local TS content modules under `/data`, no CMS/DB. Structured so a V2 CMS
  swap only touches the data-fetching layer, not components.
- **Styling**: Tailwind with a centralized token config mapping the 5 brand colors, spacing scale, and
  type scale; no ad hoc hex values in components.
- **Fonts**: driven entirely through the design-token system (see Design-Token Amendment below); no
  font family is hard-coded into the app until one is visually approved.
- **Icons**: custom inline SVG components (see Icon Amendment below); no icon library dependency.

## 2. Final Route Tree

```
app/
  layout.tsx
  page.tsx
  not-found.tsx
  error.tsx
  sitemap.ts
  robots.ts
  manifest.ts

  about/
    page.tsx
    mission/page.tsx
    vision/page.tsx
    values/page.tsx
    leadership/page.tsx
    structure/page.tsx

  businesses/
    page.tsx
    [slug]/page.tsx

  technology/
    page.tsx
    solutions/page.tsx
    training/
      page.tsx
      [slug]/page.tsx

  paint/
    page.tsx
    products/
      page.tsx
      [slug]/page.tsx        # APPROVED
    colors/page.tsx
    bulk-orders/page.tsx

  projects/
    page.tsx
    [slug]/page.tsx

  insights/
    page.tsx
    [slug]/page.tsx

  partnerships/page.tsx

  careers/
    page.tsx
    [slug]/page.tsx

  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
```

No `app/api/` route is planned for V1. Server Actions colocated with their forms (or in
`lib/actions/enquiry.ts`) handle all submissions. An API route would only be reintroduced if a future
integration requires an external caller (e.g. a webhook), which is not a current requirement.

## 3. Component Hierarchy

```
components/
  layout/     Header, DesktopNavigation, MobileNavigation, MegaMenu, Footer,
              PageContainer, Section, SectionHeading, Breadcrumbs
  ui/         Button, IconButton, Badge, Card, Modal, Accordion, Tabs,
              Input, Textarea, Select, Checkbox, FileUpload, Toast
  icons/      Icon primitives (inline SVG components, e.g. Icon/ArrowRight.tsx,
              Icon/Paint.tsx), no external icon package
  sections/   Hero, AboutPreview, BusinessGrid, BusinessCard, LeadershipGrid,
              LeadershipCard, CapabilityGrid, StatsBlock, CTASection,
              QuoteBlock, LogoCloud, ProjectGrid, ProjectCard, ArticleGrid, ArticleCard
  technology/ ServiceCard, CourseCard, Curriculum, LearningOutcome, TrainingCTA
  paint/      PaintProductCard, PaintProductHero, PaintFeatureGrid,
              PaintColorSwatch, BulkOrderCTA, ProductSpecificationTable,
              PlannedStatusBadge
  forms/      EnquiryFormBase, ContactForm, PartnershipForm, CareerForm,
              TrainingEnquiryForm, PaintEnquiryForm
```

`StatsBlock` and `LogoCloud` exist as components but render nothing until real, verified data exists.
`PlannedStatusBadge` is the single source of "planned vs. live" wording for Paint (and any other
division); no page should hand-write that distinction inline.

## 4. Data/Content Architecture

```
types/            # TS interfaces mirroring docs/06-content-models.md
data/
  company.ts      # legal entity, RC number, brand lines
  navigation.ts   # drives header, mega-menu, footer, breadcrumbs
  businesses.ts   # 10 divisions, status: 'active' | 'planned'
  paint-products.ts
  courses.ts
  leadership.ts   # empty/placeholder until confirmed
  projects.ts     # empty array, schema ready
  articles.ts     # empty array, schema ready
  jobs.ts         # empty array, schema ready
lib/
  schemas/        # Zod schemas mirroring content models, shared by Server Actions
  actions/        # Server Actions (enquiry.ts): validated submission pipeline
```

## 5. Dependency List

**Runtime**: next, react, react-dom, typescript, tailwindcss, postcss, autoprefixer, motion,
react-hook-form, zod, @hookform/resolvers, clsx (or tailwind-merge). Email SDK explicitly deferred to
the forms/backend milestone; not installed now.

**Dev**: eslint, eslint-config-next, prettier, vitest, @testing-library/react,
@testing-library/jest-dom, @playwright/test.

**Deliberately not added**: icon library (custom inline SVG instead, approved), CAPTCHA SDK, CMS SDK,
ORM, Upstash/Redis, any font package (fonts are config-driven, see below).

No additional dependencies are being installed as part of this amendment.

## 6. Asset Requirements

Logo (SVG primary/light/dark/monogram), favicon set, OG image template, and photography for
leadership/business/technology/paint/projects; all currently absent. Use abstract geometric/brand-color
placeholders, never stock photos implying real offices, staff, or products. The paint bucket packaging
mockup must stay labeled as a concept until specs/regulatory text are approved.

Fonts: no files sourced yet. The design-token system will define a swappable font-family token so a
family can be dropped in and visually evaluated during the design-system milestone without touching
component code.

## 7. Environment-Variable Requirements

```
NEXT_PUBLIC_SITE_URL=
EMAIL_PROVIDER_API_KEY=          # deferred, added at the forms/backend milestone
CONTACT_RECIPIENT_EMAIL=
PARTNERSHIP_RECIPIENT_EMAIL=
CAREERS_RECIPIENT_EMAIL=
TRAINING_RECIPIENT_EMAIL=
PAINT_RECIPIENT_EMAIL=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_ANALYTICS_ID=
```

## 8. Backend Requirements

A single Zod-validated **Server Action** pipeline shared by every enquiry form (no route handler);
server-side validation always; honeypot + timing-based anti-spam baseline; transactional email
integration deferred to the forms/backend milestone; career file uploads validated server-side and
stored outside `public/`; no database in V1; basic IP-based rate limiting.

## 9. Testing Strategy

Mandatory: `npm run lint`, `npm run typecheck`, `npm run build`. Unit tests (Vitest + RTL) for `ui/`
primitives and schemas. Integration tests for the Server Action submission flow and nav interaction.
Playwright + axe-core smoke tests per route. Manual mobile/desktop and focus/contrast passes per the
`CLAUDE.md` quality gates. CI (GitHub Actions) runs lint, typecheck, build, and tests on every push/PR
from the start, per the Git/CI decision below.

## 10. Deployment Strategy

**Approved: Vercel** for V1 production deployment: native Next.js support, Server Actions, preview
deployments per branch/PR, matching the "review after each milestone" workflow. Static export is not
viable: Server Actions need a server runtime. Staging/preview should point at a test inbox once email
is configured. Production gate mirrors Milestone 19 of `14-claude-code-build-sequence.md`.

## 11. Potential Risks

1. Content scarcity vs. the no-fabrication rule (leadership, projects, articles, jobs currently empty).
2. Paint future/planned wording drift if not centralized in `PlannedStatusBadge`/shared copy; see
   Paint Governance below.
3. Undefined career file-upload storage/retention policy.
4. Email delivery remains unconfigured until the forms/backend milestone: forms will validate and
   build but cannot send until a provider is chosen then.
5. Untested contrast ratios for gold-on-sapphire / silver-on-black in the brand palette.
6. Template monotony risk across 10 business divisions with sparse MOA-only copy for some.
7. No CMS means every content change is a code deploy.
8. Deferred font choice means initial design-system work must use a system-font fallback that looks
   acceptable on its own, in case the token swap is delayed.

## 12. Questions Requiring Human Confirmation

Resolved by this amendment: hosting, email-provider timing, icons, typography approach, Paint product
detail pages, Git/CI. Remaining open:

1. Leadership: no names/titles/bios exist in `docs/`; what may be published, and is there a source
   document not yet added? _(Stays empty until answered.)_
2. Projects: any real case studies to seed at launch, or fully empty? _(Stays empty until answered.)_
3. Insights: any real articles ready at launch, or empty-architecture-only?
4. Careers: expected volume and resume storage/retention policy?
5. Analytics: GA4, Plausible, or none for V1?
6. Specific transactional email provider (to be decided at the forms/backend milestone, per the
   approved deferral, not blocking Milestone 1).
7. Specific approved font family (to be decided visually during the design-system milestone, not
   blocking Milestone 1).

None of the remaining items block Milestone 1.

## Paint Governance

NUVAIX Paint must never be presented as fully operational where the source material describes factory
manufacturing, nationwide delivery, online ordering, payment, or order tracking as planned/future
capabilities. The `status: 'active' | 'planned'` field on `data/paint-products.ts` and the shared
`PlannedStatusBadge` component are the single mechanism for this distinction; no page should
hand-write "coming soon" / "currently planned" copy independently. This applies to hero copy, product
cards, FAQ answers, and metadata/SEO descriptions alike.

## Content Governance

Unchanged from the original plan and `docs/11-content-source-of-truth.md` / `docs/13`. Never fabricate:
clients, projects, statistics, testimonials, awards, certifications, leadership bios, partnerships,
employee counts, revenue, production capacity, factory details, product certifications, Paint prices,
Paint specifications, or office locations. `/projects`, `/insights`, `/careers`, and `/about/leadership`
remain safely empty until verified source content is supplied.

## Architecture Decisions

Each decision from the Pre-Milestone 1 amendment, and the reason for it.

| #   | Decision                                                                                                                                  | Reason                                                                                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Host on **Vercel** for V1                                                                                                                 | Native Next.js support (image optimization, Server Actions, preview deployments per branch) fits the milestone-by-milestone review workflow with no extra infrastructure to manage.                             |
| 2   | **Defer email provider** selection to the forms/backend milestone; no email SDK installed now                                             | Avoids locking in a dependency before the requirement (recipients, volume, deliverability needs) is fully scoped; keeps Milestone 1 free of unused packages.                                                    |
| 3   | **Custom inline SVG icons**, no icon library                                                                                              | Keeps brand iconography fully bespoke to NUVAIX's visual language rather than a generic third-party set, and avoids an unnecessary dependency per `CLAUDE.md`.                                                  |
| 4   | **Typography via design tokens**, no font hard-coded yet                                                                                  | The brand's type family hasn't been visually approved; a token-driven approach lets the design-system milestone swap fonts without touching component code or creating rework.                                  |
| 5   | **Approve `/paint/products/[slug]`**                                                                                                      | The Paint Product content model already models individual products; a detail route is necessary to actually present them and was a natural extension flagged in the original plan.                              |
| 6   | **Git + GitHub from the start; CI to run lint/typecheck/build/test**                                                                      | Enables PR-based review per milestone (matching `README.md`'s "review one milestone at a time" instruction) and catches regressions automatically as pages are added.                                           |
| 7   | **Server Actions only, no `/api/enquiry` route**                                                                                          | Server Actions already give validated, progressively-enhanced form submission with less boilerplate than a parallel route handler; no current requirement (e.g. external webhook caller) needs a REST endpoint. |
| 8   | **IA clarification**: Technology and Paint surfaced as top-level sections in addition to/aligned with their place in the 10 MOA divisions | Reflects their content depth and strategic priority for the website without implying any change to NUVAIX's actual legal/organizational structure.                                                              |
