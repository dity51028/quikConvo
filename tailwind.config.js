/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
      backdropSaturate: ['responsive', 'hover', 'focus'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}