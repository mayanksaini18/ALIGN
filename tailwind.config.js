import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'align-gold': '#FFC300',
        'deep-panel': '#0A0A0A',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake", "night"],
  },
}
