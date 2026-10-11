import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { insightCategories } from "@/data/insights";

/**
 * Asymmetric editorial two-column layout, echoing
 * components/technology/TechnologyOverview.tsx and
 * components/projects/ProjectsIntro.tsx's pattern with
 * Insights-specific copy. States the role of Insights within NUVAIX
 * GROUP and shows the site's planned editorial category scope
 * (docs/03-page-specifications.md) as badges, an information-
 * architecture fact, not a claim that content already exists in each
 * category.
 */
export function InsightsIntro() {
  return (
    <Section tone="black">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Editorial</p>
          <h2 className="heading-h2">Perspective from across NUVAIX GROUP.</h2>
        </div>
        <div className="space-y-6">
          <p className="copy-body-lg text-titanium-silver">
            Insights is where NUVAIX GROUP will publish corporate news and perspective drawn from
            its business divisions. Only genuine, verified articles are published here.
          </p>
          <ul className="flex flex-wrap gap-2">
            {insightCategories.map((category) => (
              <li key={category}>
                <Badge variant="outline">{category}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
