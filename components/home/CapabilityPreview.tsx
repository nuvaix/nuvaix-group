import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { businesses } from "@/data/businesses";
import { projects } from "@/data/projects";

const featuredCapabilities = businesses.slice(0, 4);

/**
 * Renders real projects automatically once data/projects.ts has entries.
 * Until then (today, always), falls back to a capability-led
 * presentation built from verified business divisions, never invented
 * case studies. A hairline bordered grid, distinct from the earlier
 * gapped card grids, for portfolio-style visual variety.
 */
export function CapabilityPreview() {
  const hasProjects = projects.length > 0;

  return (
    <Section tone="black">
      <SectionHeading
        eyebrow="Capabilities"
        title="Capability in action."
        description={
          hasProjects
            ? "A selection of NUVAIX GROUP work across our business divisions."
            : "NUVAIX GROUP's capability spans every division of the business. A curated portfolio of completed projects will appear here as work is finished and verified."
        }
      />

      {hasProjects ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} tone="elevated" href={`/projects/${project.slug}`}>
              <p className="copy-caption text-subtle-foreground">{project.category}</p>
              <h3 className="heading-h4 mt-2">{project.title}</h3>
              <p className="copy-body-sm text-muted-foreground mt-2">
                {project.location}, {project.year}
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <div className="border-border mt-12 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4">
          {featuredCapabilities.map((business) => (
            <div key={business.slug} className="bg-surface p-6">
              <p className="copy-caption text-subtle-foreground tabular-nums">{business.number}</p>
              <p className="copy-body mt-2 font-medium text-foreground">{business.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Button href="/projects" variant="outline">
          View Projects
        </Button>
      </div>
    </Section>
  );
}
