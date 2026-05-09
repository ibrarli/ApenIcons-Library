/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./website/src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",      
  ],
  theme: {
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}