import Link from "next/link";
import { cn } from "@/lib/utils";

export interface WordmarkProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Temporary text wordmark: no approved logo asset exists yet (see
 * docs/12-assets-and-brand.md). Isolated here so introducing a real logo
 * later is a one-file change; Header/Footer/MobileNavigation do not need
 * to change.
 */
export function Wordmark({ className, onClick }: WordmarkProps) {
  return (
    <Link href="/" onClick={onClick} className={cn("label-button text-foreground", className)}>
      NUVAIX <span className="text-champagne-gold">GROUP</span>
    </Link>
  );
}
