"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

/** En táctil, el hash nativo falla a menudo; interceptamos todos los enlaces internos. */
export default function HashScrollHandler() {
  useEffect(() => {
    const touch = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (!touch.matches) return;

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a[href^='#']");
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();
      scrollToSection(hash);
    };

    document.addEventListener("click", onClick, { passive: false });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
