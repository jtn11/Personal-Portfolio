"use client";

import { useEffect } from "react";

export default function BfcacheListener() {
  useEffect(() => {
    // When returning to the page via the browser's Back/Forward cache (bfcache)
    // from an external link (like GitHub), Framer Motion animations can get stuck
    // at their initial state (opacity: 0). This forces a clean reload to reliably
    // revive the component tree and replay the entrance animations.
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}
