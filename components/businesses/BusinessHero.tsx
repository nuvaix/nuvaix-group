import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { BusinessVisual } from "./BusinessVisual";
import type { BusinessDivision } from "@/data/businesses";

export interface BusinessHeroProps {
  business: BusinessDivision;
}

/** A sector-aware hero: the division number leads, at a deliberately
 * smaller scale than the name itself, using the division's own abstract
 * visual pattern rather than the generic PageHero background. */
export function BusinessHero({ business }: BusinessHeroProps) {
  return (
    <Section tone="black" size="large" container={false} className="relative overflow-hidden">
      <BusinessVisual pattern={business.visualPattern} />
      <PageContainer className="relative">
        <p className="heading-h1 text-champagne-gold mb-2 tabular-nums">{business.number}</p>
        <h1 className="heading-display max-w-3xl">{business.name}</h1>
        <p className="copy-body-lg text-titanium-silver mt-6 max-w-xl">{business.category}.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="gold">
            Contact NUVAIX
          </Button>
          <Button href="/businesses" variant="outline">
            All Businesses
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}
