"use client";

import { useEffect, useState, type ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[];
  labels?: string[];
  intervalMs?: number;
  className?: string;
  variant?: "bars" | "dots";
  dotsClassName?: string;
}

const STEP_MS = 40;

export default function Carousel({
  slides,
  labels,
  intervalMs = 6000,
  className = "",
  variant = "bars",
  dotsClassName = "mt-8",
}: CarouselProps) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSteps = intervalMs / STEP_MS;
    let step = 0;

    const id = window.setInterval(() => {
      step += 1;
      if (step >= totalSteps) {
        step = 0;
        setProgress(0);
        setActive((prev) => (prev + 1) % slides.length);
      } else {
        setProgress((step / totalSteps) * 100);
      }
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [active, intervalMs, slides.length]);

  const goTo = (index: number) => {
    setActive(index);
    setProgress(0);
  };

  return (
    <div className={className}>
      <div className="grid">
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={index !== active}
            className={`col-start-1 row-start-1 transition-opacity duration-500 ${
              index === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {variant === "dots" ? (
        <div className={`flex gap-2 ${dotsClassName}`}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={labels?.[index] ?? `Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === active ? "bg-current" : "bg-current/30"
              }`}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={labels?.[index] ?? `Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className="relative h-1 flex-1 overflow-hidden rounded-full bg-current/15"
            >
              <span
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100"
                style={{
                  width:
                    index === active
                      ? `${progress}%`
                      : index < active
                        ? "100%"
                        : "0%",
                }}
              />
            </button>
          ))}
        </div>
      )}

      {labels && (
        <div className="mt-5 flex flex-wrap gap-3">
          {labels.map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => goTo(index)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                index === active
                  ? "border-accent bg-accent text-text-dark"
                  : "border-current/20 hover:border-current/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
