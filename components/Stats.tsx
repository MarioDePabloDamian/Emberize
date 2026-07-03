"use client";

import { useRef } from "react";
import { motion, useInView, animate, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  { value: 24, suffix: "/7", label: "Atención a interesados, incluso a medianoche" },
  { value: 90, suffix: "%", label: "De consultas resueltas sin intervención humana" },
  { value: 3, suffix: "x", label: "Más clases de prueba agendadas con seguimiento automático" },
  { value: 15, suffix: "h", label: "Ahorradas a la semana en tareas administrativas" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="font-display text-5xl tracking-wide text-flame-bright sm:text-6xl">
      {display}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-line bg-surface px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
