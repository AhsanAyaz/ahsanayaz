/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile_pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            facebook
            github
            linkedin
            youtube
            gdeProfile
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div
        style={{
          flex: 1,
        }}>
        Personal blog of <strong>{author}</strong>.
        {` `}
        <div>
          <a href={social.gdeProfile}>Google Developers Expert</a> in Angular & Web Technologies.
          {` `}
          <i>
            <p>
              <a href={`https://twitter.com/${social.twitter}`}>
                Twitter
              </a>, {` `}
              <a href={`https://facebook.com/${social.facebook}`}>
                Facebook
              </a>, {` `}
              <a href={`https://github.com/${social.github}`}>
                Github
              </a>, {` `}
              <a href={`https://linkedin.com/${social.linkedin}`}>
                LinkedIn
              </a>, {` `}
              <a href={`https://youtube.com/channel/${social.youtube}`}>
                YouTube
              </a>
            </p>
          </i>
        </div>
      </div>
    </div>
  )
}

export default Bio
