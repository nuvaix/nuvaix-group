import type { Metadata } from "next";
import { TechnologySubnav } from "@/components/technology/TechnologySubnav";
import { PageHero } from "@/components/layout/PageHero";
import { TrainingOverview } from "@/components/technology/TrainingOverview";
import { CourseGrid } from "@/components/technology/CourseGrid";
import { TechnologyCTA } from "@/components/technology/TechnologyCTA";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const description =
  "NUVAIX GROUP's technology training offering: practical subject areas and a growing course catalog.";

export const metadata: Metadata = {
  title: "Training",
  description,
  alternates: { canonical: "/technology/training" },
  openGraph: { title: "Training", description, type: "website" },
};

export default function TechnologyTrainingPage() {
  return (
    <>
      <TechnologySubnav active="training" />
      <PageHero eyebrow="Technology" title="Training" description={description} />
      <TrainingOverview />

      <Section tone="black">
        <SectionHeading eyebrow="Course Catalog" title="Individual training courses." />
        <div className="mt-12">
          <CourseGrid />
        </div>
      </Section>

      <TechnologyCTA
        title="Interested in training?"
        description="Contact NUVAIX GROUP to enquire about technology training for you or your team."
        ctaLabel="Enquire About Training"
      />
    </>
  );
}
