import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Bold modern — filled triangle with gold/teal accent L shapes */
export function LogoConceptI({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Bold filled triangle — slate base */}
      <path d="M50 10 L92 86 H8 Z" fill={logoColors.slate} />
      {/* Teal accent band across upper third */}
      <path d="M50 10 L76 58 L24 58 Z" fill={logoColors.teal} opacity="0.35" />
      {/* L shape — gold, bold */}
      <path
        d="M26 74 V40 H38 V62 H54 V74 Z"
        fill={logoColors.gold}
      />
      {/* Inverted L — teal accent, bold */}
      <path
        d="M74 74 V40 H62 V62 H46 V74 Z"
        fill={logoColors.tealLight}
      />
      {/* Sharp modern edge highlight */}
      <path
        d="M50 10 L92 86 H8 Z"
        fill="none"
        stroke={logoColors.goldLight}
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.4"
      />
    </svg>
  );
}
