"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { layoutEaseTransition } from "@/components/Collapse";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  layout?: boolean;
};

export default function Reveal({ children, delay = 0, y = 32, className, layout }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      layout={layout}
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        layout
          ? {
              ...layoutEaseTransition,
              duration: 0.7,
              delay,
              ease: [0.21, 0.65, 0.36, 1],
            }
          : { duration: 0.7, delay, ease: [0.21, 0.65, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
