import React from "react"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

import Img from "gatsby-image"
import Tags from "../tags/tags"
import { TAG_SIZE } from "../../constants/tag-size"
import "./BlogPostItem.css"

const BLOG_POST_IMAGE_HEIGHT = 280

const BlogPostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  let featuredImgFluid = null
  if (post.frontmatter.featuredImage) {
    featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  }
  const { tags } = post.frontmatter
  const metaImage = `${post.fields.slug}seo.jpg`
  return (
    <article key={post.fields.slug}>
      <header>
        <div
          className="blog-header"
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            {title}
          </Link>
        </div>
        <div className="image-link">
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            <span>{title}</span>
            {featuredImgFluid ? (
              <Img
                alt={title}
                fluid={featuredImgFluid}
                imgStyle={{
                  maxHeight: BLOG_POST_IMAGE_HEIGHT,
                  objectFit: "contain",
                }}
                style={{
                  marginBottom: rhythm(1 / 4),
                  maxHeight: BLOG_POST_IMAGE_HEIGHT,
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt={title}
                  src={metaImage}
                  style={{
                    marginBottom: rhythm(1 / 4),
                    maxHeight: BLOG_POST_IMAGE_HEIGHT,
                    objectFit: "contain",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
            )}
          </Link>
        </div>

        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <Link
          style={{ boxShadow: `none`, color: "rgba(0, 0, 0, 0.9)" }}
          to={post.fields.slug}
        >
          <p
            style={{
              marginBottom: 0,
            }}
            dangerouslySetInnerHTML={{
              __html:
                (post.frontmatter.description || post.excerpt) +
                `... <span class="read-more-link" style="color: #5d1ad5;">Read More</span>`,
            }}
          />
        </Link>
        <div style={{ marginBottom: rhythm(1) }}>
          <Tags
            size={TAG_SIZE.SMALL}
            tags={tags.map(tag => ({ name: tag }))}
          ></Tags>
        </div>
      </section>
    </article>
  )
}

export default BlogPostItem
