"use client";

import { useTheme } from "@/lib/context/ThemeContext";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const gradient =
    theme === "dark"
      ? "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%), linear-gradient(to bottom right, #0a0a0a, #18181b, #0a0a0a)"
      : "radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, transparent 50%), linear-gradient(to bottom right, #fafafa, #ffffff, #fafafa)";

  return (
    <div
      className="min-h-screen text-on-surface"
      style={{ backgroundImage: gradient }}
    >
      {children}
    </div>
  );
}

export default ThemeWrapper;
