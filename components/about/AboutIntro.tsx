import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";

/** Asymmetric editorial two-column layout, distinct from the homepage's
 * more even-columned "Who We Are". */
export function AboutIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Who We Are</p>
          <h2 className="heading-h2">A diversified, technology-driven enterprise.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            NUVAIX GROUP is the brand identity of {company.legalName} (RC {company.rcNumber}), a
            diversified, technology-driven enterprise. The Group is structured to operate across
            multiple business divisions, from construction and engineering to technology,
            healthcare, logistics and investment, rather than a single-industry company.
          </p>
          <p className="copy-body text-muted-foreground">
            Technology sits at the center of how NUVAIX GROUP operates, alongside NUVAIX Paint, a
            planned premium paint manufacturing and e-commerce initiative. Each division is intended
            to operate with its own expertise while sharing one brand line: {company.brandLine}.
          </p>
        </div>
      </div>
    </Section>
  );
}
