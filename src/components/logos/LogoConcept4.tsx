import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Rounded triangle badge with overlapping L and inverted L */
export function LogoConcept4({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Rounded triangle badge */}
      <path
        d="M50 14
           C50 14 82 72 82 72
           C82 78 76 84 70 84
           H30
           C24 84 18 78 18 72
           C18 72 50 14 50 14 Z"
        fill={logoColors.slate}
      />
      {/* L shape — teal, left */}
      <path
        d="M30 68 V38 H40 V58 H52 V68 Z"
        fill={logoColors.tealLight}
      />
      {/* Inverted L — white, right, overlapping */}
      <path
        d="M70 68 V38 H60 V58 H48 V68 Z"
        fill={logoColors.white}
        opacity="0.95"
      />
      {/* Subtle badge rim */}
      <path
        d="M50 14
           C50 14 82 72 82 72
           C82 78 76 84 70 84
           H30
           C24 84 18 78 18 72
           C18 72 50 14 50 14 Z"
        fill="none"
        stroke={logoColors.teal}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
