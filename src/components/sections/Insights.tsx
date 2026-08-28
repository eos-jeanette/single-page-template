import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import type { InsightsContent } from "@/content/types";

interface InsightsProps {
  content: InsightsContent;
}

export default function Insights({ content }: InsightsProps) {
  return (
    <SectionContainer
      className="notch-top-left-lg bg-background-3"
      heading={content.heading}
      description={content.description}
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-xl border border-ink/10 bg-paper transition-shadow hover:shadow-lg hover:shadow-ink/10"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={400}
              height={260}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <p className="font-mono text-xs font-semibold tracking-wide text-highlight uppercase">
                {item.category} &middot; {item.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
