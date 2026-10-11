import Link from "next/link";
import type { NavChildLink } from "@/data/navigation";

export interface NavDropdownProps {
  id: string;
  open: boolean;
  items: NavChildLink[];
  onNavigate: () => void;
}

/**
 * Presentational: the simple Technology / Paint dropdown panels.
 *
 * The outer element is positioned flush against the trigger (top-full,
 * zero gap) and uses padding, not margin, to create the visual space
 * above the visible panel. Padding is part of the element's own
 * hoverable box; margin is not. This element is already a DOM child of
 * the same wrapper that has the trigger's onMouseEnter/onMouseLeave (see
 * DesktopNavigation.tsx), so keeping this gap padding-based, not
 * margin-based, means the pointer never crosses genuinely empty,
 * unrendered space while moving from the trigger into the panel, and
 * the trigger's mouseleave never fires prematurely mid-transit.
 */
export function NavDropdown({ id, open, items, onNavigate }: NavDropdownProps) {
  return (
    <div hidden={!open} className="absolute top-full left-0 z-(--z-dropdown) w-56 pt-3">
      <div id={id} className="border-border bg-surface shadow-elevated rounded-xl border p-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className="label-nav hover:bg-surface-hover block rounded-md px-4 py-2.5 text-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard)"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
