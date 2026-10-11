import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { BusinessEcosystem } from "@/components/home/BusinessEcosystem";
import { TechnologyFeature } from "@/components/home/TechnologyFeature";
import { PaintFeature } from "@/components/home/PaintFeature";
import { ValueFramework } from "@/components/home/ValueFramework";
import { CapabilityPreview } from "@/components/home/CapabilityPreview";
import { LeadershipPreview } from "@/components/leadership/LeadershipPreview";
import { PartnershipCTA } from "@/components/home/PartnershipCTA";
import { ContactCTA } from "@/components/home/ContactCTA";

const description =
  "NUVAIX GROUP is a diversified, technology-driven enterprise operating across construction, real estate, technology, automobile, logistics, manufacturing, healthcare, retail and agriculture, consultancy and investment, alongside its NUVAIX Paint initiative.";

export const metadata: Metadata = {
  title: "NUVAIX GROUP",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "NUVAIX GROUP",
    description,
    type: "website",
  },
};

/**
 * The homepage composes ten reusable, mostly Server Component sections
 * (see components/home). None of them requires client interactivity on
 * its own; the only client boundaries on this route come from the global
 * Header/ToastProvider shell in app/layout.tsx.
 */
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <BusinessEcosystem />
      <TechnologyFeature />
      <PaintFeature />
      <ValueFramework />
      <CapabilityPreview />
      <LeadershipPreview />
      <PartnershipCTA />
      <ContactCTA />
    </>
  );
}
