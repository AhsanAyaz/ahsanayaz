import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ShareBlockStandard } from "react-custom-share"
import { HOME_SHARE_BUTTONS_CONTENT } from "../../constants/home-share-buttons"
import { graphql } from "gatsby"
import BlogPostItem from "../../components/BlogPostItem/BlogPostItem"
import Tag from "../../components/tag/tag"
import { TAG_SIZE } from "../../constants/tag-size"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  const siteTitle = data.site.siteMetadata.title
  const posts = edges.filter(({node}) => {
    return !node.fields.draft
  })

  return (
    <Layout location={{pathName: `/tags/${tag}`}} title={siteTitle}>
      <SEO title={tag} />
      <Tag size={TAG_SIZE.LARGE} tag={{name: tag}}></Tag>
      {posts.map(({ node: post }) => <BlogPostItem post={post} key={post.fields.slug}/>)}
      <ShareBlockStandard {...HOME_SHARE_BUTTONS_CONTENT} />
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
      }
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
