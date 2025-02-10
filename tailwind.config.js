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

      daniAzul: '#021d46',
      daniRose:'#ebb3a9',
      daniVermelho: '#f2545b',
      cor1: '#aaaef8 ',
      cor2: '#8b7bfa',
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