import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { GeometricField, type GeometricFieldTone } from "@/components/home/GeometricField";

export interface CorporatePageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  /** Show the abstract GeometricField background. Defaults to true. */
  visual?: boolean;
  visualTone?: GeometricFieldTone;
  cta?: { label: string; href: string };
}

/**
 * The shared hero for every About-section page, so each one does not
 * reimplement the same layout. Deliberately shorter than the homepage's
 * full-viewport cinematic hero (Section size="large", not min-h-screen):
 * internal pages should feel related to the homepage, not identical to it.
 */
export function CorporatePageHero({
  eyebrow,
  title,
  description,
  theme = "dark",
  visual = true,
  visualTone = "silver",
  cta,
}: CorporatePageHeroProps) {
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
          <div className="mt-10">
            <Button href={cta.href} variant="gold">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </PageContainer>
    </Section>
  );
}
