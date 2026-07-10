export const COOKIE_CONSENT_KEY = "emberize-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "emberize-open-cookie-settings";

export type CookieConsent = "all" | "essential";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "all" || value === "essential" ? value : null;
}

export function setCookieConsent(value: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event("emberize-cookie-consent"));
}

export function hasAnalyticsConsent() {
  return getCookieConsent() === "all";
}

export function acceptAllCookies() {
  setCookieConsent("all");
  loadGhlTracking();
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

const GHL_TRACKING_ID = "tk_15fc8c0b0a794e1e99062d7ab7604771";

export function loadGhlTracking() {
  if (document.querySelector(`script[data-tracking-id="${GHL_TRACKING_ID}"]`)) return;

  const script = document.createElement("script");
  script.src = "https://link.msgsndr.com/js/external-tracking.js";
  script.setAttribute("data-tracking-id", GHL_TRACKING_ID);
  script.async = true;
  document.body.appendChild(script);
}
