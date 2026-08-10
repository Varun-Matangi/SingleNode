import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with your business, not a template. Scope, systems, and success criteria defined up front.",
  },
  {
    number: "02",
    title: "Design & Architect",
    description:
      "Every project gets a real technical plan before a line of code is written — no surprises mid-build.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with visibility at every stage. You see real progress weekly, not just at the end.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and stay on as your infrastructure partner — not disappear once the invoice clears.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-white/10 py-28 sm:py-36">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
            How We Work
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            A process built for certainty.
          </h2>
        </Reveal>

        <StaggerGroup
          className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.12}
        >
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-signal">{step.number}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                  {step.description}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="pointer-events-none absolute -right-4 top-2 hidden text-stone/40 lg:block">
                    &rarr;
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
