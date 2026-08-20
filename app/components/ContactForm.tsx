"use client";

import { useState, type FormEvent } from "react";
import { Select } from "./Select";
import { SITE_EMAIL } from "../lib/site-config";

const SERVICES = [
  "Application Development",
  "Website Design & Development",
  "Automations",
  "Linux Server Setup",
  "Something else",
];

const inputClasses =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-stone/70 outline-none transition-colors duration-200 focus:border-signal/50 focus:bg-white/[0.05]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [service, setService] = useState(SERVICES[0]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentForm = e.currentTarget;
    const form = new FormData(currentForm);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const phone = form.get("phone")?.toString() ?? "";
    const company = form.get("company")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";
    const website = form.get("website")?.toString() ?? "";

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, service, message, website }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      currentForm.reset();
      setService(SERVICES[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClasses} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClasses} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="company" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Company
        </label>
        <input id="company" name="company" type="text" placeholder="Acme Inc." className={inputClasses} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+1 (555) 018-2947" className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          What do you need?
        </label>
        <Select id="service" name="service" options={SERVICES} value={service} onChange={setService} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're building, or what's broken."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_0_32px_-4px_var(--color-signal)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && (
          <span className="text-sm text-mist">
            Thanks — we&apos;ll be in touch shortly.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-mist">
            Something went wrong. Email us directly at{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-signal underline underline-offset-2">
              {SITE_EMAIL}
            </a>
            .
          </span>
        )}
      </div>
    </form>
  );
}
