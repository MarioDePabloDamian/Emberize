"use client";

import BrandLogo from "./BrandLogo";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useLightMotion } from "@/lib/use-light-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const lightMotion = useLightMotion();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLogo = useTransform(scrollYProgress, [0, 1], [0, lightMotion ? 0 : -120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, lightMotion ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-svh min-h-dvh scroll-mt-22 flex-col items-center justify-center overflow-x-clip px-6 pt-28 pb-16"
    >
      {reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_38%,rgba(46,134,245,0.22),transparent_70%),radial-gradient(ellipse_40%_30%_at_50%_80%,rgba(52,211,153,0.1),transparent_70%)]"
        />
      )}

      <motion.div style={{ y: yLogo, opacity }} className="relative">
        <motion.div
          animate={lightMotion ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <BrandLogo
            alt="Emberize — automatización con IA para estudios de pilates"
            width={150}
            height={150}
            priority
            className="drop-shadow-[0_0_45px_rgba(46,134,245,0.55)]"
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: yText, opacity }} className="relative mt-8 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-flame-bright"
        >
          <Sparkles className="h-3.5 w-3.5" />
          IA, SEO y automatización para estudios de pilates
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="font-display text-5xl leading-[1.02] tracking-wide sm:text-7xl lg:text-8xl"
        >
          Tu estudio cuida cuerpos.
          <br />
          <span className="bg-gradient-to-r from-flame-bright via-sage-bright to-sage bg-clip-text text-transparent text-glow-blue">
            La IA llena tus clases.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base text-ink-muted sm:text-lg"
        >
          Automatizamos la captación y gestión de alumnos de tu estudio de pilates con
          chatbots, agentes de voz, landing pages y SEO que te hace aparecer en Google
          y en ChatGPT. Tú das las sesiones. Nosotros respondemos, agendamos y hacemos
          seguimiento 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-base font-bold text-night glow-sage transition-colors duration-200 hover:bg-sage-bright cursor-pointer"
          >
            Quiero más alumnos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-200 hover:border-flame/50 cursor-pointer"
          >
            Ver servicios
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#problema"
        aria-label="Bajar a la siguiente sección"
        style={{ opacity }}
        animate={lightMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 cursor-pointer text-ink-muted hover:text-ink transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
