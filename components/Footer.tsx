import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line bg-night px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <BrandLogo alt="Logo de Emberize" width={32} height={32} />
          <span className="font-display text-xl tracking-wider text-ink">
            EMBER<span className="text-flame-bright">IZE</span>
          </span>
        </div>

        <p className="text-center text-xs text-ink-muted">
          IA, SEO y automatización para estudios de pilates.
          <br className="sm:hidden" /> © {new Date().getFullYear()} Emberize. Todos los derechos reservados.
        </p>

        <nav aria-label="Pie de página">
          <ul className="flex items-center gap-5 text-xs text-ink-muted">
            <li>
              <a href="#servicios" className="hover:text-ink transition-colors duration-200">
                Servicios
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-ink transition-colors duration-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-ink transition-colors duration-200">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
