import Link from "next/link";
import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/layout/PageContainer";

export type CorporateSection = "about" | "mission" | "vision" | "values" | "leadership";

const items: { key: CorporateSection; label: string; href: string }[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "mission", label: "Mission", href: "/about/mission" },
  { key: "vision", label: "Vision", href: "/about/vision" },
  { key: "values", label: "Values", href: "/about/values" },
  { key: "leadership", label: "Leadership", href: "/about/leadership" },
];

export interface CorporateSubnavProps {
  active: CorporateSection;
}

/**
 * A subtle, scoped-to-About secondary nav, distinct from the global
 * header nav (Server Component: the active page is passed in, not read
 * from a client-side pathname hook). Horizontally scrollable so it never
 * wraps or overflows on narrow screens.
 */
export function CorporateSubnav({ active }: CorporateSubnavProps) {
  return (
    <nav aria-label="About NUVAIX" className="border-border bg-background border-b">
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
