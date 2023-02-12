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
      backgroundImage: {
        "img-background": "url('/src/assets/bg-landing.jpg')",
      },
      spacing: {
        "90%": "65%",
        "89%": "64.9%",
      },
    },
    plugins: [],
  },
};
