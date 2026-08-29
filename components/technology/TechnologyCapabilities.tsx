import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { technologyCapabilities } from "@/data/technology";

const featured = technologyCapabilities.find((capability) => capability.featured);
const supporting = technologyCapabilities.filter((capability) => !capability.featured);

/**
 * A large featured capability beside a numbered supporting list, not a
 * generic three or four card grid (see Milestone 7 instructions).
 */
export function TechnologyCapabilities() {
  return (
    <Section tone="sapphire">
      <SectionHeading eyebrow="Capabilities" title="Where NUVAIX technology focuses." />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        {featured ? (
          <div>
            <p className="copy-caption text-subtle-foreground tabular-nums">01</p>
            <h3 className="heading-h2 mt-3">{featured.label}</h3>
            <p className="copy-body-lg text-muted-foreground mt-4 max-w-md">
              A core technology capability applied across NUVAIX GROUP&apos;s business divisions.
            </p>
          </div>
        ) : null}
        <ul className="divide-border divide-y">
          {supporting.map((capability, index) => (
            <li
              key={capability.label}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
            >
              <span className="copy-caption text-subtle-foreground tabular-nums">
                {String(index + 2).padStart(2, "0")}
              </span>
              <span className="copy-body-lg font-medium">{capability.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
