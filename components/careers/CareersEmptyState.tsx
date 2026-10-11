import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state, matching the established
 * pattern (LeadershipEmptyState, CourseEmptyState): no fabricated open
 * roles, benefits or hiring claims. Renders while no verified open roles
 * exist (Milestone 9, Careers).
 */
export function CareersEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Open Roles</p>
      <h2 className="heading-h3">No open roles are listed at this time.</h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP will publish verified open roles here as they become available. General
        enquiries about opportunities at NUVAIX GROUP are welcome in the meantime.
      </p>
    </div>
  );
}
