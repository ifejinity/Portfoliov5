/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        "about" : '1fr 2fr',
        "timeline" : 'auto auto 1fr',
      },
      fontFamily:{
        "poppins" : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

