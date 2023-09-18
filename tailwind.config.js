/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '920px',
      xl: '1217px'
    },
    colors: {
      // 'turquoise': '#2DCFC5',
      // 'nav-normal': '#4d4d4d',
      // 'nav-hover': '#2E343F',
      // 'top-gradient': '#2DCFC5',
      // 'bottom-gradient': '#C0F0ED',
      'light-black': '#2F2F2F',
      'black': '#212121',
      'red': '#f33142',
      'white': '#ffffff',
      'grey-black': '#2E343F',
      'pink': '#FF2A7F',
      'txt-black': '#191919',
    },
    extend: {
      fontFamily: {
        rocksalt: "'Rock Salt', cursive",
        sharetechmono: "'Share Tech Mono', monospace",
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}