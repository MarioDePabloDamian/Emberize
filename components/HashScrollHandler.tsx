"use client";

import { useEffect } from "react";
import { restoreHashScroll, scrollToSection } from "@/lib/scroll-to-section";

export default function HashScrollHandler() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    restoreHashScroll();
    window.addEventListener("load", restoreHashScroll);

    const onHashChange = () => restoreHashScroll();
    window.addEventListener("hashchange", onHashChange);

    const touch = window.matchMedia("(hover: none) and (pointer: coarse)");
    const onClick = (event: MouseEvent) => {
      if (!touch.matches) return;

      const anchor = (event.target as Element | null)?.closest("a[href^='#']");
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();
      scrollToSection(hash);
    };

    document.addEventListener("click", onClick, { passive: false });

    return () => {
      window.removeEventListener("load", restoreHashScroll);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
