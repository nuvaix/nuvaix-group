import { cn } from "@/lib/utils";
import { Divider } from "@/components/ui/Divider";

const brandPalette = [
  { name: "Midnight Sapphire", className: "bg-midnight-sapphire" },
  { name: "Titanium Silver", className: "bg-titanium-silver" },
  { name: "Champagne Gold", className: "bg-champagne-gold" },
];

/**
 * A deliberately restrained, typographic introduction for the future
 * Paint color experience (Milestone 8, Colors Page), mirroring
 * components/technology/CourseEmptyState.tsx's intentional-not-broken
 * tone. No paint-specific color catalog (data/paint-colors.ts) has been
 * verified yet, so this shows the existing NUVAIX brand palette that
 * already guides the site's UI, rather than inventing paint swatches,
 * names or hex codes.
 */
export function PaintColorExperience() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Divider className="mx-auto mb-10 w-16" />
      <p className="label-eyebrow mb-4 text-champagne-gold">Color Experience</p>
      <h2 className="heading-h3">A NUVAIX Paint color catalog is in development.</h2>
      <p className="copy-body text-muted-foreground mt-4">
        NUVAIX GROUP is developing a verified NUVAIX Paint color catalog. Until specific paint
        colors are confirmed, this section is guided by the NUVAIX brand palette shown below.
      </p>
      <div className="mt-10 grid grid-cols-3 gap-4">
        {brandPalette.map((color) => (
          <div key={color.name}>
            <div
              className={cn("aspect-square w-full rounded-xl border border-border", color.className)}
              aria-hidden="true"
            />
            <p className="copy-caption text-subtle-foreground mt-3">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
