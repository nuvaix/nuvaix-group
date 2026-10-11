export interface Job {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  department?: string;
  location?: string;
  employmentType?: string;
  experience?: string;
  responsibilities?: string[];
  requirements?: string[];
  /** Only set once specific, verified benefits are confirmed for public
   * listing. Never inferred from general brand or values language
   * (Milestone 12, Careers and Corporate Values). */
  benefits?: string[];
  applicationInstructions?: string;
  /** Only set once a real, approved application destination is
   * confirmed. docs/17-architecture-plan.md lists CAREERS_RECIPIENT_EMAIL
   * as an unset, deferred environment variable; no address is invented
   * here. */
  applicationEmail?: string;
  publishedAt?: string;
  closingDate?: string;
  /** "planned" for a role not yet open for applications, "live" for a
   * confirmed, currently open role. Mirrors the status mechanism used
   * by PlannedStatusBadge elsewhere on the site. */
  status?: "planned" | "live";
  /** Slug of the related business division. Only set once a real role
   * verifiably belongs to one; never inferred (Milestone 12, Careers
   * and Business Divisions). */
  businessSlug?: string;
  /** Slugs of related roles. Only meaningful once 2+ real roles exist. */
  relatedSlugs?: string[];
  /** Marks the role presented large in the editorial directory (see
   * components/careers/JobGrid.tsx). A website storytelling decision,
   * not a claim of precedence. */
  featured?: boolean;
}

/**
 * Empty until genuine, verified NUVAIX job openings exist (Milestone
 * 12, Path B: no verified job records are currently available in
 * docs/11-content-source-of-truth.md or elsewhere; docs/17-architecture
 * -plan.md explicitly lists career volume and the resume retention
 * policy as unresolved). Do not add fictional entries to populate the
 * design. The /careers directory (components/careers/JobGrid.tsx)
 * renders real entries automatically once they exist here, and shows
 * an intentional empty state while this stays empty. /careers/[slug]
 * is intentionally not implemented yet: Milestone 12 gates the dynamic
 * detail route on verified jobs actually existing (Path A). No
 * application backend, resume upload or applicant data collection is
 * implemented here; that is explicitly deferred to a later milestone.
 */
export const jobs: Job[] = [];
