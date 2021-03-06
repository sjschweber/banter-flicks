module.exports = {
  siteMetadata: {
    title: `Banter Flicks`,
    siteUrl: `https://www.example.com`,
    menuLinks:[
      {
         name:'Home',
         link:'/'
      },
      {
          name:'Action',
          link:'/action'
      },
      {
        name:'Animation',
        link: '/animation'
      },
      {
        name: 'Comedy',
        link: '/comedy'
      },
      {
        name: 'Drama',
        link: '/drama'
      },
      {
        name: 'Thriller',
        link: '/thriller'
      },
      {
        name: 'Sci/Fi',
        link: '/sci-fi'
      }
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
