import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Thin line-art triangle with elegant minimal L pair */
export function LogoConceptG({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Delicate triangle outline */}
      <path
        d="M50 14 L86 80 H14 Z"
        fill="none"
        stroke={logoColors.slateLight}
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      {/* L — thin stroke, bottom-left */}
      <path
        d="M28 72 V42 H38 V62 H58"
        fill="none"
        stroke={logoColors.teal}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inverted L — thin stroke, bottom-right */}
      <path
        d="M72 72 V42 H62 V62 H42"
        fill="none"
        stroke={logoColors.slate}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle apex accent */}
      <circle cx="50" cy="14" r="2" fill={logoColors.tealLight} opacity="0.7" />
    </svg>
  );
}
