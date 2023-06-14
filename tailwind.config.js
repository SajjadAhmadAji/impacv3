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
  },
  plugins: [
    
  ],
}

