"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLogo = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Resplandor de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, rgba(46,134,245,0.22), transparent 70%), radial-gradient(ellipse 40% 30% at 50% 80%, rgba(255,107,44,0.10), transparent 70%)",
        }}
      />

      <motion.div style={{ y: yLogo, opacity }} className="relative">
        <motion.div
          animate={reduce ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt=""
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
          IA para escuelas de artes marciales y deportes de contacto
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl"
        >
          Tu escuela entrena campeones.
          <br />
          <span className="bg-gradient-to-r from-flame-bright via-flame to-ember bg-clip-text text-transparent text-glow-blue">
            La IA llena tu tatami.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base text-ink-muted sm:text-lg"
        >
          Automatizamos la captación y gestión de alumnos de tu gimnasio con chatbots,
          agentes de voz y landing pages que convierten curiosos en matrículas.
          Tú enseña. Nosotros respondemos, agendamos y hacemos seguimiento 24/7.
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
            className="group inline-flex items-center gap-2 rounded-xl bg-ember px-7 py-3.5 text-base font-bold text-night glow-ember transition-colors duration-200 hover:bg-ember-bright cursor-pointer"
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
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-ink-muted hover:text-ink transition-colors duration-200 cursor-pointer"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
