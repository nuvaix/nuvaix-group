import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";
import { businesses, type BusinessDivision } from "@/data/businesses";

export interface BusinessOverviewProps {
  business: BusinessDivision;
}

/** A concise, honest overview: no invented history, offices or
 * statistics, just the division's verified place in the Group. */
export function BusinessOverview({ business }: BusinessOverviewProps) {
  return (
    <Section tone="black">
      <p className="label-eyebrow mb-4 text-champagne-gold">Overview</p>
      <p className="heading-h3 max-w-3xl">
        {business.name} is one of NUVAIX GROUP&apos;s {businesses.length} business divisions,
        operating under {company.legalName}.
      </p>
      <p className="copy-body-lg text-muted-foreground mt-4 max-w-2xl">{business.category}.</p>
    </Section>
  );
}
