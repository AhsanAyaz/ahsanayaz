import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import SocialBadges from "../components/SocialBadges/SocialBadges"

const SocialsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Muhammad Ahsan Ayaz - Socials" />
      <Bio />
      <h4>
        Socials{" "}
        <span role="img" aria-label="point down emoji">
          👇
        </span>
      </h4>
      <SocialBadges />
    </Layout>
  )
}

export default SocialsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
