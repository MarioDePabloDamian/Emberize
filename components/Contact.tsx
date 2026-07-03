"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const services = ["Automatización", "Chatbot IA", "Landing page", "Agente de voz", "No lo tengo claro"];

const SENT_KEY = "emberize-contact-sent";

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
    <section id="contacto" className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 60%, rgba(255,107,44,0.10), transparent 70%), radial-gradient(ellipse 60% 40% at 50% 20%, rgba(46,134,245,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          chapter="Capítulo final — Tu movimiento"
          title={
            <>
              Enciende tu escuela. <span className="text-ember">Pide tu diagnóstico gratis.</span>
            </>
          }
          subtitle="Cuéntanos cómo trabaja tu escuela hoy y te enseñamos, sin compromiso, qué automatizaría la IA por ti. Respondemos en menos de 24 horas."
        />

        <Reveal delay={0.15} className="mt-12">
          <form
            name="emberize-diagnostico"
            method="get"
            action="#contacto"
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nombre *
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors duration-200 focus:border-flame-bright"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors duration-200 focus:border-flame-bright"
                />
              </div>
              <div>
                <label htmlFor="company_name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nombre de tu escuela
                </label>
                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  placeholder="Ej. Academia Dragón Azul"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors duration-200 focus:border-flame-bright"
                />
              </div>
              <div>
                <label htmlFor="servicio" className="mb-1.5 block text-sm font-medium text-ink">
                  ¿Qué te interesa? *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  defaultValue=""
                  className="w-full cursor-pointer rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-flame-bright"
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
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Cuéntanos tu situación *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Ej. Tenemos unos 80 alumnos de BJJ y boxeo, recibimos consultas por Instagram y WhatsApp pero se nos escapan muchas..."
                  className="w-full resize-y rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors duration-200 focus:border-flame-bright"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-xs text-ink-muted">
                Al enviar aceptas que usemos tus datos solo para responderte. Nada de spam.
              </p>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.04 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ember px-8 py-3.5 text-base font-bold text-night glow-ember transition-colors duration-200 hover:bg-ember-bright disabled:opacity-60 sm:w-auto cursor-pointer"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Flame className="h-4 w-4" aria-hidden />
                )}
                {status === "sending" ? "Enviando..." : "Solicitar diagnóstico gratis"}
              </motion.button>
            </div>

            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mt-5 flex items-center gap-2 rounded-xl bg-flame/10 px-4 py-3 text-sm text-flame-bright"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                  Recibido. Te contactamos en menos de 24 horas para agendar tu diagnóstico.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
