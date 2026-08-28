import type { Metadata } from "next";
import { CorporateSubnav } from "@/components/about/CorporateSubnav";
import { CorporatePageHero } from "@/components/about/CorporatePageHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { CorporateIdentity } from "@/components/about/CorporateIdentity";
import { BusinessStructure } from "@/components/about/BusinessStructure";
import { CorporatePillarsPreview } from "@/components/about/CorporatePillarsPreview";
import { LeadershipPreview } from "@/components/leadership/LeadershipPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

const description =
  "NUVAIX GROUP is a diversified, technology-driven enterprise operating under NUVAIX SOLUTIONS LTD across construction, real estate, technology, automobile, logistics, manufacturing, healthcare, retail and agriculture, consultancy and investment.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <CorporateSubnav active="about" />
      <CorporatePageHero
        eyebrow="About NUVAIX"
        title="Building with purpose. Growing with vision."
        description="NUVAIX GROUP is a diversified, technology-driven enterprise built across multiple industries."
      />
      <AboutIntro />
      <CorporateIdentity />
      <BusinessStructure />
      <CorporatePillarsPreview />
      <LeadershipPreview />
      <ContactCTA />
    </>
  );
}
