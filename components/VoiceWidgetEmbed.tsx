"use client";

import { useEffect, useRef } from "react";
import { Mic } from "lucide-react";
import { isAllowedWidgetHost } from "@/lib/voice-widget-allowlist";

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      injectVoiceWidget(container);
      window.removeEventListener("scroll", load);
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
    };

    // ponytail: prefetch en primer gesto o en idle (~2s), no al llegar a #contacto
    window.addEventListener("scroll", load, { once: true, passive: true });
    window.addEventListener("pointerdown", load, { once: true, passive: true });
    window.addEventListener("keydown", load, { once: true, passive: true });

    let idleId: number | ReturnType<typeof setTimeout> | undefined;
    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(load, { timeout: 2000 });
    } else {
      idleId = setTimeout(load, 2000);
    }

    return () => {
      window.removeEventListener("scroll", load);
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      if (idleId != null) {
        if ("cancelIdleCallback" in window) cancelIdleCallback(idleId as number);
        else clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  return (
    <div className="glass flex h-full min-w-0 flex-col overflow-hidden rounded-3xl">
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
      <div
        ref={containerRef}
        className="emberize-voice-widget-host relative flex min-h-[300px] min-w-0 max-w-full flex-1 flex-col items-center justify-center overflow-x-clip overflow-hidden bg-surface/40 px-1 pb-2 sm:min-h-[380px] sm:px-0 lg:min-h-[440px]"
        aria-label="Asistente de voz Emberize"
      />
    </div>
  );
}
