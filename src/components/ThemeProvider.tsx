"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useEffect, useState } from "react";

// Mute the benign React 19 dev warning caused by next-themes injecting a script tag.
// This prevents Next.js 15 from throwing a full-screen red error overlay.
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("Encountered a script tag while rendering React component")) {
      return; // Suppress this specific warning
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} {...props}>
      {children}
    </NextThemesProvider>
  );
}
