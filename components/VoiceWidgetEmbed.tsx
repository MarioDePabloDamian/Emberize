"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mic } from "lucide-react";
import { motion } from "motion/react";
import {
  acceptAllCookies,
  getCookieConsent,
  openCookieSettings,
  type CookieConsent,
} from "@/lib/cookies";
import { isAllowedWidgetHost } from "@/lib/voice-widget-allowlist";
import { ASSISTANT_SECTION_ID } from "@/lib/site";
import { badgeFlame, btnFlame } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";
import Collapse, { layoutEaseTransition } from "@/components/Collapse";

const WIDGET_ID = process.env.NEXT_PUBLIC_GHL_WIDGET_ID;
const LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;

function injectVoiceWidget(container: HTMLDivElement) {
  if (container.querySelector("script[data-widget-id]")) return;
  if (!isAllowedWidgetHost(window.location.hostname)) return;
  if (!WIDGET_ID || !LOCATION_ID) return;

  const script = document.createElement("script");
  script.src = "https://widgets.leadconnectorhq.com/loader.js";
  script.setAttribute(
    "data-resources-url",
    "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
  );
  script.setAttribute("data-widget-id", WIDGET_ID);
  script.setAttribute("data-location-id", LOCATION_ID);
  script.setAttribute("data-widget-placement", "embedded");
  container.appendChild(script);
}

export default function VoiceWidgetEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const sync = () => setConsent(getCookieConsent());
    sync();
    window.addEventListener("emberize-cookie-consent", sync);
    return () => window.removeEventListener("emberize-cookie-consent", sync);
  }, []);

  const widgetHostRef = useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;
      if (node && consent === "all") injectVoiceWidget(node);
    },
    [consent],
  );

  return (
    <motion.article
      id={ASSISTANT_SECTION_ID}
      layout
      transition={layoutEaseTransition}
      aria-labelledby="asistente-heading"
      className="glass scroll-mt-22 flex h-full min-w-0 flex-col overflow-hidden rounded-3xl"
    >
      <header className="border-b border-line px-4 py-5 sm:px-8">
        <p className={cn(badgeFlame, "mb-2")}>
          <Mic className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Asistente en vivo
        </p>
        <h3 id="asistente-heading" className="font-display text-xl tracking-wide text-ink sm:text-2xl">
          Habla con el asistente de Emberize
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Así respondería la IA a los interesados de un estudio de pilates. Pulsa el
          micrófono y pruébalo tú mismo.
        </p>
      </header>

      <motion.div layout transition={layoutEaseTransition} className="relative flex min-w-0 flex-1 flex-col">
        <Collapse open={consent !== "all"}>
          {consent === "essential" ? (
            <div className="flex min-h-[280px] flex-1 flex-col items-center justify-center gap-4 px-4 py-8 text-center sm:min-h-[380px] sm:px-6 sm:py-10 lg:min-h-[440px]">
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                El asistente usa cookies de terceros. Actívalas para hablar con él.
              </p>
              <button
                type="button"
                onClick={acceptAllCookies}
                className={cn(btnFlame, "w-full max-w-xs sm:w-auto")}
              >
                Acepta cookies y habla con el asistente
              </button>
              <button
                type="button"
                onClick={openCookieSettings}
                className="cursor-pointer px-2 py-2 text-xs text-ink-muted underline transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
              >
                Cambiar preferencias
              </button>
              <p className="max-w-sm text-xs leading-relaxed text-ink-muted">
                Más info en la{" "}
                <Link
                  href="/cookies/"
                  className="cursor-pointer text-flame-bright underline transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
                >
                  política de cookies
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[380px] sm:px-6 sm:py-10 lg:min-h-[440px]">
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                Acepta las cookies en el aviso inferior para activar el asistente.
              </p>
            </div>
          )}
        </Collapse>

        <Collapse open={consent === "all"}>
          <div
            ref={widgetHostRef}
            role="region"
            className="emberize-voice-widget-host relative flex min-h-[280px] min-w-0 max-w-full flex-1 flex-col items-center justify-center overflow-x-clip overflow-hidden bg-surface/40 px-1 pb-2 sm:min-h-[380px] sm:px-0 lg:min-h-[440px]"
            aria-label="Interfaz del asistente de voz Emberize"
          />
        </Collapse>
      </motion.div>
    </motion.article>
  );
}
