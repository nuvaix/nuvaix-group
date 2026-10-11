import Link from "next/link";
import { PartnerCard } from "./PartnerCard";
import type { Partner } from "@/data/partnerships";

export interface PartnerGridProps {
  partners: Partner[];
}

/**
 * Editorial composition for the /partnerships directory, echoing
 * ProjectGrid, InsightGrid and JobGrid's "one large featured item plus
 * a structured list" pattern (Milestone 13, section 11: avoid a
 * generic logo wall or sponsor-wall appearance): the one partner
 * marked `featured` (data-driven, never chosen to imply precedence)
 * shown large, the remaining partners as a compact list. Falls back to
 * an even grid if no partner is marked featured. Renders nothing today
 * (data/partnerships.ts is empty); ready the moment verified partner
 * records exist.
 */
export function PartnerGrid({ partners }: PartnerGridProps) {
  const featured = partners.find((partner) => partner.featured);
  const rest = featured ? partners.filter((partner) => partner.slug !== featured.slug) : [];

  if (!featured) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <PartnerCard key={partner.slug} partner={partner} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <PartnerCard partner={featured} size="large" />
      <ul className="divide-border divide-y">
        {rest.map((partner, index) => (
          <li key={partner.slug}>
            <Link
              href={`/partnerships/${partner.slug}`}
              className="hover:bg-surface-hover -mx-2 flex items-center gap-4 rounded-md px-2 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg flex-1 font-medium">{partner.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
