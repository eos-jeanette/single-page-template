"use client";

import { useState, type FormEvent } from "react";
import NotchedPanel from "@/components/ui/NotchedPanel";
import Reveal from "@/components/ui/Reveal";
import type { ContactCtaContent } from "@/content/types";

interface ContactCtaProps {
  content: ContactCtaContent;
}

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "hearAboutUs", string>>;

export default function ContactCta({ content }: ContactCtaProps) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const hearAboutUs = String(form.get("hearAboutUs") ?? "");

    const nextErrors: FieldErrors = {};
    if (name.length < 3 || name.length > 100) {
      nextErrors.name = "Please provide a name between 3 and 100 characters.";
    }
    if (!/^[^@\s]+@[^.\s]+\..+$/.test(email)) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (phone.length < 7 || phone.length > 50) {
      nextErrors.phone = "Please provide a valid phone number.";
    }
    if (message.length < 10 || message.length > 2000) {
      nextErrors.message = "Please provide a message between 10 and 2000 characters.";
    }
    if (!hearAboutUs) {
      nextErrors.hearAboutUs = "Please select an option.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // TODO: wire up to a real submission endpoint.
      setStatus("sent");
      event.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="notch-top-left-lg bg-background-3 px-6 py-24 text-text-dark">
      <NotchedPanel
        corner="top-right"
        className="mx-auto max-w-5xl bg-background-2 px-8 py-16 text-text-light sm:px-14"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {content.heading}
              </h2>
            </Reveal>
            <Reveal delayMs={150}>
              <p className="mt-4 max-w-md text-text-light/75">{content.description}</p>
            </Reveal>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-text-light/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-paper/25 bg-paper/5 px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-text-light/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-paper/25 bg-paper/5 px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
                {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm text-text-light/80">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-paper/25 bg-paper/5 px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
                {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-text-light/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border border-paper/25 bg-paper/5 px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
            </div>

            <div>
              <label htmlFor="hearAboutUs" className="mb-1.5 block text-sm text-text-light/80">
                How did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                defaultValue=""
                className="w-full rounded-md border border-paper/25 bg-ink px-4 py-2.5 text-sm outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {content.hearAboutUsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.hearAboutUs && (
                <p className="mt-1 text-xs text-accent">{errors.hearAboutUs}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-text-dark transition-transform hover:-translate-y-0.5"
            >
              {content.submitLabel}
            </button>

            {status === "sent" && (
              <p className="text-sm text-highlight">
                Thanks — your message has been noted (demo form, not yet wired to a backend).
              </p>
            )}
          </form>
        </div>
      </NotchedPanel>
    </section>
  );
}
