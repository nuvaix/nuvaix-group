import type { Metadata } from "next";
import { CorporateSubnav } from "@/components/about/CorporateSubnav";
import { PageHero } from "@/components/layout/PageHero";
import { MissionStatement } from "@/components/about/MissionStatement";
import { ContactCTA } from "@/components/home/ContactCTA";

const description =
  "The mission behind NUVAIX GROUP, a diversified, technology-driven enterprise built across multiple industries.";

export const metadata: Metadata = {
  title: "Mission",
  description,
  alternates: { canonical: "/about/mission" },
};

export default function MissionPage() {
  return (
    <>
      <CorporateSubnav active="mission" />
      <PageHero eyebrow="About NUVAIX" title="Mission" description={description} />
      <MissionStatement />
      <ContactCTA />
    </>
  );
}
