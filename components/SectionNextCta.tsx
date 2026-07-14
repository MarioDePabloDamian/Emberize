"use client";

import Reveal from "./Reveal";
import { btnGradientLg } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

type SectionNextCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function SectionNextCta({
  href,
  children,
  className,
  delay = 0.2,
}: SectionNextCtaProps) {
  return (
    <Reveal delay={delay} className={cn("mt-12 flex justify-center px-2", className)}>
      <a href={href} className={cn(btnGradientLg, "text-center")}>
        {children}
      </a>
    </Reveal>
  );
}
