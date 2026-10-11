import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { paintProductCategories } from "@/data/paint-products";
import { PaintSubnav } from "@/components/paint/PaintSubnav";
import { PaintProductCard } from "@/components/paint/PaintProductCard";
import { PaintVisual } from "@/components/paint/PaintVisual";
import { PaintCTA } from "@/components/paint/PaintCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ImageFrame, IMAGE_FILL_CLASSNAME } from "@/components/ui/ImageFrame";
import { PlannedStatusBadge } from "@/components/ui/PlannedStatusBadge";

// Bounded per Milestone 8: generateStaticParams reflects
// data/paint-products.ts's paintProductCategories array exactly, and
// dynamicParams = false means any slug outside that array 404s, both in
// dev and in the production build. No fictional product pages are
// generated.
export function generateStaticParams() {
  return paintProductCategories.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = paintProductCategories.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product" };
  }

  const description = product.shortDescription ?? `${product.name}: a NUVAIX Paint product.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/paint/products/${product.slug}` },
    openGraph: { title: product.name, description, type: "website" },
  };
}

export default async function PaintProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = paintProductCategories.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = paintProductCategories
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <PaintSubnav active="products" />
      <PageHero eyebrow="NUVAIX Paint" title={product.name} description={product.shortDescription} />

      <Section tone="black">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <ImageFrame aspect="square" radius="xl">
              {product.conceptImage ? (
                <Image
                  src={product.conceptImage.src}
                  alt={product.conceptImage.alt}
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className={IMAGE_FILL_CLASSNAME}
                />
              ) : (
                <PaintVisual pattern="surface" />
              )}
            </ImageFrame>
            {product.conceptImage ? (
              <p className="copy-caption text-subtle-foreground mt-3">
                Concept render. Proposed packaging design, not final commercial artwork.
              </p>
            ) : null}
          </div>

          <div>
            <p className="label-eyebrow mb-4 text-champagne-gold">Status</p>
            <PlannedStatusBadge status={product.status} />
            <p className="copy-body text-muted-foreground mt-6">
              {product.name} is one of five planned NUVAIX Paint product categories under NUVAIX
              GROUP.
            </p>
            {product.description ? (
              <p className="copy-body text-muted-foreground mt-4">{product.description}</p>
            ) : null}
          </div>
        </div>
      </Section>

      {related.length >= 2 ? (
        <Section tone="sapphire">
          <SectionHeading eyebrow="Related Products" title="Other NUVAIX Paint categories." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PaintProductCard key={item.slug} product={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <PaintCTA
        title={`Interested in ${product.name}?`}
        description="Contact NUVAIX GROUP to enquire about NUVAIX Paint."
        ctaLabel="Enquire About Paint"
      />
    </>
  );
}
