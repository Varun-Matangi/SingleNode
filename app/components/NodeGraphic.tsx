"use client";

import { motion } from "framer-motion";

const NODES = [
  { label: "App", x: 60, y: 60 },
  { label: "Web", x: 300, y: 50 },
  { label: "Auto", x: 320, y: 260 },
  { label: "Server", x: 60, y: 270 },
];

const CENTER = { x: 190, y: 165 };

export function NodeGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 380 330" className="h-full w-full overflow-visible">
        {NODES.map((node, i) => (
          <motion.line
            key={`line-${node.label}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="var(--color-stone)"
            strokeWidth="1"
            strokeOpacity="0.35"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
          />
        ))}

        {NODES.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle cx={node.x} cy={node.y} r="26" fill="var(--color-panel)" stroke="rgba(255,255,255,0.12)" />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              letterSpacing="0.05em"
              fill="var(--color-mist)"
            >
              {node.label.toUpperCase()}
            </text>
          </motion.g>
        ))}

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="34"
          fill="var(--color-signal)"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="34"
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
          fontSize="10"
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
