"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

export type Stage = {
  tag: string;
  title: string;
  description: string;
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

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, fadeIn, fadeOut, end], [40, 0, 0, -40]);
  const scale = useTransform(
    scrollYProgress,
    [start, fadeIn, mid, fadeOut, end],
    [0.92, 1, 1, 1, 0.92]
  );
  const iconRotate = useTransform(scrollYProgress, [start, end], [-8, 8]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="grid max-w-4xl items-center gap-10 sm:grid-cols-[auto_1fr] sm:gap-14">
        <motion.div
          style={{ rotate: iconRotate }}
          className="relative mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-panel/80 text-signal sm:h-40 sm:w-40"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-signal/10 blur-2xl" />
          <div className="h-12 w-12 sm:h-14 sm:w-14">{stage.icon}</div>
        </motion.div>

        <div className="text-center sm:text-left">
          <span className="font-mono text-sm text-stone">{stage.tag}</span>
          <h3 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            {stage.title}
          </h3>
          <p className="mx-auto mt-4 max-w-md text-balance text-base leading-relaxed text-mist sm:mx-0 sm:text-lg">
            {stage.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {stage.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-wider text-mist"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
