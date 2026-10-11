import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { PaintVisual } from "./PaintVisual";

export interface PaintHeroProps {
  conceptImage?: { src: string; alt: string };
}

/**
 * A bespoke, more product-forward hero than the shared PageHero: a large
 * concept-render panel beside the headline, distinct from the generic
 * internal-page hero used on About/Businesses/Technology (Milestone 8,
 * "avoid a generic corporate subpage"). The panel always carries a
 * visible caption naming the artwork as a proposed concept render, per
 * Paint Governance: it must never read as confirmed commercial
 * packaging. Headline and eyebrow match the copy already approved and
 * shipped on the homepage's PaintFeature section.
 */
export function PaintHero({ conceptImage }: PaintHeroProps) {
  return (
    <Section tone="black" size="large" container={false} className="relative overflow-hidden">
      <PageContainer className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">NUVAIX Paint</p>
          <h1 className="heading-display max-w-xl">Color. Protection. Possibility.</h1>
          <p className="copy-body-lg text-titanium-silver mt-6 max-w-md">
            NUVAIX Paint is part of NUVAIX GROUP: a planned premium paint manufacturing and
            e-commerce initiative spanning interior and exterior coatings, textured finishes,
            primers and undercoats.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/paint/products" variant="gold">
              Explore Paint Products
            </Button>
            <Button href="/contact" variant="outline">
              Enquire About Paint
            </Button>
          </div>
        </div>

        <div>
          <ImageFrame aspect="square" radius="xl" className="w-full">
            {conceptImage ? (
              <Image
                src={conceptImage.src}
                alt={conceptImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 90vw"
                className={IMAGE_FILL_CLASSNAME}
              />
            ) : (
              <PaintVisual pattern="blocks" />
            )}
          </ImageFrame>
          <p className="copy-caption text-subtle-foreground mt-3">
            Concept render. Proposed packaging design, not final commercial artwork.
          </p>
        </div>
      </PageContainer>
    </Section>
  );
}
