"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import type { HeroContent } from "@/content/types";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const el = graphicRef.current;
      if (!el) return;
      const scrollY = window.scrollY;
      const translate = Math.min(scrollY * 0.25, 120);
      const scale = 1 + Math.min(scrollY / 2000, 0.15);
      const opacity = Math.max(1 - scrollY / 600, 0.15);
      el.style.transform = `translateY(${translate}px) scale(${scale})`;
      el.style.opacity = `${opacity}`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_140%_at_15%_0%,var(--hero-grad-start)_0%,var(--hero-grad-end)_100%)] px-6 pt-28 pb-16 text-text-light">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-6 max-w-xl text-lg text-text-light/80">
              {content.subheadline}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-paper/20 px-4 py-1.5 text-sm text-text-light/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="ghost">
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div
            ref={graphicRef}
            className="relative h-72 w-72 sm:h-96 sm:w-96"
          >
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,var(--color-highlight2),var(--color-highlight),var(--color-highlight3),var(--color-highlight2))] opacity-40 blur-2xl" />
            <div className="absolute inset-6 rounded-full border border-dashed border-paper/25" />
            <div className="absolute inset-14 rounded-full border border-paper/15" />
            <div className="absolute inset-24 rounded-full bg-paper/5 backdrop-blur-sm" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-paper/10 pt-10">
        <Marquee>
          {content.logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.image}
              alt={logo.alt}
              width={120}
              height={40}
              sizes="120px"
              className="opacity-60 grayscale transition-opacity hover:opacity-100"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
