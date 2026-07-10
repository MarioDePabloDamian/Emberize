"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getCookieConsent,
  loadGhlTracking,
  OPEN_COOKIE_SETTINGS_EVENT,
  setCookieConsent,
  type CookieConsent,
} from "@/lib/cookies";

const btnSecondary =
  "cursor-pointer rounded-xl border border-line px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors duration-200 hover:border-flame/40 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright";
const btnPrimary =
  "cursor-pointer rounded-xl bg-flame px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-flame-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === "all") {
      loadGhlTracking();
    } else if (consent === null) {
      setVisible(true);
    }

    const open = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  function choose(value: CookieConsent) {
    setCookieConsent(value);
    if (value === "all") loadGhlTracking();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <div aria-hidden className="fixed inset-0 z-[60] bg-night/50 backdrop-blur-[2px]" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Preferencias de cookies"
        className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-3xl rounded-2xl glass p-5 shadow-lg sm:inset-x-6"
      >
        <div className="flex gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-flame-bright" aria-hidden />
          <p className="text-sm leading-relaxed text-ink">
            Usamos cookies propias y de terceros para analítica, el formulario de contacto y la
            demo de voz. Puedes aceptarlas o usar solo las necesarias. Más info en la{" "}
            <Link
              href="/cookies/"
              className="cursor-pointer text-flame-bright underline transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
            >
              política de cookies
            </Link>{" "}
            y la{" "}
            <Link
              href="/privacidad/"
              className="cursor-pointer text-flame-bright underline transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
            >
              política de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:ml-8 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => choose("essential")} className={btnSecondary}>
            Solo necesarias
          </button>
          <button type="button" onClick={() => choose("all")} className={btnPrimary}>
            Aceptar todas
          </button>
        </div>
      </div>
    </>
  );
}
