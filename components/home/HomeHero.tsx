import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { company } from "@/data/company";
import { GeometricField } from "./GeometricField";

/**
 * The one full-bleed, bespoke section on the homepage: everything else
 * composes Section/SectionHeading, but the cinematic hero intentionally
 * does not use the standard section heading pattern.
 */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-deep-black text-off-white">
      <GeometricField tone="silver" />
      <div className="relative mx-auto w-full max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <p className="label-eyebrow animate-reveal mb-6 text-champagne-gold">{company.brandName}</p>
        <h1
          className="heading-display animate-reveal max-w-4xl [animation-delay:80ms]"
          aria-label={company.heroLines.join(" ")}
        >
          {company.heroLines.map((line) => (
            <span key={line} aria-hidden="true" className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="copy-body-lg text-titanium-silver animate-reveal mt-8 max-w-xl [animation-delay:200ms]">
          NUVAIX GROUP is a diversified, technology-driven enterprise focused on creating innovative
          solutions across multiple industries.
        </p>
        <div className="animate-reveal mt-10 flex flex-wrap gap-4 [animation-delay:320ms]">
          <Button href="/businesses" variant="gold" size="lg">
            Explore Our Businesses
            <ArrowRightIcon size={18} aria-hidden="true" />
          </Button>
          <Button href="/partnerships" variant="outline" size="lg">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
