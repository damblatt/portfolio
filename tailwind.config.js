/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'turquoise': '#2DCFC5',
      'nav-selected': '#C0F0ED',
      'nav-hover': '#28BAB1',
      'topline': '#2F2F2F',
      'top-gradient': '#2DCFC5',
      'bottom-gradient': '#C0F0ED',
      'white': '#ffffff',
      'black': '#191919',
      'complement': '#CF2D37'
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