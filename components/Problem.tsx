"use client";

import { motion } from "motion/react";
import { MessageCircleOff, PhoneMissed, CalendarX, TrendingDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SectionNextCta from "./SectionNextCta";

const pains = [
  {
    icon: MessageCircleOff,
    title: "WhatsApp sin responder",
    text: "Alguien pregunta por clases de reformer a las 21:30. Nadie contesta hasta el día siguiente. Ya reservó en otro estudio.",
  },
  {
    icon: PhoneMissed,
    title: "Llamadas perdidas en plena sesión",
    text: "Estás guiando una clase y el teléfono queda sin atender. Cada llamada perdida es un interesado que se enfría.",
  },
  {
    icon: CalendarX,
    title: "Clases de prueba que no se presentan",
    text: "Agendas sesiones de prueba a mano y la mitad no aparece porque nadie les recordó ni les hizo seguimiento.",
  },
  {
    icon: TrendingDown,
    title: "Invisibles en Google y en ChatGPT",
    text: "Cuando alguien busca “pilates cerca de mí” o se lo pregunta a una IA, tu estudio no aparece. Ese cliente ya es de otro.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="cv-auto relative scroll-mt-22 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo 01 — El problema"
          title={
            <>
              Cada día pierdes alumnos <span className="text-sage">sin darte cuenta</span>
            </>
          }
          subtitle="Dominas cuerpos y posturas, no perseguir mensajes. Mientras das tus sesiones, los interesados se escapan por las grietas."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.65, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-7 transition-colors duration-300 hover:border-sage/40 cursor-default"
            >
              <div className="mb-4 inline-flex rounded-xl bg-sage/10 p-3 text-sage transition-colors duration-300 group-hover:bg-sage/20">
                <p.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-lg text-ink-muted">
            La buena noticia:{" "}
            <span className="font-semibold text-flame-bright">
              todo esto se puede automatizar hoy mismo.
            </span>
          </p>
        </Reveal>

        <SectionNextCta href="#servicios">Descubre cómo lo solucionamos</SectionNextCta>
      </div>
    </section>
  );
}
