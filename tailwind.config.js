/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      custom:["Merriweather", 'serif'],
      inter:["Inter", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}