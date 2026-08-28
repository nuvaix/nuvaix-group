/**
 * Verified NUVAIX corporate identity.
 *
 * Every field here must be traceable to docs/11-content-source-of-truth.md
 * or CLAUDE.md. Do not add fields for facts that have not been supplied
 * and verified (see docs/17-architecture-plan.md, Content Governance).
 */
export interface CompanyIdentity {
  /** Public-facing brand name. */
  brandName: string;
  /** Registered legal entity name. */
  legalName: string;
  /** Corporate Affairs Commission registration number. */
  rcNumber: string;
  /** The fixed core brand line used across the site. */
  brandLine: string;
}
