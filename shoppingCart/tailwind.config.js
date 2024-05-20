/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEF5FF",
        secondary: "#176B87",
      },
      fontFamily: {
        poetsen: "Poetsen One",
      },
    },
  },
  plugins: [],
}
