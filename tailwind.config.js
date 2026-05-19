/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF7F0',
          gold: '#D97706',
          darkgold: '#78350F',
          green: '#065F46',
          lightgreen: '#D1FAE5',
          dark: '#1C1917',
          gray: '#44403C'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    }
  },
  plugins: []
}
