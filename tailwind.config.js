/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
      corpo: ["Zain", "serif"],
      nome: ["MonteCarlo", "serif"],

      },

      colors: { 
      cor1: '#aaaef8 ',
      cor2: '#646AD9',
      cor3: '#573aa8',
      cor4: '#a8a8d9'
    
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    }
    
  },
  plugins: [],
}