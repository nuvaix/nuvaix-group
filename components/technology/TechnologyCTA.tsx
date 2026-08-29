import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export interface TechnologyCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
}

/** A reusable enquiry CTA shared by all three Technology-section pages,
 * parameterized rather than copy-pasted three times. */
export function TechnologyCTA({ title, description, ctaLabel }: TechnologyCTAProps) {
  return (
    <Section tone="black" width="narrow" className="text-center">
      <h2 className="heading-h2">{title}</h2>
      <p className="copy-body-lg text-titanium-silver mt-4">{description}</p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact" variant="gold">
          {ctaLabel}
        </Button>
      </div>
    </Section>
  );
}
