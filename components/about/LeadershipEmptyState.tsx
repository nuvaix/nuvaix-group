import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state: no placeholder avatar
 * grids or "coming soon" cards, which would read as broken content.
 * Renders only while data/leadership.ts is empty.
 */
export function LeadershipEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Leadership Profiles</p>
      <h2 className="heading-h3">
        Leadership information will be presented here as the corporate profile is expanded.
      </h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP will publish verified leadership names, titles and roles as they are confirmed
        for public release.
      </p>
    </div>
  );
}
