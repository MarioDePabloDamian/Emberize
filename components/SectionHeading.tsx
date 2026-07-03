import Reveal from "./Reveal";

type SectionHeadingProps = {
  chapter: string;
  title: React.ReactNode;
  subtitle?: string;
};

export default function SectionHeading({ chapter, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-flame-bright">
          {chapter}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl tracking-wide sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
