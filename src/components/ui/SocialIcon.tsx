import type { SVGProps } from "react";
import type { SocialPlatform } from "@/content/types";

interface SocialIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  platform: SocialPlatform;
}

export default function SocialIcon({ platform, className = "", ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
      {...props}
    >
      {platform === "facebook" && (
        <path d="M15 8h-2a2 2 0 0 0-2 2v3H9v3h2v6h3v-6h2l1-3h-3v-2a1 1 0 0 1 1-1h2z" />
      )}
      {platform === "linkedin" && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3" />
        </>
      )}
      {platform === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </>
      )}
      {platform === "twitter" && <path d="M4 4l16 16M20 4 4 20" />}
    </svg>
  );
}
