import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";
import { businesses } from "@/data/businesses";

/**
 * Asymmetric editorial two-column layout, echoing
 * components/technology/TechnologyOverview.tsx and
 * components/paint/PaintOverview.tsx's pattern with Projects-specific
 * copy. States the role of project work within NUVAIX GROUP using only
 * verified counts (business division total, legal identity), never a
 * specific case study or outcome claim.
 */
export function ProjectsIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Delivered Work</p>
          <h2 className="heading-h2">Where NUVAIX GROUP&apos;s capability becomes delivered work.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            NUVAIX GROUP operates across {businesses.length} business divisions under{" "}
            {company.legalName} (RC {company.rcNumber}). This directory is where completed,
            verified project work from across those divisions will be presented.
          </p>
          <p className="copy-body text-muted-foreground">
            Only genuine, confirmed NUVAIX projects are published here. No case study, image or
            outcome is added until it is verified.
          </p>
        </div>
      </div>
    </Section>
  );
}
