"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";

/**
 * Accessible Accordion, used later for FAQs, course curricula, service
 * information and Paint product information (not built yet). Height
 * animates via a CSS grid-template-rows transition rather than JS height
 * measurement; closed panels are also `inert` so they cannot receive
 * keyboard focus while visually collapsed.
 */

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (itemValue: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext(componentName: string) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`${componentName} must be used within an Accordion`);
  }
  return context;
}

function toArray(value: string | string[] | undefined): string[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export interface AccordionProps {
  /** "single" (default): only one item open at a time. "multiple": any
   * number of items can be open together. */
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  /** Supply with onValueChange to fully control which item(s) are open. */
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  /** For type="single": whether the open item can be closed, leaving none
   * open. Defaults to true. */
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export function Accordion({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  collapsible = true,
  className,
  children,
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string[]>(() => toArray(defaultValue));
  const isControlled = value !== undefined;
  const openItems = isControlled ? toArray(value) : internalValue;

  const toggleItem = (itemValue: string) => {
    const isOpen = openItems.includes(itemValue);
    let next: string[];

    if (type === "single") {
      next = isOpen ? (collapsible ? [] : openItems) : [itemValue];
    } else {
      next = isOpen ? openItems.filter((item) => item !== itemValue) : [...openItems, itemValue];
    }

    if (!isControlled) {
      setInternalValue(next);
    }
    onValueChange?.(type === "single" ? (next[0] ?? "") : next);
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("divide-border divide-y", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextValue {
  value: string;
  id: string;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext(componentName: string) {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(`${componentName} must be used within an AccordionItem`);
  }
  return context;
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const id = useId();
  return (
    <AccordionItemContext.Provider value={{ value, id }}>
      <div className={className}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps {
  /** Heading element wrapping the trigger button, for correct document
   * outline. Defaults to h3; set to match where the Accordion sits. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({
  as: Heading = "h3",
  className,
  children,
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext("AccordionTrigger");
  const { value, id } = useAccordionItemContext("AccordionTrigger");
  const isOpen = openItems.includes(value);

  return (
    <Heading className="contents">
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={() => toggleItem(value)}
        className={cn(
          "text-body-lg flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-foreground transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:text-accent",
          className,
        )}
      >
        <span>{children}</span>
        <ChevronDownIcon
          size={20}
          aria-hidden="true"
          className={cn(
            "text-muted-foreground shrink-0 transition-transform duration-(--duration-base) ease-(--ease-standard)",
            isOpen && "rotate-180",
          )}
        />
      </button>
    </Heading>
  );
}

export interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  const { openItems } = useAccordionContext("AccordionContent");
  const { value, id } = useAccordionItemContext("AccordionContent");
  const isOpen = openItems.includes(value);

  return (
    <div
      id={`${id}-panel`}
      role="region"
      aria-labelledby={`${id}-trigger`}
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "grid transition-[grid-template-rows] duration-(--duration-base) ease-(--ease-standard)",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("copy-body text-muted-foreground pt-1 pb-5", className)}>{children}</div>
      </div>
    </div>
  );
}
