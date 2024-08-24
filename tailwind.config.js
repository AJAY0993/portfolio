/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-darker": "#0C0C0D",
        "neutral-dark": "#131313",
        "neutral-less-dark": "#272727",
        "neutral-light": "#6F6F6F",
        "neutral-less-light": "#C8C8C8",
        "neutral-lighter": "#e5e5e5",
        primary: "#87D2CB",
        secondary: "#B292FF",
        tertiary: "#111111",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      animation: {
        scale: "scale 0.5s ease-out",
        "bounce-in": "bounce-in 0.6s ease forwards",
        "bounce-out": "bounce-out 0.6s ease forwards",
      },
      keyframes: {
        scale: {
          "100%": {
            transform: " translate(-50%, -50%) scale(3)",
            opacity: 0,
          },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "60%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "bounce-out": {
          "0%": { transform: "scale(1)" },
          "40%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0", transform: "scale(0.5)" },
        },
      },

      boxShadow: {
        btnShadow: "10px 10px 0 0  #b292ff",
      },
    },
  },
  plugins: [],
};
