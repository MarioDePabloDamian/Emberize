const DEFAULT_ALLOWED_HOSTS = [
  "emberize.es",
  "www.emberize.es",
  "localhost",
  "127.0.0.1",
];

export function getAllowedWidgetHosts(): string[] {
  const fromEnv = process.env.NEXT_PUBLIC_ALLOWED_WIDGET_HOSTS?.split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);

  return fromEnv?.length ? fromEnv : DEFAULT_ALLOWED_HOSTS;
}

function hostMatchesAllowlist(hostname: string, allowedHosts: string[]): boolean {
  const host = hostname.toLowerCase();
  return allowedHosts.some((allowed) => {
    if (allowed.startsWith("*.")) {
      const suffix = allowed.slice(1);
      return host.endsWith(suffix) || host === allowed.slice(2);
    }
    return host === allowed;
  });
}

export function isAllowedWidgetHost(hostname: string): boolean {
  return hostMatchesAllowlist(hostname, getAllowedWidgetHosts());
}
