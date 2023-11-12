/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const siteUrl = `https://huuduc.github.io/`

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Stéphane Nguyen`,
    description: `Minimal portfolio. React.js, Front-end developer, HTML5, CSS3`,
    author: `@huuduc`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stéphane Nguyen`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#232636`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        siteUrl: siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?',
        //     getLanguageFromPath: true
        //   },
        //   {
        //     matchPath: '/:lang?/404',
        //     getLanguageFromPath: true
        //   }
        // ]
      },
    },
  ],
}
