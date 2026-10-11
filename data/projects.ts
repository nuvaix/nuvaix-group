export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  /** "planned" for a project in progress or awaiting confirmation,
   * "live" for a confirmed, completed project. Mirrors the status
   * mechanism used by PlannedStatusBadge elsewhere on the site. */
  status?: "planned" | "live";
  description: string;
  image?: string;
  /** Slug of the related business division. Only set once a real
   * project verifiably belongs to one; never inferred (Milestone 10,
   * Business Relationship). Powers the business-relationship link on
   * the project detail template once that route exists (Path A). */
  businessSlug?: string;
  /** Slugs of related projects. Only meaningful once 2+ real projects
   * exist; the detail template omits the related-projects section
   * below that (Milestone 10, Related Projects). */
  relatedSlugs?: string[];
  /** Marks the project presented large in the editorial directory (see
   * components/projects/ProjectGrid.tsx). A website storytelling
   * decision, not a claim of precedence. */
  featured?: boolean;
}

/**
 * Empty until genuine, verified NUVAIX projects exist (Milestone 10,
 * Path B: no verified project records are currently available, and no
 * project imagery exists anywhere under public/assets/). Do not add
 * fictional entries to populate the design. CapabilityPreview on the
 * homepage and the /projects directory (components/projects/
 * ProjectGrid.tsx) both render real entries automatically once they
 * exist here, and show an intentional capability-led / editorial empty
 * state while this stays empty. /projects/[slug] is intentionally not
 * implemented yet: Milestone 10 gates the dynamic detail route on
 * verified project records actually existing (Path A).
 */
export const projects: Project[] = [];
