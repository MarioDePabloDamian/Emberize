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
import { btnFlame, btnSecondary } from "@/lib/ui-classes";

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
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
        className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl glass p-4 shadow-lg sm:inset-x-6 sm:bottom-4 sm:p-5"
      >
        <div className="flex gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-flame-bright" aria-hidden />
          <div className="min-w-0">
            <p id="cookie-consent-title" className="sr-only">
              Preferencias de cookies
            </p>
            <p id="cookie-consent-desc" className="text-sm leading-relaxed text-ink">
              Para hablar con el asistente en vivo necesitas aceptar cookies de terceros. También
              las usamos para analítica y el formulario de contacto. Puedes aceptarlas o usar solo
              las necesarias (sin asistente). Más info en la{" "}
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
        </div>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:ml-8 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => choose("essential")} className={btnSecondary}>
            Solo necesarias
          </button>
          <button type="button" onClick={() => choose("all")} className={btnFlame}>
            <span className="sm:hidden">Acepta y habla</span>
            <span className="hidden sm:inline">Acepta y habla con el asistente</span>
          </button>
        </div>
      </div>
    </>
  );
}
