/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Un': ['Unbounded', 'cursive'],
        'ox': ['Oxygen','sans-serif']
      }
    },
  },
  plugins: [],
}
