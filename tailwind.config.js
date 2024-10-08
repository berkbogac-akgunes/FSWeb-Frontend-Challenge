/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '88': '21.5rem',
        "work-together": "42rem",
        "mail": "18.5rem",
        "footer": "30rem",
      },
      colors: {
        "dm-color": "#252128"
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

