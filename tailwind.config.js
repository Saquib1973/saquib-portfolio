/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-45%)" },
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        indi: ["Indie Flower", "cursive"],
      },
      colors: {
        orange: "#FCA311",
        dark: "#000000",
        darkBlue: "#14213D",
        bgMain: "#E5E5E5",
        clear: "#fefae0",
        darkOrange: "#fb8500",
      },
    },
  },
};
