# NUVAIX GROUP Website

The corporate website for **NUVAIX GROUP**, a diversified, technology-driven
enterprise. This repository holds the production Next.js application:
marketing pages for every business division, the NUVAIX Paint product
experience, the enquiry/contact system, and all supporting content.

- **Legal entity:** NUVAIX SOLUTIONS LTD
- **RC Number:** 9597904
- **Brand line:** INNOVATE • BUILD • DELIVER • GROW

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, React Server Components) |
| Language | TypeScript (strict mode) |
| UI library | React 19 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens, no separate config file) |
| Class merging | `clsx` |
| Forms / data mutation | Next.js Server Actions (no `/api` routes in this project) |
| Linting | ESLint 9 (`eslint-config-next`) + Prettier |
| Hosting | Vercel |

There is **no** UI animation library, form library, validation library, CMS,
or database in this project. Form state is handled with native React and
Server Actions; validation is hand-written in [lib/validation/](lib/validation/).
This is a deliberate choice, not an oversight: every dependency in
`package.json` earns its place, and nothing is added "for later." If that
ever changes, this section will be updated in the same change that adds it.

## Getting started

### Prerequisites

- Node.js 20 or later (developed against Node 24; the `engines` field in
  `package.json` requires 20+)
- npm (ships with Node)

### Setup

```bash
git clone <repository-url>
cd nuvaix_group
npm install
cp .env.example .env.local
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000). If port
3000 is already in use on your machine, run `npm run dev -- -p 3002` (or
any free port) instead.

### Environment variables

Copy `.env.example` to `.env.local` and fill in real values as needed. Never
commit `.env.local` or any file containing real secrets.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No (falls back to `http://localhost:3000`) | Public base URL used to build canonical URLs, Open Graph tags, `sitemap.xml`, and `robots.txt`. Set this to the real production domain in the Vercel project's environment variables before launch. |
| `EMAIL_PROVIDER_API_KEY` | No, but see note | API key for the transactional email provider used to deliver enquiry form submissions. |
| `CONTACT_RECIPIENT_EMAIL` | No, but see note | The verified NUVAIX GROUP mailbox that should receive general enquiries. |

**Note on email:** no email provider has been approved for this project yet.
Until both `EMAIL_PROVIDER_API_KEY` and `CONTACT_RECIPIENT_EMAIL` are set,
the enquiry Server Action ([lib/actions/enquiry.ts](lib/actions/enquiry.ts))
fails safely with a `configuration_error` result. No submitted data is lost
silently, and no fake success message is ever shown. See
[docs/19-production-deployment.md](docs/19-production-deployment.md) for the
full email-provider decision checklist.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reload. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve a production build (`npm run build` first). |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run the TypeScript compiler in check-only mode. |
| `npm run format` | Format the codebase with Prettier. |
| `npm run format:check` | Check formatting without writing changes. |

Before considering any change complete, run `lint`, `typecheck`, and `build`
in that order. See [CLAUDE.md](CLAUDE.md) for the full engineering
constitution this project follows.

## Project structure

```
app/          Route segments (App Router). One folder per URL path.
components/   React components, grouped by the page/section that owns them
              (home/, technology/, paint/, careers/, ...) plus shared
              primitives in ui/, layout/, and icons/.
data/         Structured content (business divisions, navigation, company
              identity, brand tokens as data). Source of truth for anything
              rendered from an array/object rather than authored inline.
lib/          Server-only logic: Server Actions (actions/), input
              validation (validation/), the email abstraction (email/),
              and small shared utilities (utils.ts, metadata.ts).
types/        Shared TypeScript types for domain content.
public/       Static assets served as-is (logos, the NUVAIX Paint concept
              render, etc.).
docs/         Planning and governance documents (see below).
```

### Key routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/businesses`, `/businesses/[slug]` | Business division directory and detail pages |
| `/technology`, `/technology/solutions`, `/technology/training` | Technology division |
| `/paint`, `/paint/products`, `/paint/colors`, `/paint/bulk-orders` | NUVAIX Paint experience |
| `/about`, `/about/mission`, `/about/vision`, `/about/values`, `/about/leadership` | Company/about section |
| `/projects`, `/insights`, `/careers`, `/partnerships` | Content sections (see "Content governance" below) |
| `/contact` | Enquiry form, backed by a Server Action |
| `/privacy`, `/terms` | Legal pages |
| `/design-system` | Internal, non-indexed reference page for design tokens and components |

## Content governance

This is a real corporate website, not a template. A few rules are load-bearing
and are enforced throughout the codebase and in `CLAUDE.md`:

- **No fabricated content.** Clients, revenue figures, employee counts,
  awards, certifications, completed projects, offices, partnerships,
  testimonials, and production statistics are never invented. Where real
  data does not yet exist, the relevant section renders an explicit,
  intentional empty state instead of a placeholder or invented example.
  See [data/](data/) for the arrays this applies to (`projects`, `articles`,
  `jobs`, `partners`, `courses`, `paintColors`, `leadership`).
- **No em dash character anywhere in authored content.** This is a hard,
  repository-wide rule, enforced by grep audit after every change.
- **Future/planned status is preserved, never presented as complete.**
  Where source material describes planned or in-progress operations, the
  copy says so.
- **Asset provenance is tracked.** [ASSET_REFERENCE.md](ASSET_REFERENCE.md)
  classifies every supplied image asset (approved logo, reference,
  proposed/concept, placeholder, unknown) and states where each may be
  used. The NUVAIX Paint packaging render, for example, is a proposed
  concept only and is always captioned as such; two other supplied Paint
  images are placeholders and must never appear on the site.

See [docs/11-content-source-of-truth.md](docs/11-content-source-of-truth.md)
for the authoritative content reference.

## Design system

Brand colors, typography, spacing, radius, and shadow tokens are defined
once, centrally, in a single `@theme` block in
[app/globals.css](app/globals.css), and consumed everywhere through Tailwind
utilities or the shared components in `components/ui/` and
`components/layout/`. No page defines its own one-off colors or spacing
values. The five brand colors are:

| Token | Hex |
| --- | --- |
| Midnight Sapphire | `#0A1D3D` |
| Titanium Silver | `#C0C6CF` |
| Champagne Gold | `#D4AF37` |
| Deep Black | `#030507` |
| Off White | `#F5F5F2` |

Visit `/design-system` in a running dev server for a live reference of every
token and shared component. See
[docs/18-design-system-reference.md](docs/18-design-system-reference.md) for
the written specification.

## Security

- All user input (the enquiry form) is validated server-side in
  [lib/validation/enquiry.ts](lib/validation/enquiry.ts); client-side
  validation is a convenience only, never trusted.
  There are no file uploads anywhere in this project.
- Security headers (Content-Security-Policy, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are set in
  [next.config.ts](next.config.ts). See
  [docs/10-security.md](docs/10-security.md) for the full policy and the
  disclosed rationale behind its one deliberate compromise (`'unsafe-inline'`
  for scripts/styles, required by Next.js's own hydration and image
  handling).
- Secrets are never committed. `.env.local` is git-ignored; only
  `.env.example` (with empty/fallback values) is tracked.

## Deployment

The site deploys to [Vercel](https://vercel.com). See
[docs/19-production-deployment.md](docs/19-production-deployment.md) for the
full deployment checklist, environment variable matrix, and the
CLI-based deployment method used before a GitHub connection exists.

## Documentation

The [docs/](docs/) folder contains the full planning and governance record
for this project, in build order: project brief, site map, page
specifications, design system, component system, content models, content
source of truth, technical architecture, SEO strategy, accessibility,
security, assets and brand reference, and production deployment. Start with
[docs/01-project-brief.md](docs/01-project-brief.md) for context, and
[CLAUDE.md](CLAUDE.md) for the engineering rules every change must follow.

## Contributing

This repository is private and maintained for NUVAIX GROUP. Before opening a
change:

1. Read [CLAUDE.md](CLAUDE.md) in full.
2. Run `npm run lint`, `npm run typecheck`, and `npm run build`; all three
   must pass cleanly.
3. Confirm the change introduces no em dash characters and no fabricated
   content.
4. Test the affected route on mobile and desktop, including keyboard
   navigation and focus states.

## License

Proprietary. All rights reserved by NUVAIX SOLUTIONS LTD. No license is
granted for reuse, redistribution, or derivative works.
