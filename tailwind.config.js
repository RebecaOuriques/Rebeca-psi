/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      colors: { 

      daniAzul: '#021d46',
      daniRose:'#ebb3a9',
      daniVermelho: '#f2545b',
      cor1: '#8e5ce6 ',
      cor2: '#7734e7',
      cor3: '#2c016d',
      cor4: '#cba1ff '
    
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