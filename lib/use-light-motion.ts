"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/** Menos animaciones en móvil, táctil o con prefers-reduced-motion. */
export function useLightMotion() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return Boolean(reduce || isMobile);
}
