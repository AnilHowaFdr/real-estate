/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["sans-serif", "Roboto"],
    },
    extend: {
      colors: {
        brand: "#00B98E",
        primary: "#FF6922",
        light: "#EFFDF5",
        dark: "#0E2E50",
        gray: "#666565",
      },
    },
  },
  plugins: [],
};
