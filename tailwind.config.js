/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#000000',
          light: '#0A192F',
        },
        accent: {
          rebel: '#FF1616',
          jedi: '#4DABF7',
        },
      },
      animation: {
        'scroll-down': 'scroll-down 2s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'scan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
      backgroundImage: {
        'star-pattern': 'radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px)',
      },
    },
  },
  plugins: [],
}