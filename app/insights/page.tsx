import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { InsightsIntro } from "@/components/insights/InsightsIntro";
import { InsightGrid } from "@/components/insights/InsightGrid";
import { InsightsEmptyState } from "@/components/insights/InsightsEmptyState";
import { ContactCTA } from "@/components/home/ContactCTA";
import { articles } from "@/data/insights";

const description = "Corporate news and perspective from NUVAIX GROUP.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/insights" },
  openGraph: { title: "Insights", description, type: "website" },
};

export default function InsightsPage() {
  const hasArticles = articles.length > 0;

  return (
    <>
      <PageHero eyebrow="Insights" title="Insights" description={description} />
      <InsightsIntro />

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Article Archive"
          title={hasArticles ? "NUVAIX GROUP insights." : "The article archive."}
        />
        <div className="mt-12">
          {hasArticles ? <InsightGrid articles={articles} /> : <InsightsEmptyState />}
        </div>
      </Section>

      <ContactCTA
        title="Discuss a topic."
        description="Contact NUVAIX GROUP to discuss a topic covered by NUVAIX Insights."
        ctaLabel="Talk To NUVAIX"
      />
    </>
  );
}
