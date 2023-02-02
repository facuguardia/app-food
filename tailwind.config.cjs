/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     fontFamily: {
      'lato' : ['Lato'],
      'muli' : ['Mulish']
     },
    extend: {
      colors: {
        background: "#1F1D28",
        primary: "#262837",
        secondary: "#ec7c6a",
      },
      backgroundImage: {
        "img-background":
          "url('/src/assets/Imagen de WhatsApp 2023-01-19 a las 20.37.05.jpg')",
        "img-1":
        "url('/src/assets/pngegg.png')"
      },
      spacing: {
        '90%':'90%',
        '89%':'89.5%',
      }
    },
    plugins: [],
  },
};
