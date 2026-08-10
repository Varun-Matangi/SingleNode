"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Container } from "./Container";
import { Reveal, StaggerGroup } from "./Reveal";
import { ProcessStep, type Step } from "./ProcessStep";

const STEPS: Step[] = [
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="process" className="relative border-t border-white/10 py-24 sm:py-32">
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
          ref={containerRef}
          className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.12}
        >
          {STEPS.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              total={STEPS.length}
              isLast={i === STEPS.length - 1}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
