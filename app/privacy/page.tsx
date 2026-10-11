import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Divider } from "@/components/ui/Divider";
import { ContactCTA } from "@/components/home/ContactCTA";
import { company } from "@/data/company";

const description = "The NUVAIX GROUP Privacy Policy will be published on this page.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy", description, type: "website" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={description} />

      <Section tone="black">
        <div className="mx-auto max-w-xl text-center">
          <Divider className="mx-auto mb-10 w-16" />
          <p className="copy-body text-muted-foreground">
            This page will explain what information {company.legalName} (RC {company.rcNumber})
            collects, how it is used, and how it is protected.
          </p>
        </div>
      </Section>

      <ContactCTA
        title="Questions about privacy?"
        description="Contact NUVAIX GROUP with any privacy-related question."
        ctaLabel="Contact NUVAIX"
      />
    </>
  );
}
