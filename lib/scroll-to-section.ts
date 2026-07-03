/** Offset del navbar fijo (top-4 + altura). Debe coincidir con scroll-mt-22 en secciones. */
export const SECTION_SCROLL_OFFSET = 88;

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return;

  const top = Math.max(0, target.offsetTop - SECTION_SCROLL_OFFSET);
  const roots = [document.scrollingElement, document.documentElement, document.body].filter(
    Boolean,
  ) as HTMLElement[];

  for (const root of roots) {
    root.scrollTop = top;
  }

  window.scrollTo(0, top);
  target.scrollIntoView({ block: "start", behavior: "auto" });

  // Segundo intento tras layout (menú cerrándose, etc.)
  requestAnimationFrame(() => {
    for (const root of roots) {
      root.scrollTop = top;
    }
    window.scrollTo(0, top);
  });

  const nextHash = `#${id}`;
  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, "", nextHash);
  }
}
