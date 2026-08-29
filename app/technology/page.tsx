import type { Metadata } from "next";
import { TechnologySubnav } from "@/components/technology/TechnologySubnav";
import { PageHero } from "@/components/layout/PageHero";
import { TechnologyOverview } from "@/components/technology/TechnologyOverview";
import { TechnologyCapabilities } from "@/components/technology/TechnologyCapabilities";
import { TechnologyCTA } from "@/components/technology/TechnologyCTA";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const description =
  "NUVAIX GROUP's technology capability and training offering, alongside the Technology & IT Solutions business division.";

export const metadata: Metadata = {
  title: "Technology",
  description,
  alternates: { canonical: "/technology" },
  openGraph: { title: "Technology", description, type: "website" },
};

export default function TechnologyPage() {
  return (
    <>
      <TechnologySubnav active="technology" />
      <PageHero
        eyebrow="Technology"
        title="Technology that moves business forward."
        description="NUVAIX GROUP is a diversified, technology-driven enterprise, with technology at the center of how the Group operates."
        cta={{ label: "Explore Solutions", href: "/technology/solutions" }}
        secondaryCta={{ label: "Talk to NUVAIX", href: "/contact" }}
      />
      <TechnologyOverview />
      <TechnologyCapabilities />

      <Section tone="black">
        <div className="border-border flex flex-col items-start justify-between gap-6 rounded-xl border p-8 lg:flex-row lg:items-center">
          <div>
            <p className="copy-caption text-subtle-foreground">Business Division</p>
            <h2 className="heading-h4 mt-2">Technology &amp; IT Solutions</h2>
            <p className="copy-body-sm text-muted-foreground mt-2 max-w-md">
              Explore the NUVAIX business division. This technology section presents NUVAIX
              GROUP&apos;s broader digital capability and training offering alongside it.
            </p>
          </div>
          <Button href="/businesses/technology-it-solutions" variant="outline" className="shrink-0">
            View Business Division
          </Button>
        </div>
      </Section>

      <TechnologyCTA
        title="Ready to talk technology?"
        description="Contact NUVAIX GROUP to discuss a technology need, a partnership, or an enquiry about this section."
        ctaLabel="Talk to NUVAIX"
      />
    </>
  );
}
