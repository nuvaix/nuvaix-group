import Link from "next/link";
import { businesses } from "@/data/businesses";
import { ArrowRightIcon } from "@/components/icons";

export interface BusinessesMegaMenuProps {
  id: string;
  open: boolean;
  onNavigate: () => void;
}

/**
 * Presentational: no "use client" of its own. Open/close state and the
 * Escape/outside-click handling live in Header. This panel deliberately
 * has no hover handlers of its own: it used to (calling the same
 * onOpenMenuChange as its trigger), but that created two independent
 * hoverable regions (the small trigger wrapper and this separately
 * positioned panel, siblings in the DOM, not parent/child) with a real
 * gap in DOM-tree membership between them. Moving the pointer from the
 * trigger onto this panel fired the trigger's mouseleave (since this
 * panel is not one of its descendants) before this panel's own
 * mouseenter could catch it, closing the menu mid-transit. This panel is
 * a descendant of the same outer wrapper that now owns the single
 * mouseleave check for this menu (see DesktopNavigation.tsx), so hovering
 * anywhere from the trigger through this panel never exits that shared
 * ancestor's subtree. The padding (not margin) below still matters: it
 * keeps this panel's own box flush against the trigger with no
 * unrendered gap in between.
 */
export function BusinessesMegaMenu({ id, open, onNavigate }: BusinessesMegaMenuProps) {
  return (
    <div
      hidden={!open}
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
