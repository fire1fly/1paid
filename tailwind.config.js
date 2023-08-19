module.exports = {
  content: ["./src/**/*.{pug,html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': {'max': '1600px'},
        '2xl': {'max': '1536px'},
        'xl': {'max': '1440px'},
        '3lg': {'max': '1367px'},
        '2lg': {'max': '1280px'},
        'lg': {'max': '1200px'},
        '3md': {'max': '1024px'},
        '2md': {'max': '991px'},
        'md': {'max': '768px'},
        '3sm': {'max': '640px'},
        '2sm': {'max': '520px'},
        'sm': {'max': '420px'},
      },
      spacing: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [],
}