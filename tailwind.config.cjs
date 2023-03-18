/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textWhite' : '#ffffff',
        'lightWhite' : 'rgba(255,255,255,0.76)',
        'cyan' : '#00D8FF',
        'darkerCyan' : '#0099fa',
        'darkblue': '$0A233F',
        'cyan-linear' : '',
      },
      backgroundColor: {
        'primary' : '#0A233F',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)'}
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    },
  },
  plugins: [],
}
