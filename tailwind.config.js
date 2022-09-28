/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pfc: "url('/src/assets/pfc.png')",
        navlogo: "url('/src/assets/logo.png')",
        linkedin: "url('/src/assets/li.png')",
        fb: "url('/src/assets/fb.png')",
        ig: "url('/src/assets/ig.png')",
        wa: "url('/src/assets/wa.png')",
        email: "url('/src/assets/email.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },

      // colors: {
      //   'test': 'linear-gradient(red, yellow)',

      // }
    },
  },
  plugins: [],
};
