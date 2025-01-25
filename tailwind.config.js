/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        enacblk: "#282828",
      },
    },
    fontFamily: {
      moderniz: ["MODERNIZ"],
      montserrat: ["Montserrat"],
      lemon: ["Lemon/Milk"],
    },
    keyframes: {
      ticker: {
        from: {
          left: "translateX(0%)",
        },
        to: {
          transform: "translateX(-100%)",
        },
      },
    },
    animation: {
      tickerSlide: "ticker 30s linear infinite",
    },
  },
  plugins: [],
};
