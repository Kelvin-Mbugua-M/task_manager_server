/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}","./src/*.jsx"],
  theme: {
    extend: {
      widthCustom:'calc(100vw-250px)'
    },
  },
  plugins: [],
}

