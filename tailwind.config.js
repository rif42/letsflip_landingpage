/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navlogo" : "url('/src/assets/logo.png')",
        "phone-header" : "url('/public/assets/phone-header.png')",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
