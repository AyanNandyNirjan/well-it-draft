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
        ink: "#07111F",
        navy: "#0A1E35",
        blue: "#1677FF",
        sky: "#63C5FF",
        mint: "#6FE8D2",
        cloud: "#F5F8FC"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(7, 17, 31, 0.10)",
        glow: "0 20px 60px rgba(22, 119, 255, 0.22)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
export default config;
