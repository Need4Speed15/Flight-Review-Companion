# Flight Review Companion logos

## Current: Flight Path

The Flight Path design (concept 01) uses an upward-pointing airplane inside an open circular arc. Its simple, solid silhouette is intended to read clearly at the existing 38px desktop and 30px mobile header sizes.

- `flight-path.svg`: transparent, crisp vector icon used by the header and browser tab.
- `flight-path-transparent.png`: 1024 × 1024 transparent export for reuse.
- Root `favicon.svg`: matching copy for existing bookmarks and consumers.

The icon matches the site's `#55c8ef` sky blue. Native HTML continues to render the brand text. The previous Level Flight files are retained as design alternatives.

## Previous: Level Flight

The approved centered Level Flight design replaces the original star-in-a-circle header icon. The airplane, cockpit windows, and two open semicircles are retained; the separate horizon bar is absent.

- `level-flight.svg`: canonical, transparent vector asset used by the header.
- `level-flight-transparent.png`: 1024 × 1024 transparent PNG exported from the vector asset for reuse.
- Root `favicon.svg`: matching browser-tab icon.

The icon uses the site's sky blue, `#55c8ef`. Its background and cockpit windows are transparent. Visible lettering remains native HTML for readability and accessibility.

The concept and revisions used the built-in image-generation tool. Transparent bitmap trials produced stray edge pixels, so the approved silhouette was reconstructed as clean vector paths for the final web asset. The PNG is rasterized from that vector with Sharp; it contains a real alpha channel.

Final design brief: preserve the approved front-facing airplane and two broken semicircles, optically center the airplane, omit the horizon bar, retain the website's light blue palette, and provide transparent icon-only assets without text, shadows, texture, or a background.
