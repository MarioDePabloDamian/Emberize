"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { goToHash } from "@/lib/hash-nav";

const links = [
  { href: "#problema", label: "El problema" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodo", label: "Método" },
  { href: "#faq", label: "FAQ" },
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
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl px-5 py-3 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? "glass glow-flame" : "bg-transparent border border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5 cursor-pointer group">
          <Image
            src="/logo.png"
            alt="Logo de Emberize, flor de loto en llamas azules"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:-rotate-6"
            priority
          />
          <span className="font-display text-2xl tracking-wider text-ink">
            EMBER<span className="text-flame-bright">IZE</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-ink-muted hover:text-ink transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-flame-bright after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center rounded-xl bg-sage px-5 py-2.5 text-sm font-semibold text-night transition-colors duration-200 hover:bg-sage-bright cursor-pointer"
          >
            Agenda una demo
          </motion.a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 text-ink hover:bg-surface-2 transition-colors duration-200 cursor-pointer"
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
                  className="block rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-2 transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={menuClick("#contacto")}
                className="mt-1 block rounded-lg bg-sage px-3 py-2.5 text-center text-sm font-semibold text-night"
              >
                Agenda una demo
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
