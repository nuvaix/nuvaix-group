import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { BusinessDivision } from "@/data/businesses";

export interface BusinessCapabilitiesProps {
  business: BusinessDivision;
}

/**
 * A divided typographic row (matching the homepage Value Framework and
 * About Values approach), not a generic three/four-card grid. Gracefully
 * handles one, two or three capabilities without special-casing: the
 * divide-x utility simply shows no dividers when there is nothing
 * adjacent to divide.
 */
export function BusinessCapabilities({ business }: BusinessCapabilitiesProps) {
  if (business.capabilities.length === 0) {
    return null;
  }

  return (
    <Section tone="sapphire">
      <SectionHeading eyebrow="Capabilities" title={`Where ${business.name} focuses.`} />
      <div className="divide-border mt-12 grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {business.capabilities.map((capability, index) => (
          <div key={capability} className="py-6 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
            <p className="copy-caption text-subtle-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="heading-h4 mt-2">{capability}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
