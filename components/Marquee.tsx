const disciplines = [
  "Brazilian Jiu-Jitsu",
  "Muay Thai",
  "Boxeo",
  "MMA",
  "Judo",
  "Karate",
  "Taekwondo",
  "Kickboxing",
  "Krav Maga",
  "Lucha Libre Olímpica",
];

export default function Marquee() {
  const row = [...disciplines, ...disciplines];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-line bg-surface py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((d, i) => (
          <span
            key={`${d}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-xl tracking-widest text-ink-muted/70"
          >
            {d}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
