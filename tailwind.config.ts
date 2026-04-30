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
          cyan: "#00d4ff",
          ink: "#090714",
          mist: "#8a84ad",
        },
      },
    },
  },
  plugins: [],
};

export default config;
