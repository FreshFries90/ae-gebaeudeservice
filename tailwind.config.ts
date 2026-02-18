import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        "primary-dark": "#107a36",
        "primary-accent": "#22c55e",
        "background-light": "#f6f8f7",
        "background-dark": "#0b1220",
        "surface-light": "#ffffff",
        "surface-dark": "#111827",
        "text-main": "#0b1220",
        "text-muted": "#55605a",
      },
      fontFamily: {
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      backgroundImage: {
        "diagonal-stripes":
          "linear-gradient(135deg, #16a34a 25%, #107a36 25%, #107a36 50%, #16a34a 50%, #16a34a 75%, #107a36 75%, #107a36 100%)",
      },
      animation: {
        glow: "glow 2s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(22, 163, 74, 0.4)" },
          "50%": { boxShadow: "0 0 25px rgba(22, 163, 74, 0.8)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};

export default config;
