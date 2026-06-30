import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          dark: "#1A1A1A",
          black: "#0D0D0D",
          gray: "#4A4A4A",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
