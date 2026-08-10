import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config}*/

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#111317",
          surface: "#1e2024",
          surfaceHighlight: "#333539",
          primary: "#00e5ff",
          secondary: "#81dc68",
          text: "#e2e2e8",
          textMuted: "#bac9cc",
          border: "#3b494c",
        },
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [typography],
};
