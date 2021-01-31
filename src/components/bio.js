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
import Socials from "./socials/socials"

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
        }}
      >
        <div>
          {author} is a Senior Software Engineer at{" "}
          <a href="https://klarna.com">Klarna</a> and a{" "}
          <a href={social.gdeProfile}>Google Developers Expert</a> in Angular &
          Web Technologies. He teaches different technologies and builds quality
          software to help make the world a better place.
        </div>
        <div style={{ marginTop: "10px" }}>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Bio
