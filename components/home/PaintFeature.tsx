import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";
import { ArrowRightIcon } from "@/components/icons";
import { paintProductCategories, paintServiceCommitments } from "@/data/paint-products";
import { GeometricField } from "./GeometricField";

/**
 * Visual/editorial product section, distinct from Technology's single
 * column: narrative and planned commitments on the left, the product
 * category grid on the right. The one section allowed a gold-toned
 * background accent (sparingly, see docs/17 Paint Governance).
 */
export function PaintFeature() {
  return (
    <Section tone="black" container={false} className="relative overflow-hidden">
      <GeometricField tone="gold" />
      <PageContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="label-eyebrow mb-4 text-champagne-gold">NUVAIX Paint</p>
            <h2 className="heading-display">Color. Protection. Possibility.</h2>
            <p className="copy-body-lg text-titanium-silver mt-6 max-w-md">
              NUVAIX Paint is a planned premium paint manufacturing and e-commerce initiative under
              NUVAIX GROUP, spanning interior and exterior coatings, textured finishes, primers and
              undercoats.
            </p>
            <ul className="mt-8 space-y-3">
              {paintServiceCommitments.map((commitment) => (
                <li key={commitment.label} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-gold"
                  />
                  <span className="copy-body text-titanium-silver">{commitment.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/paint" variant="gold">
                Explore NUVAIX Paint
                <ArrowRightIcon size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {paintProductCategories.map((product) => (
              <Card
                key={product.slug}
                tone="bordered"
                className="flex items-start justify-between gap-3"
              >
                <span className="copy-body font-medium text-off-white">{product.name}</span>
                <PlannedStatusBadge status={product.status} className="shrink-0" />
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
