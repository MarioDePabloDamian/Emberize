"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para usar esto?",
    a: "No. Nosotros montamos, configuramos y mantenemos todo el sistema. Tú solo ves los resultados: reservas en tu calendario, conversaciones resueltas y alumnas nuevas en tus clases.",
  },
  {
    q: "¿El chatbot sonará robótico con mis alumnas?",
    a: "Lo entrenamos con el tono de tu estudio: horarios, tarifas, tipos de clase, nombres de tus instructoras y hasta tu forma de hablar. Y cuando una conversación requiere un humano, te la pasa al instante.",
  },
  {
    q: "¿Qué es eso de SEO, GEO y AEO?",
    a: "SEO es aparecer en Google cuando buscan “pilates en tu zona”. GEO (Generative Engine Optimization) es que las IAs como ChatGPT, Gemini o Perplexity recomienden tu estudio al preguntarles. AEO (Answer Engine Optimization) es salir como respuesta directa en buscadores. Trabajamos los tres para que te encuentren busquen donde busquen.",
  },
  {
    q: "¿Cuánto se tarda en tenerlo funcionando?",
    a: "La automatización, entre 2 y 4 semanas según el alcance. El SEO es carrera de fondo: los primeros resultados suelen verse en 2-3 meses y crecen con el tiempo. Empezamos por lo que más impacto tiene y ampliamos desde ahí.",
  },
  {
    q: "¿Funciona para estudios pequeños?",
    a: "Especialmente para ellos. Si eres tú quien da las clases, contesta los mensajes y pasa las cuotas, la automatización te devuelve horas cada semana y evita que se te escape ni una interesada.",
  },
  {
    q: "¿Qué pasa con los datos de mis alumnas?",
    a: "Tus datos son tuyos. Trabajamos con herramientas que cumplen el RGPD, con consentimiento explícito en formularios y conversaciones, y puedes exportarlo o eliminarlo todo cuando quieras.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del sistema que necesites. Tras el diagnóstico gratuito te damos un presupuesto cerrado, sin sorpresas. La mayoría de estudios recuperan la inversión con 2-3 altas nuevas.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="cv-auto relative scroll-mt-22 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          chapter="Capítulo 05 — Las dudas"
          title={
            <>
              Preguntas <span className="text-flame-bright">frecuentes</span>
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`glass rounded-2xl transition-colors duration-300 ${
                  isOpen ? "border-flame/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 rounded-full p-1 transition-colors duration-200 ${
                      isOpen ? "bg-flame/20 text-flame-bright" : "bg-surface-2 text-ink-muted"
                    }`}
                  >
                    <Plus className="h-4 w-4" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
