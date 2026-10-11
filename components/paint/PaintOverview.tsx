import { Section } from "@/components/layout/Section";

/** Asymmetric editorial two-column layout, echoing
 * components/technology/TechnologyOverview.tsx's pattern with
 * Paint-specific copy (no exact duplication). States the NUVAIX Paint /
 * NUVAIX GROUP brand relationship explicitly (Milestone 8, section 24). */
export function PaintOverview() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">A NUVAIX GROUP Product</p>
          <h2 className="heading-h2">A distinct product identity within NUVAIX GROUP.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            NUVAIX Paint is a planned premium paint manufacturing and e-commerce business under
            NUVAIX GROUP (NUVAIX SOLUTIONS LTD). It carries its own product identity while
            remaining part of the wider Group, not a separate, unrelated company.
          </p>
          <p className="copy-body text-muted-foreground">
            The initiative is organized around five planned product categories: interior
            emulsion, exterior weather resistant, textured and decorative paint, primers and
            undercoats.
          </p>
        </div>
      </div>
    </Section>
  );
}
