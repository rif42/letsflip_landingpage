/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pfc: "url('/src/assets/pfc.png')",
        bgpartner: "url('/src/assets/bgpartner.png')",
        navlogo: "url('/src/assets/logo.png')",
        linkedin: "url('/src/assets/li.png')",
        fb: "url('/src/assets/fb.png')",
        ig: "url('/src/assets/ig.png')",
        wa: "url('/src/assets/wa.png')",
        email: "url('/src/assets/email.png')",
        ussbg2: "url('/src/assets/ussbg2.jpg')",
        ussbg4: "url('/src/assets/ussbg4.jpg')",
        ussbg5: "url('/src/assets/ussbg5.jpg')",
        g1: "url('/src/assets/group1.jpg')",
        g2: "url('/src/assets/group2.jpg')",
        g3: "url('/src/assets/group3.jpg')",
        g4: "url('/src/assets/group4.jpg')",
        g5: "url('/src/assets/group5.jpg')",
        g6: "url('/src/assets/group6.jpg')",
        g7: "url('/src/assets/group7.jpg')",
        g8: "url('/src/assets/group8.jpg')",
        g9: "url('/src/assets/group9.jpg')",
        qr: "url('/src/assets/qrcode.png')",
        bubblebg: "url('/src/assets/bubblebg.png')",
        bubblebg2: "url('/src/assets/bubblebg2.png')",
        bubblebg3: "url('/src/assets/bubblebg3.png')",
        demobg1: "url('/src/assets/demobg1.png')",
        demobg2: "url('/src/assets/demobg2.png')",
        demobg3: "url('/src/assets/demobg3.png')",
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
