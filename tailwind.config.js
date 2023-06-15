/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'Proxima-Nova-Light':['Proxima-Nova-Light'],
        'Proxima-Nova-Xbold':['Proxima-Nova-Xbold'],
      },
      colors:{
        'gradStart':'#f9e027',
        'gradEnd':'#39fb37'
      },
      backgroundImage: theme => ({
        'FECHome' : "url('/src/assets/images/home/FEC.jpeg')",
        'FoodHome' : "url('/src/assets/images/home/FOOD.jpg')",
      })
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1600px',
    }
  },
  plugins: [
    
  ],
}

