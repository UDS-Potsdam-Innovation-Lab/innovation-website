/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'blue': {
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 