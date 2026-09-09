import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1360px" } },
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          surface: "rgb(var(--c-ink-surface) / <alpha-value>)",
          raised: "rgb(var(--c-ink-raised) / <alpha-value>)",
          line: "rgb(var(--c-ink-line) / <alpha-value>)",
        },
        signal: {
          DEFAULT: "rgb(var(--c-signal) / <alpha-value>)",
          light: "rgb(var(--c-signal-light) / <alpha-value>)",
          dim: "rgb(var(--c-signal-dim) / <alpha-value>)",
        },
        teal: {
          DEFAULT: "rgb(var(--c-teal) / <alpha-value>)",
          light: "rgb(var(--c-teal-light) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--c-paper) / <alpha-value>)",
          pure: "rgb(var(--c-paper-pure) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: { widest2: "0.22em" },
      backgroundImage: {
        "signal-gradient": "linear-gradient(135deg, #4C7EFF 0%, #17D6B5 100%)",
        "ink-gradient": "linear-gradient(180deg, rgba(10,13,20,0) 0%, rgba(10,13,20,0.75) 65%, rgba(10,13,20,0.98) 100%)",
        "grid-fade": "radial-gradient(ellipse at top, rgba(76,126,255,0.14) 0%, rgba(10,13,20,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards" },
      transitionTimingFunction: { luxe: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
