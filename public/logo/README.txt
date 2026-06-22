Business Website Makers — Concept A Logo Assets
================================================

Approved design: Aries marsRedGold palette
  - Maroon triangle (#6B1D2A)
  - Gold mirrored L / inverted L, left (#C9A227)
  - Scarlet upright L, right (#D6392B)
  - Scarlet triangle stroke (#D6392B)
  - No ram horns

Geometry matches src/components/logos/paths.ts and the live header logo.


VECTOR (MASTER)
---------------
concept-a.svg          Full mark, transparent background — edit & scale for any use
concept-a-icon.svg     Square icon mark only (favicon, app icons, avatars)
concept-a-full.svg     Icon + "Business Website Makers" wordmark


RASTER (PNG, transparent background)
------------------------------------
concept-a-32.png       32×32   Favicon, browser tab, small UI
concept-a-512.png      512×512 Social profiles, email signatures, Slack
concept-a-1024.png     1024×1024 HD web, Open Graph fallback, presentations
concept-a-2048.png     2048×2048 Print, large displays, high-res exports


USAGE GUIDE
-----------
Website header / footer     Use React Logo component (live site) or concept-a-full.svg
Favicon / browser tab       concept-a-32.png or concept-a-icon.svg
Social media (profile pic)  concept-a-512.png or concept-a-1024.png
Social posts / OG image     concept-a-1024.png on light or white background
Email signature             concept-a-512.png or concept-a-full.svg
Print / merchandise         concept-a-2048.png or concept-a.svg (vector for vendors)
App icon / PWA              concept-a-512.png or concept-a-icon.svg

Download page: /logo-download


REGENERATE PNGs
---------------
After editing SVG source files, run from project root:

  npm run export-logos

Requires sharp (dev dependency).
