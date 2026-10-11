import Link from "next/link";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { JobCard } from "./JobCard";
import type { Job } from "@/data/careers";

export interface JobGridProps {
  jobs: Job[];
}

/**
 * Editorial composition for the /careers directory, echoing ProjectGrid
 * and InsightGrid's "one large featured item plus a structured list"
 * pattern (Milestone 12, section 9: avoid a generic recruitment-board
 * appearance): the one role marked `featured` (data-driven, never
 * chosen to imply urgency) shown large, the remaining roles as a
 * compact list with department/status metadata. Falls back to an even
 * grid if no role is marked featured. Renders nothing today
 * (data/careers.ts is empty); ready the moment verified roles exist.
 */
export function JobGrid({ jobs }: JobGridProps) {
  const featured = jobs.find((job) => job.featured);
  const rest = featured ? jobs.filter((job) => job.slug !== featured.slug) : [];

  if (!featured) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <JobCard job={featured} size="large" />
      <ul className="divide-border divide-y">
        {rest.map((job, index) => (
          <li key={job.slug}>
            <Link
              href={`/careers/${job.slug}`}
              className="hover:bg-surface-hover -mx-2 flex items-center gap-4 rounded-md px-2 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg flex-1 font-medium">{job.title}</span>
              {job.status ? <PlannedStatusBadge status={job.status} className="shrink-0" /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
