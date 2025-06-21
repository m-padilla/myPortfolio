/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#282c34',
        secondary: "#141414",
        grey: "#1f2937",
        navy_blue:"#19376d",
      },
      backgroundImage: {
        calstatela: 'linear-gradient(90deg,  #f8fafc, #7928ca, #f8fafc, #7928ca, #f8fafc)',
        header: 'linear-gradient(90deg,  #0284c7, #0ea5e9, #38bdf8, #7dd3fc)'
      },
      backgroundSize:{
        400: "400%"
      },
      animation: {
        gradient: 'gradient 6s ease infinite',
      },
      keyframes: {
        gradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "100%": {backgroundPosition: "100% 50%"},
        },
      },
  },
  },
  plugins: [],
}

// #eab308 Gold
// #7928ca, Navy blue
// #f8fafc white
