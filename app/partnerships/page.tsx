import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PartnershipsIntro } from "@/components/partnerships/PartnershipsIntro";
import { PartnerGrid } from "@/components/partnerships/PartnerGrid";
import { PartnershipsEmptyState } from "@/components/partnerships/PartnershipsEmptyState";
import { ContactCTA } from "@/components/home/ContactCTA";
import { partners } from "@/data/partnerships";

const description =
  "NUVAIX GROUP welcomes partners who share our commitment to innovation, discipline and long-term growth.";

export const metadata: Metadata = {
  title: "Partnerships",
  description,
  alternates: { canonical: "/partnerships" },
  openGraph: { title: "Partnerships", description, type: "website" },
};

export default function PartnershipsPage() {
  const hasPartners = partners.length > 0;

  return (
    <>
      <PageHero eyebrow="Partnerships" title="Partner With Us" description={description} />
      <PartnershipsIntro />

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Partner Directory"
          title={hasPartners ? "NUVAIX GROUP partners." : "The partner directory."}
        />
        <div className="mt-12">
          {hasPartners ? <PartnerGrid partners={partners} /> : <PartnershipsEmptyState />}
        </div>
      </Section>

      <ContactCTA
        title="Let's build what's next."
        description="Contact NUVAIX GROUP to start a partnership conversation."
        ctaLabel="Contact NUVAIX"
      />
    </>
  );
}
