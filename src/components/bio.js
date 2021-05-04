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

const Bio = (showBMAC = false) => {
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
      className="bio"
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="bio__img"
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
          Web Technologies.
        </div>
        <div className="bio-secondary" style={{ marginTop: "10px" }}>
          <div>
            <Socials size={24} />
          </div>
          {showBMAC ? (
            <div>
              <a
                title="Like Ahsan's work? Buy him a coffee"
                className="bmac"
                target="_blank"
                rel="noopener noreferer"
                href="https://www.buymeacoffee.com/muhd.ahsanayaz"
              >
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=muhd.ahsanayaz&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Bio
