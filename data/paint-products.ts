export interface PaintProductCategory {
  slug: string;
  name: string;
  /** Every category is "planned": the supplied proposal describes NUVAIX
   * Paint manufacturing in future/planned terms throughout, and no
   * category has been confirmed as currently in production. See
   * docs/17-architecture-plan.md, Paint Governance. */
  status: "planned" | "live";
}

/**
 * The 5 product categories supported by the proposal
 * (docs/11-content-source-of-truth.md). No pricing, specifications or
 * certifications: none have been supplied.
 */
export const paintProductCategories: PaintProductCategory[] = [
  { slug: "interior-emulsion", name: "Interior Emulsion Paint", status: "planned" },
  {
    slug: "exterior-weather-resistant",
    name: "Exterior Weather Resistant Paint",
    status: "planned",
  },
  { slug: "textured-decorative", name: "Textured & Decorative Paint", status: "planned" },
  { slug: "primers", name: "Primers", status: "planned" },
  { slug: "undercoats", name: "Undercoats", status: "planned" },
];

export interface PaintServiceCommitment {
  label: string;
}

/**
 * The planned service model described in the proposal (docs/11). Phrased
 * as what the initiative is built around, not as currently-active
 * services: do not present these as live without confirmation.
 */
export const paintServiceCommitments: PaintServiceCommitment[] = [
  { label: "Color consultation" },
  { label: "Technical product support" },
  { label: "Bulk and project supply" },
];
