import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import type { NavbarContent } from "@/content/types";

interface NavbarProps {
  content: NavbarContent;
}

export default function Navbar({ content }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 h-[90px] w-full bg-background-nav">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-3 text-nav-1 hover:text-nav-2">
          <Image
            src={content.logoImage}
            alt={content.logoAlt}
            width={40}
            height={40}
            unoptimized
            className="rounded-md"
          />
          <span className="text-lg font-semibold">
            {content.companyName}
          </span>
        </Link>

        <Button href="#contact" variant="primary">
          {content.ctaLabel}
        </Button>
      </div>
    </header>
  );
}
