module.exports = {
  content: [
    './public/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Trebuchet MS", "Palatino", "serif"],
      },
      container: {
        center: true,
        padding: {
          default: '0',  // less space when printing
          print: '0',
          sm: '3rem',
        },
        margin: {
          default: '0',
          print: '0',
          sm: '3rem',
        }
      },
      screens: {
        print: {raw: 'print'}
      }
    },
  },
  plugins: [],
}
