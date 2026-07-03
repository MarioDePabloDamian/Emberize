const NAV_OFFSET = 88; // scroll-pt-22

export function scrollToHash() {
  const { hash } = window.location;
  if (!hash) return;
  const el = document.querySelector(hash);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "auto" });
}

export function goToHash(hash: string) {
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  } else {
    scrollToHash();
  }
}
