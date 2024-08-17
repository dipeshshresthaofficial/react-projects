/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js,jsx}"
  ],
  darkMode: 'class', //enable darkmode based on specific CSS class rather than user's system preferences
  theme: {
    extend: {
      colors:{
        "primary": "#149742",
        "primary-dark": "#0c692d",
        "secondary": "#2e2e2e",
        "secondary-dark": "#040306",
        "yellow": "rgb(253 230 138)",
        "gray": "rgb(228 228 231)",
      }
    },
  },
  plugins: [],
}

