import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ArrowRightIcon } from "@/components/icons";

const pillars = [
  { label: "Mission", teaser: "What NUVAIX GROUP exists to accomplish.", href: "/about/mission" },
  {
    label: "Vision",
    teaser: "The long-term direction NUVAIX GROUP is building toward.",
    href: "/about/vision",
  },
  {
    label: "Values",
    teaser: "The principles behind the NUVAIX brand and how it operates.",
    href: "/about/values",
  },
];

/** A divided typographic row, matching the homepage Value Framework's
 * approach rather than a third card grid on the same page. */
export function CorporatePillarsPreview() {
  return (
    <Section tone="black">
      <SectionHeading eyebrow="Explore Further" title="Mission, vision and values." />

      <div className="divide-border mt-12 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {pillars.map((pillar) => (
          <Link
            key={pillar.label}
            href={pillar.href}
            className="group block py-8 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
          >
            <h3 className="heading-h3 group-hover:text-champagne-gold transition-colors duration-(--duration-fast) ease-(--ease-standard)">
              {pillar.label}
            </h3>
            <p className="copy-body text-muted-foreground mt-3">{pillar.teaser}</p>
            <span className="label-nav mt-6 inline-flex items-center gap-2 text-champagne-gold">
              Read more
              <ArrowRightIcon size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
