import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { TeamHighlightContent } from "@/content/types";

interface TeamHighlightProps {
  content: TeamHighlightContent;
}

export default function TeamHighlight({ content }: TeamHighlightProps) {
  return (
    <section className="bg-[linear-gradient(135deg,var(--background-grad-start),var(--background-grad-end))] px-6 py-24 text-text-light">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.heading}
          </h2>
        </Reveal>
        <Reveal delayMs={150}>
          <blockquote className="mt-8 text-xl leading-relaxed text-text-light/90 text-balance">
            &ldquo;{content.quote}&rdquo;
          </blockquote>
        </Reveal>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Image
            src={content.authorAvatar}
            alt={content.authorAvatarAlt}
            width={48}
            height={48}
            sizes="48px"
            className="rounded-full"
          />
          <div className="text-left text-sm">
            <p className="font-semibold">{content.authorName}</p>
            <p className="text-text-light/75">{content.authorRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
