import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import { ShareBlockStandard } from "react-custom-share";
import {HOME_SHARE_BUTTONS_CONTENT} from '../constants/home-share-buttons';
import { initializeFirebase } from '../notifications/notifications';
import { PINNED_REPOS } from "../data/projects-data";
import ProjectPortal from "../components/project-portal"


class BlogIndex extends React.Component {
  componentDidMount() {
    initializeFirebase();
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node: post }) => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredImgFluid = null
          if (post.frontmatter.featuredImage) {
            featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
          }
          return (
            <article key={post.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
                    {title}
                  </Link>
                </h3>
                {
                  featuredImgFluid ?
                  <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
                    <Img fluid={featuredImgFluid} style={{marginBottom: rhythm(1 / 4)}} />
                  </Link> :
                  null
                }
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}

        <div className="projects" style={{position: 'relative'}}>
          {(typeof window !== 'undefined' && 'HTMLPortalElement' in window) ? PINNED_REPOS.map((project) => {
            return (
              <ProjectPortal  key={project.id} project={project}/>
            )
          }) : null}
        </div>
        <ShareBlockStandard {...HOME_SHARE_BUTTONS_CONTENT} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
