import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { BusinessDivision } from "@/data/businesses";

export interface BusinessCTAProps {
  business: BusinessDivision;
}

/**
 * A reusable enquiry CTA: "Contact NUVAIX" and "Partner With NUVAIX" are
 * always accurate regardless of a division's content depth, unlike a
 * claim such as "book a service" which would need a verified live
 * offering. Adds one targeted cross-link only where it is genuinely
 * relevant (Technology's own elevated section; Paint for Manufacturing,
 * its closest conceptual match), not on every page.
 */
export function BusinessCTA({ business }: BusinessCTAProps) {
  return (
    <Section tone="sapphire" width="narrow" className="text-center">
      <h2 className="heading-h2">Interested in {business.name}?</h2>
      <p className="copy-body-lg text-titanium-silver mt-4">
        Contact NUVAIX GROUP to discuss opportunities, partnerships or enquiries related to this
        division.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/contact" variant="gold">
          Contact NUVAIX
        </Button>
        <Button href="/partnerships" variant="outline">
          Partner With NUVAIX
        </Button>
      </div>
      {business.slug === "technology-it-solutions" ? (
        <p className="copy-body-sm text-muted-foreground mt-6">
          <Link href="/technology" className="text-champagne-gold hover:text-champagne-gold/80">
            Explore the Technology section
          </Link>
        </p>
      ) : null}
      {business.slug === "manufacturing" ? (
        <p className="copy-body-sm text-muted-foreground mt-6">
          <Link href="/paint" className="text-champagne-gold hover:text-champagne-gold/80">
            See also: NUVAIX Paint
          </Link>
        </p>
      ) : null}
    </Section>
  );
}
