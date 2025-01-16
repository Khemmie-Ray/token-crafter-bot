/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#203047',
        'skyblue': '#9ECCED',
        'light': '#E0ECF6'
      },
      fontFamily: {
        'SourceSansPro': ['Source Code Pro', 'serif'],
        'Roboto': ['Roboto', 'serif'],
      },
      boxShadow: {
        '3xl': '25px 25px 60px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}