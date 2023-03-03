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
        'cyan-linear' : '',
      },
      backgroundColor: {
        'primary' : '#0A233F',
      }
    },
  },
  plugins: [],
}
