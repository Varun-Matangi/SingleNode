"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { OrbitGraphic } from "./OrbitGraphic";

const POINTS = [
  {
    title: "One team, zero handoffs",
    description:
      "The same people who scope your project build it, deploy it, and answer when you call a year later.",
  },
  {
    title: "Senior craft, not junior hours",
    description:
      "No trainees learning on your budget. Every system is built and reviewed by people who've shipped production software for years.",
  },
  {
    title: "Built to last, not just to launch",
    description:
      "We architect for the next five years of your business, not the next demo — documented, tested, and handed over clean.",
  },
  {
    title: "Direct access, always",
    description:
      "No account managers relaying messages between you and the work. You talk to the person actually building your system.",
  },
];

export function Approach() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrollActive, setScrollActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(POINTS.length - 1, Math.max(0, Math.floor(v * POINTS.length)));
    setScrollActive(index);
  });

  const active = hovered ?? scrollActive;

  return (
    <section id="approach" className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.06] blur-[160px]"
        aria-hidden
      />

      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal className="order-2 lg:sticky lg:top-32 lg:order-1 lg:self-start">
          <OrbitGraphic hovered={active} onHover={setHovered} />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-stone">
            Follows the principle as you scroll
          </p>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">
              Why SingleNode
            </span>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Built like it&rsquo;s our own product.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist">
              Everything routes through one accountable node — us. No
              subcontractors, no rotating juniors, no vendor to chase down
              when something breaks.
            </p>
          </Reveal>

          <StaggerGroup ref={listRef} className="mt-10 flex flex-col" stagger={0.12}>
            {POINTS.map((point, i) => {
              const isActive = active === i;
              return (
                <StaggerItem key={point.title}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`cursor-default border-l-2 py-4 pl-6 transition-all duration-300 ${
                      isActive
                        ? "border-signal bg-signal/[0.04]"
                        : "border-white/10"
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-signal" : "text-paper"
                      }`}
                    >
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-mist">
                      {point.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
