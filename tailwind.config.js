/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); 

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sx': '300px',  // Custom small screen
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors:{
        lightgoldbg : "rgb(184 142 47)",
        graytext : "#9F9F9F",
        textblack : '#000000',
        bgpink : "#F9F1E7"
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
  })
  ],
}