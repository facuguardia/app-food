/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-background":
          "url('/src/assets/Imagen de WhatsApp 2023-01-19 a las 20.37.05.jpg')",
        "img-1":
        "url('/src/assets/76-765457_back-default-home-homepage-icon-home-icon-png-orange.png')"
      },
      spacing: {
        '90%':'90%',
        '89%':'89.5%',
      }
    },
    plugins: [],
  },
};
