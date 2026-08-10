import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { LinkButton } from "./Button";

const EMAIL = "varunrahulm@gmail.com";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[140px]"
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

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <LinkButton href={`mailto:${EMAIL}`}>Email Us</LinkButton>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-mist transition-colors hover:text-paper"
          >
            {EMAIL}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
