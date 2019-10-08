const postcss = require('postcss-uncss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-uncss')({
      html: ['_site/index.html', '_site/blog/**/*.html'],
    }),
    require('cssnano')
  ]
};
