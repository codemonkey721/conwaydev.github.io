module.exports = {
  content: [
    './_includes/*.{html,js}',
    './_layouts/*.{html,js}',
    './_posts/*.{html,md}',
    './index.html',
    './uses.markdown',
  ],
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
}
