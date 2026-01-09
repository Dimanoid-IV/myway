/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#050505',
          card: '#111111',
          accent: '#7c3aed',
          glow: '#a78bfa',
        }
      },
      backgroundImage: {
        'stars': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }
    },
  },
  plugins: [],
}
