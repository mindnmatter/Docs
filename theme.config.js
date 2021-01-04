// theme.config.js
export default {
  github: 'https://github.com/thirmprotocol', // link of the project repo
  siteGithub: 'https://github.com/thirmprotocol/DOCS', // link of the docs repo path
  titleSuffix: ' – THIRM',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, 
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 ©',
  footerEditOnGitHubLink: true,
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">
        Scalable Dollor Protocol
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        DeFi compatible algorithmic stablecoin
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="THIRM PROTOCOL - Documentation"
      />
      <meta
        name="og:description"
        content="THIRM PROTOCOL - Documentation"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="THIRM PROTOCOL - Documentation" />
      <meta
        name="apple-mobile-web-app-title"
        content="THIRM PROTOCOL - Documentation"
      />
    </React.Fragment>
  ),
  i18n: [
    { locale: 'en', text: 'English' }
  ],
}
