"use client";

import { useRef } from "react";
import { useInViewport } from "@/lib/use-in-viewport";

const disciplines = [
  "Pilates Reformer",
  "Pilates Mat",
  "Pilates Clínico",
  "Barre",
  "Pilates Prenatal",
  "Core & Flexibilidad",
  "Pilates Suelo",
  "Stretching",
  "Yoga & Pilates",
  "Wellness",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewport(ref, { rootMargin: "80px" });
  const row = [...disciplines, ...disciplines];

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative overflow-hidden border-y border-line py-4"
    >
      <div
        className={`animate-marquee motion-reduce:animate-none flex w-max items-center gap-10 ${
          inView ? "" : "[animation-play-state:paused]"
        }`}
      >
        {row.map((d, i) => (
          <span
            key={`${d}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-xl tracking-widest text-ink-muted/70"
          >
            {d}
            <span className="text-sage">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
