/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        barbiePink: '#FF69B4',
        hotPink: '#E0218A',
        bubblegum: '#FFC1E3',
        blush: '#FFE3F4',
        glitter: '#FFF8FF',
        candy: '#FF8CC8',
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(255, 255, 255, 0.45), 0 24px 65px rgba(224, 33, 138, 0.32)',
      },
      fontFamily: {
        display: ['Lobster', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

