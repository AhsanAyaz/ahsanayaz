import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeTags from "../components/HomeTags/HomeTags"
import BlogPostItem from "../components/BlogPostItem/BlogPostItem"
import { ShareBlockStandard } from "react-custom-share"
import { HOME_SHARE_BUTTONS_CONTENT } from "../constants/home-share-buttons"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <HomeTags />
      {posts.map(({ node: post }) => <BlogPostItem post={post} key={post.fields.slug}/>)}
      <ShareBlockStandard {...HOME_SHARE_BUTTONS_CONTENT} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
