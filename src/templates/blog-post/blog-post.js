import React from "react"
import "./blog-post.css"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm, scale } from "../../utils/typography"
import Img from "gatsby-image"
import { ShareBlockStandard } from "react-custom-share"
import { BLOG_SHARE_BUTTONS_CONTENT } from "../../constants/blog-share-buttons-content"
import Tags from "../../components/tags/tags"
import { TAG_SIZE } from "../../constants/tag-size"
import IonicCourse from "../../components/IonicCourse/IonicCourse"
import PromotionBanner from "../../components/PromotionBanner/PromotionBanner"
import ImageWithBg from "../../components/ImageWithBg/ImageWithBg"

const mdxShortCodes = {
  IonicCourse,
  PromotionBanner,
  ImageWithBg,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    let featuredImgFluid = null
    if (post.frontmatter.featuredImage) {
      featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
    }
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext
    const metaImage = `${slug}seo.jpg`

    const tags = post.frontmatter.tags.map(tag => ({ name: tag }))

    return (
      <Layout slug={slug} location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          isBlogPost={true}
          metaImage={
            featuredImgFluid
              ? `https://ahsanayaz.com${featuredImgFluid.src}`
              : metaImage
          }
          slug={slug}
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
                marginBottom: 0,
              }}
            >
              {post.frontmatter.date}
            </p>
            <div style={{ marginBottom: rhythm(1) }}>
              <Tags size={TAG_SIZE.SMALL} tags={tags} />
            </div>
          </header>
          <main>
            <MDXProvider components={mdxShortCodes}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </main>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <ShareBlockStandard
            {...BLOG_SHARE_BUTTONS_CONTENT({
              slug: post.fields.slug,
              title: post.frontmatter.title,
              description: post.frontmatter.description,
              media: post.frontmatter.featuredImage,
            })}
          />
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          {/* Post contents */}
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
