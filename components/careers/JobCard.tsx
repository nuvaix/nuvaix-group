import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { BusinessVisual } from "@/components/businesses/BusinessVisual";
import { businesses } from "@/data/businesses";
import type { Job } from "@/data/careers";

export interface JobCardProps {
  job: Job;
  size?: "default" | "large";
}

/**
 * The single reusable job card. No verified job photography exists (or
 * is ever likely to), so this always uses the related business
 * division's own BusinessVisual pattern via the job's verified
 * businessSlug relationship (Milestone 12, section 16: never generic
 * stock/office imagery), falling back to a neutral pattern when no
 * relationship is set. Only fields actually present on the job render:
 * no placeholder department, location or salary.
 */
export function JobCard({ job, size = "default" }: JobCardProps) {
  const isLarge = size === "large";
  const relatedBusiness = job.businessSlug
    ? businesses.find((item) => item.slug === job.businessSlug)
    : undefined;

  return (
    <Card
      href={`/careers/${job.slug}`}
      tone="interactive"
      media={
        <ImageFrame aspect={isLarge ? "landscape" : "square"} radius="none">
          <BusinessVisual pattern={relatedBusiness?.visualPattern ?? "grid"} />
        </ImageFrame>
      }
    >
      {job.department ? <p className="copy-caption text-subtle-foreground">{job.department}</p> : null}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h3 className={isLarge ? "heading-h3" : "heading-h4"}>{job.title}</h3>
        {job.status ? <PlannedStatusBadge status={job.status} /> : null}
      </div>
      <p className="copy-body-sm text-muted-foreground mt-2">{job.summary}</p>
      {job.location || job.employmentType ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {job.location ? <Badge variant="outline">{job.location}</Badge> : null}
          {job.employmentType ? <Badge variant="outline">{job.employmentType}</Badge> : null}
        </div>
      ) : null}
    </Card>
  );
}
