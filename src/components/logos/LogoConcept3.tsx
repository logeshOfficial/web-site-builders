import { logoColors } from "./colors";
import type { LogoProps } from "./types";

/** Solid triangle with white L monogram cutout */
export function LogoConcept3({ className, size = 120 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <mask id="concept3-mask">
          <rect width="100" height="100" fill="white" />
          {/* Combined L monogram */}
          <path
            d="M34 70 V34 H44 V60 H56 V70 Z M66 70 V34 H56 V60 H44 V70 Z"
            fill="black"
          />
        </mask>
      </defs>
      <path
        d="M50 10 L90 84 H10 Z"
        fill={logoColors.teal}
        mask="url(#concept3-mask)"
      />
    </svg>
  );
}
