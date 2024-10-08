/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
      },
      cursor:{
        'custom-cursor':'url(/assets/cursor.png), auto',
      }
    }
  },
  daisyui: {
    themes: [
      
      ,"light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",], // Add your preferred themes here
    darkTheme: "lemonade", // Set the default theme for dark mode
  },
  plugins: [require('daisyui'),require("@tailwindcss/typography")],
}

