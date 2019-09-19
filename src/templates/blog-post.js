import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Img from "gatsby-image"
import { ShareBlockStandard } from "react-custom-share"
import {BLOG_SHARE_BUTTONS_CONTENT} from '../constants/blog-share-buttons-content'
import { Disqus } from 'gatsby-plugin-disqus'
import {DISQUS_CONFIG} from '../constants/disqus-config';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    let featuredImgFluid = null
    if (post.frontmatter.featuredImage) {
      featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    }
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext

    const disqusConfig = DISQUS_CONFIG({
      title: post.frontmatter.title,
      location: this.props.location
    })

    return (
      <Layout slug={slug} location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.title}
            </h1>
            <div>
              {featuredImgFluid ? <Img fluid={featuredImgFluid} /> : null}
            </div>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <ShareBlockStandard {...BLOG_SHARE_BUTTONS_CONTENT({
            slug: post.fields.slug,
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            media: post.frontmatter.featuredImage
          })}/>
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          {/* Post contents */}
          <footer>
            <Disqus config={disqusConfig} />
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
`
