/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'turquoise': '#2DCFC5',
      'nav-normal': '#4d4d4d',
      'black': '#212121',
      'light-black': '#2F2F2F',
      'nav-hover': '#2E343F',
      'top-gradient': '#2DCFC5',
      'bottom-gradient': '#C0F0ED',
      'white': '#ffffff',
      'txt-black': '#191919',
      'grey': '#dddddd',
      'red': '#f33142'
    },
    extend: {
      fontFamily: {
        rocksalt: "'Rock Salt', cursive",
        sharetechmono: "'Share Tech Mono', monospace",
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}