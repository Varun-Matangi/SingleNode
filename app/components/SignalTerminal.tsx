"use client";

import { AnimatePresence, motion } from "framer-motion";

type Point = { title: string; description: string };

const COMMANDS = [
  { cmd: "team --status", out: "same engineers: scope → build → deploy → support" },
  { cmd: "whoami", out: "senior only · zero trainees on your invoice" },
  { cmd: "uptime --check", out: "architected for years, not demos" },
  { cmd: "contact --route", out: "you ↔ the person actually building it" },
];

export function SignalTerminal({
  points,
  active,
  onHoverDot,
}: {
  points: Point[];
  active: number;
  onHoverDot: (i: number | null) => void;
}) {
  const current = COMMANDS[active];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-signal/[0.06] blur-[100px]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-panel/90 shadow-2xl shadow-black/40 backdrop-blur"
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="flex-1 text-center font-mono text-[11px] text-stone">
            singlenode — zsh
          </span>
          <span className="w-[42px]" aria-hidden />
        </div>

        <div className="min-h-[248px] px-5 py-6 font-mono text-[13px] leading-relaxed sm:min-h-[220px] sm:text-sm">
          <p className="text-stone">$ ./why-singlenode.sh</p>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5"
            >
              <p className="text-paper">
                <span className="text-signal">$</span> {current.cmd}
              </p>
              <p className="mt-2 text-mist">
                {current.out}
                <span className="ml-1 inline-block h-[13px] w-[7px] translate-y-[2px] animate-blink bg-signal align-middle" />
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            {points.map((point, i) => (
              <button
                key={point.title}
                type="button"
                onMouseEnter={() => onHoverDot(i)}
                onMouseLeave={() => onHoverDot(null)}
                onFocus={() => onHoverDot(i)}
                onBlur={() => onHoverDot(null)}
                aria-label={point.title}
                className="group flex-1 rounded-full py-2"
              >
                <span
                  className={`block h-1 rounded-full transition-colors duration-300 ${
                    active === i ? "bg-signal" : "bg-white/10 group-hover:bg-white/25"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-2.5 font-mono text-[11px] text-stone">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-soft" />
          single-node — connected
        </div>
      </motion.div>
    </div>
  );
}
