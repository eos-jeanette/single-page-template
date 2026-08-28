import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionContainerProps {
  id?: string;
  heading?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  headerClassName?: string;
  headingClassName?: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  heading,
  description,
  align = "center",
  className = "bg-background-1",
  headerClassName = "",
  headingClassName = "text-text-dark",
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className={`px-6 py-24 text-text-dark ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(heading || description) && (
          <div
            className={`mb-14 ${
              align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
            } ${headerClassName}`}
          >
            {heading && (
              <Reveal>
                <h2
                  className={`text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${headingClassName}`}
                >
                  {heading}
                </h2>
              </Reveal>
            )}
            {description && (
              <Reveal delayMs={150}>
                <p className="mt-4 text-lg text-muted">{description}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
