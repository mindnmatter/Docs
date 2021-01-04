const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  distDir: 'build',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})
