"use client";

import Image from "next/image";
import SocialIcon from "@/components/ui/SocialIcon";
import type { FooterContent } from "@/content/types";

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-background-nav px-6 py-16 text-sm text-nav-1/75">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-paper/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={content.logoImage}
                alt={content.logoAlt}
                width={40}
                height={40}
                unoptimized
                className="rounded-md"
              />
              <span className="text-lg font-semibold text-nav-1">
                {content.companyName}
              </span>
            </div>
            <p>{content.tagline}</p>
          </div>

          <div>
            <p className="mb-4 font-semibold text-nav-1">{content.servicesHeading}</p>
            <ul className="space-y-2.5">
              {content.servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-nav-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold text-nav-1">{content.hoursHeading}</p>
            <ul className="space-y-2.5">
              {content.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span className="text-nav-1/60">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold text-nav-1">{content.contactHeading}</p>
            <ul className="space-y-2.5">
              <li>{content.address}</li>
              <li>
                <a href={`mailto:${content.email}`} className="hover:text-nav-2">
                  {content.email}
                </a>
              </li>
              <li>
                <a href={`tel:${content.phone.replace(/\s+/g, "")}`} className="hover:text-nav-2">
                  {content.phone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {content.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-paper hover:text-nav-2 hover:bg-paper/10"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          {content.showNewsletter && (
            <div>
              <p className="mb-4 font-semibold text-nav-1">
                {content.newsletterHeading}
              </p>
              <p className="mb-4">{content.newsletterDescription}</p>
              <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="email"
                  placeholder={content.newsletterPlaceholder}
                  className="w-full min-w-0 rounded-md border border-paper/25 bg-paper/5 px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-text-dark"
                >
                  {content.newsletterSubmitLabel}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p>{content.copyright}</p>
          <ul className="flex gap-6">
            {content.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-nav-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
