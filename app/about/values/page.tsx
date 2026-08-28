import type { Metadata } from "next";
import { CorporateSubnav } from "@/components/about/CorporateSubnav";
import { CorporatePageHero } from "@/components/about/CorporatePageHero";
import { ValuesPresentation } from "@/components/about/ValuesPresentation";
import { ContactCTA } from "@/components/home/ContactCTA";

const description = "The brand principles behind NUVAIX GROUP: Innovate, Build, Deliver, Grow.";

export const metadata: Metadata = {
  title: "Values",
  description,
  alternates: { canonical: "/about/values" },
};

export default function ValuesPage() {
  return (
    <>
      <CorporateSubnav active="values" />
      <CorporatePageHero eyebrow="About NUVAIX" title="Values" description={description} />
      <ValuesPresentation />
      <ContactCTA />
    </>
  );
}
