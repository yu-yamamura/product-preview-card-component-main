/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    colors: {
      darkCyan: 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      veryDarkCyan: 'hsl(158, 36%, 17%)',
      darkGrayishBlue: 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      fraunces: ['Fraunces', 'sans-serif'],
    },
    letterSpacing: {
      widest: '.15em',
    },
    maxWidth: {
      sm: '375px',
      xl: '576px',
    },
  },
  plugins: [],
};
