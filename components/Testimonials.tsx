"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Antes perdía consultas de WhatsApp todos los días. Ahora el chatbot agenda las sesiones de prueba solo y yo me entero por el calendario. Hemos pasado de 8 a 21 pruebas al mes.",
    name: "Marta C.",
    role: "Fundadora, estudio de Pilates Reformer",
  },
  {
    quote:
      "El agente de voz atiende el teléfono mientras doy clase. Las interesadas reciben la información al momento y llegan a la prueba ya convencidas. Es como tener recepcionista sin el coste.",
    name: "Laura G.",
    role: "Directora, estudio de Pilates y Barre",
  },
  {
    quote:
      "Con el SEO local pasamos de no salir en Google a ser el primer estudio de la zona, y la landing con seguimiento automático nos trajo 34 altas nuevas. La inversión se pagó sola el primer mes.",
    name: "Irene R.",
    role: "Propietaria, centro de Pilates Clínico",
  },
];

export default function Testimonials() {
  return (
    <section className="cv-auto relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo 04 — La prueba"
          title={
            <>
              Estudios que ya <span className="text-sage">encendieron</span> su crecimiento
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between glass rounded-2xl p-7 transition-colors duration-300 hover:border-flame/40 cursor-default"
            >
              <div>
                <Quote className="mb-4 h-7 w-7 text-flame-bright" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-ink">{t.quote}</blockquote>
              </div>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
