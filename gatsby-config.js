const dotenv = require('dotenv');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config({ path: `.env.local` });
dotenv.config({ path: `.env` });


module.exports = {
  siteMetadata: {
    title: `Airgap Networks`,
    description: `Agentless Zero Trust Isolation Platform - The best defense against Cyber-Threats`,
    author: `@airgap`,
    siteUrl: `https://airgap.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-netlify-cms`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `data`,
            path: `${__dirname}/src/content/data`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/src/content/blog`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `events`,
            path: `${__dirname}/src/content/events`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `features`,
            path: `${__dirname}/src/content/features`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `resources`,
            path: `${__dirname}/src/content/resources`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `solutions`,
            path: `${__dirname}/src/content/solutions`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `pages`,
            path: `${__dirname}/src/content/pages`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `jobs`,
            path: `${__dirname}/src/content/jobs`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `textPages`,
            path: `${__dirname}/src/content/textPages`,
        },
    },
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: '@airgapnetworks',
        name: 'MediumFeed',
      },
    },
    `gatsby-transformer-yaml`,
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
            icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        },
    },
    {
        resolve: `gatsby-plugin-sass`,
        options: {
            includePaths: [
                require("path").resolve(__dirname, "node_modules")
            ]
        }
    },
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`./src/layout/Layout.jsx`),
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions: [`.mdx`, `.md`],
            gatsbyRemarkPlugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 960,
                        withWebp: true,
                        ignoreFileExtensions: [],
                    },
                },
                'gatsby-remark-copy-linked-files',
                'gatsby-remark-smartypants',
                'gatsby-remark-external-links',
            ],
        },
    },
    {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        }
    },
  ],
}
