import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export interface PaintCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
}

/** A reusable enquiry CTA shared across the Paint section's pages,
 * mirroring components/technology/TechnologyCTA.tsx's pattern. No
 * ordering or payment action: every CTA in this section links to the
 * enquiry route, /contact. */
export function PaintCTA({ title, description, ctaLabel }: PaintCTAProps) {
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
