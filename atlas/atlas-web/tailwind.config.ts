import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        atlas: {
          primary: "#0F172A",
          accent: "#2563EB",
          background: "#F8F8F5",
          card: "#FFFFFF",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px rgba(15, 23, 42, 0.06)",
        card: "0 4px 24px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
