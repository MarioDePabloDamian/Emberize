"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useLightMotion } from "@/lib/use-light-motion";

export default function ScrollProgress() {
  const lightMotion = useLightMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (lightMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-flame via-flame-bright to-sage"
      style={{ scaleX }}
    />
  );
}
