const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `ahsanayaz.com`,
    author: `Muhammad Ahsan Ayaz`,
    description: `This is a place where Muhammad Ahsan Ayaz shares code and examples. Ahsan Ayaz is a Google Developers Expert in Angular and Web Technologies.`,
    siteUrl: `https://ahsanayaz.com/`,
    social: {
      twitter: `muhd_ahsanayaz`,
      facebook: `muhd.ahsanayaz`,
      instagram: `muhd.ahsanayaz`,
      github: `ahsanayaz`,
      linkedin: `in/ahsanayaz`,
      youtube: "UCAys-Lg76QcRNGc0dOr_bXA",
      gdeProfile:
        "https://developers.google.com/community/experts/directory/profile/profile-muhammad_ahsan_ayaz",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: path.join(
              __dirname + "/plugins/gatsby-plugin-social-preview"
            ),
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-draft",
      options: {
        nodeType: "Mdx",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ahsanayaz.com`,
        short_name: `ahsanayaz.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5d1ad5`,
        display: `minimal-ui`,
        icon: `content/assets/site_icon.png`,
        gcm_sender_id: "716764804082",
      },
    },
    {
      resolve: "gatsby-plugin-sw",
      options: {
        swPath: "src/utils/app-service-worker.js",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: "ca-pub-2995943378218316",
      },
    },
    `gatsby-plugin-zopfli`,
    `gatsby-plugin-advanced-sitemap`,
  ],
}
