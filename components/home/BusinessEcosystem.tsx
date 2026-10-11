import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ArrowRightIcon } from "@/components/icons";
import { businesses } from "@/data/businesses";

const featured = businesses.find((business) => business.featured);
const secondaryDivisions = businesses.filter((business) => !business.featured);

/**
 * Structured hierarchy, not eleven identical cards: Technology and Paint
 * get a large featured treatment, the remaining nine divisions sit in a
 * tighter secondary grid. All business data comes from data/businesses.ts,
 * nothing here is retyped.
 *
 * tone="sapphire" (not "black"): this section follows HomeIntro's own
 * sapphire tone, pairing "Who We Are" with "what we're built across" as
 * one identity/structure introduction, before the two immersive black
 * GeometricField sections (Technology, Paint) that follow. Without this,
 * BusinessEcosystem/TechnologyFeature/PaintFeature ran three sections of
 * flat black in a row (see homepage rhythm audit). Card surfaces use
 * --color-surface, which is deliberately built to stay legible on either
 * a black or a sapphire section (see app/globals.css), so this change is
 * purely a section-background swap, not a card-level change.
 */
export function BusinessEcosystem() {
  return (
    <Section tone="sapphire">
      <SectionHeading
        eyebrow="Business Ecosystem"
        title="Built across industries."
        description="Ten business divisions operating under one diversified enterprise."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {featured ? (
          <Card
            tone="premium"
            href={`/businesses/${featured.slug}`}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="copy-caption text-subtle-foreground tabular-nums">{featured.number}</p>
              <h3 className="heading-h3 mt-3">{featured.name}</h3>
              <p className="copy-body text-muted-foreground mt-3">{featured.category}</p>
            </div>
            <span className="label-nav mt-8 inline-flex items-center gap-2 text-champagne-gold">
              View division
              <ArrowRightIcon size={16} aria-hidden="true" />
            </span>
          </Card>
        ) : null}

        <Card tone="premium" href="/paint" className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="copy-caption text-subtle-foreground">Business initiative</p>
              <PlannedStatusBadge status="planned" />
            </div>
            <h3 className="heading-h3 mt-3">NUVAIX Paint</h3>
            <p className="copy-body text-muted-foreground mt-3">
              A premium paint manufacturing and e-commerce initiative under NUVAIX GROUP.
            </p>
          </div>
          <span className="label-nav mt-8 inline-flex items-center gap-2 text-champagne-gold">
            Explore NUVAIX Paint
            <ArrowRightIcon size={16} aria-hidden="true" />
          </span>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryDivisions.map((business) => (
          <Card key={business.slug} tone="interactive" href={`/businesses/${business.slug}`}>
            <p className="copy-caption text-subtle-foreground tabular-nums">{business.number}</p>
            <h3 className="heading-h4 mt-2">{business.name}</h3>
            <p className="copy-body-sm text-muted-foreground mt-1">{business.category}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/businesses" variant="outline">
          Explore All Businesses
        </Button>
      </div>
    </Section>
  );
}
