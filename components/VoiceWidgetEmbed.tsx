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
    <motion.div
      layout
      transition={layoutEaseTransition}
      className="glass flex h-full min-w-0 flex-col overflow-hidden rounded-3xl"
    >
      <div className="border-b border-line px-4 py-5 sm:px-8">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-flame/10 px-3 py-1 text-xs font-medium text-flame-bright">
          <Mic className="h-3.5 w-3.5" aria-hidden />
          Demo en vivo
        </div>
        <h3 className="font-display text-xl tracking-wide text-ink sm:text-2xl">
          Habla con el asistente de Emberize
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Así respondería la IA a los interesados de un estudio de pilates. Pulsa el
          micrófono y pruébalo tú mismo.
        </p>
      </div>

      <motion.div layout transition={layoutEaseTransition} className="relative flex min-w-0 flex-1 flex-col">
        <Collapse open={consent !== "all"}>
          {consent === "essential" ? (
            <div className="flex min-h-[300px] flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center sm:min-h-[380px] lg:min-h-[440px]">
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                La demo de voz usa cookies de terceros. Actívalas para probar el asistente.
              </p>
              <button
                type="button"
                onClick={acceptAllCookies}
                className="cursor-pointer rounded-xl bg-flame px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-flame-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
              >
                Aceptar cookies y probar la demo
              </button>
              <button
                type="button"
                onClick={openCookieSettings}
                className="cursor-pointer text-xs text-ink-muted underline transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
              >
                Cambiar preferencias
              </button>
              <p className="max-w-sm text-xs text-ink-muted">
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
            <div className="flex min-h-[300px] flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[380px] lg:min-h-[440px]">
              <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
                Acepta las cookies en el aviso inferior para activar la demo de voz.
              </p>
            </div>
          )}
        </Collapse>

        <Collapse open={consent === "all"}>
          <div
            ref={widgetHostRef}
            className="emberize-voice-widget-host relative flex min-h-[300px] min-w-0 max-w-full flex-1 flex-col items-center justify-center overflow-x-clip overflow-hidden bg-surface/40 px-1 pb-2 sm:min-h-[380px] sm:px-0 lg:min-h-[440px]"
            aria-label="Asistente de voz Emberize"
          />
        </Collapse>
      </motion.div>
    </motion.div>
  );
}
