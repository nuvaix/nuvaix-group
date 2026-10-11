import type { Metadata } from "next";
import { PaintSubnav } from "@/components/paint/PaintSubnav";
import { PaintHero } from "@/components/paint/PaintHero";
import { PaintOverview } from "@/components/paint/PaintOverview";
import { PaintProductGrid } from "@/components/paint/PaintProductGrid";
import { PaintCTA } from "@/components/paint/PaintCTA";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { paintProductCategories, paintServices } from "@/data/paint-products";

const description =
  "NUVAIX Paint: a planned premium paint manufacturing and e-commerce initiative under NUVAIX GROUP.";

export const metadata: Metadata = {
  title: "NUVAIX Paint",
  description,
  alternates: { canonical: "/paint" },
  openGraph: { title: "NUVAIX Paint", description, type: "website" },
};

export default function PaintPage() {
  const featuredProduct = paintProductCategories.find((product) => product.featured);

  return (
    <>
      <PaintSubnav active="paint" />
      <PaintHero conceptImage={featuredProduct?.conceptImage} />
      <PaintOverview />

      <Section tone="black">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Product Range"
            title="Five planned NUVAIX Paint product categories."
            width="wide"
          />
          <Button href="/paint/products" variant="outline" className="shrink-0">
            View All Products
          </Button>
        </div>
        <div className="mt-12">
          <PaintProductGrid products={paintProductCategories} />
        </div>
      </Section>

      <Section tone="sapphire">
        <div className="border-border flex flex-col items-start justify-between gap-6 rounded-xl border p-8 lg:flex-row lg:items-center">
          <div>
            <p className="copy-caption text-subtle-foreground">Color Experience</p>
            <h2 className="heading-h4 mt-2">A future NUVAIX Paint color catalog.</h2>
            <p className="copy-body-sm text-muted-foreground mt-2 max-w-md">
              Explore the current state of the NUVAIX Paint color experience.
            </p>
          </div>
          <Button href="/paint/colors" variant="outline" className="shrink-0">
            Explore Colors
          </Button>
        </div>
      </Section>

      <Section tone="black">
        <SectionHeading
          eyebrow="Quality &amp; Protection"
          title="How NUVAIX Paint is being built."
          description="NUVAIX Paint's planned service model, as described in the NUVAIX Paint proposal."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {paintServices.map((service) => (
            <li key={service.label}>
              <Badge variant="outline">{service.label}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sapphire">
        <div className="border-border flex flex-col items-start justify-between gap-6 rounded-xl border p-8 lg:flex-row lg:items-center">
          <div>
            <p className="copy-caption text-subtle-foreground">Bulk &amp; Project Supply</p>
            <h2 className="heading-h4 mt-2">Bulk orders and project supply.</h2>
            <p className="copy-body-sm text-muted-foreground mt-2 max-w-md">
              Learn more about bulk ordering for corporate, government and large-scale projects.
            </p>
          </div>
          <Button href="/paint/bulk-orders" variant="outline" className="shrink-0">
            Discuss A Bulk Order
          </Button>
        </div>
      </Section>

      <PaintCTA
        title="Ready to talk NUVAIX Paint?"
        description="Contact NUVAIX GROUP to discuss NUVAIX Paint, a partnership, or an enquiry about this section."
        ctaLabel="Enquire About Paint"
      />
    </>
  );
}
