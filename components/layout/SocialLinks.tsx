import type { ComponentType } from "react";
import { IconButton, type IconButtonSize } from "@/components/ui/IconButton";
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons";
import { company } from "@/data/company";
import type { SocialPlatform } from "@/types/company";

const platformIcon: Record<SocialPlatform, ComponentType<{ size?: number }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export interface SocialLinksProps {
  size?: IconButtonSize;
  className?: string;
}

/**
 * The single, centralized rendering of NUVAIX's verified social
 * profiles (data/company.ts's socialLinks), reused by Footer and the
 * Contact page rather than each hardcoding the same URLs and icons.
 * Renders nothing if socialLinks is empty, so this stays safe to use
 * even before any account is verified.
 */
export function SocialLinks({ size = "sm", className }: SocialLinksProps) {
  const links = company.socialLinks ?? [];

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className={className ? `flex flex-wrap gap-2 ${className}` : "flex flex-wrap gap-2"}>
      {links.map((link) => {
        const Icon = platformIcon[link.platform];
        return (
          <li key={link.platform}>
            <IconButton
              variant="secondary"
              size={size}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon size={18} />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
}
