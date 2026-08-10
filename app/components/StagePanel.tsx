"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

export type Stage = {
  tag: string;
  title: string;
  description: string;
  points: string[];
  keywords: string[];
  icon: ReactNode;
};

export function StagePanel({
  stage,
  index,
  total,
  scrollYProgress,
}: {
  stage: Stage;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const mid = start + segment * 0.5;
  const end = start + segment;
  const fadeIn = start + segment * 0.18;
  const fadeOut = end - segment * 0.18;
  const direction = index % 2 === 0 ? 1 : -1;

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, fadeIn, fadeOut, end], [40, 0, 0, -40]);
  const x = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [24 * direction, 0, 0, -24 * direction]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, fadeIn, mid, fadeOut, end],
    [0.92, 1, 1, 1, 0.92]
  );
  const iconRotate = useTransform(scrollYProgress, [start, end], [-10, 10]);
  const numeralX = useTransform(scrollYProgress, [start, end], [20 * direction, -20 * direction]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="relative mx-auto w-full max-w-4xl">
        <motion.span
          aria-hidden
          style={{ x: numeralX }}
          className="pointer-events-none absolute -top-16 right-0 -z-10 select-none font-mono text-[8rem] font-bold leading-none text-white/[0.03] sm:-top-20 sm:text-[12rem]"
        >
          0{index + 1}
        </motion.span>

        <motion.div style={{ x }} className="flex flex-col items-start text-left">
          <div className="flex items-center gap-3">
            <motion.div
              style={{ rotate: iconRotate }}
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-panel/80 text-signal"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-signal/10 blur-xl" />
              <div className="h-5 w-5">{stage.icon}</div>
            </motion.div>
            <span className="font-mono text-sm text-stone">{stage.tag}</span>
          </div>

          <h3 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {stage.title}
          </h3>
          <p className="mt-5 max-w-2xl text-balance text-xl leading-relaxed text-mist sm:text-2xl">
            {stage.description}
          </p>

          <ul className="mt-7 flex w-full max-w-xl flex-col gap-3">
            {stage.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-base leading-snug text-mist sm:text-lg"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {stage.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-mist sm:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
