import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state, matching the established
 * pattern (LeadershipEmptyState, CourseEmptyState, CareersEmptyState,
 * InsightsEmptyState): no fabricated project cards, images or outcomes,
 * and no "coming soon" or launch-date language. Renders while
 * data/projects.ts's projects array is empty (Milestone 10, Path B).
 */
export function ProjectEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Project Directory</p>
      <h2 className="heading-h3">No projects are published here yet.</h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP will publish verified projects here as they are completed and confirmed for
        publication, with real project details and imagery rather than placeholders.
      </p>
    </div>
  );
}
