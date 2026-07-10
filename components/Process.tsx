"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Search, PencilRuler, Rocket, LineChart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLightMotion } from "@/lib/use-light-motion";

const steps = [
  {
    icon: Search,
    belt: "Paso 01 — Respira",
    title: "Diagnóstico",
    text: "Analizamos cómo llegan y se pierden tus alumnos hoy: canales, horarios pico de consultas, visibilidad en Google y puntos de fuga. Sin compromiso.",
  },
  {
    icon: PencilRuler,
    belt: "Paso 02 — Alinea",
    title: "Diseño del sistema",
    text: "Te proponemos el combo exacto: qué automatizar, qué responde el chatbot, qué capta la landing, qué atiende la voz y qué posicionar en buscadores.",
  },
  {
    icon: Rocket,
    belt: "Paso 03 — Activa",
    title: "Implementación",
    text: "Lo montamos, lo entrenamos con los datos de tu estudio y lo probamos contigo. En 2-4 semanas está trabajando.",
  },
  {
    icon: LineChart,
    belt: "Paso 04 — Fluye",
    title: "Optimización continua",
    text: "Medimos conversaciones, reservas y posiciones en Google. Ajustamos cada mes para que el sistema mejore con constancia, como una buena práctica.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const lightMotion = useLightMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="metodo" className="cv-auto relative scroll-mt-22 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          chapter="Capítulo 03 — El método"
          title={
            <>
              Un método con <span className="text-flame-bright">control y fluidez</span>
            </>
          }
          subtitle="Como en el pilates: progresión clara, técnica precisa y resultados que se notan."
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-line sm:left-1/2" aria-hidden>
            {lightMotion ? (
              <div className="h-full w-full bg-gradient-to-b from-flame-bright via-flame to-sage" />
            ) : (
              <motion.div
                className="h-full w-full origin-top bg-gradient-to-b from-flame-bright via-flame to-sage"
                style={{ scaleY: lineScale }}
              />
            )}
          </div>

          <ol className="space-y-14">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: right ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: [0.21, 0.65, 0.36, 1] }}
                  className={`relative pl-16 sm:w-1/2 sm:pl-0 ${
                    right ? "sm:ml-auto sm:pl-12" : "sm:mr-auto sm:pr-12 sm:text-right"
                  }`}
                >
                  <div
                    className={`absolute left-6 top-1 z-10 -translate-x-1/2 rounded-full border-2 border-flame bg-night p-2 text-flame-bright ${
                      right ? "sm:left-0" : "sm:left-auto sm:right-0 sm:translate-x-1/2"
                    }`}
                  >
                    <s.icon className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-flame/40">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                      {s.belt}
                    </p>
                    <h3 className="mb-2 text-lg font-bold text-ink">
                      {i + 1}. {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{s.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
