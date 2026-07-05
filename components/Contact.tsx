"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Loader2,
  PenLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import VoiceWidgetEmbed from "./VoiceWidgetEmbed";

const services = [
  "Automatización",
  "Chatbot IA",
  "Landing page",
  "Agente de voz",
  "SEO / GEO / AEO",
  "No lo tengo claro",
];

const SENT_KEY = "emberize-contact-sent";

const trustPoints = [
  { icon: Clock3, text: "Respuesta en menos de 24 h" },
  { icon: ShieldCheck, text: "Sin spam ni compromiso" },
  { icon: Sparkles, text: "Diagnóstico 100 % gratuito" },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (sessionStorage.getItem(SENT_KEY) === "1") {
      setStatus("sent");
      sessionStorage.removeItem(SENT_KEY);
      window.history.replaceState(null, "", "#contacto");
    }
  }, []);

  function handleSubmit() {
    // Sin preventDefault: el script de GoHighLevel captura el submit nativo del formulario.
    sessionStorage.setItem(SENT_KEY, "1");
    setStatus("sending");
  }

  return (
    <section id="contacto" className="relative scroll-mt-22 px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 60%, rgba(52,211,153,0.10), transparent 70%), radial-gradient(ellipse 60% 40% at 50% 20%, rgba(46,134,245,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          chapter="Capítulo final — Tu movimiento"
          title={
            <>
              Enciende tu estudio. <span className="text-sage">Pide tu diagnóstico gratis.</span>
            </>
          }
          subtitle="Prueba el asistente de voz o cuéntanos por escrito cómo trabaja tu estudio. Te enseñamos, sin compromiso, qué automatizaría la IA por ti y cómo mejorar tu visibilidad en Google."
        />

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <VoiceWidgetEmbed />
          </Reveal>

          <Reveal delay={0.15}>
            <form
              name="emberize-diagnostico"
              method="get"
              action="#contacto"
              onSubmit={handleSubmit}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl glass"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/50 to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-sage/8 blur-3xl"
              />

              <div className="relative border-b border-line px-6 py-5 sm:px-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage-bright">
                  <PenLine className="h-3.5 w-3.5" aria-hidden />
                  Por escrito
                </div>
                <h3 className="font-display text-2xl tracking-wide text-ink">
                  Solicita tu diagnóstico
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Cuéntanos cómo captáis alumnas hoy. Te proponemos qué automatizar y cómo
                  mejorar tu visibilidad online.
                </p>
              </div>

              <div className="relative flex flex-1 flex-col px-6 py-6 sm:px-8 sm:py-7">
                <ul className="mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                  {trustPoints.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-center gap-2 text-xs text-ink-muted"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-sage" aria-hidden />
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="mb-1.5 block text-sm font-medium text-ink">
                      Nombre <span className="text-sage">*</span>
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email <span className="text-sage">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="tu@email.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company_name"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Nombre de tu estudio
                    </label>
                    <input
                      id="company_name"
                      name="company_name"
                      type="text"
                      placeholder="Ej. Estudio Equilibrio Pilates"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="servicio" className="mb-1.5 block text-sm font-medium text-ink">
                      ¿Qué te interesa? <span className="text-sage">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="servicio"
                        name="servicio"
                        required
                        defaultValue=""
                        className="form-input cursor-pointer appearance-none pr-10"
                      >
                        <option value="" disabled>
                          Elige un servicio
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                        aria-hidden
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                      Cuéntanos tu situación <span className="text-sage">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Ej. Tenemos dos salas de reformer con unas 90 alumnas, recibimos consultas por Instagram y WhatsApp pero se nos escapan muchas..."
                      className="form-textarea"
                    />
                  </div>
                </div>

                <div className="mt-7 border-t border-line pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-ink-muted">
                      Al enviar aceptas que usemos tus datos solo para responderte. Nada de spam.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-flame px-8 py-3.5 text-base font-bold text-white glow-flame transition-colors duration-200 hover:bg-flame-bright disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer"
                    >
                      {status === "sending" ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      )}
                      {status === "sending" ? "Enviando..." : "Solicitar diagnóstico gratis"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {status === "sent" && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="status"
                        className="mt-5 flex items-center gap-2 rounded-xl border border-sage/25 bg-sage/10 px-4 py-3 text-sm text-sage-bright"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                        Recibido. Te contactamos en menos de 24 horas para agendar tu diagnóstico.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
