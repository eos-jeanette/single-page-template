import type { ReactNode } from "react";

type NotchCorner =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-left-bottom-right"
  | "all";

interface NotchedPanelProps {
  corner?: NotchCorner;
  className?: string;
  children: ReactNode;
}

const notchClasses: Record<NotchCorner, string> = {
  "top-left": "notch-top-left",
  "top-right": "notch-top-right",
  "bottom-left": "notch-bottom-left",
  "bottom-right": "notch-bottom-right",
  "top-left-bottom-right": "notch-top-left-bottom-right",
  all: "notch-all",
};

export default function NotchedPanel({
  corner = "all",
  className = "",
  children,
}: NotchedPanelProps) {
  return (
    <div className={`${notchClasses[corner]} ${className}`}>{children}</div>
  );
}
