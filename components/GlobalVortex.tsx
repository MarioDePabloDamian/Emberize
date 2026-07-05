"use client";

import { useEffect, useState } from "react";
import { Vortex } from "@/components/ui/vortex";

type VortexProfile = "full" | "lite" | "off";

function resolveProfile(): VortexProfile {
  if (typeof window === "undefined") return "lite";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
  if (
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 768px)").matches
  ) {
    return "lite";
  }
  return "full";
}

/** Salvia #34d399 (160°) + azul flame #2e86f5 (214°) — dos tonos distinguibles. */
export default function GlobalVortex() {
  const [profile, setProfile] = useState<VortexProfile>("lite");

  useEffect(() => {
    setProfile(resolveProfile());

    const queries = [
      "(prefers-reduced-motion: reduce)",
      "(pointer: coarse)",
      "(max-width: 768px)",
    ].map((q) => window.matchMedia(q));

    const update = () => setProfile(resolveProfile());
    queries.forEach((mq) => mq.addEventListener("change", update));
    return () => queries.forEach((mq) => mq.removeEventListener("change", update));
  }, []);

  if (profile === "off") {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(46,134,245,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(52,211,153,0.1),transparent_50%)]"
        aria-hidden
      />
    );
  }

  const isLite = profile === "lite";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full" aria-hidden>
      <Vortex
        backgroundColor="#000000"
        baseHue={160}
        accentHue={214}
        hueVariance={7}
        hueSaturation={92}
        hueLightness={62}
        particleCount={isLite ? 180 : 580}
        baseSpeed={isLite ? 0.08 : 0.15}
        rangeSpeed={isLite ? 0.7 : 1.2}
        baseRadius={1}
        rangeRadius={isLite ? 1.2 : 1.8}
        enableGlow={!isLite}
        containerClassName="h-full w-full"
      />
    </div>
  );
}
