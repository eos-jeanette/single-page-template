"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import NotchedPanel from "@/components/ui/NotchedPanel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { ServicesContent } from "@/content/types";

interface ServicesProps {
  content: ServicesContent;
}

export default function Services({ content }: ServicesProps) {
  const [active, setActive] = useState(0);
  const activeTab = content.tabs[active];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const index = content.tabs.findIndex((tab) => `services-${tab.slug}` === hash);
      if (index !== -1) {
        setActive(index);
      }
    };

    // Deferred so a direct link (e.g. from the footer) also selects the right
    // tab on first load, without setting state synchronously during the effect.
    queueMicrotask(applyHash);

    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [content.tabs]);

  return (
    <SectionContainer
      id="services"
      className="notch-bottom-left-lg bg-background-3"
      heading={content.heading}
      description={content.description}
      headingClassName="text-highlight"
    >
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
        <div role="tablist" className="flex flex-col gap-3">
          {content.tabs.map((tab, index) => {
            const isActive = index === active;
            return (
              <button
                key={tab.label}
                id={`services-${tab.slug}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(index)}
                className={`flex scroll-mt-28 items-center gap-4 rounded-xl px-5 py-4 text-left transition-all ${
                  isActive
                    ? "bg-paper text-highlight shadow-lg shadow-ink/10"
                    : "text-text-dark/70 hover:bg-paper/60"
                }`}
              >
                <ServiceIcon
                  name={tab.icon}
                  className={isActive ? "text-highlight" : "text-highlight/60"}
                />
                <span className="font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div>
          <NotchedPanel corner="top-right" className="relative overflow-hidden">
            <Image
              src={activeTab.image}
              alt={activeTab.imageAlt}
              width={900}
              height={450}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-lg font-semibold text-text-light">
              {activeTab.label}
            </p>
          </NotchedPanel>
          <p className="mt-6 text-muted">{activeTab.body}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
