/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        wood: {
          950: "#070605",
          900: "#0B0A08",
          800: "#14110E",
          700: "#1F1A15",
        },
        cream: {
          50: "#FBF6EE",
          100: "#F7F0E6",
          200: "#EFE3D1",
        },
        brass: {
          300: "#E7D0A5",
          400: "#D7B77D",
          500: "#C8A45A",
        },
        pine: {
          600: "#2D5A4E",
          700: "#24483F",
          800: "#1C3A33",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Onest", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        alpine: "0 18px 40px rgba(0,0,0,0.35)",
        alpineSm: "0 10px 24px rgba(0,0,0,0.28)",
      },
      keyframes: {
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        spinSlow: "spinSlow 18s linear infinite",
        spinSlowReverse: "spinSlow 22s linear infinite reverse",
        floatSoft: "floatSoft 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
