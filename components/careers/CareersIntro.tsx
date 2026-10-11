import { Section } from "@/components/layout/Section";
import { company } from "@/data/company";
import { businesses } from "@/data/businesses";

/**
 * Asymmetric editorial two-column layout, echoing
 * components/projects/ProjectsIntro.tsx and
 * components/insights/InsightsIntro.tsx's pattern. Deliberately
 * conservative copy (Milestone 12, Careers and Corporate Values): states
 * only the verified legal identity and division count, never an
 * employment promise ("great place to work", "growing team", "our
 * culture is") that is not explicitly verified.
 */
export function CareersIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">NUVAIX GROUP</p>
          <h2 className="heading-h2">A diversified enterprise.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            NUVAIX GROUP operates across {businesses.length} business divisions under{" "}
            {company.legalName} (RC {company.rcNumber}), guided by {company.brandLine}.
          </p>
          <p className="copy-body text-muted-foreground">
            This page is where verified NUVAIX GROUP job openings will be published, with real
            role details rather than generic recruitment language.
          </p>
        </div>
      </div>
    </Section>
  );
}
