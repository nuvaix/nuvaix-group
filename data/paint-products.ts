export interface PaintProductCategory {
  slug: string;
  name: string;
  /** Every category is "planned": the supplied proposal describes NUVAIX
   * Paint manufacturing in future/planned terms throughout, and no
   * category has been confirmed as currently in production. See
   * docs/17-architecture-plan.md, Paint Governance. */
  status: "planned" | "live";
  /** A short, non-fabricated restatement of what the category name itself
   * denotes. Never adds a new claim (finish, coverage, volume, price):
   * those stay unset until verified. */
  shortDescription?: string;
  /** Longer-form description, populated only once real verified detail
   * exists beyond the category name and shortDescription. */
  description?: string;
  /** Marks the one category presented large in the editorial product
   * grid (see components/paint/PaintProductGrid.tsx), matching the
   * data-driven `featured` pattern already used in data/technology.ts.
   * A website storytelling decision, not a claim of precedence. */
  featured?: boolean;
  /** The supplied NUVAIX Paint concept render, set only for the one
   * category the artwork actually depicts (its own label reads
   * "Interior Emulsion Paint"; see ASSET_REFERENCE.md). Left undefined
   * for every other category so the page falls back to an abstract
   * PaintVisual instead of reusing an unrelated image. The render is a
   * PROPOSED concept, not confirmed packaging; every place it is used
   * carries a visible caption saying so. */
  conceptImage?: { src: string; alt: string };
}

/**
 * The 5 product categories supported by the proposal
 * (docs/11-content-source-of-truth.md). No pricing, specifications or
 * certifications: none have been supplied.
 */
export const paintProductCategories: PaintProductCategory[] = [
  {
    slug: "interior-emulsion",
    name: "Interior Emulsion Paint",
    status: "planned",
    shortDescription: "Emulsion paint for interior walls and ceilings.",
    featured: true,
    conceptImage: {
      src: "/assets/paint/products/a_clean_studio_product_shot_on_a_dark_navy_blue_gr.png",
      alt: "Concept render of a NUVAIX Paint Interior Emulsion Paint bucket. Proposed packaging design, not final commercial artwork.",
    },
  },
  {
    slug: "exterior-weather-resistant",
    name: "Exterior Weather Resistant Paint",
    status: "planned",
    shortDescription: "Exterior paint designed to resist weather exposure.",
  },
  {
    slug: "textured-decorative",
    name: "Textured & Decorative Paint",
    status: "planned",
    shortDescription: "Textured and decorative finishes for feature surfaces.",
  },
  {
    slug: "primers",
    name: "Primers",
    status: "planned",
    shortDescription: "Preparatory primer coatings applied before a topcoat.",
  },
  {
    slug: "undercoats",
    name: "Undercoats",
    status: "planned",
    shortDescription: "Undercoat formulated to prepare surfaces before finishing.",
  },
];

export interface PaintServiceCommitment {
  label: string;
}

/**
 * The abbreviated 3-item service teaser used by the homepage's compact
 * PaintFeature card (components/home/PaintFeature.tsx). Left unchanged so
 * that component keeps working untouched (Milestone 8, Homepage
 * Integration). See paintServices below for the complete verified list.
 */
export const paintServiceCommitments: PaintServiceCommitment[] = [
  { label: "Color consultation" },
  { label: "Technical product support" },
  { label: "Bulk and project supply" },
];

/**
 * The complete planned service model described in the proposal
 * (docs/11-content-source-of-truth.md), shown in full on the /paint and
 * /paint/bulk-orders pages, where there is room for it. Phrased as
 * planned, not live: see Paint Governance in docs/17-architecture-plan.md.
 */
export const paintServices: PaintServiceCommitment[] = [
  { label: "Online product ordering" },
  { label: "Nationwide delivery" },
  { label: "Color consultation" },
  { label: "Technical product support" },
  { label: "Product usage guidance" },
  { label: "After-sales support" },
  { label: "Bulk supply" },
  { label: "Corporate/government project supply" },
];
