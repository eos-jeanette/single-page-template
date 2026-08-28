import type { SVGProps } from "react";
import type { ServiceIconName } from "@/content/types";

interface ServiceIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: ServiceIconName;
}

export default function ServiceIcon({ name, className = "", ...props }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-6 w-6 shrink-0 ${className}`}
      {...props}
    >
      {name === "cube" && (
        <path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Zm0 9v9m0-9L3 7.5m9 4.5 9-4.5" />
      )}
      {name === "sync" && (
        <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M17 3v4h-4M7 21v-4h4" />
      )}
      {name === "layers" && (
        <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
      )}
      {name === "eye" && (
        <>
          <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
      {name === "network" && (
        <path d="M12 2v6m0 8v6M4.2 6.2l4.2 4.2m7.2 3.2 4.2 4.2M2 12h6m8 0h6M4.2 17.8l4.2-4.2m7.2-3.2 4.2-4.2" />
      )}
    </svg>
  );
}
