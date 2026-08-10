import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

const EMAIL = "hello@singlenodestudio.com";
const PHONE = "+1 (555) 018-2947";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-signal/10 blur-[140px]"
        aria-hidden
      />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
            Start a Project
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            Let&rsquo;s build something that lasts.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-mist">
            Tell us what you&rsquo;re running into — an idea, an outdated
            site, a server nobody wants to touch. We&rsquo;ll reply
            personally within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 w-full max-w-4xl">
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-panel/60 text-left backdrop-blur lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex flex-col justify-between gap-10 border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Talk to us directly.
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  No forms disappearing into a ticket queue. Every message
                  reaches the people actually doing the work.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block text-[15px] text-paper transition-colors hover:text-signal"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
                    className="mt-1 block text-[15px] text-paper transition-colors hover:text-signal"
                  >
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone">
                    Response Time
                  </p>
                  <p className="mt-1 text-[15px] text-paper">
                    Within one business day
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
