# Design System Reference (Milestone 2)

Implementation-level record of the NUVAIX design system built in Milestone 2, per
`docs/04-design-system.md` (brand direction) and `docs/05-component-system.md` (component
inventory). This document records the concrete decisions; the live reference is
`/design-system`.

## Token architecture

All tokens live in `app/globals.css`. Colors, typography, radius, shadow, container widths and
spacing are defined in a single `@theme` block so Tailwind generates matching utility classes
directly from them (for example `--color-champagne-gold` produces `bg-champagne-gold`,
`text-champagne-gold`, `border-champagne-gold`). Transition durations, easing curves and z-index
layers are plain `:root` custom properties, consumed via Tailwind's `util-(--var)` arbitrary-value
syntax, since they do not need their own utility class family.

### Color

The 5 brand colors (Midnight Sapphire, Titanium Silver, Champagne Gold, Deep Black, Off White) are
the only color literals in the codebase. Every semantic color is derived from them, either by
direct reference or `color-mix()`:

| Semantic token              | Derived from                                                  |
| --------------------------- | ------------------------------------------------------------- |
| `background`                | Deep Black                                                    |
| `background-elevated`       | Midnight Sapphire (the alternating dark-section tone)         |
| `surface` / `surface-hover` | Midnight Sapphire mixed with Titanium Silver (85/15, 75/25)   |
| `foreground`                | Off White                                                     |
| `muted-foreground`          | Titanium Silver                                               |
| `subtle-foreground`         | Titanium Silver mixed with Deep Black (55/45)                 |
| `border` / `border-hover`   | Titanium Silver at 28% / 46% over transparent                 |
| `accent` / `accent-hover`   | Champagne Gold / Champagne Gold mixed with Deep Black (85/15) |
| `focus-ring`                | Champagne Gold                                                |

`surface` is intentionally lighter than `background-elevated` even though both derive from
Midnight Sapphire: a card needs to read as elevated whether it sits on a black section or a
sapphire one, so it cannot share a value with the sapphire section tone itself.

`success`, `warning` and `error` are the one deliberate exception: desaturated, brand-adjacent
hues (`#3E7C5A`, `#C68A3D`, `#B24B3C`) rather than derivations of the 5 brand colors, because
system feedback needs to be unambiguous. They are tuned to sit quietly next to the palette rather
than reading as generic UI-kit red/amber/green.

### Typography

13 named styles (display, h1, h2, h3, h4, body-lg, body, body-sm, caption, eyebrow, metadata, nav,
button), each a `--text-*` size/line-height pair in `@theme`. Weight, letter-spacing and transform
are fixed per style via `.heading-*`, `.copy-*` and `.label-*` helper classes in `@layer
components`, so a style is only ever defined once and every use stays in sync. Display/H1/H2 use
`clamp()` for fluid scaling between mobile and 1600px+ desktops; smaller sizes are fixed, since
fluid scaling mainly matters where mobile-vs-wide-desktop values genuinely diverge.

No font family has been approved. `--font-sans` is a system-font stack; changing it (plus
`--font-display` if a display face is later approved) is the only step needed to introduce a
production typeface, since every component consumes the family via the token, never a hard-coded
name.

### Spacing and containers

Six spacing tiers, micro (0.5rem) through page (a fluid `clamp()` up to 10rem), cover everything
from icon gaps to hero-level section breathing room. Container widths (`narrow` / `standard` /
`wide` / `full`) are exposed through `PageContainer`'s `width` prop and `Section`'s pass-through
`width` prop.

## Component architecture

- `components/layout`: `PageContainer`, `Section`, `SectionHeading` (all Server Components).
- `components/ui`: `Button`, `IconButton`, `Card`, `Badge`, `PlannedStatusBadge`, `Divider`,
  `ImageFrame` (Server Components); `Accordion`, `Tabs`, `Dialog`, `Toast` + `ToastProvider`
  (Client Components, the only ones in the system: each needs real interactive state).
- `components/ui/form`: `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Label`,
  `FieldDescription`, `FieldError`, `Field`. All Server Components: every control is a native HTML
  element styled with CSS, with no client JS needed for hover/focus/checked/disabled states.
- `components/icons`: inline SVG only, no icon library. `ChevronDownIcon` was added this milestone
  (used by `Select` and `Accordion`); no icon was added speculatively.

### Key decisions

- **Button variants**: `primary` (sapphire surface, gold edge, the general default) is distinct
  from `gold` (solid gold fill, reserved for a single primary CTA per page) so the site cannot
  drift into excessive gold. `secondary`/`outline`/`ghost` are three deliberately different
  silver-family intensities; `dark`/`light` exist for placing a button on the opposite-toned
  section. `loading` is presentation-only (spinner + disabled/aria-busy); no async logic lives in
  Button.
- **Card**: radius and padding are uniform across every `tone` on purpose, so "premium" reads
  through material (border + shadow together) rather than a different shape. An image is a `media`
  slot, not a sixth tone, so any tone can carry one.
- **Badge vs. PlannedStatusBadge**: Badge's variants are purely visual (`default`, `subtle`,
  `outline`, `accent`, `success`, `warning`, `error`). Operational status (planned/live) is never a
  Badge variant; it stays exclusively in `PlannedStatusBadge`, which now maps "live" to the
  `success` variant (an operational confirmation) rather than `accent`/gold (reserved for
  premium/featured emphasis).
- **Dialog**: built on the native `<dialog>` element via `showModal()`, not a hand-rolled
  implementation. Focus trapping, Escape-to-close and focus restoration are native browser
  behavior. `open` is never set as a plain attribute (that would produce a non-modal dialog with no
  backdrop or focus trap); the component always drives it imperatively.
- **Accordion**: height animates via a CSS `grid-template-rows: 0fr -> 1fr` transition rather than
  JS height measurement. Closed panels are additionally marked `inert` so they cannot receive
  keyboard focus while visually collapsed, alongside `aria-hidden`.
- **Toast**: `ToastProvider` is mounted once in `app/layout.tsx` so `useToast()` is callable from
  anywhere once a real submission exists. It is not connected to any backend; queueing and
  auto-dismiss are the only logic it has.

## Motion conventions

No animation package is installed. Every convention below is CSS only:

| Convention                   | Mechanism                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hover                        | `transition-colors` at `--duration-fast` / `--ease-standard`                                                                                                     |
| Accordion open/close         | CSS grid-template-rows transition at `--duration-base`                                                                                                           |
| Dialog entrance              | `@starting-style` fade + `scale` at `--duration-base` (exit is instant, by design, to avoid the more fragile `allow-discrete` exit choreography)                 |
| Fade / reveal / subtle slide | Not yet used by any built page; the same `--duration-*` / `--ease-*` tokens are the intended mechanism whenever a future milestone adds scroll-triggered reveals |

All of it is covered by the single global `prefers-reduced-motion` rule in `globals.css`, which now
also covers `::backdrop` (native dialogs) alongside every element and pseudo-element.

## Image treatment

One primitive, `ImageFrame` (aspect ratio + radius + overlay), composes with `Section`
(`container={false}` for full-bleed) and `Card` (`media` prop) to cover every treatment named in
the brief (standard, full-bleed, image card, editorial, hero, overlay) without six separate
components. No photography exists yet; `ImageFrame` renders an empty, brand-toned placeholder until
real images are supplied.

## What is deliberately not here yet

Navigation, mega menu, and every business/Paint/Technology/Training/Projects/Insights/Careers/
Partnerships/Contact page are out of scope for this milestone. Form primitives have no submission,
validation, or server logic. Toast has no backend connection. These are picked up in later
milestones per `docs/14-claude-code-build-sequence.md`.
