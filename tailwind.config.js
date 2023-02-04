/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'turquoise': '#2DCFC5',
      'nav-normal': '#4d4d4d',
      'nav-selected': '#212121',
      'nav-hover': '#2E343F',
      'topline': '#2F2F2F',
      'top-gradient': '#2DCFC5',
      'bottom-gradient': '#C0F0ED',
      'white': '#ffffff',
      'black': '#191919',
      'grey': '#dddddd',
      'complement': '#CF2D37'
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