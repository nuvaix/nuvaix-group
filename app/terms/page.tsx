import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/ui/Divider";
import { ContactCTA } from "@/components/home/ContactCTA";
import { company } from "@/data/company";

const description = "The NUVAIX GROUP Terms of Use will be published on this page.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Use", description, type: "website" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description={description} />

      <Section tone="black">
        <div className="mx-auto max-w-xl text-center">
          <Divider className="mx-auto mb-10 w-16" />
          <p className="copy-body text-muted-foreground">
            This page will set out the terms governing use of the {company.legalName} (RC{" "}
            {company.rcNumber}) website.
          </p>
        </div>
      </Section>

      <ContactCTA
        title="Questions about these terms?"
        description="Contact NUVAIX GROUP with any question about the terms of use."
        ctaLabel="Contact NUVAIX"
      />
    </>
  );
}
