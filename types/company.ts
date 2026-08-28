/**
 * Verified NUVAIX corporate identity.
 *
 * Every field here must be traceable to docs/11-content-source-of-truth.md
 * or CLAUDE.md. Do not add fields for facts that have not been supplied
 * and verified (see docs/17-architecture-plan.md, Content Governance).
 */
export interface ValuePillar {
  /** One word of the core brand line, e.g. "Innovate". */
  word: string;
  /** Short description of that pillar, approved alongside the brand line. */
  description: string;
  /** Longer editorial gloss for /about/values. Interpretive, not a new
   * factual claim: no statistics, dates or achievements. */
  meaning: string;
  /** How the pillar shows up across the business, in general terms only. */
  application: string;
}

export interface CompanyIdentity {
  /** Public-facing brand name. */
  brandName: string;
  /** Registered legal entity name. */
  legalName: string;
  /** Corporate Affairs Commission registration number. */
  rcNumber: string;
  /** The fixed core brand line used across the site. */
  brandLine: string;
  /** The core brand line's supporting hero language, one line per stage. */
  heroLines: string[];
  /** The core brand line broken into its four named pillars. */
  valuePillars: ValuePillar[];
}
