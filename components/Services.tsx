"use client";

import { motion } from "motion/react";
import { Workflow, Bot, PanelsTopLeft, AudioLines, Search, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Workflow,
    name: "Automatización",
    tagline: "Tu recepción invisible",
    text: "Conectamos tu WhatsApp, Instagram, email y CRM. Seguimiento automático de interesadas, recordatorios de clases de prueba, avisos de renovación y recuperación de alumnas inactivas.",
    bullets: ["Seguimiento de leads sin mover un dedo", "Recordatorios que reducen ausencias", "Alertas de alumnas en riesgo de baja"],
  },
  {
    icon: Bot,
    name: "Chatbot IA",
    tagline: "Responde mientras das clase",
    text: "Un asistente entrenado con los horarios, tarifas y tipos de clase de tu estudio. Responde dudas, cualifica interesadas y agenda sesiones de prueba a cualquier hora, todos los días.",
    bullets: ["Respuesta en segundos, 24/7", "Agenda pruebas directamente en tu calendario", "Habla con el tono de tu estudio"],
  },
  {
    icon: PanelsTopLeft,
    name: "Landing pages",
    tagline: "Tu estudio, en su mejor versión",
    text: "Páginas de captación diseñadas para convertir: sesión de prueba, bonos de temporada, pilates prenatal o clínico. Rápidas, medibles y conectadas a tus automatizaciones.",
    bullets: ["Diseño orientado a reserva", "Formularios conectados a tu CRM", "Optimizadas para anuncios de Meta y Google"],
  },
  {
    icon: AudioLines,
    name: "Agentes de voz",
    tagline: "Ninguna llamada sin respuesta",
    text: "Un agente de voz con IA atiende el teléfono de tu estudio: informa de horarios y precios, agenda visitas y te pasa las llamadas importantes. Como una recepcionista, sin nómina.",
    bullets: ["Atiende en plena clase o fuera de horario", "Agenda y confirma citas por teléfono", "Transcripción y resumen de cada llamada"],
  },
  {
    icon: Search,
    name: "SEO, GEO y AEO",
    tagline: "Que te encuentren en Google… y en ChatGPT",
    text: "Posicionamos tu estudio donde busca tu clienta: SEO local para “pilates cerca de mí”, GEO para que las IAs como ChatGPT o Gemini te recomienden, y AEO para aparecer como respuesta directa.",
    bullets: ["SEO local: Google Maps y búsquedas de tu zona", "GEO: visibilidad en ChatGPT, Gemini y Perplexity", "AEO: respuestas destacadas y datos estructurados"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-22 px-6 py-24 sm:py-32">
      {/* Transición de color: el azul gana intensidad en la solución */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(46,134,245,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo 02 — La solución"
          title={
            <>
              Cinco pilares de <span className="text-flame-bright">crecimiento</span>
            </>
          }
          subtitle="Cada servicio funciona solo o en equipo. Juntos forman un sistema que capta, convierte y retiene alumnas mientras tú te dedicas a las sesiones."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass p-8 transition-colors duration-300 hover:border-flame/50 ${
                i === services.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-flame/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <div className="rounded-2xl bg-flame/10 p-3.5 text-flame-bright transition-all duration-300 group-hover:bg-flame/20 group-hover:text-ink">
                    <s.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-wide text-ink">{s.name}</h3>
                    <p className="text-sm font-medium text-sage">{s.tagline}</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-flame-bright" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl bg-flame px-7 py-3.5 text-base font-bold text-white glow-flame transition-colors duration-200 hover:bg-flame-bright cursor-pointer"
          >
            Diseña tu sistema a medida
            <ArrowRight className="h-4 w-4" aria-hidden />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
