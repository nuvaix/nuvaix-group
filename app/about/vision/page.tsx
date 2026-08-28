import type { Metadata } from "next";
import { CorporateSubnav } from "@/components/about/CorporateSubnav";
import { CorporatePageHero } from "@/components/about/CorporatePageHero";
import { VisionStatement } from "@/components/about/VisionStatement";
import { ContactCTA } from "@/components/home/ContactCTA";

const description =
  "The long-term direction of NUVAIX GROUP, a diversified, technology-driven enterprise built across multiple industries.";

export const metadata: Metadata = {
  title: "Vision",
  description,
  alternates: { canonical: "/about/vision" },
};

export default function VisionPage() {
  return (
    <>
      <CorporateSubnav active="vision" />
      <CorporatePageHero eyebrow="About NUVAIX" title="Vision" description={description} />
      <VisionStatement />
      <ContactCTA />
    </>
  );
}
