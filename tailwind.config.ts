import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1528",
        navy: "#13233D",
        blue: "#2C4975",
        brand: "#2C4975",
        sky: "#6894C7",
        gold: "#EAB308",
        mint: "#EAB308",
        cloud: "#F8FAFC"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(11, 21, 40, 0.08)",
        glow: "0 20px 50px rgba(44, 73, 117, 0.28)",
        gold: "0 14px 40px rgba(234, 179, 8, 0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
export default config;
