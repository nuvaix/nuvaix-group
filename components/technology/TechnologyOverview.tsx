import { Section } from "@/components/layout/Section";

/** Asymmetric editorial two-column layout, echoing the About/Home intro
 * pattern with technology-specific copy (no exact duplication). */
export function TechnologyOverview() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Technology at NUVAIX</p>
          <h2 className="heading-h2">A technology orientation across every division.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            Technology sits at the center of how NUVAIX GROUP operates. As one of the Group&apos;s
            ten business divisions, Technology &amp; IT Solutions brings software, IT and technical
            expertise to NUVAIX GROUP and the industries it serves.
          </p>
          <p className="copy-body text-muted-foreground">
            This section presents NUVAIX GROUP&apos;s broader technology capability and training
            offering, alongside the Technology &amp; IT Solutions business division itself.
          </p>
        </div>
      </div>
    </Section>
  );
}
