"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
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
    detail:
      "From the first rough prototype to a system your whole team relies on daily — we own the full lifecycle, not just the parts that are fun to build.",
    points: [
      "Custom-built for your workflow, not bent to fit someone else's",
      "Clean, documented architecture your future team can maintain",
      "Real testing before it ever reaches a customer",
    ],
    keywords: ["Front-end", "Back-end", "Database", "APIs"],
    icon: ICON.app,
  },
  {
    tag: "02 — Website Design & Development",
    title: "A front door worth having.",
    description:
      "Marketing sites and web platforms built to convert, engineered to load in a blink.",
    detail:
      "Every page is designed with intent and shipped against a performance budget, so it looks premium and still loads like it means it.",
    points: [
      "Design that reflects the quality of what you're selling",
      "Built for search from day one, not bolted on after launch",
      "Fast on a phone in a parking lot, not just your office wifi",
    ],
    keywords: ["Design", "Development", "SEO", "Performance"],
    icon: ICON.web,
  },
  {
    tag: "03 — Automations",
    title: "The work that runs itself.",
    description:
      "The manual busywork between your tools, replaced with automations that just quietly work.",
    detail:
      "If your team is copy-pasting between spreadsheets and inboxes, that's exactly the kind of work we remove — for good.",
    points: [
      "Fewer spreadsheets, less copy-paste, fewer dropped handoffs",
      "The right person notified at the right moment, automatically",
      "Built to fail loudly and recover quietly, never silently",
    ],
    keywords: ["Integrations", "Workflows", "Scheduling", "Notifications"],
    icon: ICON.automation,
  },
  {
    tag: "04 — Linux Server Setup",
    title: "A foundation that doesn't move.",
    description:
      "Hardened, monitored infrastructure configured right the first time — the part no one sees, and everything depends on.",
    detail:
      "Provisioned once, watched always. When something needs attention, we know before you do.",
    points: [
      "Hardened against the mistakes that take most servers down",
      "Monitored around the clock, not just when something breaks",
      "Backed up properly, so a bad day never becomes a bad year",
    ],
    keywords: ["Provisioning", "Security", "Monitoring", "Backups"],
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

  const spotlightX = useTransform(scrollYProgress, [0, 1], ["25%", "75%"]);

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
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-signal/[0.07] blur-[130px]"
          style={{ left: spotlightX, translateX: "-50%" }}
        />

        <Container className="relative flex h-full flex-col justify-center py-20">
          <div className="absolute left-6 top-16 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-signal sm:left-12">
            The Stack
            <span className="text-stone">
              0{active + 1} / 0{STAGES.length}
            </span>
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
