import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/icons";
import { technologyCapabilities } from "@/data/technology";
import { GeometricField } from "./GeometricField";

/** Immersive dark section: full-bleed abstract background behind a
 * constrained content column, not a standard service card grid. */
export function TechnologyFeature() {
  return (
    <Section tone="black" container={false} className="relative overflow-hidden">
      <GeometricField tone="silver" />
      <PageContainer className="relative">
        <p className="label-eyebrow mb-4 text-champagne-gold">Technology</p>
        <h2 className="heading-display max-w-3xl">Technology that moves business forward.</h2>
        <p className="copy-body-lg text-titanium-silver mt-6 max-w-xl">
          Technology is central to how NUVAIX GROUP operates and grows, spanning software,
          infrastructure and digital transformation across every division.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {technologyCapabilities.map((capability) => (
            <li key={capability.label}>
              <Badge variant="outline">{capability.label}</Badge>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/technology" variant="gold">
            Explore Technology
            <ArrowRightIcon size={18} aria-hidden="true" />
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}
