/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        enacblk: "#282828",
        // annotsavGreen: "#3CB043",
        annotsavGreen: "#1B4D3E",
        // clairBlue: "#6CB4EE",
        clairBlue: "#002D62",
        // satvaBrown: "#6F4E37"
        satvaBrown: "#673400",
        enactusYellow: "#ffbf10"
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
