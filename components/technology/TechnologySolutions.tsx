import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { technologyCapabilities } from "@/data/technology";
import { company } from "@/data/company";

/**
 * Solution categories reuse data/technology.ts directly (the same
 * verified capability list the homepage and /technology already use),
 * framed for a solutions-shopping context rather than duplicated as a
 * separate, richer "solution" data model with no verified content to
 * fill it.
 */
export function TechnologySolutions() {
  return (
    <>
      <Section tone="black">
        <SectionHeading
          eyebrow="Solution Categories"
          title="Where NUVAIX technology solutions focus."
          description="NUVAIX GROUP's technology solutions are organized around the following verified capability areas."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {technologyCapabilities.map((capability) => (
            <li key={capability.label}>
              <Badge variant="outline">{capability.label}</Badge>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sapphire">
        <SectionHeading
          eyebrow="Our Approach"
          title="How NUVAIX approaches technology."
          description={`NUVAIX GROUP applies its brand principles, ${company.brandLine}, to every technology engagement across the Group.`}
        />
      </Section>
    </>
  );
}
