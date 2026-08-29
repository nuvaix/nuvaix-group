import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { GeometricField, type GeometricFieldTone } from "@/components/home/GeometricField";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  /** Show the abstract GeometricField background. Defaults to true. */
  visual?: boolean;
  visualTone?: GeometricFieldTone;
  cta?: { label: string; href: string };
  /** An optional second, less prominent action alongside cta. */
  secondaryCta?: { label: string; href: string };
}

/**
 * The shared internal-page hero, used across the About section and the
 * business directory, so each page does not reimplement the same
 * layout. Deliberately shorter than the homepage's full-viewport
 * cinematic hero (Section size="large", not min-h-screen): internal
 * pages should feel related to the homepage, not identical to it.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  theme = "dark",
  visual = true,
  visualTone = "silver",
  cta,
  secondaryCta,
}: PageHeroProps) {
  const isLight = theme === "light";

  return (
    <Section
      tone={isLight ? "light" : "black"}
      size="large"
      container={false}
      className="relative overflow-hidden"
    >
      {visual ? <GeometricField tone={visualTone} /> : null}
      <PageContainer className="relative">
        <p
          className={cn(
            "label-eyebrow mb-4",
            isLight ? "text-midnight-sapphire" : "text-champagne-gold",
          )}
        >
          {eyebrow}
        </p>
        <h1
          className={cn(
            "heading-display max-w-3xl",
            isLight ? "text-deep-black" : "text-off-white",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "copy-body-lg mt-6 max-w-xl",
              isLight ? "text-deep-black/70" : "text-titanium-silver",
            )}
          >
            {description}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={cta.href} variant="gold">
              {cta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </PageContainer>
    </Section>
  );
}
