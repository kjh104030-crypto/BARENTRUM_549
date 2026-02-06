/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          yellow: '#FCEE0A',
          blue: '#00F0FF',
          red: '#FF003C',
          black: '#0a0a0a',
          dark: '#121212',
          gray: '#2a2a2a',
        }
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'Noto Sans KR', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      animation: {
        'glitch-1': 'glitch-anim-1 2.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-anim-2 3s infinite linear alternate-reverse',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'glitch-anim-1': {
          '0%': { clipPath: 'inset(20% 0 80% 0)' },
          '20%': { clipPath: 'inset(60% 0 10% 0)' },
          '40%': { clipPath: 'inset(40% 0 50% 0)' },
          '60%': { clipPath: 'inset(80% 0 5% 0)' },
          '80%': { clipPath: 'inset(10% 0 70% 0)' },
          '100%': { clipPath: 'inset(30% 0 20% 0)' },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'inset(10% 0 60% 0)' },
          '20%': { clipPath: 'inset(30% 0 10% 0)' },
          '40%': { clipPath: 'inset(80% 0 5% 0)' },
          '60%': { clipPath: 'inset(10% 0 85% 0)' },
          '80%': { clipPath: 'inset(40% 0 30% 0)' },
          '100%': { clipPath: 'inset(70% 0 5% 0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    }
  },
  plugins: [],
}