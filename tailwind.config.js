/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#172B4D",
        active: "#D6F4FF",
      },
    },
  },
  plugins: [],
};
