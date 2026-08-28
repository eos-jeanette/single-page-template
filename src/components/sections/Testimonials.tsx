import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import NotchedPanel from "@/components/ui/NotchedPanel";
import Carousel from "@/components/ui/Carousel";
import type { TestimonialsContent } from "@/content/types";

interface TestimonialsProps {
  content: TestimonialsContent;
}

export default function Testimonials({ content }: TestimonialsProps) {
  const slides = content.quotes.map((testimonial) => (
    <div key={testimonial.name} className="grid sm:grid-cols-2">
      <div className="order-2 flex flex-col justify-center bg-background-2 px-8 py-14 text-text-light sm:order-1 sm:px-12 sm:py-16">
        <p className="text-xl leading-relaxed font-semibold text-balance sm:text-2xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <p className="mt-6 text-sm text-text-light/60">
          {testimonial.name}, {testimonial.role}
        </p>
      </div>
      <div className="relative order-1 h-64 sm:order-2 sm:h-auto">
        <Image
          src={testimonial.avatar}
          alt={testimonial.avatarAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  ));

  return (
    <SectionContainer heading={content.heading}>
      <NotchedPanel corner="top-left-bottom-right" className="overflow-hidden">
        <Carousel
          slides={slides}
          variant="dots"
          dotsClassName="absolute bottom-8 left-8 sm:bottom-10 sm:left-12"
          className="relative text-text-light"
          intervalMs={6000}
        />
      </NotchedPanel>
    </SectionContainer>
  );
}
