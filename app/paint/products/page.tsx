import type { Metadata } from "next";
import { PaintSubnav } from "@/components/paint/PaintSubnav";
import { PageHero } from "@/components/layout/PageHero";
import { PaintProductCatalog } from "@/components/paint/PaintProductCatalog";
import { PaintCTA } from "@/components/paint/PaintCTA";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { paintProductCategories } from "@/data/paint-products";

const description =
  "The NUVAIX Paint product range: five planned product categories under NUVAIX GROUP.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/paint/products" },
  openGraph: { title: "Products", description, type: "website" },
};

export default function PaintProductsPage() {
  return (
    <>
      <PaintSubnav active="products" />
      <PageHero eyebrow="NUVAIX Paint" title="Products" description={description} />

      <Section tone="black">
        <SectionHeading
          eyebrow="Product Range"
          title="The NUVAIX Paint product catalog."
          description="Every category below is planned, not yet commercially available. Status is shown on each product."
        />
        <div className="mt-12">
          <PaintProductCatalog products={paintProductCategories} />
        </div>
      </Section>

      <PaintCTA
        title="Interested in a NUVAIX Paint product?"
        description="Contact NUVAIX GROUP to enquire about NUVAIX Paint products."
        ctaLabel="Enquire About Paint"
      />
    </>
  );
}
