import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state, matching the established
 * pattern (LeadershipEmptyState, ProjectEmptyState, InsightsEmptyState,
 * CareersEmptyState): no fabricated partner names, logos, or
 * announcements, and no "coming soon" language. Renders while
 * data/partnerships.ts's partners array is empty.
 */
export function PartnershipsEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Partner Directory</p>
      <h2 className="heading-h3">No partners are listed here yet.</h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP will publish verified partnerships here as they are confirmed, with real
        partner details rather than placeholders.
      </p>
    </div>
  );
}
