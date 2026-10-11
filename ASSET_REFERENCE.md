# NUVAIX Asset Reference Kit

This folder is intended to be copied into the NUVAIX website project
for Claude Code and VS Code reference.

## Important asset governance

The files in this kit are supplied source/reference assets. Do not
assume that every Paint mockup is final commercial artwork unless the
source material explicitly confirms it.

Do not redraw or recreate the NUVAIX logo when an supplied logo asset
can be used.

Do not invent product specifications, pricing, certifications,
production claims, locations, capacity, clients, partnerships, or
other unsupported facts.

## Status taxonomy

Every asset below is classified as one of:

- **APPROVED** cleared for direct integration into the live site as-is.
- **REFERENCE** genuine brand material, useful for design guidance, but
  not itself dropped onto a page (a mood board, a distilled proposal,
  a competitor sample).
- **PROPOSED** a design concept or mockup that has not been confirmed
  as final production artwork.
- **PLACEHOLDER** stock/template filler with no NUVAIX brand content.
- **UNKNOWN** status not established by any source material; treated
  as not cleared for use until confirmed.

## Structure

public/assets/
├── brand/
│ ├── logo/ NUVAIX logo source files supplied in this conversation
│ ├── icons/ Reserved for approved brand icon assets
│ └── guidelines/ Reserved for approved brand guidelines
├── paint/
│ ├── branding/ Reserved for approved NUVAIX Paint brand assets
│ ├── packaging/ Reserved for final approved packaging artwork
│ ├── products/ Paint visual references and product imagery
│ ├── colors/ Reserved for approved color assets
│ └── proposal/ NUVAIX Paint proposal source document
├── corporate/ Reserved for approved corporate imagery
├── technology/ Reserved for approved technology imagery
└── shared/ Reserved for approved shared website imagery

## Brand / Logo (public/assets/brand/logo/)

All five files are raster PNG only; no SVG/vector source has been
supplied. All five are opaque squares (or, for logo_purpose, an opaque
rectangle): despite being encoded with a PNG alpha channel, pixel
sampling at each file's corners, edge midpoints and center returned
Alpha=255 (fully opaque) everywhere, with the field outside the badge
sampling as solid black (R=0 G=0 B=0). None of them are a
transparent cutout. Practically: they render cleanly only on
near-black surfaces. The site's `--color-background` token is Deep
Black (#030507), close enough to the files' pure #000000 field that
the seam is imperceptible at normal display sizes, which is why every
current integration below places the mark only on `bg-background` /
`Section tone="black"` surfaces. None of them would look right on the
sapphire or off-white tones as supplied; a transparent or dedicated
light-background export would be needed first.

### Role mapping

Mapped against the standard logo-role vocabulary (primary, light, dark,
horizontal, alternate, lockup, with brand line, mark/symbol). Stated
plainly rather than guessed where a role has no match:

- **Primary logo:** `Logo_whs4(3).png`. Chosen as primary because it is
  the cleanest badge (no GROUP/tagline clutter) with the most legible
  ring at small size, but this is this project's working choice
  between two near-identical files, not a source-confirmed "the"
  primary. `Logo_whs2(8).png` is functionally the same candidate with
  a thinner ring; the two are visually similar and are documented as
  such rather than being assigned different meanings.
- **Dark logo:** all five files, since every one of them is built for
  a dark/black field.
- **Light logo:** none supplied. No file has a transparent or
  light-surface-safe background.
- **Horizontal logo:** none supplied. Every file is square/circular.
- **Alternate logo:** `Logo_whs2(8).png` (thinner ring, same content as
  the primary) and `Logo_whs3(3).png` (reads "NUVAIX HQ", excluded
  from site use, see below).
- **Lockup / with brand line:** `Logo_whs(6).png` is the only file
  with the full "NUVAIX" + "GROUP" + tagline lockup.
- **Mark/symbol alone (no wordmark text):** none supplied. All five
  files bake the full "NUVAIX" wordmark text into the artwork; there
  is no isolated "N" symbol file.
- **Reference sheet (not a usable logo file):** `logo_purpose(6).png`.

No file supplies a wide/horizontal lockup. All five are square or
near-square (badge/emblem format). If a slim horizontal wordmark is
ever needed (for a very short header bar, an email signature, a
favicon-adjacent use, etc.), that export does not exist yet.

| File | Dimensions | Alpha | Content | Status | Notes |
|---|---|---|---|---|---|
| `logo_purpose(6).png` | 1536x1024 (1.5:1) | Encoded, but opaque | Multi-panel brand mood board: the logo composited onto 8 background treatments (matte black, midnight gradient, brushed metal, pure black, office wall, light/letterhead, gold foil, fabric), plus an explicit brand color palette panel (Midnight Sapphire, Titanium Silver, Champagne Gold) matching this project's design tokens exactly. | REFERENCE | Not a usable web asset itself (it is a presentation sheet, not an isolated logo). Confirms the site's existing color tokens are correct. Not wired into any component. |
| `Logo_whs(6).png` | 1254x1254 (1:1) | Encoded, but opaque | Circular badge: black field, gold ring, angular blue/silver "N" mark, "NUVAIX" wordmark, "GROUP" subtext, "INNOVATE • BUILD • DELIVER • GROW" tagline. The fullest variant. | APPROVED (for use as the "full" Logo variant) | Wired in as `Logo` variant `"full"`, used in the Footer. Too much fine text to stay legible at header scale. |
| `Logo_whs2(8).png` | 1254x1254 (1:1) | Encoded, but opaque | Same badge, "N" mark + "NUVAIX" wordmark only (no GROUP, no tagline), thinner gold ring. | REFERENCE (alternate) | Legible at small sizes. Kept as an available alternate to whs4 below; not currently wired into a component. Swap in `Logo.tsx` if a thinner ring is preferred. |
| `Logo_whs3(3).png` | 1254x1254 (1:1) | Encoded, but opaque | Same badge, but reads "NUVAIX HQ" instead of "NUVAIX GROUP". | UNKNOWN / excluded | Text does not match the established brand name. Likely an internal/signage variant. Not wired into any component; do not use on the public site without explicit confirmation of its intended purpose. |
| `Logo_whs4(3).png` | 1254x1254 (1:1) | Encoded, but opaque | Same badge, "N" mark + "NUVAIX" wordmark only, thicker/more prominent gold ring than whs2. | APPROVED (for use as the "mark" Logo variant) | Wired in as `Logo` variant `"mark"` (the default), used in the Header and mobile navigation drawer. Chosen over whs2 for slightly better legibility at small header size; this is a judgment call between two very similar files, not a source-confirmed "the" chosen variant, flagged here for visibility. |

## NUVAIX Paint (public/assets/paint/)

| File | Dimensions | Alpha | Content | Status | Notes |
|---|---|---|---|---|---|
| `BUSINESS PROPOSAL FOR NUVAIX PAINT(1).docx` | 24 KB | n/a | The Paint business proposal document. | REFERENCE | Source document. Already distilled into docs/11-content-source-of-truth.md during Milestone 0; not re-parsed or duplicated here per the instruction not to duplicate proposal contents. |
| `a_clean_studio_product_shot_on_a_dark_navy_blue_gr.png` | 1254x1254 (1:1) | No alpha (opaque) | A polished, photorealistic 3D-rendered bucket mockup, clearly NUVAIX-branded: "NUVAIX PAINT / PREMIUM QUALITY PAINTS / INNOVATE • PROTECT • BEAUTIFY", "INTERIOR EMULSION PAINT / PREMIUM FINISH / 20L NET CONTENT", angular navy/silver/gold "N" mark. | PROPOSED (unchanged) | The only one of the three Paint product images that is actually NUVAIX-branded. It reads as a CGI/AI-rendered concept render, not a photograph of manufactured packaging, and no packaging specification, certification or pricing has been confirmed. As of Milestone 8, wired into `data/paint-products.ts` on the `interior-emulsion` category only (its own label reads "Interior Emulsion Paint," so this is the one category the artwork actually depicts), and rendered on `/paint`, `/paint/products`, `/paint/products/interior-emulsion` and the homepage feature it already appeared on. Every place it renders carries a visible "Concept render. Proposed packaging design, not final commercial artwork." caption. Being used on the site does not change its status: still PROPOSED, not APPROVED, per Milestone 8 section 27. The "20L NET CONTENT" and other spec-like text baked into the artwork is part of the unconfirmed concept design, not a verified product specification, and is not represented anywhere in the data model as a fact. Also note: the "N" mark on this render is a different, angular treatment than the circular badge in `brand/logo/`, and no isolated source file for this angular mark has been supplied, so it exists only baked into this one composite image; it has not been extracted or used as a standalone mark anywhere. |
| `2f1330f8-884f-4950-8a87-847f339c6db9.png` | 554x554 (1:1) | No alpha (opaque) | A generic stock bucket mockup template with scrambled/placeholder label text ("PAST AINT BUCKET MOCKUP", garbled body copy) and a partial stock-site watermark. Not NUVAIX-branded at all. | PLACEHOLDER (unchanged) | Not usable on the site in its current form. As of Milestone 8, confirmed still not wired into any component or page; never displayed as NUVAIX product material. |
| `cd4ac223-3ca5-40f8-b3ca-3645453a1208.png` | 554x554 (1:1) | No alpha (opaque) | A real but unrelated product photo for a different brand ("Sha Coat Interior Cement Primer"). Not NUVAIX-branded. | PLACEHOLDER (unchanged) | Likely a competitive/inspiration reference, not NUVAIX material. As of Milestone 8, confirmed still not wired into any component or page; never displayed as NUVAIX product material. |

Per the existing Paint governance already established in
docs/11-content-source-of-truth.md and reconfirmed here: none of the
three Paint product images are confirmed, final, commercially
available packaging. As of Milestone 8, the NUVAIX Paint website
experience (`/paint`, `/paint/products`, `/paint/products/[slug]`,
`/paint/colors`, `/paint/bulk-orders`) is built. The one on-brand
render is used as a labeled concept visual, never as confirmed product
photography; the other two Paint images remain unused. No pricing,
volume, coverage, drying time, finish, certification, factory,
delivery, warranty or stock-availability claim has been added anywhere
in this milestone; every product category's `status` remains
`"planned"`.

## Image architecture notes

`components/ui/ImageFrame.tsx` needed no changes. It is a plain
aspect-ratio/radius/overlay wrapper around whatever fills it via
`IMAGE_FILL_CLASSNAME`, and is already `next/image`-compatible: a
`fill`-mode `<Image>` using that class name drops straight in. All
three Paint product images are 1:1, which maps directly to
`ImageFrame`'s existing `aspect="square"`. No aspect ratio, radius or
overlay variant needed adding for any asset inspected in this pass.

The new `components/layout/Logo.tsx` component (not an `ImageFrame`
consumer, since it is a small fixed-size brand mark, not a cropped
photo) uses `next/image` directly with explicit `width`/`height`
(1254x1254 for both wired sources) and a `sizes`-free fixed CSS box,
which is correct for a small non-fluid image. No `next.config.ts`
changes were required since these are local files under `public/`.

## Claude Code instruction

Inspect these assets before using them. Preserve originals. Prefer
SVG/vector assets if approved vector versions are supplied later.
Treat the Paint proposal and mockups as source/reference material
until final approval is established.

Do not modify this asset library merely to make a page look fuller.
