console.log({ publishDraft: process.env.NODE_ENV !== 'production' });
module.exports = {
  siteMetadata: {
    title: `Motion Planning`,
    author: `R Sakai`,
    description: `Motion Planning Guide`,
    siteUrl: `https://motion-p.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        publishDraft: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
            },
          },
          //
          //   {
          //     resolve: `gatsby-remark-attr`,
          //   },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          //   `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: '目次',
              include: ['content/**/*.md'],
              mdastUtilTocOptions: {
                maxDepth: 1,
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-118267445-3`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
  ],
};
