import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import AmazonGearItems from "../components/AmazonGearItem/AmazonGearItems"
import gearMeta from "../../static/images/gear.jpeg"
const GearsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Muhammad Ahsan Ayaz - Gear and Equipment"
        metaImage={gearMeta}
      />
      <Bio />
      <h4>
        Gear and Equipment{" "}
        <span role="img" aria-label="point down emoji">
          👇
        </span>
      </h4>
      <AmazonGearItems />
    </Layout>
  )
}

export default GearsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
