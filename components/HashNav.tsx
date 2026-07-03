"use client";

import { useEffect } from "react";
import { scrollToHash } from "@/lib/hash-nav";

export default function HashNav() {
  useEffect(() => {
    history.scrollRestoration = "manual";

    const run = () => scrollToHash();
    run();
    const timers = [0, 50, 150, 400].map((ms) => setTimeout(run, ms));

    window.addEventListener("hashchange", run);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("hashchange", run);
    };
  }, []);

  return null;
}
