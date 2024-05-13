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
        primary: "#5FB9B0",
        secondary: "#B292FF",
        tertiary: "#111111",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      animation: {
        scale: "scale 0.5s ease-out",
      },
      keyframes: {
        scale: {
          "100%": {
            transform: " translate(-50%, -50%) scale(3)",
            opacity: 0,
          },
        },
      },
      boxShadow: {
        btnShadow: "10px 10px 0 0  #b292ff",
      },
    },
  },
  plugins: [],
};
