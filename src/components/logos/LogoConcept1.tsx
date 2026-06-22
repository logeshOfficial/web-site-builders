import { useId } from "react";

import { ariesPalettes, defaultAriesPalette } from "./colors";
import {
  conceptAMirroredL,
  conceptATriangle,
  conceptAUprightL,
} from "./paths";

import type { LogoProps } from "./types";

/** Triangle outline with L + mirrored L — Aries fire/Mars palette */
export function LogoConcept1({
  className,
  size = 120,
  palette = defaultAriesPalette,
}: LogoProps) {
  const maskId = useId();
  const colors = ariesPalettes[palette];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          <path d={conceptAUprightL} fill="black" />
          <path d={conceptAMirroredL} fill="black" />
        </mask>
      </defs>
      <path d={conceptATriangle} fill={colors.triangle} mask={`url(#${maskId})`} />
      <path d={conceptAUprightL} fill={colors.uprightL} />
      <path d={conceptAMirroredL} fill={colors.mirroredL} />
      <path
        d={conceptATriangle}
        fill="none"
        stroke={colors.stroke}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
