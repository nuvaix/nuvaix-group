import type { Metadata } from "next";
import { PaintSubnav } from "@/components/paint/PaintSubnav";
import { PageHero } from "@/components/layout/PageHero";
import { PaintColorExperience } from "@/components/paint/PaintColorExperience";
import { PaintCTA } from "@/components/paint/PaintCTA";
import { Section } from "@/components/layout/Section";

const description = "The foundation for a future NUVAIX Paint color experience.";

export const metadata: Metadata = {
  title: "Colors",
  description,
  alternates: { canonical: "/paint/colors" },
  openGraph: { title: "Colors", description, type: "website" },
};

export default function PaintColorsPage() {
  return (
    <>
      <PaintSubnav active="colors" />
      <PageHero eyebrow="NUVAIX Paint" title="Colors" description={description} />

      <Section tone="black">
        <PaintColorExperience />
      </Section>

      <PaintCTA
        title="Interested in NUVAIX Paint colors?"
        description="Contact NUVAIX GROUP to enquire about the NUVAIX Paint color experience."
        ctaLabel="Enquire About Paint"
      />
    </>
  );
}
