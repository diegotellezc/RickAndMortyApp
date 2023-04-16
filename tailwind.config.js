/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "rgba(142, 255, 139, 0.5)",
        "dark-green": "#8EFF8B",
        "light-gray": "#AEAEAE"
      },
      fontFamily: {
        sans: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

