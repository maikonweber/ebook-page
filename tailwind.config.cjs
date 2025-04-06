/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffd700',
        secondary: '#1a0000',
        background: '#000000',
        text: '#ffffff',
        border: '#ffd700',
        hover: '#ffed4a'
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif']
      },
      boxShadow: {
        gold: '0 4px 15px rgba(255, 215, 0, 0.3)'
      }
    }
  },
  plugins: []
}; 