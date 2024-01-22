/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      rubik: ["'Rubik Doodle Shadow', system-ui"],
      Tourney: ["'Tourney', sans-serif"],
      jos: ["'Josefin Sans', sans-serif"],
      rob: ["'Roboto', sans-serif"],
      ubuntu: ["'Ubuntu', sans-serif"],
      mon: ["'Monoton', sans-serif;"],
    },
  },
  plugins: [],
}
