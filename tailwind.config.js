/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      colors:{
      lightGreen:'#8ce404',
      lightBlue:'#24acd4',
      darkGreen:'#145464',
      },
      fontFamily:{
        raleway:['Raleway','sans-serif']
      },
    },
    screens:{
      xs:'480px',
      ss:'620px',
      sm:'768px',
      md:'1060px',
      lg:'1200px',
      xl:'1950px',
    }
  },
  plugins: [ require('tailwind-scrollbar')({ nocompatible: true }) ],
};