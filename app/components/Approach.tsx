"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SignalTerminal } from "./SignalTerminal";

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
  const [mobileActive, setMobileActive] = useState(0);

  const active = hovered ?? scrollActive;

  return (
    <section id="approach" className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.06] blur-[160px]"
        aria-hidden
      />

      <Container>
        <Reveal className="max-w-2xl">
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

        {/* Desktop: companion terminal, synced to whichever point is centered in view */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <Reveal className="order-1 lg:sticky lg:top-32 lg:self-start">
            <SignalTerminal points={POINTS} active={active} onHoverDot={setHovered} />
            <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-stone">
              Follows the principle as you scroll
            </p>
          </Reveal>

          <StaggerGroup className="order-2 flex flex-col" stagger={0.12}>
            {POINTS.map((point, i) => {
              const isActive = active === i;
              return (
                <StaggerItem key={point.title}>
                  <motion.div
                    onViewportEnter={() => setScrollActive(i)}
                    viewport={{ margin: "-45% 0px -45% 0px" }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`cursor-default border-l-2 py-4 pl-6 transition-all duration-300 ${
                      isActive ? "border-signal bg-signal/[0.04]" : "border-white/10"
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
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Mobile & tablet: simple, independent reveal per point — the line turns
            green as it passes through the center of the screen while scrolling */}
        <div className="mt-12 flex flex-col lg:hidden">
          {POINTS.map((point, i) => {
            const isActive = mobileActive === i;
            return (
              <motion.div
                key={point.title}
                onViewportEnter={() => setMobileActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="relative py-4 pl-6"
              >
                <motion.span
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "top" }}
                  className={`absolute left-0 top-0 h-full w-[2px] transition-colors duration-500 ${
                    isActive ? "bg-signal" : "bg-white/10"
                  }`}
                />
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
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
