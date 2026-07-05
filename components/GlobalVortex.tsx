"use client";

import { Vortex } from "@/components/ui/vortex";

/** Salvia #34d399 (160°) + azul flame #2e86f5 (214°) — dos tonos distinguibles. */
export default function GlobalVortex() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full" aria-hidden>
      <Vortex
        backgroundColor="#000000"
        baseHue={160}
        accentHue={214}
        hueVariance={7}
        hueSaturation={92}
        hueLightness={62}
        particleCount={580}
        baseSpeed={0.15}
        rangeSpeed={1.2}
        baseRadius={1}
        rangeRadius={1.8}
        containerClassName="h-full w-full"
      />
    </div>
  );
}
