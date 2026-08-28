import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { leadership } from "@/data/leadership";

/**
 * Minimal, centered editorial statement, reused on both the homepage and
 * /about (see docs/17 IA notes: shared across pages, not home-specific).
 * Leadership data is empty (no verified public titles yet): this renders
 * the section's visual structure honestly rather than inventing bios.
 */
export function LeadershipPreview() {
  const hasLeadership = leadership.length > 0;

  return (
    <Section tone="sapphire" width="narrow" className="text-center">
      <p className="label-eyebrow mb-4 text-champagne-gold">Leadership</p>
      <h2 className="heading-h2">Guided by experienced leadership.</h2>
      <p className="copy-body-lg text-titanium-silver mt-6">
        {hasLeadership
          ? "Meet the team guiding NUVAIX GROUP across its business divisions."
          : "NUVAIX GROUP is led by a team committed to disciplined growth across every division. Verified leadership profiles will be published here as they are confirmed."}
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/about/leadership" variant="outline">
          Meet the Team
        </Button>
      </div>
    </Section>
  );
}
