import type { IconProps } from "./types";

/** A simplified musical-note glyph (TikTok's mark is itself a note),
 * built from the same stroke technique as the rest of this folder's
 * icons rather than a complex filled brand path. */
export function TikTokIcon({ size = 24, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="9" cy="17" r="3.5" />
      <path d="M12.5 17V4c1.5 2.5 3.8 3.3 6 3.4" />
    </svg>
  );
}
