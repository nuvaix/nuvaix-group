import Link from "next/link";
import type { NavChildLink } from "@/data/navigation";

export interface NavDropdownProps {
  id: string;
  open: boolean;
  items: NavChildLink[];
  onNavigate: () => void;
}

/** Presentational: the simple Technology / Paint dropdown panels. */
export function NavDropdown({ id, open, items, onNavigate }: NavDropdownProps) {
  return (
    <div
      id={id}
      hidden={!open}
      className="border-border bg-surface shadow-elevated absolute top-full left-0 z-(--z-dropdown) mt-3 w-56 rounded-xl border p-2"
    >
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
  );
}
