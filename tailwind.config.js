/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'turquoise': '#2DCFC5',
      'light-turquoise': '#C0F0ED',
      'dark-turquoise': '#28BAB1',
      'dark-turquoise-2': '#24A79F',
      'dark-turquoise-3': '#20948D',
      'white': '#ffffff',
      'black': '#191919',
    },
    extend: {
      fontFamily: {
        rocksalt: "'Rock Salt', cursive",
        sharetechmono: "'Share Tech Mono', monospace",
      }
    },
  },
  plugins: [],
}