"use client";

import BrandLogo from "./BrandLogo";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, Mic, X } from "lucide-react";
import { goToHash } from "@/lib/hash-nav";
import { ASSISTANT_PATH } from "@/lib/site";
import { btnSage } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#problema", label: "El problema" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#metodo", label: "Método" },
  { href: "/#faq", label: "FAQ" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const menuClick = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToHash(hash);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl px-4 py-3 transition-[background-color,box-shadow,border-color] duration-300 sm:px-5 ${
        scrolled ? "glass glow-flame" : "bg-transparent border border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-3" aria-label="Principal">
        <a href="/" className="flex min-w-0 shrink items-center gap-2.5 cursor-pointer group">
          <BrandLogo
            alt="Logo de Emberize, flor de loto en llamas azules"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:-rotate-6"
            priority
          />
          <span className="font-display text-xl tracking-wider text-ink sm:text-2xl">
            EMBER<span className="text-flame-bright">IZE</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative cursor-pointer whitespace-nowrap text-sm text-ink-muted hover:text-ink transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-flame-bright after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={ASSISTANT_PATH}
            className={cn(btnSage, "hidden sm:inline-flex whitespace-nowrap lg:px-5")}
          >
            <Mic className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden lg:inline">Habla con el asistente</span>
            <span className="lg:hidden">Asistente</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden min-h-11 min-w-11 rounded-lg p-2 text-ink hover:bg-surface-2 transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden flex flex-col gap-1 pt-3"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={menuClick(l.href)}
                  className="block min-h-11 cursor-pointer rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={ASSISTANT_PATH}
                onClick={menuClick(ASSISTANT_PATH)}
                className={cn(btnSage, "mt-1 w-full")}
              >
                <Mic className="h-4 w-4 shrink-0" aria-hidden />
                Habla con el asistente
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
