/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'min-h-[48px]',
    'min-h-[160px]',
    'whitespace-pre-line',
    'border-orange-300',
    'bg-orange-50',
    'text-orange-500',
    'border-blue-300',
    'bg-blue-50',
    'text-blue-500',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'blue': {
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        breathing: 'breathing 2s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
