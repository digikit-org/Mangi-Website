/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#c5a059",
          "gold-hover": "#b38f47",
          tan: "#caa368",
          dark: "#141413",
          darker: "#0d0d0c",
          surface: "#faf8f5",
          "surface-alt": "#f4efe6",
          border: "#e7e0d4",
          muted: "#78716c",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
