"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const CENTER = { x: 190, y: 165 };

const NODES: { x: number; y: number; label: string; icon: ReactNode }[] = [
  {
    x: 70,
    y: 65,
    label: "Team",
    icon: (
      <path
        d="M-5 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM-1 -1a2 2 0 1 1 0-4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
  {
    x: 310,
    y: 65,
    label: "Craft",
    icon: (
      <path
        d="M0 -6 1.6 -1.6 6 0 1.6 1.6 0 6 -1.6 1.6 -6 0 -1.6 -1.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    x: 310,
    y: 265,
    label: "Longevity",
    icon: (
      <path
        d="M0 -6c3 1 5 1 5 1v4c0 3-2 5-5 7-3-2-5-4-5-7v-4s2 0 5-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    x: 70,
    y: 265,
    label: "Access",
    icon: (
      <path
        d="M-6 -3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6l-3 3v-3a2 2 0 0 1-1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
];

export function OrbitGraphic({
  hovered,
  onHover,
}: {
  hovered: number | null;
  onHover: (i: number | null) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-signal/[0.04] blur-2xl" />

      <svg viewBox="0 0 380 330" className="relative h-full w-full overflow-visible">
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="118"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="2 8"
          className="origin-center animate-spin-slow"
        />

        {NODES.map((node, i) => {
          const isActive = hovered === i;
          const isDimmed = hovered !== null && !isActive;
          return (
            <motion.line
              key={`line-${node.label}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              animate={{ opacity: isDimmed ? 0.25 : 1 }}
              transition={{ duration: 0.9, delay: 0.15 * i, ease: "easeOut" }}
            />
          );
        })}

        {NODES.map((node, i) => {
          const isActive = hovered === i;
          return (
            <motion.line
              key={`line-active-${node.label}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={node.x}
              y2={node.y}
              stroke="var(--color-signal)"
              strokeWidth="1.75"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isActive ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}

        {NODES.map((node, i) => {
          const isActive = hovered === i;
          const isDimmed = hovered !== null && !isActive;
          return (
            <motion.g
              key={node.label}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
              className="cursor-pointer"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                scale: isActive ? 1.14 : 1,
                opacity: isDimmed ? 0.45 : 1,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="30"
                fill="var(--color-panel)"
                stroke={isActive ? "var(--color-signal)" : "rgba(255,255,255,0.14)"}
                strokeWidth="1.5"
              />
              <g transform={`translate(${node.x} ${node.y - 5})`} className="text-paper">
                {node.icon}
              </g>
              <text
                x={node.x}
                y={node.y + 20}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                letterSpacing="0.05em"
                fill={isActive ? "var(--color-signal)" : "var(--color-mist)"}
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          );
        })}

        <circle cx={CENTER.x} cy={CENTER.y} r="38" fill="var(--color-ink)" />
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="36"
          fill="var(--color-signal)"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="36"
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="1"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.9 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
        <text
          x={CENTER.x}
          y={CENTER.y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.05em"
          fill="var(--color-ink)"
        >
          NODE
        </text>
      </svg>
    </div>
  );
}
