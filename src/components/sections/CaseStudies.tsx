import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import NotchedPanel from "@/components/ui/NotchedPanel";
import Carousel from "@/components/ui/Carousel";
import type { CaseStudiesContent } from "@/content/types";

interface CaseStudiesProps {
  content: CaseStudiesContent;
}

export default function CaseStudies({ content }: CaseStudiesProps) {
  const slides = content.slides.map((slide) => (
    <div key={slide.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <NotchedPanel corner="top-right" className="overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          width={800}
          height={600}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </NotchedPanel>
      <div>
        <p className="font-mono text-4xl font-semibold text-highlight">
          {slide.stat}
        </p>
        <p className="mt-1 text-sm text-muted">{slide.statLabel}</p>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">
          {slide.title}
        </h3>
        <p className="mt-3 text-muted">{slide.summary}</p>
      </div>
    </div>
  ));

  return (
    <SectionContainer
      className="notch-bottom-right-lg bg-background-3"
      heading={content.heading}
      description={content.description}
    >
      <Carousel
        slides={slides}
        labels={content.tabs}
        intervalMs={7000}
      />
    </SectionContainer>
  );
}
