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
      },
      backgroundImage: {
        calstatela: 'linear-gradient(90deg, #eab308, #f8fafc, #eab308, #f8fafc)',
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
