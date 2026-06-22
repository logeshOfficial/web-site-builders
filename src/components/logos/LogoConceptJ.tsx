import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Circular badge containing triangle-L monogram */
export function LogoConceptJ({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Outer circle badge */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill={logoColors.slate}
      />
      {/* Inner ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke={logoColors.teal}
        strokeWidth="2.5"
      />
      {/* Triangle monogram — centered in badge */}
      <path
        d="M50 24 L72 68 H28 Z"
        fill={logoColors.tealDark}
      />
      {/* L on triangle — white */}
      <path
        d="M34 62 V42 H40 V56 H50 V62 Z"
        fill={logoColors.white}
      />
      {/* Inverted L on triangle — teal light */}
      <path
        d="M66 62 V42 H60 V56 H50 V62 Z"
        fill={logoColors.tealLight}
      />
      {/* Badge highlight arc */}
      <path
        d="M18 38 A44 44 0 0 1 82 38"
        fill="none"
        stroke={logoColors.white}
        strokeWidth="1"
        opacity="0.12"
      />
    </svg>
  );
}
