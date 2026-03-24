/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chrome: {
          black: "#0a0a0a",
          darkgray: "#141414",
          gray: "#1e1e1e",
          silver: "#c0c0c0",
          lightsilver: "#d8d8d8",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Bebas Neue'", "cursive"],
      },
      backgroundImage: {
        "chrome-gradient":
          "linear-gradient(135deg, #c0c0c0 0%, #ffffff 40%, #a8a8a8 60%, #e8e8e8 80%, #c0c0c0 100%)",
        "chrome-dark":
          "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 50%, #141414 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(192,192,192,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};