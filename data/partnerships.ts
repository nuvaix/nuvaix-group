export interface Partner {
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  /** Only set once a specific partnership type is explicitly verified
   * ("Strategic Partner", "Technology Partner", etc. are not invented
   * categories to be applied by assumption; Milestone 13, Partnership
   * Type). */
  type?: string;
  category?: string;
  location?: string;
  /** The partner's own verified website. Never an invented domain
   * (Milestone 13, Partner Website Links). */
  website?: string;
  logo?: string;
  scope?: string[];
  capabilities?: string[];
  /** Slug of the related business division. Only set once a real
   * partnership verifiably relates to one; never inferred from a
   * plausible-sounding connection (Milestone 13, sections 15-17). */
  businessSlug?: string;
  /** Slugs of related partners. Only meaningful once 2+ real partner
   * records exist. */
  relatedSlugs?: string[];
  /** Marks the partner presented large in the editorial directory (see
   * components/partnerships/PartnerGrid.tsx). A website storytelling
   * decision, not a claim of precedence. */
  featured?: boolean;
  status?: "planned" | "live";
}

/**
 * Empty until genuine, verified NUVAIX partnerships exist (Milestone
 * 13, Path B: no verified partner records, logos, websites, or
 * announcements are currently available in
 * docs/11-content-source-of-truth.md or elsewhere). Do not add
 * fictional entries to populate the design. A logo existing under
 * public/assets/, a company name appearing in a proposal, or a
 * plausible business-division connection is not, on its own, evidence
 * of a partnership; see ASSET_REFERENCE.md for the governed status of
 * every supplied asset. The /partnerships directory
 * (components/partnerships/PartnerGrid.tsx) renders real entries
 * automatically once they exist here, and shows an intentional empty
 * state while this stays empty. /partnerships/[slug] is intentionally
 * not implemented: no verified partner records exist to justify it
 * (Path A), and the project's own architecture plan never listed a
 * partnerships detail route in the first place.
 */
export const partners: Partner[] = [];
