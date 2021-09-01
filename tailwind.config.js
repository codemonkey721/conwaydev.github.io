module.exports = {
  theme: {
    maxWidth: {
      '7xl': '92rem',
    },
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
