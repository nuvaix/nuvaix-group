import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { businesses, type BusinessDivision } from "@/data/businesses";

export interface RelatedBusinessesProps {
  business: BusinessDivision;
}

/**
 * A website navigation relationship only, not a claim of formal
 * corporate partnership between divisions. Resolves relatedSlugs
 * against the single businesses array; nothing is duplicated.
 */
export function RelatedBusinesses({ business }: RelatedBusinessesProps) {
  const related = business.relatedSlugs
    .map((slug) => businesses.find((item) => item.slug === slug))
    .filter((item): item is BusinessDivision => Boolean(item));

  if (related.length === 0) {
    return null;
  }

  return (
    <Section tone="black">
      <SectionHeading eyebrow="Related Businesses" title="Explore related divisions." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Card key={item.slug} tone="interactive" href={`/businesses/${item.slug}`}>
            <p className="copy-caption text-subtle-foreground tabular-nums">{item.number}</p>
            <h3 className="heading-h4 mt-2">{item.name}</h3>
            <p className="copy-body-sm text-muted-foreground mt-1">{item.category}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
