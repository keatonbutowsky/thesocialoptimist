import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-cherub": "#FAB6C4",
        "pink-cherub-soft": "#FDD8DF",
        "cloud-cotton": "#FFFDE9",
        "cloud-cotton-deep": "#F6F2D9",
        "dark-brown": "#2A2422",
        "dark-brown-soft": "#5A4E49",
      },
      fontFamily: {
        display: ["var(--font-alice)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.08em",
        widest2: "0.18em",
      },
      maxWidth: {
        prose2: "68ch",
      },
      borderRadius: {
        badge: "9999px",
      },
      boxShadow: {
        stamp: "0 1px 0 rgba(42,36,34,0.04), 0 30px 60px -25px rgba(42,36,34,0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
