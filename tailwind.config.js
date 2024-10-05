/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dm-color": "#252128"
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

