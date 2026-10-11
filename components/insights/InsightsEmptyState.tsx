import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state, matching the established
 * pattern (LeadershipEmptyState, CourseEmptyState, ProjectEmptyState):
 * no fabricated article titles, dates, authors or categories, and no
 * fake blog archive. The category scope itself is shown once, as
 * badges, in components/insights/InsightsIntro.tsx; this component does
 * not restate it, to avoid duplicate wording (Milestone 11, Content
 * Quality). Renders while data/insights.ts's articles array is empty.
 */
export function InsightsEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Article Archive</p>
      <h2 className="heading-h3">No articles are published here yet.</h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP will publish verified articles here as they become available, with real
        authorship and detail rather than placeholders.
      </p>
    </div>
  );
}
