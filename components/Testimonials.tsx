"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionNextCta from "./SectionNextCta";

const testimonials = [
  {
    quote:
      "Antes recibía consultas por WhatsApp a deshoras y no siempre podía responder. Ahora el asistente gestiona las solicitudes de prueba y yo recibo la confirmación. Por fin puedo terminar la sesión sin estar pendiente del móvil.",
    name: "Marta C.",
    role: "Responsable, estudio de Pilates Reformer · Madrid",
  },
  {
    quote:
      "En plena clase las llamadas las atiende el asistente al momento. Resuelve las dudas y quien llega a la prueba viene mejor informado. Es como contar con recepcionista, sin el coste fijo de plantilla.",
    name: "Laura G.",
    role: "Responsable, estudio de Pilates y Barre · Sevilla",
  },
  {
    quote:
      "Antes apenas aparecíamos en Google. Hoy nos encuentran cuando buscan pilates en la zona. La landing y el seguimiento automático nos ayudan a que más interesados prueben clase y se queden.",
    name: "Irene R.",
    role: "Responsable, centro de Pilates Clínico · Bilbao",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="cv-auto relative scroll-mt-22 px-6 py-24 sm:py-32">
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

        <SectionNextCta href="#faq">Resuelve tus dudas</SectionNextCta>
      </div>
    </section>
  );
}
