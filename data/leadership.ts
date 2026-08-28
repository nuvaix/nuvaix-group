export interface LeadershipProfile {
  slug: string;
  name: string;
  /** Public professional title only. Never a private address, date of
   * birth or personal contact detail (docs/11-content-source-of-truth.md). */
  title: string;
  photo?: string;
}

/**
 * Empty until verified public leadership titles are confirmed (see
 * docs/17-architecture-plan.md, open question). LeadershipPreview must
 * render a graceful empty state rather than inventing profiles.
 */
export const leadership: LeadershipProfile[] = [];
