/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        galactic: {
          gold: '#C9A961',
          'gold-dark': '#b08f51',
          'gold-light': '#d9bc7a',
          navy: '#2C3E50',
          'navy-light': '#3E5266',
          cream: '#fefdfb',
          'cream-dark': '#f5f1e8',
          beige: '#e8dcc8',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}