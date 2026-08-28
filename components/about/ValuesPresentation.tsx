import { company } from "@/data/company";
import { Section } from "@/components/layout/Section";

/**
 * The brand line (INNOVATE, BUILD, DELIVER, GROW) is presented here as
 * NUVAIX's brand principles, not asserted as a separately adopted,
 * formal corporate values statement: no such document has been
 * supplied. A large opening statement followed by numbered sections
 * (meaning + application per pillar), not a four-card grid.
 */
export function ValuesPresentation() {
  return (
    <>
      <Section tone="black">
        <p className="label-eyebrow mb-6 text-champagne-gold">Brand Principles</p>
        <p className="heading-h1 max-w-3xl">
          NUVAIX GROUP&apos;s brand is built on four principles that shape how the Group works, in
          every division.
        </p>
      </Section>

      <Section tone="sapphire">
        <div className="divide-border divide-y">
          {company.valuePillars.map((pillar, index) => (
            <div
              key={pillar.word}
              className="grid gap-6 py-12 first:pt-0 last:pb-0 lg:grid-cols-[1fr_2fr] lg:gap-16"
            >
              <div>
                <p className="copy-caption text-subtle-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="heading-h2 mt-3">{pillar.word}</h2>
              </div>
              <div className="space-y-4">
                <p className="copy-body-lg text-titanium-silver">{pillar.meaning}</p>
                <p className="copy-body text-muted-foreground">{pillar.application}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
