import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import NotchedPanel from "@/components/ui/NotchedPanel";
import type { AboutBlurbContent } from "@/content/types";

interface AboutBlurbProps {
  content: AboutBlurbContent;
}

export default function AboutBlurb({ content }: AboutBlurbProps) {
  return (
    <section id="about" className="bg-background-1 px-6 py-24 text-text-dark">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid gap-6">
          {content.images.map((image, index) => (
            <NotchedPanel
              key={image.src}
              corner={index === 0 ? "top-left" : "bottom-right"}
              className="overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={300}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </NotchedPanel>
          ))}
        </div>

        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {content.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={150}>
            <div className="mt-4 space-y-4 text-lg text-muted">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={300}>
            <Button href="#contact" variant="primary" className="mt-8">
              {content.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
