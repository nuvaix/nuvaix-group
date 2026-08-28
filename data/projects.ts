export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image?: string;
  featured?: boolean;
}

/**
 * Empty until genuine, verified NUVAIX projects exist. Do not add
 * fictional entries to populate the design (docs/14-claude-code-build-
 * sequence.md, Milestone 9). CapabilityPreview on the homepage is built
 * to render real entries here automatically once they exist, and to show
 * a capability-led fallback while this stays empty.
 */
export const projects: Project[] = [];
