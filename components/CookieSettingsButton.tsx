"use client";

import { openCookieSettings } from "@/lib/cookies";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="cursor-pointer hover:text-ink transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-bright"
    >
      Preferencias
    </button>
  );
}
