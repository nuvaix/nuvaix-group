import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CareersIntro } from "@/components/careers/CareersIntro";
import { JobGrid } from "@/components/careers/JobGrid";
import { CareersEmptyState } from "@/components/careers/CareersEmptyState";
import { ContactCTA } from "@/components/home/ContactCTA";
import { jobs } from "@/data/careers";

const description = "Careers at NUVAIX GROUP, across its business divisions.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers", description, type: "website" },
};

export default function CareersPage() {
  const hasJobs = jobs.length > 0;

  return (
    <>
      <PageHero eyebrow="Careers" title="Careers" description={description} />
      <CareersIntro />

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Open Roles"
          title={hasJobs ? "Current NUVAIX GROUP openings." : "The open roles directory."}
        />
        <div className="mt-12">
          {hasJobs ? <JobGrid jobs={jobs} /> : <CareersEmptyState />}
        </div>
      </Section>

      <ContactCTA
        title="Interested in NUVAIX GROUP?"
        description="Send a general enquiry about opportunities at NUVAIX GROUP."
        ctaLabel="Enquire About Careers"
      />
    </>
  );
}
