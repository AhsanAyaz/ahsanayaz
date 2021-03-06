/**
 * Socials component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa"
import "./socials.css"

const Socials = ({ size = 20 }) => {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            facebook
            github
            linkedin
            youtube
            instagram
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  const socials = [
    {
      link: `https://twitter.com/${social.twitter}`,
      class: "fa-twitter",
      component: FaTwitter,
    },
    {
      link: `https://facebook.com/${social.facebook}`,
      class: "fa-facebook",
      component: FaFacebook,
    },
    {
      link: `https://instagram.com/${social.instagram}`,
      class: "fa-instagram",
      component: FaInstagram,
    },
    {
      link: `https://github.com/${social.github}`,
      class: "fa-github",
      component: FaGithub,
    },
    {
      link: `https://linkedin.com/${social.linkedin}`,
      class: "fa-linkedin",
      component: FaLinkedin,
    },
    {
      link: `https://youtube.com/channel/${social.youtube}`,
      class: "fa-youtube",
      component: FaYoutube,
    },
  ]
  const openSocial = social => {
    window.open(social.link, "_blank")
  }
  return (
    <div className="socials">
      {socials.map(social => (
        <div
          key={social.link}
          className={social.class}
          onClick={() => openSocial(social)}
        >
          <social.component size={size} />
        </div>
      ))}
      {/* <a
        className="fa-twitter"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/${social.twitter}`}
      >
        <FaTwitter size={size} />
      </a>
      <a
        className="fa-facebook"
        href={`https://facebook.com/${social.facebook}`}
      >
        <FaFacebook size={size} />
      </a>
      <a
        className="fa-instagram"
        href={`https://instagram.com/${social.instagram}`}
      >
        <FaInstagram size={size} />
      </a>
      <a className="fa-github" href={`https://github.com/${social.github}`}>
        <FaGithub size={size} />
      </a>
      <a
        className="fa-linkedin"
        href={`https://linkedin.com/${social.linkedin}`}
      >
        <FaLinkedin size={size} />
      </a>
      <a
        className="fa-youtube"
        href={`https://youtube.com/channel/${social.youtube}`}
      >
        <FaYoutube size={size} />
      </a> */}
    </div>
  )
}

export default Socials
