import type { Metadata } from "next";
import { PaintSubnav } from "@/components/paint/PaintSubnav";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PaintCTA } from "@/components/paint/PaintCTA";
import { paintServices } from "@/data/paint-products";

const description =
  "Bulk and project supply for NUVAIX Paint, for corporate, government and large-scale projects.";

export const metadata: Metadata = {
  title: "Bulk Orders",
  description,
  alternates: { canonical: "/paint/bulk-orders" },
  openGraph: { title: "Bulk Orders", description, type: "website" },
};

const bulkRelevantServices = paintServices.filter((service) =>
  ["Bulk supply", "Corporate/government project supply", "Technical product support"].includes(
    service.label,
  ),
);

export default function PaintBulkOrdersPage() {
  return (
    <>
      <PaintSubnav active="bulk-orders" />
      <PageHero eyebrow="NUVAIX Paint" title="Bulk Orders" description={description} />

      <Section tone="black">
        <SectionHeading
          eyebrow="Overview"
          title="Bulk and project supply."
          description="NUVAIX Paint's planned service model includes bulk supply and corporate/government project supply, as described in the NUVAIX Paint proposal."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {bulkRelevantServices.map((service) => (
            <li key={service.label}>
              <Badge variant="outline">{service.label}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Who This Is For"
          title="Corporate, government and large-scale projects."
          description="Bulk ordering is intended for corporate, government and other large-scale projects that require paint supply at volume."
        />
      </Section>

      <Section tone="black">
        <SectionHeading
          eyebrow="Enquiry Information"
          title="What to include in a bulk enquiry."
          description="To help NUVAIX GROUP respond appropriately, include your project type, estimated volume and timeline when you enquire."
        />
      </Section>

      <PaintCTA
        title="Discuss a bulk order."
        description="Contact NUVAIX GROUP to discuss bulk or project supply for NUVAIX Paint."
        ctaLabel="Discuss A Bulk Order"
      />
    </>
  );
}
