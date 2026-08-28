"use client";

import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Accessible Tabs following the WAI-ARIA Tabs pattern (roving tabindex,
 * arrow-key navigation). Used later for business categories, Paint
 * products, project filtering and training information (not built yet).
 */

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
  idBase: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(componentName: string) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(`${componentName} must be used within Tabs`);
  }
  return context;
}

export interface TabsProps {
  defaultValue: string;
  /** Supply with onValueChange to fully control the active tab. */
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
}

export function Tabs({ defaultValue, value, onValueChange, className, children }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const idBase = useId();
  const isControlled = value !== undefined;
  const current = isControlled ? value : internalValue;

  const setValue = (next: string) => {
    if (!isControlled) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: current, setValue, idBase }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabListProps {
  "aria-label": string;
  className?: string;
  children: ReactNode;
}

export function TabList({ className, children, ...rest }: TabListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const list = listRef.current;
    if (!list) return;

    const tabs = Array.from(
      list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
    );
    const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      nextTab?.focus();
      nextTab?.click();
    }
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      onKeyDown={handleKeyDown}
      className={cn("border-border flex gap-2 overflow-x-auto border-b", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface TabTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export function TabTrigger({ value, disabled, className, children }: TabTriggerProps) {
  const { value: activeValue, setValue, idBase } = useTabsContext("TabTrigger");
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${idBase}-tab-${value}`}
      aria-selected={isActive}
      aria-controls={`${idBase}-panel-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => setValue(value)}
      className={cn(
        "label-nav text-muted-foreground -mb-px shrink-0 border-b-2 px-1 py-3 transition-colors duration-(--duration-fast) ease-(--ease-standard) disabled:pointer-events-none disabled:opacity-50",
        isActive ? "border-accent text-foreground" : "border-transparent hover:text-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export interface TabPanelProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function TabPanel({ value, className, children }: TabPanelProps) {
  const { value: activeValue, idBase } = useTabsContext("TabPanel");
  const isActive = activeValue === value;

  return (
    <div
      role="tabpanel"
      id={`${idBase}-panel-${value}`}
      aria-labelledby={`${idBase}-tab-${value}`}
      hidden={!isActive}
      tabIndex={0}
      className={cn("pt-6", className)}
    >
      {children}
    </div>
  );
}
