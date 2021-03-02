import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tags from "../tags/tags"
import { TAG_SIZE } from "../../constants/tag-size"
import { rhythm } from "../../utils/typography"

import "./HomeTags.css"

const HomeTags = () => {
  const query = useStaticQuery(graphql`
    query TagsQuery {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const tags = query.allMdx.group.map(tag => ({
    name: tag.fieldValue,
    count: tag.totalCount,
  }))
  return (
    <div
      className="home-tags"
      style={{
        marginTop: rhythm(1),
        marginBottom: rhythm(1),
      }}
    >
      <h3 className="home-tags__heading">Tags Cloud</h3>
      <Tags size={TAG_SIZE.MEDIUM} tags={tags}></Tags>
      <div>
        If you can't find what you're looking for with this, try{" "}
        <a href="https://www.google.com/search?q=site%3Aahsanayaz.com+angular">
          using Google
        </a>
        .
      </div>
    </div>
  )
}

export default HomeTags
