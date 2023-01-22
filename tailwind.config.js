/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    colors: {
      light: {
        DEFAULT: '#FFFFFF',
        unfocused: '#888888',
      },
      dark: {
        DEFAULT: '#000000',
        hover: '#101010',
        click: '#222222',
        border: '#333333',
        header: 'rgba(0, 0, 0, 0.85)',
        footer: '#111111',
      },
    },
    extend: {
      backgroundImage: {
        'grad-red': 'linear-gradient(95.41deg, #882B2B 0%, #992626 100%)',
        'grad-red-hover': 'linear-gradient(95.41deg, #934040 0%, #A33B3B 100%)',
        'grad-red-click': 'linear-gradient(95.41deg, #511919 0%, #5B1616 100%)',
        'grad-blue': 'linear-gradient(95.41deg, #2B4B88 0%, #266299 100%)',
        'grad-blue-hover':
          'linear-gradient(95.41deg, #405D93 0%, #3B71A3 100%)',
        'grad-blue-click':
          'linear-gradient(95.41deg, #192D51 0%, #163A5B 100%)',
      },
    },
  },
  plugins: [],
}
