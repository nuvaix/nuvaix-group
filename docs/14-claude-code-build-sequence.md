# Claude Code Build Sequence

Do these in order. Review after each milestone.

## 0: Inspect only

Read CLAUDE.md and docs/. Do not code. Return an implementation plan and list assumptions.

## 1: Foundation

Create the Next.js application, TypeScript setup, Tailwind setup, lint/typecheck scripts, app shell and global design tokens.

## 2: Design system

Implement typography, color tokens, containers, buttons, cards, section headings, focus states and responsive primitives.

## 3: Navigation

Implement desktop header, mobile menu, Businesses mega-menu, footer and route structure.

## 4: Homepage

Implement the premium homepage according to docs/03-page-specifications.md.
Prioritize hierarchy and imagery over animation.

## 5: About

Implement About, Mission, Vision, Values, Leadership and Structure.

## 6: Businesses

Create typed business data and /businesses/[slug].
Implement all ten supported divisions using a reusable template.

## 7: Technology

Implement Technology, Solutions and Training.
Create data-driven course pages.

## 8: NUVAIX Paint

Implement /paint and product architecture.
Use only supported proposal information.
Clearly distinguish planned operations from confirmed live operations.
Do not invent pricing, certifications, production capacity, color catalogue or regulatory claims.

## 9: Projects

Implement project data model and portfolio UI.
Do not create fictional projects.

## 10: Insights

Implement article architecture and editorial UI.

## 11: Careers

Implement job listing and application architecture.

## 12: Partnerships

Implement partnership landing page and enquiry form.

## 13: Contact/forms

Implement validated forms, server actions/API routes, anti-spam, email notifications and confirmation states.

## 14: SEO

Implement metadata, sitemap, robots, structured data and OG images.

## 15: Accessibility

Run a complete keyboard, focus, contrast and reduced-motion audit.

## 16: Performance

Optimize images, client components, fonts, animation and bundle size.

## 17: Security

Review inputs, uploads, headers, dependencies, environment variables and endpoints.

## 18: QA

Test every route and breakpoint.
Run:
npm run lint
npm run typecheck
npm run build

## 19: Production readiness

Verify environment variables, domain, analytics, email, forms, legal pages, favicon, OG preview,
404/500 pages, sitemap, robots and production build.

## 20: Deployment

Deploy only after the production checklist passes.
