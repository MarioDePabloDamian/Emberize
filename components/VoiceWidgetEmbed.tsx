"use client";

import { useEffect, useRef } from "react";
import { Mic } from "lucide-react";
import { isAllowedWidgetHost } from "@/lib/voice-widget-allowlist";
import { useInViewport } from "@/lib/use-in-viewport";

const WIDGET_ID = process.env.NEXT_PUBLIC_GHL_WIDGET_ID;
const LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;

export default function VoiceWidgetEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInViewport(containerRef, { once: true, rootMargin: "240px" });

  useEffect(() => {
    if (!inView) return;

    const container = containerRef.current;
    if (!container || container.querySelector("script[data-widget-id]")) return;
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
  }, [inView]);

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
        className="emberize-voice-widget-host relative min-h-[300px] flex-1 overflow-hidden bg-surface/40 px-1 pb-2 sm:min-h-[380px] sm:px-0 lg:min-h-[440px]"
        aria-label="Asistente de voz Emberize"
      />
    </div>
  );
}
