import type { Metadata } from "next";
import { TechnologySubnav } from "@/components/technology/TechnologySubnav";
import { PageHero } from "@/components/layout/PageHero";
import { TechnologySolutions } from "@/components/technology/TechnologySolutions";
import { TechnologyCTA } from "@/components/technology/TechnologyCTA";

const description =
  "NUVAIX GROUP's technology solution categories and its approach to technology engagements.";

export const metadata: Metadata = {
  title: "Solutions",
  description,
  alternates: { canonical: "/technology/solutions" },
  openGraph: { title: "Solutions", description, type: "website" },
};

export default function TechnologySolutionsPage() {
  return (
    <>
      <TechnologySubnav active="solutions" />
      <PageHero eyebrow="Technology" title="Solutions" description={description} />
      <TechnologySolutions />
      <TechnologyCTA
        title="Discuss a solution."
        description="Contact NUVAIX GROUP to discuss a technology solution for your business."
        ctaLabel="Enquire About Solutions"
      />
    </>
  );
}
