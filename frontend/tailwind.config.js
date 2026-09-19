/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF5',
          100: '#FFF6EA',
          200: '#FBEAD0',
          300: '#F5D5A8',
        },
        brand: {
          50: '#FFF1ED',
          100: '#FFE0D6',
          200: '#FFC2B0',
          300: '#FF9B7A',
          400: '#FF7449',
          500: '#F2541B',
          600: '#D43E0E',
          700: '#A82E0A',
          800: '#7B2108',
          900: '#4F1505',
        },
        gold: {
          400: '#E8B84B',
          500: '#D4A017',
          600: '#B5830E',
        },
        charcoal: {
          700: '#3A2E2A',
          800: '#2A2220',
          900: '#1A1513',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
};
