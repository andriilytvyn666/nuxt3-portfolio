/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
    },
    colors: {
      dark: {
        DEFAULT: "#161616",
        hovered: "#212121",
        clicked: "#1D1D1D"
      },
      light: {
        DEFAULT: "#DEDEDE",
        hovered: "#A9A9A9",
        clicked: "#7E7E7E",
        alt: "#A9A9A9",
      },
      card: {
        DEFAULT: "#323232",
        hovered: "#484848",
      },
      imagesource: {
        DEFAULT: "rgba(0, 0, 0, 0.7)",
        insivible: "rgba(0, 0, 0, 0)"
      }
    },
    extend: {},
  },
  plugins: [],
}
