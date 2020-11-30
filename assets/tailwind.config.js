module.exports = {
  purge: [,
    '../lib/my_app_web/live/**/*.ex',
    '../lib/my_app_web/live/**/*.leex',
    '../lib/my_app_web/templates/**/*.eex',
    '../lib/my_app_web/templates/**/*.leex',
    '../lib/my_app_web/views/**/*.ex',
    './js/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
