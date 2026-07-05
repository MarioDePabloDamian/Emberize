"use client";

import Image from "next/image";
import type { ComponentProps } from "react";

type BrandLogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt"> & {
  alt?: string;
};

/** Logo con WebP cuando el navegador lo soporta (menor peso en red). */
export default function BrandLogo({
  alt = "Logo de Emberize",
  width = 40,
  height = 40,
  className,
  priority,
  ...props
}: BrandLogoProps) {
  return (
    <picture>
      <source srcSet="/logo.webp" type="image/webp" />
      <Image
        src="/logo.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        {...props}
      />
    </picture>
  );
}
