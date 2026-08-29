import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/layout/PageContainer";

export interface SectionSubnavItem {
  key: string;
  label: string;
  href: string;
}

export interface SectionSubnavProps {
  items: SectionSubnavItem[];
  active: string;
  ariaLabel: string;
}

/**
 * A subtle, scoped secondary nav shared by the About and Technology
 * sections (and any future one), distinct from the global header nav.
 * Server Component: the active item is passed in by the page, not read
 * from a client-side pathname hook. Horizontally scrollable so it never
 * wraps or overflows on narrow screens.
 */
export function SectionSubnav({ items, active, ariaLabel }: SectionSubnavProps) {
  return (
    <nav aria-label={ariaLabel} className="border-border bg-background border-b">
      <PageContainer>
        <ul className="flex gap-6 overflow-x-auto">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <li key={item.key} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "label-nav block border-b-2 py-4 transition-colors duration-(--duration-fast) ease-(--ease-standard)",
                    isActive
                      ? "border-champagne-gold text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </nav>
  );
}
