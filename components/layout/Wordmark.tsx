import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export interface WordmarkProps {
  className?: string;
  onClick?: () => void;
}

/**
 * The clickable brand mark used in the header and the mobile navigation
 * drawer. Renders the official Logo asset (see Logo.tsx and
 * ASSET_REFERENCE.md) behind a Link back to "/". Kept as its own
 * component, named Wordmark for API compatibility with existing callers
 * (Header.tsx, MobileNavigation.tsx already depend on this name and prop
 * shape), so introducing the real logo did not require touching either
 * of them.
 */
export function Wordmark({ className, onClick }: WordmarkProps) {
  return (
    <Link href="/" onClick={onClick} className={cn("shrink-0", className)}>
      <Logo variant="mark" size="md" priority />
    </Link>
  );
}
