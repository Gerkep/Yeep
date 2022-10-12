/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'background': "url('../public/img/background.png')",
      'backgroundMobile': "url('../public/img/background-mobile.png')",
    },
  },
  plugins: [],
}