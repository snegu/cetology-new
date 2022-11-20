module.exports = {
  siteMetadata: {
    title: `Herman Melville\'s Cetology`,
    description: `Herman Melville\'s taxonomy of whales, adapted from the "Cetology" chapter of Moby Dick`,
    author: `Sarah Negugogor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
