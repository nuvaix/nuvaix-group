import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type DividerProps = HTMLAttributes<HTMLHRElement>;

export function Divider({ className, ...rest }: DividerProps) {
  return <hr className={cn("border-t border-border", className)} {...rest} />;
}
