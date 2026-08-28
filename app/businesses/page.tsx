import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRightIcon } from "@/components/icons";
import { businesses } from "@/data/businesses";

export const metadata: Metadata = { title: "Businesses" };

export default function BusinessesPage() {
  return (
    <Section tone="black" size="large">
      <SectionHeading
        as="h1"
        eyebrow="Businesses"
        title="Ten divisions, one diversified enterprise"
        description="NUVAIX GROUP operates across the following business divisions under NUVAIX SOLUTIONS LTD. Full division pages are scheduled for a later implementation milestone."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => (
          <Card key={business.slug} tone="interactive" href={`/businesses/${business.slug}`}>
            <p className="copy-caption text-subtle-foreground mb-3 tabular-nums">
              {business.number}
            </p>
            <h2 className="heading-h4 mb-2 flex items-start justify-between gap-2">
              {business.name}
              <ArrowRightIcon
                size={18}
                className="text-muted-foreground mt-1 shrink-0"
                aria-hidden="true"
              />
            </h2>
            <p className="copy-body-sm text-muted-foreground">{business.category}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
