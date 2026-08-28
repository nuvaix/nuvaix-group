import { Badge } from "./Badge";
import { CheckIcon } from "@/components/icons";

export type ContentStatus = "planned" | "live";

export interface PlannedStatusBadgeProps {
  status: ContentStatus;
  className?: string;
}

const STATUS_LABEL: Record<ContentStatus, string> = {
  planned: "Planned",
  live: "Live",
};

/**
 * The single, reusable indicator for whether an offering is confirmed and
 * operational versus planned/future. This exists so no page ever has to
 * hand-write that distinction in copy, most importantly for NUVAIX Paint
 * (see docs/17-architecture-plan.md, Paint Governance). "live" reads as a
 * success signal (confirmed, operational) rather than a gold/accent one,
 * which is reserved for premium/featured emphasis, not operational status.
 * Only renders the status word itself, never an additional claim.
 */
export function PlannedStatusBadge({ status, className }: PlannedStatusBadgeProps) {
  return (
    <Badge variant={status === "live" ? "success" : "outline"} className={className}>
      {status === "live" ? <CheckIcon size={14} /> : null}
      {STATUS_LABEL[status]}
    </Badge>
  );
}
