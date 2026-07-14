import { cn } from "@/lib/utils";

/** Etiquetas informativas: redondas, pequeñas, sin aspecto de botón */
export const badgeFlame = cn(
  "inline-flex items-center gap-1.5 rounded-full bg-flame/10 px-3 py-1",
  "text-xs font-medium tracking-wide text-flame-bright",
);

export const badgeSage = cn(
  "inline-flex items-center gap-1.5 rounded-full bg-sage/10 px-3 py-1",
  "text-xs font-medium text-sage-bright",
);

const btnBase = cn(
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl",
  "text-sm font-semibold transition-colors duration-200",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright",
);

/** Botones de acción: esquinas xl, altura táctil, peso visual claro */
export const btnSage = cn(btnBase, "bg-sage px-5 py-2.5 text-night hover:bg-sage-bright");

export const btnSageLg = cn(
  btnSage,
  "min-h-12 shrink-0 px-5 py-3.5 text-sm font-bold glow-sage sm:text-base",
);

export const btnGlass = cn(
  btnBase,
  "glass px-7 py-3.5 text-ink hover:border-flame/50",
);

export const btnGlassLg = cn(btnGlass, "min-h-12 text-base font-bold");

export const btnGradientLg = cn(
  btnBase,
  "min-h-12 shrink-0 px-4 py-3.5 text-sm font-bold text-white sm:px-6 sm:text-base lg:px-7",
  "bg-gradient-to-r from-sage via-sage-bright to-flame-bright",
  "hover:from-sage-bright hover:via-flame-bright hover:to-flame",
  "shadow-[0_0_28px_rgba(46,134,245,0.28)]",
);

export const btnFlame = cn(
  btnBase,
  "bg-flame px-5 py-2.5 font-bold text-white hover:bg-flame-bright glow-flame",
);

export const btnFlameLg = cn(btnFlame, "min-h-12 shrink-0 px-4 py-3.5 text-sm sm:px-6 sm:text-base lg:px-7");

export const btnOutlineFlame = cn(
  btnBase,
  "border-2 border-flame/45 bg-flame/15 px-5 py-2.5 text-ink",
  "hover:border-flame-bright hover:bg-flame/25",
);

export const btnSecondary = cn(
  btnBase,
  "border border-line px-4 py-2.5 text-ink-muted hover:border-flame/40 hover:text-ink",
);
