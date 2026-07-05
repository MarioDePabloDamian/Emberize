"use client";

import { useEffect, useState, type RefObject } from "react";

type UseInViewportOptions = {
  once?: boolean;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInViewport<T extends Element>(
  ref: RefObject<T | null>,
  {
    once = false,
    root = null,
    rootMargin = "0px",
    threshold = 0,
  }: UseInViewportOptions = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, root, rootMargin, threshold]);

  return inView;
}
