/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Barlow: ['Barlow', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
