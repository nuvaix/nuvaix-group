"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { MenuIcon } from "@/components/icons";
import { Wordmark } from "./Wordmark";
import { DesktopNavigation, type OpenMenu } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { headerCtas } from "@/data/navigation";

const MOBILE_NAV_ID = "mobile-navigation";

/**
 * The one genuinely stateful piece of the navigation system: scroll
 * elevation, which desktop dropdown (if any) is open, and whether the
 * mobile drawer is open. Every other navigation component is
 * presentational and receives its behavior as props from here.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close any open desktop dropdown and the mobile drawer on route change.
  // Adjusting state during render (React's documented pattern for
  // "resetting state when a value changes") rather than in an effect,
  // since doing it in an effect would cause an extra render on every
  // navigation for no benefit.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [openMenu]);

  return (
    <header
      className={cn(
        "border-b bg-background sticky top-0 z-(--z-sticky) transition-shadow duration-(--duration-base) ease-(--ease-standard)",
        scrolled ? "border-border shadow-subtle" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-content items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <div ref={navRef} className="flex flex-1 items-center justify-center">
          <DesktopNavigation
            openMenu={openMenu}
            onOpenMenuChange={setOpenMenu}
            activePath={pathname}
          />
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href={headerCtas[0].href} variant="outline" size="sm">
            {headerCtas[0].label}
          </Button>
          <Button href={headerCtas[1].href} variant="gold" size="sm">
            {headerCtas[1].label}
          </Button>
        </div>

        <IconButton
          variant="ghost"
          className="xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls={MOBILE_NAV_ID}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <MenuIcon size={22} />
        </IconButton>
      </div>

      <MobileNavigation
        id={MOBILE_NAV_ID}
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        activePath={pathname}
      />
    </header>
  );
}
