module.exports = {
  content: ["./src/**/*.{pug,html,js}"],
  theme: {
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
    extend: {
      spacing: {
        '15': '3.75rem'
      },
      fontFamily: {
        "primary-bold": ['TTNorms Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        "primary-med": ['TTNorms Medium', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        "secondary-bold": ['Acrom Bold', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
        "secondary-med": ['Acrom Medium', 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'],
      }
    },
  },
  plugins: [],
}