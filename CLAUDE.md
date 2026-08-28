# NUVAIX GROUP: Website Engineering Constitution

## Project

Build a premium, production-quality corporate website for NUVAIX GROUP.

Legal entity: NUVAIX SOLUTIONS LTD
RC Number: 9597904
Brand: NUVAIX GROUP
Core positioning: diversified, technology-driven enterprise.

## Brand direction

Premium corporate / technology / enterprise.
Visual language: midnight sapphire, titanium silver, champagne gold, deep black.
Avoid generic startup-template aesthetics.

Brand colors:

- Midnight Sapphire: #0A1D3D
- Titanium Silver: #C0C6CF
- Champagne Gold: #D4AF37
- Deep Black: #030507
- Off White: #F5F5F2

Core brand line:
INNOVATE • BUILD • DELIVER • GROW

Supporting hero language:
INNOVATING TODAY.
BUILDING TOMORROW.
GROWING TOGETHER.

## Content authority

Use docs/13-content-source-of-truth.md and the supplied NUVAIX source documents as the authority.
Never invent clients, revenue, employee counts, awards, certifications, completed projects, offices,
partnerships, testimonials, production volumes, delivery statistics, or other corporate claims.

Where source material describes future/planned operations, preserve that status instead of presenting
future plans as completed facts.

Do not expose private founder information such as residential addresses, dates of birth, or personal
contact details.

## Architecture

Use Next.js App Router + TypeScript + Tailwind CSS.
Prefer Server Components. Use Client Components only when interactivity requires them.
Build data-driven business and training pages.
Avoid duplicated page implementations.

## UX

Mobile-first, accessible, fast, polished.
Premium does not mean excessive animation.
Animation must be purposeful, subtle, and respect prefers-reduced-motion.

## Quality gates

Before considering a feature complete:

1. npm run lint
2. npm run typecheck
3. npm run build
4. Test the relevant route on mobile and desktop
5. Check keyboard/focus states
6. Check console for runtime errors
7. Check image sizes and loading behavior

Never hide errors merely to make a build pass.

## Security

Never commit secrets.
Use environment variables.
Validate all user input server-side.
Do not trust client-side validation.
Treat uploads as untrusted.

## Design system

Do not invent a separate visual language for each page.
Use centralized design tokens and reusable components.
