const NAV_OFFSET = 88; // scroll-pt-22

function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "/index.html";
}

export function scrollToHash() {
  const { hash } = window.location;
  if (!hash) return;
  const el = document.querySelector(hash);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "auto" });
}

export function goToHash(hash: string) {
  const target = hash.startsWith("/#") ? hash.slice(1) : hash;
  if (!isHomePath(window.location.pathname)) {
    window.location.href = `/${target}`;
    return;
  }
  if (window.location.hash !== target) {
    window.location.hash = target;
  } else {
    scrollToHash();
  }
}
