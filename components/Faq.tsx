"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para usar esto?",
    a: "No. Nosotros montamos, configuramos y mantenemos todo el sistema. Tú solo ves los resultados: citas en tu calendario, conversaciones resueltas y alumnos nuevos en el tatami.",
  },
  {
    q: "¿El chatbot sonará robótico con mis alumnos?",
    a: "Lo entrenamos con el tono de tu escuela: horarios, tarifas, disciplinas, nombres de tus entrenadores y hasta tu forma de hablar. Y cuando una conversación requiere un humano, te la pasa al instante.",
  },
  {
    q: "¿Cuánto se tarda en tenerlo funcionando?",
    a: "Entre 2 y 4 semanas según el alcance. Empezamos por lo que más impacto tiene (normalmente el chatbot de WhatsApp con agenda de clases de prueba) y ampliamos desde ahí.",
  },
  {
    q: "¿Funciona para escuelas pequeñas?",
    a: "Especialmente para ellas. Si eres tú quien da las clases, contesta los mensajes y pasa las cuotas, la automatización te devuelve horas cada semana y evita que se te escape ni un interesado.",
  },
  {
    q: "¿Qué pasa con los datos de mis alumnos?",
    a: "Tus datos son tuyos. Trabajamos con herramientas que cumplen el RGPD, con consentimiento explícito en formularios y conversaciones, y puedes exportarlo o eliminarlo todo cuando quieras.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del sistema que necesites. Tras el diagnóstico gratuito te damos un presupuesto cerrado, sin sorpresas. La mayoría de escuelas recuperan la inversión con 2-3 matrículas nuevas.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-22 px-6 py-24 sm:py-32">
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
