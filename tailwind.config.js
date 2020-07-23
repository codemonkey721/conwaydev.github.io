module.exports = {
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.900'),
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
