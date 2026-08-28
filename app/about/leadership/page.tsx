import type { Metadata } from "next";
import { CorporateSubnav } from "@/components/about/CorporateSubnav";
import { PageHero } from "@/components/layout/PageHero";
import { LeadershipEmptyState } from "@/components/about/LeadershipEmptyState";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactCTA } from "@/components/home/ContactCTA";
import { company } from "@/data/company";
import { businesses } from "@/data/businesses";
import { leadership } from "@/data/leadership";

const description =
  "How NUVAIX GROUP approaches leadership across its business divisions, and where verified leadership profiles will appear.";

export const metadata: Metadata = {
  title: "Leadership",
  description,
  alternates: { canonical: "/about/leadership" },
};

export default function LeadershipPage() {
  const hasLeadership = leadership.length > 0;

  return (
    <>
      <CorporateSubnav active="leadership" />
      <PageHero eyebrow="About NUVAIX" title="Leadership" description={description} />

      <Section tone="black">
        <SectionHeading
          eyebrow="Leadership Philosophy"
          title="Dedicated leadership, division by division."
          description={`NUVAIX GROUP is organized as a diversified enterprise operating across ${businesses.length} business divisions under ${company.legalName} (RC ${company.rcNumber}), each requiring dedicated leadership, expertise and accountability. Strong leadership is central to how the Group operates, guiding strategy, discipline and long-term growth in every division.`}
        />
      </Section>

      <Section tone="sapphire">
        {hasLeadership ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((profile) => (
              <Card key={profile.slug} tone="standard">
                <h3 className="heading-h4">{profile.name}</h3>
                <p className="copy-body-sm text-muted-foreground mt-1">{profile.title}</p>
              </Card>
            ))}
          </div>
        ) : (
          <LeadershipEmptyState />
        )}
      </Section>

      <ContactCTA />
    </>
  );
}
