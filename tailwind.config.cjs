/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1F1D28",
        primary: "#262837",
        secondary: "#ec7c6a",
      },
    },
    plugins: [],
  },
};
