module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-uncss')({
      html: ['_site/**/*.html'],
    })
  ]
};
