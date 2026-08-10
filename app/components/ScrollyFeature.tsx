"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";
import { StagePanel, type Stage } from "./StagePanel";

const ICON = {
  app: (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 9.5l2 2-2 2M12.5 13.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <circle cx="6" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.2 6h7.6M8.5 7.8 15.8 16M18 8.5V15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <rect x="3.5" y="3.5" width="17" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3.5" y="14" width="17" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="6.75" r="1" fill="currentColor" />
      <circle cx="7" cy="17.25" r="1" fill="currentColor" />
    </svg>
  ),
};

const STAGES: Stage[] = [
  {
    tag: "01 — Application Development",
    title: "Software that runs your business.",
    description:
      "Custom applications and internal tools, architected to scale from your first user to your ten-thousandth.",
    keywords: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    icon: ICON.app,
  },
  {
    tag: "02 — Website Design & Development",
    title: "A front door worth having.",
    description:
      "Marketing sites and web platforms built to convert, engineered to load in a blink.",
    keywords: ["Next.js", "Design Systems", "SEO", "Performance"],
    icon: ICON.web,
  },
  {
    tag: "03 — Automations",
    title: "The work that runs itself.",
    description:
      "The manual busywork between your tools, replaced with automations that just quietly work.",
    keywords: ["Webhooks", "APIs", "Scheduled Jobs", "Integrations"],
    icon: ICON.automation,
  },
  {
    tag: "04 — Linux Server Setup",
    title: "A foundation that doesn't move.",
    description:
      "Hardened, monitored infrastructure configured right the first time — the part no one sees, and everything depends on.",
    keywords: ["Docker", "Nginx", "CI/CD", "Ubuntu"],
    icon: ICON.server,
  },
];

export function ScrollyFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(STAGES.length - 1, Math.floor(v * STAGES.length)));
  });

  return (
    <section
      ref={containerRef}
      className="relative border-t border-white/10"
      style={{ height: `${STAGES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <Container className="relative flex h-full flex-col justify-center py-20">
          <div className="absolute left-6 top-16 text-xs font-semibold uppercase tracking-[0.3em] text-signal sm:left-12">
            The Stack
          </div>

          <div className="relative flex-1">
            {STAGES.map((stage, i) => (
              <StagePanel
                key={stage.title}
                stage={stage}
                index={i}
                total={STAGES.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {STAGES.map((stage, i) => (
              <div
                key={stage.title}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-signal" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
