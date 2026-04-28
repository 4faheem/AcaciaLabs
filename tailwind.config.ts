import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#1A1040",
          electric: "#6C5CE7",
          teal: "#00CEC9",
          offwhite: "#F8F7FF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
