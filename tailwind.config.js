
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#FDF8F3',
          100: '#F5EDE4',
          200: '#E8C4A0',
          300: '#D4A574',
          400: '#C9A66B',
          500: '#B89055',
          900: '#5D4E37',
        },
        sage: {
          50: '#F4F7F2',
          100: '#EBF0E8',
          200: '#D6E0D2',
          300: '#B5C4A8',
          400: '#9CAF88',
          500: '#7A8F66',
        },
        cream: {
          50: '#FDF8F3',
          100: '#FAF5EF',
          200: '#F5EDE4',
        },
        terracotta: {
          DEFAULT: '#C17F59',
          light: '#D69E7D',
          dark: '#A06240',
        },
        brown: {
          DEFAULT: '#5D4E37',
          light: '#6B5B4A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Quicksand"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
