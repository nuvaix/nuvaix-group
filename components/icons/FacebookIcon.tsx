import type { IconProps } from "./types";

/** See GitHubIcon.tsx for why this is a filled brand glyph rather than a
 * stroked UI icon. */
export function FacebookIcon({ size = 24, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.87.24-1.46 1.5-1.46H17V4.86A20 20 0 0 0 14.68 4.75c-2.28 0-3.84 1.39-3.84 3.95V11H8.5v3H10.84v7h3.16z" />
    </svg>
  );
}
