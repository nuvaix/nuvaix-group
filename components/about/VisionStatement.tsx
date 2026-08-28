import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";
import { businesses } from "@/data/businesses";

const principles = [
  {
    label: "Opportunity-driven",
    detail: "Identifying new industries and ventures worth building.",
  },
  {
    label: "Technology-forward",
    detail: "Treating technology as central to how every division operates and grows.",
  },
  {
    label: "Partnership-minded",
    detail: "Growing alongside the partners, clients and communities NUVAIX GROUP works with.",
  },
];

/**
 * As with MissionStatement, this vision statement is synthesized from
 * verified, approved source language only. It deliberately avoids
 * unverified superlatives (largest, leading, number one, fastest-growing).
 */
export function VisionStatement() {
  return (
    <>
      <Section tone="black">
        <p className="label-eyebrow mb-6 text-champagne-gold">Vision Statement</p>
        <p className="heading-h1 max-w-4xl">
          NUVAIX GROUP is working toward a future where its diversified structure allows it to
          identify new opportunity, build new capability and grow sustainably across every industry
          it enters, in partnership with the people and businesses it works with.
        </p>
      </Section>

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Future-Oriented Principles"
          title="What this direction is built on."
        />
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
          eyebrow="Business Ecosystem"
          title="Growth across every division."
          description={`NUVAIX GROUP's ${businesses.length} business divisions, alongside newer initiatives such as NUVAIX Paint, are the practical expression of this vision.`}
        />
        <div className="mt-8 flex gap-6">
          <Link
            href="/businesses"
            className="label-nav text-champagne-gold hover:text-champagne-gold/80 inline-flex items-center gap-2"
          >
            View all businesses
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/paint"
            className="label-nav text-champagne-gold hover:text-champagne-gold/80 inline-flex items-center gap-2"
          >
            Explore NUVAIX Paint
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
