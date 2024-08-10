/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'custom-green':'#226f54',
        'custom-red':'#da2c38'
      }
    },
  },
  plugins: [],
}

