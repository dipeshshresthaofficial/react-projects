/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#149742",
        "primary-dark": "#0c692d",
        "secondary": "#2e2e2e",
        "secondary-dark": "#040306"
      }
    },
  },
  plugins: [],
}

