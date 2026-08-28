import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { company } from "@/data/company";
import { businesses } from "@/data/businesses";

const principles = [
  {
    label: "Innovation-led",
    detail: "Approaching every division with fresh thinking and better solutions.",
  },
  {
    label: "Diversified by design",
    detail: "Building capability across multiple industries, not just one.",
  },
  {
    label: "Built for the long term",
    detail: "Prioritizing sustainable, disciplined growth over short-term gain.",
  },
];

/**
 * The mission statement below is synthesized entirely from verified,
 * approved source language (CLAUDE.md's core positioning and brand
 * line), not a new claim: no dates, statistics or achievements are
 * introduced. Covers the statement, its principles and how it connects
 * to the business as one cohesive unit for the Mission page.
 */
export function MissionStatement() {
  return (
    <>
      <Section tone="black">
        <p className="label-eyebrow mb-6 text-champagne-gold">Mission Statement</p>
        <p className="heading-h1 max-w-4xl">
          NUVAIX GROUP exists to build a diversified, technology-driven enterprise that creates
          lasting value through innovation, disciplined execution and long-term growth, across every
          industry it enters.
        </p>
      </Section>

      <Section tone="sapphire">
        <SectionHeading eyebrow="Mission Principles" title="How NUVAIX pursues this mission." />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.label}>
              <h3 className="heading-h4">{principle.label}</h3>
              <p className="copy-body text-muted-foreground mt-3">{principle.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="black">
        <SectionHeading
          eyebrow="In Practice"
          title="How the mission shapes the business."
          description={`NUVAIX GROUP pursues this mission through ${businesses.length} business divisions and a strong technology orientation, unified by one brand line: ${company.brandLine}.`}
        />
      </Section>
    </>
  );
}
