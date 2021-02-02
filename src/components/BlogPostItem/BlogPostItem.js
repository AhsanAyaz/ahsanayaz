import React from 'react'
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

import Img from "gatsby-image"
import Tags from '../tags/tags'
import { TAG_SIZE } from '../../constants/tag-size'
const BlogPostItem = ({post}) => {
  const title = post.frontmatter.title || post.fields.slug
  let featuredImgFluid = null
  if (post.frontmatter.featuredImage) {
    featuredImgFluid =
      post.frontmatter.featuredImage.childImageSharp.fluid
  }
  const { tags } = post.frontmatter
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
        {featuredImgFluid ? (
          <Link style={{ boxShadow: `none` }} to={post.fields.slug}>
            <Img
              fluid={featuredImgFluid}
              style={{ marginBottom: rhythm(1 / 4) }}
            />
          </Link>
        ) : null}
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <Link
          style={{ boxShadow: `none`, color: "rgba(0, 0, 0, 0.9)" }}
          to={post.fields.slug}
        >
          <p
            style={{
              marginBottom: 0
            }}
            dangerouslySetInnerHTML={{
              __html:
                (post.frontmatter.description || post.excerpt) +
                `... <span style="color: #5d1ad5;">Read More</span>`,
            }}
          />
        </Link>
        <div style={{ marginBottom: rhythm(1) }}>
          <Tags size={TAG_SIZE.SMALL} tags={tags.map(tag => ({ name: tag }))}></Tags>
        </div>
      </section>
    </article>
  )
}

export default BlogPostItem
