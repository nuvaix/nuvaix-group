import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { BusinessVisual } from "@/components/businesses/BusinessVisual";
import { ContactCTA } from "@/components/home/ContactCTA";
import { businesses } from "@/data/businesses";

const description =
  "NUVAIX GROUP operates across multiple sectors, combining diverse capabilities under one diversified enterprise.";

export const metadata: Metadata = {
  title: "Businesses",
  description,
  alternates: { canonical: "/businesses" },
  openGraph: { title: "Businesses", description, type: "website" },
};

const featured = businesses.find((business) => business.featured);
const secondaryDivisions = businesses.filter((business) => !business.featured);

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Ecosystem"
        title="Our Business Ecosystem"
        description={description}
      />

      {featured ? (
        <Section tone="black" container={false} className="relative overflow-hidden">
          <BusinessVisual pattern={featured.visualPattern} />
          <PageContainer className="relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="copy-caption text-champagne-gold tabular-nums">{featured.number}</p>
                <h2 className="heading-h1 mt-3 max-w-2xl">{featured.name}</h2>
                <p className="copy-body-lg text-titanium-silver mt-4 max-w-xl">
                  {featured.category}.
                </p>
              </div>
              <Button href={`/businesses/${featured.slug}`} variant="gold" className="shrink-0">
                View Division
              </Button>
            </div>
          </PageContainer>
        </Section>
      ) : null}

      <Section tone="sapphire">
        <SectionHeading eyebrow="The Full Ecosystem" title="Every division, in detail." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {secondaryDivisions.map((business) => (
            <Card
              key={business.slug}
              tone="bordered"
              href={`/businesses/${business.slug}`}
              className="group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="copy-caption text-subtle-foreground tabular-nums">
                    {business.number}
                  </p>
                  <h3 className="heading-h4 mt-2">{business.name}</h3>
                </div>
                <ArrowRightIcon
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 opacity-0 transition-opacity duration-(--duration-fast) ease-(--ease-standard) group-hover:opacity-100"
                />
              </div>
              <p className="copy-body-sm text-muted-foreground mt-3">{business.category}.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {business.capabilities.map((capability) => (
                  <Badge key={capability} variant="outline">
                    {capability}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="black">
        <div className="border-border flex flex-col items-start justify-between gap-6 rounded-xl border p-8 lg:flex-row lg:items-center">
          <div>
            <p className="copy-caption text-subtle-foreground">Separate Initiative</p>
            <h2 className="heading-h4 mt-2">Looking for NUVAIX Paint?</h2>
            <p className="copy-body-sm text-muted-foreground mt-2 max-w-md">
              NUVAIX Paint is a separate business initiative under NUVAIX GROUP, not one of the ten
              business divisions above.
            </p>
          </div>
          <Button href="/paint" variant="outline" className="shrink-0">
            Explore NUVAIX Paint
          </Button>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
