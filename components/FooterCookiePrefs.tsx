"use client";

import { useEffect, useState } from "react";
import { getCookieConsent, type CookieConsent } from "@/lib/cookies";
import CookieSettingsButton from "./CookieSettingsButton";

export default function FooterCookiePrefs() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const sync = () => setConsent(getCookieConsent());
    sync();
    window.addEventListener("emberize-cookie-consent", sync);
    return () => window.removeEventListener("emberize-cookie-consent", sync);
  }, []);

  if (!consent) return null;

  return (
    <li>
      <CookieSettingsButton />
    </li>
  );
}
