import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  legalController,
  legalLastUpdated,
  legalPages,
  type LegalPageSlug,
} from "@/lib/legal/contact";

type LegalLayoutProps = {
  title: string;
  current: LegalPageSlug;
  children: React.ReactNode;
};

export default function LegalLayout({ title, current, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative z-[1] px-4 pb-20 pt-28 sm:px-6">
        <article className="legal-prose mx-auto max-w-3xl">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-flame-bright transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Volver al inicio
            </Link>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Información legal
              </span>
              <span className="text-xs text-ink-muted">
                Actualizado: {legalLastUpdated}
              </span>
            </div>

            <h1 className="mt-4">{title}</h1>

            <nav aria-label="Documentos legales" className="mt-6">
              <ul className="flex flex-wrap gap-2">
                {legalPages.map(({ slug, href, label }) => (
                  <li key={slug}>
                    <Link
                      href={href}
                      aria-current={current === slug ? "page" : undefined}
                      className={`inline-block cursor-pointer rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright ${
                        current === slug
                          ? "bg-flame/15 text-flame-bright"
                          : "border border-line text-ink-muted hover:border-flame/40 hover:text-ink"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">{children}</div>

            <footer className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
              <p>
                ¿Dudas sobre estos textos? Escríbenos a{" "}
                <a href={`mailto:${legalController.email}`}>{legalController.email}</a>.
              </p>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
