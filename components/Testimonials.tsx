"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Antes perdía consultas de WhatsApp todos los días. Ahora el chatbot agenda las clases de prueba solo y yo me entero por el calendario. Hemos pasado de 8 a 21 pruebas al mes.",
    name: "Carlos M.",
    role: "Head Coach, academia de BJJ",
  },
  {
    quote:
      "El agente de voz atiende el teléfono mientras doy clase. Los padres reciben la información al momento y las visitas llegan ya convencidas. Es como tener recepcionista sin el coste.",
    name: "Laura G.",
    role: "Directora, escuela de Taekwondo infantil",
  },
  {
    quote:
      "La landing de la campaña de septiembre más el seguimiento automático nos trajo 34 matrículas nuevas. La inversión se pagó sola el primer mes.",
    name: "Iván R.",
    role: "Propietario, gimnasio de Muay Thai y Boxeo",
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo 04 — La prueba"
          title={
            <>
              Escuelas que ya <span className="text-ember">encendieron</span> su crecimiento
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
