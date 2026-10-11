# Production Deployment Guide

This document describes the manual steps required to take the NUVAIX GROUP
website live. It does not perform any of these steps; every action listed
here (GitHub, Vercel, DNS, email provider) is a human decision carried out
outside this repository. No domain, API key, or credential in this document
is real: every value that is not yet known uses an explicit placeholder such
as `YOUR_PRODUCTION_DOMAIN`.

Written as of Milestone 20. The application has passed production build,
production server, route, security-header, SEO, Paint-governance, and
content-integrity validation (see the Milestone 19 and 20 reports). No
hosting, domain, or email provider has been configured yet.

## Deployment checklist, by stage

Each stage is marked with its current status. Stages marked "requires your
authorization" are external actions this repository's own tooling will not
perform until you explicitly say so. GitHub is deliberately sequenced as
its own stage near the end, not first: this project's current workflow
connects to Vercel directly (see section 4, "Deployment method without
GitHub"), and GitHub is treated as a separate, final administrative step
you will authorize on its own.

**1. Local preparation**: DONE. Lint, typecheck, a clean `npm run build`,
and a production `next start` smoke test all pass, re-verified against a
fresh build. No known code blocker remains.

**2. Vercel**: NOT STARTED, requires your authorization. No Vercel project
exists; no login or CLI installation has occurred. Can proceed independently
of GitHub, using the Vercel CLI direct-deploy method (section 4), once
authorized.

**3. Domain**: NOT STARTED, requires your authorization. No production
domain has been approved anywhere in this repository. See sections 7
through 9 below.

**4. Email**: NOT STARTED, requires your authorization. No provider is
selected; `EMAIL_PROVIDER_API_KEY`/`CONTACT_RECIPIENT_EMAIL` remain unset
placeholders. See section 12 (email provider configuration) and the email
checklist further below.

**5. Final QA**: DONE for everything testable without a live deployment
(routes, invalid routes, security headers, sitemap, robots, Paint/content
governance, accessibility statics). Visual/responsive verification and any
real email send remain untestable until a live or preview deployment
exists, and should be repeated once stage 2 is live.

**6. GitHub**: NOT STARTED, requires your separate, final authorization.
No remote exists (`git remote -v` is empty). Committed history currently
stops at "Milestone 7"; work from Milestone 8 onward is uncommitted in the
working tree. This stage is sequenced last by your explicit direction, not
because it is technically required before Vercel; see section 2 for the
manual sequence once authorized.

**7. Launch**: NOT STARTED, requires your authorization and depends on
stages 2 through 6.

**Post-launch monitoring** (not a numbered stage): NOT STARTED. No
monitoring/alerting tool is configured; this is a decision for after
launch, not addressed by this document.

## 1. Prerequisites

- A GitHub account with permission to create a repository.
- A Vercel account (or another Next.js-compatible host, though this guide
  assumes Vercel, the approved target per docs/17-architecture-plan.md).
- A registered production domain (not yet chosen; see section 7).
- Local verification already passing: `npm run lint`, `npm run typecheck`,
  `npm run build`, and `npm run start` all succeed (re-confirmed in the
  Milestone 20 report).
- Node.js 20.x or newer locally (the project's `@types/node` targets the
  Node 20 API surface; no `engines` field is currently declared in
  `package.json`, so this is a recommendation, not an enforced minimum).

## 2. GitHub repository setup

This repository has no remote configured (`git remote -v` returns nothing)
and its committed history currently stops at "Milestone 7"; everything from
Milestone 8 onward exists only in the working tree, uncommitted. Before
connecting Vercel, decide how much of that work to commit, then:

1. Create a new, empty GitHub repository (do not initialize it with a
   README, license, or `.gitignore`, since this project already has its
   own).
2. Set its visibility (private or public) according to your preference.
   This is not a technical decision this document makes for you.
3. Locally, add it as the `origin` remote:
   `git remote add origin YOUR_GITHUB_REPOSITORY_URL`
4. Review `git status` and commit the work you intend to publish.
5. Push the current branch:
   `git push -u origin main`
6. Verify on github.com that the repository contains the expected files and
   that `.env.local`, `.env`, and `.next/` are absent (already correctly
   excluded by `.gitignore`).

None of these commands were run by this milestone.

## 3. Vercel project setup

1. Sign in to Vercel with the account that should own this project.
2. Import the GitHub repository created above.
3. Vercel will auto-detect the Next.js framework from `package.json`
   (`"next": "16.3.3"`); confirm the detected framework preset is "Next.js".
4. Confirm the build command Vercel proposes matches `npm run build`
   (Vercel's default for a detected Next.js project).
5. Confirm the install command is `npm install` (a `package-lock.json`
   already exists in the repository and should be preserved and used).
6. No custom output directory is needed; Next.js's default build output is
   fully supported by Vercel.
7. `next start` is not used in a Vercel deployment; Vercel serves the build
   output directly. `npm run start` in this repository exists for local
   production verification only (as used throughout the Milestone
   17-20 reports).

## 4. Deployment method without GitHub

GitHub is not required for a Vercel deployment. Vercel supports two
distinct connection methods, and this project can use either, in either
order:

1. **Git-based deployment** (section 2 then section 3): connect a GitHub
   repository to Vercel; every push triggers a new deployment
   automatically. This is the more common long-term workflow, but requires
   the GitHub stage to happen first.
2. **CLI-based direct deployment** (no GitHub involved at all): install the
   Vercel CLI locally (`npm install -g vercel`, or run it via `npx vercel`
   without a global install), authenticate (`vercel login`), then run
   `vercel` from the project root. This uploads the local project
   directory straight to Vercel and creates a Vercel project from it,
   independent of any Git host. Running `vercel --prod` promotes that
   deployment to production. A GitHub repository can be connected to the
   same Vercel project later, at any time, without losing the project's
   existing configuration or domain.

Given this project's explicit current sequencing (GitHub deliberately
saved for last), method 2 is the applicable path: Vercel setup, domain,
and email can all proceed via the CLI, and GitHub can be connected
afterward purely for ongoing version control and automatic future
deployments, not because Vercel requires it. Neither the CLI install nor
`vercel login` has been performed by this repository's own tooling; both
require your explicit authorization.

## 5. Build settings

| Setting | Value |
|---|---|
| Framework | Next.js |
| Build command | `npm run build` |
| Install command | `npm install` |
| Output directory | Next.js default (do not override) |
| Node.js version | 20.x recommended (see section 1); not currently pinned in `package.json` |

## 6. Environment variables

See the full matrix in section 17 of this document. At minimum,
`NEXT_PUBLIC_SITE_URL` should be set to the real production domain once one
is chosen; `EMAIL_PROVIDER_API_KEY` and `CONTACT_RECIPIENT_EMAIL` should
only be set once an email provider is actually approved (see section 12).

## 7. Production domain setup

**No production domain has been approved yet.** This repository does not
contain one anywhere (metadata, environment files, or documentation). Once
one is chosen:

1. Add it as a domain in the Vercel project's settings.
2. Vercel will provide the DNS records to configure (see section 8).
3. Set the `NEXT_PUBLIC_SITE_URL` environment variable (in Vercel's project
   settings, for the Production environment) to
   `https://YOUR_PRODUCTION_DOMAIN`.
4. Redeploy so the new value takes effect (environment variable changes
   require a new deployment to apply in Next.js's build-time metadata).

Do not set `NEXT_PUBLIC_SITE_URL` to a guessed or placeholder domain in any
real environment; leave it unset (it falls back to `http://localhost:3000`)
until the real domain is known.

## 8. DNS setup

Exact records depend on whether `YOUR_PRODUCTION_DOMAIN` is a root domain or
a subdomain, and are provided by Vercel at the time the domain is added in
step 7.1 above. Typically:

- Root domain: an `A` record pointing to Vercel's IP, or Vercel's
  recommended `ALIAS`/`ANAME` record if your DNS provider supports it.
- Subdomain (e.g. `www`): a `CNAME` record pointing to
  `cname.vercel-dns.com`.

This document does not invent specific record values, since the correct
ones are only known once the real domain and DNS provider are chosen.

## 9. HTTPS verification

Vercel provisions a TLS certificate automatically once DNS correctly points
to it (typically within minutes of a correct DNS record). After DNS
propagates:

1. Visit `https://YOUR_PRODUCTION_DOMAIN` and confirm the browser shows a
   valid certificate with no warnings.
2. Confirm `http://YOUR_PRODUCTION_DOMAIN` redirects to `https://` (Vercel
   does this automatically).

## 10. HSTS configuration

Deliberately not configured in application code (see Milestone 19's
report). Only add `Strict-Transport-Security` after HTTPS is confirmed
working end-to-end (section 9), since enabling it prematurely, or before a
domain reliably serves HTTPS, can cause real lockout problems for visitors.
Once confirmed, add it either as a Vercel project header rule or by
extending the `securityHeaders` array in `next.config.ts` with, for
example, `Strict-Transport-Security: max-age=63072000; includeSubDomains`
(do not add `preload` until you are certain no subdomain will ever need
plain HTTP).

## 11. Rate limiting / WAF configuration

No rate limiting exists in the application (deliberately: see Milestone 19,
which explains why an in-memory limiter would be misleading in a
multi-instance deployment, and why no third-party rate-limiting dependency
was installed speculatively). Configure this at the hosting/edge layer once
Vercel is connected, for example via Vercel's own Firewall/rate-limiting
rules on the `/contact` route, keyed by IP and a short time window. This
should be configured before the email provider goes live in section 12, to
avoid an unlimited enquiry-sending surface.

## 12. Email provider configuration

No provider is selected, and none is selected by this document. Before the
Contact form can send real production email:

1. Choose a provider (this project's architecture deliberately deferred
   this decision through Milestones 14, 15, 19, and 20).
2. Verify a sending domain/sender identity with that provider (do not use a
   guessed address like `noreply@nuvaix.com`; use the provider's own
   domain-verification flow against a real, approved NUVAIX domain).
3. Create an API key scoped appropriately for that provider.
4. Confirm the real recipient mailbox that should receive general
   enquiries.
5. In Vercel's project settings, set `EMAIL_PROVIDER_API_KEY` and
   `CONTACT_RECIPIENT_EMAIL` (mark both as "Sensitive"/encrypted if the
   host offers that option; never commit them to `.env.example` or any
   tracked file).
6. Implement the provider's actual send call inside
   `lib/email/index.ts`'s `sendEnquiryEmail()` function only (the
   Server Action and UI are already written to need no change when this
   happens; see that file's own code comments).
7. Send a real test enquiry through the live form and confirm delivery,
   correct subject/sender/reply-to, and that the email body renders the
   submitted fields safely (see the injection-safety notes already present
   in `lib/validation/enquiry.ts` and `lib/email/index.ts`).
8. Deliberately misconfigure (or temporarily unset) the environment
   variables once, redeploy to a preview, and confirm the form still fails
   safely with a generic message, exactly as it does today with no
   provider configured.

## 13. Post-deployment verification

After the first real deployment, repeat the same checks already performed
locally in the Milestone 17-20 reports, against the real deployed URL
instead of `localhost`:

- Every route in section 29 of the Milestone 20 report returns 200.
- Every invalid route in section 30 returns 404.
- `curl -I` against the live URL shows all four security headers from
  `next.config.ts`.
- `/sitemap.xml` and `/robots.txt` resolve and reference the real
  production domain (once `NEXT_PUBLIC_SITE_URL` is set correctly).
- The Contact form renders, validates, and (once email is configured)
  delivers.

## 14. Rollback procedure

Vercel keeps every previous deployment addressable. If a deployment
introduces a regression:

1. Open the Vercel project's Deployments list.
2. Select the last known-good deployment.
3. Use Vercel's "Promote to Production" (or equivalent) action to point the
   production domain back at it immediately, without needing a new build.
4. Fix the regression in a new commit, verify locally (lint, typecheck,
   build, start, route tests), then redeploy normally.

No database exists to roll back separately; the application has no
persistent state of its own (see docs/10-security.md and every milestone's
data-retention findings).

## 15. Security checklist

Re-derived from the Milestone 19 and 20 audits; nothing here is new:

- [ ] `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
      and `Content-Security-Policy` all present on the live deployed site
      (verify with `curl -I`, not just by reading `next.config.ts`).
- [ ] `Strict-Transport-Security` added only after HTTPS is confirmed
      (section 10).
- [ ] Rate limiting configured at the hosting/edge layer (section 11)
      before the email provider goes live.
- [ ] `EMAIL_PROVIDER_API_KEY` and `CONTACT_RECIPIENT_EMAIL` set only in
      Vercel's environment variable settings, never committed to the
      repository.
- [ ] No `.env`, `.env.local`, or `.env.production` file is ever committed
      (already enforced by `.gitignore`; re-verify after any local
      environment changes).
- [ ] `/api/enquiry` still does not exist (the enquiry flow is Server
      Actions only).

## 16. Launch checklist

- [ ] Production domain chosen and DNS configured (sections 6-7).
- [ ] HTTPS confirmed working (section 9).
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real production domain in Vercel.
- [ ] Sitemap and robots verified against the live domain (section 13).
- [ ] Email provider chosen, configured, and tested, if live enquiry
      delivery is required at launch (section 12); otherwise the form
      continues to fail safely, which is an acceptable launch state on its
      own.
- [ ] Rate limiting configured at the edge layer (section 11).
- [ ] HSTS added once HTTPS is confirmed stable (section 10).
- [ ] Security checklist above fully re-verified against the live URL.
- [ ] A rollback path (section 14) is understood before the first real
      traffic arrives.

## 17. Environment variable matrix

| Variable | Purpose | Local dev? | Preview? | Production? | Secret? | Where configured |
|---|---|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base URL used for canonical links, Open Graph, sitemap and robots | Optional (falls back to `http://localhost:3000`) | Recommended (set to the preview URL if available) | Required (set to the real production domain) | No (public, client-visible) | `.env.local` locally; Vercel project environment variables in production |
| `EMAIL_PROVIDER_API_KEY` | Authenticates with the eventual email provider | Not required until email is implemented | Not required until email is implemented | Required once live enquiry delivery is needed | Yes | Vercel project environment variables only; never in a tracked file |
| `CONTACT_RECIPIENT_EMAIL` | The verified mailbox that receives general enquiries | Not required until email is implemented | Not required until email is implemented | Required once live enquiry delivery is needed | Yes (treat as sensitive; not a technical secret, but should not be publicly listed) | Vercel project environment variables only; never in a tracked file |

No other environment variable is referenced anywhere in the application
(confirmed by a direct `process.env` search across `app/`, `components/`,
`data/`, and `lib/` in the Milestone 20 report). Do not add
`CAREERS_RECIPIENT_EMAIL` or `PARTNERSHIP_RECIPIENT_EMAIL` until the
application code actually reads them; neither currently does.
