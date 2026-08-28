import Link from "next/link";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/data/navigation";
import { ChevronDownIcon } from "@/components/icons";
import { BusinessesMegaMenu } from "./BusinessesMegaMenu";
import { NavDropdown } from "./NavDropdown";
import type { NavDropdownKey } from "@/data/navigation";

export type OpenMenu = NavDropdownKey | null;

export interface DesktopNavigationProps {
  openMenu: OpenMenu;
  onOpenMenuChange: (menu: OpenMenu) => void;
  activePath: string;
}

function isActive(href: string, activePath: string) {
  return activePath === href || activePath.startsWith(`${href}/`);
}

/**
 * Presentational: no "use client" of its own. All state (which dropdown
 * is open) and the Escape/outside-click handling live in Header; this
 * only renders the nav row and calls the handlers it is given.
 *
 * The Businesses mega menu is rendered outside the per-item wrapper,
 * positioned relative to the whole nav row instead of the individual
 * trigger: centering a wide panel under a single item near the left of
 * the row would run it off the edge of the viewport.
 */
export function DesktopNavigation({
  openMenu,
  onOpenMenuChange,
  activePath,
}: DesktopNavigationProps) {
  return (
    <div className="relative hidden xl:block">
      <nav aria-label="Primary" className="flex items-center">
        {primaryNav.map((item) => {
          const active = isActive(item.href, activePath);

          if (!item.dropdown) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "label-nav text-muted-foreground hover:text-foreground rounded-md px-4 py-2 transition-colors duration-(--duration-fast) ease-(--ease-standard)",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          }

          const isOpen = openMenu === item.dropdown;
          const panelId = `${item.dropdown}-panel`;

          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => onOpenMenuChange(item.dropdown ?? null)}
              onMouseLeave={() => onOpenMenuChange(null)}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onOpenMenuChange(isOpen ? null : (item.dropdown ?? null))}
                className={cn(
                  "label-nav text-muted-foreground hover:text-foreground flex items-center gap-1.5 rounded-md px-4 py-2 transition-colors duration-(--duration-fast) ease-(--ease-standard)",
                  (active || isOpen) && "text-foreground",
                )}
              >
                {item.label}
                <ChevronDownIcon
                  size={16}
                  aria-hidden="true"
                  className={cn(
                    "transition-transform duration-(--duration-fast) ease-(--ease-standard)",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {item.dropdown === "businesses" ? null : (
                <NavDropdown
                  id={panelId}
                  open={isOpen}
                  items={item.children ?? []}
                  onNavigate={() => onOpenMenuChange(null)}
                />
              )}
            </div>
          );
        })}
      </nav>

      <BusinessesMegaMenu
        id="businesses-panel"
        open={openMenu === "businesses"}
        onNavigate={() => onOpenMenuChange(null)}
        onMouseEnter={() => onOpenMenuChange("businesses")}
        onMouseLeave={() => onOpenMenuChange(null)}
      />
    </div>
  );
}
