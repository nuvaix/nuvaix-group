import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { businesses } from "@/data/businesses";

/**
 * A directory-style divided list, not another card grid: the homepage
 * already uses cards for the business ecosystem, so this page composes
 * the same data (data/businesses.ts, nothing retyped) differently.
 */
export function BusinessStructure() {
  return (
    <Section tone="sapphire">
      <SectionHeading
        eyebrow="Business Structure"
        title={`${businesses.length} business divisions, one enterprise.`}
        description="NUVAIX GROUP is structured as a diversified enterprise, with each division operating under NUVAIX SOLUTIONS LTD."
      />

      <ul className="divide-border border-border mt-12 divide-y border-t">
        {businesses.map((business) => (
          <li key={business.slug}>
            <Link
              href={`/businesses/${business.slug}`}
              className="group hover:text-champagne-gold flex items-center justify-between gap-4 py-5 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
            >
              <span className="flex items-baseline gap-4">
                <span className="copy-caption text-subtle-foreground tabular-nums">
                  {business.number}
                </span>
                <span className="copy-body-lg font-medium">{business.name}</span>
              </span>
              <ArrowRightIcon
                size={18}
                aria-hidden="true"
                className="shrink-0 opacity-0 transition-opacity duration-(--duration-fast) ease-(--ease-standard) group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button href="/businesses" variant="outline">
          View All Businesses
        </Button>
      </div>
    </Section>
  );
}
