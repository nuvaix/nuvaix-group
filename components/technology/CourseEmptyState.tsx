import { Divider } from "@/components/ui/Divider";

/**
 * A refined, purely typographic empty state, matching
 * components/about/LeadershipEmptyState.tsx's approach: no placeholder
 * course cards, which would read as broken content. Renders only while
 * data/training.ts's courses array is empty.
 */
export function CourseEmptyState() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Course Catalog</p>
      <h3 className="heading-h3">
        Individual course pages will appear here as they are confirmed.
      </h3>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP is developing a structured course catalog covering its technology training
        areas. Verified course details will be published as they become available.
      </p>
    </div>
  );
}
