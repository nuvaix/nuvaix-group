import Link from "next/link";
import { businesses } from "@/data/businesses";
import { ArrowRightIcon } from "@/components/icons";

export interface BusinessesMegaMenuProps {
  id: string;
  open: boolean;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/**
 * Presentational: no "use client" of its own. Open/close state and the
 * Escape/outside-click handling live in Header; this only renders content
 * and calls onNavigate when a link is clicked. The hover region uses
 * padding (not margin) to reach the trigger button above it, so there is
 * no gap for the mouse to "leave" through between trigger and panel.
 */
export function BusinessesMegaMenu({
  id,
  open,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: BusinessesMegaMenuProps) {
  return (
    <div
      hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 z-(--z-dropdown) w-[min(72rem,90vw)] -translate-x-1/2 pt-3"
    >
      <div id={id} className="border-border bg-surface shadow-elevated rounded-xl border p-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <div>
            <p className="label-eyebrow text-champagne-gold mb-3">Businesses</p>
            <h2 className="heading-h4 mb-3">A diversified enterprise</h2>
            <p className="copy-body-sm text-muted-foreground mb-6">
              NUVAIX GROUP operates across ten business divisions under NUVAIX SOLUTIONS LTD.
            </p>
            <Link
              href="/businesses"
              onClick={onNavigate}
              className="label-nav text-champagne-gold hover:text-champagne-gold/80 inline-flex items-center gap-2"
            >
              View all businesses
              <ArrowRightIcon size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {businesses.map((business) => (
              <Link
                key={business.slug}
                href={`/businesses/${business.slug}`}
                onClick={onNavigate}
                className="group hover:bg-surface-hover flex items-start gap-3 rounded-md px-2 py-3 transition-colors duration-(--duration-fast) ease-(--ease-standard)"
              >
                <span className="copy-caption text-subtle-foreground mt-0.5 w-6 shrink-0 tabular-nums">
                  {business.number}
                </span>
                <span className="flex-1">
                  <span className="copy-body block font-medium text-foreground">
                    {business.name}
                  </span>
                  <span className="copy-caption text-muted-foreground">{business.category}</span>
                </span>
                <ArrowRightIcon
                  size={16}
                  aria-hidden="true"
                  className="text-subtle-foreground mt-1 shrink-0 opacity-0 transition-opacity duration-(--duration-fast) ease-(--ease-standard) group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
