import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";

/** A typographic sequence, not four icon cards: numbered pillars in a
 * horizontal divided row on desktop, stacked with horizontal rules on
 * mobile. */
export function ValueFramework() {
  return (
    <Section tone="sapphire">
      <p className="label-eyebrow mb-4 text-champagne-gold">How We Create Value</p>
      <h2 className="heading-h2 max-w-2xl">A disciplined approach across every division.</h2>

      <div className="divide-border mt-12 grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {company.valuePillars.map((pillar, index) => (
          <div
            key={pillar.word}
            className="py-8 first:pt-0 last:pb-0 lg:px-8 lg:py-0 lg:first:pl-0 lg:last:pr-0"
          >
            <p className="copy-caption text-subtle-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="heading-h3 mt-3">{pillar.word}</h3>
            <p className="copy-body text-muted-foreground mt-3">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
