import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Minimal geometric — triangle divided diagonally, each half an L form */
export function LogoConcept5({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <clipPath id="concept5-clip">
          <path d="M50 12 L88 84 H12 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#concept5-clip)">
        {/* Diagonal split — lower-left half (L form) */}
        <path d="M12 84 L12 48 L50 12 L50 84 Z" fill={logoColors.teal} />
        {/* Diagonal split — upper-right half (inverted L form) */}
        <path d="M50 12 L88 84 L50 84 Z" fill={logoColors.slate} />
        {/* L leg cutout on teal half */}
        <path
          d="M22 74 V52 H32 V64 H44 V74 Z"
          fill={logoColors.white}
          opacity="0.92"
        />
        {/* Inverted L leg on slate half */}
        <path
          d="M78 74 V52 H68 V64 H56 V74 Z"
          fill={logoColors.tealLight}
          opacity="0.9"
        />
      </g>
      {/* Triangle outline */}
      <path
        d="M50 12 L88 84 H12 Z"
        fill="none"
        stroke={logoColors.slateMid}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Diagonal seam */}
      <line
        x1="12"
        y1="84"
        x2="50"
        y2="12"
        stroke={logoColors.white}
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}
