import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProjectsIntro } from "@/components/projects/ProjectsIntro";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectEmptyState } from "@/components/projects/ProjectEmptyState";
import { ContactCTA } from "@/components/home/ContactCTA";
import { projects } from "@/data/projects";

const description =
  "A portfolio of genuine NUVAIX projects will be published here as they become available.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects", description, type: "website" },
};

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHero eyebrow="Projects" title="Projects" description={description} />
      <ProjectsIntro />

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Project Directory"
          title={hasProjects ? "NUVAIX GROUP project work." : "The project directory."}
        />
        <div className="mt-12">
          {hasProjects ? <ProjectGrid projects={projects} /> : <ProjectEmptyState />}
        </div>
      </Section>

      <ContactCTA
        title="Discuss a project."
        description="Contact NUVAIX GROUP to discuss a project across any of its business divisions."
        ctaLabel="Discuss A Project"
      />
    </>
  );
}
