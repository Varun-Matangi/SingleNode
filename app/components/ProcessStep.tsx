"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { StaggerItem } from "./Reveal";

export type Step = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({
  step,
  index,
  total,
  isLast,
  scrollYProgress,
}: {
  step: Step;
  index: number;
  total: number;
  isLast: boolean;
  scrollYProgress: MotionValue<number>;
}) {
  const threshold = (index + 1) / total;
  const glow = useTransform(scrollYProgress, [threshold - 0.14, threshold], [0, 1]);
  const glowOpacity = useTransform(glow, (v) => Math.max(0, Math.min(1, v)));

  return (
    <StaggerItem>
      <div className="relative">
        <div className="relative flex items-center gap-4">
          <span className="font-mono text-sm text-mist">{step.number}</span>
          <div className="relative h-px flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-paper"
              style={{
                opacity: glowOpacity,
                boxShadow: "0 0 10px 1px rgba(255,255,255,0.55)",
              }}
            />
          </div>
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">
          {step.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-mist">
          {step.description}
        </p>
        {!isLast && (
          <div className="pointer-events-none absolute -right-4 top-2 hidden text-stone/40 lg:block">
            &rarr;
          </div>
        )}
      </div>
    </StaggerItem>
  );
}
