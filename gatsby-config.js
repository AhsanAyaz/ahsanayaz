module.exports = {
  siteMetadata: {
    title: `ahsan.dev`,
    author: `Muhammad Ahsan Ayaz`,
    description: `This is a place where Muhammad Ahsan Ayaz shares code and examples. Ahsan Ayaz is a Google Developers Expert in Angular and Web Technologies.`,
    siteUrl: `https://ahsanayaz.com/`,
    social: {
      twitter: `ahsan_ayz`,
      github: `ahsanayaz`,
      linkedin: `in/ahsanayaz`,
      youtube: 'UCAys-Lg76QcRNGc0dOr_bXA'
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
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ahsanayaz-com`
      }
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
            resolve: `gatsby-remark-social-cards`,
            options: {
              meta: {
                parts: [
                  "- ",
                  { field: "author" },
                  " » ",
                  { field: "date", format: "mmmm dS" },
                ],
              }
            }
          },
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              colorTheme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',   // Additional class put on 'pre' tag
              injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],         // Extensions to download from the marketplace to provide more languages and themes
              languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                content,              //   - the string content of the line
                index,                //   - the zero-based index of the line within the code fence
                language,             //   - the language specified for the code fence
                codeFenceOptions      //   - any options set on the code fence alongside the language (more on this later)
              }) => '',
              logLevel: 'error'       // Set to 'warn' to debug if something looks wrong
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ahsan.dev`,
        short_name: `ahsan.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007acc`,
        display: `minimal-ui`,
        icon: `content/assets/site_icon.png`,
        gcm_sender_id: "716764804082"
      },
    },
    {
      resolve: 'gatsby-plugin-sw',
      options: {
        swPath: 'src/utils/app-service-worker.js',
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
        publisherId: "ca-pub-2995943378218316"
      },
    },
    `gatsby-plugin-zopfli`,
    `gatsby-plugin-advanced-sitemap`,
  ],
}
