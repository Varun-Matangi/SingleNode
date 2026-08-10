"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "hello@singlenodestudio.com";

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
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const service = form.get("service")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    const subject = `New project inquiry — ${name || "Website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    setStatus("opening");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClasses} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-2 block text-xs font-medium uppercase tracking-wider text-stone">
          What do you need?
        </label>
        <select id="service" name="service" defaultValue={SERVICES[0]} className={`${inputClasses} appearance-none`}>
          {SERVICES.map((service) => (
            <option key={service} value={service} className="bg-panel text-paper">
              {service}
            </option>
          ))}
        </select>
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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_0_32px_-4px_var(--color-signal)] active:scale-[0.98]"
        >
          Send Message
        </button>
        {status === "opening" && (
          <span className="text-sm text-mist">
            Opening your email client&hellip;
          </span>
        )}
      </div>
    </form>
  );
}
