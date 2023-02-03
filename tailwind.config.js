/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'turquoise': '#2DCFC5',
      'nav-selected': '#C0F0ED',
      'nav-hover': '#3CD3C9',
      'topline': '#2F2F2F',
      'background': '#7AE1DA',
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