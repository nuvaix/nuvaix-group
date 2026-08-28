"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { primaryNav, headerCtas } from "@/data/navigation";
import { businesses } from "@/data/businesses";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { CloseIcon } from "@/components/icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { Wordmark } from "./Wordmark";

export interface MobileNavigationProps {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activePath: string;
}

function isActive(href: string, activePath: string) {
  return activePath === href || activePath.startsWith(`${href}/`);
}

/**
 * A full-screen mobile navigation drawer built on the native <dialog>
 * element via showModal(), the same technique as components/ui/Dialog:
 * real focus trapping, Escape-to-close and focus restoration for free.
 * It is a separate component (not a reuse of the styled Dialog) because
 * its structure (edge-to-edge, header row, scrollable nav list, footer
 * CTAs) is not a title/description confirmation dialog; the primitive
 * being reused is "native dialog for a focus-trapped overlay," not the
 * Dialog component's specific card layout. It composes the existing
 * Accordion for expandable sections rather than reimplementing that logic.
 */
export function MobileNavigation({ id, open, onOpenChange, activePath }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    const handleClose = () => onOpenChange(false);
    node.addEventListener("close", handleClose);
    return () => node.removeEventListener("close", handleClose);
  }, [onOpenChange]);

  const close = () => onOpenChange(false);

  return (
    <dialog
      id={id}
      ref={dialogRef}
      aria-label="Mobile navigation"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-background p-0 text-foreground xl:hidden"
    >
      <div className="flex h-full flex-col">
        <div className="border-border flex h-20 shrink-0 items-center justify-between border-b px-4 sm:px-6">
          <Wordmark onClick={close} />
          <IconButton variant="ghost" aria-label="Close menu" onClick={close}>
            <CloseIcon size={22} />
          </IconButton>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-4 py-2 sm:px-6">
          <Accordion type="single">
            {primaryNav.map((item) => {
              const active = isActive(item.href, activePath);

              if (!item.dropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-body-lg border-border block border-b py-4 font-medium",
                      active ? "text-champagne-gold" : "text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const children =
                item.dropdown === "businesses"
                  ? businesses.map((business) => ({
                      label: business.name,
                      href: `/businesses/${business.slug}`,
                    }))
                  : (item.children ?? []);

              return (
                <AccordionItem key={item.href} value={item.href} className="border-border border-b">
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-1 pb-2">
                      <li>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="copy-body text-champagne-gold block py-2 pl-4 font-medium"
                        >
                          {item.label} overview
                        </Link>
                      </li>
                      {children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="copy-body text-muted-foreground hover:text-foreground block py-2 pl-4"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>

        <div className="border-border shrink-0 space-y-3 border-t p-4 sm:p-6">
          <Button href={headerCtas[0].href} variant="outline" className="w-full" onClick={close}>
            {headerCtas[0].label}
          </Button>
          <Button href={headerCtas[1].href} variant="gold" className="w-full" onClick={close}>
            {headerCtas[1].label}
          </Button>
        </div>
      </div>
    </dialog>
  );
}
