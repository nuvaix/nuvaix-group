import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ArrowRightIcon } from "@/components/icons";
import { company } from "@/data/company";

/** Editorial two-column "Who We Are": a large statement beside a
 * supporting narrative, not a centered text block. */
export function HomeIntro() {
  return (
    <Section tone="sapphire">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="label-eyebrow mb-4 text-champagne-gold">Who We Are</p>
          <h2 className="heading-h1 max-w-lg">{company.brandLine}</h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="copy-body-lg text-titanium-silver">
            NUVAIX GROUP is the diversified enterprise brand of {company.legalName} (RC{" "}
            {company.rcNumber}). The Group operates across ten business divisions, from construction
            and engineering to technology and investments, united by a shared commitment to
            innovation, disciplined execution and long-term growth.
          </p>
          <Link
            href="/about"
            className="label-nav mt-8 inline-flex w-fit items-center gap-2 text-champagne-gold transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:text-champagne-gold/80"
          >
            Discover NUVAIX
            <ArrowRightIcon size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
