/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ns-bg': '#0E1116',
        'ns-card': '#161B22',
        'ns-accent': '#5B7C99',
        'ns-gold': '#C9A84C',
        'ns-heading': '#F2F4F8',
        'ns-body': '#A1A8B3',
        'ns-success': '#4ADE80',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
