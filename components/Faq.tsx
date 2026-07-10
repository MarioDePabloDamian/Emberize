import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/content/faq";

export default function Faq() {
  return (
    <section id="faq" className="cv-auto relative scroll-mt-22 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          chapter="Capítulo 05 — Las dudas"
          title={
            <>
              Preguntas <span className="text-flame-bright">frecuentes</span>
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group glass rounded-2xl transition-colors duration-300 open:border-flame/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-ink sm:text-base">{f.q}</span>
                <span className="shrink-0 rounded-full bg-surface-2 p-1 text-ink-muted transition-colors duration-200 group-open:bg-flame/20 group-open:text-flame-bright">
                  <Plus
                    className="h-4 w-4 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  />
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
